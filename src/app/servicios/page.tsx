import Image from "next/image";

const blocks = [
    {
        title: "Producción de material vegetal",
        bullets: [
            "Producción y suministro con control de trazabilidad.",
            "Planificación de lotes y escalabilidad según demanda.",
            "Registros operativos y consistencia por lote.",
        ],
    },
    {
        title: "Conservación genética y madres",
        bullets: [
            "Mantenimiento y conservación de líneas genéticas.",
            "Estrategias de continuidad genética y reducción de deriva.",
            "Identificación y seguimiento del material.",
        ],
    },
    {
        title: "Servicios avanzados de I+D",
        bullets: [
            "Diseño experimental y soporte a programas de mejora.",
            "Estandarización y transferencia de know-how.",
            "Acompañamiento técnico para entornos regulados.",
        ],
    },
];

const audiences = [
    { t: "Operadores regulados", d: "Procesos, trazabilidad y documentación consistente para operar con garantías." },
    { t: "Instituciones científicas", d: "Soporte técnico y material vegetal para proyectos de investigación y validación." },
    { t: "Programas de mejora genética", d: "Estabilidad, continuidad genética y optimización de procesos productivos." },
];

export default function ServiciosPage() {
    return (
        <main>
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute -top-40 left-1/2 h-[720px] w-[720px] -translate-x-1/2 rounded-full bg-emerald-200/35 blur-3xl" />
                    <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-gray-50" />
                </div>

                <div className="mx-auto max-w-6xl px-4 py-16">
                    <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
                        <div className="max-w-xl">
                            <div className="inline-flex items-center gap-2 rounded-full border bg-white/80 px-3 py-1 text-xs text-gray-700">
                                <span className="h-2 w-2 rounded-full bg-emerald-700" />
                                Servicios · Producción · Conservación · I+D
                            </div>

                            <h1 className="mt-7 text-4xl font-semibold tracking-tight md:text-5xl">
                                Servicios especializados<span className="text-gray-500"> para genética vegetal</span>
                            </h1>

                            <p className="mt-5 text-lg leading-relaxed text-gray-600">
                                Soluciones técnicas para producción, conservación genética y soporte avanzado de I+D, orientadas a entornos exigentes.
                            </p>

                            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                                <a
                                    href="/contacto"
                                    className="inline-flex items-center justify-center rounded-md bg-emerald-700 px-6 py-3 text-sm font-medium text-white hover:bg-emerald-800 transition"
                                >
                                    Solicitar propuesta
                                </a>
                                <a
                                    href="/empresa"
                                    className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-sm font-medium hover:border-gray-900 transition"
                                >
                                    Conocer la empresa
                                </a>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="overflow-hidden rounded-3xl border bg-white shadow-sm">
                                <div className="relative aspect-[4/3]">
                                    <Image
                                        src="/images/servicios/hero.jpg"
                                        alt="Servicios e infraestructura"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                                <div className="p-6">
                                    <p className="text-sm text-gray-600">
                                        Operación diseñada para consistencia, control y escalabilidad con foco en documentación y trazabilidad.
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

            <section className="bg-white">
                <div className="mx-auto max-w-6xl px-4 py-20">
                    <h2 className="text-3xl font-semibold tracking-tight">Líneas de servicio</h2>
                    <p className="mt-4 max-w-2xl text-gray-600">
                        Bloques operativos diseñados para encajar con requisitos de trazabilidad, control ambiental y calidad.
                    </p>

                    <div className="mt-10 grid gap-6 md:grid-cols-3">
                        {blocks.map((b) => (
                            <div key={b.title} className="rounded-2xl border bg-white p-7 shadow-sm">
                                <div className="text-base font-semibold">{b.title}</div>
                                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                                    {b.bullets.map((x) => (
                                        <li key={x} className="flex gap-2">
                                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-700" />
                                            <span>{x}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <h3 className="mt-16 text-2xl font-semibold tracking-tight">¿Para quién trabajamos?</h3>
                    <div className="mt-8 grid gap-6 md:grid-cols-3">
                        {audiences.map((a) => (
                            <div key={a.t} className="rounded-2xl border bg-gray-50 p-7">
                                <div className="text-sm font-semibold text-gray-900">{a.t}</div>
                                <p className="mt-3 text-sm text-gray-600">{a.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
