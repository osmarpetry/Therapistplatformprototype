import { Link } from "react-router";
import { motion } from "motion/react";
import { Calendar, TrendingUp, CreditCard, Shield, CheckCircle2, Clock } from "lucide-react";

export function TherapistsPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="min-h-[80vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-semibold mb-6 leading-tight">
              Você cuida dos pacientes. Nós cuidamos da operação.
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Aquisição, agenda sincronizada, cobrança clara e política de cancelamento automática.
              Você mantém o foco clínico.
            </p>
            <Link
              to="/app/terapeuta/agenda"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-full hover:bg-primary/90 transition-colors"
            >
              Ver Demo da Plataforma
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Problemas Resolvidos */}
      <section className="py-24 border-t">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center mb-16">O que resolvemos</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                problema: "Aquisição de pacientes é cara e inconsistente",
                solucao: "Marketing direcionado e lifecycle automático incluído na mensalidade",
              },
              {
                problema: "Agenda desorganizada e conflitos de horário",
                solucao: "Sincronização bidirecional com Google Calendar em tempo real",
              },
              {
                problema: "Cobrança manual toma tempo e gera falhas",
                solucao: "Plataforma calcula, cobra e separa automaticamente taxas e valores",
              },
              {
                problema: "Cancelamentos de última hora sem clareza",
                solucao: "Política automática: 24h = 100%, 12-24h = 50%, <12h = sem reembolso",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 border border-border rounded-xl"
              >
                <div className="text-sm text-muted-foreground mb-2">Problema:</div>
                <h4 className="mb-3">{item.problema}</h4>
                <div className="text-sm text-green-700 mb-2">Solução:</div>
                <p className="text-sm">{item.solucao}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Aquisição e Lifecycle */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <TrendingUp size={40} className="mb-4 text-primary" />
              <h2 className="mb-4">Aquisição e Lifecycle Incluídos</h2>
              <p className="text-muted-foreground mb-6">
                A plataforma investe em marketing orgânico e pago para trazer pacientes
                qualificados na sua região. Sistema de follow-up e retenção automático.
              </p>
              <ul className="space-y-3">
                <li className="flex gap-2 text-sm">
                  <CheckCircle2 size={18} className="text-green-600 shrink-0 mt-0.5" />
                  Campanhas de aquisição segmentadas por região e especialidade
                </li>
                <li className="flex gap-2 text-sm">
                  <CheckCircle2 size={18} className="text-green-600 shrink-0 mt-0.5" />
                  Follow-up automático com pacientes inativos
                </li>
                <li className="flex gap-2 text-sm">
                  <CheckCircle2 size={18} className="text-green-600 shrink-0 mt-0.5" />
                  Notificações de confirmação e lembrete de consulta
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-border shadow-sm">
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-sm">Novos pacientes (mês)</span>
                  <span className="font-semibold">12</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-sm">Taxa de retenção</span>
                  <span className="font-semibold">68%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Follow-ups enviados</span>
                  <span className="font-semibold">45</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline de Onboarding */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-center mb-16">Como começar</h2>
          <div className="space-y-8">
            {[
              {
                step: "1",
                title: "Cadastro e Configuração",
                desc: "Preencha perfil, especialidade, valores e disponibilidade.",
                time: "5 minutos",
              },
              {
                step: "2",
                title: "Sincronização de Calendário",
                desc: "Conecte Google Calendar para sincronização automática bidirecional.",
                time: "2 minutos",
              },
              {
                step: "3",
                title: "Configuração de Cobrança",
                desc: "Escolha aceitar pagamento interno, externo ou ambos.",
                time: "3 minutos",
              },
              {
                step: "4",
                title: "Aprovação e Ativação",
                desc: "Revisão do perfil e início das campanhas de aquisição.",
                time: "24 horas",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center shrink-0 font-semibold">
                  {item.step}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4>{item.title}</h4>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock size={14} /> {item.time}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modelo de Cobrança */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center mb-4">Como você paga</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Mensalidade fixa que cobre aquisição, plataforma e suporte. Taxa transacional
            apenas quando o paciente paga internamente.
          </p>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-white border border-border rounded-2xl">
              <h3 className="mb-2">Mensalidade</h3>
              <div className="text-4xl font-semibold mb-4">R$ 199/mês</div>
              <p className="text-sm text-muted-foreground mb-6">
                Você paga sempre, independente de como o paciente paga.
              </p>
              <ul className="space-y-3 text-sm">
                <li className="flex gap-2">
                  <CheckCircle2 size={18} className="text-green-600 shrink-0 mt-0.5" />
                  Marketing e aquisição de pacientes
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 size={18} className="text-green-600 shrink-0 mt-0.5" />
                  Sincronização de calendário
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 size={18} className="text-green-600 shrink-0 mt-0.5" />
                  Gestão de agenda e cobrança
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 size={18} className="text-green-600 shrink-0 mt-0.5" />
                  Política de cancelamento automática
                </li>
              </ul>
            </div>
            <div className="p-8 bg-white border border-border rounded-2xl">
              <h3 className="mb-2">Taxa Transacional</h3>
              <div className="text-4xl font-semibold mb-4">8% + R$ 0,50</div>
              <p className="text-sm text-muted-foreground mb-6">
                Apenas quando o paciente paga pela plataforma.
              </p>
              <div className="space-y-4 text-sm">
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="font-medium mb-1">Pagamento Externo</div>
                  <div className="text-muted-foreground">
                    Se o paciente pagar por fora, você mantém a mensalidade e não paga
                    taxa transacional. Ele envia comprovante no fluxo de cobrança.
                  </div>
                </div>
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="font-medium mb-1">Pagamento Interno</div>
                  <div className="text-muted-foreground">
                    A plataforma calcula e separa a taxa automaticamente. Você recebe
                    o líquido direto na conta.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sincronização e Calendário */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white p-8 rounded-2xl border border-border shadow-sm">
              <Calendar size={40} className="mb-4 text-primary" />
              <h3 className="mb-4">Sincronização Bidirecional</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Eventos criados no Google Calendar bloqueiam slots na plataforma.
                Consultas agendadas na plataforma aparecem no seu calendário.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-green-600" />
                  Tempo real
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-green-600" />
                  Sem conflitos de horário
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-green-600" />
                  Link de Meet automático
                </div>
              </div>
            </div>
            <div>
              <h2 className="mb-4">Agenda sempre atualizada</h2>
              <p className="text-muted-foreground mb-6">
                Use o calendário que você já usa. A plataforma se adapta à sua rotina,
                não o contrário.
              </p>
              <ul className="space-y-3 text-sm">
                <li className="flex gap-2">
                  <CheckCircle2 size={18} className="text-green-600 shrink-0 mt-0.5" />
                  Bloqueios automáticos de compromissos pessoais
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 size={18} className="text-green-600 shrink-0 mt-0.5" />
                  Notificações de novas consultas direto no email
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 size={18} className="text-green-600 shrink-0 mt-0.5" />
                  Lembretes configuráveis antes de cada sessão
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-center mb-16">Dúvidas Frequentes</h2>
          <div className="space-y-6">
            {[
              {
                q: "Preciso usar a cobrança da plataforma?",
                a: "Não. Você pode aceitar apenas pagamento externo e enviar comprovante. Nesse caso, mantém a mensalidade de R$ 199 e não paga taxa transacional.",
              },
              {
                q: "E se eu já tenho pacientes?",
                a: "Você pode migrar pacientes existentes. Eles criam conta e continuam agendando normalmente. A plataforma ajuda na retenção e aquisição de novos.",
              },
              {
                q: "Posso bloquear horários para compromissos pessoais?",
                a: "Sim. Qualquer evento no Google Calendar bloqueia automaticamente o horário na plataforma.",
              },
              {
                q: "Como funciona o cancelamento de consulta?",
                a: "≥24h: 100% reembolso. Entre 12h e 24h: 50% reembolso. <12h: sem reembolso. Tudo automático.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-6 bg-white border border-border rounded-xl"
              >
                <h4 className="mb-2">{item.q}</h4>
                <p className="text-sm text-muted-foreground">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="mb-4">Pronto para ter previsibilidade?</h2>
          <p className="text-lg mb-8 opacity-90">
            Comece hoje e foque no que importa: cuidar dos seus pacientes.
          </p>
          <Link
            to="/app/terapeuta/agenda"
            className="inline-block bg-white text-primary px-8 py-3 rounded-full hover:bg-white/90 transition-colors"
          >
            Ver Demo da Plataforma
          </Link>
        </div>
      </section>
    </div>
  );
}
