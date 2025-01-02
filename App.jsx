import React, { useState } from 'react';
import { Brain, Heart, Shield, Sparkles, Target, CircuitBoard, ChevronRight, ArrowRight, Users, Clock, Award, CheckCircle2, BarChart3, Lock } from 'lucide-react';

const SPECIALTIES = [
  { 
    id: 'cardio',
    icon: <Heart className="w-8 h-8 text-gray-400" />,
    name: "Cardiologia",
    accuracy: "98.5%",
    conditions: ["Arritmias", "Hipertensão", "Insuficiência Cardíaca", "Cardiopatias"],
    description: "Análise avançada de exames cardíacos com IA",
    examTypes: ["ECG", "Holter", "MAPA", "Ecocardiograma"],
    benefits: ["Detecção precoce", "Monitoramento 24/7", "Análise preditiva"]
  },
  {
    id: 'neuro',
    icon: <Brain className="w-8 h-8 text-gray-400" />,
    name: "Neurologia",
    accuracy: "97.8%",
    conditions: ["Epilepsia", "Alzheimer", "AVC", "Parkinson"],
    description: "Diagnóstico neurológico assistido por IA",
    examTypes: ["EEG", "Ressonância", "Tomografia", "PET"],
    benefits: ["Mapeamento cerebral", "Análise comportamental", "Previsão de eventos"]
  },
  {
    id: 'derm',
    icon: <Shield className="w-8 h-8 text-gray-400" />,
    name: "Dermatologia",
    accuracy: "99.2%",
    conditions: ["Melanoma", "Dermatites", "Psoríase", "Lesões"],
    description: "Análise dermatológica com visão computacional",
    examTypes: ["Dermatoscopia", "Microscopia", "Fotografia UV", "Biópsia"],
    benefits: ["Detecção de lesões", "Acompanhamento evolutivo", "Classificação automática"]
  }
];

const FEATURES = [
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "IA Avançada",
    description: "Algoritmos de última geração com precisão superior a 97%"
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: "Segurança",
    description: "Proteção de dados com criptografia de ponta a ponta"
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Rapidez",
    description: "Resultados em minutos, não em dias"
  }
];

const STATS = [
  {
    id: 'diagnostics',
    icon: <Target className="w-6 h-6" />,
    value: "500mil+",
    label: "Diagnósticos",
    trend: "+15% ao mês",
    detail: "Casos analisados com sucesso"
  },
  {
    id: 'doctors',
    icon: <Users className="w-6 h-6" />,
    value: "2.500+",
    label: "Médicos",
    trend: "+25% ao mês",
    detail: "Profissionais conectados"
  },
  {
    id: 'time',
    icon: <Sparkles className="w-6 h-6" />,
    value: "3min",
    label: "Tempo Médio",
    trend: "-30% vs tradicional",
    detail: "De análise por caso"
  },
  {
    id: 'accuracy',
    icon: <Award className="w-6 h-6" />,
    value: "98.5%",
    label: "Precisão",
    trend: "+2% este ano",
    detail: "Taxa média de acerto"
  }
];

const Preview = () => {
  const [activeTab, setActiveTab] = useState('beneficios');
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-black text-gray-200">
      {/* Header */}
      <header className="w-full bg-black/90 backdrop-blur-sm border-b border-gray-800">
        <nav className="flex items-center justify-between max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-2">
            <Brain className="w-8 h-8" />
            <span className="text-2xl font-bold">Cognai</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <button className="text-gray-400 hover:text-gray-200">Especialidades</button>
            <button className="text-gray-400 hover:text-gray-200">Tecnologia</button>
            <button className="text-gray-400 hover:text-gray-200">Cases</button>
            <button className="px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg hover:from-gray-600 hover:to-gray-700">
              Área do Médico
            </button>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-gray-800 border border-gray-700">
            <span className="text-gray-400">Diagnóstico Preciso em Minutos</span>
          </div>
          <h1 className="text-5xl font-bold mb-8">
            Medicina do Futuro
            <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-400">
              Disponível Hoje
            </span>
          </h1>
          <p className="text-gray-400 text-lg mb-8">
            Combine expertise médica com inteligência artificial para diagnósticos mais precisos,
            rápidos e confiáveis. Uma nova era na medicina diagnóstica.
          </p>
          <div className="flex items-center justify-center gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg hover:from-gray-600 hover:to-gray-700">
              <span className="flex items-center">Agendar Demo<ArrowRight className="ml-2 w-5 h-5" /></span>
            </button>
            <button className="px-8 py-4 border border-gray-700 rounded-lg hover:bg-gray-800/50">
              Conhecer Planos
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 py-16 bg-black/50">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map(({id, icon, value, label, trend, detail}) => (
            <div key={id} className="text-center group">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-gray-800 rounded-lg group-hover:bg-gray-700">
                  {icon}
                </div>
              </div>
              <div className="text-2xl font-bold mb-2">{value}</div>
              <div className="text-gray-400 text-sm mb-1">{label}</div>
              <div className="text-gray-500 text-xs mb-2">{detail}</div>
              <div className="text-green-500 text-xs">{trend}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-16 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Recursos Principais</h2>
            <p className="text-gray-400">Tecnologia de ponta para resultados excepcionais</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {FEATURES.map((feature, index) => (
              <div key={index} className="p-6 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-gray-700">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-gray-800 rounded-lg">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                </div>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="px-6 py-16 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Especialidades Médicas</h2>
            <p className="text-gray-400">IA especializada em múltiplas áreas da medicina</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {SPECIALTIES.map((specialty) => (
              <div key={specialty.id} 
                className="p-6 bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700 hover:border-gray-600">
                <div className="flex items-center gap-4 mb-4">
                  {specialty.icon}
                  <div>
                    <h3 className="text-xl font-semibold">{specialty.name}</h3>
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
                
                {/* Tab Content */}
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

      {/* CTA */}
      <section className="px-6 py-16 bg-black">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Pronto para Começar?</h2>
          <p className="text-gray-400 mb-8">
            Agende uma demonstração e descubra como a IA pode transformar sua prática médica
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg hover:from-gray-600 hover:to-gray-700">
            <span className="flex items-center justify-center">Agendar Demonstração<ArrowRight className="ml-2 w-5 h-5" /></span>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 bg-black border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Brain className="w-6 h-6" />
                <span className="text-xl font-bold">Cognai</span>
              </div>
              <p className="text-gray-400 text-sm">
                Transformando diagnósticos com inteligência artificial
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Produto</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Especialidades</li>
                <li>Tecnologia</li>
                <li>Segurança</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Sobre</li>
                <li>Cases</li>
                <li>Blog</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Privacidade</li>
                <li>Termos</li>
                <li>Compliance</li>
              </ul>
            </div>
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
