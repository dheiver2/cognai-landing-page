import React, { useState, useEffect } from 'react';
import { Brain, Heart, Shield, ArrowRight, Users, Target, CheckCircle2, ChevronRight, Menu, X, AlertTriangle, Star, Building2, Award, ArrowUpRight, PlusCircle, MinusCircle, Gift } from 'lucide-react';

const SPECIALTIES = [
  {
    id: 'cardio',
    icon: <Heart className="w-8 h-8 text-gray-400" />,
    name: "Cardiologia",
    accuracy: "99.2%",
    description: "Análise cardíaca com IA certificada pela FDA e ANVISA. Reduz em 82% o tempo de emissão de laudos com precisão superior a especialistas.",
    benefits: ["Redução de 73% em readmissões hospitalares", "Economia média de R$457 mil/ano em custos operacionais", "ROI comprovado de 284% no primeiro ano de uso"],
    examTypes: ["ECG com análise preditiva em 47 segundos", "Holter com detecção automática de 127 padrões", "MAPA com machine learning avançado"],
    metrics: "Redução média de 82% no tempo de laudo",
    recentCases: 1243,
    alertLevel: "baixo",
    waitTime: "2min"
  },
      {
    id: 'neuro',
    icon: <Brain className="w-8 h-8 text-gray-400" />,
    name: "Neurologia",
    accuracy: "98.8%",
    description: "Sistema premiado pela Academia Americana de Neurologia. Aumenta em 312% a produtividade da equipe médica com IA certificada.",
    benefits: ["Economia de R$892 mil/ano em custos operacionais", "Aumento de 237% na capacidade de atendimento", "Redução de 68% em diagnósticos falso-negativos"],
    examTypes: ["EEG com processamento em 2.3 minutos", "Ressonância com análise automatizada", "PET-CT com machine learning"],
    metrics: "Aumento de 312% na produtividade médica",
    recentCases: 892,
    alertLevel: "médio",
    waitTime: "5min"
  },
      {
    id: 'derm',
    icon: <Shield className="w-8 h-8 text-gray-400" />,
    name: "Dermatologia",
    accuracy: "99.5%",
    description: "Tecnologia validada em 37 países. Processa 2.457 imagens/hora com precisão superior a dermatologistas especialistas.",
    benefits: ["Retorno sobre investimento de 347% em 12 meses", "Redução de 78% no tempo de diagnóstico", "Economia média de R$674 mil/ano"],
    examTypes: ["Análise dermatoscópica em 18 segundos", "Microscopia digital de alta precisão", "Mapeamento corporal inteligente"],
    metrics: "ROI médio de 347% no primeiro ano",
    recentCases: 1567,
    alertLevel: "crítico",
    waitTime: "8min"
  }
];

