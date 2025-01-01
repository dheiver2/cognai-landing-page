import React, { useState } from 'react';
import { Brain, Heart, Shield, Sparkles, Target, CircuitBoard, ChevronRight, ArrowRight } from 'lucide-react';

const SPECIALTIES = [
  { 
    id: 'cardio',
    icon: <Heart className="w-8 h-8 text-gray-400" />,
    name: "Cardiologia",
    accuracy: "98.5%",
    conditions: ["Arritmias Cardíacas", "Hipertensão Arterial", "Insuficiência Cardíaca", "Coronariopatias"],
    examTypes: ["Eletrocardiograma", "Ecocardiograma", "Teste Ergométrico", "Holter"],
    description: "Análise avançada de exames cardíacos com IA",
    benefits: ["Detecção precoce", "Monitoramento contínuo", "Análise de risco", "Suporte a decisão"],
    techDetails: {
      algorithms: ["Deep Learning", "CNN", "Time Series Analysis"],
      accuracy: {
        sensitivity: "97.8%",
        specificity: "98.2%",
        precision: "98.5%"
      },
      validationStudies: [
        {
          year: 2024,
          patients: 15000,
          accuracy: "98.5%",
          journal: "Cardiology AI Review"
        }
      ],
      integrations: ["ECG Devices", "PACS", "EMR Systems"]
    }
  },
  {
    id: 'neuro',
    icon: <Brain className="w-8 h-8 text-gray-400" />,
    name: "Neurologia",
    accuracy: "97.8%",
    conditions: ["Enxaqueca Crônica", "Epilepsia", "Alzheimer", "AVC"],
    examTypes: ["Eletroencefalograma", "Ressonância", "Tomografia", "PET-CT"],
    description: "Diagnóstico neurológico assistido por IA",
    benefits: ["Mapeamento cerebral", "Análise comportamental", "Previsão de eventos", "Acompanhamento"],
    techDetails: {
      algorithms: ["3D CNN", "Graph Neural Networks", "Transformer Models"],
      accuracy: {
        sensitivity: "96.9%",
        specificity: "97.5%",
        precision: "97.8%"
      },
      validationStudies: [
        {
          year: 2024,
          patients: 12000,
          accuracy: "97.8%",
          journal: "Neural Computing in Medicine"
        }
      ],
      integrations: ["MRI Scanners", "EEG Systems", "Clinical Data Platforms"]
    }
  },
  {
    id: 'derm',
    icon: <Shield className="w-8 h-8 text-gray-400" />,
    name: "Dermatologia", 
    accuracy: "99.2%",
    conditions: ["Melanoma", "Dermatites", "Psoríase", "Acne"],
    examTypes: ["Dermatoscopia", "Microscopia", "Biópsias", "Mapeamento"],
    description: "Análise dermatológica com visão computacional",
    benefits: ["Classificação de lesões", "Acompanhamento", "Prevenção", "Tratamento"],
    techDetails: {
      algorithms: ["Vision Transformer", "ResNet", "Instance Segmentation"],
      accuracy: {
        sensitivity: "98.8%",
        specificity: "99.1%",
        precision: "99.2%"
      },
      validationStudies: [
        {
          year: 2024,
          patients: 20000,
          accuracy: "99.2%",
          journal: "AI in Dermatology"
        }
      ],
      integrations: ["Dermascopes", "Image Databases", "Clinical Systems"]
    }
  }
];

