'use server';

import { connectToDB } from './mongodb';
import { Invoice } from './models/invoice';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createInvoice(formData: FormData) {
    await connectToDB();

    const customer = formData.get('customer') as string;
    const amount = Number(formData.get('amount'));
    const status = formData.get('status') as 'paid' | 'pending';

    if (!customer || !amount || !status) {
        throw new Error('Missing fields');
    }

    await Invoice.create({
        customer,
        amount,
        status,
    });

    revalidatePath('/dashboard');
}


export async function deleteInvoice(id: string) {
    await connectToDB();

    await Invoice.findByIdAndDelete(id);

    revalidatePath('/dashboard');
}

export async function updateInvoice(id: string, formData: FormData) {
    await connectToDB();

    const customer = formData.get('customer') as string;
    const amount = Number(formData.get('amount'));
    const status = formData.get('status') as 'paid' | 'pending';

    await Invoice.findByIdAndUpdate(id, {
        customer,
        amount,
        status,
    });

    revalidatePath('/dashboard');

    redirect('/dashboard');
}
