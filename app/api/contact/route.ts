import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const REQUIRED_FIELDS = ['name', 'phone', 'email', 'message'] as const;

interface ContactPayload {
  name: string;
  phone: string;
  email: string;
  company?: string;
  service?: string;
  message: string;
}

function buildTeamEmail(data: ContactPayload): string {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
      <div style="background: #7c3aed; padding: 24px 32px; border-radius: 8px 8px 0 0;">
        <h1 style="color: #ffffff; margin: 0; font-size: 22px;">New Contact Inquiry</h1>
        <p style="color: #e9d5ff; margin: 4px 0 0;">RBS Global Ventures — Website Form</p>
      </div>
      <div style="background: #ffffff; padding: 32px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; width: 160px; font-size: 14px;">Full Name</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-weight: 600;">${data.name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 14px;">Phone Number</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-weight: 600;">${data.phone}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 14px;">Email Address</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-weight: 600;">${data.email}</td>
          </tr>
          ${data.company ? `
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 14px;">Company</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-weight: 600;">${data.company}</td>
          </tr>` : ''}
          ${data.service ? `
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 14px;">Service Interest</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-weight: 600;">${data.service}</td>
          </tr>` : ''}
        </table>
        <div style="margin-top: 24px;">
          <p style="color: #6b7280; font-size: 14px; margin: 0 0 8px;">Message</p>
          <div style="background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 6px; padding: 16px; white-space: pre-wrap; font-size: 15px;">${data.message}</div>
        </div>
        <p style="margin: 24px 0 0; font-size: 12px; color: #9ca3af;">
          Submitted on ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST via rbsglobalventures.com
        </p>
      </div>
    </div>
  `;
}

function buildAutoReplyEmail(name: string): string {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
      <div style="background: #7c3aed; padding: 24px 32px; border-radius: 8px 8px 0 0;">
        <h1 style="color: #ffffff; margin: 0; font-size: 22px;">Thank You, ${name}!</h1>
        <p style="color: #e9d5ff; margin: 4px 0 0;">We've received your inquiry</p>
      </div>
      <div style="background: #ffffff; padding: 32px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
        <p style="font-size: 15px; line-height: 1.6; margin: 0 0 16px;">
          Thank you for reaching out to <strong>RBS Global Ventures</strong>. We have received your message and our team will get back to you as soon as possible.
        </p>
        <p style="font-size: 15px; line-height: 1.6; margin: 0 0 24px;">
          Our typical response time is within <strong>1–2 business days</strong>. For urgent matters, you can also reach us directly:
        </p>
        <div style="background: #f5f3ff; border: 1px solid #ddd6fe; border-radius: 8px; padding: 20px;">
          <p style="margin: 0 0 8px; font-size: 14px;"><strong>📞 Phone:</strong> +91 86819 71471</p>
          <p style="margin: 0 0 8px; font-size: 14px;"><strong>📧 Email:</strong> rbsglobalventures@gmail.com</p>
          <p style="margin: 0; font-size: 14px;"><strong>🕐 Hours:</strong> Mon–Sat 9:00 AM – 7:00 PM &nbsp;|&nbsp; Sun 10:00 AM – 4:00 PM (IST)</p>
        </div>
        <p style="margin: 24px 0 0; font-size: 13px; color: #9ca3af;">
          This is an automated confirmation. Please do not reply to this email.<br/>
          RBS Global Ventures · Arumuganeri, Tuticorin District, Tamil Nadu, India
        </p>
      </div>
    </div>
  `;
}

export async function POST(req: Request) {
  let data: ContactPayload;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  for (const field of REQUIRED_FIELDS) {
    if (!data[field] || String(data[field]).trim() === '') {
      return NextResponse.json({ error: `Missing required field: ${field}` }, { status: 400 });
    }
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
  }

  const { SMTP_SENDER, SMTP_APP_PASSWORD, RECIPIENT_EMAILS } = process.env;

  if (!SMTP_SENDER || !SMTP_APP_PASSWORD || !RECIPIENT_EMAILS) {
    console.error('Missing SMTP environment variables');
    return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
  }

  const recipients = RECIPIENT_EMAILS.split(',').map((e) => e.trim()).filter(Boolean);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: SMTP_SENDER,
      pass: SMTP_APP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: `"RBS Global Ventures" <${SMTP_SENDER}>`,
      to: recipients,
      subject: `New Inquiry from ${data.name} — RBS Global Ventures`,
      html: buildTeamEmail(data),
      replyTo: data.email,
    });

    await transporter.sendMail({
      from: `"RBS Global Ventures" <${SMTP_SENDER}>`,
      to: data.email,
      subject: 'We received your inquiry — RBS Global Ventures',
      html: buildAutoReplyEmail(data.name),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Email send error:', err);
    return NextResponse.json({ error: 'Failed to send email. Please try again.' }, { status: 500 });
  }
}
