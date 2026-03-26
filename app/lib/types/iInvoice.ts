export interface IInvoice {
    customer: string;
    amount: number;
    status: 'paid' | 'pending';
}

export interface InvoiceDTO {
    id: string;
    customer: string;
    amount: number;
    status: 'paid' | 'pending';
};
