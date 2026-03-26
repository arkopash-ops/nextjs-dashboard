"use client";

import { createInvoice } from "@/app/lib/actions";

export default function CreateInvoiceForm() {
  return (
    <form
      action={createInvoice}
      className="space-y-4 bg-white p-4 rounded shadow"
    >

      <input
        name="customer"
        placeholder="Customer name"
        className="w-full border p-2 rounded"
        required
      />

      <input
        name="amount"
        type="number"
        placeholder="Amount"
        className="w-full border p-2 rounded"
        required
      />

      <select name="status" className="w-full border p-2 rounded" required>
        <option value="">Select status</option>
        <option value="paid">Paid</option>
        <option value="pending">Pending</option>
      </select>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Create
      </button>
    </form>
  );
}
