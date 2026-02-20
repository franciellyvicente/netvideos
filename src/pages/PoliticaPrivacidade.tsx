import { Shield, Cookie, Lock, User, Mail, Film } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

const sections = [
  {
    icon: Shield,
    title: "1. Coleta de Dados",
    content: [
      "O Netvídeos coleta informações pessoais que você nos fornece diretamente ao criar sua conta, como nome completo e endereço de e-mail.",
      "Também coletamos dados de uso da plataforma, como filmes e séries assistidos, pesquisas realizadas, avaliações e preferências de conteúdo.",
      "Informações técnicas como endereço IP, tipo de dispositivo, navegador utilizado e sistema operacional podem ser coletadas automaticamente para fins de segurança e melhoria do serviço.",
      "Não coletamos dados financeiros diretamente — todo processamento de pagamento é realizado por parceiros certificados e seguros.",
    ],
  },
  {
    icon: Cookie,
    title: "2. Uso de Cookies",
    content: [
      "Utilizamos cookies essenciais para o funcionamento básico da plataforma, como manter sua sessão ativa e lembrar suas preferências.",
      "Cookies de análise nos ajudam a entender como você usa o Netvídeos para melhorarmos continuamente a experiência.",
      "Cookies de personalização permitem que recomendemos conteúdo relevante com base no seu histórico de navegação na plataforma.",
      "Você pode gerenciar as preferências de cookies a qualquer momento nas configurações do seu navegador.",
    ],
  },
  {
    icon: Lock,
    title: "3. Segurança das Informações",
    content: [
      "Utilizamos criptografia SSL/TLS para proteger todos os dados transmitidos entre seu dispositivo e nossos servidores.",
      "As senhas são armazenadas de forma segura utilizando algoritmos de hash modernos e irreversíveis.",
      "Realizamos auditorias de segurança regulares e seguimos as melhores práticas da indústria para proteger seus dados.",
      "Em caso de qualquer incidente de segurança, notificaremos os usuários afetados dentro de 72 horas, conforme exigido pela Lei Geral de Proteção de Dados (LGPD).",
    ],
  },
  {
    icon: User,
    title: "4. Direitos do Usuário",
    content: [
      "Você tem o direito de acessar, corrigir ou excluir seus dados pessoais a qualquer momento através das configurações da sua conta.",
      "Pode solicitar a portabilidade dos seus dados em formato legível por máquina.",
      "Tem o direito de revogar consentimentos dados anteriormente e de se opor a determinados tipos de processamento de dados.",
      "Para exercer qualquer um desses direitos, entre em contato conosco pelo e-mail de suporte disponível nesta página.",
    ],
  },
];

const PoliticaPrivacidade = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <div className="pt-28 pb-16 bg-gradient-to-b from-secondary/30 to-background border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <div className="w-16 h-16 bg-gold/10 border border-gold/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Shield className="w-9 h-9 text-gold" />
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Política de <span className="text-gold">Privacidade</span>
          </h1>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            Sua privacidade é nossa prioridade. Saiba como coletamos, usamos e protegemos seus dados.
          </p>
          <p className="text-muted-foreground font-body text-sm mt-4">
            Última atualização: Janeiro de 2024
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-4xl">

        {/* Intro */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-card mb-8">
          <p className="text-muted-foreground font-body leading-relaxed text-base">
            Esta Política de Privacidade descreve como o <strong className="text-foreground">Netvídeos</strong> coleta, usa, armazena e compartilha suas informações pessoais ao utilizar nossa plataforma de streaming. Ao criar uma conta ou utilizar nossos serviços, você concorda com os termos descritos abaixo.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-6">
          {sections.map(({ icon: Icon, title, content }) => (
            <div key={title} className="bg-card rounded-2xl border border-border shadow-card overflow-hidden">
              <div className="flex items-center gap-4 p-6 border-b border-border">
                <div className="w-10 h-10 gradient-gold rounded-lg flex items-center justify-center shadow-gold flex-shrink-0">
                  <Icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <h2 className="font-display text-xl font-bold text-foreground">{title}</h2>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {content.map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground font-body leading-relaxed text-sm">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div className="mt-10 bg-gradient-to-br from-card to-secondary rounded-2xl p-8 border border-border shadow-card">
          <div className="flex items-center gap-3 mb-4">
            <Mail className="w-6 h-6 text-gold" />
            <h2 className="font-display text-xl font-bold text-foreground">Entre em Contato</h2>
          </div>
          <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6">
            Se você tiver dúvidas sobre esta Política de Privacidade, sobre como seus dados são tratados, ou quiser exercer seus direitos como titular de dados, entre em contato conosco:
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-secondary rounded-xl p-4 border border-border">
              <p className="text-xs text-muted-foreground font-body mb-1">E-mail de suporte</p>
              <p className="font-display font-semibold text-gold text-sm">privacidade@netvideos.com.br</p>
            </div>
            <div className="bg-secondary rounded-xl p-4 border border-border">
              <p className="text-xs text-muted-foreground font-body mb-1">Horário de atendimento</p>
              <p className="font-display font-semibold text-foreground text-sm">Seg–Sex, das 9h às 18h</p>
            </div>
          </div>

          <div className="flex gap-4 flex-wrap">
            <Link
              to="/cadastro"
              className="inline-flex items-center gap-2 px-6 py-3 gradient-gold text-primary-foreground rounded-xl font-display font-bold text-sm shadow-gold hover:opacity-90 transition"
            >
              <Film className="w-4 h-4" />
              Criar Conta
            </Link>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-secondary border border-border text-muted-foreground rounded-xl font-display font-semibold text-sm hover:text-foreground transition"
            >
              Voltar ao Início
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoliticaPrivacidade;
