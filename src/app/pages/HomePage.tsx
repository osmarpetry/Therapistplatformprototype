import { Link } from "react-router";
import { motion } from "motion/react";
import { Calendar, TrendingUp, Users, Shield, CreditCard, CheckCircle2 } from "lucide-react";

export function HomePage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="min-h-[90vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-semibold mb-6 leading-tight">
              A plataforma assume a aquisição e organiza a operação
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Previsibilidade operacional para terapeutas que precisam de agenda clara,
              cobrança transparente e suporte de marketing.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/terapeutas"
                className="bg-primary text-primary-foreground px-8 py-3 rounded-full hover:bg-primary/90 transition-colors"
              >
                Sou Terapeuta
              </Link>
              <Link
                to="/pacientes"
                className="border border-border px-8 py-3 rounded-full hover:bg-muted transition-colors"
              >
                Sou Paciente
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Split Audience */}
      <section className="py-24 border-t">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 border border-border rounded-2xl hover:shadow-lg transition-shadow"
            >
              <Users className="mb-4" size={32} />
              <h2 className="mb-4">Para Terapeutas</h2>
              <p className="text-muted-foreground mb-6">
                Você mantém o foco clínico. A plataforma cuida da aquisição, agenda,
                cobrança e sincronização com seu calendário.
              </p>
              <Link
                to="/terapeutas"
                className="text-sm font-medium hover:underline"
              >
                Saiba mais →
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 border border-border rounded-2xl hover:shadow-lg transition-shadow"
            >
              <Shield className="mb-4" size={32} />
              <h2 className="mb-4">Para Pacientes</h2>
              <p className="text-muted-foreground mb-6">
                Agende, pague e acesse consultas com clareza. Política de cancelamento
                transparente e múltiplas formas de pagamento.
              </p>
              <Link
                to="/pacientes"
                className="text-sm font-medium hover:underline"
              >
                Saiba mais →
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center mb-16">Como funciona</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                1
              </div>
              <h3 className="mb-2">Terapeuta se cadastra</h3>
              <p className="text-sm text-muted-foreground">
                Configura agenda, sincronia com calendário e preferências de cobrança.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                2
              </div>
              <h3 className="mb-2">Paciente agenda</h3>
              <p className="text-sm text-muted-foreground">
                Escolhe horário disponível e forma de pagamento (plataforma ou externo).
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                3
              </div>
              <h3 className="mb-2">Plataforma organiza</h3>
              <p className="text-sm text-muted-foreground">
                Cobrança, confirmação, link da consulta e política de cancelamento automáticos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* O que a plataforma assume */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center mb-16">O que a plataforma assume</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: TrendingUp, title: "Aquisição de pacientes", desc: "Marketing e lifecycle automático" },
              { icon: Calendar, title: "Gestão de agenda", desc: "Sincronização bidirecional com Google Calendar" },
              { icon: CreditCard, title: "Cobrança e pagamento", desc: "Interno ou externo com upload de comprovante" },
              { icon: Shield, title: "Política de cancelamento", desc: "Regras claras de reembolso por prazo" },
              { icon: CheckCircle2, title: "Confirmação automática", desc: "Email e notificação de agendamento" },
              { icon: Users, title: "Transparência operacional", desc: "Visão completa do fluxo de pacientes" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-6 border border-border rounded-xl"
              >
                <item.icon className="mb-3 text-primary" size={24} />
                <h3 className="mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center mb-4">Modelo de cobrança</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Mensalidade fixa para o terapeuta. Taxa transacional apenas em pagamentos internos.
          </p>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-white border border-border rounded-2xl">
              <h3 className="mb-2">Mensalidade do Terapeuta</h3>
              <div className="text-3xl font-semibold mb-4">R$ 199/mês</div>
              <ul className="space-y-3 text-sm">
                <li className="flex gap-2">
                  <CheckCircle2 size={18} className="text-green-600 shrink-0 mt-0.5" />
                  Aquisição e marketing de pacientes
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 size={18} className="text-green-600 shrink-0 mt-0.5" />
                  Gestão completa de agenda
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 size={18} className="text-green-600 shrink-0 mt-0.5" />
                  Sincronização com Google Calendar
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 size={18} className="text-green-600 shrink-0 mt-0.5" />
                  Sem limite de consultas
                </li>
              </ul>
            </div>
            <div className="p-8 bg-white border border-border rounded-2xl">
              <h3 className="mb-2">Taxa Transacional</h3>
              <div className="text-3xl font-semibold mb-4">8% + R$ 0,50</div>
              <ul className="space-y-3 text-sm">
                <li className="flex gap-2">
                  <CheckCircle2 size={18} className="text-green-600 shrink-0 mt-0.5" />
                  Apenas quando o paciente paga pela plataforma
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 size={18} className="text-green-600 shrink-0 mt-0.5" />
                  Pagamento externo = sem taxa transacional
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 size={18} className="text-green-600 shrink-0 mt-0.5" />
                  Upload de comprovante direto no fluxo
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 size={18} className="text-green-600 shrink-0 mt-0.5" />
                  Revisão e aprovação automática
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-center mb-16">Perguntas Frequentes</h2>
          <div className="space-y-6">
            {[
              {
                q: "Como funciona a política de cancelamento?",
                a: "Cancelamento com 24h ou mais: reembolso de 100%. Entre 12h e 24h: reembolso de 50%. Menos de 12h: sem reembolso por padrão.",
              },
              {
                q: "O que acontece se o paciente pagar por fora?",
                a: "Você mantém a mensalidade de R$ 199/mês e não paga taxa transacional. O paciente envia o comprovante no fluxo de cobrança.",
              },
              {
                q: "A plataforma funciona com Google Meet ou Zoom?",
                a: "Integração nativa com Google Meet. Zoom e outras ferramentas podem ser configuradas manualmente.",
              },
              {
                q: "Como funciona a aquisição de pacientes?",
                a: "Marketing orgânico e pago direcionado à sua região. Lifecycle automático com follow-up e retenção.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-6 border border-border rounded-xl"
              >
                <h4 className="mb-2">{item.q}</h4>
                <p className="text-sm text-muted-foreground">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="mb-4">Pronto para ter previsibilidade operacional?</h2>
          <p className="text-lg mb-8 opacity-90">
            Comece hoje e deixe a plataforma cuidar da aquisição e organização.
          </p>
          <Link
            to="/terapeutas"
            className="inline-block bg-white text-primary px-8 py-3 rounded-full hover:bg-white/90 transition-colors"
          >
            Começar Agora
          </Link>
        </div>
      </section>
    </div>
  );
}
