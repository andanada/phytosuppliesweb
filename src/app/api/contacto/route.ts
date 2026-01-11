import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test((v || "").trim());
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const name = String(body?.name || "").trim();
    const company = String(body?.company || "").trim();
    const email = String(body?.email || "").trim();
    const phone = String(body?.phone || "").trim();
    const subject = String(body?.subject || "").trim();
    const message = String(body?.message || "").trim();
    const consent = Boolean(body?.consent);

    if (name.length < 2) return NextResponse.json({ error: "Nombre inválido." }, { status: 400 });
    if (!isEmail(email)) return NextResponse.json({ error: "Email inválido." }, { status: 400 });
    if (subject.length < 3) return NextResponse.json({ error: "Asunto inválido." }, { status: 400 });
    if (message.length < 10) return NextResponse.json({ error: "Mensaje demasiado corto." }, { status: 400 });
    if (!consent) return NextResponse.json({ error: "Debes aceptar el consentimiento." }, { status: 400 });

    // Config SMTP (recomendado: usar tu servidor de correo / proveedor)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const to = process.env.CONTACT_TO || "info@phytosupplies.com";

    const finalSubject = `[Web] ${subject}`;
    const text = [
      `Nombre: ${name}`,
      `Empresa: ${company || "-"}`,
      `Email: ${email}`,
      `Teléfono: ${phone || "-"}`,
      "",
      `Mensaje:`,
      message,
    ].join("\n");

    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER || to,
      to,
      replyTo: email,
      subject: finalSubject,
      text,
    });

    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ error: "Error enviando el mensaje." }, { status: 500 });
  }
}
