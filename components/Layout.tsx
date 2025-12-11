import React, { useState, useEffect } from 'react';
import { Menu, X, Wallet, MessageCircle, Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

interface HeaderProps {
  onConnectWallet: () => void;
  isWalletConnected: boolean;
  walletAddress: string | null;
}

export const Header: React.FC<HeaderProps> = ({ onConnectWallet, isWalletConnected, walletAddress }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className={`text-2xl font-bold tracking-tighter ${isScrolled ? 'text-slate-900' : 'text-slate-900 lg:text-white'}`}>
          Cartagena<span className="text-emerald-500">Prime</span>
        </div>

        {/* Desktop Menu */}
        <div className={`hidden md:flex items-center space-x-8 ${isScrolled ? 'text-slate-600' : 'text-white'}`}>
          <a href="#propiedades" className="hover:text-emerald-500 transition-colors">Propiedades</a>
          <a href="#proyectos" className="hover:text-emerald-500 transition-colors">Proyectos</a>
          <a href="#nosotros" className="hover:text-emerald-500 transition-colors">Nosotros</a>
          <a href="#contacto" className="hover:text-emerald-500 transition-colors">Contacto</a>
          
          <button 
            onClick={onConnectWallet}
            className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${
              isWalletConnected 
                ? 'bg-emerald-500/20 border-emerald-500 text-emerald-500' 
                : 'bg-white/10 backdrop-blur border-white/30 hover:bg-white hover:text-slate-900'
            }`}
          >
            <Wallet size={18} />
            <span className="text-sm font-medium">
              {isWalletConnected ? `${walletAddress?.substring(0,6)}...${walletAddress?.substring(38)}` : 'Conectar Wallet'}
            </span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-emerald-500"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-xl md:hidden flex flex-col p-6 space-y-4">
          <a href="#propiedades" className="text-slate-800 font-medium" onClick={() => setMobileMenuOpen(false)}>Propiedades</a>
          <a href="#proyectos" className="text-slate-800 font-medium" onClick={() => setMobileMenuOpen(false)}>Proyectos</a>
          <a href="#nosotros" className="text-slate-800 font-medium" onClick={() => setMobileMenuOpen(false)}>Nosotros</a>
          <button 
            onClick={() => {
              onConnectWallet();
              setMobileMenuOpen(false);
            }}
            className="flex items-center justify-center gap-2 w-full py-3 bg-slate-900 text-white rounded-lg"
          >
            <Wallet size={18} />
            {isWalletConnected ? 'Wallet Conectada' : 'Conectar Wallet'}
          </button>
        </div>
      )}
    </nav>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16">
      <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">Cartagena<span className="text-emerald-500">Prime</span></h3>
          <p className="text-sm leading-relaxed mb-4">
            Transformando la experiencia inmobiliaria en el Caribe con tecnología, transparencia y propiedades exclusivas.
          </p>
        </div>
        
        <div>
          <h4 className="text-white font-semibold mb-4">Navegación</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-emerald-500">Inicio</a></li>
            <li><a href="#propiedades" className="hover:text-emerald-500">Propiedades en Venta</a></li>
            <li><a href="#" className="hover:text-emerald-500">Inversión Tokenizada</a></li>
            <li><a href="#" className="hover:text-emerald-500">Blog de Inversión</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Contacto</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2"><MapPin size={16} className="text-emerald-500"/> Bocagrande, Cra 2 #1-15</li>
            <li className="flex items-center gap-2"><Phone size={16} className="text-emerald-500"/> +57 300 123 4567</li>
            <li className="flex items-center gap-2"><Mail size={16} className="text-emerald-500"/> info@cartagenaprime.com</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Síguenos</h4>
          <div className="flex gap-4">
            <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-emerald-500 hover:text-white transition-colors"><Instagram size={20} /></a>
            <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-emerald-500 hover:text-white transition-colors"><Facebook size={20} /></a>
            <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-emerald-500 hover:text-white transition-colors"><Twitter size={20} /></a>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-12 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
        &copy; {new Date().getFullYear()} Cartagena Prime Real Estate. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export const WhatsAppButton: React.FC = () => {
  return (
    <a 
      href="https://wa.me/573001234567" 
      target="_blank" 
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={28} fill="white" className="text-white" />
    </a>
  );
};