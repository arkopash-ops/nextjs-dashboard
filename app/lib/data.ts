import { Invoice, InvoiceDocument } from "./models/invoice";
import { connectToDB } from "./mongodb";
import { InvoiceDTO } from "./types/iInvoice";

export type Invoice = {
    id: string;
    customer: string;
    amount: number;
    status: 'pending' | 'paid';
};


export const invoices: Invoice[] = [
    {
        id: '1',
        customer: 'John Doe',
        amount: 500,
        status: 'paid',
    },
    {
        id: '2',
        customer: 'Jane Smith',
        amount: 300,
        status: 'pending',
    },
    {
        id: '3',
        customer: 'Alice Johnson',
        amount: 700,
        status: 'paid',
    },
];


export async function fetchDashboardStats() {
    const data = await fetchInvoices();

    const totalInvoices = data.length;
    const totalPaid = data.filter(i => i.status === 'paid').length;
    const totalPending = data.filter(i => i.status === 'pending').length;

    return {
        totalInvoices,
        totalPaid,
        totalPending,
    };
}


export async function fetchInvoices(): Promise<InvoiceDTO[]> {
    await connectToDB();

    const data = await Invoice.find().lean<InvoiceDocument[]>();

    return data.map((item) => ({
        id: item._id.toString(),
        customer: item.customer,
        amount: item.amount,
        status: item.status,
    }));
}
