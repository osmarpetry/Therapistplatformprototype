import { Calendar, Video, ExternalLink, AlertCircle, CheckCircle2, RefreshCw } from "lucide-react";
import { StatusBadge } from "../../components/StatusBadge";

const mockBookings = [
  {
    id: "1",
    patient: "Maria Silva",
    date: "2026-04-14",
    time: "09:00",
    duration: 50,
    status: "confirmado" as const,
    meetLink: "https://meet.google.com/abc-defg-hij",
    paymentMethod: "internal",
  },
  {
    id: "2",
    patient: "João Santos",
    date: "2026-04-14",
    time: "14:00",
    duration: 50,
    status: "pendente" as const,
    meetLink: null,
    paymentMethod: "external",
  },
  {
    id: "3",
    patient: "Ana Costa",
    date: "2026-04-15",
    time: "10:00",
    duration: 50,
    status: "confirmado" as const,
    meetLink: "https://meet.google.com/xyz-uvwx-rst",
    paymentMethod: "internal",
  },
  {
    id: "4",
    patient: "Pedro Oliveira",
    date: "2026-04-15",
    time: "16:00",
    duration: 50,
    status: "cancelado" as const,
    meetLink: null,
    paymentMethod: "internal",
    cancelReason: "Cancelado pelo paciente com 36h de antecedência. Reembolso de 100% processado.",
  },
];

export function TherapistAgenda() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="mb-2">Agenda</h1>
        <p className="text-muted-foreground">
          Consultas sincronizadas com Google Calendar. Bloqueios e eventos externos
          aparecem automaticamente aqui.
        </p>
      </div>

      {/* Sync Status */}
      <div className="mb-8 p-4 bg-white border border-border rounded-xl flex items-center justify-between">
        <div className="flex items-center gap-3">
          <CheckCircle2 className="text-green-600" size={20} />
          <div>
            <div className="text-sm font-medium">Google Calendar sincronizado</div>
            <div className="text-xs text-muted-foreground">
              Última sincronização: há 2 minutos
            </div>
          </div>
        </div>
        <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          <RefreshCw size={16} />
          Sincronizar agora
        </button>
      </div>

      {/* Week View */}
      <div className="bg-white border border-border rounded-xl p-6 mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2>Semana de 14 a 20 de Abril</h2>
          <div className="flex gap-2">
            <button className="px-4 py-2 border border-border rounded-lg text-sm hover:bg-muted">
              Semana
            </button>
            <button className="px-4 py-2 text-sm text-muted-foreground hover:bg-muted rounded-lg">
              Mês
            </button>
          </div>
        </div>

        <div className="space-y-6">
          {/* Monday */}
          <div>
            <div className="text-sm font-medium mb-3 pb-2 border-b">
              Segunda, 14 de Abril
            </div>
            <div className="space-y-3">
              {mockBookings
                .filter((b) => b.date === "2026-04-14")
                .map((booking) => (
                  <div
                    key={booking.id}
                    className="p-4 border border-border rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="font-medium mb-1">{booking.patient}</div>
                        <div className="text-sm text-muted-foreground">
                          {booking.time} - {parseInt(booking.time.split(":")[0]) + 1}:00 ({booking.duration} min)
                        </div>
                      </div>
                      <StatusBadge status={booking.status} />
                    </div>

                    <div className="flex items-center gap-4 text-sm">
                      {booking.meetLink ? (
                        <a
                          href={booking.meetLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-primary hover:underline"
                        >
                          <Video size={16} />
                          Link do Meet
                          <ExternalLink size={14} />
                        </a>
                      ) : (
                        <div className="flex items-center gap-1.5 text-muted-foreground">
                          <AlertCircle size={16} />
                          Aguardando confirmação de pagamento
                        </div>
                      )}
                      <span className="text-muted-foreground">
                        {booking.paymentMethod === "internal" ? "Pag. interno" : "Pag. externo"}
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Tuesday */}
          <div>
            <div className="text-sm font-medium mb-3 pb-2 border-b">
              Terça, 15 de Abril
            </div>
            <div className="space-y-3">
              {mockBookings
                .filter((b) => b.date === "2026-04-15")
                .map((booking) => (
                  <div
                    key={booking.id}
                    className={`p-4 border rounded-lg transition-shadow ${
                      booking.status === "cancelado"
                        ? "border-border bg-muted/30"
                        : "border-border hover:shadow-md"
                    }`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className={`font-medium mb-1 ${booking.status === "cancelado" ? "line-through text-muted-foreground" : ""}`}>
                          {booking.patient}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {booking.time} - {parseInt(booking.time.split(":")[0]) + 1}:00 ({booking.duration} min)
                        </div>
                      </div>
                      <StatusBadge status={booking.status} />
                    </div>

                    {booking.status === "cancelado" && booking.cancelReason ? (
                      <div className="text-xs text-muted-foreground bg-muted p-3 rounded">
                        {booking.cancelReason}
                      </div>
                    ) : booking.meetLink ? (
                      <div className="flex items-center gap-4 text-sm">
                        <a
                          href={booking.meetLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-primary hover:underline"
                        >
                          <Video size={16} />
                          Link do Meet
                          <ExternalLink size={14} />
                        </a>
                        <span className="text-muted-foreground">Pag. interno</span>
                      </div>
                    ) : null}
                  </div>
                ))}
            </div>
          </div>

          {/* Empty days */}
          <div>
            <div className="text-sm font-medium mb-3 pb-2 border-b">
              Quarta, 16 de Abril
            </div>
            <div className="text-sm text-muted-foreground p-4 border border-dashed border-border rounded-lg text-center">
              Nenhuma consulta agendada
            </div>
          </div>
        </div>
      </div>

      {/* Cancellation Policy Preview */}
      <div className="bg-muted/50 border border-border rounded-xl p-6">
        <h3 className="mb-4 flex items-center gap-2">
          <AlertCircle size={20} />
          Política de cancelamento
        </h3>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div>
            <div className="font-medium mb-1">≥24h de antecedência</div>
            <div className="text-muted-foreground">Reembolso de 100%</div>
          </div>
          <div>
            <div className="font-medium mb-1">Entre 12h e 24h</div>
            <div className="text-muted-foreground">Reembolso de 50%</div>
          </div>
          <div>
            <div className="font-medium mb-1">&lt;12h de antecedência</div>
            <div className="text-muted-foreground">Sem reembolso por padrão</div>
          </div>
        </div>
      </div>
    </div>
  );
}
