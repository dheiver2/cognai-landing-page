import React, { useState, useEffect } from 'react';
import {
  Brain,
  Heart,
  Shield,
  AlertTriangle,
} from 'lucide-react';

const SPECIALTIES = [
  {
    id: 'cardio',
    icon: <Heart className="w-8 h-8 text-gray-400" />,
    name: "Cardiologia",
    accuracy: "99.2%",
    description: "Análise cardíaca com IA certificada pela FDA e ANVISA. Reduz em 82% o tempo de emissão de laudos com precisão superior a especialistas.",
    benefits: ["Redução de 73% em readmissões hospitalares", "Economia média de R$457 mil/ano em custos operacionais", "ROI comprovado de 284% no primeiro ano de uso"],
    metrics: "Redução média de 82% no tempo de laudo",
    alertLevel: "baixo",
  },
  {
    id: 'neuro',
    icon: <Brain className="w-8 h-8 text-gray-400" />,
    name: "Neurologia",
    accuracy: "98.8%",
    description: "Sistema premiado pela Academia Americana de Neurologia.",
    benefits: ["Economia de R$892 mil/ano em custos operacionais", "Aumento de 237% na capacidade de atendimento"],
    metrics: "Aumento de 312% na produtividade médica",
    alertLevel: "médio",
  },
  {
    id: 'derm',
    icon: <Shield className="w-8 h-8 text-gray-400" />,
    name: "Dermatologia",
    accuracy: "99.5%",
    description: "Tecnologia validada em 37 países.",
    benefits: ["Retorno sobre investimento de 347% em 12 meses"],
    metrics: "ROI médio de 347% no primeiro ano",
    alertLevel: "crítico",
  }
];

function App() {
  const [selectedSpecialty, setSelectedSpecialty] = useState(null);

  const getAlertColor = (level) => {
    switch (level) {
      case 'baixo':
        return 'text-green-400';
      case 'médio':
        return 'text-yellow-400';
      case 'crítico':
        return 'text-red-400';
      default:
        return 'text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-gray-200">
      <header className="text-center p-4">
        <h1 className="text-4xl font-bold">Cognai - IA Médica</h1>
        <p className="text-gray-400">Transformando diagnósticos médicos com IA</p>
      </header>
      <main className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {SPECIALTIES.map((specialty) => (
            <div
              key={specialty.id}
              className="p-4 bg-gray-800 rounded-lg shadow-md cursor-pointer hover:bg-gray-700"
              onClick={() =>
                setSelectedSpecialty(
                  selectedSpecialty?.id === specialty.id ? null : specialty
                )
              }
            >
              <div className="flex items-center space-x-3">
                {specialty.icon}
                <h2 className="text-xl font-bold">{specialty.name}</h2>
              </div>
              <p className={`mt-2 ${getAlertColor(specialty.alertLevel)}`}>
                {specialty.description}
              </p>
              {selectedSpecialty?.id === specialty.id && (
                <ul className="mt-4 space-y-2 text-sm text-gray-400">
                  {specialty.benefits.map((benefit, index) => (
                    <li key={index}>&#8226; {benefit}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
