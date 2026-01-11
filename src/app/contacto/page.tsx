import ContactForm from "@/components/contact/ContactForm";

export const metadata = {
    title: "Contacto | Phyto Supplies",
    description:
        "Contacta con Phyto Supplies para colaboración, suministro, proyectos I+D o consultoría técnica.",
};

export default function ContactPage() {
    return (
        <main className="mx-auto w-full max-w-6xl px-6 py-14">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
                {/* Columna izquierda: copy corporativo */}
                <section>
                    <h1 className="text-3xl font-semibold tracking-tight">
                        Contacto
                    </h1>
                    <p className="mt-3 text-sm text-neutral-600">
                        Escríbenos para solicitudes de suministro, proyectos de I+D, colaboración regulatoria
                        o consultoría técnica. Respondemos en 24–48 h laborables.
                    </p>

                    <div className="mt-8 rounded-2xl border border-neutral-200 bg-white p-6">
                        <h2 className="text-base font-semibold">Canales directos</h2>
                        <div className="mt-4 space-y-3 text-sm text-neutral-700">
                            <div className="flex items-start justify-between gap-4">
                                <span className="text-neutral-500">Email</span>
                                <a
                                    className="font-medium text-neutral-900 underline underline-offset-4"
                                    href="mailto:info@phytosupplies.com"
                                >
                                    info@phytosupplies.com
                                </a>
                            </div>
                            <div className="flex items-start justify-between gap-4">
                                <span className="text-neutral-500">WhatsApp</span>
                                <a
                                    className="font-medium text-neutral-900 underline underline-offset-4"
                                    href="https://wa.me/34678856261?text=Hola%20Phyto%20Supplies%2C%20quiero%20informaci%C3%B3n%20sobre..."
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    +34 678 856 261
                                </a>
                            </div>
                            <div className="flex items-start justify-between gap-4">
                                <span className="text-neutral-500">Ubicación</span>
                                <span className="text-right font-medium text-neutral-900">
                                    Manresa (Barcelona), España
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
                        <h3 className="text-sm font-semibold text-neutral-900">
                            Nota de confidencialidad
                        </h3>
                        <p className="mt-2 text-sm text-neutral-600">
                            Si necesitas compartir documentación sensible, indica “NDA” en el asunto
                            y te enviaremos el procedimiento.
                        </p>
                    </div>
                </section>

                {/* Columna derecha: formulario */}
                <section className="rounded-2xl border border-neutral-200 bg-white p-6 lg:p-8">
                    <h2 className="text-base font-semibold">Formulario</h2>
                    <p className="mt-1 text-sm text-neutral-600">
                        Completa los datos y nos pondremos en contacto.
                    </p>
                    <div className="mt-6">
                        <ContactForm />
                    </div>
                </section>
            </div>
        </main>
    );
}
