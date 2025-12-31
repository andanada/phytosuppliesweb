import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function CompanyPage() {
    return (
        <>
            <Header />
            <main className="mx-auto max-w-6xl px-4 py-16">
                <h1 className="text-3xl font-semibold tracking-tight">Empresa</h1>
                <p className="mt-4 text-muted-foreground">
                    Contenido en construcción.
                </p>
            </main>
            <Footer />
        </>
    );
}
