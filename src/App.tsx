/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import DitherEffect2 from './components/DitherEffect2';

export default function App() {
  return (
    <div className="relative text-[#f8fafc] min-h-screen font-sans selection:bg-[#818cf8] selection:text-white flex flex-col">
      {/* WALLPAPER */}
      <div className="fixed inset-0 -z-10">
        <DitherEffect2 background="#050505" />
      </div>

      {/* HEADER */}
      <header className="h-[80px] w-full px-8 lg:px-[64px] flex justify-between items-center border-b border-white/[0.06] bg-[#050505]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="font-serif text-[24px] tracking-[0.1em] font-light">
          <span className="text-[#818cf8]">C</span>lasse
        </div>
        <nav className="hidden md:flex gap-[32px] text-[13px] uppercase tracking-[0.1em]">
          <a href="#inicio" className="text-[#94a3b8] transition-colors hover:text-[#f8fafc]">Início</a>
          <a href="#sites" className="text-[#94a3b8] transition-colors hover:text-[#f8fafc]">Sites</a>
          <a href="#sobre" className="text-[#94a3b8] transition-colors hover:text-[#f8fafc]">Sobre</a>
        </nav>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col lg:grid lg:grid-cols-[420px_1fr] gap-12 lg:gap-[48px] p-8 lg:p-[64px]">
        
        {/* LEFT COLUMN: HERO & ABOUT */}
        <div className="flex flex-col gap-16 lg:gap-[64px]">
          {/* HERO */}
          <section id="inicio" className="flex flex-col justify-center pt-8 lg:pt-0">
            <h1 className="text-[56px] font-serif leading-[1.1] mb-[24px] font-normal">
              <span className="text-[#818cf8]">Classe</span>
            </h1>
            <p className="text-[16px] text-[#94a3b8] leading-[1.6] mb-[40px]">
              Um espaço para reunir, apresentar e organizar todos os meus projetos digitais em um único lugar.
            </p>
            <a href="#sites" className="self-start px-[32px] py-[16px] bg-transparent border border-[#818cf8] text-[#f8fafc] rounded-[4px] text-[14px] uppercase tracking-[0.1em] font-semibold transition-colors hover:bg-[#818cf8]/10">
              Explorar meus sites
            </a>
          </section>

          {/* SOBRE */}
          <section id="sobre" className="flex flex-col justify-center">
            <h2 className="text-[32px] font-serif mb-[16px] font-normal">Sobre o Classe</h2>
            <p className="text-[16px] text-[#94a3b8] leading-[1.6]">
              O Classe é o espaço central dos meus projetos. A ideia é reunir diferentes sites e experiências digitais em um único lugar, deixando tudo mais organizado e fácil de encontrar.
            </p>
          </section>
        </div>

        {/* RIGHT COLUMN: SITES */}
        <section id="sites" className="flex flex-col">
          <div className="mb-[32px]">
            <h2 className="text-[32px] font-serif mb-[8px] font-normal">Meus Sites</h2>
            <p className="text-[#94a3b8] text-[16px]">Projetos e plataformas criados por mim.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
            {/* SITE: OLÁ VISITANTE */}
            <div className="bg-black/20 backdrop-blur-md border border-white/[0.1] rounded-[4px] p-[32px] flex flex-col justify-between transition-all duration-300 hover:border-[#818cf8] hover:bg-white/[0.02]">
              <div>
                <div className="text-[20px] text-[#818cf8] mb-[16px]">
                  👋
                </div>
                <h3 className="font-serif text-[22px] mb-[8px] font-normal">Olá Visitante</h3>
                <p className="text-[14px] text-[#94a3b8] leading-[1.5]">
                  Conheça o projeto Olá Visitante e explore o site.
                </p>
              </div>
              <a 
                href="https://olavisitante.netlify.app" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mt-8 block text-[12px] font-semibold uppercase tracking-[0.1em] text-[#818cf8] transition-colors hover:text-[#f8fafc]"
              >
                Visitar site →
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="h-[60px] px-8 lg:px-[64px] border-t border-white/[0.06] flex flex-col md:flex-row justify-between items-center text-[#94a3b8] text-[12px] tracking-[0.05em] py-4 md:py-0">
        <div>
          © 2026 <strong className="text-[#f8fafc] font-normal">Classe</strong>
        </div>
        <div>
          Meus projetos digitais
        </div>
      </footer>
    </div>
  );
}
