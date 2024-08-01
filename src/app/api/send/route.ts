import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { EmailTemplate } from "./EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest, res: NextResponse) {
  const { email, subject, message } = await req.json();
  if (!subject || !message) {
    return NextResponse.json({ error: "All fields are required" });
  }

  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["icediver@live.ru", email],
      subject: subject,
      react: EmailTemplate({ subject, message, email }),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
