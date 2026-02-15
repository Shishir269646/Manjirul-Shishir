// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const { name, email, message } = await request.json();

        // 1. Validate incoming data
        if (!name || !email || !message) {
            return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
        }

        // 2. Create a Nodemailer transporter
        //    Ensure you have your environment variables set up:
        //    NEXT_PUBLIC_SMTP_HOST, NEXT_PUBLIC_SMTP_PORT, NEXT_PUBLIC_SMTP_USER, NEXT_PUBLIC_SMTP_PASS
        const transporter = nodemailer.createTransport({
            host: process.env.NEXT_PUBLIC_SMTP_HOST,
            port: parseInt(process.env.NEXT_PUBLIC_SMTP_PORT || '587', 10), // Use 465 for SSL/TLS, 587 for STARTTLS
            secure: false, // Use 'true' if port is 465 (SSL), 'false' for other ports like 587 (TLS)
            auth: {
                user: process.env.NEXT_PUBLIC_SMTP_USER,
                pass: process.env.NEXT_PUBLIC_SMTP_PASS,
            },
        });

        // 3. Define email options
        const mailOptions = {
            from: process.env.NEXT_PUBLIC_SMTP_USER, // Your sender email
            to: process.env.NEXT_PUBLIC_RECIPIENT_EMAIL, // Recipient's email, e.g., your own email
            subject: `Contact Form Submission from ${name}`,
            html: `
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong> ${message}</p>
            `,
        };

        // 4. Send the email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ message: 'Failed to send email.' }, { status: 500 });
    }
}
