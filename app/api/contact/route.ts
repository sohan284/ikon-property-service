import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with the API key from environment variables
const resend = new Resend('re_H2T1p79c_NwtktxKr7s8neiCTEv5zXfsv');

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields.' },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: 'Ikon Property Service Contact Form <onboarding@resend.dev>',
      // Note: onboarding@resend.dev is used for testing. 
      // Before going to production, verify your domain in Resend and update the 'from' address.
      to: ['sr.sohan088@gmail.com'], // This is the address from ContactInfo.tsx
      subject: `New Website Enquiry: ${subject}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2a3844; border-bottom: 2px solid #AF201F; padding-bottom: 10px;">New Contact Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 20px;">
            <p style="margin-top: 0; font-weight: bold; color: #2a3844;">Message:</p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
