import React, { useState, useEffect, useRef } from 'react';
import {
  Brain, Heart, Shield, BarChart2, ArrowRight, Globe, Users, Activity,
  Award, Star, Clock, Check, ArrowUpRight, ChevronRight, DollarSign,
  Zap, Lock, LineChart, Building, Play, ChevronDown, Menu, X, Mail,
  ArrowUpCircle, Sparkles, Bell, ChartBar, PieChart, CheckCircle2,
  Share2, Download, Calendar, MessageCircle
} from 'lucide-react';

// Analytics e Tracking
const trackEvent = (eventName, data) => {
  // Implementar analytics aqui
  console.log('Track:', eventName, data);
};

// Dados Avançados
const PRODUCTS = [
  {
    id: 'cardio',
    icon: <Heart className="w-8 h-8 text-rose-500" />,
    title: "CognaiCardio",
    tagline: "IA Avançada em Cardiologia",
    accuracy: "99.2%",
    desc: "Sistema state-of-the-art para análise cardíaca com certificação FDA & ANVISA",
    keyPoints: [
      "Deep Learning em ECG em tempo real",
      "Detecção precoce de 128 patologias",
      "Integração com principais ECGs do mercado"
    ],
    features: [
      "Análise de ECG em tempo real",
      "Detecção avançada de arritmias",
      "Predição de eventos cardíacos",
      "Integração com EMR/EHR",
      "Dashboard personalizado",
      "Relatórios automatizados"
    ],
    metrics: {
      accuracy: "99.2%",
      speed: "< 3s",
      patologias: "128",
      estudos: "147",
      hospitais: "230+",
      laudos: "1.2M+"
    },
    pricing: {
      starter: {
        price: "R$ 1.997",
        features: ["Até 500 análises/mês", "Suporte 8x5", "API básica"]
      },
      pro: {
        price: "R$ 3.997",
        features: ["Análises ilimitadas", "Suporte 24x7", "API completa"]
      },
      enterprise: {
        price: "Personalizado",
        features: ["Infraestrutura dedicada", "SLA personalizado", "Suporte VIP"]
      }
    },
    certifications: [
      { name: "FDA", icon: "/api/placeholder/40/40" },
      { name: "ANVISA", icon: "/api/placeholder/40/40" },
      { name: "CE", icon: "/api/placeholder/40/40" },
      { name: "ISO 13485", icon: "/api/placeholder/40/40" }
    ],
    integrations: [
      { name: "Epic", icon: "/api/placeholder/40/40" },
      { name: "Cerner", icon: "/api/placeholder/40/40" },
      { name: "Philips", icon: "/api/placeholder/40/40" },
      { name: "GE Healthcare", icon: "/api/placeholder/40/40" }
    ],
    publications: [
      {
        title: "AI-Powered ECG Analysis: A Breakthrough Study",
        journal: "Nature Medicine",
        year: 2023,
        impact: 12.8
      },
      {
        title: "Deep Learning in Cardiac Imaging",
        journal: "The Lancet Digital Health",
        year: 2023,
        impact: 11.2
      }
    ]
  },
  {
    id: 'neuro',
    icon: <Brain className="w-8 h-8 text-blue-500" />,
    title: "CognaiNeuro",
    tagline: "Revolução em Neuroimagem",
    accuracy: "98.8%",
    desc: "Plataforma premiada de análise neurológica com IA avançada",
    keyPoints: [
      "Análise 3D de neuroimagem",
      "Detecção de 85+ condições",
      "Machine Learning adaptativo"
    ],
    features: [
      "Reconstrução 3D em tempo real",
      "Análise volumétrica automatizada",
      "Comparação com base de dados global",
      "Rastreamento de evolução temporal",
      "Relatórios estruturados",
      "Exportação multicformato"
    ],
    metrics: {
      accuracy: "98.8%",
      speed: "< 5s",
      patologias: "85",
      estudos: "92",
      hospitais: "180+",
      laudos: "850k+"
    }
  },
  {
    id: 'radio',
    icon: <Shield className="w-8 h-8 text-emerald-500" />,
    title: "CognaiRadio",
    tagline: "Transformação em Radiologia",
    accuracy: "99.5%",
    desc: "Sistema avançado de análise radiológica com IA de última geração",
    keyPoints: [
      "Processamento multi-modalidade",
      "Suporte a 95+ condições",
      "Análise comparativa temporal"
    ],
    features: [
      "Detecção automática de anomalias",
      "Reconstrução multiplanar",
      "Medições automatizadas",
      "Comparação histórica",
      "Integração PACS/RIS",
      "Laudos estruturados"
    ],
    metrics: {
      accuracy: "99.5%",
      speed: "< 2s",
      patologias: "95",
      estudos: "183",
      hospitais: "210+",
      laudos: "1.5M+"
    }
  }
];

