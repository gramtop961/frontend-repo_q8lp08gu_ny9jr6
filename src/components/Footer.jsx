import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";

export default function Footer(){
  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 text-sm">
          <div>
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-amber-400 to-orange-600" />
              <span className="text-white font-semibold">RestaBot</span>
            </div>
            <p className="text-white/60 mt-3">Asistente virtual inteligente para restaurantes. Conversación natural, reservas automáticas y experiencia premium en WhatsApp.</p>
          </div>
          <div className="text-white/80">
            <div className="font-semibold text-white mb-2">Legal</div>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-white">Términos</a></li>
              <li><a href="#" className="hover:text-white">Política de privacidad</a></li>
            </ul>
          </div>
          <div className="text-white/80">
            <div className="font-semibold text-white mb-2">Contacto</div>
            <ul className="space-y-1">
              <li className="flex items-center gap-2"><Mail className="w-4 h-4"/> ventas@restabot.ai</li>
            </ul>
            <div className="flex gap-3 mt-4 text-white/70">
              <a href="#" className="hover:text-white"><Facebook className="w-5 h-5"/></a>
              <a href="#" className="hover:text-white"><Instagram className="w-5 h-5"/></a>
              <a href="#" className="hover:text-white"><Linkedin className="w-5 h-5"/></a>
            </div>
          </div>
        </div>
        <div className="text-xs text-white/40 mt-8">© {new Date().getFullYear()} RestaBot. Todos los derechos reservados.</div>
      </div>
    </footer>
  );
}
