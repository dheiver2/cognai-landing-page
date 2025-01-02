import React, { useState } from 'react';
import { Brain, Heart, Shield, Sparkles, Target, CircuitBoard, ChevronRight, ArrowRight, Users, Clock, Award, CheckCircle2, BarChart3, Lock, Menu, X } from 'lucide-react';

const SPECIALTIES = [
  { 
    id: 'cardio',
    icon: <Heart className="w-8 h-8 text-gray-400" />,
    name: "Cardiologia",
    accuracy: "98.5%",
    conditions: ["Arritmias", "Hipertensão", "Insuficiência Cardíaca"],
    description: "Análise avançada de exames cardíacos com IA",
    examTypes: ["ECG", "Holter", "MAPA"],
    benefits: ["Detecção precoce", "Monitoramento 24/7", "Análise preditiva"]
  },
  {
    id: 'neuro',
    icon: <Brain className="w-8 h-8 text-gray-400" />,
    name: "Neurologia",
    accuracy: "97.8%",
    conditions: ["Epilepsia", "Alzheimer", "AVC"],
    description: "Diagnóstico neurológico assistido por IA",
    examTypes: ["EEG", "Ressonância", "PET"],
    benefits: ["Mapeamento cerebral", "Análise comportamental", "Previsão"]
  },
  {
    id: 'derm',
    icon: <Shield className="w-8 h-8 text-gray-400" />,
    name: "Dermatologia",
    accuracy: "99.2%",
    conditions: ["Melanoma", "Dermatites", "Psoríase"],
    description: "Análise dermatológica com visão computacional",
    examTypes: ["Dermatoscopia", "Microscopia", "Biópsia"],
    benefits: ["Detecção de lesões", "Acompanhamento", "Classificação"]
  }
];

const STATS = [
  {
    id: 'diagnostics',
    icon: <Target className="w-6 h-6" />,
    value: "500mil+",
    label: "Diagnósticos",
    trend: "+15% ao mês"
  },
  {
    id: 'doctors',
    icon: <Users className="w-6 h-6" />,
    value: "2.500+",
    label: "Médicos",
    trend: "+25% ao mês"
  }
];

const Preview = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('beneficios');

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-black text-gray-200">
      {/* Header */}
      <header className="fixed w-full z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
        <nav className="flex items-center justify-between max-w-7xl mx-auto px-4 md:px-6 py-4">
          <div className="flex items-center gap-2">
            <Brain className="w-8 h-8" />
            <span className="text-2xl font-bold">Cognai</span>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button className="text-gray-400 hover:text-gray-200">Especialidades</button>
            <button className="text-gray-400 hover:text-gray-200">Tecnologia</button>
            <button className="text-gray-400 hover:text-gray-200">Cases</button>
            <button className="px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg hover:from-gray-600 hover:to-gray-700">
              Área do Médico
            </button>
          </div>
        </nav>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden px-4 py-4 bg-black/95 border-t border-gray-800">
            <div className="flex flex-col space-y-4">
              <button className="text-gray-400 hover:text-gray-200 py-2">Especialidades</button>
              <button className="text-gray-400 hover:text-gray-200 py-2">Tecnologia</button>
              <button className="text-gray-400 hover:text-gray-200 py-2">Cases</button>
              <button className="px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg hover:from-gray-600 hover:to-gray-700">
                Área do Médico
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-4 md:px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-gray-800 border border-gray-700">
            <span className="text-gray-400 text-sm md:text-base">Diagnóstico Preciso em Minutos</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-8">
            Medicina do Futuro
            <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-400">
              Disponível Hoje
            </span>
          </h1>
          <p className="text-gray-400 text-base md:text-lg mb-8 px-4 md:px-0">
            Combine expertise médica com inteligência artificial para diagnósticos mais precisos.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <button className="w-full md:w-auto px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg hover:from-gray-600 hover:to-gray-700">
              <span className="flex items-center justify-center">Agendar Demo<ArrowRight className="ml-2 w-5 h-5" /></span>
            </button>
            <button className="w-full md:w-auto px-6 md:px-8 py-3 md:py-4 border border-gray-700 rounded-lg hover:bg-gray-800/50">
              Conhecer Planos
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-4 md:px-6 py-16 bg-black/50">
        <div className="max-w-7xl mx-auto grid grid-cols-2 gap-4 md:gap-8">
          {STATS.map(({id, icon, value, label, trend}) => (
            <div key={id} className="text-center group p-4 md:p-6">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-gray-800 rounded-lg group-hover:bg-gray-700">
                  {icon}
                </div>
              </div>
              <div className="text-xl md:text-2xl font-bold mb-2">{value}</div>
              <div className="text-gray-400 text-sm">{label}</div>
              <div className="text-green-500 text-xs mt-2">{trend}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Specialties */}
      <section className="px-4 md:px-6 py-16 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Especialidades Médicas</h2>
            <p className="text-gray-400">IA especializada em múltiplas áreas da medicina</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {SPECIALTIES.map((specialty) => (
              <div key={specialty.id} 
                className="p-4 md:p-6 bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700 hover:border-gray-600">
                <div className="flex items-center gap-4 mb-4">
                  {specialty.icon}
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold">{specialty.name}</h3>
                    <span className="text-gray-400 text-sm">Precisão: {specialty.accuracy}</span>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-4">{specialty.description}</p>
                
                {/* Tabs */}
                <div className="flex gap-2 mb-4">
                  <button 
                    onClick={() => setActiveTab('beneficios')}
                    className={`px-3 py-1 rounded-lg text-sm ${activeTab === 'beneficios' ? 'bg-gray-700 text-white' : 'text-gray-400 hover:bg-gray-800'}`}>
                    Benefícios
                  </button>
                  <button 
                    onClick={() => setActiveTab('exames')}
                    className={`px-3 py-1 rounded-lg text-sm ${activeTab === 'exames' ? 'bg-gray-700 text-white' : 'text-gray-400 hover:bg-gray-800'}`}>
                    Exames
                  </button>
                </div>
                
                <ul className="space-y-2">
                  {activeTab === 'beneficios' ? 
                    specialty.benefits.map((item, idx) => (
                      <li key={idx} className="text-gray-400 text-sm flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4" />{item}
                      </li>
                    )) :
                    specialty.examTypes.map((item, idx) => (
                      <li key={idx} className="text-gray-400 text-sm flex items-center gap-2">
                        <ChevronRight className="w-4 h-4" />{item}
                      </li>
                    ))
                  }
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 md:px-6 py-12 bg-black border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <Brain className="w-6 h-6" />
                <span className="text-xl font-bold">Cognai</span>
              </div>
              <p className="text-gray-400 text-sm">
                Transformando diagnósticos com IA
              </p>
            </div>
            {['Produto', 'Empresa', 'Legal'].map((title, idx) => (
              <div key={idx}>
                <h4 className="font-semibold mb-4">{title}</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  {['Link 1', 'Link 2', 'Link 3'].map((item, i) => (
                    <li key={i} className="hover:text-gray-300 cursor-pointer">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center text-gray-400 text-sm pt-8 border-t border-gray-800">
            © 2025 Cognai | Medicina do Futuro
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Preview;