const ACHIEVEMENTS = [
  {
    icon: <Award className="w-6 h-6 text-amber-400" />,
    title: "Prêmio Inovação em Saúde 2023",
    org: "Healthcare Innovation Summit"
  },
  {
    icon: <Star className="w-6 h-6 text-purple-400" />,
    title: "Melhor IA Médica do Ano",
    org: "AI Healthcare Awards"
  },
  {
    icon: <CheckCircle2 className="w-6 h-6 text-emerald-400" />,
    title: "ISO 27001 & HIPAA Compliant",
    org: "Certificação Internacional"
  }
];

const METRICS = {
  business: [
    { label: "Precisão Média", value: "99.2%", icon: <Target /> },
    { label: "Hospitais Parceiros", value: "450+", icon: <Building /> },
    { label: "Laudos/Mês", value: "2.5M+", icon: <FileText /> },
    { label: "Economia Média", value: "82%", icon: <TrendingUp /> }
  ],
  technical: [
    { label: "Uptime", value: "99.99%", icon: <Activity /> },
    { label: "Tempo Médio", value: "2.3s", icon: <Clock /> },
    { label: "Precisão", value: "99.5%", icon: <Target /> },
    { label: "Integrações", value: "50+", icon: <Link /> }
  ],
  impact: [
    { label: "Vidas Impactadas", value: "12M+", icon: <Users /> },
    { label: "Diagnósticos", value: "45M+", icon: <FileCheck /> },
    { label: "Países", value: "28", icon: <Globe /> },
    { label: "ROI Médio", value: "347%", icon: <TrendingUp /> }
  ]
};

// Componentes Auxiliares
const FeatureCard = ({ icon, title, description, gradient = "from-blue-500/10 via-purple-500/10 to-rose-500/10" }) => (
  <div className="group relative p-6 bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-xl overflow-hidden">
    <div className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
    <div className="relative">
      {icon}
      <h3 className="text-lg font-semibold mt-4 mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  </div>
);

const MetricCard = ({ label, value, icon }) => (
  <div className="text-center">
    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/10 mb-4">
      {icon}
    </div>
    <p className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text mb-1">
      {value}
    </p>
    <p className="text-gray-400 text-sm">{label}</p>
  </div>
);

const ProductCard = ({ product, isActive, onClick }) => (
  <div
    className={`relative p-8 rounded-2xl transition-all duration-300 cursor-pointer ${
      isActive 
        ? 'bg-gradient-to-b from-gray-900 to-black border-gray-700 scale-105 shadow-xl' 
        : 'bg-gray-900/50 border-gray-800 hover:border-gray-700'
    } border`}
    onClick={onClick}
  >
    <div className="flex items-center gap-4 mb-6">
      {product.icon}
      <div>
        <h3 className="text-xl font-bold">{product.title}</h3>
        <p className="text-sm text-gray-400">{product.tagline}</p>
      </div>
      <span className="ml-auto text-sm bg-white/10 px-3 py-1 rounded-full">
        {product.accuracy}
      </span>
    </div>
    
    <p className="text-gray-300 mb-6">{product.desc}</p>
    
    <div className="space-y-3">
      {product.keyPoints.map((point, idx) => (
        <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
          <Check className="w-4 h-4 text-blue-400 flex-shrink-0" />
          {point}
        </div>
      ))}
    </div>

    {isActive && (
      <div className="mt-8 pt-6 border-t border-gray-800 animate-fadeIn">
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div>
            <p className="text-sm text-gray-400">Velocidade</p>
            <p className="font-semibold">{product.metrics.speed}</p>
          </div>
          <div>
            <p className="text-sm text-gray-400">Patologias</p>
            <p className="font-semibold">{product.metrics.patologias}</p>
          </div>
          <div>
            <p className="text-sm text-gray-400">Hospitais</p>
            <p className="font-semibold">{product.metrics.hospitais}</p>
          </div>
        </div>
        
        <div className="flex gap-3">
          <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm transition-colors">
            Ver Demonstração
          </button>
          <button className="flex-1 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg text-sm transition-colors">
            Mais Detalhes
          </button>
        </div>
      </div>
    )}
  </div>
);

