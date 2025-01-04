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

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('beneficios');
  const [totalCases, setTotalCases] = useState(0);
  const [selectedSpecialty, setSelectedSpecialty] = useState(null);
  const [caseCount, setCaseCount] = useState({});
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
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

  // Rest of your component code...
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-black text-gray-200">
      {/* Your existing JSX */}
    </div>
  );
}

export default App;
