import { Link } from "react-router";
import { Eye, Search } from "lucide-react";

const therapists = [
  {
    id: "1",
    name: "Dra. Ana Paula Mendes",
    email: "ana.mendes@email.com",
    specialty: "Psicologia Clínica",
    patients: 12,
    monthlyRevenue: 2400,
    status: "ativo",
    joinedDate: "2025-11-15",
  },
  {
    id: "2",
    name: "Dr. Carlos Eduardo Silva",
    email: "carlos.silva@email.com",
    specialty: "Terapia Cognitivo-Comportamental",
    patients: 8,
    monthlyRevenue: 1600,
    status: "ativo",
    joinedDate: "2025-12-03",
  },
  {
    id: "3",
    name: "Dra. Mariana Costa",
    email: "mariana.costa@email.com",
    specialty: "Psicoterapia",
    patients: 15,
    monthlyRevenue: 3000,
    status: "ativo",
    joinedDate: "2025-10-20",
  },
  {
    id: "4",
    name: "Dr. Roberto Almeida",
    email: "roberto.almeida@email.com",
    specialty: "Terapia Familiar",
    patients: 0,
    monthlyRevenue: 0,
    status: "pendente",
    joinedDate: "2026-04-12",
  },
];

export function AdminTherapists() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="mb-2">Terapeutas</h1>
        <p className="text-muted-foreground">
          Lista completa de terapeutas na plataforma. Acesso somente leitura.
        </p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white border border-border rounded-xl p-4 mb-6">
        <div className="flex gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            <input
              type="text"
              placeholder="Buscar por nome, email ou especialidade..."
              className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <select className="px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20">
            <option>Todos os status</option>
            <option>Ativo</option>
            <option>Pendente</option>
            <option>Inativo</option>
          </select>
        </div>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-3 gap-6 mb-6">
        <div className="bg-white border border-border rounded-xl p-6">
          <div className="text-sm text-muted-foreground mb-1">Total de Terapeutas</div>
          <div className="text-3xl font-semibold">{therapists.length}</div>
        </div>
        <div className="bg-white border border-border rounded-xl p-6">
          <div className="text-sm text-muted-foreground mb-1">Terapeutas Ativos</div>
          <div className="text-3xl font-semibold">
            {therapists.filter((t) => t.status === "ativo").length}
          </div>
        </div>
        <div className="bg-white border border-border rounded-xl p-6">
          <div className="text-sm text-muted-foreground mb-1">Total de Pacientes</div>
          <div className="text-3xl font-semibold">
            {therapists.reduce((sum, t) => sum + t.patients, 0)}
          </div>
        </div>
      </div>

      {/* Therapists Table */}
      <div className="bg-white border border-border rounded-xl overflow-hidden">
        <table className="w-full">
          <thead className="bg-muted/30 border-b border-border">
            <tr>
              <th className="text-left py-3 px-4 text-sm font-medium">Terapeuta</th>
              <th className="text-left py-3 px-4 text-sm font-medium">Especialidade</th>
              <th className="text-left py-3 px-4 text-sm font-medium">Pacientes</th>
              <th className="text-left py-3 px-4 text-sm font-medium">Receita/mês</th>
              <th className="text-left py-3 px-4 text-sm font-medium">Status</th>
              <th className="text-left py-3 px-4 text-sm font-medium">Cadastro</th>
              <th className="text-center py-3 px-4 text-sm font-medium">Ações</th>
            </tr>
          </thead>
          <tbody>
            {therapists.map((therapist) => (
              <tr key={therapist.id} className="border-b border-border last:border-0 hover:bg-muted/20">
                <td className="py-3 px-4">
                  <div className="font-medium">{therapist.name}</div>
                  <div className="text-xs text-muted-foreground">{therapist.email}</div>
                </td>
                <td className="py-3 px-4 text-sm">{therapist.specialty}</td>
                <td className="py-3 px-4 text-sm">{therapist.patients}</td>
                <td className="py-3 px-4 text-sm">R$ {therapist.monthlyRevenue.toFixed(2)}</td>
                <td className="py-3 px-4">
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${
                      therapist.status === "ativo"
                        ? "bg-green-100 text-green-800"
                        : therapist.status === "pendente"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {therapist.status}
                  </span>
                </td>
                <td className="py-3 px-4 text-sm text-muted-foreground">
                  {new Date(therapist.joinedDate).toLocaleDateString("pt-BR")}
                </td>
                <td className="py-3 px-4 text-center">
                  <Link
                    to={`/app/admin/terapeutas/${therapist.id}`}
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
