import { CreditCard, Upload, CheckCircle2, AlertCircle, Clock } from "lucide-react";
import { StatusBadge } from "../../components/StatusBadge";

const pendingPayments = [
  {
    id: "1",
    therapist: "Dr. Carlos Eduardo Silva",
    date: "2026-04-22",
    time: "10:00",
    amount: 200,
    paymentMethod: "external" as const,
    status: "pendente" as const,
  },
];

const paymentHistory = [
  {
    id: "2",
    therapist: "Dra. Ana Paula Mendes",
    date: "2026-04-15",
    amount: 200,
    paymentMethod: "internal" as const,
    status: "pago" as const,
    paidAt: "2026-04-10 16:45",
  },
  {
    id: "3",
    therapist: "Dra. Ana Paula Mendes",
    date: "2026-04-08",
    amount: 200,
    paymentMethod: "internal" as const,
    status: "pago" as const,
    paidAt: "2026-04-03 09:20",
  },
  {
    id: "4",
    therapist: "Dra. Ana Paula Mendes",
    date: "2026-04-01",
    amount: 200,
    paymentMethod: "external" as const,
    status: "aprovado" as const,
    uploadedAt: "2026-03-28 14:30",
    approvedAt: "2026-03-28 15:10",
  },
];

export function PatientPayments() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="mb-2">Pagamentos</h1>
        <p className="text-muted-foreground">
          Gerencie pagamentos internos e envie comprovantes de pagamento externo.
        </p>
      </div>

      {/* Pending Payments */}
      {pendingPayments.length > 0 && (
        <div className="mb-8">
          <h2 className="mb-4">Pagamentos Pendentes</h2>
          <div className="space-y-4">
            {pendingPayments.map((payment) => (
              <div
                key={payment.id}
                className="bg-white border border-yellow-200 rounded-xl p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="font-medium mb-1">{payment.therapist}</div>
                    <div className="text-sm text-muted-foreground">
                      Consulta: {new Date(payment.date).toLocaleDateString("pt-BR")} às{" "}
                      {payment.time}
                    </div>
                  </div>
                  <StatusBadge status={payment.status} />
                </div>

                <div className="text-2xl font-semibold mb-6">R$ {payment.amount.toFixed(2)}</div>

                {/* Payment Method Selection */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border border-border rounded-lg p-4 hover:border-primary cursor-pointer transition-colors">
                    <CreditCard size={24} className="mb-2 text-primary" />
                    <div className="font-medium mb-1">Pagar pela Plataforma</div>
                    <div className="text-xs text-muted-foreground mb-3">
                      Cartão de crédito ou débito. Confirmação instantânea.
                    </div>
                    <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg text-sm hover:bg-primary/90">
                      Pagar Agora
                    </button>
                  </div>

                  <div className="border border-border rounded-lg p-4">
                    <Upload size={24} className="mb-2 text-primary" />
                    <div className="font-medium mb-1">Pagamento Externo</div>
                    <div className="text-xs text-muted-foreground mb-3">
                      Pix, transferência ou dinheiro. Envie comprovante após pagar.
                    </div>
                    <button className="w-full border border-border py-2 rounded-lg text-sm hover:bg-muted">
                      Enviar Comprovante
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* External Payment Flow Example */}
      <div className="bg-white border border-border rounded-xl p-6 mb-8">
        <h2 className="mb-4">Como funciona o pagamento externo</h2>
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center shrink-0 text-sm font-semibold">
              1
            </div>
            <div>
              <div className="font-medium mb-1">Pague ao terapeuta</div>
              <div className="text-sm text-muted-foreground">
                Use Pix, transferência bancária ou dinheiro conforme combinado.
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center shrink-0 text-sm font-semibold">
              2
            </div>
            <div>
              <div className="font-medium mb-1">Envie o comprovante</div>
              <div className="text-sm text-muted-foreground">
                Foto ou PDF do comprovante direto na área de pagamentos.
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center shrink-0 text-sm font-semibold">
              3
            </div>
            <div>
              <div className="font-medium mb-1">Aprovação e link</div>
              <div className="text-sm text-muted-foreground">
                Análise em até 2 horas úteis. Link do Meet enviado por email.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Upload Proof Card (Example) */}
      <div className="bg-white border border-border rounded-xl p-6 mb-8">
        <h3 className="mb-4">Enviar Comprovante de Pagamento</h3>
        <div className="mb-4">
          <div className="text-sm text-muted-foreground mb-1">Consulta</div>
          <div className="font-medium">Dr. Carlos Eduardo Silva - 22/04/2026 às 10:00</div>
          <div className="text-sm text-muted-foreground">Valor: R$ 200,00</div>
        </div>

        <div className="border-2 border-dashed border-border rounded-lg p-8 text-center mb-4 hover:border-primary transition-colors cursor-pointer">
          <Upload size={32} className="mx-auto mb-2 text-muted-foreground" />
          <div className="text-sm font-medium mb-1">Clique para fazer upload</div>
          <div className="text-xs text-muted-foreground">
            PNG, JPG ou PDF até 5MB
          </div>
        </div>

        <button className="w-full bg-primary text-primary-foreground py-2.5 rounded-lg hover:bg-primary/90">
          Enviar Comprovante
        </button>
      </div>

      {/* Payment History */}
      <div className="bg-white border border-border rounded-xl p-6">
        <h2 className="mb-4">Histórico de Pagamentos</h2>
        <div className="space-y-3">
          {paymentHistory.map((payment) => (
            <div key={payment.id} className="p-4 border border-border rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <div className="font-medium mb-1">{payment.therapist}</div>
                  <div className="text-sm text-muted-foreground">
                    {new Date(payment.date).toLocaleDateString("pt-BR")}
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-semibold mb-1">
                    R$ {payment.amount.toFixed(2)}
                  </div>
                  <StatusBadge status={payment.status} />
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                {payment.paymentMethod === "internal" ? (
                  <div className="flex items-center gap-1">
                    <CreditCard size={14} />
                    Cartão •••• 1234
                  </div>
                ) : (
                  <div className="flex items-center gap-1">
                    <Upload size={14} />
                    Pagamento externo
                  </div>
                )}
                {payment.paidAt && (
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    Pago em {payment.paidAt}
                  </div>
                )}
                {payment.approvedAt && (
                  <div className="flex items-center gap-1">
                    <CheckCircle2 size={14} />
                    Aprovado em {payment.approvedAt}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-6 border-t">
          <div className="flex justify-between items-center">
            <div className="text-sm text-muted-foreground">Total pago em 2026</div>
            <div className="text-xl font-semibold">
              R$ {paymentHistory.reduce((sum, p) => sum + p.amount, 0).toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
