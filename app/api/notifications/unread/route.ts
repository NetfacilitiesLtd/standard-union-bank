import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";
import { getCurrentCustomer } from "@/lib/currentCustomer";

export async function GET() {
  const customer = await getCurrentCustomer();

  const unreadNotifications = await prisma.notification.count({
    where: {
      customerId: customer.id,
      isRead: false,
    },
  });

  return NextResponse.json({
    unreadNotifications,
  });
}