import { Container } from "@/components/ui/Container";

export default function Datenschutz() {
    return (
        <main className="flex-1 pt-24 pb-12">
            <Container>
                <div className="max-w-2xl mx-auto space-y-8">
                    <h1 className="text-4xl font-bold">Datenschutzerklärung</h1>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-semibold">1. Datenschutz auf einen Blick</h2>
                        <h3 className="text-xl font-medium">Allgemeine Hinweise</h3>
                        <p className="text-muted-foreground">
                            Der Schutz Ihrer persönlichen Daten ist uns wichtig. Diese Website dient als persönliches Portfolio
                            und sammelt <strong>keine personenbezogenen Daten</strong> direkt über Formulare oder andere Eingabemöglichkeiten.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-semibold">2. Hosting und technische Daten</h2>
                        <h3 className="text-xl font-medium">Externes Hosting (Vercel)</h3>
                        <p className="text-muted-foreground">
                            Diese Website wird auf Vercel gehostet. Vercel kann automatisch bestimmte technische Daten verarbeiten,
                            die für den Betrieb der Website notwendig sind, z. B. IP-Adresse, Browsertyp, Gerätedaten und Zugriffsdaten.
                            Diese Daten werden nur in anonymisierter oder aggregierter Form verwendet und nicht für Werbezwecke weitergegeben.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-semibold">3. Cookies und Tracking</h2>
                        <h3 className="text-xl font-medium">Keine Cookies oder Tracking</h3>
                        <p className="text-muted-foreground">
                            Es werden <strong>keine Cookies</strong> von dieser Website gesetzt und es werden <strong>keine Tracking-Tools</strong> wie Google Analytics verwendet.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-semibold">4. Kontakt</h2>
                        <h3 className="text-xl font-medium">Fragen zum Datenschutz</h3>
                        <p className="text-muted-foreground">
                            Wenn Sie Fragen zum Datenschutz haben, können Sie mich über die auf der Website angegebenen Kontaktmöglichkeiten erreichen.
                        </p>
                    </div>
                </div>
            </Container>
        </main>
    );
}
