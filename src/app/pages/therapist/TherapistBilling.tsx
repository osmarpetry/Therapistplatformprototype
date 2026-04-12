import { CreditCard, AlertCircle, CheckCircle2, FileText, Eye } from "lucide-react";
import { StatusBadge } from "../../components/StatusBadge";

const monthlyFee = {
  amount: 199,
  dueDate: "2026-04-30",
  status: "pendente" as const,
};

const internalPayments = [
  {
    id: "1",
    patient: "Maria Silva",
    date: "2026-04-14",
    sessionValue: 200,
    platformFee: 16.5,
    netValue: 183.5,
    status: "pago" as const,
  },
  {
    id: "2",
    patient: "Ana Costa",
    date: "2026-04-15",
    sessionValue: 200,
    platformFee: 16.5,
    netValue: 183.5,
    status: "confirmado" as const,
  },
];

const externalProofs = [
  {
    id: "1",
    patient: "João Santos",
    date: "2026-04-14",
    sessionValue: 200,
    proofUrl: "https://example.com/proof1.jpg",
    status: "em_analise" as const,
    uploadedAt: "2026-04-13 14:30",
  },
  {
    id: "2",
    patient: "Carlos Ferreira",
    date: "2026-04-12",
    sessionValue: 200,
    proofUrl: "https://example.com/proof2.jpg",
    status: "aprovado" as const,
    uploadedAt: "2026-04-11 09:15",
    approvedAt: "2026-04-11 10:20",
  },
];

const sessionHistory = [
  { date: "2026-04-14", patient: "Maria Silva", value: 200, method: "internal", net: 183.5 },
  { date: "2026-04-14", patient: "João Santos", value: 200, method: "external", net: 200 },
  { date: "2026-04-12", patient: "Carlos Ferreira", value: 200, method: "external", net: 200 },
  { date: "2026-04-10", patient: "Ana Costa", value: 200, method: "internal", net: 183.5 },
];

export function TherapistBilling() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="mb-2">Cobranças</h1>
        <p className="text-muted-foreground">
          Mensalidade fixa, taxas transacionais em pagamentos internos e
          comprovantes externos para revisão.
        </p>
      </div>

      {/* Monthly Fee */}
      <div className="bg-white border border-border rounded-xl p-6 mb-8">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h2 className="mb-1">Mensalidade da Plataforma</h2>
            <p className="text-sm text-muted-foreground">
              Cobre aquisição, marketing, agenda e suporte operacional
            </p>
          </div>
          <StatusBadge status={monthlyFee.status} />
        </div>
        <div className="flex items-baseline gap-2 mb-4">
          <div className="text-3xl font-semibold">R$ {monthlyFee.amount}</div>
          <div className="text-sm text-muted-foreground">/mês</div>
        </div>
        <div className="text-sm text-muted-foreground mb-4">
          Vencimento: {new Date(monthlyFee.dueDate).toLocaleDateString("pt-BR")}
        </div>
        <button className="bg-primary text-primary-foreground px-6 py-2.5 rounded-lg text-sm hover:bg-primary/90">
          Pagar Mensalidade
        </button>
      </div>

      {/* Internal Payments Summary */}
      <div className="bg-white border border-border rounded-xl p-6 mb-8">
        <h2 className="mb-4">Pagamentos Internos (Abril 2026)</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div>
            <div className="text-sm text-muted-foreground mb-1">Total em sessões</div>
            <div className="text-2xl font-semibold">R$ 400,00</div>
          </div>
          <div>
            <div className="text-sm text-muted-foreground mb-1">Taxa transacional</div>
            <div className="text-2xl font-semibold text-orange-600">-R$ 33,00</div>
          </div>
          <div>
            <div className="text-sm text-muted-foreground mb-1">Valor líquido</div>
            <div className="text-2xl font-semibold text-green-700">R$ 367,00</div>
          </div>
        </div>
        <div className="space-y-3">
          {internalPayments.map((payment) => (
            <div
              key={payment.id}
              className="p-4 border border-border rounded-lg flex items-center justify-between"
            >
              <div>
                <div className="font-medium mb-1">{payment.patient}</div>
                <div className="text-sm text-muted-foreground">
                  {new Date(payment.date).toLocaleDateString("pt-BR")} - Sessão: R$ {payment.sessionValue}
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-muted-foreground mb-1">
                  Taxa: R$ {payment.platformFee.toFixed(2)}
                </div>
                <div className="font-semibold text-green-700">
                  Líquido: R$ {payment.netValue.toFixed(2)}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 text-xs text-muted-foreground bg-muted/50 p-3 rounded">
          <AlertCircle size={14} className="inline mr-1" />
          Se o pagamento for interno, a plataforma calcula e separa a taxa
          automaticamente. Você recebe o líquido.
        </div>
      </div>

      {/* External Proofs */}
      <div className="bg-white border border-border rounded-xl p-6 mb-8">
        <h2 className="mb-4">Comprovantes Externos</h2>
        <p className="text-sm text-muted-foreground mb-6">
          Se o paciente pagar por fora, você mantém a mensalidade e não paga taxa
          transacional. O comprovante fica disponível aqui.
        </p>
        <div className="space-y-3">
          {externalProofs.map((proof) => (
            <div
              key={proof.id}
              className="p-4 border border-border rounded-lg flex items-center justify-between"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="font-medium">{proof.patient}</div>
                  <StatusBadge status={proof.status} />
                </div>
                <div className="text-sm text-muted-foreground">
                  Sessão: {new Date(proof.date).toLocaleDateString("pt-BR")} - R$ {proof.sessionValue}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  Upload: {proof.uploadedAt}
                  {proof.approvedAt && ` • Aprovado: ${proof.approvedAt}`}
                </div>
              </div>
              <button className="flex items-center gap-2 text-sm text-primary hover:underline">
                <Eye size={16} />
                Ver comprovante
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Payout Status */}
      <div className="bg-muted/50 border border-border rounded-xl p-6 mb-8">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="text-green-600 shrink-0 mt-1" size={20} />
          <div>
            <h3 className="mb-2">Repasse configurado</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Valores líquidos de pagamentos internos são transferidos
              automaticamente toda segunda-feira.
            </p>
            <div className="text-sm">
              <span className="text-muted-foreground">Próximo repasse:</span>{" "}
              <span className="font-medium">21 de Abril, 2026</span>
            </div>
          </div>
        </div>
      </div>

      {/* Session Billing List */}
      <div className="bg-white border border-border rounded-xl p-6">
        <h2 className="mb-4">Histórico de Sessões (Abril 2026)</h2>
        <div className="space-y-2">
          {sessionHistory.map((session, i) => (
            <div
              key={i}
              className="p-3 border border-border rounded flex items-center justify-between text-sm"
            >
              <div className="flex items-center gap-4">
                <div className="text-muted-foreground w-20">
                  {new Date(session.date).toLocaleDateString("pt-BR", {
                    day: "2-digit",
                    month: "2-digit",
                  })}
                </div>
                <div className="font-medium w-40">{session.patient}</div>
                <div className="text-muted-foreground">
                  {session.method === "internal" ? "Interno" : "Externo"}
                </div>
              </div>
              <div className="font-semibold">R$ {session.net.toFixed(2)}</div>
            </div>
          ))}
        </div>
        <div className="mt-4 pt-4 border-t flex justify-between items-center">
          <div className="text-sm text-muted-foreground">Total no mês</div>
          <div className="text-xl font-semibold">
            R${" "}
            {sessionHistory.reduce((sum, s) => sum + s.net, 0).toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
}
