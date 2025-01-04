import React, { useState, useEffect } from 'react';
import { Brain, Heart, Shield, BarChart2, ArrowRight, Globe, Users, 
         Activity, Award, Star, Clock, Check, ArrowUpRight, ChevronRight,
         DollarSign, Zap, Lock, LineChart, Building } from 'lucide-react';

// Dados de Marketing e Métricas
const FEATURES = [
  {
    icon: <Brain className="w-6 h-6 text-emerald-400" />,
    title: "Algoritmo Avançado",
    desc: "IA de última geração com aprendizado contínuo e precisão superior a 99.5%"
  },
  {
    icon: <Shield className="w-6 h-6 text-blue-400" />,
    title: "Certificações",
    desc: "Certificado por FDA, ANVISA e principais órgãos reguladores"
  },
  {
    icon: <Clock className="w-6 h-6 text-purple-400" />,
    title: "Diagnóstico Rápido",
    desc: "Resultados em segundos, reduzindo tempo de espera em 82%"
  },
  {
    icon: <DollarSign className="w-6 h-6 text-amber-400" />,
    title: "ROI Comprovado",
    desc: "Retorno médio de 347% sobre investimento no primeiro ano"
  }
];

const SPECIALTIES = [
  {
    id: 'cardio',
    icon: <Heart className="w-8 h-8 text-rose-500" />,
    title: "Cardiologia",
    accuracy: "99.2%",
    desc: "Análise cardíaca avançada com detecção precoce de patologias",
    features: ["ECG em tempo real", "Detecção de arritmias", "Previsão de riscos"],
    metrics: { speed: "3s", accuracy: "99.2%", papers: "147" }
  },
  {
    id: 'neuro',
    icon: <Brain className="w-8 h-8 text-emerald-500" />,
    title: "Neurologia",
    accuracy: "98.8%",
    desc: "Análise cerebral com mapeamento 3D de alta precisão",
    features: ["Mapeamento 3D", "Detecção precoce", "Análise comparativa"],
    metrics: { speed: "5s", accuracy: "98.8%", papers: "92" }
  },
  {
    id: 'radio',
    icon: <LineChart className="w-8 h-8 text-blue-500" />,
    title: "Radiologia",
    accuracy: "99.5%",
    desc: "Processamento avançado de imagens com reconstrução 3D",
    features: ["Reconstrução 3D", "Análise multiespectral", "Comparação histórica"],
    metrics: { speed: "2s", accuracy: "99.5%", papers: "183" }
  }
];

const TESTIMONIALS = [
  {
    quote: "A Cognai revolucionou nossa capacidade diagnóstica. Reduzimos o tempo de laudo em 82% com precisão superior.",
    author: "Dr. Carlos Silva",
    role: "Diretor Clínico",
    hospital: "Hospital São Paulo",
    image: "/api/placeholder/60/60"
  },
  {
    quote: "Implementamos a Cognai em nossa rede e os resultados superaram todas as expectativas. ROI impressionante.",
    author: "Dra. Marina Santos",
    role: "Coordenadora de Inovação",
    hospital: "Rede D'Or",
    image: "/api/placeholder/60/60"
  }
];

const METRICS = [
  { label: "Precisão Média", value: "99.2%" },
  { label: "Hospitais Parceiros", value: "120+" },
  { label: "Laudos/Mês", value: "50k+" },
  { label: "Redução de Custos", value: "82%" }
];