const FEATURES = [
  {
    id: 'realtime',
    icon: <CircuitBoard className="w-6 h-6" />,
    title: "Processamento em Tempo Real",
    description: "Análise instantânea de exames e dados",
    benefits: ["Rápida resposta", "Monitoramento contínuo", "Alertas automáticos"],
    technical: {
      processingTime: "< 3 segundos",
      availability: "99.99%",
      scalability: "Automática",
      concurrent: "10k+ análises/min"
    },
    security: {
      encryption: "AES-256",
      compliance: ["HIPAA", "GDPR", "LGPD"],
      certification: "ISO 27001"
    }
  },
  {
    id: 'security',
    icon: <Shield className="w-6 h-6" />,
    title: "Segurança Avançada",
    description: "Proteção total dos dados médicos",
    benefits: ["Criptografia", "Conformidade LGPD", "Backup automático"],
    technical: {
      dataProtection: "End-to-end",
      backup: "Real-time",
      retention: "10 anos",
      access: "Role-based"
    },
    security: {
      encryption: "RSA 4096-bit",
      compliance: ["SOC 2", "ISO 27701"],
      auditing: "Contínuo"
    }
  },
  {
    id: 'ai',
    icon: <Brain className="w-6 h-6" />,
    title: "IA Especializada",
    description: "Modelos treinados com casos reais",
    benefits: ["Aprendizado contínuo", "Precisão diagnóstica", "Suporte decisório"],
    technical: {
      models: ["Deep Learning", "Computer Vision"],
      training: "Contínuo",
      validation: "Multi-centro",
      updates: "Semanais"
    },
    performance: {
      accuracy: "98.5%",
      recall: "97.9%",
      precision: "98.2%"
    }
  }
];

const STATS = [
  {
    id: 'diagnostics',
    icon: <Target className="w-6 h-6" />,
    value: "500mil+",
    label: "Diagnósticos",
    description: "Casos analisados",
    trend: "+15% ao mês",
    details: {
      accuracy: "98.5%",
      timespan: "12 meses",
      regions: ["Brasil", "LATAM", "Europa"],
      specialties: ["Cardio", "Neuro", "Dermato"],
      growth: {
        yearly: "180%",
        monthly: "15%",
        weekly: "3.5%"
      }
    }
  },
  {
    id: 'time',
    icon: <Sparkles className="w-6 h-6" />,
    value: "3min",
    label: "Tempo Médio",
    description: "De análise",
    trend: "-30% vs método tradicional",
    details: {
      breakdown: {
        upload: "30s",
        processing: "2min",
        report: "30s"
      },
      improvement: {
        vsTraditional: "85% mais rápido",
        lastQuarter: "20% mais rápido",
        projected: "15% redução em 6 meses"
      },
      availability: "99.99%"
    }
  }
];

const INTEGRATIONS = [
  {
    id: 'hospital',
    name: "Sistemas de Gestão Hospitalar",
    type: "software",
    details: "Integração com principais ERPs",
    compatibility: {
      systems: ["Philips Tasy", "MV", "Totvs"],
      protocols: ["HL7", "FHIR", "DICOM"],
      dataTypes: ["Clinical", "Administrative", "Financial"]
    },
    security: {
      encryption: "End-to-end",
      audit: "Full tracking",
      access: "Role-based"
    },
    implementation: {
      time: "2-4 weeks",
      support: "24/7",
      training: "Included"
    }
  },
  {
    id: 'records',
    name: "Prontuário Eletrônico",
    type: "data",
    details: "Compatível com padrão FHIR",
    compatibility: {
      standards: ["FHIR R4", "OpenEHR", "ISO 13606"],
      formats: ["CDA", "CCR", "PDF/A"],
      exchange: ["REST API", "SOAP", "Direct"]
    },
    features: {
      search: "Full-text",
      export: "Multiple formats",
      backup: "Real-time"
    }
  },
  {
    id: 'pacs',
    name: "Sistemas PACS",
    type: "imaging",
    details: "Suporte a DICOM e HL7",
    compatibility: {
      standards: ["DICOM 3.0", "HL7 v2.x", "FHIR"],
      modalities: ["CT", "MRI", "US", "XA"],
      vendors: ["GE", "Siemens", "Philips"]
    },
    performance: {
      transmission: "High-speed",
      compression: "Lossless",
      storage: "Cloud + Local"
    }
  }
];

