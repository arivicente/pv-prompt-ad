
import React, { useState } from 'react';
import { 
  ChevronDown, 
  CheckCircle2, 
  ArrowRight, 
  Layout, 
  Clock, 
  ShieldCheck, 
  TrendingUp, 
  XCircle, 
  Sparkles, 
  Play, 
  Users, 
  MousePointer2, 
  FileText, 
  Volume2, 
  Maximize 
} from 'lucide-react';

// --- Reusable Components ---

const CTAButton: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <button className={`bg-[#7B5CFF] hover:bg-[#6A4BE6] text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform active:scale-95 shadow-xl flex items-center justify-center gap-2 group ${className}`}>
    <span className="text-sm md:text-base">{children}</span>
    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
  </button>
);

const Section: React.FC<{ children: React.ReactNode; className?: string; alternate?: boolean }> = ({ children, className = "", alternate }) => (
  <section className={`py-12 md:py-20 px-5 ${alternate ? 'bg-[#101A2E]' : 'bg-[#0B1220]'} ${className}`}>
    <div className="max-w-5xl mx-auto">
      {children}
    </div>
  </section>
);

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-white/5 bg-[#101A2E] rounded-xl mb-3 overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-5 flex justify-between items-start text-left focus:outline-none"
      >
        <span className="text-sm md:text-base font-medium text-white pr-4">{question}</span>
        <ChevronDown className={`w-5 h-5 text-[#7B5CFF] transition-transform duration-300 mt-1 shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 border-t border-white/5' : 'max-h-0'}`}>
        <p className="p-5 text-[#A9B4C7] leading-relaxed text-xs md:text-sm">{answer}</p>
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="font-sans text-white bg-[#0B1220] antialiased">
      
      {/* HERO SECTION */}
      <Section className="pt-16 pb-12 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#7B5CFF] text-[9px] font-bold mb-8 uppercase tracking-widest">
          <Sparkles className="w-3 h-3" /> Para proprietários de ofertas de baixo custo
        </div>
        <h1 className="font-heading text-3xl md:text-5xl mb-6 leading-[1.2] max-w-4xl mx-auto tracking-tight">
          Aumente as vendas do seu <span className="text-[#7B5CFF]">funil de baixo custo</span> com estes <span className="text-[#7B5CFF]">modelos de anúncios criativos comprovados.</span>
        </h1>
        <p className="text-sm md:text-base text-[#A9B4C7] mb-10 max-w-2xl mx-auto leading-relaxed px-4">
          Basta colar, adicionar os detalhes da sua oferta e gerar.
        </p>

        <div className="relative max-w-3xl mx-auto mb-10 aspect-video bg-black rounded-2xl border border-white/10 shadow-2xl flex items-center justify-center overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
          <div className="w-14 h-14 bg-[#7B5CFF] rounded-full flex items-center justify-center shadow-2xl z-10 cursor-pointer">
            <Play className="w-6 h-6 fill-white ml-1" />
          </div>
          <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 z-10">
            <Play className="w-4 h-4 text-white opacity-80" />
            <div className="h-1 bg-white/20 rounded-full flex-1 relative overflow-hidden">
              <div className="absolute top-0 left-0 h-full w-1/3 bg-[#7B5CFF]"></div>
            </div>
            <Volume2 className="w-4 h-4 text-white opacity-80" />
            <Maximize className="w-4 h-4 text-white opacity-80" />
          </div>
        </div>

        <div className="flex flex-col items-center gap-4">
          <CTAButton className="w-full max-w-md">Adquira todos os 10 PromptPlates por US$ 27</CTAButton>
          <div className="flex items-center gap-2 text-[#A9B4C7] text-[9px] uppercase tracking-wider mt-2">
            <ShieldCheck className="w-3 h-3 text-green-500" /> Garantia de reembolso de 30 dias
          </div>
        </div>
      </Section>

      {/* Social Proof */}
      <div className="border-y border-white/5 py-12 bg-[#101A2E]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-lg md:text-xl font-bold mb-10 text-[#A9B4C7]">Essas placas de aviso contribuíram para...</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1">Mais de US$ 715 mil</div>
              <div className="text-[#A9B4C7] text-[10px] uppercase tracking-widest mt-2">Vendas de baixo valor</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1">Mais de 18.000</div>
              <div className="text-[#A9B4C7] text-[10px] uppercase tracking-widest mt-2">Produtos Vendidos</div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Box */}
      <Section className="py-20">
        <div className="text-center mb-16">
          <span className="text-[#7B5CFF] font-bold text-[9px] uppercase tracking-[0.2em] mb-4 block">O que está incluído</span>
          <h2 className="font-heading text-2xl md:text-3xl mb-6">Eis o que você recebe</h2>
          <p className="text-[#A9B4C7] text-sm max-w-xl mx-auto px-4">Tudo o que você precisa para criar imagens de anúncios de alta conversão em minutos.</p>
        </div>

        <div className="flex flex-col items-center gap-12">
          <div className="relative group mb-8">
            <div className="absolute inset-0 bg-[#7B5CFF]/10 blur-[80px] rounded-full"></div>
            <div className="relative bg-[#101A2E] border border-white/10 p-4 rounded-3xl shadow-2xl overflow-hidden max-w-[280px] transform hover:scale-[1.02] transition-transform">
               <div className="bg-[#0B1220] p-6 rounded-2xl border border-white/5">
                  <h3 className="font-heading text-sm mb-2 leading-tight uppercase tracking-tight">LOW TICKET AD PROMPTPLATES</h3>
                  <div className="w-12 h-0.5 bg-[#7B5CFF] mb-6"></div>
                  <p className="text-[9px] text-[#A9B4C7] leading-relaxed mb-10">Plug-and-play image prompt templates for high-converting low ticket ads.</p>
                  <div className="bg-[#101A2E] p-3 rounded-lg border border-white/5 text-[9px] text-center mb-8 font-bold">
                    Make Ad Creation Stupidly Easy
                  </div>
                  <p className="text-[7px] text-center text-white/40 uppercase tracking-widest">Works with ChatGPT, NanoBanana & more</p>
               </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-3xl">
            {[
              { title: "10 PromptPlates Plug-and-Play", desc: "projetadas especificamente para anúncios criativos de baixo custo.", icon: <CheckCircle2 className="text-green-500 w-5 h-5" /> },
              { title: "Compatível com ChatGPT, NanoBanana e muito mais", desc: "sem necessidade de ferramentas especiais.", icon: <CheckCircle2 className="text-green-500 w-5 h-5" /> },
              { title: "Sem necessidade de engenharia avançada", desc: "basta colar e adicionar os detalhes da sua oferta.", icon: <CheckCircle2 className="text-green-500 w-5 h-5" /> },
              { title: "Download instantâneo do PDF", desc: "comece em minutos após a compra.", icon: <CheckCircle2 className="text-green-500 w-5 h-5" /> },
              { title: "Treinamento em vídeo incluído", desc: "passo a passo com exemplos reais.", icon: <Play className="text-yellow-500 w-4 h-4" />, bonus: true },
              { title: "Estilos diferentes para cada caso de uso", desc: "depoimentos, benefícios, urgência e muito mais.", icon: <CheckCircle2 className="text-green-500 w-5 h-5" /> }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-5 bg-[#101A2E] rounded-xl border border-white/5 relative items-start">
                <div className="mt-1 shrink-0">{item.icon}</div>
                <div>
                  <h4 className="font-bold text-[11px] md:text-sm mb-1">{item.title}</h4>
                  <p className="text-[#A9B4C7] text-[10px] leading-relaxed">{item.desc}</p>
                </div>
                {item.bonus && (
                  <span className="absolute -top-2 right-4 text-[8px] bg-[#7B5CFF] px-2 py-0.5 rounded text-white font-bold uppercase tracking-widest">BÔNUS</span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center px-4">
          <div className="text-[#A9B4C7] text-[10px] mb-6 font-bold uppercase tracking-widest">Valor total: <span className="line-through opacity-50 mr-2">US$ 97</span> <span className="text-white text-base">$ 27</span> <span className="text-green-500 ml-2">72% de desconto</span></div>
          <CTAButton className="mx-auto w-full max-w-md">Obtenha acesso instantâneo — $27</CTAButton>
        </div>
      </Section>

      {/* Results Gallery */}
      <Section alternate>
        <div className="text-center mb-12">
           <span className="text-[#7B5CFF] font-bold text-[9px] uppercase tracking-widest mb-4 block">Resultados reais</span>
           <h2 className="font-heading text-2xl md:text-3xl mb-6">Veja o que essas instruções criam</h2>
           <p className="text-[#A9B4C7] text-xs px-4">Essas imagens de anúncios foram geradas usando exatamente as mesmas instruções que você encontrará no PromptPlates.</p>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 px-2">
          {[1,2,3,4].map(i => (
            <div key={i} className="aspect-square bg-[#0B1220] rounded-xl border border-white/10 p-1 overflow-hidden shadow-lg group cursor-zoom-in">
               <div className="w-full h-full bg-[#1A263D] rounded-lg flex items-center justify-center border border-dashed border-white/5 group-hover:bg-[#1E2E4A] transition-colors">
                  <Layout className="w-6 h-6 text-white/5" />
               </div>
            </div>
          ))}
        </div>
        <p className="text-center text-[#A9B4C7] text-[9px] mt-6 font-bold uppercase tracking-widest">Clique para ampliar</p>
      </Section>

      {/* Pain Section */}
      <Section>
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading text-2xl md:text-3xl text-center mb-12 leading-tight">Pare de perder horas com imagens de anúncios que não convertem.</h2>
          <div className="bg-[#101A2E] rounded-3xl p-6 md:p-10 border border-white/5">
            <div className="space-y-6">
              <p className="text-white text-sm font-bold">Você já tentou gerar imagens de anúncios com IA antes?</p>
              <p className="text-[#A9B4C7] text-xs leading-relaxed">
                Talvez até tenha comprado prompts ou modelos. Mas quando você realmente os utiliza como anúncios...
              </p>
              <div className="grid grid-cols-1 gap-4">
                {[
                  "Eles parecem genéricos e não interrompem a rolagem.",
                  "A mensagem é vaga e não converte.",
                  "Eles não seguem os princípios da resposta direta.",
                  "Você passa horas ajustando prompts para obter resultados medíocres."
                ].map((text, i) => (
                  <div key={i} className="flex gap-3 p-4 rounded-xl border border-red-500/10 bg-red-500/5 items-center">
                    <XCircle className="text-red-500 w-4 h-4 shrink-0" />
                    <p className="text-[10px] text-[#A9B4C7]">{text}</p>
                  </div>
                ))}
              </div>
              <div className="pt-8 border-t border-white/5">
                <p className="text-white text-xs leading-relaxed">
                  <strong className="text-white">A verdade é:</strong> a maioria dos prompts de IA não foi criada por pessoas que realmente gerenciam campanhas publicitárias lucrativas. Eles são criados por engenheiros de prompts que nunca gastaram um centavo em anúncios Meta.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Steps Mechanism */}
      <Section alternate>
        <div className="text-center mb-12">
          <h2 className="font-heading text-2xl mb-4 flex flex-wrap items-center justify-center gap-2">Como funcionam <span className="bg-[#7B5CFF] px-3 py-1 rounded text-lg md:text-2xl font-bold uppercase">as placas de aviso</span> ?</h2>
          <p className="text-[#A9B4C7] text-xs">Crie imagens de anúncios de alta conversão <span className="text-[#7B5CFF] font-bold">em apenas 3 passos simples...</span></p>
        </div>

        <div className="flex flex-col gap-12 max-w-sm mx-auto">
          {[
            { step: "01", title: "Escolha seu PromptPlate", desc: "Escolha entre 10 estilos diferentes, criados para objetivos específicos: depoimentos, benefícios, senso de urgência e muito mais.", type: "selection" },
            { step: "02", title: "Colar e personalizar", desc: "Copie o texto para o ChatGPT ou sua ferramenta de IA favorita. Adicione os detalhes da sua oferta no final — e pronto.", type: "input" },
            { step: "03", title: "Baixe e execute anúncios", desc: "Sua imagem de anúncio está pronta. Faça o download, carregue-a no Gerenciador de Meta Anúncios e comece a direcionar tráfego para sua oferta.", type: "done" }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="bg-white text-black text-[9px] font-black px-5 py-1.5 rounded-full mb-8 uppercase tracking-widest shadow-lg">PASSO {item.step}</div>
              <h4 className="font-bold text-lg mb-3 tracking-tight">{item.title}</h4>
              <p className="text-[#A9B4C7] text-[11px] mb-8 leading-relaxed px-4">{item.desc}</p>
              
              <div className="w-full bg-[#0B1220] rounded-2xl p-5 border border-white/10 aspect-[4/5] flex flex-col relative overflow-hidden shadow-2xl">
                <div className="flex items-center gap-1.5 mb-6">
                   <div className="w-2 h-2 rounded-full bg-red-500/80"></div>
                   <div className="w-2 h-2 rounded-full bg-yellow-500/80"></div>
                   <div className="w-2 h-2 rounded-full bg-green-500/80"></div>
                </div>
                <div className="flex-1 flex flex-col gap-4">
                  {item.type === "selection" && (
                    <div className="space-y-3">
                      <div className="h-6 bg-[#101A2E] border border-white/5 rounded-md px-3 flex items-center justify-between text-[8px] text-[#A9B4C7]">Estilo de depoimento <ChevronDown className="w-3 h-3" /></div>
                      <div className="h-6 bg-[#101A2E] border border-white/5 rounded-md px-3 flex items-center justify-between text-[8px] text-[#A9B4C7]">Destaque do benefício <ChevronDown className="w-3 h-3" /></div>
                      <div className="h-6 bg-[#7B5CFF]/10 border border-[#7B5CFF]/30 rounded-md px-3 flex items-center justify-between text-[8px] text-[#7B5CFF]">Motorista de urgência <CheckCircle2 className="w-3 h-3" /></div>
                    </div>
                  )}
                  {item.type === "input" && (
                    <div className="space-y-4 flex flex-col h-full">
                      <div className="flex-1 bg-[#101A2E] border border-white/5 rounded-md p-3 relative overflow-hidden">
                         <div className="w-full h-1 bg-white/5 rounded mb-2"></div>
                         <div className="w-2/3 h-1 bg-white/5 rounded"></div>
                      </div>
                      <div className="bg-[#7B5CFF] text-white text-[9px] py-2 rounded-lg font-black uppercase tracking-widest shadow-lg shadow-[#7B5CFF]/20">Gerar imagem →</div>
                    </div>
                  )}
                  {item.type === "done" && (
                    <div className="h-full flex flex-col items-center justify-center text-center">
                        <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mb-4">
                          <CheckCircle2 className="w-6 h-6 text-green-500" />
                        </div>
                        <span className="text-[9px] text-green-500 uppercase font-black tracking-widest mb-4">Imagem pronta!</span>
                        <div className="bg-[#0070F3] text-white text-[10px] px-8 py-2 rounded-md font-bold shadow-lg">Download</div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center px-4">
          <CTAButton className="w-full max-w-md">Obtenha acesso instantâneo — $27</CTAButton>
        </div>
      </Section>

      {/* Target Audience */}
      <Section className="py-20">
        <div className="text-center mb-12">
          <h2 className="font-heading text-2xl md:text-3xl mb-4">Para quem é este produto?</h2>
          <p className="text-[#A9B4C7] text-xs px-4">O PromptPlates foi projetado especificamente para proprietários de ofertas digitais de baixo valor.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-2">
          {[
            { title: "Proprietários de ofertas de baixo custo", desc: "Venda de produtos com preço inferior a 100 dólares." },
            { title: "Vendedores de Produtos de Informação", desc: "E-books, guias, modelos." },
            { title: "Criadores de Produtos Digitais", desc: "Cursos, adesões, ferramentas." },
            { title: "Criadores de Cursos", desc: "Educação e treinamento online." },
            { title: "Treinadores e Consultores", desc: "Ofertas digitais de nível básico." },
            { title: "Qualquer pessoa que veicule anúncios meta", desc: "Para funis de baixo custo." }
          ].map((item, i) => (
            <div key={i} className="bg-[#101A2E] p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
              <h4 className="font-bold mb-2 text-[13px] tracking-tight">{item.title}</h4>
              <p className="text-[#A9B4C7] text-[10px] leading-relaxed opacity-60">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Social Proof - Founder */}
      <Section alternate className="py-20">
        <div className="flex flex-col items-center">
          <span className="text-[#7B5CFF] font-bold text-[9px] uppercase tracking-widest mb-6 block">Quem criou isso?</span>
          <h2 className="font-heading text-3xl mb-12">Conheça Francis</h2>
          <div className="relative mb-12 w-full max-w-[280px]">
             <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative grayscale hover:grayscale-0 transition-all duration-700">
                <div className="aspect-[4/5] bg-[#1A263D] flex items-center justify-center">
                   <Users className="w-16 h-16 text-white/5" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                   <p className="text-[8px] text-[#A9B4C7] font-bold uppercase mb-1 tracking-widest">Criador do PromptPlates</p>
                   <h3 className="text-lg font-bold">Francisco Sprenger</h3>
                </div>
             </div>
          </div>
          <div className="grid grid-cols-2 gap-3 w-full max-w-md mb-12 px-2">
             {[
               { val: "18 mil+", lab: "Vendas geradas" },
               { val: "$715 mil+", lab: "Orientado p/ receita" },
               { val: "50+", lab: "Clientes atendidos" },
               { val: "5+", lab: "Anos de experiência" }
             ].map((st, i) => (
               <div key={i} className="bg-[#0B1220] p-4 rounded-xl border border-white/5 text-center">
                  <div className="text-lg font-bold text-[#7B5CFF] mb-1 leading-none">{st.val}</div>
                  <p className="text-[7px] text-[#A9B4C7] uppercase tracking-widest font-bold">{st.lab}</p>
               </div>
             ))}
          </div>
          <div className="space-y-6 text-[#A9B4C7] text-[11px] leading-relaxed text-center px-4 max-w-xl">
             <p>Passei anos gerenciando anúncios Meta especificamente para produtos digitais de baixo valor.</p>
             <p>Depois de criar milhares de anúncios criativos e testar o que realmente converte, percebi que as mesmas estruturas visuais continuavam a vencer repetidamente.</p>
             <p>Então, transformei esses padrões vencedores em PromptPlates — prompts de IA que recriam esses estilos de alto desempenho em segundos.</p>
             <p className="text-white font-medium italic">Esses não são modelos genéricos de alguém que nunca veiculou um anúncio. Eles são baseados em campanhas reais que geraram <strong className="text-white underline decoration-[#7B5CFF]">mais de 18.000 compras e mais de US$ 715.000 em receita de baixo valor.</strong></p>
          </div>
        </div>
      </Section>

      {/* Offer */}
      <Section className="py-20 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[#7B5CFF]/5 blur-[120px] rounded-full pointer-events-none"></div>
        <span className="text-[#7B5CFF] font-bold text-[9px] uppercase tracking-widest mb-4 block">Oferta por tempo limitado</span>
        <h2 className="font-heading text-2xl md:text-4xl mb-6 tracking-tight">Obtenha todos os 10 PromptPlates</h2>
        <p className="text-[#A9B4C7] text-xs mb-10 max-w-md mx-auto px-4 leading-relaxed">
          Pare de tentar adivinhar com sugestões genéricas de IA. Obtenha modelos comprovadamente eficazes na criação de imagens de anúncios de alta conversão.
        </p>

        <div className="flex flex-col items-center gap-4 mb-12 font-bold uppercase tracking-widest text-[9px] text-[#A9B4C7]">
          <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> 10 PromptPlates (PDF)</div>
          <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Treinamento em vídeo</div>
          <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Acesso Instantâneo</div>
        </div>

        <div className="flex items-center justify-center gap-4 mb-4">
           <span className="text-[#A9B4C7] line-through text-lg opacity-40">$ 97</span>
           <span className="text-6xl font-black text-white">$ 27</span>
        </div>
        <p className="text-[9px] text-[#A9B4C7] uppercase tracking-widest mb-10 font-bold">Pagamento único. Acesso vitalício.</p>

        <CTAButton className="mx-auto w-full max-w-md mb-6">Obtenha acesso instantâneo agora mesmo</CTAButton>
        <div className="flex items-center justify-center gap-2 text-[#A9B4C7] text-[10px] opacity-70">
           <ShieldCheck className="w-3 h-3 text-green-500" />
           Garantia de reembolso de 30 dias — Sem perguntas.
        </div>
      </Section>

      {/* Guarantee Details */}
      <Section alternate className="text-center py-20">
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          <div className="bg-[#7B5CFF] text-white px-5 py-2 rounded-xl font-bold text-[9px] inline-flex items-center gap-2 mb-10 uppercase tracking-widest shadow-xl shadow-[#7B5CFF]/20">
            <ShieldCheck className="w-4 h-4" /> Garantia de reembolso de 30 dias
          </div>
          <h2 className="font-heading text-2xl mb-8 leading-tight tracking-tight">Sua compra está garantida pela nossa garantia.</h2>
          <div className="bg-[#0070F3] text-white px-8 py-4 rounded-xl font-black text-sm md:text-base mb-12 inline-block uppercase tracking-wider shadow-2xl">
             Garantia incondicional de reembolso
          </div>
          <div className="space-y-6 text-[#A9B4C7] text-[11px] leading-relaxed text-left px-2 border-l border-white/5">
             <p>Eu sei que antes de me envolver com qualquer coisa... quero saber o que estou comprando e que isso seja respaldado por uma garantia sólida de reembolso.</p>
             <p>E quero que você se sinta confortável com essa compra. Mesmo que sejam apenas 27 dólares, você trabalhou por esse dinheiro e ele conta.</p>
             <p className="text-white font-medium">Adquira o PromptPlates, use os modelos, assista ao treinamento e, o mais importante, crie algumas imagens de anúncios com eles.</p>
             <p>E se você não estiver feliz por qualquer motivo, basta nos enviar um e-mail para <span className="text-white underline">fran@litoads.com</span> e solicitar um reembolso dentro de 30 dias. Reembolsaremos seus US$ 27 sem <strong className="text-white underline decoration-[#7B5CFF]">perguntas e sem condições</strong>.</p>
             <p className="text-white font-bold text-base mt-8">Eu diria que é muito bom.</p>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl text-center mb-12">Perguntas frequentes</h2>
          <div className="space-y-1">
            <FAQItem question="Com quais ferramentas de IA isso funciona?" answer="O PromptPlates funciona com qualquer gerador de imagens por IA, incluindo ChatGPT, Nano Banana e outras ferramentas populares." />
            <FAQItem question="Preciso ter alguma experiência prévia em engenharia?" answer="De jeito nenhum. São totalmente plug-and-play. Basta colar o texto, adicionar os detalhes da sua oferta e pronto." />
            <FAQItem question="Para que tipo de ofertas estas foram concebidas?" answer="Os PromptPlates são projetados especificamente para ofertas digitais de baixo valor — geralmente produtos com preço inferior a US$ 100." />
            <FAQItem question="Em que se diferenciam de outros modelos de prompts?" answer="Estes anúncios foram criados por uma equipe que gerou mais de US$ 715 mil em vendas reais, baseados em estruturas de alta conversão comprovadas." />
            <FAQItem question="E se não funcionarem para mim?" answer="Você está coberto pela nossa garantia de reembolso de 30 dias. Se não estiver satisfeito, reembolsamos 100% do valor." />
            <FAQItem question="Como faço para receber o produto?" answer="Imediatamente após a compra, você terá acesso ao PDF e ao treinamento em vídeo para download imediato." />
          </div>
        </div>
      </Section>

      {/* CTA FINAL */}
      <Section alternate className="text-center py-24 bg-gradient-to-b from-[#101A2E] to-[#0B1220]">
        <h2 className="font-heading text-2xl md:text-4xl mb-4 leading-tight tracking-tight">Pronto para criar anúncios que realmente convertem?</h2>
        <p className="text-[#A9B4C7] text-xs mb-10 max-w-xs mx-auto px-2 opacity-80 uppercase tracking-widest font-bold">Adquira todos os 10 PromptPlates + o treinamento em vídeo por apenas US$ 27.</p>
        <div className="flex flex-col items-center gap-6 px-4">
          <CTAButton className="w-full max-w-md">Obtenha acesso instantâneo — $27</CTAButton>
          <p className="text-[9px] text-[#A9B4C7] uppercase tracking-widest font-black">Pagamento único. Acesso vitalício. Garantia de 30 dias.</p>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-[#0B1220] text-center text-[#A9B4C7] text-[9px]">
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
