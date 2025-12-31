import "./globals.css";
import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
    title: "Phyto Supplies",
    description: "Soluciones biotecnológicas avanzadas para genética vegetal",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="es">
            <body className="min-h-screen bg-white text-black">
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
