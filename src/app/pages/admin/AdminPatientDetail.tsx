import { useParams, Link } from "react-router";
import { ArrowLeft, Mail, User } from "lucide-react";
import { StatusBadge } from "../../components/StatusBadge";

// Mock data - in real app, would fetch based on ID
const patientData = {
  id: "1",
  name: "Maria Silva",
  email: "maria.silva@email.com",
  phone: "+55 11 91234-5678",
  therapist: "Dra. Ana Paula Mendes",
  therapistId: "1",
  status: "ativo",
  joinedDate: "2026-01-15",
};

const consultations = [
  {
    id: "1",
    date: "2026-04-14",
    time: "09:00",
    status: "confirmado" as const,
    paymentMethod: "internal",
  },
  {
    id: "2",
    date: "2026-04-08",
    time: "09:00",
    status: "pago" as const,
    paymentMethod: "internal",
    completed: true,
  },
  {
    id: "3",
    date: "2026-04-01",
    time: "09:00",
    status: "pago" as const,
    paymentMethod: "internal",
    completed: true,
  },
  {
    id: "4",
    date: "2026-03-25",
    time: "09:00",
    status: "pago" as const,
    paymentMethod: "external",
    completed: true,
  },
];

const payments = [
  {
    id: "1",
    date: "2026-04-14",
    amount: 200,
    method: "internal" as const,
    status: "pago" as const,
  },
  {
    id: "2",
    date: "2026-04-08",
    amount: 200,
    method: "internal" as const,
    status: "pago" as const,
  },
  {
    id: "3",
    date: "2026-04-01",
    amount: 200,
    method: "internal" as const,
    status: "pago" as const,
  },
  {
    id: "4",
    date: "2026-03-25",
    amount: 200,
    method: "external" as const,
    status: "aprovado" as const,
  },
];

export function AdminPatientDetail() {
  const { id } = useParams();

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <Link
          to="/app/admin/pacientes"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-4"
        >
          <ArrowLeft size={16} />
          Voltar para Pacientes
        </Link>
        <div className="flex items-start justify-between">
          <div>
            <h1 className="mb-2">{patientData.name}</h1>
            <p className="text-muted-foreground">
              Terapeuta:{" "}
              <Link
                to={`/app/admin/terapeutas/${patientData.therapistId}`}
                className="hover:underline"
              >
                {patientData.therapist}
              </Link>
            </p>
          </div>
          <span className="px-3 py-1.5 bg-blue-100 text-blue-800 text-xs rounded-full font-medium">
            Somente Leitura
          </span>
        </div>
      </div>

      {/* Profile Summary */}
      <div className="bg-white border border-border rounded-xl p-6 mb-8">
        <h2 className="mb-4">Informações do Paciente</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <div className="text-sm text-muted-foreground mb-1">Email</div>
            <div className="flex items-center gap-2 mb-4">
              <Mail size={16} className="text-muted-foreground" />
              <a href={`mailto:${patientData.email}`} className="hover:underline">
                {patientData.email}
              </a>
            </div>

            <div className="text-sm text-muted-foreground mb-1">Telefone</div>
            <div className="mb-4">{patientData.phone}</div>
          </div>

          <div>
            <div className="text-sm text-muted-foreground mb-1">Status</div>
            <div className="mb-4">
              <span
                className={`text-xs px-2 py-0.5 rounded-full ${
                  patientData.status === "ativo"
                    ? "bg-green-100 text-green-800"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                {patientData.status}
              </span>
            </div>

            <div className="text-sm text-muted-foreground mb-1">Data de Cadastro</div>
            <div className="mb-4">
              {new Date(patientData.joinedDate).toLocaleDateString("pt-BR")}
            </div>

            <div className="text-sm text-muted-foreground mb-1">Terapeuta Atribuído</div>
            <Link
              to={`/app/admin/terapeutas/${patientData.therapistId}`}
              className="text-primary hover:underline"
            >
              {patientData.therapist}
            </Link>
          </div>
        </div>
      </div>

      {/* Consultations */}
      <div className="bg-white border border-border rounded-xl p-6 mb-8">
        <h2 className="mb-4">Consultas ({consultations.length})</h2>
        <div className="space-y-2">
          {consultations.map((consultation) => (
            <div key={consultation.id} className="p-3 border border-border rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <div className="font-medium">
                  {new Date(consultation.date).toLocaleDateString("pt-BR")} às{" "}
                  {consultation.time}
                </div>
                <StatusBadge status={consultation.status} />
              </div>
              <div className="text-sm text-muted-foreground">
                {consultation.paymentMethod === "internal"
                  ? "Pagamento interno"
                  : "Pagamento externo"}
                {consultation.completed && " • Consulta realizada"}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Payment Method */}
      <div className="bg-white border border-border rounded-xl p-6 mb-8">
        <h2 className="mb-4">Forma de Pagamento</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-4 bg-muted/50 rounded-lg">
            <div className="text-sm text-muted-foreground mb-1">Pagamentos Internos</div>
            <div className="text-2xl font-semibold">
              {payments.filter((p) => p.method === "internal").length}
            </div>
          </div>
          <div className="p-4 bg-muted/50 rounded-lg">
            <div className="text-sm text-muted-foreground mb-1">Pagamentos Externos</div>
            <div className="text-2xl font-semibold">
              {payments.filter((p) => p.method === "external").length}
            </div>
          </div>
        </div>
      </div>

      {/* Proof Status */}
      <div className="bg-white border border-border rounded-xl p-6 mb-8">
        <h2 className="mb-4">Estado de Comprovantes</h2>
        <div className="space-y-2">
          {payments
            .filter((p) => p.method === "external")
            .map((payment) => (
              <div key={payment.id} className="p-3 border border-border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="font-medium">
                    {new Date(payment.date).toLocaleDateString("pt-BR")}
                  </div>
                  <StatusBadge status={payment.status} />
                </div>
                <div className="text-sm text-muted-foreground">R$ {payment.amount}</div>
              </div>
            ))}
          {payments.filter((p) => p.method === "external").length === 0 && (
            <div className="text-sm text-muted-foreground text-center py-4">
              Nenhum pagamento externo registrado
            </div>
          )}
        </div>
      </div>

      {/* Billing Timeline */}
      <div className="bg-white border border-border rounded-xl p-6">
        <h2 className="mb-4">Linha do Tempo de Pagamentos</h2>
        <div className="space-y-3">
          {payments.map((payment, i) => (
            <div key={payment.id} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                {i < payments.length - 1 && (
                  <div className="w-0.5 h-full bg-border mt-1"></div>
                )}
              </div>
              <div className="flex-1 pb-4">
                <div className="flex items-center justify-between mb-1">
                  <div className="font-medium">
                    {new Date(payment.date).toLocaleDateString("pt-BR")}
                  </div>
                  <StatusBadge status={payment.status} />
                </div>
                <div className="text-sm text-muted-foreground">
                  R$ {payment.amount} •{" "}
                  {payment.method === "internal" ? "Pagamento interno" : "Pagamento externo"}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-6 border-t">
          <div className="flex justify-between items-center">
            <div className="text-sm text-muted-foreground">Total pago</div>
            <div className="text-xl font-semibold">
              R$ {payments.reduce((sum, p) => sum + p.amount, 0).toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
