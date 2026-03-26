import Link from "next/link";
import DeleteButton from "./delete-button";

interface Invoice {
  id: string;
  customer: string;
  amount: number;
  status: "paid" | "pending";
}

export default function InvoiceTable({ invoices }: { invoices: Invoice[] }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b">
            <th className="p-2">Customer</th>
            <th className="p-2">Amount</th>
            <th className="p-2">Status</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>

        <tbody>
          {invoices.map((invoice) => (
            <tr key={invoice.id} className="border-b">
              <td className="p-2">{invoice.customer}</td>
              <td className="p-2">₹{invoice.amount}</td>
              <td className="p-2">
                <span
                  className={
                    invoice.status === "paid"
                      ? "text-green-600"
                      : "text-yellow-600"
                  }
                >
                  {invoice.status}
                </span>
              </td>

              <td className="p-2 space-x-2">
                <Link
                  href={`/dashboard/invoices/${invoice.id}/edit`}
                  className="text-blue-600"
                >
                  Edit
                </Link>

                <DeleteButton id={invoice.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
