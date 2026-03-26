"use client";

import { deleteInvoice } from "@/app/lib/actions";

export default function DeleteButton({ id }: { id: string }) {
  return (
    <form action={deleteInvoice.bind(null, id)}>
      <button
        type="submit"
        className="mt-2 bg-red-500 text-white px-3 py-1 rounded"
      >
        Delete
      </button>
    </form>
  );
}
