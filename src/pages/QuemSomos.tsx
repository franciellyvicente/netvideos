import { Link } from "react-router-dom";
import { Film, Target, Eye, Heart, Rocket, Users } from "lucide-react";
import Navbar from "@/components/Navbar";

const QuemSomos = () => {
  const values = [
    { icon: Heart, title: "Paixão pelo Cinema", desc: "Cada filme e série é curado com amor e dedicação para oferecer a melhor experiência cinematográfica." },
    { icon: Users, title: "Comunidade", desc: "Acreditamos que a arte de assistir filmes é mais rica quando compartilhada. Conectamos pessoas através das histórias." },
    { icon: Target, title: "Excelência", desc: "Buscamos sempre o melhor em termos de qualidade de conteúdo, experiência do usuário e inovação tecnológica." },
    { icon: Rocket, title: "Inovação", desc: "Estamos sempre evoluindo nossa plataforma para oferecer novas formas de descobrir e consumir conteúdo audiovisual." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <div className="pt-28 pb-16 bg-gradient-to-b from-secondary/30 to-background border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <div className="w-16 h-16 gradient-gold rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-gold">
            <Film className="w-9 h-9 text-primary-foreground" />
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Quem <span className="text-gold">Somos</span>
          </h1>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto leading-relaxed">
            Conheça a história, os valores e a missão por trás do <strong className="text-foreground">Netvídeos</strong>
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-4xl">

        {/* História */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 gradient-gold rounded-full" />
            <h2 className="font-display text-2xl font-bold text-foreground">Nossa História</h2>
          </div>
          <div className="bg-card rounded-2xl p-8 border border-border shadow-card">
            <p className="text-muted-foreground font-body leading-relaxed text-base mb-4">
              O Netvídeos nasceu em 2020, durante um período em que as pessoas precisavam mais do que nunca de entretenimento de qualidade em casa. Um grupo de entusiastas do cinema e da tecnologia se uniu com um objetivo claro: criar a melhor plataforma de streaming para o público brasileiro.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed text-base mb-4">
              Começamos com um catálogo modesto, mas com uma curadoria cuidadosa que rapidamente conquistou a confiança do público. Em pouco tempo, crescemos para mais de 500 títulos entre filmes e séries nacionais e internacionais.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed text-base">
              Hoje, o Netvídeos é reconhecido como uma das plataformas de streaming mais amadas do Brasil, sempre colocando a experiência do usuário em primeiro lugar.
            </p>
          </div>
        </section>

        {/* Missão & Visão */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card rounded-2xl p-8 border border-border shadow-card relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 gradient-gold opacity-5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="w-12 h-12 gradient-gold rounded-xl flex items-center justify-center mb-4 shadow-gold">
                <Target className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">Nossa Missão</h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                Democratizar o acesso ao entretenimento de qualidade, conectando pessoas às melhores histórias do cinema e da televisão mundial, com uma experiência simples, acessível e inesquecível.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border shadow-card relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-crimson opacity-5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="w-12 h-12 bg-crimson/20 border border-crimson/30 rounded-xl flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-crimson" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">Nossa Visão</h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                Ser a plataforma de streaming de referência no Brasil, reconhecida pela qualidade do catálogo, pela inovação tecnológica e pela excelência no atendimento ao usuário até 2030.
              </p>
            </div>
          </div>
        </section>

        {/* Valores */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 gradient-gold rounded-full" />
            <h2 className="font-display text-2xl font-bold text-foreground">Nossos Valores</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-card rounded-xl p-6 border border-border shadow-card hover:border-gold/30 transition-colors group">
                <div className="w-10 h-10 bg-gold/10 border border-gold/20 rounded-lg flex items-center justify-center mb-3 group-hover:bg-gold/20 transition-colors">
                  <Icon className="w-5 h-5 text-gold" />
                </div>
                <h4 className="font-display font-bold text-foreground mb-2">{title}</h4>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Objetivo */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 gradient-gold rounded-full" />
            <h2 className="font-display text-2xl font-bold text-foreground">Objetivo da Plataforma</h2>
          </div>
          <div className="bg-gradient-to-br from-card to-secondary rounded-2xl p-8 border border-border shadow-card">
            <p className="text-muted-foreground font-body leading-relaxed text-base mb-4">
              O Netvídeos foi criado com o objetivo principal de oferecer uma experiência completa de entretenimento digital, reunindo filmes, séries e conteúdo exclusivo em um ambiente seguro, de fácil navegação e acessível para toda a família.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed text-base">
              Buscamos constantemente ampliar nosso catálogo, melhorar a tecnologia de streaming e criar ferramentas que ajudem nossos usuários a descobrirem novos conteúdos que combinem com seus gostos e preferências.
            </p>

            <div className="mt-8 flex gap-4 flex-wrap">
              <Link
                to="/cadastro"
                className="inline-flex items-center gap-2 px-6 py-3 gradient-gold text-primary-foreground rounded-xl font-display font-bold text-sm shadow-gold hover:opacity-90 transition"
              >
                Fazer Parte →
              </Link>
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-secondary border border-border text-muted-foreground rounded-xl font-display font-semibold text-sm hover:text-foreground transition"
              >
                Ver Catálogo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default QuemSomos;
