import Link from "next/link";

const nav = [
    { href: "/empresa", label: "Empresa" },
    { href: "/servicios", label: "Servicios" },
    { href: "/calidad", label: "Calidad" },
    { href: "/contacto", label: "Contacto" },
];

export function Header() {
    return (
        < header className = "sticky top-0 z-50 border-b bg-white/80 backdrop-blur" >
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5">
                <Link href="/" className="text-xl font-semibold tracking-tight">
                    Phyto Supplies
                </Link>

                <nav className="flex gap-8 text-sm font-medium text-gray-700">
                    {nav.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="hover:text-black transition-colors"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}
