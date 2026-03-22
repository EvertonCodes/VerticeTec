"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { CheckCircle2, Clock, Package, Users2, Wrench, Presentation } from "lucide-react"

const services = [
  {
    icon: Package,
    title: "Kits Completos",
    description: "Fornecemos todos os materiais e equipamentos necessários para as oficinas.",
  },
  {
    icon: Users2,
    title: "Instrutores Qualificados",
    description: "Nossa equipe é formada por profissionais experientes em educação e tecnologia.",
  },
  {
    icon: Clock,
    title: "Horários Flexíveis",
    description: "Adaptamos os horários das oficinas de acordo com a programação da escola.",
  },
  {
    icon: Wrench,
    title: "Suporte Técnico",
    description: "Acompanhamento completo durante toda a oficina com suporte técnico dedicado.",
  },
]

const included = [
  "Planejamento personalizado da oficina",
  "Materiais e kits de robótica inclusos",
  "Instrutores especializados",
  "Certificado de participação",
  "Fotos e registro do evento",
  "Relatório pedagógico",
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4 } },
}

export function Services() {
  return (
    <section id="servicos" className="py-24 sm:py-32 bg-secondary/30 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,_transparent_25%,_var(--border)_25%,_var(--border)_26%,_transparent_26%,_transparent_75%,_var(--border)_75%,_var(--border)_76%,_transparent_76%)] bg-[size:60px_60px] opacity-30" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
            Como Funciona
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Tudo que você precisa para uma oficina de sucesso
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
            Cuidamos de todos os detalhes para que sua escola tenha uma experiência completa
            e enriquecedora com robótica educacional.
          </p>
        </motion.div>

        {/* Services Grid with Image */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={item}
                whileHover={{ scale: 1.02, x: 5 }}
                className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10"
                >
                  <service.icon className="w-5 h-5 text-primary" />
                </motion.div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-border">
              <Image
                src="/VerticeTec/images/workshop-traffic.jpg"
                alt="Oficina de robótica em ação"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              animate={{ y: [0, -5, 0] }}
              className="absolute -bottom-6 -left-6 p-4 bg-card rounded-xl border border-border shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">100% Preparado</p>
                  <p className="text-sm text-muted-foreground">Tudo incluso</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* What's Included */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 mx-auto max-w-4xl"
        >
          <div className="p-8 sm:p-12 rounded-3xl bg-card border border-border relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl" />

            <h3 className="text-2xl font-bold text-foreground text-center mb-8 relative">
              O que está incluso
            </h3>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative"
            >
              {included.map((text, index) => (
                <motion.div
                  key={text}
                  variants={item}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1, type: "spring" }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  </motion.div>
                  <span className="text-foreground">{text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Process Timeline */}
        <div className="mt-24">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-foreground text-center mb-16"
          >
            Processo Simples
          </motion.h3>
          <div className="relative max-w-5xl mx-auto">
            {/* Connection line */}
            <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-border" />
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-primary origin-left"
            />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Contato", desc: "Entre em contato conosco com a data e tema do evento" },
                { step: "02", title: "Planejamento", desc: "Elaboramos uma proposta personalizada" },
                { step: "03", title: "Preparação", desc: "Preparamos os materiais e a equipe" },
                { step: "04", title: "Execução", desc: "Realizamos a oficina na sua escola" },
              ].map((processItem, index) => (
                <motion.div
                  key={processItem.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative text-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary text-primary-foreground font-mono text-xl font-bold mb-4 shadow-lg shadow-primary/30 relative z-10"
                  >
                    {processItem.step}
                  </motion.div>
                  <h4 className="font-semibold text-foreground mb-2">{processItem.title}</h4>
                  <p className="text-sm text-muted-foreground">{processItem.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
