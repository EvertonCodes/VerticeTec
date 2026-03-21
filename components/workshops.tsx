"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Car, Leaf, FlaskConical, Globe2, Calculator, BookOpen,
  Droplets, Heart, Rocket, Flag, Music, Palette,
  Shield, Cpu, Star, Calendar, ArrowRight, Sparkles
} from "lucide-react"

const workshops = [
  {
    icon: Car,
    title: "Dia do Trânsito",
    description: "Construção de semáforos inteligentes e carros autônomos em miniatura. Educação sobre sinalização e segurança.",
    topics: ["Semáforos LED", "Carros autônomos", "Segurança viária"],
    gradient: "from-amber-500/20 to-orange-500/20",
    iconColor: "text-amber-500",
    borderColor: "group-hover:border-amber-500/50",
    bncc: "EF05CI01, EF05MA07",
    data: "25 de Setembro"
  },
  {
    icon: Leaf,
    title: "Dia do Meio Ambiente",
    description: "Projetos sustentáveis: sistemas de irrigação inteligente, separação de resíduos e monitoramento ambiental.",
    topics: ["Energia solar", "Sensores", "Reciclagem"],
    gradient: "from-emerald-500/20 to-green-500/20",
    iconColor: "text-emerald-500",
    borderColor: "group-hover:border-emerald-500/50",
    bncc: "EF05CI04, EF05GE11",
    data: "5 de Junho"
  },
  {
    icon: FlaskConical,
    title: "Feira de Ciências",
    description: "Experimentos científicos automatizados e robôs que demonstram princípios da física e química.",
    topics: ["Experimentos", "Robôs demonstradores", "STEM"],
    gradient: "from-primary/20 to-cyan-500/20",
    iconColor: "text-primary",
    borderColor: "group-hover:border-primary/50",
    bncc: "EF05CI01, EF05CI02",
    data: "Outubro"
  },
  {
    icon: Globe2,
    title: "Semana de Geografia",
    description: "Robôs exploradores que simulam missões espaciais e mapeamento terrestre conectando tecnologia e geografia.",
    topics: ["Robôs exploradores", "GPS", "Missões espaciais"],
    gradient: "from-blue-500/20 to-sky-500/20",
    iconColor: "text-blue-500",
    borderColor: "group-hover:border-blue-500/50",
    bncc: "EF05GE08, EF05GE09",
    data: "29 de Maio"
  },
  {
    icon: Calculator,
    title: "Semana da Matemática",
    description: "Aplicação prática de conceitos matemáticos através da programação e construção de robôs calculadores.",
    topics: ["Lógica", "Geometria", "Cálculos"],
    gradient: "from-teal-500/20 to-cyan-500/20",
    iconColor: "text-teal-500",
    borderColor: "group-hover:border-teal-500/50",
    bncc: "EF05MA08, EF05MA16",
    data: "6 de Maio"
  },
  {
    icon: BookOpen,
    title: "Dia do Livro",
    description: "Robôs contadores de histórias e projetos de literatura interativa que incentivam a leitura.",
    topics: ["Robôs narradores", "Histórias interativas", "Criatividade"],
    gradient: "from-orange-500/20 to-amber-500/20",
    iconColor: "text-orange-500",
    borderColor: "group-hover:border-orange-500/50",
    bncc: "EF05LP01, EF05LP28",
    data: "18 de Abril"
  },
  {
    icon: Droplets,
    title: "Dia da Água",
    description: "Sensores de qualidade da água, irrigação inteligente e conscientização sobre recursos hídricos.",
    topics: ["Sensores de pH", "Irrigação automática", "Sustentabilidade"],
    gradient: "from-sky-500/20 to-blue-500/20",
    iconColor: "text-sky-500",
    borderColor: "group-hover:border-sky-500/50",
    bncc: "EF05CI04, EF05GE10",
    data: "22 de Março"
  },
  {
    icon: Heart,
    title: "Semana da Saúde",
    description: "Robôs que ensinam sobre corpo humano, hábitos saudáveis e primeiros socorros de forma lúdica.",
    topics: ["Corpo humano", "Primeiros socorros", "Bem-estar"],
    gradient: "from-red-500/20 to-rose-500/20",
    iconColor: "text-red-500",
    borderColor: "group-hover:border-red-500/50",
    bncc: "EF05CI06, EF05CI08",
    data: "7 de Abril"
  },
  {
    icon: Rocket,
    title: "Dia da Ciência",
    description: "Exploração espacial, foguetes de água e experimentos de física que despertam interesse pela ciência.",
    topics: ["Foguetes", "Física", "Exploração espacial"],
    gradient: "from-slate-500/20 to-zinc-500/20",
    iconColor: "text-slate-400",
    borderColor: "group-hover:border-slate-400/50",
    bncc: "EF05CI01, EF05CI13",
    data: "23 de Outubro"
  },

  {
    icon: Shield,
    title: "Dia da Defesa Civil",
    description: "Robôs de resgate, drones de busca e sistemas de alerta que ensinam sobre prevenção de desastres.",
    topics: ["Robôs de resgate", "Drones", "Prevenção"],
    gradient: "from-orange-500/20 to-red-500/20",
    iconColor: "text-orange-500",
    borderColor: "group-hover:border-orange-500/50",
    bncc: "EF05CI11, EF05GE10",
    data: "15 de Outubro"
  },
  {
    icon: Cpu,
    title: "Semana da Tecnologia",
    description: "Introdução à programação, inteligência artificial básica e conceitos de computação para todas as idades.",
    topics: ["Programação", "IA básica", "Pensamento computacional"],
    gradient: "from-cyan-500/20 to-teal-500/20",
    iconColor: "text-cyan-500",
    borderColor: "group-hover:border-cyan-500/50",
    bncc: "EF05MA08, EF05CI01",
    data: "Outubro"
  },
  {
    icon: Star,
    title: "Dia do Estudante",
    description: "Celebração com competições de robótica, desafios e premiações para os estudantes.",
    topics: ["Competições", "Desafios", "Premiações"],
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-500",
    borderColor: "group-hover:border-blue-500/50",
    bncc: "EF05MA08, EF05CI01",
    data: "11 de Agosto"
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

export function Workshops() {
  return (
    <section id="oficinas" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -80, 0], y: [0, 80, 0] }}
        transition={{ duration: 25, repeat: Infinity }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Datas Comemorativas</span>
          </motion.div>

          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            12+ Oficinas temáticas para cada evento escolar
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
            Cada oficina e cuidadosamente elaborada para se conectar com datas comemorativas do calendario escolar,
            alinhada com a BNCC e proporcionando uma experiencia educacional completa.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {workshops.map((workshop) => (
            <motion.div key={workshop.title} variants={item}>
              <Card
                className={`group bg-card border-border transition-all duration-500 h-full ${workshop.borderColor} hover:shadow-xl hover:shadow-primary/5 cursor-pointer overflow-hidden relative`}
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${workshop.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <CardHeader className="relative pb-2">
                  <div className="flex items-center justify-between mb-2">
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className={`flex items-center justify-center w-10 h-10 rounded-xl bg-secondary`}
                    >
                      <workshop.icon className={`w-5 h-5 ${workshop.iconColor}`} />
                    </motion.div>
                    <Badge variant="outline" className="text-xs border-primary/30 text-primary">
                      {workshop.data}
                    </Badge>
                  </div>
                  <CardTitle className="text-base text-foreground flex items-center justify-between">
                    {workshop.title}
                    <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-primary" />
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed text-sm line-clamp-2">
                    {workshop.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative pt-0">
                  <div className="flex flex-wrap gap-1 mb-2">
                    {workshop.topics.slice(0, 2).map((topic) => (
                      <Badge key={topic} variant="secondary" className="text-xs">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                  <div className="pt-2 border-t border-border/50">
                    <p className="text-xs text-muted-foreground">
                      <span className="text-primary font-medium">BNCC:</span> {workshop.bncc}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground">
            Nao encontrou a data que procura?{" "}
            <a href="#contato" className="text-primary hover:underline font-medium inline-flex items-center gap-1 group">
              Entre em contato
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>{" "}
            e criamos uma oficina personalizada para sua escola.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
