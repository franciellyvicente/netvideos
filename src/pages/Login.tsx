import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Film, Eye, EyeOff, LogIn } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [form, setForm] = useState({ email: "", senha: "" });
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!form.email.includes("@")) return setError("Por favor, informe um e-mail válido.");
    if (form.senha.length < 6) return setError("Senha inválida. Verifique os dados.");

    // Simulate login success
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-10">
          <Link to="/" className="inline-flex items-center gap-2">
            <div className="w-10 h-10 gradient-gold rounded-xl flex items-center justify-center shadow-gold">
              <Film className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="font-display text-2xl font-bold">
              <span className="text-gold">Net</span>
              <span className="text-foreground">vídeos</span>
            </span>
          </Link>
          <h1 className="font-display text-2xl font-bold text-foreground mt-6 mb-2">
            Bem-vindo de volta!
          </h1>
          <p className="text-muted-foreground font-body text-sm">
            Entre na sua conta para continuar assistindo
          </p>
        </div>

        {/* Card */}
        <div className="bg-card border border-border rounded-2xl p-8 shadow-card">
          <form onSubmit={handleSubmit} className="space-y-5">
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
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-sm font-display font-semibold text-foreground">
                  Senha
                </label>
                <button type="button" className="text-xs text-gold hover:underline font-body">
                  Esqueci a senha
                </button>
              </div>
              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  placeholder="Sua senha"
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

            {error && (
              <div className="bg-destructive/10 border border-destructive/30 rounded-xl px-4 py-3">
                <p className="text-destructive text-sm font-body">{error}</p>
              </div>
            )}

            <button
              type="submit"
              className="w-full gradient-gold text-primary-foreground py-3.5 rounded-xl font-display font-bold text-base shadow-gold hover:opacity-90 transition-all duration-200 hover:scale-[1.02] mt-2 flex items-center justify-center gap-2"
            >
              <LogIn className="w-5 h-5" />
              Entrar
            </button>

            <p className="text-center text-sm text-muted-foreground font-body">
              Não tem conta?{" "}
              <Link to="/cadastro" className="text-gold hover:underline font-semibold">
                Cadastre-se grátis
              </Link>
            </p>
          </form>
        </div>

        {/* Privacy notice */}
        <p className="text-center text-xs text-muted-foreground mt-6 font-body">
          Ao entrar, você concorda com nossa{" "}
          <Link to="/politica-privacidade" className="text-gold hover:underline">
            Política de Privacidade
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
