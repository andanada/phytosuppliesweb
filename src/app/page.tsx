import Image from "next/image";

const partners = [
  { src: "/images/partners/athena.svg", alt: "Athena Nutrients" },
  { src: "/images/partners/trolmaster.png", alt: "TrolMaster" },
  { src: "/images/partners/matrix.svg", alt: "Matrix LED" },
  { src: "/images/partners/ripperseeds.jpg", alt: "Ripper Seeds" },
];

// Duplicamos (x4) para garantizar que el track sea siempre más ancho que la pantalla
// y el loop no deje huecos en monitores grandes.
const partnersLoop = [
  ...partners,
  ...partners,
  ...partners,
  ...partners,
];

const stats = [
  { label: "Capacidad inicial", value: "5.000", suffix: " esquejes/mes" },
  { label: "Escalabilidad", value: "20.000", suffix: " esquejes/mes" },
  { label: "Trazabilidad", value: "100%", suffix: " digital" },
];

const highlights = [
  {
    title: "Entorno regulado",
    desc: "Operación orientada a compliance y documentación consistente para auditoría y control por lote.",
  },
  {
    title: "Bioseguridad",
    desc: "Protocolos de contención, limpieza y segregación para minimizar riesgos biológicos y operativos.",
  },
  {
    title: "Control de calidad",
    desc: "Muestreos, métricas de vigor/enraizamiento y ensayos moleculares según necesidades del proyecto.",
  },
];

const servicesPreview = [
  "Producción de esquejes certificados",
  "Conservación de plantas madre",
  "Limpieza in vitro y micropropagación",
  "Multiplicación de genéticas externas",
  "Documentación técnica y logística",
  "I+D a medida (custom breeding)",
];

const capabilities = [
  {
    eyebrow: "Producción clonal",
    title: "Suministro escalable con consistencia por lote",
    desc: "Planificación de lotes, control de parámetros críticos y registros operativos para estabilidad, uniformidad y trazabilidad.",
    bullets: ["Escalado 5.000 → 20.000/mes", "Protocolos estandarizados", "Registros y control por lote"],
    image: "/images/facility.jpg",
  },
  {
    eyebrow: "Conservación genética",
    title: "Gestión de madres y continuidad de líneas",
    desc: "Mantenimiento, identificación y seguimiento de material para reducir deriva y asegurar la integridad genética en el tiempo.",
    bullets: ["Estrategias de continuidad", "Sistemas de identificación", "Segregación y bioseguridad"],
    image: "/images/traceability.jpg",
  },
  {
    eyebrow: "Calidad + I+D",
    title: "Ensayos y soporte técnico para proyectos exigentes",
    desc: "Control de calidad y soporte de I+D: muestreos, métricas de vigor/enraizamiento y ensayos según necesidades del proyecto.",
    bullets: ["QC por muestreo", "Ensayos moleculares", "Transferencia de know-how"],
    image: "/images/quality.jpg",
  },
];

const process = [
  {
    step: "01",
    title: "Definimos el alcance",
    desc: "Objetivos, requisitos regulatorios, volúmenes y especificaciones de calidad. Alineamos KPIs y entregables.",
  },
  {
    step: "02",
    title: "Diseñamos el plan operativo",
    desc: "Planificación de lotes, protocolos, trazabilidad, puntos de control y documentación asociada.",
  },
  {
    step: "03",
    title: "Ejecutamos y reportamos",
    desc: "Producción/servicio, control de calidad y reporting. Ajustes iterativos según datos y evolución del proyecto.",
  },
];

const caseStudies = [
  {
    title: "Programa de producción clonal",
    desc: "Implementación de lotes escalables con control de uniformidad y registros por lote para operación sostenida.",
    tag: "Producción",
  },
  {
    title: "Conservación de líneas críticas",
    desc: "Estrategia de continuidad genética con identificación y seguimiento para reducir deriva y pérdida de material.",
    tag: "Genética",
  },
  {
    title: "Soporte de I+D aplicado",
    desc: "Estandarización de procesos y soporte técnico en proyectos con requisitos de documentación y control.",
    tag: "I+D",
  },
];

