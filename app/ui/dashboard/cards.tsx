type CardProps = {
  title: string;
  value: string | number;
};

function Card({ title, value }: CardProps) {
  return (
    <div className="rounded-xl bg-white p-4 shadow">
      <h3 className="text-sm text-gray-500">{title}</h3>
      <p className="text-2xl font-bold mt-2">{value}</p>
    </div>
  );
}

export default function Cards({
  totalInvoices,
  totalPaid,
  totalPending,
}: {
  totalInvoices: number;
  totalPaid: number;
  totalPending: number;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card title="Total Invoices" value={totalInvoices} />
      <Card title="Paid" value={totalPaid} />
      <Card title="Pending" value={totalPending} />
    </div>
  );
}
