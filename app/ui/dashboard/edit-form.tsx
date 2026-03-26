'use client';

import { updateInvoice } from '@/app/lib/actions';

type Invoice = {
  id: string;
  customer: string;
  amount: number;
  status: 'paid' | 'pending';
};

export default function EditInvoiceForm({ invoice }: { invoice: Invoice }) {
  return (
    <form
      action={updateInvoice.bind(null, invoice.id)}
      className="space-y-4 bg-white p-4 rounded shadow"
    >
      <h2 className="text-lg font-semibold">Edit Invoice</h2>

      <input
        name="customer"
        defaultValue={invoice.customer}
        className="w-full border p-2 rounded"
        required
      />

      <input
        name="amount"
        type="number"
        defaultValue={invoice.amount}
        className="w-full border p-2 rounded"
        required
      />

      <select
        name="status"
        defaultValue={invoice.status}
        className="w-full border p-2 rounded"
        required
      >
        <option value="paid">Paid</option>
        <option value="pending">Pending</option>
      </select>

      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Update
      </button>
    </form>
  );
}