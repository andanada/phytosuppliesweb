const items = [
    {
        title: "Trazabilidad por lote",
        desc: "Estructura de registros operativos y control de cambios para garantizar consistencia, seguimiento y auditoría.",
    },
    {
        title: "Control ambiental y bioseguridad",
        desc: "Procedimientos de segregación, limpieza y control de parámetros críticos para minimizar riesgos.",
    },
    {
        title: "Control de calidad y métricas",
        desc: "Criterios de aceptación, muestreos y métricas de vigor/enraizamiento; ensayos según necesidades del proyecto.",
    },
    {
        title: "Estandarización y documentación",
        desc: "Protocolos y registros orientados a operación consistente, repetible y alineada con requisitos del cliente.",
    },
];

export default function CalidadPage() {
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
                            Calidad · Trazabilidad · Bioseguridad
                        </div>

                        <h1 className="mt-7 text-4xl font-semibold tracking-tight md:text-5xl">
                            Calidad orientada a consistencia<span className="text-gray-500"> y control</span>
                        </h1>

                        <p className="mt-5 text-lg leading-relaxed text-gray-600">
                            Enfoque operativo diseñado para reducir variabilidad, documentar procesos y asegurar seguimiento por lote en entornos exigentes.
                        </p>

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
                </div>
            </section>

            <section className="bg-white">
                <div className="mx-auto max-w-6xl px-4 py-20">
                    <h2 className="text-3xl font-semibold tracking-tight">Ejes de calidad</h2>
                    <p className="mt-4 max-w-2xl text-gray-600">
                        Componentes que sostienen una operación repetible y audit-ready.
                    </p>

                    <div className="mt-10 grid gap-6 md:grid-cols-2">
                        {items.map((i) => (
                            <div key={i.title} className="rounded-2xl border bg-white p-7 shadow-sm">
                                <div className="text-base font-semibold">{i.title}</div>
                                <p className="mt-3 text-sm leading-relaxed text-gray-600">{i.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-14 rounded-3xl border bg-gray-50 p-10">
                        <h3 className="text-2xl font-semibold tracking-tight">Documentación y evidencias</h3>
                        <p className="mt-3 max-w-3xl text-gray-600">
                            Prepararemos esta sección para incluir: procedimientos, registros tipo, checklists y evidencias visuales (cuando nos pases o generemos los materiales).
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
