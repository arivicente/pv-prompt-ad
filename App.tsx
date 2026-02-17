
import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  XCircle, 
  BadgeCheck, 
  User, 
  Download, 
  PlayCircle,
  X
} from 'lucide-react';

// --- Reusable Components ---

const CTAButton: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <button className={`bg-[#7B5CFF] hover:bg-[#6A4BE6] text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform active:scale-95 shadow-xl flex items-center justify-center gap-2 group ${className}`}>
    <span className="text-sm md:text-base">{children}</span>
    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
  </button>
);

const Section: React.FC<{ children: React.ReactNode; className?: string; alternate?: boolean }> = ({ children, className = "" , alternate }) => (
  <section className={`py-12 md:py-20 px-5 ${alternate ? 'bg-[#101A2E]' : 'bg-[#0B1220]'} ${className}`}>
    <div className="max-w-4xl mx-auto">
      {children}
    </div>
  </section>
);

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-white/5 bg-[#101A2E] rounded-xl mb-4 overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex justify-between items-start text-left focus:outline-none transition-colors hover:bg-white/5"
      >
        <span className="text-sm md:text-base font-semibold text-white pr-4">{question}</span>
        <ChevronDown className={`w-5 h-5 text-[#7B5CFF] transition-transform duration-300 mt-1 shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="p-6 pt-0 text-[#A9B4C7] leading-relaxed text-xs md:text-sm border-t border-white/5">{answer}</p>
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    // Inject Vturb Player Script
    const script = document.createElement("script");
    script.src = "https://scripts.converteai.net/b96e0cf1-43f2-49ad-8865-5854d688debb/players/6993c734a498670b2aa28675/v4/player.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  const resultsImages = [
    { label: "Anúncio #1", url: "https://i.ibb.co/jZf8cdFy/image.png" },
    { label: "Anúncio #2", url: "https://i.ibb.co/5xWTrBtT/image.png" },
    { label: "Anúncio #3", url: "https://i.ibb.co/4Z42JQw5/image.png" },
    { label: "Anúncio #4", url: "https://i.ibb.co/nN2JpSHN/image.png" }
  ];

  return (
    <div className="font-sans text-white bg-[#0B1220] antialiased">
      
      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-10 transition-all duration-300 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img 
            src={selectedImage} 
            alt="Anúncio Ampliado" 
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-in fade-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* HERO SECTION */}
      <Section className="pt-6 md:pt-10 pb-6 md:pb-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#7B5CFF] text-[9px] md:text-[10px] font-bold mb-6 uppercase tracking-widest whitespace-nowrap">
          <BadgeCheck className="w-3 h-3" /> Para Criadores de ofertas Low Ticket
        </div>
        
        <h1 className="font-heading text-xl md:text-4xl mb-6 leading-[1.3] max-w-4xl mx-auto tracking-tight px-4 font-bold">
          Aumente as vendas do seu funil low ticket com modelos comprovados de prompts para criar anúncios que convertem
        </h1>
        
        <p className="text-xs md:text-lg text-[#A9B4C7] mb-8 max-w-2xl mx-auto leading-relaxed px-4 font-medium">
          Basta colar, adicionar os detalhes da sua oferta e gerar.
        </p>

        {/* VSL SECTION */}
        <div className="max-w-3xl mx-auto mb-10 overflow-hidden rounded-2xl border border-white/10 shadow-[0_0_50px_rgba(123,92,255,0.1)]">
          {/* @ts-ignore */}
          <vturb-smartplayer id="vid-6993c734a498670b2aa28675" style={{ display: 'block', margin: '0 auto', width: '100%' }}></vturb-smartplayer>
        </div>

        <div className="flex flex-col items-center gap-4 mb-2">
          <CTAButton className="w-full max-w-md">Quero todos os 10 prompts por R$ 27</CTAButton>
          <div className="flex items-center gap-2 text-[#A9B4C7] text-[10px] uppercase tracking-wider mt-4">
            <ShieldCheck className="w-3 h-3 text-white/40" /> Garantia de reembolso de 7 dias
          </div>
        </div>
      </Section>

      {/* STATS SECTION */}
      <Section alternate className="text-center py-16 md:py-28 border-y border-white/5">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-base md:text-xl font-medium text-[#A9B4C7] mb-12 uppercase tracking-[0.2em] opacity-80">
            Esses anúncios contribuíram para...
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-6xl font-black text-white mb-2 tracking-tighter">
                Mais de R$ 715 mil
              </span>
              <span className="text-[#7B5CFF] text-[10px] md:text-xs font-bold uppercase tracking-widest">
                Vendas de Low Ticket
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-6xl font-black text-white mb-2 tracking-tighter">
                Mais de 18.000
              </span>
              <span className="text-[#7B5CFF] text-[10px] md:text-xs font-bold uppercase tracking-widest">
                Produtos Vendidos
              </span>
            </div>
          </div>
        </div>
      </Section>

      {/* O QUE VOCÊ RECEBE */}
      <Section className="py-24">
        <div className="text-center mb-16">
          <span className="text-[#7B5CFF] text-[10px] font-bold uppercase tracking-[0.2em] mb-4 block">O QUE ESTÁ INCLUÍDO</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Eis o que você recebe</h2>
          <p className="text-[#A9B4C7] max-w-2xl mx-auto text-sm md:text-base">Tudo o que você precisa para criar imagens de anúncios de alta conversão em minutos.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-[#7B5CFF]/20 blur-[100px] rounded-full pointer-events-none group-hover:bg-[#7B5CFF]/30 transition-all"></div>
            <div className="relative bg-[#101A2E] border border-white/10 rounded-2xl shadow-2xl overflow-hidden aspect-[4/5] cursor-zoom-in" onClick={() => setSelectedImage("https://i.ibb.co/HD915R5w/image.png")}>
              <img 
                src="https://i.ibb.co/HD915R5w/image.png" 
                alt="PromptPlates Mockup Principal" 
                className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
          </div>

          <div className="space-y-4">
            {[
              { title: "10 PromptPlates Plug-and-Play", desc: "Projetadas especificamente para proprietários de ofertas de baixo custo.", icon: <CheckCircle2 className="w-5 h-5 text-green-500" /> },
              { title: "Compatível com ChatGPT, Nano Banana e muito mais", desc: "Sem necessidade de ferramentas especiais.", icon: <CheckCircle2 className="w-5 h-5 text-green-500" /> },
              { title: "Sem necessidade de engenharia avançada", desc: "Basta colar e adicionar os detalhes da sua oferta.", icon: <CheckCircle2 className="w-5 h-5 text-green-500" /> },
              { title: "Download instantâneo do PDF", desc: "Comece em minutos após a compra.", icon: <Download className="w-5 h-5 text-green-500" /> },
              { title: "BÔNUS: Treinamento em vídeo incluído", desc: "Passo a passo com exemplos reais.", icon: <PlayCircle className="w-5 h-5 text-orange-400" />, isBonus: true },
              { title: "Estilos diferentes para cada caso de uso", desc: "Depoimentos, benefícios, urgência e muito mais.", icon: <CheckCircle2 className="w-5 h-5 text-green-500" /> }
            ].map((item, idx) => (
              <div key={idx} className={`p-4 rounded-xl border border-white/5 bg-[#101A2E]/50 flex gap-4 items-start ${item.isBonus ? 'border-orange-400/20' : ''}`}>
                <div className="mt-1">{item.icon}</div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">
                    {item.isBonus && <span className="bg-orange-400 text-black text-[9px] px-1.5 py-0.5 rounded mr-2 font-black">BÔNUS</span>}
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#A9B4C7] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}

            <div className="pt-8 text-center lg:text-left">
               <div className="inline-flex items-center gap-4 mb-6">
                 <span className="text-[#A9B4C7] line-through text-sm">Valor total: R$ 97</span>
                 <span className="text-[#7B5CFF] font-bold text-2xl">R$ 27</span>
                 <span className="text-green-400 text-[10px] font-bold bg-green-400/10 px-2 py-1 rounded">72% DE DESCONTO</span>
               </div>
               <CTAButton className="w-full">Obtenha acesso instantâneo — R$ 27</CTAButton>
            </div>
          </div>
        </div>
      </Section>

      {/* RESULTADOS REAIS - COM LIGHTBOX FUNCIONAL */}
      <Section alternate>
        <div className="text-center mb-16">
          <span className="text-[#7B5CFF] text-[10px] font-bold uppercase tracking-[0.2em] mb-4 block">RESULTADOS REAIS</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Veja o que essas instruções criam</h2>
          <p className="text-[#A9B4C7] max-w-2xl mx-auto text-sm md:text-base">Essas imagens de anúncios foram geradas usando exatamente as mesmas instruções que você encontrará no PromptPlates.</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {resultsImages.map((img, i) => (
            <div 
              key={i} 
              onClick={() => setSelectedImage(img.url)}
              className="aspect-square bg-[#0B1220] rounded-2xl border border-white/10 flex items-center justify-center group cursor-zoom-in overflow-hidden relative shadow-lg"
            >
              <img 
                src={img.url} 
                alt={img.label} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-[10px] font-black uppercase tracking-widest text-white border border-white/40 px-3 py-1 bg-black/50 rounded">Ampliar {img.label}</span>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center mt-6 text-[#A9B4C7] text-[10px] font-bold uppercase tracking-[0.3em] animate-pulse">Clique para ampliar</p>
      </Section>

      {/* O PROBLEMA */}
      <Section className="py-24">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center leading-tight">Pare de perder horas com imagens de anúncios que não convertem.</h2>
          
          <div className="bg-[#101A2E] p-8 md:p-12 rounded-[2rem] border border-white/5 space-y-10 shadow-2xl">
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-4">Você já tentou gerar imagens de anúncios com IA antes?</h3>
              <p className="text-[#A9B4C7] text-sm md:text-base leading-relaxed">Talvez até tenha comprado prompts ou modelos. Mas quando você realmente os utiliza como anúncios...</p>
            </div>

            <div className="space-y-4">
              {[
                "Eles parecem genéricos e não interrompem a rolagem.",
                "A mensagem é vaga e não converte.",
                "Eles não seguem os princípios da resposta direta.",
                "Você passa horas ajustando prompts para obter resultados medíocres."
              ].map((text, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                  <p className="text-sm md:text-base text-[#A9B4C7]">{text}</p>
                </div>
              ))}
            </div>

            <div className="pt-10 border-t border-white/5">
              <p className="text-sm md:text-lg leading-relaxed text-[#A9B4C7]">
                <strong className="text-white">A verdade é:</strong> a maioria dos prompts de IA não foi criada por pessoas que realmente gerenciam campanhas publicitárias lucrativas. Eles são criados por engenheiros de prompts que nunca gastaram um centavo em anúncios Meta.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* MECANISMO (PASSOS) */}
      <Section alternate className="py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Como funcionam as <span className="text-[#7B5CFF]">placas de aviso</span>?</h2>
          <p className="text-[#A9B4C7] max-w-2xl mx-auto text-sm md:text-base">Crie imagens de anúncios de alta conversão em apenas 3 passos simples...</p>
        </div>

        <div className="space-y-24">
          {[
            { 
              step: "PASSO 01", 
              title: "Escolha seu PromptPlate", 
              desc: "Escolha entre 10 estilos diferentes, criados para objetivos específicos de anúncios: depoimentos, benefícios, senso de urgência e muito mais.",
              preview: "ui-sim-1"
            },
            { 
              step: "PASSO 02", 
              title: "Colar e personalizar", 
              desc: "Copie o texto para o ChatGPT ou sua ferramenta de IA favorita. Adicione os detalhes da sua oferta no final — e pronto.",
              preview: "ui-sim-2"
            },
            { 
              step: "PASSO 03", 
              title: "Baixe e execute anúncios", 
              desc: "Sua imagem de anúncio está pronta. Faça o download, carregue-a no Gerenciador de Meta Anúncios e comece a direcionar tráfego para sua oferta.",
              preview: "ui-sim-3"
            }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="bg-white text-black text-[10px] font-black px-4 py-1.5 rounded-full mb-8 tracking-widest uppercase">{item.step}</span>
              <div className="text-center max-w-2xl mb-12">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{item.title}</h3>
                <p className="text-[#A9B4C7] text-sm md:text-base leading-relaxed">{item.desc}</p>
              </div>
              <div className="w-full max-w-2xl aspect-video bg-[#0B1220] rounded-2xl border border-white/10 p-6 relative overflow-hidden shadow-2xl">
                 <div className="absolute top-4 left-4 flex gap-1.5">
                   <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                   <div className="w-2.5 h-2.5 rounded-full bg-orange-500/50"></div>
                   <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                 </div>
                 <div className="mt-8 flex flex-col justify-center items-center h-full">
                    {idx === 0 && (
                      <div className="w-full space-y-2">
                        <div className="h-10 bg-[#101A2E] rounded-md border border-white/5 flex items-center px-4 text-[10px] opacity-40">Estilo de depoimento</div>
                        <div className="h-10 bg-[#101A2E] rounded-md border border-white/5 flex items-center px-4 text-[10px] opacity-40">Destaque do benefício</div>
                        <div className="h-10 bg-[#7B5CFF]/10 rounded-md border border-[#7B5CFF]/30 flex items-center px-4 text-[10px] text-[#7B5CFF] font-bold">Motorista de urgência ✓</div>
                      </div>
                    )}
                    {idx === 1 && (
                      <div className="w-full space-y-4">
                        <div className="h-20 bg-[#101A2E] rounded-md border border-white/5 p-4 text-[10px] opacity-40 text-left">Gere uma imagem de anúncio para [Minha Oferta] focada em...</div>
                        <button className="w-full h-10 bg-[#7B5CFF] rounded-md text-[10px] font-bold">Gerar imagem →</button>
                      </div>
                    )}
                    {idx === 2 && (
                      <div className="flex flex-col items-center gap-4">
                        <CheckCircle2 className="w-12 h-12 text-green-500/30" />
                        <div className="text-[10px] text-green-500 font-bold uppercase tracking-widest">Imagem pronta!</div>
                        <button className="bg-[#7B5CFF] px-6 py-2 rounded-md text-[10px] font-bold flex gap-2 items-center"><Download className="w-3 h-3"/> Download</button>
                      </div>
                    )}
                 </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
           <CTAButton className="w-full max-w-md">Obtenha acesso instantâneo — R$ 27</CTAButton>
        </div>
      </Section>

      {/* PARA QUEM É ESTE PRODUTO? */}
      <Section className="py-24">
        <div className="text-center mb-16">
          <span className="text-[#7B5CFF] text-[10px] font-bold uppercase tracking-[0.2em] mb-4 block">PARA QUEM É ESTE PRODUTO?</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Para quem é este produto?</h2>
          <p className="text-[#A9B4C7] max-w-2xl mx-auto text-sm md:text-base">O PromptPlates foi projetado especificamente para proprietários de ofertas digitais de baixo valor.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: "Proprietários de ofertas de baixo custo", desc: "Venda de produtos com preço inferior a R$ 100." },
            { title: "Vendedores de Produtos de Informação", desc: "E-books, guias, modelos." },
            { title: "Criadores de Produtos Digitais", desc: "Cursos, adesões, ferramentas." },
            { title: "Criadores de Cursos", desc: "Educação e treinamento online." },
            { title: "Treinadores e Consultores", desc: "Ofertas digitais de nível básico." },
            { title: "Qualquer pessoa que veicule anúncios meta", desc: "Para funis de baixo custo." }
          ].map((item, idx) => (
            <div key={idx} className="p-6 bg-[#101A2E] border border-white/5 rounded-xl hover:border-[#7B5CFF]/30 transition-colors">
              <h4 className="font-bold text-white mb-2 text-sm md:text-base">{item.title}</h4>
              <p className="text-xs text-[#A9B4C7]">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* QUEM CRIOU ISSO (ARI VICENTE) */}
      <Section alternate className="py-24">
        <div className="text-center mb-16">
          <span className="text-[#7B5CFF] text-[10px] font-bold uppercase tracking-[0.2em] mb-4 block">QUEM CRIOU ISSO?</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Conheça Ari</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
             <div className="aspect-square bg-[#0B1220] rounded-3xl overflow-hidden border border-white/10 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-40">
                   <User className="w-32 h-32" />
                </div>
                <div className="absolute bottom-6 left-6 z-20">
                   <p className="text-[10px] text-[#7B5CFF] uppercase font-black tracking-widest mb-1">Criador do PromptPlates</p>
                   <h4 className="text-2xl font-black">Ari Vicente</h4>
                </div>
             </div>
          </div>

          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-4">
               <div className="p-6 bg-[#0B1220] border border-white/5 rounded-2xl">
                  <h4 className="text-2xl font-black text-[#7B5CFF] mb-1">Mais de 18 mil</h4>
                  <p className="text-[10px] text-[#A9B4C7] uppercase font-bold tracking-widest">Vendas geradas</p>
               </div>
               <div className="p-6 bg-[#0B1220] border border-white/5 rounded-2xl">
                  <h4 className="text-2xl font-black text-[#7B5CFF] mb-1">Mais de R$ 715 mil</h4>
                  <p className="text-[10px] text-[#A9B4C7] uppercase font-bold tracking-widest">Orientado para a receita</p>
               </div>
               <div className="p-6 bg-[#0B1220] border border-white/5 rounded-2xl">
                  <h4 className="text-2xl font-black text-[#7B5CFF] mb-1">50+</h4>
                  <p className="text-[10px] text-[#A9B4C7] uppercase font-bold tracking-widest">Clientes atendidos</p>
               </div>
               <div className="p-6 bg-[#0B1220] border border-white/5 rounded-2xl">
                  <h4 className="text-2xl font-black text-[#7B5CFF] mb-1">5+</h4>
                  <p className="text-[10px] text-[#A9B4C7] uppercase font-bold tracking-widest">Anos de experiência</p>
               </div>
            </div>

            <div className="text-[#A9B4C7] text-sm md:text-base space-y-6 leading-relaxed">
              <p>Passei anos gerenciando anúncios Meta especificamente para produtos digitais de baixo valor.</p>
              <p>Depois de criar milhares de anúncios criativos e testar o que realmente converte, percebi que as mesmas estruturas visuais continuavam a vencer repetidamente.</p>
              <p>Então, transformei esses padrões vencedores em PromptPlates — prompts de IA que recriam esses estilos de alto desempenho em segundos.</p>
              <p>Esses não são modelos genéricos de alguém que nunca veiculou um anúncio. Eles são baseados em campanhas reais que geraram <strong className="text-white">mais de 18.000 compras</strong> e <strong className="text-white">mais de R$ 715.000 em receita de baixo valor</strong>.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* OFERTA FINAL */}
      <Section className="py-24">
        <div className="max-w-2xl mx-auto bg-[#101A2E] p-12 md:p-16 rounded-[3rem] border border-white/10 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-1 bg-[#7B5CFF]"></div>
          <span className="text-[#7B5CFF] text-[10px] font-black uppercase tracking-[0.3em] mb-8 block">Oferta por tempo limitado</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">Obtenha todos os 10 PromptPlates</h2>
          <p className="text-[#A9B4C7] text-sm md:text-base mb-12">Pare de tentar adivinhar com sugestões genéricas de IA. Obtenha modelos comprovadamente eficazes na criação de imagens de anúncios de alta conversão.</p>
          
          <div className="space-y-4 mb-12 max-w-xs mx-auto text-left">
            <div className="flex gap-3 items-center text-sm font-bold text-white/80"><CheckCircle2 className="w-5 h-5 text-[#7B5CFF]"/> 10 PromptPlates (PDF)</div>
            <div className="flex gap-3 items-center text-sm font-bold text-white/80"><CheckCircle2 className="w-5 h-5 text-[#7B5CFF]"/> Treinamento em vídeo</div>
            <div className="flex gap-3 items-center text-sm font-bold text-white/80"><CheckCircle2 className="w-5 h-5 text-[#7B5CFF]"/> Acesso instantâneo</div>
          </div>

          <div className="flex flex-col items-center gap-2 mb-10">
            <span className="text-[#A9B4C7] line-through text-lg">R$ 97</span>
            <span className="text-7xl font-black text-white leading-none">R$ 27</span>
            <span className="text-[10px] text-[#A9B4C7] uppercase font-bold tracking-widest mt-2">Pagamento único. Acesso vitalício.</span>
          </div>

          <CTAButton className="w-full mb-6 text-lg">Tenha acesso instantâneo agora mesmo</CTAButton>
          
          <div className="flex items-center justify-center gap-2 text-[#A9B4C7] text-[10px] uppercase tracking-wider">
            <ShieldCheck className="w-3 h-3 text-white/40" /> Garantia de reembolso de 7 dias — Sem perguntas.
          </div>
        </div>
      </Section>

      {/* GARANTIA DETALHADA */}
      <Section alternate className="text-center py-24">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="bg-[#7B5CFF] text-white p-8 rounded-3xl flex flex-col md:flex-row items-center justify-center gap-6 shadow-xl">
             <ShieldCheck className="w-16 h-16 shrink-0" />
             <h2 className="text-3xl font-black uppercase tracking-tighter">Garantia de reembolso de 7 dias</h2>
          </div>

          <div className="space-y-8">
            <h3 className="text-3xl md:text-5xl font-black text-white leading-tight">Sua compra está garantida pela nossa garantia.</h3>
            <div className="bg-[#7B5CFF] h-1 w-24 mx-auto"></div>
            <h4 className="text-2xl md:text-3xl font-bold text-[#7B5CFF] uppercase tracking-widest italic">Garantia incondicional de reembolso</h4>
          </div>

          <div className="text-[#A9B4C7] text-sm md:text-base leading-relaxed text-left space-y-6 max-w-2xl mx-auto">
            <p>Eu sei que antes de me envolver com qualquer coisa... quero saber o que estou comprando e que isso seja respaldado por uma garantia sólida de reembolso.</p>
            <p>Eu quero que você se sinta confortável com essa compra.</p>
            <p>E mesmo que sejam apenas 27 reais, você trabalhou por esse dinheiro e ele conta.</p>
            <p>Então, aqui está o que eu organizei:</p>
            <p>Adquira o PromptPlates, use os modelos, assista ao treinamento e, o mais importante, crie algumas imagens de anúncios com eles.</p>
            <p>E se você não estiver feliz por qualquer motivo...</p>
            <p>Então, basta nos enviar um e-mail para <span className="text-white font-bold">ari@ltroads.com</span> e solicitar um reembolso dentro de 7 dias.</p>
            <p>Reembolsaremos seus R$ 27 sem <strong className="text-white">perguntas</strong> e <strong className="text-white">sem condições</strong>.</p>
            <p>Que tal essa garantia de reembolso?</p>
            <p className="font-bold text-white italic">Eu diria que é muito bom.</p>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Perguntas frequentes</h2>
          <div className="space-y-2">
            <FAQItem 
              question="Com quais ferramentas de IA isso funciona?" 
              answer="O PromptPlates funciona with any gerador de imagens por IA, incluindo ChatGPT, Midjourney, DALL-E e outras ferramentas populares. Os prompts foram projetados para serem universalmente compatíveis." 
            />
            <FAQItem 
              question="Preciso ter alguma experiência prévia em engenharia?" 
              answer="De jeito nenhum. São totalmente plug-and-play. Basta colar o texto, adicionar os detalhes da sua oferta no final e gerar. Nenhuma edição ou ajuste é necessário." 
            />
            <FAQItem 
              question="Para que tipo de ofertas estas foram concebidas?" 
              answer="Os PromptPlates são projetados especificamente para ofertas digitais de baixo valor — geralmente produtos com preço inferior a R$ 100. Isso inclui e-books, cursos, modelos, assinaturas e outros infoprodutos." 
            />
            <FAQItem 
              question="Em que se diferenciam de outros modelos de prompts?" 
              answer="Esses anúncios foram criados por uma equipe que gerou mais de R$ 715 mil em vendas de baixo valor e mais de 18 mil compras. Os textos de venda são baseados em anúncios reais de alta conversão, não em modelos genéricos." 
            />
            <FAQItem 
              question="E se não funcionarem para mim?" 
              answer="Você está coberto pela nossa garantia de reembolso de 7 dias. Se por qualquer motivo você não estiver satisfeito, basta entrar em contato conosco e reembolsaremos o seu valor pago, sem perguntas." 
            />
            <FAQItem 
              question="Como faço para receber o produto?" 
              answer="Imediatamente após a compra, você terá acesso ao PDF do PromptPlates e ao treinamento em vídeo para download. Tudo é entregue digitalmente para acesso instantâneo." 
            />
          </div>
        </div>
      </Section>

      {/* FINAL CTA BOX */}
      <Section className="pb-24">
        <div className="max-w-4xl mx-auto bg-[#101A2E] p-12 md:p-20 rounded-[3rem] border border-white/5 text-center shadow-2xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">Pronto para criar anúncios que realmente convertem?</h2>
          <p className="text-[#A9B4C7] text-lg mb-12">Adquira todos os 10 PromptPlates + o treinamento em vídeo por apenas R$ 27.</p>
          
          <CTAButton className="w-full max-w-md mx-auto mb-8 text-lg py-5">Obtenha acesso instantâneo — R$ 27</CTAButton>
          
          <div className="space-y-4">
             <p className="text-[10px] text-[#A9B4C7] uppercase font-bold tracking-widest">Pagamento único. Acesso vitalício. Garantia de 7 dias.</p>
             <div className="flex items-center justify-center gap-2 text-[#7B5CFF] text-[12px] font-black uppercase tracking-widest bg-[#7B5CFF]/10 py-3 px-6 rounded-full inline-flex">
                <ShieldCheck className="w-5 h-5" /> Garantia de reembolso de 7 dias
             </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-[#0B1220] text-center text-[#A9B4C7] text-[10px]">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p>© 2024 PromptPlates. Todos os direitos reservados.</p>
          <div className="flex gap-6 uppercase tracking-widest font-black">
            <a href="#" className="hover:text-[#7B5CFF] transition-colors">Termos</a>
            <a href="#" className="hover:text-[#7B5CFF] transition-colors">Privacidade</a>
            <a href="#" className="hover:text-[#7B5CFF] transition-colors">Suporte</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
