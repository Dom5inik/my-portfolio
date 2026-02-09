import Link from "next/link";
export default function WeatherDemoPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-4">
            <div className="max-w-screen-xl w-full text-center">
                <h1 className="text-3xl font-bold mb-8 m-10">Weather Checker Widget Demo</h1>

                <div className="overflow-hidden shadow-2xl rounded-lg border border-border max-w-[1280px] mx-auto">
                    <video
                        className="w-full h-auto block"
                        controls
                        autoPlay
                        loop
                        muted
                        playsInline
                    >
                        <source src="/videos/live_demo_weatherapp.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                <p className="mt-8 text-muted-foreground">
                    Dies ist eine Live-Demonstration der Weather Checker Widget Funktionalität.
                </p>
            </div>
        </div>

    );
}
