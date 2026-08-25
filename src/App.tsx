import React, { useState, useEffect } from 'react';
import DitherEffect2 from './components/DitherEffect2';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = document.querySelectorAll('section');
      let current = 'inicio';
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 150;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute('id') || 'inicio';
        }
      });
      
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative text-white min-h-screen font-sans selection:bg-[#9b0612] selection:text-white flex flex-col overflow-x-hidden bg-transparent">
      
      {/* WALLPAPER */}
      <div className="fixed inset-0 -z-10 bg-[#080808]">
        <DitherEffect2 background="#080808" color="#9b0612" />
      </div>

      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 w-full h-[65px] md:h-[76px] flex items-center px-[5%] z-[1000] transition-all duration-300 ${
          isScrolled
            ? 'bg-[#080808]/94 backdrop-blur-md border-b border-white/[0.08]'
            : 'bg-gradient-to-b from-black/95 via-black/65 to-transparent'
        }`}
      >
        <div className="w-full flex items-center justify-between">
          <a href="#inicio" className="text-[25px] md:text-[30px] font-black tracking-[-2px]">
            <span className="text-[#9b0612]">C</span>lasse
          </a>

          <nav className="hidden md:flex items-center gap-[32px] ml-[50px] flex-1">
            {['inicio', 'projetos', 'categorias', 'sobre'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className={`text-[14px] capitalize transition-colors duration-250 ${
                  activeSection === item
                    ? 'text-white font-bold'
                    : 'text-[#bbb] hover:text-white'
                }`}
              >
                {item}
              </a>
            ))}
          </nav>

          <a
            href="#projetos"
            className="px-[13px] md:px-[18px] py-[9px] md:py-[10px] rounded-[6px] bg-white text-black font-bold text-[13px] transition-all duration-250 hover:-translate-y-[2px] hover:bg-[#9b0612] hover:text-white"
          >
            Explorar
          </a>
        </div>
      </header>

      <main className="flex-1">
        {/* HERO */}
        <section
          id="inicio"
          className="relative min-h-[650px] md:min-h-[720px] h-[80vh] md:h-[92vh] flex items-center px-[6%] md:px-[7%] overflow-hidden"
        >
          {/* Background Decorators */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/70 to-transparent pointer-events-none z-0"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_40%,rgba(155,6,18,0.28),transparent_30%)] pointer-events-none z-0"></div>
          <div className="absolute w-[650px] h-[650px] -right-[150px] top-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(155,6,18,0.45),rgba(155,6,18,0.08)_45%,transparent_70%)] blur-[30px] pointer-events-none z-0"></div>
          <div className="absolute bottom-0 left-0 w-full h-[180px] bg-gradient-to-t from-[#080808]/80 to-transparent pointer-events-none z-0"></div>

          <div className="relative z-10 max-w-[680px] animate-[fadeUp_0.9s_ease_forwards]">
            <div className="inline-flex items-center gap-[8px] mb-[22px] text-[#aaa] text-[12px] uppercase tracking-[2px] before:content-[''] before:w-[8px] before:h-[8px] before:bg-[#9b0612] before:rounded-full">
              Central de projetos
            </div>

            <h1 className="text-[clamp(60px,9vw,125px)] leading-[0.82] tracking-[-5px] md:tracking-[-7px] font-black mb-[32px]">
              <span className="text-[#9b0612]">CLASSE</span>
            </h1>

            <p className="text-[#aaa] text-[15px] md:text-[18px] leading-[1.7] max-w-[550px] mb-[32px]">
              Um espaço criado para reunir meus sites, projetos e experiências digitais em um único lugar.
            </p>

            <div className="flex flex-wrap gap-[12px]">
              <a
                href="#projetos"
                className="bg-white text-black font-bold text-[14px] px-[23px] py-[14px] rounded-[5px] inline-flex items-center gap-[8px] transition-all duration-250 hover:-translate-y-[2px] hover:bg-[#9b0612] hover:text-white"
              >
                ▶ Explorar projetos
              </a>
              <a
                href="#sobre"
                className="bg-white/[0.12] text-white border border-white/[0.1] font-bold text-[14px] px-[23px] py-[14px] rounded-[5px] inline-flex items-center gap-[8px] transition-all duration-250 hover:bg-white/[0.2]"
              >
                Saiba mais
              </a>
            </div>
          </div>
        </section>

        {/* PROJETOS */}
        <section id="projetos" className="relative z-10 px-[6%] md:px-[5%] pt-[30px] pb-[100px] bg-transparent">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-[25px] gap-[10px]">
            <div>
              <h2 className="text-[27px] font-extrabold tracking-[-0.8px]">Projetos em destaque</h2>
              <p className="mt-[7px] text-[#aaa] md:text-[#777] text-[14px]">Conheça os projetos disponíveis no Classe.</p>
            </div>
            <a href="#projetos" className="text-[#aaa] text-[13px] transition-colors duration-200 hover:text-white">
              Ver todos →
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[18px]">
            {/* OLÁ VISITANTE */}
            <article className="group relative min-h-[360px] rounded-[9px] overflow-hidden bg-[#151515]/60 backdrop-blur-md border border-white/[0.06] transition-all duration-350 hover:-translate-y-[8px] hover:border-white/[0.18]">
              <div className="h-[235px] relative overflow-hidden flex items-center justify-center bg-[radial-gradient(circle_at_center,#381116,#15090a_45%,transparent_100%)]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#9b0612]/25 to-transparent to-[50%] z-0"></div>
                <div className="absolute left-0 right-0 bottom-0 h-[90px] bg-gradient-to-t from-[#151515]/90 to-transparent z-10"></div>
                <div className="relative z-20 text-[42px] font-black tracking-[-3px] drop-shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
                  Olá Visitante
                </div>
              </div>
              <div className="p-[20px] relative z-20">
                <div className="text-[#9b0612] text-[10px] font-bold uppercase tracking-[1.5px] mb-[7px]">Site</div>
                <h3 className="text-[20px] mb-[7px] font-bold">Olá Visitante</h3>
                <p className="text-[#888] text-[13px] leading-[1.5]">Um projeto digital criado para receber e apresentar visitantes.</p>
                <a href="https://olavisitante.netlify.app" target="_blank" rel="noopener noreferrer" className="group/link inline-block mt-[15px] text-[13px] font-bold text-white">
                  Visitar projeto <span className="text-[#9b0612] transition-all duration-200 ml-1 group-hover/link:ml-[6px]">→</span>
                </a>
              </div>
            </article>
          </div>
        </section>

        {/* CATEGORIAS */}
        <section id="categorias" className="py-[90px] px-[5%] bg-black/40 backdrop-blur-sm">
          <div className="max-w-[1300px] mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-[25px] gap-[10px]">
              <div>
                <h2 className="text-[27px] font-extrabold tracking-[-0.8px]">Categorias</h2>
                <p className="mt-[7px] text-[#aaa] md:text-[#777] text-[14px]">Organize seus projetos por tipo.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[15px] mt-[30px]">
              {/* Category Cards */}
              {[
                { icon: '🌐', title: 'Sites', desc: 'Websites e plataformas.' },
                { icon: '🎮', title: 'Games', desc: 'Projetos relacionados a jogos.' },
                { icon: '💡', title: 'Experimentos', desc: 'Ideias e projetos experimentais.' },
                { icon: '🚀', title: 'Em breve', desc: 'Novos projetos chegando.' },
              ].map((cat, idx) => (
                <div key={idx} className="group min-h-[150px] rounded-[8px] p-[25px] flex flex-col justify-end relative overflow-hidden bg-[#151515]/60 backdrop-blur-md border border-white/[0.06] transition-all duration-300 hover:-translate-y-[5px] hover:border-[#333]">
                  <div className="text-[30px] mb-auto">{cat.icon}</div>
                  <h3 className="text-[17px] font-bold mt-[15px]">{cat.title}</h3>
                  <p className="text-[#aaa] text-[12px] mt-[5px]">{cat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SOBRE */}
        <section id="sobre" className="py-[80px] md:py-[110px] px-[6%] md:px-[5%] text-center bg-transparent relative z-10">
          <div className="max-w-[700px] mx-auto bg-black/40 p-[30px] md:p-[50px] rounded-[24px] backdrop-blur-md border border-white/[0.04]">
            <div className="text-[#9b0612] text-[11px] font-bold uppercase tracking-[2px] mb-[18px]">
              Sobre o Classe
            </div>
            <h2 className="text-[32px] md:text-[42px] tracking-[-2px] mb-[24px] font-bold">
              Um lugar para meus projetos.
            </h2>
            <p className="text-[#aaa] leading-[1.8] text-[15px]">
              O Classe nasceu como uma central para reunir diferentes projetos digitais em uma experiência simples, moderna e organizada.
              <br /><br />
              Conforme novos projetos forem criados, eles poderão aparecer aqui.
            </p>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="py-[35px] px-[5%] bg-[#050505]/90 backdrop-blur-md border-t border-white/[0.06] flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-[12px] md:gap-0">
        <div className="text-[20px] font-black tracking-[-1px]">
          <span className="text-[#9b0612]">C</span>lasse
        </div>
        <p className="text-[#555] text-[12px]">
          © 2026 Classe. Todos os direitos reservados.
        </p>
      </footer>

      {/* GLOBAL STYLES FOR ANIMATION */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(25px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
