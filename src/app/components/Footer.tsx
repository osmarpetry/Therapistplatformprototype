import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Tempo</h3>
            <p className="text-sm text-muted-foreground">
              Plataforma operacional para terapeutas que precisam de previsibilidade.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Produto</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/terapeutas" className="hover:text-foreground">
                  Para Terapeutas
                </Link>
              </li>
              <li>
                <Link to="/pacientes" className="hover:text-foreground">
                  Para Pacientes
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Suporte</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#faq" className="hover:text-foreground">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-foreground">
                  Contato
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#termos" className="hover:text-foreground">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#privacidade" className="hover:text-foreground">
                  Privacidade
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          © 2026 Tempo. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