function IconCheck() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5">
      <path
        fill="currentColor"
        d="M9.0 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"
      />
    </svg>
  );
}

function IconShield() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5">
      <path
        fill="currentColor"
        d="M12 2 4 5v6c0 5 3.4 9.7 8 11 4.6-1.3 8-6 8-11V5l-8-3zm0 18c-3.2-1.1-6-4.9-6-9V6.3L12 4l6 2.3V11c0 4.1-2.8 7.9-6 9z"
      />
    </svg>
  );
}

function IconLab() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5">
      <path
        fill="currentColor"
        d="M9 2h6v2h-1v5.2l4.9 7.9c1 1.6-.2 3.9-2.1 3.9H7.2c-1.9 0-3.1-2.3-2.1-3.9L10 9.2V4H9V2zm3 9.1-5.1 8.2c-.2.3 0 .7.3.7h9.6c.3 0 .5-.4.3-.7L12 11.1z"
      />
    </svg>
  );
}

function LogoPill({ name }: { name: string }) {
  return (
    <div className="flex items-center justify-center rounded-full border bg-white/85 px-5 py-2 text-xs font-medium text-gray-700 backdrop-blur">
      {name}
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="relative">
      {/* CSS local del marquee (no depende de styled-jsx ni client-only) */}
      <style>{`
        @keyframes partners-marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .partners-track {
          width: max-content;
          animation: partners-marquee 26s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .partners-track { animation: none; }
        }
      `}</style>

      {/* HERO */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            {/* LEFT */}
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 rounded-full border bg-white/85 px-3 py-1 text-xs text-gray-700 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-emerald-600" />
                Biotecnología aplicada · Producción clonal · Trazabilidad
              </div>

              <h1 className="mt-7 text-5xl font-semibold tracking-tight md:text-6xl">
                Soluciones biotecnológicas avanzadas{" "}
                <span className="text-gray-500">para genética vegetal</span>
              </h1>

              <p className="mt-6 text-lg leading-relaxed text-gray-800">
                Producción de material vegetal certificado, conservación genética y servicios avanzados de I+D
                para operadores regulados, instituciones científicas y programas de mejora genética.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/contacto"
                  className="inline-flex items-center justify-center rounded-md bg-emerald-700 px-6 py-3 text-sm font-medium text-white hover:bg-emerald-800 transition"
                >
                  Solicitar información
                </a>
                <a
                  href="#capabilities"
                  className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white/85 px-6 py-3 text-sm font-medium hover:border-gray-900 transition backdrop-blur"
                >
                  Ver capacidades
                </a>
              </div>

              {/* PARTNERS SLIDER (antes de stats) */}
              <div className="mt-10">
                <div className="text-xs font-medium tracking-wide text-gray-500">
                  Partners tecnológicos y estratégicos
                </div>

                <div className="mt-4 relative overflow-hidden rounded-2xl border bg-white/75 px-6 py-6 backdrop-blur">
                  {/* Fade edges */}
                  <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white/90 to-transparent z-10" />
                  <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white/90 to-transparent z-10" />

                  <div className="partners-track flex items-center gap-14 whitespace-nowrap">
                    {partnersLoop.map((p, i) => (
                      <div
                        key={`${p.src}-${i}`}
                        className="flex items-center justify-center"
                        style={{ width: 220, height: 64 }}
                      >
                        <Image
                          src={p.src}
                          alt={p.alt}
                          width={220}
                          height={64}
                          className="h-14 w-auto object-contain opacity-90 transition hover:opacity-100"
                          priority={i < 4}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* STATS */}
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-xl border bg-white/88 p-5 shadow-sm backdrop-blur"
                  >
                    <div className="text-xs text-gray-500">{s.label}</div>
                    <div className="mt-2 text-2xl font-semibold">
                      {s.value}
                      <span className="text-sm font-medium text-gray-600">{s.suffix}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid gap-3 text-sm text-gray-800">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 text-emerald-700">
                    <IconShield />
                  </span>
                  <span>Enfoque de compliance y documentación consistente por lote.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 text-emerald-700">
                    <IconLab />
                  </span>
                  <span>Controles de calidad y ensayos según necesidades del proyecto.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 text-emerald-700">
                    <IconCheck />
                  </span>
                  <span>Escalabilidad operativa sin comprometer uniformidad.</span>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative">
              <div className="absolute -inset-6 -z-10 rounded-3xl bg-emerald-200/35 blur-2xl" />
              <div className="overflow-hidden rounded-3xl border bg-white/82 backdrop-blur shadow-xl">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/images/hero.png"
                    alt="Infraestructura y procesos de biotecnología vegetal"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-800">
                      Trazabilidad
                    </span>
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                      Bioseguridad
                    </span>
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                      Control ambiental
                    </span>
                  </div>
                  <p className="mt-4 text-sm text-gray-700">
                    Operación indoor con control de parámetros críticos y procedimientos estandarizados
                    para estabilidad y repetibilidad.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* TRUSTED BY */}
          <div className="mt-14 rounded-3xl border bg-white/70 p-8 backdrop-blur">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="text-xs font-medium text-gray-600">Trusted by / Colaboración</div>
                <div className="mt-2 text-sm text-gray-700">
                  Enfoque B2B para operadores regulados, instituciones y programas de mejora genética.
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <LogoPill name="Operadores regulados" />
                <LogoPill name="Centros científicos" />
                <LogoPill name="Programas de mejora" />
                <LogoPill name="Partners técnicos" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight">
              Infraestructura y procesos para entornos exigentes
            </h2>
            <p className="mt-4 text-gray-600">
              Diseñado para operar con rigor técnico, trazabilidad y consistencia,
              reduciendo variabilidad y riesgos operativos.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {highlights.map((h) => (
              <div key={h.title} className="rounded-2xl border bg-white p-7 shadow-sm">
                <div className="text-base font-semibold">{h.title}</div>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section id="capabilities" className="bg-white/65 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight">Capacidades clave</h2>
            <p className="mt-4 text-gray-600">
              Bloques operativos diseñados para consistencia, trazabilidad y escalabilidad en entornos exigentes.
            </p>
          </div>

          <div className="mt-10 grid gap-8">
            {capabilities.map((c, i) => (
              <div
                key={c.title}
                className="grid gap-8 rounded-3xl border bg-white/92 p-8 shadow-sm lg:grid-cols-2 lg:items-center"
              >
                <div className={i % 2 === 0 ? "order-2 lg:order-1" : "order-2"}>
                  <div className="text-xs font-medium text-emerald-700">{c.eyebrow}</div>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight">{c.title}</h3>
                  <p className="mt-4 text-gray-600">{c.desc}</p>

                  <ul className="mt-6 grid gap-3 text-sm text-gray-800">
                    {c.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <span className="mt-0.5 text-emerald-700">
                          <IconCheck />
                        </span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <a
                      href="/contacto"
                      className="inline-flex items-center justify-center rounded-md bg-emerald-700 px-6 py-3 text-sm font-medium text-white hover:bg-emerald-800 transition"
                    >
                      Solicitar propuesta
                    </a>
                    <a
                      href="/servicios"
                      className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-sm font-medium hover:border-gray-900 transition"
                    >
                      Ver servicios
                    </a>
                  </div>
                </div>

                <div className={i % 2 === 0 ? "order-1 lg:order-2" : "order-1"}>
                  <div className="relative overflow-hidden rounded-2xl border bg-gray-50">
                    <div className="relative aspect-[16/10]">
                      <Image src={c.image} alt={c.title} fill className="object-cover" />
                    </div>
                    <div className="p-5">
                      <div className="text-xs text-gray-500">
                        Evidencia visual: instalaciones, trazabilidad y entornos controlados.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight">Cómo trabajamos</h2>
            <p className="mt-4 text-gray-600">
              Un enfoque claro y documentado para reducir incertidumbre y acelerar la ejecución.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {process.map((p) => (
              <div key={p.step} className="rounded-2xl border bg-white/92 p-7 shadow-sm">
                <div className="text-xs font-semibold text-emerald-700">{p.step}</div>
                <div className="mt-2 text-lg font-semibold">{p.title}</div>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="bg-white/65 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-tight">Servicios especializados</h2>
              <p className="mt-4 text-gray-600">
                Producción clonal, conservación genética, in vitro/micropropagación, documentación técnica y soporte de I+D a medida.
              </p>
            </div>

            <a
              href="/servicios"
              className="inline-flex w-fit items-center justify-center rounded-md border border-gray-300 bg-white/90 px-5 py-3 text-sm font-medium hover:border-gray-900 transition"
            >
              Ver todos los servicios
            </a>
          </div>

          <div className="mt-10 grid gap-3 md:grid-cols-2">
            {servicesPreview.map((x) => (
              <div key={x} className="flex items-center gap-3 rounded-xl border bg-white/92 p-5">
                <span className="h-2 w-2 rounded-full bg-emerald-700" />
                <div className="text-sm text-gray-700">{x}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MINI CASE STUDIES */}
      <section className="bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-tight">Casos de uso</h2>
              <p className="mt-4 text-gray-600">
                Ejemplos del tipo de programas y necesidades que resolvemos (sin exponer datos sensibles).
              </p>
            </div>
            <a
              href="/empresa"
              className="inline-flex w-fit items-center justify-center rounded-md border border-gray-300 bg-white/90 px-5 py-3 text-sm font-medium hover:border-gray-900 transition"
            >
              Ver enfoque completo
            </a>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {caseStudies.map((c) => (
              <div key={c.title} className="rounded-2xl border bg-white/92 p-7 shadow-sm">
                <div className="inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-800">
                  {c.tag}
                </div>
                <div className="mt-4 text-lg font-semibold">{c.title}</div>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-white/65 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <div className="rounded-3xl border bg-white/92 p-10 shadow-sm">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight">¿Hablamos de tu proyecto?</h2>
                <p className="mt-4 text-gray-600">
                  Cuéntanos volúmenes, plazos y requisitos. Te devolvemos una propuesta operativa con
                  enfoque de trazabilidad, calidad y escalabilidad.
                </p>

                <div className="mt-8 grid gap-3 text-sm text-gray-800">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 text-emerald-700">
                      <IconCheck />
                    </span>
                    <span>Respuesta inicial con enfoque y siguientes pasos.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 text-emerald-700">
                      <IconCheck />
                    </span>
                    <span>Propuesta modular: suministro, conservación y/o I+D.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 text-emerald-700">
                      <IconCheck />
                    </span>
                    <span>Confidencialidad y gestión responsable de información.</span>
                  </div>
                </div>
              </div>

              <form className="grid gap-4">
                <div className="grid gap-2">
                  <label className="text-sm font-medium text-gray-700">Nombre</label>
                  <input
                    className="h-11 rounded-md border bg-white px-4 text-sm outline-none focus:border-gray-900"
                    placeholder="Tu nombre"
                    name="name"
                  />
                </div>

                <div className="grid gap-2">
                  <label className="text-sm font-medium text-gray-700">Email</label>
                  <input
                    className="h-11 rounded-md border bg-white px-4 text-sm outline-none focus:border-gray-900"
                    placeholder="nombre@empresa.com"
                    name="email"
                    type="email"
                  />
                </div>

                <div className="grid gap-2">
                  <label className="text-sm font-medium text-gray-700">Mensaje</label>
                  <textarea
                    className="min-h-[120px] rounded-md border bg-white px-4 py-3 text-sm outline-none focus:border-gray-900"
                    placeholder="Volúmenes, plazos, requisitos regulatorios, etc."
                    name="message"
                  />
                </div>

                <button
                  type="button"
                  className="mt-2 inline-flex h-11 items-center justify-center rounded-md bg-emerald-700 px-6 text-sm font-medium text-white hover:bg-emerald-800 transition"
                >
                  Enviar solicitud
                </button>

                <p className="text-xs text-gray-500">
                  En el siguiente paso conectaremos este formulario a un endpoint.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