const Preview = () => {
  const [hoveredSpecialty, setHoveredSpecialty] = useState(null);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-black text-gray-200">
      {/* Header */} 
      <header className="fixed w-full z-50 bg-black/90 backdrop-blur-sm">
        <nav className="flex items-center justify-between max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-2">
            <Brain className="w-8 h-8" />
            <span className="text-2xl font-bold">Cognai</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {['Especialidades', 'Tecnologia', 'Parceiros'].map(item => (
              <button key={item} className="text-gray-400 hover:text-gray-200">{item}</button>
            ))}
            <button className="px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg">Área do Médico</button>
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
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Combine expertise médica com inteligência artificial para diagnósticos mais precisos.
          </p>
          <div className="flex items-center justify-center gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg hover:from-gray-600 hover:to-gray-700 transition-colors">
              <span className="flex items-center">Agendar Demo<ArrowRight className="ml-2 w-5 h-5" /></span>
            </button>
            <button className="px-8 py-4 border border-gray-700 rounded-lg hover:bg-gray-800/50 transition-colors">
              Saiba Mais
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 py-16 bg-black/50">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map(({id, icon, value, label, description, trend}) => (
            <div key={id} className="text-center group">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-gray-800 rounded-lg group-hover:bg-gray-700 transition-colors">
                  {icon}
                </div>
              </div>
              <div className="text-2xl font-bold mb-2">{value}</div>
              <div className="text-gray-400 text-sm mb-2">{label}</div>
              <div className="text-gray-500 text-xs">{description}</div>
              <div className="text-green-500 text-xs mt-2">{trend}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Specialties */}
      <section className="px-6 py-16 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Especialidades Médicas</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              IA especializada em múltiplas áreas da medicina.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {SPECIALTIES.map((specialty) => (
              <div 
                key={specialty.id}
                className="p-6 bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700 hover:border-gray-600 transition-colors cursor-pointer"
                onMouseEnter={() => setHoveredSpecialty(specialty.id)}
                onMouseLeave={() => setHoveredSpecialty(null)}
              >
                <div className="flex items-center gap-4 mb-4">
                  {specialty.icon}
                  <div>
                    <h3 className="text-xl font-semibold">{specialty.name}</h3>
                    <span className="text-gray-400 text-sm">Precisão: {specialty.accuracy}</span>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-4">{specialty.description}</p>
                <ul className="space-y-2">
                  {specialty.conditions.map((condition, idx) => (
                    <li key={idx} className="text-gray-400 text-sm flex items-center gap-2">
                      <ChevronRight className="w-4 h-4" />{condition}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-16 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Recursos Avançados</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Tecnologia de ponta para diagnóstico médico.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {FEATURES.map((feature) => (
              <div 
                key={feature.id}
                className="p-6 bg-gray-800/30 rounded-xl hover:bg-gray-800/50 transition-colors"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-gray-800 rounded-lg">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                </div>
                <p className="text-gray-400 text-sm mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="text-gray-400 text-sm flex items-center gap-2">
                      <ChevronRight className="w-4 h-4" />{benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="px-6 py-16 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl text-white font-bold mb-4">Integração Completa</h2>
            <p className="text-gray-400 text-base">
              Integração perfeita com sistemas hospitalares.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-x-24 gap-y-6">
            {INTEGRATIONS.map((integration) => (
              <div key={integration.id} className="flex items-center gap-3">
                <CircuitBoard className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <div>
                  <span className="text-gray-400">{integration.name}</span>
                  <p className="text-gray-500 text-sm">{integration.details}</p>
                </div>
              </div>
            ))}
          </div>
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
                Transformando diagnósticos com IA.
              </p>
            </div>
            {[
              { title: "Produto", items: ["Especialidades", "Tecnologia", "Segurança"] },
              { title: "Empresa", items: ["Sobre", "Parceiros", "Carreiras"] },
              { title: "Legal", items: ["Privacidade", "Termos", "Licença"] }
            ].map((col, idx) => (
              <div key={idx}>
                <h4 className="font-semibold mb-4">{col.title}</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  {col.items.map((item, i) => <li key={i}>{item}</li>)}
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
