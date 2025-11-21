import { Menu, MessageSquare, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-4 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl">
          <div className="flex items-center justify-between px-5 py-3">
            <motion.a
              href="#"
              className="flex items-center gap-3"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-amber-400 to-orange-600 shadow-[0_0_30px_rgba(251,191,36,0.35)]" />
              <div className="text-white/90">
                <span className="block font-semibold tracking-tight">RestaBot</span>
                <span className="block text-xs text-white/50 -mt-0.5">AI para Restaurantes</span>
              </div>
            </motion.a>

            <nav className="hidden md:flex items-center gap-7 text-sm text-white/80">
              <a href="#beneficios" className="hover:text-white transition">Beneficios</a>
              <a href="#funcionalidades" className="hover:text-white transition">Funcionalidades</a>
              <a href="#experiencia" className="hover:text-white transition">Experiencia</a>
              <a href="#tecnologia" className="hover:text-white transition">Tecnología</a>
              <a href="#precios" className="hover:text-white transition">Precios</a>
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a
                href="https://wa.me/" target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-500/20 text-emerald-200 px-4 py-2 border border-emerald-400/30 hover:bg-emerald-500/30 transition"
              >
                <MessageSquare className="w-4 h-4" /> Probar en WhatsApp
              </a>
              <a
                href="#demo"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-orange-600 text-slate-900 font-semibold px-4 py-2 shadow-[0_8px_30px_rgba(251,191,36,0.35)] hover:shadow-[0_8px_40px_rgba(251,191,36,0.55)] transition"
              >
                <Phone className="w-4 h-4" /> Agenda una Demo
              </a>
            </div>

            <button className="md:hidden p-2 text-white/80 hover:text-white">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
