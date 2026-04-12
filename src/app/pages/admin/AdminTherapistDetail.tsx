import { useParams, Link } from "react-router";
import { ArrowLeft, Mail, Calendar, Users, CheckCircle2, Eye } from "lucide-react";
import { StatusBadge } from "../../components/StatusBadge";

// Mock data - in real app, would fetch based on ID
const therapistData = {
  id: "1",
  name: "Dra. Ana Paula Mendes",
  email: "ana.mendes@email.com",
  phone: "+55 11 98765-4321",
  specialty: "Psicologia Clínica",
  bio: "Psicóloga clínica com 8 anos de experiência. Especialista em ansiedade e depressão.",
  status: "ativo",
  joinedDate: "2025-11-15",
  monthlyFee: 199,
  monthlyFeeStatus: "pago",
};

const patients = [
  { id: "1", name: "Maria Silva", sessions: 4, status: "ativo" },
  { id: "2", name: "Ana Costa", sessions: 3, status: "ativo" },
  { id: "3", name: "Carlos Ferreira", sessions: 2, status: "ativo" },
];

const upcomingBookings = [
  {
    id: "1",
    patient: "Maria Silva",
    date: "2026-04-14",
    time: "09:00",
    status: "confirmado" as const,
  },
  {
    id: "2",
    patient: "Ana Costa",
    date: "2026-04-15",
    time: "10:00",
    status: "confirmado" as const,
  },
];

const billingState = {
  monthlyFee: 199,
  internalPaymentsCount: 2,
  internalPaymentsTotal: 400,
  platformFees: 33,
  externalProofsCount: 1,
  externalProofsPending: 0,
};

const externalProofs = [
  {
    id: "1",
    patient: "Carlos Ferreira",
    date: "2026-04-12",
    amount: 200,
    status: "aprovado" as const,
    uploadedAt: "2026-04-11 09:15",
  },
];

export function AdminTherapistDetail() {
  const { id } = useParams();

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <Link
          to="/app/admin/terapeutas"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-4"
        >
          <ArrowLeft size={16} />
          Voltar para Terapeutas
        </Link>
        <div className="flex items-start justify-between">
          <div>
            <h1 className="mb-2">{therapistData.name}</h1>
            <p className="text-muted-foreground">{therapistData.specialty}</p>
          </div>
          <span className="px-3 py-1.5 bg-blue-100 text-blue-800 text-xs rounded-full font-medium">
            Somente Leitura
          </span>
        </div>
      </div>

      {/* Profile Summary */}
      <div className="bg-white border border-border rounded-xl p-6 mb-8">
        <h2 className="mb-4">Informações do Terapeuta</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <div className="text-sm text-muted-foreground mb-1">Email</div>
            <div className="flex items-center gap-2 mb-4">
              <Mail size={16} className="text-muted-foreground" />
              <a href={`mailto:${therapistData.email}`} className="hover:underline">
                {therapistData.email}
              </a>
            </div>

            <div className="text-sm text-muted-foreground mb-1">Telefone</div>
            <div className="mb-4">{therapistData.phone}</div>

            <div className="text-sm text-muted-foreground mb-1">Especialidade</div>
            <div className="mb-4">{therapistData.specialty}</div>
          </div>

          <div>
            <div className="text-sm text-muted-foreground mb-1">Status</div>
            <div className="mb-4">
              <span
                className={`text-xs px-2 py-0.5 rounded-full ${
                  therapistData.status === "ativo"
                    ? "bg-green-100 text-green-800"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                {therapistData.status}
              </span>
            </div>

            <div className="text-sm text-muted-foreground mb-1">Data de Cadastro</div>
            <div className="mb-4">
              {new Date(therapistData.joinedDate).toLocaleDateString("pt-BR")}
            </div>

            <div className="text-sm text-muted-foreground mb-1">Bio</div>
            <div className="text-sm">{therapistData.bio}</div>
          </div>
        </div>
      </div>

      {/* Patients */}
      <div className="bg-white border border-border rounded-xl p-6 mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2>Pacientes ({patients.length})</h2>
          <Users size={20} className="text-muted-foreground" />
        </div>
        <div className="space-y-2">
          {patients.map((patient) => (
            <Link
              key={patient.id}
              to={`/app/admin/pacientes/${patient.id}`}
              className="block p-3 border border-border rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium mb-1">{patient.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {patient.sessions} sessões realizadas
                  </div>
                </div>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full ${
                    patient.status === "ativo"
                      ? "bg-green-100 text-green-800"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {patient.status}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Upcoming Bookings */}
      <div className="bg-white border border-border rounded-xl p-6 mb-8">
        <h2 className="mb-4">Próximas Consultas</h2>
        <div className="space-y-2">
          {upcomingBookings.map((booking) => (
            <div key={booking.id} className="p-3 border border-border rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium mb-1">{booking.patient}</div>
                  <div className="text-sm text-muted-foreground">
                    {new Date(booking.date).toLocaleDateString("pt-BR")} às {booking.time}
                  </div>
                </div>
                <StatusBadge status={booking.status} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Billing State */}
      <div className="bg-white border border-border rounded-xl p-6 mb-8">
        <h2 className="mb-4">Estado de Cobrança</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="mb-3">Mensalidade</h3>
            <div className="text-2xl font-semibold mb-1">R$ {billingState.monthlyFee}</div>
            <div className="flex items-center gap-2 text-sm">
              <StatusBadge status={therapistData.monthlyFeeStatus as any} />
              <span className="text-muted-foreground">Abril 2026</span>
            </div>
          </div>

          <div>
            <h3 className="mb-3">Pagamentos Internos (Abril)</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Total em sessões:</span>
                <span className="font-medium">R$ {billingState.internalPaymentsTotal}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Taxa transacional:</span>
                <span className="font-medium text-orange-600">
                  -R$ {billingState.platformFees}
                </span>
              </div>
              <div className="flex justify-between pt-2 border-t">
                <span className="text-muted-foreground">Valor líquido:</span>
                <span className="font-semibold text-green-700">
                  R$ {billingState.internalPaymentsTotal - billingState.platformFees}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* External Proofs */}
      <div className="bg-white border border-border rounded-xl p-6 mb-8">
        <h2 className="mb-4">Comprovantes Externos</h2>
        {externalProofs.length > 0 ? (
          <div className="space-y-2">
            {externalProofs.map((proof) => (
              <div key={proof.id} className="p-3 border border-border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="font-medium">{proof.patient}</div>
                  <StatusBadge status={proof.status} />
                </div>
                <div className="text-sm text-muted-foreground">
                  Sessão: {new Date(proof.date).toLocaleDateString("pt-BR")} - R${" "}
                  {proof.amount}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  Upload: {proof.uploadedAt}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-sm text-muted-foreground text-center py-4">
            Nenhum comprovante externo registrado
          </div>
        )}
      </div>

      {/* Sync Status */}
      <div className="bg-muted/50 border border-border rounded-xl p-6">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="text-green-600 shrink-0 mt-1" size={20} />
          <div>
            <h3 className="mb-2">Google Calendar sincronizado</h3>
            <p className="text-sm text-muted-foreground">
              Última sincronização: há 5 minutos. Eventos bloqueados: 3
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
