import { fetchInvoices } from "@/app/lib/data";
import CreateInvoiceForm from "@/app/ui/dashboard/create-form";
import InvoiceTable from "@/app/ui/dashboard/invoice-table";

export default async function InvoicePage() {
  const invoices = await fetchInvoices();
  
    return (
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Invoices</h1>
  
        {/* Create Form */}
        <CreateInvoiceForm />
  
        {/* Table */}
        <InvoiceTable invoices={invoices} />
      </div>
    );
}
