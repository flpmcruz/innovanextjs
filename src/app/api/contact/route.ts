import { NextResponse } from "next/server";
import * as yup from "yup";
import { schemaContact } from "@/utils/schemas/contact";
import { checkCaptcha } from "@/utils/checkCaptcha";
import { contactTemplate, sendMail } from "@/utils/emails/";
import { sendSMS } from "@/utils/smsTwillio";

export async function POST(request: Request) {
  const { name, email, captcha, phone, message } = await request.json();
  try {
    await schemaContact.validate({ name, email, captcha, phone, message });
    if (!captcha) throw new Error("Captcha is required");
    const verify = await checkCaptcha(captcha);
    if (!verify) throw new Error("Captcha is required");

    const info = {
      to: process.env.SMTP_EMAIL,
      subject: "Un cliente le ha contactado",
      msg: contactTemplate(name, email, phone, message),
    };
    await sendMail(info);

    await sendSMS(
      `Un cliente le ha contactado: ${name} ${email} ${phone} ${message}`
    );

    return NextResponse.json(
      { ok: true, message: "Message sent!!!" },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      return NextResponse.json(
        { ok: false, message: error.message },
        { status: 400 }
      );
    } else {
      return NextResponse.json(
        { ok: false, message: "Someting went wrong" },
        { status: 400 }
      );
    }
  }
}
