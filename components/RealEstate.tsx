import React, { useState } from 'react';
import { Property, PropertyType, Zone } from '../types';
import { Search, Bed, Bath, Move, MapPin, Sparkles, X, BrainCircuit, Check } from 'lucide-react';
import { getInvestmentAnalysis } from '../services/gemini';

interface PropertyCardProps {
  property: Property;
  onViewDetail: (property: Property) => void;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ property, onViewDetail }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col h-full" onClick={() => onViewDetail(property)}>
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={property.imageUrl} 
          alt={property.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <span className="bg-slate-900/80 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
            {property.type}
          </span>
          {property.isTokenized && (
            <span className="bg-emerald-500/90 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
              <Sparkles size={10} /> Web3 Ready
            </span>
          )}
        </div>
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-4">
           <p className="text-white font-bold text-xl drop-shadow-md">
             {property.currency} {property.price.toLocaleString()}
           </p>
        </div>
      </div>
      
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-start justify-between mb-2">
           <h3 className="font-bold text-slate-800 text-lg leading-tight group-hover:text-emerald-600 transition-colors">
             {property.title}
           </h3>
        </div>
        
        <div className="flex items-center text-slate-500 text-sm mb-4">
          <MapPin size={14} className="mr-1 text-emerald-500" />
          {property.zone}
        </div>

        <div className="flex items-center justify-between text-slate-600 text-sm mt-auto pt-4 border-t border-slate-100">
          <span className="flex items-center gap-1"><Bed size={16} /> {property.bedrooms}</span>
          <span className="flex items-center gap-1"><Bath size={16} /> {property.bathrooms}</span>
          <span className="flex items-center gap-1"><Move size={16} /> {property.area} m²</span>
        </div>
        
        <button className="w-full mt-4 py-2 bg-slate-50 text-slate-900 font-medium rounded-lg group-hover:bg-slate-900 group-hover:text-white transition-colors">
          Ver Detalles
        </button>
      </div>
    </div>
  );
};

interface SearchBarProps {
  onSearch: (filters: any) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [zone, setZone] = useState('');
  const [type, setType] = useState('');

  const handleSearch = () => {
    onSearch({ zone, type });
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-lg max-w-4xl mx-auto -mt-12 relative z-20 flex flex-col md:flex-row gap-4 items-center border border-slate-100">
      <div className="flex-1 w-full">
        <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Ubicación</label>
        <select 
          className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-slate-700 focus:ring-2 focus:ring-emerald-500 outline-none"
          value={zone}
          onChange={(e) => setZone(e.target.value)}
        >
          <option value="">Todas las zonas</option>
          {Object.values(Zone).map(z => <option key={z} value={z}>{z}</option>)}
        </select>
      </div>
      
      <div className="flex-1 w-full">
        <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Tipo de Propiedad</label>
        <select 
          className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-slate-700 focus:ring-2 focus:ring-emerald-500 outline-none"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="">Cualquier tipo</option>
          {Object.values(PropertyType).map(t => <option key={t} value={t}>{t}</option>)}
        </select>
      </div>

      <div className="w-full md:w-auto pt-5">
        <button 
          onClick={handleSearch}
          className="w-full md:w-auto px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2"
        >
          <Search size={20} />
          Buscar
        </button>
      </div>
    </div>
  );
};

interface PropertyModalProps {
  property: Property;
  onClose: () => void;
}

export const PropertyModal: React.FC<PropertyModalProps> = ({ property, onClose }) => {
  const [aiAnalysis, setAiAnalysis] = useState<string | null>(null);
  const [loadingAi, setLoadingAi] = useState(false);

  const handleAiAnalysis = async () => {
    setLoadingAi(true);
    const analysis = await getInvestmentAnalysis(property);
    setAiAnalysis(analysis);
    setLoadingAi(false);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative shadow-2xl flex flex-col md:flex-row">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/80 rounded-full hover:bg-white text-slate-800 transition-colors"
        >
          <X size={24} />
        </button>

        {/* Image Side */}
        <div className="w-full md:w-1/2 h-64 md:h-auto relative">
           <img src={property.imageUrl} className="w-full h-full object-cover" alt={property.title} />
           <div className="absolute bottom-4 left-4">
             <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-bold">
               {property.currency} {property.price.toLocaleString()}
             </span>
           </div>
        </div>

        {/* Content Side */}
        <div className="w-full md:w-1/2 p-8 bg-white">
          <div className="mb-6">
            <span className="text-emerald-600 font-semibold text-sm tracking-wide uppercase">{property.zone}</span>
            <h2 className="text-3xl font-bold text-slate-900 mt-1 mb-2">{property.title}</h2>
            <p className="text-slate-600 leading-relaxed">{property.description}</p>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="text-center p-3 bg-slate-50 rounded-lg">
              <Bed className="mx-auto text-emerald-500 mb-1" size={20}/>
              <div className="font-bold text-slate-900">{property.bedrooms}</div>
              <div className="text-xs text-slate-500">Habitaciones</div>
            </div>
            <div className="text-center p-3 bg-slate-50 rounded-lg">
              <Bath className="mx-auto text-emerald-500 mb-1" size={20}/>
              <div className="font-bold text-slate-900">{property.bathrooms}</div>
              <div className="text-xs text-slate-500">Baños</div>
            </div>
            <div className="text-center p-3 bg-slate-50 rounded-lg">
              <Move className="mx-auto text-emerald-500 mb-1" size={20}/>
              <div className="font-bold text-slate-900">{property.area}</div>
              <div className="text-xs text-slate-500">Metros m²</div>
            </div>
          </div>

          {/* AI Analysis Section */}
          <div className="mb-8 p-5 bg-indigo-50 rounded-xl border border-indigo-100">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-indigo-900 flex items-center gap-2">
                <BrainCircuit size={18} className="text-indigo-600"/> 
                Análisis de Inversión (IA)
              </h3>
              {!aiAnalysis && !loadingAi && (
                <button 
                  onClick={handleAiAnalysis}
                  className="text-xs bg-indigo-600 text-white px-3 py-1.5 rounded-full hover:bg-indigo-700 transition-colors"
                >
                  Generar
                </button>
              )}
            </div>
            
            {loadingAi && (
              <div className="animate-pulse space-y-2">
                <div className="h-2 bg-indigo-200 rounded w-full"></div>
                <div className="h-2 bg-indigo-200 rounded w-5/6"></div>
                <div className="h-2 bg-indigo-200 rounded w-4/6"></div>
              </div>
            )}
            
            {aiAnalysis && (
              <p className="text-sm text-indigo-800 leading-relaxed animate-in fade-in slide-in-from-bottom-2">
                {aiAnalysis}
              </p>
            )}
          </div>

          <div className="flex gap-3">
            <button className="flex-1 bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-4 rounded-xl transition-colors">
              Agendar Visita
            </button>
            <button className="flex-1 border border-slate-200 hover:border-emerald-500 hover:text-emerald-500 text-slate-700 font-bold py-3 px-4 rounded-xl transition-colors">
              WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};