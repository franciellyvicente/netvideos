import { useState } from "react";
import { Search, Tv, SlidersHorizontal } from "lucide-react";
import Navbar from "@/components/Navbar";
import ContentCard from "@/components/ContentCard";
import { series, categoriesSeries } from "@/data/series";

const Series = () => {
  const [search, setSearch] = useState("");
  const [categoria, setCategoria] = useState("Todas");

  const filtered = series.filter((s) => {
    const matchSearch =
      s.titulo.toLowerCase().includes(search.toLowerCase()) ||
      s.descricao.toLowerCase().includes(search.toLowerCase());
    const matchCat = categoria === "Todas" || s.categoria === categoria;
    return matchSearch && matchCat;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Page Header */}
      <div className="pt-28 pb-10 bg-gradient-to-b from-secondary/30 to-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-2">
            <Tv className="w-7 h-7 text-gold" />
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Catálogo de <span className="text-gold">Séries</span>
            </h1>
          </div>
          <p className="text-muted-foreground font-body">
            {series.length} séries disponíveis na plataforma
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-10">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar série..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-secondary border border-border rounded-xl pl-12 pr-4 py-3 text-foreground placeholder:text-muted-foreground font-body focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 transition"
            />
          </div>

          <div className="relative">
            <SlidersHorizontal className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
            <select
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
              className="bg-secondary border border-border rounded-xl pl-12 pr-8 py-3 text-foreground font-body focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 transition appearance-none cursor-pointer min-w-[200px]"
            >
              {categoriesSeries.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Category pills */}
        <div className="flex gap-2 flex-wrap mb-8">
          {categoriesSeries.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoria(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-display font-medium transition-all ${
                categoria === cat
                  ? "bg-primary text-primary-foreground shadow-gold"
                  : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-card-hover border border-border"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Results */}
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <Tv className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-30" />
            <p className="font-display text-xl text-muted-foreground">Nenhuma série encontrada</p>
            <p className="text-sm text-muted-foreground mt-2 font-body">Tente mudar os filtros de busca</p>
          </div>
        ) : (
          <>
            <p className="text-sm text-muted-foreground mb-6 font-body">
              {filtered.length} série{filtered.length !== 1 ? "s" : ""} encontrada{filtered.length !== 1 ? "s" : ""}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {filtered.map((serie) => (
                <ContentCard key={serie.id} item={serie} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Series;
