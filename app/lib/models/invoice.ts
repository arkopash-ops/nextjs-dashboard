import mongoose, { Document, Schema, models } from 'mongoose';
import { IInvoice } from '../types/iInvoice';

export interface InvoiceDocument extends IInvoice, Document { }

const InvoiceSchema = new Schema<InvoiceDocument>({
    customer: { type: String, required: true },
    amount: { type: Number, required: true },
    status: {
        type: String,
        enum: ['paid', 'pending'],
        required: true,
    },
}, { timestamps: true });

export const Invoice =
    models.Invoice || mongoose.model<InvoiceDocument>('Invoice', InvoiceSchema);
