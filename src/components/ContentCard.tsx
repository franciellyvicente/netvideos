import { useNavigate } from "react-router-dom";
import { Star, ChevronRight } from "lucide-react";
import { Filme } from "@/data/filmes";
import { Serie } from "@/data/series";

interface ContentCardProps {
  item: Filme | Serie;
}

const ContentCard = ({ item }: ContentCardProps) => {
  const navigate = useNavigate();

  const handleDetails = () => {
    navigate(`/detalhes/${item.tipo}/${item.id}`);
  };

  return (
    <div
      className="card-shine group relative bg-card rounded-xl overflow-hidden cursor-pointer shadow-card transition-all duration-300 hover:scale-105 hover:shadow-gold"
      onClick={handleDetails}
    >
      {/* Poster Image */}
      <div className="relative aspect-[2/3] overflow-hidden">
        <img
          src={item.imagem}
          alt={item.titulo}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 gradient-card" />

        {/* Rating badge */}
        <div className="absolute top-3 right-3 flex items-center gap-1 bg-background/80 backdrop-blur-sm rounded-full px-2 py-1">
          <Star className="w-3 h-3 text-gold fill-gold" />
          <span className="text-xs font-display font-semibold text-gold">{item.avaliacao}</span>
        </div>

        {/* Classification badge */}
        <div className="absolute top-3 left-3 bg-crimson/90 rounded px-2 py-0.5">
          <span className="text-xs font-display font-bold text-foreground">{item.classificacao}</span>
        </div>

        {/* Series info overlay */}
        {item.tipo === "serie" && (
          <div className="absolute bottom-16 left-3 right-3">
            <div className="flex gap-2">
              <span className="text-xs bg-secondary/90 backdrop-blur-sm rounded px-2 py-0.5 text-muted-foreground font-body">
                {item.temporadas} temp.
              </span>
              <span className="text-xs bg-secondary/90 backdrop-blur-sm rounded px-2 py-0.5 text-muted-foreground font-body">
                {item.episodios} ep.
              </span>
            </div>
          </div>
        )}

        {/* Bottom info overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-3">
          <span className="inline-block text-xs bg-gold/20 text-gold border border-gold/30 rounded-full px-2 py-0.5 font-body mb-1">
            {item.categoria}
          </span>
        </div>
      </div>

      {/* Card content */}
      <div className="p-4">
        <h3 className="font-display font-bold text-sm text-foreground line-clamp-1 mb-1 group-hover:text-gold transition-colors">
          {item.titulo}
        </h3>
        <p className="text-xs text-muted-foreground line-clamp-2 font-body leading-relaxed mb-3">
          {item.descricao}
        </p>

        <button
          className="w-full flex items-center justify-center gap-1 py-2 px-3 rounded-lg bg-primary text-primary-foreground text-xs font-display font-semibold hover:opacity-90 transition-all duration-200 hover:shadow-gold group/btn"
          onClick={(e) => {
            e.stopPropagation();
            handleDetails();
          }}
        >
          Ver Detalhes
          <ChevronRight className="w-3 h-3 transition-transform group-hover/btn:translate-x-1" />
        </button>
      </div>
    </div>
  );
};

export default ContentCard;
