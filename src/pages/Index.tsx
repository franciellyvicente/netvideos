import { useState } from "react";
import { Link } from "react-router-dom";
import { Play, Film, Tv } from "lucide-react";
import Navbar from "@/components/Navbar";
import ContentCard from "@/components/ContentCard";
import { filmes } from "@/data/filmes";
import { series } from "@/data/series";
import heroBanner from "@/assets/hero-banner.jpg";

const Index = () => {
  const [activeTab, setActiveTab] = useState<"filmes" | "series">("filmes");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBanner})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />

        <div className="relative z-10 text-center px-4 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-14 h-14 gradient-gold rounded-2xl flex items-center justify-center shadow-gold animate-glow">
              <Film className="w-8 h-8 text-primary-foreground" strokeWidth={2} />
            </div>
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-900 mb-4 tracking-tight">
            <span className="text-gold">Net</span>
            <span className="text-foreground">vídeos</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground font-body max-w-2xl mx-auto mb-10 leading-relaxed">
            O melhor do cinema e das séries em um só lugar. <br />
            Filmes premiados, séries exclusivas e muito mais.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/filmes"
              className="inline-flex items-center gap-2 px-8 py-4 gradient-gold text-primary-foreground rounded-xl font-display font-bold text-base shadow-gold hover:opacity-90 transition-all duration-200 hover:scale-105"
            >
              <Play className="w-5 h-5 fill-current" />
              Ver Filmes
            </Link>
            <Link
              to="/series"
              className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground border border-border rounded-xl font-display font-bold text-base hover:bg-card-hover transition-all duration-200 hover:scale-105"
            >
              <Tv className="w-5 h-5" />
              Ver Séries
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <div className="w-0.5 h-8 bg-gradient-to-b from-gold/60 to-transparent rounded-full" />
        </div>
      </section>

      {/* Content Selector */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              {activeTab === "filmes" ? "Filmes em Destaque" : "Séries em Destaque"}
            </h2>
            <p className="text-muted-foreground font-body mt-1">
              {activeTab === "filmes" ? "Os 10 melhores filmes da plataforma" : "As 10 melhores séries da plataforma"}
            </p>
          </div>

          {/* Tab selector */}
          <div className="flex items-center bg-secondary rounded-xl p-1 gap-1">
            <button
              onClick={() => setActiveTab("filmes")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-display font-semibold text-sm transition-all duration-200 ${
                activeTab === "filmes"
                  ? "gradient-gold text-primary-foreground shadow-gold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Film className="w-4 h-4" />
              Filmes
            </button>
            <button
              onClick={() => setActiveTab("series")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-display font-semibold text-sm transition-all duration-200 ${
                activeTab === "series"
                  ? "gradient-gold text-primary-foreground shadow-gold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Tv className="w-4 h-4" />
              Séries
            </button>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {activeTab === "filmes"
            ? filmes.map((filme) => <ContentCard key={filme.id} item={filme} />)
            : series.map((serie) => <ContentCard key={serie.id} item={serie} />)}
        </div>

        {/* View All button */}
        <div className="text-center mt-10">
          <Link
            to={activeTab === "filmes" ? "/filmes" : "/series"}
            className="inline-flex items-center gap-2 px-8 py-3 border border-gold/40 text-gold rounded-xl font-display font-semibold hover:bg-gold/10 transition-all duration-200"
          >
            Ver catálogo completo →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card mt-16">
        <div className="container mx-auto px-4 py-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 gradient-gold rounded-lg flex items-center justify-center">
                <Film className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display text-lg font-bold">
                <span className="text-gold">Net</span>
                <span className="text-foreground">vídeos</span>
              </span>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground font-body">
              <Link to="/quem-somos" className="hover:text-gold transition-colors">Quem Somos</Link>
              <Link to="/politica-privacidade" className="hover:text-gold transition-colors">Política de Privacidade</Link>
              <Link to="/cadastro" className="hover:text-gold transition-colors">Cadastro</Link>
              <Link to="/login" className="hover:text-gold transition-colors">Login</Link>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-border text-center text-xs text-muted-foreground font-body">
            © 2024 Netvídeos. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
