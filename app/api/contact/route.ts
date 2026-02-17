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
        //    SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, RECIPIENT_EMAIL
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: 465, // Explicitly use port 465 for SSL/TLS
            secure: true, // Use 'true' for port 465 (SSL/TLS)
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // 3. Define email options
        const mailOptions = {
            from: process.env.SMTP_USER, // Your sender email
            to: process.env.RECIPIENT_EMAIL, // Recipient's email, e.g., your own email
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
    } catch (error: any) {
        console.error('Error sending email:', error.message || error);
        return NextResponse.json({ message: 'Failed to send email.' }, { status: 500 });
    }
}
