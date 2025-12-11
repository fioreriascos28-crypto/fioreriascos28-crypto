import React, { useState, useMemo } from 'react';
import { Header, Footer, WhatsAppButton } from './components/Layout';
import { Hero, ValueProp, HowItWorks, LeadForm, Testimonials } from './components/HomeSections';
import { SearchBar, PropertyCard, PropertyModal } from './components/RealEstate';
import { MOCK_PROPERTIES, TESTIMONIALS } from './constants';
import { Property, FilterState } from './types';

const App: React.FC = () => {
  const [walletConnected, setWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [filters, setFilters] = useState<FilterState>({
    zone: '',
    type: '',
    minPrice: 0,
    maxPrice: 0
  });

  const handleConnectWallet = () => {
    // Simulation of wallet connection
    if (!walletConnected) {
      setWalletConnected(true);
      setWalletAddress('0x71C...9A21');
    } else {
      setWalletConnected(false);
      setWalletAddress(null);
    }
  };

  const handleSearch = (newFilters: Partial<FilterState>) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  const filteredProperties = useMemo(() => {
    return MOCK_PROPERTIES.filter(p => {
      if (filters.zone && p.zone !== filters.zone) return false;
      if (filters.type && p.type !== filters.type) return false;
      return true;
    });
  }, [filters]);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header 
        onConnectWallet={handleConnectWallet} 
        isWalletConnected={walletConnected} 
        walletAddress={walletAddress}
      />
      
      <main className="flex-grow">
        <Hero />
        
        <div className="container mx-auto px-4 transform -translate-y-8 md:-translate-y-12 z-20">
          <SearchBar onSearch={handleSearch} />
        </div>

        <section id="propiedades" className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-end mb-10">
              <div>
                <h2 className="text-3xl font-bold text-slate-900">Propiedades Destacadas</h2>
                <p className="text-slate-500 mt-2">Explora nuestra selección exclusiva en las mejores zonas.</p>
              </div>
              <div className="hidden md:block text-emerald-600 font-semibold cursor-pointer hover:underline">
                Ver todo el inventario &rarr;
              </div>
            </div>

            {filteredProperties.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {filteredProperties.map(property => (
                  <PropertyCard 
                    key={property.id} 
                    property={property} 
                    onViewDetail={setSelectedProperty} 
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-xl border border-dashed border-slate-300">
                <p className="text-slate-500">No se encontraron propiedades con esos filtros.</p>
                <button 
                  onClick={() => handleSearch({ zone: '', type: '' })}
                  className="mt-4 text-emerald-500 font-bold hover:underline"
                >
                  Limpiar filtros
                </button>
              </div>
            )}
          </div>
        </section>

        <ValueProp />
        
        {/* Map Section Placeholder (Simulated Iframe) */}
        <section className="py-0 h-96 w-full bg-slate-200 relative">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15690.871239643444!2d-75.5463762!3d10.4230861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sco!4v1700000000000!5m2!1sen!2sco" 
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: 'grayscale(0.2)' }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa Cartagena"
            className="w-full h-full"
          ></iframe>
          <div className="absolute top-4 left-4 bg-white p-4 rounded-lg shadow-lg max-w-xs">
            <h4 className="font-bold text-slate-800">Ubicaciones Premium</h4>
            <p className="text-xs text-slate-500 mt-1">Explora nuestros proyectos en Bocagrande, Centro y Zona Norte.</p>
          </div>
        </section>

        <HowItWorks />
        <Testimonials testimonials={TESTIMONIALS} />
        <LeadForm />
      </main>

      <Footer />
      <WhatsAppButton />

      {selectedProperty && (
        <PropertyModal 
          property={selectedProperty} 
          onClose={() => setSelectedProperty(null)} 
        />
      )}
    </div>
  );
};

export default App;