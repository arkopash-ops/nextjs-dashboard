import { fetchDashboardStats } from "@/app/lib/data";
import Cards from "./cards";

export default async function CardsWrapper() {
  const stats = await fetchDashboardStats();

  return (
    <Cards
      totalInvoices={stats.totalInvoices}
      totalPaid={stats.totalPaid}
      totalPending={stats.totalPending}
    />
  );
}
