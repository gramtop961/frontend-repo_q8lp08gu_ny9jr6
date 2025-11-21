import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28" id="hero">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-100px,rgba(251,191,36,0.18),transparent_80%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_20%_10%,rgba(255,255,255,0.06),transparent_60%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="py-10">
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              RestaBot – Asistente Virtual Inteligente para Restaurantes
            </motion.h1>

            <motion.p
              className="mt-6 text-lg text-white/70"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
            >
              Tu recepcionista digital 24/7 potenciado por IA generativa
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <a href="#demo" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-orange-600 text-slate-900 font-semibold shadow-[0_10px_40px_rgba(251,191,36,0.35)] hover:shadow-[0_10px_50px_rgba(251,191,36,0.55)] transition">Agenda una Demo</a>
              <a href="https://wa.me/" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center px-5 py-3 rounded-xl border border-white/20 text-white/90 hover:bg-white/5 transition">Probar en WhatsApp</a>
            </motion.div>

            <div className="mt-10 grid grid-cols-2 gap-4 text-sm text-white/60">
              <div className="rounded-xl border border-white/10 p-4 bg-white/5">
                <p>Atención 24/7, automatización y reservas sin intervención humana.</p>
              </div>
              <div className="rounded-xl border border-white/10 p-4 bg-white/5">
                <p>Reduce carga operativa y ofrece una experiencia premium.</p>
              </div>
            </div>
          </div>

          <div className="relative h-[520px] lg:h-[640px] rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-b from-slate-900 to-slate-950">
            <Spline scene="https://prod.spline.design/AeAqaKLmGsS-FPBN/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" />
          </div>
        </div>
      </div>
    </section>
  );
}
