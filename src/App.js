import React, { useState } from 'react';
import {
  Brain,
  Heart,
  Shield,
  AlertTriangle,
  BarChart2,
  TrendingUp,
  CheckCircle,
  Clock,
  DollarSign,
  Award,
  Mail
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
    stats: {
      savings: 457000,
      efficiency: 82,
      roi: 284
    }
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
    stats: {
      savings: 892000,
      efficiency: 237,
      roi: 312
    }
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
    stats: {
      savings: 0,
      efficiency: 0,
      roi: 347
    }
  }
];

const BENEFITS = [
  {
    icon: <Clock className="w-6 h-6 text-blue-400" />,
    title: "Agilidade",
    description: "Reduza o tempo de diagnóstico em até 82% com nossa IA"
  },
  {
    icon: <DollarSign className="w-6 h-6 text-green-400" />,
    title: "Economia",
    description: "Economize até R$892 mil por ano em custos operacionais"
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-purple-400" />,
    title: "Precisão",
    description: "Precisão superior a 99% em diagnósticos, certificada por órgãos reguladores"
  },
  {
    icon: <Award className="w-6 h-6 text-yellow-400" />,
    title: "Certificações",
    description: "Tecnologia certificada pela FDA, ANVISA e validada em 37 países"
  }
];

const SpecialtyCard = ({ specialty, isSelected, onClick }) => {
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
    <div 
      className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:bg-gray-700 transition-colors duration-200 cursor-pointer animate-fadeIn"
      onClick={onClick}
    >
      <div className="flex items-center space-x-3">
        {specialty.icon}
        <h2 className="text-xl font-bold text-gray-200">{specialty.name}</h2>
        <span className="ml-auto text-sm font-medium bg-gray-700 px-2 py-1 rounded">
          {specialty.accuracy}
        </span>
      </div>
      
      <p className={`mt-4 text-sm ${getAlertColor(specialty.alertLevel)}`}>
        {specialty.description}
      </p>

      {isSelected && (
        <div className="mt-6 space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <BarChart2 className="w-6 h-6 mx-auto text-blue-400" />
              <p className="mt-2 text-sm text-gray-400">Economia Anual</p>
              <p className="font-bold text-gray-200">
                {specialty.stats.savings > 0 
                  ? `R$${(specialty.stats.savings / 1000).toFixed(0)}k` 
                  : 'N/A'}
              </p>
            </div>
            <div className="text-center">
              <TrendingUp className="w-6 h-6 mx-auto text-green-400" />
              <p className="mt-2 text-sm text-gray-400">Eficiência</p>
              <p className="font-bold text-gray-200">
                +{specialty.stats.efficiency}%
              </p>
            </div>
            <div className="text-center">
              <AlertTriangle className="w-6 h-6 mx-auto text-yellow-400" />
              <p className="mt-2 text-sm text-gray-400">ROI</p>
              <p className="font-bold text-gray-200">
                {specialty.stats.roi}%
              </p>
            </div>
          </div>

          <ul className="space-y-2 text-sm text-gray-400">
            {specialty.benefits.map((benefit, index) => (
              <li key={index} className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const TestimonialCard = ({ author, role, content }) => (
  <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
    <p className="text-gray-300 italic">{content}</p>
    <div className="mt-4">
      <p className="font-medium text-gray-200">{author}</p>
      <p className="text-sm text-gray-400">{role}</p>
    </div>
  </div>
);

function App() {
  const [selectedSpecialty, setSelectedSpecialty] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-gray-200">
      {/* Hero Section */}
      <header className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Cognai - IA Médica
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Transforme sua prática médica com inteligência artificial de ponta. 
            Reduza custos, aumente a precisão e melhore a eficiência dos diagnósticos.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg text-lg">
            Agende uma Demo
          </button>
        </div>
      </header>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Por que escolher a Cognai?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {BENEFITS.map((benefit, index) => (
              <div key={index} className="bg-gray-800 border border-gray-700 rounded-lg p-6">
                <div className="flex items-center space-x-4 mb-4">
                  {benefit.icon}
                  <h3 className="text-xl font-semibold">{benefit.title}</h3>
                </div>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Especialidades Médicas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SPECIALTIES.map((specialty) => (
              <SpecialtyCard
                key={specialty.id}
                specialty={specialty}
                isSelected={selectedSpecialty?.id === specialty.id}
                onClick={() => setSelectedSpecialty(
                  selectedSpecialty?.id === specialty.id ? null : specialty
                )}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            O que dizem nossos clientes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TestimonialCard
              author="Dr. Carlos Silva"
              role="Cardiologista, Hospital São Paulo"
              content="A Cognai revolucionou nossa prática clínica. A precisão e velocidade dos diagnósticos aumentaram significativamente, permitindo atender mais pacientes com maior qualidade."
            />
            <TestimonialCard
              author="Dra. Marina Santos"
              role="Neurologista, Clínica Neurológica"
              content="O suporte da IA nos diagnósticos neurológicos tem sido excepcional. Reduziu drasticamente nosso tempo de análise e melhorou a precisão dos laudos."
            />
            <TestimonialCard
              author="Dr. Ricardo Oliveira"
              role="Diretor Clínico, Hospital Central"
              content="O retorno sobre investimento foi surpreendente. Além da economia operacional, a satisfação dos pacientes aumentou consideravelmente."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para transformar sua prática médica?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Agende uma demonstração gratuita e descubra como a Cognai pode 
            revolucionar seus diagnósticos médicos.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg text-lg">
              Agende uma Demo
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white/10 px-8 py-3 rounded-lg text-lg">
              Fale com Especialista
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Cognai</h3>
              <p className="text-gray-400">
                Transformando diagnósticos médicos com inteligência artificial
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Especialidades</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Cardiologia</li>
                <li>Neurologia</li>
                <li>Dermatologia</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Sobre nós</li>
                <li>Carreiras</li>
                <li>Contato</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">
                Receba novidades e atualizações
              </p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="bg-gray-800 text-gray-200 px-4 py-2 rounded-lg flex-1"
                />
                <button className="bg-blue-500 hover:bg-blue-600 p-2 rounded-lg">
                  <Mail className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Cognai. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
