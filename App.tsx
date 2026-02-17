
import React, { useState, useEffect } from 'react';
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
  useEffect(() => {
    // Inject Vturb Player Script
    const script = document.createElement("script");
    script.src = "https://scripts.converteai.net/b96e0cf1-43f2-49ad-8865-5854d688debb/players/6993c734a498670b2aa28675/v4/player.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="font-sans text-white bg-[#0B1220] antialiased">
      
      {/* HERO SECTION */}
      <Section className="pt-6 md:pt-10 pb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#7B5CFF] text-[9px] md:text-[10px] font-bold mb-6 uppercase tracking-widest whitespace-nowrap">
          <XCircle className="w-3 h-3" /> Anúncios falham por falta de atenção.
        </div>
        
        <h1 className="font-heading text-xl md:text-3xl mb-6 leading-[1.3] max-w-4xl mx-auto tracking-tight px-4 font-bold">
          Aumente as vendas do seu <span className="text-[#7B5CFF]">low ticket</span> usando modelos de anúncios comprovados para criar e escalar campanhas de alta conversão de forma rápida e direta.
        </h1>
        
        <p className="text-[10px] sm:text-xs md:text-base text-[#A9B4C7] mb-8 max-w-none mx-auto leading-relaxed px-4 whitespace-nowrap font-medium">
          Basta colar, adicionar os detalhes da sua oferta e gerar.
        </p>

        {/* VSL SECTION */}
        <div className="max-w-3xl mx-auto mb-10 overflow-hidden rounded-2xl border border-white/10 shadow-[0_0_50px_rgba(123,92,255,0.1)]">
          {/* @ts-ignore */}
          <vturb-smartplayer id="vid-6993c734a498670b2aa28675" style={{ display: 'block', margin: '0 auto', width: '100%' }}></vturb-smartplayer>
        </div>

        <div className="flex flex-col items-center gap-4 mb-14">
          <CTAButton className="w-full max-w-md">QUERO ACESSO IMEDIATO</CTAButton>
          <div className="flex items-center gap-2 text-[#A9B4C7] text-[9px] uppercase tracking-wider mt-2">
            <ShieldCheck className="w-3 h-3 text-green-500" /> garantia de reembolso de 7 dias
          </div>
        </div>

        <div className="relative max-w-4xl mx-auto aspect-video bg-[#101A2E] rounded-2xl border border-white/10 shadow-[0_0_50px_rgba(123,92,255,0.15)] flex items-center justify-center overflow-hidden">
          <div className="p-8 text-center">
            <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
              <div className="bg-[#0B1220] p-6 rounded-xl border border-white/10 w-full md:w-64 text-left">
                <p className="text-[10px] text-[#7B5CFF] font-bold mb-2 uppercase tracking-tighter">Prompt Input</p>
                <div className="space-y-2 opacity-40">
                  <div className="h-2 w-full bg-white/10 rounded"></div>
                  <div className="h-2 w-3/4 bg-white/10 rounded"></div>
                  <div className="h-2 w-full bg-white/10 rounded"></div>
                </div>
              </div>
              <ArrowRight className="w-8 h-8 text-[#7B5CFF] hidden md:block" />
              <div className="bg-white/5 p-2 rounded-xl border border-white/10">
                <div className="w-full md:w-64 aspect-square bg-gradient-to-br from-[#7B5CFF]/20 to-transparent rounded-lg flex items-center justify-center">
                  <Sparkles className="w-12 h-12 text-[#7B5CFF]" />
                </div>
              </div>
            </div>
            <p className="mt-8 text-[#A9B4C7] text-xs font-bold uppercase tracking-widest">Mockup: Do Prompt ao Criativo em Segundos</p>
          </div>
        </div>
      </Section>

      {/* Seção 2: Demonstração Visual */}
      <Section alternate>
        <div className="text-center mb-16">
          <h2 className="font-heading text-2xl md:text-3xl mb-4 font-bold tracking-tight">De <span className="text-[#7B5CFF]">Textos Travados</span> a <span className="text-[#7B5CFF]">Anúncios Magnéticos</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <div className="bg-[#0B1220] p-8 rounded-3xl border border-white/5 flex flex-col justify-between">
            <div>
              <span className="text-red-400 text-[10px] font-bold uppercase tracking-widest mb-4 block">Antes: O Problema</span>
              <h3 className="text-xl font-bold mb-4">Tentando criar no escuro</h3>
              <p className="text-[#A9B4C7] text-sm leading-relaxed mb-6">Horas tentando segmentar, mudando públicos, mas com criativos que ninguém clica. Dinheiro jogado fora em testes sem lógica.</p>
            </div>
            <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-xl flex items-center gap-3">
              <XCircle className="text-red-500 w-5 h-5 shrink-0" />
              <span className="text-red-400 text-xs font-medium">Anúncios ignorados pelo público.</span>
            </div>
          </div>
          <div className="bg-[#101A2E] p-8 rounded-3xl border border-[#7B5CFF]/20 shadow-[0_0_30px_rgba(123,92,255,0.05)] flex flex-col justify-between">
            <div>
              <span className="text-[#7B5CFF] text-[10px] font-bold uppercase tracking-widest mb-4 block">Depois: A Solução</span>
              <h3 className="text-xl font-bold mb-4">Estrutura que Converte</h3>
              <p className="text-[#A9B4C7] text-sm leading-relaxed mb-6">Modelos validados que forçam a atenção. Você só insere o seu produto e a IA gera o ângulo perfeito para vender.</p>
            </div>
            <div className="bg-green-500/10 border border-green-500/20 p-4 rounded-xl flex items-center gap-3">
              <CheckCircle2 className="text-green-500 w-5 h-5 shrink-0" />
              <span className="text-green-400 text-xs font-medium">Cliques qualificados e vendas no dashboard.</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Seção 3: O Problema Real */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-2xl md:text-3xl mb-8 font-bold">Por que a maioria dos anúncios de <span className="text-red-500">Low Ticket</span> falha?</h2>
          <div className="space-y-6 text-[#A9B4C7] text-sm md:text-base text-left bg-[#101A2E] p-8 md:p-12 rounded-[2rem] border border-white/5">
            <p>Não é a segmentação. Não é o orçamento. É a <strong>atenção.</strong></p>
            <p>Em um feed infinito, se o seu anúncio não interrompe o padrão do usuário nos primeiros 2 segundos, você já perdeu a venda.</p>
            <p>A maioria das pessoas foca na ferramenta, mas esquece da <strong>estrutura de copy visual.</strong> Tentativa e erro custa caro. Você está pagando para aprender o que o mercado já validou.</p>
            <div className="pt-6 border-t border-white/5 font-bold text-white italic">
              "Atenção é o novo petróleo, e os nossos prompts são a broca de alta precisão."
            </div>
          </div>
        </div>
      </Section>

      {/* Seção 4: Mecanismo */}
      <Section alternate>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              title: "Estrutura Validada", 
              desc: "Não inventamos nada. Transformamos estruturas que já geraram milhões em modelos replicáveis.",
              icon: <Layout className="w-8 h-8 text-[#7B5CFF]" />
            },
            { 
              title: "Fim da Tentativa e Erro", 
              desc: "Pare de queimar dinheiro testando criativos amadores. Use o que a lógica de conversão exige.",
              icon: <TrendingUp className="w-8 h-8 text-[#7B5CFF]" />
            },
            { 
              title: "Velocidade de Escala", 
              desc: "Gere 10, 20, 50 variações de anúncios em minutos. Teste rápido, escale o que funciona.",
              icon: <Clock className="w-8 h-8 text-[#7B5CFF]" />
            }
          ].map((item, i) => (
            <div key={i} className="p-8 bg-[#0B1220] rounded-2xl border border-white/5">
              <div className="mb-6">{item.icon}</div>
              <h4 className="font-bold text-lg mb-3 tracking-tight">{item.title}</h4>
              <p className="text-[#A9B4C7] text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Seção 5: Como Funciona */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="font-heading text-2xl md:text-3xl font-bold">Simples como 1, 2, 3</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          <div className="hidden md:block absolute top-10 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-[#7B5CFF]/30 to-transparent"></div>
          {[
            { step: "01", title: "Copiar", desc: "Escolha um dos nossos prompts estratégicos no guia.", icon: <FileText className="w-6 h-6" /> },
            { step: "02", title: "Colar", desc: "Insira os detalhes do seu produto ou oferta.", icon: <MousePointer2 className="w-6 h-6" /> },
            { step: "03", title: "Gerar", desc: "Pronto! Seus anúncios de alta conversão estão criados.", icon: <Sparkles className="w-6 h-6" /> }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center relative z-10">
              <div className="w-16 h-16 bg-[#7B5CFF] rounded-full flex items-center justify-center mb-6 shadow-xl shadow-[#7B5CFF]/20 font-bold text-xl">
                {item.icon}
              </div>
              <h4 className="font-bold text-lg mb-2">{item.title}</h4>
              <p className="text-[#A9B4C7] text-sm leading-relaxed max-w-[200px]">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Seção 6: Funciona Mesmo Se */}
      <Section alternate>
        <div className="max-w-2xl mx-auto bg-[#0B1220] p-8 md:p-12 rounded-3xl border border-white/5">
          <h2 className="font-heading text-2xl mb-10 text-center font-bold">Isso funciona mesmo se você...</h2>
          <div className="grid grid-cols-1 gap-4">
            {[
              "Não sabe nada de copy ou design",
              "Não se considera uma pessoa criativa",
              "Está começando do absoluto zero no tráfego",
              "Está travado em anúncios que não vendem",
              "Já tentou outros métodos e não teve resultados",
              "Tem pouco orçamento para testar"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-4 p-4 bg-[#101A2E] rounded-xl border border-white/5">
                <CheckCircle2 className="w-5 h-5 text-[#7B5CFF] shrink-0" />
                <span className="text-sm text-[#A9B4C7] font-medium">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Seção 7: O Que Você Recebe */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="font-heading text-2xl md:text-3xl font-bold">O Acesso Completo ao Método</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Modelos de prompts estruturados",
            "Estruturas de anúncios validadas",
            "Categorias organizadas por nicho",
            "Guia rápido de implementação",
            "Acesso imediato após o pagamento",
            "Atualizações e novos modelos"
          ].map((item, i) => (
            <div key={i} className="bg-[#101A2E] p-6 rounded-xl border border-white/5 hover:border-[#7B5CFF]/30 transition-all cursor-default">
              <h4 className="font-bold text-sm text-white mb-2">{item}</h4>
              <p className="text-[10px] text-[#A9B4C7] leading-relaxed">Desenvolvido para máxima performance em funis de baixo ticket.</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Seção 9: Prova Lógica */}
      <Section alternate>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-2xl md:text-3xl text-center mb-12 font-bold">Por que isso funciona matematicamente?</h2>
          <div className="space-y-8 text-[#A9B4C7] text-sm leading-relaxed">
            <p>Anúncios de baixo ticket precisam de um <strong>Custo por Clique (CPC)</strong> extremamente baixo e um <strong>CTR (Taxa de Cliques)</strong> alto para serem lucrativos.</p>
            <p>Nossos modelos não focam apenas em "ser bonito", eles focam em gatilhos de curiosidade, urgência e prova social visual. Ao aumentar o seu CTR em apenas 1%, você pode reduzir o seu custo de aquisição pela metade.</p>
            <p className="bg-[#0B1220] p-6 rounded-2xl border-l-4 border-[#7B5CFF] text-white font-medium">
              "Não é sorte, é engenharia reversa do que as plataformas de anúncios recompensam: engajamento e retenção."
            </p>
          </div>
        </div>
      </Section>

      {/* Seção 10: Oferta */}
      <Section className="text-center py-24 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[#7B5CFF]/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="max-w-xl mx-auto bg-[#101A2E] p-12 rounded-[3rem] border border-[#7B5CFF]/20 shadow-2xl relative z-10">
          <span className="text-[#7B5CFF] font-bold text-[10px] uppercase tracking-widest mb-6 block">Oferta Exclusiva</span>
          <h2 className="font-heading text-3xl md:text-4xl mb-6 font-bold">Acesso Vitalício</h2>
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="text-[#A9B4C7] line-through text-xl opacity-40">R$ 197</span>
            <span className="text-6xl font-black text-white">R$ 27</span>
          </div>
          <p className="text-xs text-[#A9B4C7] mb-10 leading-relaxed font-medium">
            Toda a estrutura, todos os prompts e o guia de escala por um valor simbólico de lançamento.
          </p>
          <CTAButton className="w-full">QUERO ESCALAR MEU LOW TICKET AGORA</CTAButton>
          <div className="mt-8 flex items-center justify-center gap-4 text-[10px] text-[#A9B4C7] uppercase font-bold tracking-widest">
            <div className="flex items-center gap-1"><ShieldCheck className="w-3 h-3 text-green-500" /> Seguro</div>
            <div className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-green-500" /> Vitalício</div>
            <div className="flex items-center gap-1"><Clock className="w-3 h-3 text-green-500" /> Imediato</div>
          </div>
        </div>
      </Section>

      {/* Seção 11: Garantia */}
      <Section alternate className="text-center">
        <div className="max-w-xl mx-auto">
          <ShieldCheck className="w-16 h-16 text-[#7B5CFF] mx-auto mb-6" />
          <h2 className="font-heading text-2xl mb-4 font-bold">Garantia Blindada de 7 Dias</h2>
          <p className="text-[#A9B4C7] text-sm leading-relaxed mb-8">
            Se você aplicar o que está no guia e não sentir que seus anúncios subiram de nível, nós devolvemos 100% do seu investimento. Sem perguntas, sem burocracia. O risco é todo meu.
          </p>
        </div>
      </Section>

      {/* Seção 12: FAQ */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-2xl md:text-3xl text-center mb-12 font-bold">Dúvidas Frequentes</h2>
          <div className="space-y-1">
            <FAQItem question="Funciona para qualquer nicho?" answer="Sim! As estruturas são baseadas em psicologia de consumo, que é universal. Funciona para saúde, negócios, relacionamentos, pets, hobbies, etc." />
            <FAQItem question="Preciso de experiência com anúncios?" answer="Não. O guia foi feito para que até quem nunca abriu o Gerenciador de Anúncios consiga gerar criativos de alta qualidade." />
            <FAQItem question="Preciso aparecer nos anúncios?" answer="De jeito nenhum. Os prompts são focados em criativos de imagem e texto que não dependem da sua imagem pessoal." />
            <FAQItem question="Funciona com pouco orçamento?" answer="Sim. Na verdade, é ideal para quem tem pouco orçamento, pois você economiza dinheiro ao não testar criativos que já sabemos que falham." />
            <FAQItem question="Como recebo o acesso?" answer="O acesso é enviado automaticamente para o seu e-mail assim que a compra é confirmada." />
          </div>
        </div>
      </Section>

      {/* CTA FINAL */}
      <Section alternate className="text-center py-24 bg-gradient-to-b from-[#101A2E] to-[#0B1220]">
        <h2 className="font-heading text-2xl md:text-4xl mb-10 leading-tight font-bold">O próximo anúncio que você subir pode ser o que vai mudar o seu jogo.</h2>
        <div className="flex flex-col items-center gap-6 px-4">
          <CTAButton className="w-full max-w-md">GARANTIR MEU ACESSO AGORA</CTAButton>
          <p className="text-[10px] text-[#A9B4C7] uppercase tracking-widest font-black opacity-60">Pagamento único. Acesso vitalício. Garantia de 7 dias.</p>
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
