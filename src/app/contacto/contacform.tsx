"use client";

import { useMemo, useState } from "react";

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  consent: boolean;
};

const initialState: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
  consent: false,
};

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState<string>("");

  const whatsappHref = useMemo(() => {
    const phoneE164 = "34678856261"; // +34 678 856 261 sin espacios
    const text = `Hola Phyto Supplies,
Soy ${form.name || "[Nombre]"}${form.company ? ` (${form.company})` : ""}.
Asunto: ${form.subject || "[Asunto]"}.
Mensaje: ${form.message || "[Mensaje]"}.

Mi email: ${form.email || "[Email]"}${form.phone ? ` | Tel: ${form.phone}` : ""}`;
    return `https://wa.me/${phoneE164}?text=${encodeURIComponent(text)}`;
  }, [form]);

  const canSubmit =
    form.name.trim().length >= 2 &&
    isEmail(form.email) &&
    form.subject.trim().length >= 3 &&
    form.message.trim().length >= 10 &&
    form.consent &&
    status !== "sending";

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || "No se pudo enviar el mensaje.");
      }

      setStatus("sent");
      setForm(initialState);
    } catch (err: any) {
      setStatus("error");
      setError(err?.message || "Error inesperado.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      {/* fila 1 */}
      <div className="grid gap-4 md:grid-cols-2">
        <Field
          label="Nombre y apellidos"
          placeholder="Tu nombre"
          value={form.name}
          onChange={(v) => setForm((s) => ({ ...s, name: v }))}
          required
        />
        <Field
          label="Empresa"
          placeholder="Opcional"
          value={form.company}
          onChange={(v) => setForm((s) => ({ ...s, company: v }))}
        />
      </div>

      {/* fila 2 */}
      <div className="grid gap-4 md:grid-cols-2">
        <Field
          label="Email"
          placeholder="tu@email.com"
          value={form.email}
          onChange={(v) => setForm((s) => ({ ...s, email: v }))}
          required
          type="email"
        />
        <Field
          label="Teléfono"
          placeholder="Opcional"
          value={form.phone}
          onChange={(v) => setForm((s) => ({ ...s, phone: v }))}
        />
      </div>

      <Field
        label="Asunto"
        placeholder="Solicitud de información / Colaboración / I+D..."
        value={form.subject}
        onChange={(v) => setForm((s) => ({ ...s, subject: v }))}
        required
      />

      <TextArea
        label="Mensaje"
        placeholder="Describe tu necesidad, plazos, volúmenes, requisitos regulatorios, etc."
        value={form.message}
        onChange={(v) => setForm((s) => ({ ...s, message: v }))}
        required
      />

      <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-4">
        <label className="flex cursor-pointer items-start gap-3 text-sm text-neutral-700">
          <input
            type="checkbox"
            className="mt-1 h-4 w-4 rounded border-neutral-300"
            checked={form.consent}
            onChange={(e) => setForm((s) => ({ ...s, consent: e.target.checked }))}
          />
          <span>
            Acepto que Phyto Supplies trate mis datos para responder a esta solicitud. No se usarán
            para fines comerciales ajenos a esta comunicación.
          </span>
        </label>
      </div>

      {/* acciones */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={!canSubmit}
          className="inline-flex h-11 items-center justify-center rounded-xl bg-neutral-900 px-5 text-sm font-medium text-white shadow-sm transition disabled:cursor-not-allowed disabled:opacity-50"
        >
          {status === "sending" ? "Enviando..." : "Enviar mensaje"}
        </button>

        <a
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-11 items-center justify-center rounded-xl border border-neutral-200 bg-white px-5 text-sm font-medium text-neutral-900 shadow-sm transition hover:bg-neutral-50"
        >
          Contactar por WhatsApp
        </a>
      </div>

      {/* feedback */}
      {status === "sent" && (
        <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900">
          Mensaje enviado correctamente. Te responderemos en 24–48 h laborables.
        </div>
      )}

      {status === "error" && (
        <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-900">
          {error || "No se pudo enviar el mensaje. Inténtalo de nuevo o usa WhatsApp."}
        </div>
      )}
    </form>
  );
}

function Field(props: {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-neutral-900">
        {props.label}
        {props.required ? <span className="text-red-600"> *</span> : null}
      </span>
      <input
        type={props.type || "text"}
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        placeholder={props.placeholder}
        className="mt-2 h-11 w-full rounded-xl border border-neutral-200 bg-white px-4 text-sm text-neutral-900 shadow-sm outline-none transition focus:border-neutral-400"
        autoComplete="on"
      />
    </label>
  );
}

function TextArea(props: {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-neutral-900">
        {props.label}
        {props.required ? <span className="text-red-600"> *</span> : null}
      </span>
      <textarea
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        placeholder={props.placeholder}
        rows={6}
        className="mt-2 w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 shadow-sm outline-none transition focus:border-neutral-400"
      />
    </label>
  );
}
