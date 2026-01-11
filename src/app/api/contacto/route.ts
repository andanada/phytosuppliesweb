import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

function isEmail(v: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test((v || "").trim());
}

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const nombre = String(body?.nombre || "").trim();
        const empresa = String(body?.empresa || "").trim();
        const email = String(body?.email || "").trim();
        const telefono = String(body?.telefono || "").trim();
        const asunto = String(body?.asunto || "").trim();
        const mensaje = String(body?.mensaje || "").trim();
        const consentimiento = Boolean(body?.consentimiento);

        if (nombre.length < 2) return NextResponse.json({ error: "Nombre inválido." }, { status: 400 });
        if (!isEmail(email)) return NextResponse.json({ error: "Email inválido." }, { status: 400 });
        if (asunto.length < 3) return NextResponse.json({ error: "Asunto inválido." }, { status: 400 });
        if (mensaje.length < 10) return NextResponse.json({ error: "Mensaje demasiado corto." }, { status: 400 });
        if (!consentimiento) return NextResponse.json({ error: "Debes aceptar el consentimiento." }, { status: 400 });

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

        await transporter.sendMail({
            from: process.env.SMTP_FROM || process.env.SMTP_USER || to,
            to,
            replyTo: email,
            subject: `[Web] ${asunto}`,
            text: [
                `Nombre: ${nombre}`,
                `Empresa: ${empresa || "-"}`,
                `Email: ${email}`,
                `Teléfono: ${telefono || "-"}`,
                "",
                "Mensaje:",
                mensaje,
            ].join("\n"),
        });

        return NextResponse.json({ ok: true });
    } catch {
        return NextResponse.json({ error: "Error enviando el mensaje." }, { status: 500 });
    }
}
