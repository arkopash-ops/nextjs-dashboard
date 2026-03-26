import { fetchInvoiceById } from "@/app/lib/data";
import EditInvoiceForm from "@/app/ui/dashboard/edit-form";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const invoice = await fetchInvoiceById(id);

  if (!invoice) {
    return <p>Invoice not found</p>;
  }

  return <EditInvoiceForm invoice={invoice} />;
}
