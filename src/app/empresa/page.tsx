import Image from "next/image";

const pillars = [
    {
        title: "Enfoque B2B y regulado",
        desc: "Operación orientada a trazabilidad, documentación consistente y control de cambios para entornos exigentes.",
    },
    {
        title: "Rigor técnico",
        desc: "Estandarización de procesos, control ambiental y métricas de calidad para reducir variabilidad y riesgos.",
    },
    {
        title: "Escalabilidad",
        desc: "Capacidad operativa diseñada para crecer sin comprometer uniformidad, estabilidad ni consistencia por lote.",
    },
];

const capabilities = [
    { k: "Ubicación", v: "Manresa (Barcelona), España" },
    { k: "Perfil", v: "Biotech aplicada a genética vegetal" },
    { k: "Modelo", v: "Producción + conservación + I+D" },
    { k: "Orientación", v: "Operadores regulados / instituciones" },
];

export default function EmpresaPage() {
    return (
        <main>
            {/* HERO INTERIOR */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute -top-40 left-1/2 h-[720px] w-[720px] -translate-x-1/2 rounded-full bg-emerald-200/35 blur-3xl" />
                    <div className="absolute -bottom-48 right-[-160px] h-[640px] w-[640px] rounded-full bg-gray-200/50 blur-3xl" />
                    <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-gray-50" />
                </div>

                <div className="mx-auto max-w-6xl px-4 py-16">
                    <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
                        <div className="max-w-xl">
                            <div className="inline-flex items-center gap-2 rounded-full border bg-white/80 px-3 py-1 text-xs text-gray-700">
                                <span className="h-2 w-2 rounded-full bg-emerald-700" />
                                Empresa · Operación · Rigor técnico
                            </div>

                            <h1 className="mt-7 text-4xl font-semibold tracking-tight md:text-5xl">
                                Phyto Supplies S.L.
                                <span className="text-gray-500"> · Biotecnología aplicada</span>
                            </h1>

                            <p className="mt-5 text-lg leading-relaxed text-gray-600">
                                Diseñamos y ejecutamos operaciones de producción, conservación genética y soporte avanzado de I+D
                                con foco en trazabilidad, bioseguridad y consistencia operativa.
                            </p>

                            <div className="mt-8 grid gap-3 sm:grid-cols-2">
                                {capabilities.map((x) => (
                                    <div key={x.k} className="rounded-xl border bg-white/80 p-5 shadow-sm">
                                        <div className="text-xs text-gray-500">{x.k}</div>
                                        <div className="mt-2 text-sm font-medium text-gray-900">{x.v}</div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                                <a
                                    href="/contacto"
                                    className="inline-flex items-center justify-center rounded-md bg-emerald-700 px-6 py-3 text-sm font-medium text-white hover:bg-emerald-800 transition"
                                >
                                    Solicitar información
                                </a>
                                <a
                                    href="/servicios"
                                    className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-sm font-medium hover:border-gray-900 transition"
                                >
                                    Ver servicios
                                </a>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute -inset-6 -z-10 rounded-3xl bg-emerald-200/35 blur-2xl" />
                            <div className="overflow-hidden rounded-3xl border bg-white shadow-sm">
                                <div className="relative aspect-[4/3]">
                                    <Image
                                        src="/images/empresa/hero.jpg"
                                        alt="Infraestructura y operación"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="text-sm font-medium text-gray-900">Operación orientada a estabilidad y repetibilidad</div>
                                    <p className="mt-2 text-sm text-gray-600">
                                        Procesos estandarizados, control de parámetros críticos y documentación consistente por lote.
                                    </p>
                                </div>
                            </div>
                            <p className="mt-3 text-xs text-gray-500">
                                Imagen: placeholder. La sustituiremos por una imagen corporativa generada.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* PILARES */}
            <section className="bg-white">
                <div className="mx-auto max-w-6xl px-4 py-18 md:py-20">
                    <h2 className="text-3xl font-semibold tracking-tight">Principios operativos</h2>
                    <p className="mt-4 max-w-2xl text-gray-600">
                        Estructura diseñada para operar con rigor, minimizar riesgos y entregar resultados consistentes en entornos exigentes.
                    </p>

                    <div className="mt-10 grid gap-6 md:grid-cols-3">
                        {pillars.map((p) => (
                            <div key={p.title} className="rounded-2xl border bg-white p-7 shadow-sm">
                                <div className="text-base font-semibold">{p.title}</div>
                                <p className="mt-3 text-sm leading-relaxed text-gray-600">{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-gray-50">
                <div className="mx-auto max-w-6xl px-4 py-18 md:py-20">
                    <div className="rounded-3xl border bg-white p-10 shadow-sm">
                        <h3 className="text-2xl font-semibold tracking-tight">¿Quieres evaluar un proyecto?</h3>
                        <p className="mt-3 max-w-2xl text-gray-600">
                            Te proponemos un encaje operativo (capacidad, plazos, controles, documentación y riesgos) en función de tu caso de uso.
                        </p>
                        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                            <a
                                href="/contacto"
                                className="inline-flex items-center justify-center rounded-md bg-emerald-700 px-6 py-3 text-sm font-medium text-white hover:bg-emerald-800 transition"
                            >
                                Contactar
                            </a>
                            <a
                                href="/servicios"
                                className="inline-flex items-center justify-center rounded-md border border-gray-300 px-6 py-3 text-sm font-medium hover:border-gray-900 transition"
                            >
                                Ver servicios
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
