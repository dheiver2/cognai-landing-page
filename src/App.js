import React, { useState } from 'react';
import { Brain, Heart, Shield, BarChart2, ArrowRight, Globe, Users, Activity, Award } from 'lucide-react';

const HIGHLIGHTS = [
  {
    icon: <Heart className="w-6 h-6 text-rose-500" />,
    title: "Cardiologia Avançada",
    metric: "99.2%",
    desc: "Certificação FDA & ANVISA"
  },
  {
    icon: <Brain className="w-6 h-6 text-emerald-500" />,
    title: "Neurologia Inteligente",
    metric: "98.8%",
    desc: "Validado em 5 países do Mercosul"
  },
  {
    icon: <Shield className="w-6 h-6 text-blue-500" />,
    title: "Dermatologia Digital",
    metric: "99.5%",
    desc: "Tecnologia premiada LATAM"
  }
];

const PARTNERS = [
  { name: "Hospital São Paulo", country: "Brasil" },
  { name: "Clínica Buenos Aires", country: "Argentina" },
  { name: "Centro Montevideo", country: "Uruguay" },
  { name: "Hospital Asunción", country: "Paraguay" }
];

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Moderno */}
      <header className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-purple-500/5 to-transparent" />
        <div className="max-w-5xl mx-auto px-4 text-center relative">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1 rounded-full text-sm mb-8">
            <Award className="w-4 h-4 text-amber-400" />
            Líder em IA Médica no Mercosul
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-rose-400 text-transparent bg-clip-text">
            Diagnósticos do Futuro
          </h1>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Tecnologia de ponta em diagnósticos médicos para o Mercosul
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition flex items-center gap-2 justify-center group">
              Demonstração VIP
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white/10 px-8 py-3 rounded-full font-medium hover:bg-white/20 transition">
              Parcerias Mercosul
            </button>
          </div>
        </div>
      </header>

      {/* Destaques e Métricas */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {HIGHLIGHTS.map((item, i) => (
              <div key={i} className="group p-6 bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-xl hover:border-gray-700 transition-all relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-rose-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  {item.icon}
                  <h3 className="text-xl font-semibold mt-4 mb-2">{item.title}</h3>
                  <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                    {item.metric}
                  </p>
                  <p className="text-gray-400 mt-2">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mercosul Network */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-16">Rede Mercosul</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {PARTNERS.map((partner, i) => (
              <div key={i} className="group">
                <Globe className="w-8 h-8 mx-auto mb-4 text-blue-400 group-hover:text-blue-300 transition-colors" />
                <p className="font-medium">{partner.name}</p>
                <p className="text-sm text-gray-400">{partner.country}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Minimalista */}
      <footer className="py-8 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Activity className="w-5 h-5 text-blue-400" />
            <span className="font-bold">Cognai</span>
          </div>
          <div className="flex gap-8 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition">Sobre</a>
            <a href="#" className="hover:text-white transition">Network</a>
            <a href="#" className="hover:text-white transition">Compliance</a>
            <a href="#" className="hover:text-white transition">Contato</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
