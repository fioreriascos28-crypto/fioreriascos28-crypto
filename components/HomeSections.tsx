import React from 'react';
import { CheckCircle, ArrowRight, Home, Key, BadgeCheck } from 'lucide-react';
import { Testimonial } from '../types';

export const Hero: React.FC = () => {
  return (
    <div className="relative h-[85vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1596436807771-f4dc70757a3d?q=80&w=2070&auto=format&fit=crop" 
          alt="Cartagena Skyline" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/40 bg-gradient-to-b from-slate-900/60 via-transparent to-slate-900/80"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <span className="inline-block py-1 px-3 rounded-full bg-emerald-500/20 border border-emerald-400/30 backdrop-blur-md text-emerald-300 text-sm font-semibold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
          Inmobiliaria Premium en el Caribe
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
          Tu Propiedad Soñada <br />
          en <span className="text-emerald-400">Cartagena de Indias</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto mb-10 font-light">
          Descubre apartamentos de lujo, casas coloniales y oportunidades de inversión tokenizada en la joya del Caribe.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#propiedades" className="w-full sm:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-lg transition-all transform hover:translate-y-[-2px] shadow-lg shadow-emerald-500/30">
            Ver Propiedades
          </a>
          <a href="#contacto" className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold rounded-lg transition-all">
            Agendar Cita
          </a>
        </div>
      </div>
    </div>
  );
};

export const ValueProp: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="grid grid-cols-2 gap-4">
               <img src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=600" className="rounded-2xl shadow-xl transform translate-y-8" alt="Interior Lujo" />
               <img src="https://images.unsplash.com/photo-1628131336495-236f663004d5?auto=format&fit=crop&q=80&w=600" className="rounded-2xl shadow-xl" alt="Vista al Mar" />
            </div>
            {/* Trust Badge */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-xl shadow-2xl text-center border border-slate-100">
              <div className="text-3xl font-bold text-emerald-500 mb-1">12+</div>
              <div className="text-sm text-slate-500 uppercase tracking-wide font-semibold">Años de Exp.</div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">¿Por qué invertir con nosotros?</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              No solo vendemos metros cuadrados, vendemos un estilo de vida y retorno de inversión. 
              Somos expertos locales con visión global, integrando tecnología para asegurar transparencia.
            </p>
            
            <ul className="space-y-4">
              {[
                "Portafolio exclusivo en Bocagrande y Centro Histórico",
                "Asesoría legal y financiera completa",
                "Integración Web3 para inversiones ágiles",
                "Gestión de propiedad para rentas cortas"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle className="text-emerald-500 flex-shrink-0" size={20} />
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex gap-8">
               <div>
                  <div className="text-2xl font-bold text-slate-900">250+</div>
                  <div className="text-sm text-slate-500">Propiedades Vendidas</div>
               </div>
               <div>
                  <div className="text-2xl font-bold text-slate-900">98%</div>
                  <div className="text-sm text-slate-500">Clientes Satisfechos</div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <Home className="w-8 h-8 text-emerald-500" />,
      title: "1. Selección",
      desc: "Explora nuestro catálogo curado o usa nuestros filtros inteligentes para encontrar tu match ideal."
    },
    {
      icon: <BadgeCheck className="w-8 h-8 text-emerald-500" />,
      title: "2. Visita & Análisis",
      desc: "Agenda una visita (física o virtual 360°) y recibe un análisis de rentabilidad por IA."
    },
    {
      icon: <Key className="w-8 h-8 text-emerald-500" />,
      title: "3. Cierre Seguro",
      desc: "Te acompañamos en la legalización, firma digital o transacción crypto segura."
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-16">Tu camino a la propiedad ideal</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
              
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10 text-slate-300">
                  <ArrowRight />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const LeadForm: React.FC = () => {
  return (
    <section id="contacto" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-5/12 bg-emerald-600 p-10 text-white flex flex-col justify-center">
            <h3 className="text-3xl font-bold mb-4">Hablemos de tu inversión</h3>
            <p className="opacity-90 mb-8 leading-relaxed">
              Déjanos tus datos y un asesor experto te contactará en menos de 2 horas.
            </p>
            <div className="space-y-4 text-sm font-medium">
              <div className="flex items-center gap-3"><CheckCircle size={16} className="text-emerald-300"/> Asesoría personalizada</div>
              <div className="flex items-center gap-3"><CheckCircle size={16} className="text-emerald-300"/> Tour virtual disponible</div>
              <div className="flex items-center gap-3"><CheckCircle size={16} className="text-emerald-300"/> Financiación crypto</div>
            </div>
          </div>
          
          <div className="md:w-7/12 p-10">
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Nombre Completo</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all" placeholder="Juan Pérez" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Correo Electrónico</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all" placeholder="juan@ejemplo.com" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Teléfono / WhatsApp</label>
                <input type="tel" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all" placeholder="+57 300 ..." />
              </div>
              <button className="w-full py-4 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors mt-2">
                Solicitar Información
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Testimonials: React.FC<{ testimonials: Testimonial[] }> = ({ testimonials }) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Lo que dicen nuestros clientes</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-slate-50 p-8 rounded-xl border border-slate-100">
              <div className="flex items-center gap-4 mb-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-slate-900">{t.name}</h4>
                  <p className="text-xs text-emerald-600 font-semibold uppercase">{t.role}</p>
                </div>
              </div>
              <p className="text-slate-600 text-sm italic leading-relaxed">"{t.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};