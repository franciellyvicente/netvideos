import { useParams, useNavigate, Link } from "react-router-dom";
import { Play, Star, Clock, ArrowLeft, Calendar, Tv, Film, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import { filmes } from "@/data/filmes";
import { series } from "@/data/series";

const Detalhes = () => {
  const { tipo, id } = useParams();
  const navigate = useNavigate();

  const item =
    tipo === "filme"
      ? filmes.find((f) => f.id === Number(id))
      : series.find((s) => s.id === Number(id));

  if (!item) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Navbar />
        <div className="text-center mt-20">
          <p className="font-display text-2xl text-muted-foreground">Conteúdo não encontrado</p>
          <Link to="/" className="text-gold mt-4 inline-block hover:underline font-body">
            ← Voltar ao início
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero section with backdrop */}
      <div className="relative min-h-[70vh] pt-20">
        {/* Backdrop image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${item.imagem})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 pt-16 pb-20">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 font-body text-sm transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Voltar
          </button>

          <div className="flex flex-col md:flex-row gap-10 items-start">
            {/* Poster */}
            <div className="flex-shrink-0 w-48 md:w-64">
              <img
                src={item.imagem}
                alt={item.titulo}
                className="w-full rounded-xl shadow-card border border-border"
              />
            </div>

            {/* Info */}
            <div className="flex-1 max-w-2xl">
              {/* Category & Type badge */}
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-gold/20 text-gold border border-gold/30 rounded-full text-sm font-display font-semibold">
                  {tipo === "filme" ? <Film className="w-3 h-3" /> : <Tv className="w-3 h-3" />}
                  {tipo === "filme" ? "Filme" : "Série"}
                </span>
                <span className="px-3 py-1 bg-crimson/20 text-crimson border border-crimson/30 rounded-full text-sm font-display font-semibold">
                  {item.classificacao}
                </span>
                <span className="px-3 py-1 bg-secondary text-muted-foreground rounded-full text-sm font-body">
                  {item.categoria}
                </span>
              </div>

              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
                {item.titulo}
              </h1>

              {/* Rating & Details row */}
              <div className="flex items-center gap-6 mb-6 flex-wrap">
                <div className="flex items-center gap-1.5">
                  <Star className="w-5 h-5 text-gold fill-gold" />
                  <span className="font-display font-bold text-gold text-lg">{item.avaliacao}</span>
                  <span className="text-muted-foreground text-sm font-body">/10</span>
                </div>

                {item.tipo === "filme" && (
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span className="font-body text-sm">{item.duracao}</span>
                  </div>
                )}

                {item.tipo === "serie" && (
                  <>
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <Tv className="w-4 h-4" />
                      <span className="font-body text-sm">{item.temporadas} temporadas</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span className="font-body text-sm">{item.episodios} episódios</span>
                    </div>
                  </>
                )}

                <div className="flex items-center gap-1.5 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span className="font-body text-sm">{item.ano}</span>
                </div>
              </div>

              {/* Sinopse */}
              <div className="mb-8">
                <h2 className="font-display font-semibold text-foreground mb-2">Sinopse</h2>
                <p className="text-muted-foreground font-body leading-relaxed text-base">
                  {item.descricao}
                </p>
              </div>

              {/* Extra info */}
              {item.tipo === "filme" && (
                <div className="mb-8 p-4 bg-secondary rounded-xl border border-border">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground font-body">Diretor</span>
                      <p className="font-display font-semibold text-foreground mt-0.5">{item.diretor}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground font-body">Duração</span>
                      <p className="font-display font-semibold text-foreground mt-0.5">{item.duracao}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground font-body">Gênero</span>
                      <p className="font-display font-semibold text-foreground mt-0.5">{item.categoria}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground font-body">Classificação</span>
                      <p className="font-display font-semibold text-crimson mt-0.5">{item.classificacao} anos</p>
                    </div>
                  </div>
                </div>
              )}

              {item.tipo === "serie" && (
                <div className="mb-8 p-4 bg-secondary rounded-xl border border-border">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground font-body">Temporadas</span>
                      <p className="font-display font-semibold text-foreground mt-0.5">{item.temporadas}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground font-body">Episódios</span>
                      <p className="font-display font-semibold text-foreground mt-0.5">{item.episodios}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground font-body">Gênero</span>
                      <p className="font-display font-semibold text-foreground mt-0.5">{item.categoria}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground font-body">Classificação</span>
                      <p className="font-display font-semibold text-crimson mt-0.5">{item.classificacao} anos</p>
                    </div>
                  </div>
                </div>
              )}

              {/* CTA Buttons */}
              <div className="flex gap-4 flex-wrap">
                <Link
                  to="/cadastro"
                  className="inline-flex items-center gap-2 px-8 py-4 gradient-gold text-primary-foreground rounded-xl font-display font-bold text-base shadow-gold hover:opacity-90 transition-all duration-200 hover:scale-105 animate-glow"
                >
                  <Play className="w-5 h-5 fill-current" />
                  Assistir Agora
                </Link>
                <button
                  onClick={() => navigate(-1)}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground border border-border rounded-xl font-display font-bold text-base hover:bg-card-hover transition-all duration-200"
                >
                  <ArrowLeft className="w-5 h-5" />
                  Voltar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detalhes;
