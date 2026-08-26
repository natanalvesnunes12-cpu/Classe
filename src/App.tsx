import React from 'react';

export default function App() {
  return (
    <div className="bg-black text-white font-sans leading-[1.5] min-h-screen selection:bg-[#333] selection:text-white flex flex-col">
      <style>{`
        html {
          scroll-behavior: smooth;
        }
        @keyframes appear {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full h-[70px] z-[1000] flex items-center bg-[rgba(0,0,0,0.88)] backdrop-blur-[15px] border-b border-[#1a1a1a]">
        <div className="w-[90%] max-w-[1200px] mx-auto flex items-center justify-between">
          <a href="#" className="text-[22px] font-extrabold tracking-[-1px]">
            Classe
          </a>
          <nav className="hidden md:flex gap-[30px]">
            <a href="#inicio" className="text-[#888] text-[13px] transition-colors duration-200 hover:text-white">
              Início
            </a>
            <a href="#projetos" className="text-[#888] text-[13px] transition-colors duration-200 hover:text-white">
              Projetos
            </a>
            <a href="#sobre" className="text-[#888] text-[13px] transition-colors duration-200 hover:text-white">
              Sobre
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* HERO */}
        <section id="inicio" className="min-h-[90vh] md:min-h-screen flex items-center pt-[100px] md:pt-[120px] px-[5%] pb-[80px] border-b border-[#151515]">
          <div className="w-[90%] max-w-[1200px] mx-auto animate-[appear_0.8s_ease]">
            <div className="text-[#777] text-[12px] uppercase tracking-[3px] mb-[25px]">
              Projetos digitais
            </div>
            <h1 className="text-[clamp(65px,12vw,150px)] leading-[0.85] tracking-[-5px] md:tracking-[-8px] font-extrabold max-w-[1000px]">
              Classe.
            </h1>
            <p className="max-w-[560px] mt-[35px] text-[#888] text-[15px] md:text-[17px] leading-[1.7]">
              Um espaço simples para reunir meus sites, projetos e experiências digitais.
            </p>
            <a href="#projetos" className="inline-block mt-[35px] px-[22px] py-[13px] border border-white bg-white text-black text-[13px] font-bold transition-colors duration-250 hover:bg-black hover:text-white">
              Ver projetos
            </a>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projetos" className="w-[90%] max-w-[1200px] mx-auto py-[110px]">
          <div className="block md:flex justify-between items-end mb-[45px]">
            <div>
              <h2 className="text-[32px] tracking-[-1.5px] font-bold">
                Projetos
              </h2>
              <p className="text-[#666] text-[13px] mt-[8px] md:mt-0">
                Uma coleção dos meus trabalhos.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
            {/* OLÁ VISITANTE */}
            <article className="border border-[#202020] bg-[#080808] transition-all duration-300 overflow-hidden hover:border-[#555] hover:-translate-y-[4px]">
              <div className="h-[240px] md:h-[300px] flex justify-center items-center relative bg-[#111] border-b border-[#202020]">
                {/* Decorative Circles */}
                <div className="absolute w-[180px] h-[180px] border border-[#333] rounded-full"></div>
                <div className="absolute w-[120px] h-[120px] border border-[#252525] rounded-full"></div>
                <div className="relative z-10 text-[30px] md:text-[35px] font-extrabold tracking-[-2px]">
                  Olá Visitante
                </div>
              </div>
              <div className="p-[25px]">
                <div className="text-[#555] text-[11px] mb-[15px]">
                  01 / SITE
                </div>
                <h3 className="text-[22px] mb-[8px] font-bold">
                  Olá Visitante
                </h3>
                <p className="text-[#777] text-[13px] max-w-[450px]">
                  Um projeto digital desenvolvido para apresentar uma experiência simples e interativa.
                </p>
                <a href="https://olavisitante.netlify.app" target="_blank" rel="noopener noreferrer" className="inline-block mt-[20px] pb-[4px] border-b border-[#555] text-[12px] font-bold transition-colors duration-200 hover:border-white">
                  Visitar projeto →
                </a>
              </div>
            </article>

            {/* FUTURO PROJETO */}
            <article className="flex flex-col justify-center items-center text-center min-h-[430px] border border-dashed border-[#252525] text-[#555] transition-all duration-300 hover:border-[#555] hover:-translate-y-[4px] bg-transparent">
              <div className="text-[40px] font-extralight mb-[15px]">
                +
              </div>
              <h3 className="text-[#aaa] text-[17px] mb-[5px] font-bold">
                Próximo projeto
              </h3>
              <p className="text-[12px]">
                Em breve.
              </p>
            </article>
          </div>
        </section>

        {/* ABOUT */}
        <section id="sobre" className="border-t border-b border-[#151515] py-[80px] md:py-[120px] px-[5%]">
          <div className="w-[90%] max-w-[900px] mx-auto">
            <div className="text-[#555] text-[11px] uppercase tracking-[3px] mb-[25px]">
              Sobre
            </div>
            <h2 className="text-[clamp(35px,6vw,65px)] leading-none tracking-[-2px] md:tracking-[-3px] mb-[30px] font-bold">
              Menos elementos.<br className="hidden md:block"/> Mais propósito.
            </h2>
            <p className="text-[#777] max-w-[650px] text-[15px] md:text-[16px] leading-[1.8]">
              O Classe é uma central criada para reunir diferentes projetos digitais em um único espaço.
              <br/><br/>
              A proposta é simples: apresentar cada projeto de forma clara, elegante e sem distrações.
            </p>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="w-[90%] max-w-[1200px] mx-auto py-[35px] flex flex-col md:flex-row justify-between items-center gap-[10px] md:gap-0 text-center md:text-left">
        <div className="font-extrabold text-[18px]">
          Classe
        </div>
        <div className="text-[#555] text-[11px]">
          © 2026 Classe
        </div>
      </footer>
    </div>
  );
}
