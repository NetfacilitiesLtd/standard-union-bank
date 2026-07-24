"use server";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export async function updateCustomer(formData: FormData) {
  const customerId = formData.get("customerId") as string;

  const customer = await prisma.customer.findUnique({
    where: {
      id: customerId,
    },
    include: {
      application: true,
    },
  });

  if (!customer) {
    throw new Error("Customer not found.");
  }

  await prisma.application.update({
    where: {
      id: customer.application.id,
    },
    data: {
      firstName: formData.get("firstName") as string,
      middleName: (formData.get("middleName") as string) || null,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      phoneNumber: formData.get("phoneNumber") as string,
      occupation: formData.get("occupation") as string,
      employer: (formData.get("employer") as string) || null,
      residentialAddress: formData.get("residentialAddress") as string,
      country: formData.get("country") as string,
      state: formData.get("state") as string,
      city: formData.get("city") as string,
      postalCode: formData.get("postalCode") as string,
      preferredCurrency: formData.get("preferredCurrency") as string,
    },
  });

  await prisma.customer.update({
    where: {
      id: customerId,
    },
    data: {
      accountStatus: formData.get("accountStatus") as string,
    },
  });

  redirect(`/admin/customers/${customerId}`);
}