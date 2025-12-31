export function Footer() {
    return (
        <footer className="border-t bg-gray-50">
            <div className="mx-auto max-w-6xl px-4 py-12 text-sm text-gray-600">
                <div className="font-medium text-black">Phyto Supplies S.L.</div>
                <div>Manresa (Barcelona) · España</div>
                <div className="mt-4">
                    © {new Date().getFullYear()} Phyto Supplies. Todos los derechos reservados.
                </div>
            </div>
        </footer>

    );
}
