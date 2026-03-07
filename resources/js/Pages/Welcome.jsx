import { Head } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Welcome to SafeBuild Canada" />
            <div className="boxed_wrapper">
                <Navbar />

                {/* ── HERO BREADCRUMB ──────────────────────────────────────── */}
                <section
                    className="relative py-24 bg-black overflow-hidden bg-cover bg-center"
                    style={{ backgroundImage: "url('/assets/steptodown.com618418.webp')" }}
                >
                    <div className="absolute inset-0 bg-black/60"></div>
                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <h1 className="text-white text-4xl md:text-6xl font-poppins font-bold uppercase mb-4">
                            Welcome to SafeBuild Canada
                        </h1>
                        <nav className="text-white/80 font-bold uppercase tracking-widest text-sm">
                            <a href="/" className="hover:text-white transition-colors">Home</a>
                        </nav>
                    </div>
                </section>

                <Footer />
            </div>
        </>
    );
}