const Preview = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('beneficios');
  const [totalCases, setTotalCases] = useState(0);
  const [selectedSpecialty, setSelectedSpecialty] = useState(null);
  const [caseCount, setCaseCount] = useState({});
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Simula atualização de casos em tempo real
    const interval = setInterval(() => {
      setCaseCount(prev => {
        const updated = { ...prev };
        SPECIALTIES.forEach(specialty => {
          updated[specialty.id] = (prev[specialty.id] || specialty.recentCases) + Math.floor(Math.random() * 3);
        });
        return updated;
      });
      setCurrentTime(new Date());
    }, 3000);

    // Inicializa contadores
    const initial = {};
    SPECIALTIES.forEach(specialty => {
      initial[specialty.id] = specialty.recentCases;
    });
    setCaseCount(initial);

    return () => clearInterval(interval);
  }, []);

  const getAlertColor = (level) => {
    switch(level) {
      case 'baixo': return 'text-green-400';
      case 'médio': return 'text-yellow-400';
      case 'crítico': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const handleSpecialtyClick = (specialty) => {
    setSelectedSpecialty(selectedSpecialty?.id === specialty.id ? null : specialty);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-black text-gray-200">
      <header className="fixed w-full z-50 bg-black/90 backdrop-blur border-b border-gray-800">
        <nav className="flex items-center justify-between max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-2">
            <Brain className="w-8 h-8" />
            <span className="text-2xl font-bold">Cognai</span>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <div className="px-4 py-1 bg-gray-800 rounded-lg text-sm">
              {currentTime.toLocaleTimeString()}
            </div>
            <div className="px-4 py-1 bg-gray-800 rounded-lg text-sm">
              Casos hoje: {Object.values(caseCount).reduce((a, b) => a + b, 0)}
            </div>
          </div>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </nav>
        {isMenuOpen && (
          <div className="md:hidden p-4 bg-black/95 border-t border-gray-800 animate-fadeIn">
            <div className="flex flex-col space-y-4">
              {SPECIALTIES.map(specialty => (
                <button key={specialty.id} 
                  className="text-gray-400 hover:text-gray-200 py-2 flex items-center justify-between">
                  {specialty.name}
                  <span className={`text-sm ${getAlertColor(specialty.alertLevel)}`}>
                    {caseCount[specialty.id] || specialty.recentCases} casos
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-gray-800 border border-gray-700">
            <span className="text-gray-400 flex items-center gap-2">
              <span className="flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Sistema Online • {Object.values(caseCount).reduce((a, b) => a + b, 0)} análises hoje
            </span>
          </div>
          <h1 className="text-5xl font-bold mb-8">
            Medicina do Futuro
            <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-400">
              Disponível Hoje
            </span>
          </h1>
          <p className="text-gray-400 text-lg mb-8">
            Inteligência Artificial de última geração para diagnósticos médicos com precisão superior a 98%
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <button className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg hover:from-gray-600 group">
              <span className="flex items-center justify-center">
                Agendar Demo
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </span>
            </button>
            <button className="w-full md:w-auto px-8 py-4 border border-gray-700 rounded-lg hover:bg-gray-800/50">
              Ver Cases
            </button>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Especialidades Médicas</h2>
            <p className="text-gray-400">IA especializada com precisão superior a 98% em múltiplas áreas</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {SPECIALTIES.map((specialty) => (
              <div key={specialty.id} 
                onClick={() => handleSpecialtyClick(specialty)}
                className={`p-6 bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-xl border 
                  ${selectedSpecialty?.id === specialty.id ? 'border-gray-500' : 'border-gray-700'} 
                  hover:border-gray-600 cursor-pointer transition-all duration-300 transform hover:-translate-y-1`}>
                <div className="flex items-center gap-4 mb-4">
                  {specialty.icon}
                  <div>
                    <h3 className="text-xl font-semibold">{specialty.name}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400 text-sm">Precisão: {specialty.accuracy}</span>
                      <span className={`text-sm ${getAlertColor(specialty.alertLevel)} flex items-center gap-1`}>
                        <AlertTriangle className="w-4 h-4" />
                        {specialty.alertLevel}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center mb-4 text-sm">
                  <span className="text-gray-400">Tempo de espera: {specialty.waitTime}</span>
                  <span className="text-gray-400">
                    Casos hoje: {caseCount[specialty.id] || specialty.recentCases}
                  </span>
                </div>

                <p className="text-gray-400 text-sm mb-4">{specialty.description}</p>
                
                <div className="flex gap-2 mb-4">
                  <button onClick={(e) => {e.stopPropagation(); setActiveTab('beneficios')}}
                    className={`px-3 py-1 rounded-lg text-sm ${activeTab === 'beneficios' ? 'bg-gray-700 text-white' : 'text-gray-400 hover:bg-gray-800'}`}>
                    Benefícios
                  </button>
                  <button onClick={(e) => {e.stopPropagation(); setActiveTab('exames')}}
                    className={`px-3 py-1 rounded-lg text-sm ${activeTab === 'exames' ? 'bg-gray-700 text-white' : 'text-gray-400 hover:bg-gray-800'}`}>
                    Exames
                  </button>
                </div>

                <ul className="space-y-2">
                  {activeTab === 'beneficios' ? 
                    specialty.benefits.map((item, idx) => (
                      <li key={idx} className="text-gray-400 text-sm flex items-center gap-2 group">
                        <CheckCircle2 className="w-4 h-4 group-hover:text-green-400 transition-colors" />
                        {item}
                      </li>
                    )) :
                    specialty.examTypes.map((item, idx) => (
                      <li key={idx} className="text-gray-400 text-sm flex items-center gap-2 group">
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        {item}
                      </li>
                    ))
                  }
                </ul>

                <div className="mt-4 pt-4 border-t border-gray-700">
                  <p className="text-green-400 text-sm">{specialty.metrics}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="px-6 py-8 bg-black border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Brain className="w-6 h-6" />
            <span className="text-xl font-bold">Cognai</span>
          </div>
          <p className="text-gray-400 text-sm">
            © 2025 Cognai | Transformando diagnósticos médicos com IA
          </p>
          <div className="mt-4 text-sm text-gray-500">
            {currentTime.toLocaleString()} • Sistema Operacional
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Preview;
