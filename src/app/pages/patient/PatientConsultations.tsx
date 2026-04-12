import { Video, Calendar, ExternalLink, AlertCircle, User } from "lucide-react";
import { StatusBadge } from "../../components/StatusBadge";

const upcomingConsultations = [
  {
    id: "1",
    therapist: "Dra. Ana Paula Mendes",
    specialty: "Psicologia Clínica",
    date: "2026-04-15",
    time: "14:00",
    duration: 50,
    status: "confirmado" as const,
    meetLink: "https://meet.google.com/xyz-uvwx-rst",
    paymentMethod: "internal",
  },
  {
    id: "2",
    therapist: "Dr. Carlos Eduardo Silva",
    specialty: "Terapia Cognitivo-Comportamental",
    date: "2026-04-22",
    time: "10:00",
    duration: 50,
    status: "pendente" as const,
    meetLink: null,
    paymentMethod: "external",
  },
];

const consultationHistory = [
  {
    id: "3",
    therapist: "Dra. Ana Paula Mendes",
    specialty: "Psicologia Clínica",
    date: "2026-04-08",
    time: "14:00",
    duration: 50,
    status: "pago" as const,
    completed: true,
  },
  {
    id: "4",
    therapist: "Dra. Ana Paula Mendes",
    specialty: "Psicologia Clínica",
    date: "2026-04-01",
    time: "14:00",
    duration: 50,
    status: "pago" as const,
    completed: true,
  },
  {
    id: "5",
    therapist: "Dr. Carlos Eduardo Silva",
    specialty: "Terapia Cognitivo-Comportamental",
    date: "2026-03-25",
    time: "10:00",
    duration: 50,
    status: "cancelado" as const,
    completed: false,
    cancelReason: "Cancelado por você com 48h de antecedência. Reembolso de 100% processado.",
  },
];

export function PatientConsultations() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="mb-2">Minhas Consultas</h1>
        <p className="text-muted-foreground">
          Acompanhe suas consultas agendadas e histórico de sessões.
        </p>
      </div>

      {/* Upcoming Consultations */}
      <div className="mb-8">
        <h2 className="mb-4">Próximas Consultas</h2>
        <div className="space-y-4">
          {upcomingConsultations.map((consultation) => (
            <div
              key={consultation.id}
              className="bg-white border border-border rounded-xl p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                    <User size={24} className="text-muted-foreground" />
                  </div>
                  <div>
                    <div className="font-medium mb-1">{consultation.therapist}</div>
                    <div className="text-sm text-muted-foreground mb-2">
                      {consultation.specialty}
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar size={16} className="text-muted-foreground" />
                      {new Date(consultation.date).toLocaleDateString("pt-BR", {
                        weekday: "long",
                        day: "2-digit",
                        month: "long",
                      })}{" "}
                      às {consultation.time}
                    </div>
                  </div>
                </div>
                <StatusBadge status={consultation.status} />
              </div>

              {consultation.status === "confirmado" && consultation.meetLink ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium mb-1">Consulta confirmada</div>
                      <div className="text-xs text-muted-foreground">
                        Link disponível 15 minutos antes do horário
                      </div>
                    </div>
                    <a
                      href={consultation.meetLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm hover:bg-primary/90"
                    >
                      <Video size={16} />
                      Entrar na Consulta
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              ) : (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-center gap-3">
                  <AlertCircle className="text-yellow-700" size={20} />
                  <div className="text-sm">
                    <div className="font-medium mb-1">Aguardando confirmação de pagamento</div>
                    <div className="text-xs text-muted-foreground">
                      {consultation.paymentMethod === "external"
                        ? "Envie o comprovante na área de Pagamentos para liberar o link."
                        : "Confirmação automática assim que o pagamento for processado."}
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-4 pt-4 border-t flex gap-3">
                <button className="text-sm text-muted-foreground hover:text-foreground">
                  Reagendar
                </button>
                <button className="text-sm text-destructive hover:text-destructive/80">
                  Cancelar Consulta
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cancellation Policy */}
      <div className="bg-muted/50 border border-border rounded-xl p-6 mb-8">
        <h3 className="mb-4">Política de cancelamento</h3>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div>
            <div className="font-medium mb-1 text-green-700">≥24h de antecedência</div>
            <div className="text-muted-foreground">Reembolso de 100%</div>
          </div>
          <div>
            <div className="font-medium mb-1 text-yellow-700">Entre 12h e 24h</div>
            <div className="text-muted-foreground">Reembolso de 50%</div>
          </div>
          <div>
            <div className="font-medium mb-1 text-red-700">&lt;12h de antecedência</div>
            <div className="text-muted-foreground">Sem reembolso por padrão</div>
          </div>
        </div>
      </div>

      {/* History */}
      <div className="bg-white border border-border rounded-xl p-6">
        <h2 className="mb-4">Histórico de Consultas</h2>
        <div className="space-y-3">
          {consultationHistory.map((consultation) => (
            <div
              key={consultation.id}
              className={`p-4 border rounded-lg ${
                consultation.status === "cancelado"
                  ? "border-border bg-muted/30"
                  : "border-border"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div
                    className={`font-medium ${
                      consultation.status === "cancelado"
                        ? "line-through text-muted-foreground"
                        : ""
                    }`}
                  >
                    {consultation.therapist}
                  </div>
                  <StatusBadge status={consultation.status} />
                </div>
                <div className="text-sm text-muted-foreground">
                  {new Date(consultation.date).toLocaleDateString("pt-BR")}
                </div>
              </div>
              <div className="text-sm text-muted-foreground">
                {consultation.specialty}
              </div>
              {consultation.cancelReason && (
                <div className="mt-2 text-xs text-muted-foreground bg-muted p-2 rounded">
                  {consultation.cancelReason}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
