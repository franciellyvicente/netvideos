import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Film, Eye, EyeOff, UserPlus } from "lucide-react";

const Cadastro = () => {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [form, setForm] = useState({
    nome: "",
    email: "",
    senha: "",
    confirmarSenha: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!form.nome.trim()) return setError("Por favor, informe seu nome completo.");
    if (!form.email.includes("@")) return setError("Por favor, informe um e-mail válido.");
    if (form.senha.length < 6) return setError("A senha deve ter no mínimo 6 caracteres.");
    if (form.senha !== form.confirmarSenha) return setError("As senhas não coincidem.");

    setSuccess(true);
    setTimeout(() => navigate("/login"), 2000);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-10">
          <Link to="/" className="inline-flex items-center gap-2 group">
            <div className="w-10 h-10 gradient-gold rounded-xl flex items-center justify-center shadow-gold">
              <Film className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="font-display text-2xl font-bold">
              <span className="text-gold">Net</span>
              <span className="text-foreground">vídeos</span>
            </span>
          </Link>
          <h1 className="font-display text-2xl font-bold text-foreground mt-6 mb-2">
            Criar sua conta
          </h1>
          <p className="text-muted-foreground font-body text-sm">
            Cadastre-se e acesse todo o catálogo gratuitamente
          </p>
        </div>

        {/* Card */}
        <div className="bg-card border border-border rounded-2xl p-8 shadow-card">
          {success ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 gradient-gold rounded-full flex items-center justify-center mx-auto mb-4 shadow-gold">
                <UserPlus className="w-8 h-8 text-primary-foreground" />
              </div>
              <h2 className="font-display text-xl font-bold text-foreground mb-2">Cadastro realizado!</h2>
              <p className="text-muted-foreground font-body text-sm">Redirecionando para o login...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Nome */}
              <div>
                <label className="block text-sm font-display font-semibold text-foreground mb-1.5">
                  Nome Completo
                </label>
                <input
                  type="text"
                  placeholder="Seu nome completo"
                  value={form.nome}
                  onChange={(e) => setForm({ ...form, nome: e.target.value })}
                  className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground font-body focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 transition"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-display font-semibold text-foreground mb-1.5">
                  E-mail
                </label>
                <input
                  type="email"
                  placeholder="seu@email.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground font-body focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 transition"
                  required
                />
              </div>

              {/* Senha */}
              <div>
                <label className="block text-sm font-display font-semibold text-foreground mb-1.5">
                  Senha
                </label>
                <div className="relative">
                  <input
                    type={showPass ? "text" : "password"}
                    placeholder="Mínimo 6 caracteres"
                    value={form.senha}
                    onChange={(e) => setForm({ ...form, senha: e.target.value })}
                    className="w-full bg-secondary border border-border rounded-xl px-4 py-3 pr-12 text-foreground placeholder:text-muted-foreground font-body focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 transition"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPass(!showPass)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition"
                  >
                    {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Confirmar senha */}
              <div>
                <label className="block text-sm font-display font-semibold text-foreground mb-1.5">
                  Confirmar Senha
                </label>
                <div className="relative">
                  <input
                    type={showConfirm ? "text" : "password"}
                    placeholder="Repita a senha"
                    value={form.confirmarSenha}
                    onChange={(e) => setForm({ ...form, confirmarSenha: e.target.value })}
                    className="w-full bg-secondary border border-border rounded-xl px-4 py-3 pr-12 text-foreground placeholder:text-muted-foreground font-body focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 transition"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirm(!showConfirm)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition"
                  >
                    {showConfirm ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {error && (
                <div className="bg-destructive/10 border border-destructive/30 rounded-xl px-4 py-3">
                  <p className="text-destructive text-sm font-body">{error}</p>
                </div>
              )}

              <button
                type="submit"
                className="w-full gradient-gold text-primary-foreground py-3.5 rounded-xl font-display font-bold text-base shadow-gold hover:opacity-90 transition-all duration-200 hover:scale-[1.02] mt-2"
              >
                Criar Conta
              </button>

              <p className="text-center text-sm text-muted-foreground font-body">
                Já tem conta?{" "}
                <Link to="/login" className="text-gold hover:underline font-semibold">
                  Fazer login
                </Link>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
