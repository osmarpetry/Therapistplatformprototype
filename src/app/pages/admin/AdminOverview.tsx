import { Link } from "react-router";
import { Users, User, Calendar, AlertCircle, TrendingUp, CreditCard } from "lucide-react";

const summaryStats = [
  { label: "Terapeutas Ativos", value: 24, icon: Users, trend: "+3 este mês" },
  { label: "Pacientes Ativos", value: 156, icon: User, trend: "+18 este mês" },
  { label: "Consultas Agendadas", value: 87, icon: Calendar, trend: "Próximos 7 dias" },
  { label: "Comprovantes Pendentes", value: 5, icon: AlertCircle, trend: "Análise necessária" },
];

const recentTherapists = [
  { id: "1", name: "Dra. Ana Paula Mendes", patients: 12, revenue: 2400, status: "ativo" },
  { id: "2", name: "Dr. Carlos Eduardo Silva", patients: 8, revenue: 1600, status: "ativo" },
  { id: "3", name: "Dra. Mariana Costa", patients: 15, revenue: 3000, status: "ativo" },
];

const recentPatients = [
  { id: "1", name: "Maria Silva", therapist: "Dra. Ana Paula Mendes", sessions: 4, status: "ativo" },
  { id: "2", name: "João Santos", therapist: "Dr. Carlos Eduardo Silva", sessions: 2, status: "ativo" },
  { id: "3", name: "Ana Costa", therapist: "Dra. Ana Paula Mendes", sessions: 3, status: "ativo" },
];

const upcomingSessions = [
  {
    date: "2026-04-14",
    time: "09:00",
    therapist: "Dra. Ana Paula Mendes",
    patient: "Maria Silva",
    status: "confirmado",
  },
  {
    date: "2026-04-14",
    time: "14:00",
    therapist: "Dr. Carlos Eduardo Silva",
    patient: "João Santos",
    status: "pendente",
  },
  {
    date: "2026-04-15",
    time: "10:00",
    therapist: "Dra. Ana Paula Mendes",
    patient: "Ana Costa",
    status: "confirmado",
  },
];

const recentActivity = [
  {
    type: "proof_submitted",
    message: "João Santos enviou comprovante de pagamento",
    time: "há 15 minutos",
  },
  {
    type: "booking_confirmed",
    message: "Maria Silva confirmou consulta para 14/04",
    time: "há 1 hora",
  },
  {
    type: "therapist_joined",
    message: "Dr. Roberto Almeida criou perfil na plataforma",
    time: "há 2 horas",
  },
  {
    type: "cancellation",
    message: "Pedro Oliveira cancelou consulta (reembolso 100%)",
    time: "há 3 horas",
  },
];

export function AdminOverview() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="mb-2">Administração</h1>
        <p className="text-muted-foreground">
          Visão geral da plataforma. Acesso somente leitura.
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {summaryStats.map((stat) => (
          <div key={stat.label} className="bg-white border border-border rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <stat.icon size={24} className="text-primary" />
              <div className="text-3xl font-semibold">{stat.value}</div>
            </div>
            <div className="text-sm font-medium mb-1">{stat.label}</div>
            <div className="text-xs text-muted-foreground">{stat.trend}</div>
          </div>
        ))}
      </div>

      {/* Main Grid */}
      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        {/* Therapists */}
        <div className="bg-white border border-border rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h2>Terapeutas Recentes</h2>
            <Link to="/app/admin/terapeutas" className="text-sm text-primary hover:underline">
              Ver todos
            </Link>
          </div>
          <div className="space-y-3">
            {recentTherapists.map((therapist) => (
              <Link
                key={therapist.id}
                to={`/app/admin/terapeutas/${therapist.id}`}
                className="block p-3 border border-border rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="font-medium">{therapist.name}</div>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
                    {therapist.status}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div>{therapist.patients} pacientes</div>
                  <div>R$ {therapist.revenue}/mês</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Patients */}
        <div className="bg-white border border-border rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h2>Pacientes Recentes</h2>
            <Link to="/app/admin/pacientes" className="text-sm text-primary hover:underline">
              Ver todos
            </Link>
          </div>
          <div className="space-y-3">
            {recentPatients.map((patient) => (
              <Link
                key={patient.id}
                to={`/app/admin/pacientes/${patient.id}`}
                className="block p-3 border border-border rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="font-medium">{patient.name}</div>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
                    {patient.status}
                  </span>
                </div>
                <div className="text-sm text-muted-foreground">
                  {patient.therapist} • {patient.sessions} sessões
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Upcoming Sessions */}
      <div className="bg-white border border-border rounded-xl p-6 mb-8">
        <h2 className="mb-4">Próximas Consultas</h2>
        <div className="space-y-2">
          {upcomingSessions.map((session, i) => (
            <div key={i} className="p-3 border border-border rounded flex items-center justify-between text-sm">
              <div className="flex items-center gap-4">
                <div className="text-muted-foreground w-24">
                  {new Date(session.date).toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" })}{" "}
                  {session.time}
                </div>
                <div className="font-medium w-48">{session.therapist}</div>
                <div className="text-muted-foreground">{session.patient}</div>
              </div>
              <span
                className={`text-xs px-2 py-0.5 rounded-full ${
                  session.status === "confirmado"
                    ? "bg-green-100 text-green-800"
                    : "bg-yellow-100 text-yellow-800"
                }`}
              >
                {session.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white border border-border rounded-xl p-6">
        <h2 className="mb-4">Atividade Recente</h2>
        <div className="space-y-3">
          {recentActivity.map((activity, i) => (
            <div key={i} className="flex items-start gap-3 pb-3 border-b last:border-0 last:pb-0">
              <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
              <div className="flex-1">
                <div className="text-sm mb-1">{activity.message}</div>
                <div className="text-xs text-muted-foreground">{activity.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
