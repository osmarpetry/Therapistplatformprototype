import { Link } from "react-router";
import { motion } from "motion/react";
import { Calendar, CreditCard, Shield, CheckCircle2, Upload, Video } from "lucide-react";

export function PatientsPage() {
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
              Agende, pague e consulte com clareza total
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Escolha seu terapeuta, agende no horário disponível e pague como preferir.
              Política de cancelamento transparente.
            </p>
            <Link
              to="/app/paciente/consultas"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-full hover:bg-primary/90 transition-colors"
            >
              Ver Área do Paciente
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Fluxo de Agendamento */}
      <section className="py-24 border-t">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center mb-16">Como funciona o agendamento</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Escolha o terapeuta",
                desc: "Veja perfis, especialidades e disponibilidade.",
              },
              {
                step: "2",
                title: "Selecione o horário",
                desc: "Agenda em tempo real mostra slots disponíveis.",
              },
              {
                step: "3",
                title: "Escolha forma de pagamento",
                desc: "Pague pela plataforma ou envie comprovante externo.",
              },
              {
                step: "4",
                title: "Receba confirmação",
                desc: "Email com detalhes e link da consulta online.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-semibold">
                  {item.step}
                </div>
                <h4 className="mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Formas de Pagamento */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center mb-16">Formas de pagamento</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-white border border-border rounded-2xl"
            >
              <CreditCard size={32} className="mb-4 text-primary" />
              <h3 className="mb-2">Pagamento Interno</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Pague diretamente pela plataforma com cartão. Confirmação automática
                e link da consulta enviados por email.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <CheckCircle2 size={16} className="text-green-600 shrink-0 mt-0.5" />
                  Confirmação instantânea
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 size={16} className="text-green-600 shrink-0 mt-0.5" />
                  Cartão de crédito ou débito
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 size={16} className="text-green-600 shrink-0 mt-0.5" />
                  Reembolso automático se cancelar
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 bg-white border border-border rounded-2xl"
            >
              <Upload size={32} className="mb-4 text-primary" />
              <h3 className="mb-2">Pagamento Externo</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Pague por Pix ou transferência diretamente ao terapeuta. Envie
                comprovante no fluxo de cobrança para confirmação.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <CheckCircle2 size={16} className="text-green-600 shrink-0 mt-0.5" />
                  Pix, transferência ou dinheiro
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 size={16} className="text-green-600 shrink-0 mt-0.5" />
                  Upload de comprovante simplificado
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 size={16} className="text-green-600 shrink-0 mt-0.5" />
                  Análise e aprovação rápida
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Upload de Comprovante */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-4">Comprovante direto no fluxo</h2>
              <p className="text-muted-foreground mb-6">
                Se você escolher pagar por fora, o comprovante é enviado na própria
                tela de cobrança. Aprovação rápida e você recebe o link da consulta.
              </p>
              <ul className="space-y-3 text-sm">
                <li className="flex gap-2">
                  <CheckCircle2 size={18} className="text-green-600 shrink-0 mt-0.5" />
                  Upload de foto ou PDF do comprovante
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 size={18} className="text-green-600 shrink-0 mt-0.5" />
                  Aprovação em até 2 horas úteis
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 size={18} className="text-green-600 shrink-0 mt-0.5" />
                  Notificação quando aprovado ou se houver pendência
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-border shadow-sm">
              <div className="mb-4">
                <h4 className="mb-2">Upload de Comprovante</h4>
                <p className="text-xs text-muted-foreground">
                  Consulta: Sessão de Terapia - 15/04/2026 às 14:00
                </p>
              </div>
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center mb-4">
                <Upload size={32} className="mx-auto mb-2 text-muted-foreground" />
                <div className="text-sm font-medium mb-1">
                  Clique para fazer upload
                </div>
                <div className="text-xs text-muted-foreground">
                  PNG, JPG ou PDF até 5MB
                </div>
              </div>
              <button className="w-full bg-primary text-primary-foreground py-2.5 rounded-lg text-sm">
                Enviar Comprovante
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Política de Cancelamento */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center mb-4">Política de cancelamento</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Transparência total. Você sabe exatamente o que acontece em cada situação.
          </p>
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 bg-white border border-green-200 rounded-xl"
            >
              <div className="text-3xl font-semibold mb-2 text-green-700">100%</div>
              <h4 className="mb-2">Cancelamento com ≥24h</h4>
              <p className="text-sm text-muted-foreground">
                Reembolso integral ou crédito total para usar em outra consulta.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 bg-white border border-yellow-200 rounded-xl"
            >
              <div className="text-3xl font-semibold mb-2 text-yellow-700">50%</div>
              <h4 className="mb-2">Cancelamento entre 12h e 24h</h4>
              <p className="text-sm text-muted-foreground">
                Reembolso parcial ou crédito de 50% do valor pago.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-6 bg-white border border-red-200 rounded-xl"
            >
              <div className="text-3xl font-semibold mb-2 text-red-700">0%</div>
              <h4 className="mb-2">Cancelamento com &lt;12h</h4>
              <p className="text-sm text-muted-foreground">
                Sem reembolso por padrão. Renegociação direto com terapeuta.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Consulta Online */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white p-8 rounded-2xl border border-border shadow-sm">
              <Video size={40} className="mb-4 text-primary" />
              <h3 className="mb-4">Consulta 100% online</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Link de Google Meet enviado automaticamente após confirmação de pagamento.
                Acesse direto pelo navegador, sem precisar instalar nada.
              </p>
              <div className="bg-muted/50 p-4 rounded-lg">
                <div className="text-xs text-muted-foreground mb-1">Próxima consulta:</div>
                <div className="font-medium mb-2">Terça, 15/04 às 14:00</div>
                <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg text-sm">
                  Entrar na Consulta
                </button>
              </div>
            </div>
            <div>
              <h2 className="mb-4">Link automático e lembretes</h2>
              <p className="text-muted-foreground mb-6">
                Você recebe o link por email assim que o pagamento é confirmado.
                Lembretes 24h e 1h antes da consulta.
              </p>
              <ul className="space-y-3 text-sm">
                <li className="flex gap-2">
                  <CheckCircle2 size={18} className="text-green-600 shrink-0 mt-0.5" />
                  Link válido 15 minutos antes até 15 minutos depois
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 size={18} className="text-green-600 shrink-0 mt-0.5" />
                  Notificações por email e SMS (opcional)
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 size={18} className="text-green-600 shrink-0 mt-0.5" />
                  Acesso pelo navegador ou app do Google Meet
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
                q: "Posso pagar por Pix?",
                a: "Sim. Escolha pagamento externo, pague via Pix ao terapeuta e envie o comprovante no fluxo de cobrança.",
              },
              {
                q: "Como funciona o reembolso?",
                a: "Cancelando 24h antes: 100% de volta. Entre 12h e 24h: 50%. Menos de 12h: sem reembolso por padrão.",
              },
              {
                q: "Quando recebo o link da consulta?",
                a: "Assim que o pagamento é confirmado (interno) ou comprovante aprovado (externo), você recebe por email.",
              },
              {
                q: "E se eu perder o horário?",
                a: "Consultas não realizadas não geram reembolso automático. Renegocie direto com o terapeuta se necessário.",
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
          <h2 className="mb-4">Pronto para agendar sua primeira consulta?</h2>
          <p className="text-lg mb-8 opacity-90">
            Escolha seu terapeuta e agende com clareza total.
          </p>
          <Link
            to="/app/paciente/consultas"
            className="inline-block bg-white text-primary px-8 py-3 rounded-full hover:bg-white/90 transition-colors"
          >
            Ver Área do Paciente
          </Link>
        </div>
      </section>
    </div>
  );
}
