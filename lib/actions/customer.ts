"use server";

export async function updateCustomer(formData: FormData) {
  console.log("================================");
  console.log("UPDATE CUSTOMER");
  console.log("================================");

  for (const [key, value] of formData.entries()) {
    console.log(`${key}: ${value}`);
  }
}