const NavLink = ({ children, href = "#", className = "" }) => (
  <a
    href={href}
    className={`text-sm text-gray-400 hover:text-white transition-colors ${className}`}
  >
    {children}
  </a>
);

const Button = ({ children, variant = "primary", className = "", ...props }) => {
  const variants = {
    primary: "bg-blue-500 hover:bg-blue-600 text-white",
    secondary: "bg-white/10 hover:bg-white/20 text-white",
    outline: "border border-gray-700 hover:border-gray-600",
    white: "bg-white text-black hover:bg-gray-100"
  };

  return (
    <button
      className={`px-6 py-3 rounded-lg transition-all ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const FloatingNav = ({ show }) => (
  <div className={`fixed bottom-8 left-1/2 -translate-x-1/2 bg-gray-900/90 backdrop-blur-lg border border-gray-800 rounded-full p-2 transition-all duration-300 ${
    show ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
  }`}>
    <div className="flex items-center gap-2">
      <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
        <MessageCircle className="w-5 h-5" />
      </button>
      <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
        <Calendar className="w-5 h-5" />
      </button>
      <Button variant="primary" className="px-4 py-2">
        Agendar Demo
      </Button>
    </div>
  </div>
);

const AchievementBanner = ({ achievement }) => (
  <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full">
    {achievement.icon}
    <div>
      <p className="font-medium">{achievement.title}</p>
      <p className="text-sm text-function App() {
  const [activeProduct, setActiveProduct] = useState(null);
  const [showFloatingNav, setShowFloatingNav] = useState(false);
  const [currentAchievement, setCurrentAchievement] = useState(0);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setShowFloatingNav(offset > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAchievement(current => (current + 1) % ACHIEVEMENTS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      {/* Navbar Fixo */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <a href="#" className="flex items-center gap-2">
                <Activity className="w-6 h-6 text-blue-500" />
                <span className="font-bold text-xl">Cognai</span>
              </a>
              <div className="hidden md:flex items-center gap-6">
                <NavLink>Soluções</NavLink>
                <NavLink>Tecnologia</NavLink>
                <NavLink>Casos</NavLink>
                <NavLink>Preços</NavLink>
                <NavLink>Recursos</NavLink>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="secondary">Login</Button>
              <Button variant="primary" className="hidden md:block">
                Começar Agora
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header ref={headerRef} className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-purple-500/5 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent opacity-60" />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="max-w-3xl">
            {/* Achievement Banner Rotativo */}
            <div className="inline-block mb-8 animate-fadeIn">
              <AchievementBanner achievement={ACHIEVEMENTS[currentAchievement]} />
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Diagnósticos Médicos
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-rose-400 text-transparent bg-clip-text">
                Potencializados por IA
              </span>
            </h1>

            <p className="text-xl text-gray-400 mb-10">
              Revolucione sua prática médica com nossa plataforma de IA state-of-the-art.
              Aumente precisão, reduza tempo e melhore resultados.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="white" className="group">
                <span className="flex items-center gap-2">
                  Agendar Demo
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              <Button variant="secondary">
                <span className="flex items-center gap-2">
                  <Play className="w-4 h-4" />
                  Ver em Ação
                </span>
              </Button>
            </div>

            {/* Métricas Flutuantes */}
            <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8">
              {METRICS.business.map((metric, i) => (
                <MetricCard key={i} {...metric} />
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Soluções Premium */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1 rounded-full text-sm mb-8">
              <Sparkles className="w-4 h-4 text-amber-400" />
              Soluções Premium
            </div>
            <h2 className="text-4xl font-bold mb-6">
              Tecnologia de Ponta para Cada Especialidade
            </h2>
            <p className="text-gray-400">
              Nossas soluções são desenvolvidas com as mais avançadas tecnologias
              de IA, garantindo resultados excepcionais em cada área.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRODUCTS.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isActive={activeProduct === product.id}
                onClick={() => setActiveProduct(
                  activeProduct === product.id ? null : product.id
                )}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Tecnologia */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1 rounded-full text-sm mb-8">
              <Zap className="w-4 h-4 text-yellow-400" />
              Nossa Tecnologia
            </div>
            <h2 className="text-4xl font-bold mb-6">
              Inteligência Artificial de Última Geração
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Brain className="w-6 h-6 text-blue-400" />}
              title="Deep Learning Avançado"
              description="Modelos neurais de última geração com aprendizado contínuo"
              gradient="from-blue-500/10 via-blue-400/10 to-blue-300/10"
            />
            <FeatureCard
              icon={<Lock className="w-6 h-6 text-green-400" />}
              title="Segurança e Privacidade"
              description="Certificações internacionais e compliance com LGPD/HIPAA"
              gradient="from-green-500/10 via-green-400/10 to-green-300/10"
            />
            <FeatureCard
              icon={<Globe className="w-6 h-6 text-purple-400" />}
              title="Escalabilidade Global"
              description="Infraestrutura distribuída com alta disponibilidade"
              gradient="from-purple-500/10 via-purple-400/10 to-purple-300/10"
            />
          </div>
        </div>
      </section>

      {/* Floating Navigation */}
      <FloatingNav show={showFloatingNav} />{/* Integrações */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1 rounded-full text-sm mb-8">
              <Share2 className="w-4 h-4 text-purple-400" />
              Integrações
            </div>
            <h2 className="text-4xl font-bold mb-6">
              Compatível com Seu Ecossistema
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Integração seamless com os principais sistemas e equipamentos médicos do mercado
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {PRODUCTS[0].integrations.map((integration, i) => (
              <div key={i} className="text-center p-6 bg-gray-900/50 rounded-xl">
                <img src={integration.icon} alt={integration.name} className="w-16 h-16 mx-auto mb-4" />
                <p className="font-medium">{integration.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Premium */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-rose-600/20" />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Pronto para Revolucionar seus Diagnósticos?
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Junte-se a mais de 450 instituições que já transformaram sua
              prática médica com a Cognai
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="white" className="group">
                <span className="flex items-center gap-2">
                  Começar Agora
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              <Button variant="secondary">Falar com Especialista</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Premium */}
      <footer className="bg-gray-900 pt-20 pb-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Activity className="w-6 h-6 text-blue-500" />
                <span className="font-bold text-xl">Cognai</span>
              </div>
              <p className="text-gray-400 text-sm mb-6">
                Transformando diagnósticos médicos através da mais avançada 
                inteligência artificial do mercado.
              </p>
              <div className="flex gap-4">
                {ACHIEVEMENTS.map((achievement, i) => (
                  <div key={i} className="w-8 h-8">
                    {achievement.icon}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-6">Soluções</h4>
              <ul className="space-y-4">
                {PRODUCTS.map((product) => (
                  <li key={product.id}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                      <ChevronRight className="w-4 h-4" />
                      {product.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-6">Empresa</h4>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                    <ChevronRight className="w-4 h-4" />
                    Sobre nós
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                    <ChevronRight className="w-4 h-4" />
                    Carreiras
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                    <ChevronRight className="w-4 h-4" />
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                    <ChevronRight className="w-4 h-4" />
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-6">Newsletter</h4>
              <p className="text-sm text-gray-400 mb-4">
                Receba as últimas novidades sobre IA na medicina e atualizações exclusivas.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="flex-1 bg-white/5 border border-gray-800 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                />
                <Button variant="primary" className="p-2">
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Certificações e Compliance */}
          <div className="border-t border-gray-800 pt-8 pb-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex flex-wrap items-center gap-8">
                {PRODUCTS[0].certifications.map((cert, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <img src={cert.icon} alt={cert.name} className="w-8 h-8" />
                    <span className="text-sm text-gray-400">{cert.name}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-4">
                <button className="text-gray-400 hover:text-white transition-colors">
                  <Lock className="w-5 h-5" />
                </button>
                <button className="text-gray-400 hover:text-white transition-colors">
                  <Shield className="w-5 h-5" />
                </button>
                <button className="text-gray-400 hover:text-white transition-colors">
                  <Globe className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Copyright e Links Legais */}
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © 2024 Cognai. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacidade</a>
              <a href="#" className="hover:text-white transition-colors">Termos</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
              <a href="#" className="hover:text-white transition-colors">Segurança</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Chat Flutuante */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="bg-blue-500 hover:bg-blue-600 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-colors group">
          <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
        </button>
      </div>
    </div>
  );
}

export default App;
