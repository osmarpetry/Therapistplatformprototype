import { Link } from "react-router";
import { Eye, Search } from "lucide-react";

const patients = [
  {
    id: "1",
    name: "Maria Silva",
    email: "maria.silva@email.com",
    therapist: "Dra. Ana Paula Mendes",
    sessions: 4,
    totalSpent: 800,
    status: "ativo",
    joinedDate: "2026-01-15",
  },
  {
    id: "2",
    name: "João Santos",
    email: "joao.santos@email.com",
    therapist: "Dr. Carlos Eduardo Silva",
    sessions: 2,
    totalSpent: 400,
    status: "ativo",
    joinedDate: "2026-03-08",
  },
  {
    id: "3",
    name: "Ana Costa",
    email: "ana.costa@email.com",
    therapist: "Dra. Ana Paula Mendes",
    sessions: 3,
    totalSpent: 600,
    status: "ativo",
    joinedDate: "2026-02-20",
  },
  {
    id: "4",
    name: "Pedro Oliveira",
    email: "pedro.oliveira@email.com",
    therapist: "Dra. Mariana Costa",
    sessions: 1,
    totalSpent: 200,
    status: "inativo",
    joinedDate: "2026-03-01",
  },
];

export function AdminPatients() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="mb-2">Pacientes</h1>
        <p className="text-muted-foreground">
          Lista completa de pacientes na plataforma. Acesso somente leitura.
        </p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white border border-border rounded-xl p-4 mb-6">
        <div className="flex gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            <input
              type="text"
              placeholder="Buscar por nome ou email..."
              className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <select className="px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20">
            <option>Todos os status</option>
            <option>Ativo</option>
            <option>Inativo</option>
          </select>
        </div>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-3 gap-6 mb-6">
        <div className="bg-white border border-border rounded-xl p-6">
          <div className="text-sm text-muted-foreground mb-1">Total de Pacientes</div>
          <div className="text-3xl font-semibold">{patients.length}</div>
        </div>
        <div className="bg-white border border-border rounded-xl p-6">
          <div className="text-sm text-muted-foreground mb-1">Pacientes Ativos</div>
          <div className="text-3xl font-semibold">
            {patients.filter((p) => p.status === "ativo").length}
          </div>
        </div>
        <div className="bg-white border border-border rounded-xl p-6">
          <div className="text-sm text-muted-foreground mb-1">Total de Sessões</div>
          <div className="text-3xl font-semibold">
            {patients.reduce((sum, p) => sum + p.sessions, 0)}
          </div>
        </div>
      </div>

      {/* Patients Table */}
      <div className="bg-white border border-border rounded-xl overflow-hidden">
        <table className="w-full">
          <thead className="bg-muted/30 border-b border-border">
            <tr>
              <th className="text-left py-3 px-4 text-sm font-medium">Paciente</th>
              <th className="text-left py-3 px-4 text-sm font-medium">Terapeuta</th>
              <th className="text-left py-3 px-4 text-sm font-medium">Sessões</th>
              <th className="text-left py-3 px-4 text-sm font-medium">Total Gasto</th>
              <th className="text-left py-3 px-4 text-sm font-medium">Status</th>
              <th className="text-left py-3 px-4 text-sm font-medium">Cadastro</th>
              <th className="text-center py-3 px-4 text-sm font-medium">Ações</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient) => (
              <tr key={patient.id} className="border-b border-border last:border-0 hover:bg-muted/20">
                <td className="py-3 px-4">
                  <div className="font-medium">{patient.name}</div>
                  <div className="text-xs text-muted-foreground">{patient.email}</div>
                </td>
                <td className="py-3 px-4 text-sm">{patient.therapist}</td>
                <td className="py-3 px-4 text-sm">{patient.sessions}</td>
                <td className="py-3 px-4 text-sm">R$ {patient.totalSpent.toFixed(2)}</td>
                <td className="py-3 px-4">
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${
                      patient.status === "ativo"
                        ? "bg-green-100 text-green-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {patient.status}
                  </span>
                </td>
                <td className="py-3 px-4 text-sm text-muted-foreground">
                  {new Date(patient.joinedDate).toLocaleDateString("pt-BR")}
                </td>
                <td className="py-3 px-4 text-center">
                  <Link
                    to={`/app/admin/pacientes/${patient.id}`}
                    className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                  >
                    <Eye size={16} />
                    Ver
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
