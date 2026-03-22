"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Cog, GraduationCap, Heart, Target, Sparkles } from "lucide-react"

const values = [
  {
    icon: GraduationCap,
    title: "Educação Inovadora",
    description: "Utilizamos robótica como ferramenta pedagógica para tornar o aprendizado mais dinâmico e significativo.",
  },
  {
    icon: Target,
    title: "Foco no Aprendizado",
    description: "Cada oficina é planejada para desenvolver habilidades técnicas, criativas e socioemocionais.",
  },
  {
    icon: Heart,
    title: "Paixão por Ensinar",
    description: "Nossa equipe é apaixonada por tecnologia e educação, criando experiências memoráveis.",
  },
  {
    icon: Cog,
    title: "Metodologia Ativa",
    description: "Aprender fazendo: os alunos constroem, programam e testam seus próprios projetos.",
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function About() {
  return (
    <section id="sobre" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 right-0 w-[600px] h-[600px] border border-dashed border-primary/10 rounded-full -translate-y-1/2 translate-x-1/2"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative rounded-2xl overflow-hidden border border-border aspect-square"
              >
                <Image
                  src="/VerticeTec/images/team-collaboration.jpg"
                  alt="Equipe trabalhando em projeto de robótica"
                  fill
                  className="object-cover"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative rounded-2xl overflow-hidden border border-border aspect-square mt-8"
              >
                <Image
                  src="/VerticeTec/images/student-project.jpg"
                  alt="Alunos apresentando projeto"
                  fill
                  className="object-cover"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative rounded-2xl overflow-hidden border border-border aspect-square -mt-8"
              >
                <Image
                  src="/VerticeTec/images/robotics-lecture.jpg"
                  alt="Palestra de robótica"
                  fill
                  className="object-cover"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative rounded-2xl overflow-hidden border border-border aspect-square"
              >
                <Image
                  src="/VerticeTec/images/workshop-environment.jpg"
                  alt="Oficina meio ambiente"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring" }}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-6 py-3 rounded-full flex items-center gap-2 shadow-lg shadow-primary/30"
            >
              <Sparkles className="w-5 h-5" />
              <span className="font-medium">+5000 alunos impactados</span>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
                Sobre Nós
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                Transformando a educação através da robótica
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
                O MECHRON Robótica nasceu da vontade de levar tecnologia e inovação para as escolas
                de forma acessível e educativa. Oferecemos oficinas temáticas que conectam o currículo
                escolar com a robótica, tornando o aprendizado uma aventura.
              </p>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {values.map((value) => (
                <motion.div
                  key={value.title}
                  variants={item}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 mx-auto max-w-4xl"
        >
          <div className="relative p-8 sm:p-12 rounded-3xl bg-card border border-border overflow-hidden">
            {/* Animated background */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"
            />
            <motion.div
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.1, 0.15, 0.1],
              }}
              transition={{ duration: 10, repeat: Infinity }}
              className="absolute bottom-0 left-0 w-48 h-48 bg-accent rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"
            />

            <div className="relative">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-sm font-medium text-primary uppercase tracking-wider mb-4"
              >
                Nossa Missão
              </motion.p>
              <motion.blockquote
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-xl sm:text-2xl font-medium text-foreground leading-relaxed text-pretty"
              >
                {'"Despertar a curiosidade científica e o pensamento computacional em crianças e jovens, utilizando a robótica como ponte entre a teoria e a prática, preparando-os para os desafios do futuro."'}
              </motion.blockquote>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
