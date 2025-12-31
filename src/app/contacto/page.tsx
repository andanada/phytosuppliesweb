export default function ContactoPage() {
    return (
        <main>
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute -top-40 left-1/2 h-[720px] w-[720px] -translate-x-1/2 rounded-full bg-emerald-200/35 blur-3xl" />
                    <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-gray-50" />
                </div>

                <div className="mx-auto max-w-6xl px-4 py-16">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 rounded-full border bg-white/80 px-3 py-1 text-xs text-gray-700">
                            <span className="h-2 w-2 rounded-full bg-emerald-700" />
                            Contacto · Propuestas · Colaboración
                        </div>

                        <h1 className="mt-7 text-4xl font-semibold tracking-tight md:text-5xl">
                            Contacto<span className="text-gray-500"> y solicitudes</span>
                        </h1>

                        <p className="mt-5 text-lg leading-relaxed text-gray-600">
                            Cuéntanos tu caso de uso (producción, conservación, I+D, colaboración). Te responderemos con un encaje operativo y próximos pasos.
                        </p>
                    </div>

                    <div className="mt-10 grid gap-8 lg:grid-cols-2">
                        {/* FORM (por ahora sin backend) */}
                        <div className="rounded-3xl border bg-white p-8 shadow-sm">
                            <h2 className="text-xl font-semibold">Formulario</h2>
                            <p className="mt-2 text-sm text-gray-600">
                                Por ahora el envío es “manual” (sin backend). En el siguiente paso lo conectamos a un endpoint / API o a tu email.
                            </p>

                            <form className="mt-6 space-y-4">
                                <div>
                                    <label className="text-sm font-medium text-gray-700">Nombre</label>
                                    <input
                                        className="mt-2 w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-gray-900"
                                        placeholder="Tu nombre"
                                    />
                                </div>

                                <div>
                                    <label className="text-sm font-medium text-gray-700">Email</label>
                                    <input
                                        type="email"
                                        className="mt-2 w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-gray-900"
                                        placeholder="tu@email.com"
                                    />
                                </div>

                                <div>
                                    <label className="text-sm font-medium text-gray-700">Tema</label>
                                    <select className="mt-2 w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-gray-900">
                                        <option>Producción</option>
                                        <option>Conservación genética</option>
                                        <option>I+D / Codesarrollo</option>
                                        <option>Colaboración / Partner</option>
                                        <option>Otro</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="text-sm font-medium text-gray-700">Mensaje</label>
                                    <textarea
                                        className="mt-2 w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-gray-900"
                                        rows={6}
                                        placeholder="Describe brevemente necesidades, volumen, plazos, requisitos de documentación, etc."
                                    />
                                </div>

                                <a
                                    href="mailto:info@phytosupplies.com?subject=Solicitud%20de%20información"
                                    className="inline-flex w-full items-center justify-center rounded-md bg-emerald-700 px-6 py-3 text-sm font-medium text-white hover:bg-emerald-800 transition"
                                >
                                    Enviar por email
                                </a>

                                <p className="text-xs text-gray-500">
                                    Nota: En el siguiente paso lo convertimos en envío real con API (y anti-spam).
                                </p>
                            </form>
                        </div>

                        {/* INFO */}
                        <div className="space-y-6">
                            <div className="rounded-3xl border bg-white p-8 shadow-sm">
                                <h3 className="text-xl font-semibold">Datos</h3>
                                <div className="mt-4 space-y-2 text-sm text-gray-700">
                                    <div><span className="text-gray-500">Empresa:</span> Phyto Supplies S.L.</div>
                                    <div><span className="text-gray-500">Ubicación:</span> Manresa (Barcelona), España</div>
                                    <div><span className="text-gray-500">Enfoque:</span> Producción · Conservación genética · I+D</div>
                                </div>
                            </div>

                            <div className="rounded-3xl border bg-gray-50 p-8">
                                <h3 className="text-xl font-semibold">Qué necesitamos para responder rápido</h3>
                                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                                    <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-700" /> Objetivo del proyecto.</li>
                                    <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-700" /> Volumen / escalado esperado.</li>
                                    <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-700" /> Requisitos de trazabilidad / documentación.</li>
                                    <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-700" /> Plazos.</li>
                                </ul>
                            </div>

                            <div className="rounded-3xl border bg-white p-8 shadow-sm">
                                <h3 className="text-xl font-semibold">Partners</h3>
                                <p className="mt-2 text-sm text-gray-600">
                                    Athena Nutrients · TrolMaster · Matrix LED
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