function App() {
  const [activeSpecialty, setActiveSpecialty] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-4 bg-black/90 backdrop-blur-sm' : 'py-6 bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Activity className="w-6 h-6 text-blue-500" />
            <span className="font-bold text-xl">Cognai</span>
          </div>
          <div className="flex items-center gap-8">
            <div className="hidden md:flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition">Soluções</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Tecnologia</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Casos</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Sobre</a>
            </div>
            <button className="bg-white/10 px-4 py-2 rounded-full text-sm hover:bg-white/20 transition">
              Login
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-purple-500/5 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent opacity-60" />
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1 rounded-full text-sm mb-8">
              <Star className="w-4 h-4 text-amber-400" />
              Líder em IA para Diagnósticos Médicos
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Revolucione seus
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-rose-400 text-transparent bg-clip-text">
                diagnósticos médicos
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-10 max-w-xl">
              Inteligência Artificial de última geração para diagnósticos mais rápidos, 
              precisos e confiáveis em sua prática médica.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition flex items-center gap-2 justify-center group">
                Agendar Demonstração
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white/10 px-8 py-4 rounded-full font-medium hover:bg-white/20 transition">
                Falar com Especialista
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Métricas */}
      <section className="py-20 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {METRICS.map((metric, i) => (
              <div key={i} className="text-center">
                <p className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text mb-2">
                  {metric.value}
                </p>
                <p className="text-gray-400">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Especialidades */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Especialidades Médicas</h2>
            <p className="text-gray-400">
              Soluções especializadas para cada área da medicina, com tecnologia 
              de ponta e resultados comprovados.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SPECIALTIES.map((specialty) => (
              <div
                key={specialty.id}
                className="group p-8 bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-2xl hover:border-gray-700 transition-all relative overflow-hidden cursor-pointer"
                onMouseEnter={() => setActiveSpecialty(specialty.id)}
                onMouseLeave={() => setActiveSpecialty(null)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-rose-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  {specialty.icon}
                  <h3 className="text-xl font-semibold mt-4 mb-2">{specialty.title}</h3>
                  <p className="text-gray-400 mb-4">{specialty.desc}</p>
                  <ul className="space-y-2">
                    {specialty.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-400">
                        <Check className="w-4 h-4 text-blue-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  {activeSpecialty === specialty.id && (
                    <div className="mt-6 pt-6 border-t border-gray-800">
                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <p className="text-sm text-gray-400">Velocidade</p>
                          <p className="font-semibold">{specialty.metrics.speed}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">Precisão</p>
                          <p className="font-semibold">{specialty.metrics.accuracy}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">Estudos</p>
                          <p className="font-semibold">{specialty.metrics.papers}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURES.map((feature, i) => (
              <div key={i} className="group p-6 bg-gray-900/50 rounded-xl hover:bg-gray-900 transition-all">
                {feature.icon}
                <h3 className="text-lg font-semibold mt-4 mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">O que dizem nossos parceiros</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((testimonial, i) => (
              <div key={i} className="p-8 bg-gray-900/50 rounded-2xl">
                <p className="text-lg italic mb-6">{testimonial.quote}</p>
                <div className="flex items-center gap-4">
                  <img src={testimonial.image} alt={testimonial.author} className="w-12 h-12 rounded-full" />
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                    <p className="text-sm text-gray-400">{testimonial.hospital}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Pronto para transformar seus diagnósticos?
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Junte-se a mais de 120 hospitais que já revolucionaram sua prática médica com a Cognai
          </p>
          <button className="bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-4 rounded-full font-medium hover:opacity-90 transition-opacity">
            Começar Agora
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Brand Column */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Activity className="w-6 h-6 text-blue-500" />
                <span className="font-bold text-xl">Cognai</span>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Transformando diagnósticos médicos através da inteligência artificial.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <Building className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <Globe className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <Users className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Produto</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition flex items-center gap-1">
                    <ChevronRight className="w-4 h-4" />
                    Soluções
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition flex items-center gap-1">
                    <ChevronRight className="w-4 h-4" />
                    Integrações
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition flex items-center gap-1">
                    <ChevronRight className="w-4 h-4" />
                    Preços
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition flex items-center gap-1">
                    <ChevronRight className="w-4 h-4" />
                    Cases
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition flex items-center gap-1">
                    <ChevronRight className="w-4 h-4" />
                    Sobre nós
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition flex items-center gap-1">
                    <ChevronRight className="w-4 h-4" />
                    Carreiras
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition flex items-center gap-1">
                    <ChevronRight className="w-4 h-4" />
                    Certificações
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition flex items-center gap-1">
                    <ChevronRight className="w-4 h-4" />
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-semibold mb-4">Newsletter</h4>
              <p className="text-sm text-gray-400 mb-4">
                Receba novidades sobre IA na medicina e atualizações exclusivas.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="bg-gray-800 text-gray-200 px-4 py-2 rounded-lg flex-1 text-sm border border-gray-700 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <button className="bg-blue-500 hover:bg-blue-600 p-2 rounded-lg transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © 2024 Cognai. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition">Privacidade</a>
              <a href="#" className="hover:text-white transition">Termos</a>
              <a href="#" className="hover:text-white transition">Suporte</a>
              <a href="#" className="hover:text-white transition">Contato</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
