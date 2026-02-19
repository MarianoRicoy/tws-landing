import Link from 'next/link';
import AnimatedText from './AnimatedText';
import { Code, FlaskConical } from 'lucide-react';

const servicesText = 'No somos solo desarrolladores. Somos creadores que entienden el código desde ambas perspectivas: el servicio al cliente y el producto propio.';

export default function Services() {
  return (
    <section id="servicios" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Un Ecosistema <span className="text-accent-cyan">Híbrido</span>
        </h2>
        <AnimatedText text={servicesText} className="text-muted-white max-w-xl mx-auto text-lg justify-center" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
        
        {/* Card 1: Software Factory */}
        <Link href="/en-desarrollo" className="block group">
          <div className="h-full rounded-3xl p-8 bg-[radial-gradient(ellipse_at_top,_#254893_0%,_#000001_100%)] border border-white/10 transition-all duration-300 group-hover:shadow-[0_0_40px_rgba(54,115,237,0.2)] group-hover:border-white/20">
            <div className="w-12 h-12 rounded-xl bg-[#111111] border border-white/10 flex items-center justify-center mb-6">
              <Code size={24} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Software Factory</h3>
            <p className="text-muted-white mb-8 leading-relaxed text-sm">
              Desarrollamos soluciones tecnológicas de alto impacto para empresas que buscan escalar. Código limpio, arquitectura escalable y entrega ágil.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center text-muted-white text-sm"><span className="text-accent-cyan mr-3 text-lg">•</span>Desarrollo Web & Mobile (React/Native)</li>
              <li className="flex items-center text-muted-white text-sm"><span className="text-accent-cyan mr-3 text-lg">•</span>Staff Augmentation</li>
              <li className="flex items-center text-muted-white text-sm"><span className="text-accent-cyan mr-3 text-lg">•</span>MVP para Startups</li>
            </ul>
          </div>
        </Link>

        {/* Card 2: Product Lab */}
        <Link href="/en-desarrollo" className="block group">
          <div className="h-full rounded-3xl p-8 bg-[radial-gradient(ellipse_at_top,_#254893_0%,_#000001_100%)] border border-white/10 transition-all duration-300 group-hover:shadow-[0_0_40px_rgba(54,115,237,0.2)] group-hover:border-white/20">
            <div className="w-12 h-12 rounded-xl bg-[#111111] border border-white/10 flex items-center justify-center mb-6">
              <FlaskConical size={24} className="text-green-500 fill-green-500/20" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Product Lab</h3>
            <p className="text-muted-white mb-8 leading-relaxed text-sm">
              Nuestra incubadora interna. Detectamos problemas reales y construimos productos SaaS propios para resolverlos. Innovación sin intermediarios.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center text-muted-white text-sm"><span className="text-accent-cyan mr-3 text-lg">•</span>Incubación de Ideas</li>
              <li className="flex items-center text-muted-white text-sm"><span className="text-accent-cyan mr-3 text-lg">•</span>Desarrollo de Productos Propios</li>
              <li className="flex items-center text-muted-white text-sm"><span className="text-accent-cyan mr-3 text-lg">•</span>Experimentación Continua</li>
            </ul>
          </div>
        </Link>

      </div>
    </section>
  )
}