import { Suspense } from "react";
import { fetchInvoices } from "@/app/lib/data";
import CardsWrapper from "@/app/ui/dashboard/cards-wrapper";
import { CardsSkeleton } from "@/app/ui/dashboard/skeletons";

export default async function Page() {
  const invoices = await fetchInvoices();

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>

      <Suspense fallback={<CardsSkeleton />}>
        <CardsWrapper />
      </Suspense>

      <div>
        <h2 className="text-xl font-semibold mb-2">Recent Invoices</h2>

        <ul className="space-y-2">
          {invoices.map((invoice) => (
            <li key={invoice.id} className="p-4 bg-white rounded shadow">
              <p>
                <strong>{invoice.customer}</strong>
              </p>
              <p>₹{invoice.amount}</p>
              <p
                className={
                  invoice.status === "paid"
                    ? "text-green-600"
                    : "text-yellow-600"
                }
              >
                {invoice.status}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
