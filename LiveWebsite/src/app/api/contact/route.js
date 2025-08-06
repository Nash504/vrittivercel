// app/api/contact/route.js

import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, userType, message } = body;

    // Send the email using Resend
    const { data, error } = await resend.emails.send({
      from: process.env.FROM_EMAIL, // Your "from" address
      to: [process.env.TO_EMAIL], // Where you want to receive the email
      subject: `New Contact Form Submission from ${name}`,
      reply_to: email,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>User Type:</strong> ${userType}</p>
        <hr />
        <h2>Message:</h2>
        <p>${message}</p>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ message: "Email sent successfully!", data });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
