import { get } from "@vercel/blob";
import { NextResponse } from "next/server";
import { getCurrentCustomer } from "@/lib/currentCustomer";

export async function GET() {
  try {
    const customer = await getCurrentCustomer();

    const passportPhoto = customer.application.passportPhoto;

    if (!passportPhoto) {
      return new NextResponse("No passport photo", {
        status: 404,
      });
    }

    const pathname = passportPhoto.startsWith("http")
      ? new URL(passportPhoto).pathname
      : passportPhoto;

    const result = await get(pathname, {
      access: "private",
    });

    if (!result || result.statusCode !== 200) {
      return new NextResponse("Passport photo not found", {
        status: 404,
      });
    }

    return new NextResponse(result.stream, {
      status: 200,
      headers: {
        "Content-Type": result.blob.contentType || "image/jpeg",
        "Cache-Control": "private, no-store",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch (error) {
    console.error("Passport photo error:", error);

    return new NextResponse("Unable to load passport photo", {
      status: 500,
    });
  }
}