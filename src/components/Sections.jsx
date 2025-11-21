import { Brain, Clock, Shield, BarChart3, Wallet, Sparkles, Smartphone, Bot, Database, Layers, CircuitBoard, MessageSquare, Calendar, MapPin, CreditCard, PieChart, LayoutDashboard } from "lucide-react";
import { motion } from "framer-motion";

const Section = ({ id, title, subtitle, children }) => (
  <section id={id} className="relative py-20">
    <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_80%_10%,rgba(255,255,255,0.04),transparent_60%)]" />
    <div className="mx-auto max-w-7xl px-6 relative">
      <div className="mb-10">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">{title}</h2>
        {subtitle && <p className="mt-2 text-white/60">{subtitle}</p>}
      </div>
      {children}
    </div>
  </section>
);

export default function Sections() {
  return (
    <div>
      {/* Qué es RestaBot */}
      <Section id="que-es" title="¿Qué es RestaBot?" subtitle="Un asistente virtual avanzado para restaurantes vía WhatsApp.">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <p className="text-white/70">RestaBot combina IA generativa con automatización para gestionar consultas, reservas y la información del restaurante por WhatsApp. Atiende 24/7, reduce la carga operativa y ofrece una experiencia premium multiplataforma.</p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-white/80">
              <li className="flex items-center gap-2"><Clock className="w-4 h-4 text-amber-400"/> Atención 24/7</li>
              <li className="flex items-center gap-2"><Sparkles className="w-4 h-4 text-amber-400"/> Automatización</li>
              <li className="flex items-center gap-2"><Calendar className="w-4 h-4 text-amber-400"/> Reservas automáticas</li>
              <li className="flex items-center gap-2"><Wallet className="w-4 h-4 text-amber-400"/> Reducción de costos</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <div className="grid grid-cols-2 gap-4 text-sm">
              {[
                { icon: Clock, label: "Disponibilidad total 24/7" },
                { icon: Sparkles, label: "Automatización inteligente" },
                { icon: Wallet, label: "Ahorro de costos" },
                { icon: BarChart3, label: "Datos e insights" },
                { icon: StarIcon, label: "Experiencia premium" },
              ].map((b, i) => (
                <div key={i} className="flex items-center gap-2 text-white/80">
                  <b.icon className="w-4 h-4 text-amber-400" /> {b.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Funcionalidades */}
      <Section id="funcionalidades" title="Funcionalidades">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Bot, title: "Gestión inteligente de menú", desc: "Carga, organiza y consulta el menú con IA" },
            { icon: Calendar, title: "Sistema de reservas avanzado", desc: "Agenda, confirma y envía recordatorios" },
            { icon: MapPin, title: "Información del negocio", desc: "Ubicación, horarios, eventos y más" },
            { icon: Shield, title: "Privacidad y seguridad", desc: "Cumplimiento y cifrado extremo a extremo" },
            { icon: LayoutDashboard, title: "Panel de control", desc: "Administra tu bot y tu operación" },
            { icon: BarChart3, title: "Analytics y reportes", desc: "Métricas clave y performance" },
          ].map((f, i) => (
            <div key={i} className="rounded-2xl border border-white/10 p-6 bg-white/5 hover:bg-white/[0.07] transition">
              <f.icon className="w-6 h-6 text-amber-400" />
              <h3 className="mt-4 font-semibold text-white">{f.title}</h3>
              <p className="text-white/60 text-sm mt-1">{f.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Experiencia del Cliente */}
      <Section id="experiencia" title="Experiencia del Cliente">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <ul className="space-y-3 text-white/80">
              <li className="flex items-center gap-2"><MessageSquare className="w-4 h-4 text-amber-400"/> Conversación natural en WhatsApp</li>
              <li className="flex items-center gap-2"><ZapIcon className="w-4 h-4 text-amber-400"/> Respuestas en menos de 2 segundos</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-amber-400"/> Consultas sobre menú, precios y horarios</li>
              <li className="flex items-center gap-2"><Calendar className="w-4 h-4 text-amber-400"/> Reservas fáciles con confirmación automática</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <p className="text-white/70 mb-4">Ejemplo de conversación de reserva:</p>
            <div className="space-y-2 text-sm">
              <div className="flex gap-3 items-start">
                <div className="h-8 w-8 rounded-full bg-white/10" />
                <div className="max-w-[80%] rounded-2xl bg-white/10 p-3 text-white/90">Hola, ¿tienen disponibilidad para 4 personas mañana a las 20:00?</div>
              </div>
              <div className="flex gap-3 items-start justify-end">
                <div className="max-w-[80%] rounded-2xl bg-emerald-500/20 border border-emerald-400/30 p-3 text-emerald-100">¡Sí! Hay disponibilidad. ¿Confirmas la reserva para 4 personas el viernes a las 20:00 a nombre de Ana?</div>
                <div className="h-8 w-8 rounded-full bg-emerald-400/30" />
              </div>
              <div className="flex gap-3 items-start">
                <div className="h-8 w-8 rounded-full bg-white/10" />
                <div className="max-w-[80%] rounded-2xl bg-white/10 p-3 text-white/90">Confirmo. Mi teléfono es 555-123.</div>
              </div>
              <div className="flex gap-3 items-start justify-end">
                <div className="max-w-[80%] rounded-2xl bg-emerald-500/20 border border-emerald-400/30 p-3 text-emerald-100">Reserva confirmada ✅ Te enviaremos un recordatorio 2 horas antes. ¿Deseas ver el menú o agregar una nota?</div>
                <div className="h-8 w-8 rounded-full bg-emerald-400/30" />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Tecnología */}
      <Section id="tecnologia" title="Tecnología">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: Brain, title: "IA generativa de última generación", desc: "Gemini, GPT-4, Claude" },
            { icon: Layers, title: "Arquitectura multi-agente", desc: "Orquestación de tareas especializada" },
            { icon: Database, title: "RAG semántico", desc: "Recuperación aumentada de conocimiento" },
            { icon: CircuitBoard, title: "PostgreSQL + Milvus", desc: "Datos estructurados y vectores" },
            { icon: Smartphone, title: "Cloud-native escalable", desc: "Infraestructura lista para crecer" },
            { icon: Shield, title: "Seguridad empresarial", desc: "Cumplimiento y auditoría" },
          ].map((t, i) => (
            <div key={i} className="rounded-2xl border border-white/10 p-6 bg-white/5">
              <t.icon className="w-6 h-6 text-amber-400" />
              <h3 className="mt-4 font-semibold text-white">{t.title}</h3>
              <p className="text-white/60 text-sm mt-1">{t.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Casos de Éxito */}
      <Section id="casos" title="Casos de Éxito">
        <div className="grid md:grid-cols-4 gap-6">
          {[
            "Pizzería",
            "Restaurante gourmet",
            "Cadena de comida rápida",
            "Local con eventos",
          ].map((c, i) => (
            <div key={i} className="rounded-2xl border border-white/10 p-6 bg-white/5">
              <h3 className="font-semibold text-white">{c}</h3>
              <p className="text-white/60 text-sm mt-1">Implementaciones reales con mejoras en reservas, satisfacción y operación.</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Planes y Precios */}
      <Section id="precios" title="Planes y Precios">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Starter", price: "USD 99/mes", features: ["Hasta 1 sucursal", "Reservas básicas", "Soporte por email"] },
            { name: "Professional", price: "USD 299/mes", featured: true, features: ["Hasta 5 sucursales", "Flujos avanzados", "Dashboard + Analytics", "Soporte prioritario"] },
            { name: "Enterprise", price: "A medida", features: ["Multi-sucursal", "Integraciones", "SLAs y seguridad", "Soporte dedicado"] },
          ].map((p, i) => (
            <div key={i} className={`rounded-2xl border p-6 bg-white/5 ${p.featured ? 'border-amber-400/50 shadow-[0_0_40px_rgba(251,191,36,0.25)]' : 'border-white/10'}`}>
              <h3 className="font-semibold text-white">{p.name}</h3>
              <p className="text-2xl text-white/90 mt-2">{p.price}</p>
              <ul className="mt-4 space-y-2 text-white/70 text-sm">
                {p.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-2"><CheckIcon className="w-4 h-4 text-amber-400"/> {f}</li>
                ))}
              </ul>
              <a href="#demo" className={`mt-5 inline-flex px-4 py-2 rounded-xl font-medium ${p.featured ? 'bg-gradient-to-r from-amber-400 to-orange-600 text-slate-900' : 'border border-white/20 text-white/90 hover:bg-white/5'}`}>Empezar</a>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA final */}
      <Section id="demo" title="Agenda tu demo gratuita">
        <div className="grid md:grid-cols-3 gap-6">
          <a href="https://wa.me/" target="_blank" rel="noreferrer" className="rounded-2xl border border-white/10 p-6 bg-white/5 hover:bg-white/[0.07] transition">WhatsApp directo</a>
          <a href="mailto:ventas@restabot.ai" className="rounded-2xl border border-white/10 p-6 bg-white/5 hover:bg-white/[0.07] transition">Correo de ventas</a>
          <a href="#" className="rounded-2xl border border-white/10 p-6 bg-white/5 hover:bg-white/[0.07] transition">Agendar demo</a>
        </div>
      </Section>
    </div>
  );
}

// Local icons built with Lucide primitives to avoid missing imports
function StarIcon(props){return <svg {...props} viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>}
function CheckIcon(props){return <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6 9 17l-5-5"/></svg>}
function ZapIcon(props){return <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 3L4 14h7l-1 7 9-11h-7z"/></svg>}
