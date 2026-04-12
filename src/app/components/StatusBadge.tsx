type Status =
  | "pendente"
  | "confirmado"
  | "pago"
  | "em_analise"
  | "cancelado"
  | "reembolsado"
  | "aprovado"
  | "recusado";

const statusConfig: Record<
  Status,
  { label: string; className: string }
> = {
  pendente: {
    label: "Pendente",
    className: "bg-yellow-100 text-yellow-800 border-yellow-200",
  },
  confirmado: {
    label: "Confirmado",
    className: "bg-blue-100 text-blue-800 border-blue-200",
  },
  pago: {
    label: "Pago",
    className: "bg-green-100 text-green-800 border-green-200",
  },
  em_analise: {
    label: "Em Análise",
    className: "bg-purple-100 text-purple-800 border-purple-200",
  },
  cancelado: {
    label: "Cancelado",
    className: "bg-gray-100 text-gray-800 border-gray-200",
  },
  reembolsado: {
    label: "Reembolsado",
    className: "bg-orange-100 text-orange-800 border-orange-200",
  },
  aprovado: {
    label: "Aprovado",
    className: "bg-green-100 text-green-800 border-green-200",
  },
  recusado: {
    label: "Recusado",
    className: "bg-red-100 text-red-800 border-red-200",
  },
};

export function StatusBadge({ status }: { status: Status }) {
  const config = statusConfig[status];
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${config.className}`}
    >
      {config.label}
    </span>
  );
}
