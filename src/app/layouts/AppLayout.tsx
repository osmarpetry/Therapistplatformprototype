import { Outlet, Link, useLocation } from "react-router";
import { Calendar, CreditCard, LayoutDashboard, Users, User } from "lucide-react";

export function AppLayout() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const isTherapist = location.pathname.startsWith("/app/terapeuta");
  const isPatient = location.pathname.startsWith("/app/paciente");
  const isAdmin = location.pathname.startsWith("/app/admin");

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="border-b bg-white">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="font-semibold text-lg">
            Tempo
          </Link>
          <div className="text-sm text-muted-foreground">
            {isTherapist && "Área do Terapeuta"}
            {isPatient && "Área do Paciente"}
            {isAdmin && "Administração"}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex gap-8">
          {/* Sidebar Navigation */}
          <aside className="w-64 shrink-0">
            <nav className="sticky top-8 space-y-1">
              {isTherapist && (
                <>
                  <Link
                    to="/app/terapeuta/agenda"
                    className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors ${
                      isActive("/app/terapeuta/agenda")
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-muted"
                    }`}
                  >
                    <Calendar size={18} />
                    Agenda
                  </Link>
                  <Link
                    to="/app/terapeuta/cobrancas"
                    className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors ${
                      isActive("/app/terapeuta/cobrancas")
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-muted"
                    }`}
                  >
                    <CreditCard size={18} />
                    Cobranças
                  </Link>
                </>
              )}

              {isPatient && (
                <>
                  <Link
                    to="/app/paciente/consultas"
                    className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors ${
                      isActive("/app/paciente/consultas")
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-muted"
                    }`}
                  >
                    <Calendar size={18} />
                    Minhas Consultas
                  </Link>
                  <Link
                    to="/app/paciente/pagamentos"
                    className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors ${
                      isActive("/app/paciente/pagamentos")
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-muted"
                    }`}
                  >
                    <CreditCard size={18} />
                    Pagamentos
                  </Link>
                </>
              )}

              {isAdmin && (
                <>
                  <Link
                    to="/app/admin"
                    className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors ${
                      isActive("/app/admin")
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-muted"
                    }`}
                  >
                    <LayoutDashboard size={18} />
                    Visão Geral
                  </Link>
                  <Link
                    to="/app/admin/terapeutas"
                    className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors ${
                      isActive("/app/admin/terapeutas")
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-muted"
                    }`}
                  >
                    <Users size={18} />
                    Terapeutas
                  </Link>
                  <Link
                    to="/app/admin/pacientes"
                    className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors ${
                      isActive("/app/admin/pacientes")
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-muted"
                    }`}
                  >
                    <User size={18} />
                    Pacientes
                  </Link>
                </>
              )}
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
