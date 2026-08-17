import { NextResponse } from "next/server";
import PDFDocument from "pdfkit";

import { getCurrentCustomer } from "@/lib/currentCustomer";

export const runtime = "nodejs";

export async function GET() {
  try {
    const customer = await getCurrentCustomer();

    const fullName = [
      customer.application.firstName,
      customer.application.middleName,
      customer.application.lastName,
    ]
      .filter(Boolean)
      .join(" ");

    const currency = customer.application.preferredCurrency;

    const currencySymbols: Record<string, string> = {
      USD: "$",
      GBP: "£",
      EUR: "€",
      GHS: "GH₵",
    };

    const symbol = currencySymbols[currency] ?? currency;

    const document = new PDFDocument({
      size: "A4",
      margin: 50,
    });

    const chunks: Buffer[] = [];

    document.on("data", (chunk) => {
      chunks.push(chunk);
    });

    const pdfPromise = new Promise<Buffer>((resolve, reject) => {
      document.on("end", () => {
        resolve(Buffer.concat(chunks));
      });

      document.on("error", reject);
    });

    // Header
    document
      .fontSize(22)
      .font("Helvetica-Bold")
      .text("STANDARD UNION BANK", { align: "center" });

    document
      .fontSize(11)
      .font("Helvetica")
      .text("Account Statement", { align: "center" });

    document.moveDown(2);

    // Customer information
    document
      .fontSize(11)
      .font("Helvetica-Bold")
      .text("Customer Information");

    document.moveDown(0.5);

    document
      .font("Helvetica")
      .text(`Customer Name: ${fullName}`)
      .text(`Account Number: ${customer.accountNumber}`)
      .text(`Account Type: ${customer.application.accountType}`)
      .text(`Currency: ${currency}`)
      .text(`Account Status: ${customer.accountStatus}`);

    document.moveDown(1.5);

    // Balance
    document
      .fontSize(14)
      .font("Helvetica-Bold")
      .text("Current Balance");

    document
      .fontSize(20)
      .font("Helvetica-Bold")
      .text(
        `${symbol}${customer.balance.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}`
      );

    document.moveDown(2);

    // Transactions heading
    document
      .fontSize(14)
      .font("Helvetica-Bold")
      .text("Transaction History");

    document.moveDown(0.8);

    // Table header
    const tableTop = document.y;

    document
      .fontSize(9)
      .font("Helvetica-Bold")
      .text("Date", 50, tableTop, { width: 65 })
      .text("Description", 115, tableTop, { width: 150 })
      .text("Reference", 265, tableTop, { width: 100 })
      .text("Type", 365, tableTop, { width: 70 })
      .text("Amount", 435, tableTop, {
        width: 110,
        align: "right",
      });

    document
      .moveTo(50, tableTop + 15)
      .lineTo(545, tableTop + 15)
      .stroke();

    document.y = tableTop + 25;

    // Transactions
    for (const transaction of customer.transactions) {
      const rowTop = document.y;

      if (rowTop > 730) {
        document.addPage();

        document
          .fontSize(14)
          .font("Helvetica-Bold")
          .text("Transaction History (continued)");

        document.moveDown();

        document.y = document.y + 5;
      }

      const isDeposit =
        transaction.type === "Deposit" ||
        transaction.type === "Transfer In";

      const formattedDate = new Date(
        transaction.transactionDate
      ).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });

      const formattedAmount = `${isDeposit ? "+" : "-"}${symbol}${transaction.amount.toLocaleString(
        undefined,
        {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }
      )}`;

      const currentY = document.y;

      document
        .fontSize(8)
        .font("Helvetica")
        .text(formattedDate, 50, currentY, { width: 65 })
        .text(transaction.description || "-", 115, currentY, {
          width: 150,
        })
        .text(transaction.reference || "-", 265, currentY, {
          width: 100,
        })
        .text(transaction.type, 365, currentY, {
          width: 70,
        })
        .text(formattedAmount, 435, currentY, {
          width: 110,
          align: "right",
        });

      document.y = currentY + 25;

      document
        .moveTo(50, document.y - 8)
        .lineTo(545, document.y - 8)
        .strokeOpacity(0.2)
        .stroke()
        .strokeOpacity(1);
    }

    if (customer.transactions.length === 0) {
      document
        .fontSize(10)
        .font("Helvetica")
        .text("No transactions found.", {
          align: "center",
        });
    }

    // Footer
    document.moveDown(2);

    document
      .fontSize(9)
      .font("Helvetica")
      .text(
        `Statement generated on ${new Date().toLocaleDateString(
          "en-GB",
          {
            day: "2-digit",
            month: "long",
            year: "numeric",
          }
        )}`,
        { align: "center" }
      );

    document
      .fontSize(8)
      .fillColor("#64748b")
      .text(
        "This statement is generated electronically by Standard Union Bank.",
        {
          align: "center",
        }
      );

    document.end();

    const pdfBuffer = await pdfPromise;

    return new NextResponse(pdfBuffer as BodyInit, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="standard-union-bank-statement-${customer.accountNumber}.pdf"`,
      },
    });
  } catch (error) {
    console.error("Statement generation error:", error);

    return NextResponse.json(
      {
        error: "Unable to generate statement.",
      },
      {
        status: 500,
      }
    );
  }
}