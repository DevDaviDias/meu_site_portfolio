'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, Github } from 'lucide-react'

// 1. INTERFACE
interface Projeto {
  title: string
  description: string
  imagem: string
  technologies: string[]
  github: string
  demo: string
  featured: boolean
}

// 2. DADOS
const PROJETOS_DATA: Projeto[] = [
  {
    title: 'PinkLife',
    description:
      'PinkLife é uma aplicação web estilo SaaS de organização pessoal voltada ao público feminino, que centraliza hábitos, estudos, treinos, finanças e rotina diária em um único painel interativo.',
    imagem: '/pinklife.png',
    technologies: ['React', 'Next.js', 'MongoDb', 'Node.js', 'Express', 'Git', 'JWT'],
    github: 'https://github.com/DevDaviDias/PinkLife',
    demo: 'https://pink-life.vercel.app/',
    featured: true
  },
  {
    title: 'Sistema de Gestão de Clientes',
    description:
      'Aplicação web moderna para cadastro de clientes, controle de serviços e peças utilizadas. Desenvolvida com React, Node.js, PostgreSQL e Stripe.',
    imagem: '/projeto1.png',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
    github: 'https://github.com/DevDaviDias/Gestor-De-Servicos',
    demo: 'https://devdavidias.github.io/Gestor-De-Servicos/',
    featured: true
  },
  {
    title: 'EMTI.dev – Plataforma de Ensino em TI',
    description:
      'Plataforma de ensino tecnológico completa para organizar o aprendizado de TI. Possui sistema de login, navegação SPA, grid de aulas e layout de aulas com vídeo.',
    imagem: '/emtidev.png',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Supabase', 'Lucide React'],
    github: 'https://github.com/DevDaviDias/Emti.dev',
    demo: 'https://emti.dev.br',
    featured: false
  },
  {
    title: 'Chronos Pomodoro',
    description: 'Aplicação Pomodoro em desenvolvimento, focada em produtividade e organização dos estudos.',
    imagem: '/chronos.png',
    technologies: ['React', 'Next', 'Tailwind', 'Node.js'],
    github: 'https://github.com/DevDaviDias/chronos-pomodoro',
    demo: 'https://devdavidias.github.io/chronos-pomodoro/',
    featured: false
  },
  {
    title: 'Dashboard de Criptomoedas',
    description:
      'Dashboard interativo que exibe preços em tempo real e gráficos dos últimos 7 dias via API CoinGecko.',
    imagem: '/cripto.jpg',
    technologies: ['JS', 'Chart.js', 'API'],
    github: 'https://github.com/DevDaviDias/meu-crypto-dashboard',
    demo: 'https://devdavidias.github.io/meu-crypto-dashboard/',
    featured: false
  },
  {
    title: 'API – Classroom of the Elite',
    description:
      'API REST desenvolvida com Express que fornece dados dos personagens do anime Classroom of the Elite.',
    imagem: '/Apisoft.png',
    technologies: ['Node.js', 'Express', 'REST API'],
    github: 'https://github.com/DevDaviDias/api-school-of-elite',
    demo: 'https://api-school-of-elite.onrender.com/',
    featured: false
  }
]

// VARIANTS (anima em batch)
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 }
}

export default function Projetos() {
  const featuredProjects = PROJETOS_DATA.filter((p) => p.featured)
  const otherProjects = PROJETOS_DATA.filter((p) => !p.featured)

  return (
    <section id="projetos" className="w-full py-10 lg:ml-[288px] lg:w-[calc(100%-288px)] transition-all duration-300">
      <div className="w-full px-4 md:pl-20 md:pr-10 max-w-[1440px]">
        {/* CABEÇALHO */}
        <HeaderSection title="Meus Projetos" subtitle="Destaques" />

        {/* DESTAQUES */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-24"
        >
          {featuredProjects.map((project) => (
            <motion.div key={project.title} variants={item}>
              <FeaturedCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        {/* OUTROS PROJETOS */}
        <div className="space-y-10">
          <h4 className="text-2xl font-bold text-slate-900 dark:text-white border-l-4 border-[#63DEF1] pl-4">
            Outros Projetos
          </h4>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {otherProjects.map((project) => (
              <motion.div key={project.title} variants={item}>
                <SimpleCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function HeaderSection({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
      <h3 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight">{title}</h3>
      <p className="text-[#63DEF1] font-medium text-lg uppercase tracking-widest pl-1">{subtitle}</p>
    </motion.div>
  )
}

function FeaturedCard({ project }: { project: Projeto }) {
  return (
    <Card className="flex flex-col h-full border-none shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden bg-white dark:bg-slate-900/50 group">
      <div className="aspect-video overflow-hidden">
        <Image
          src={project.imagem}
          alt={project.title}
          width={800}
          height={450}
          className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-2xl text-slate-900 dark:text-white">{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col flex-grow space-y-4">
        <p className="text-slate-600 dark:text-slate-400 flex-grow leading-relaxed line-clamp-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} className="bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-[#63DEF1] border-none font-medium">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="flex gap-3 pt-4">
          <Button asChild variant="outline" className="flex-1 dark:border-white/10 dark:hover:bg-white/5 dark:text-white transition-all">
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" /> GitHub
            </a>
          </Button>
          <Button asChild className="flex-1 bg-[#63DEF1] hover:bg-[#4bcad9] text-slate-900 font-bold shadow-lg shadow-[#63DEF1]/20 transition-all active:scale-95">
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" /> Demo
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

function SimpleCard({ project }: { project: Projeto }) {
  return (
    <Card className="h-full flex flex-col border-none shadow-md hover:shadow-lg transition-all bg-white dark:bg-slate-900/40 group">
      <div className="overflow-hidden rounded-t-lg">
        <Image
          src={project.imagem}
          alt={project.title}
          width={400}
          height={240}
          className="w-full h-44 object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-300"
        />
      </div>
      <CardHeader className="p-5">
        <CardTitle className="text-lg text-slate-900 dark:text-white truncate">{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="p-5 pt-0 flex flex-col flex-grow space-y-4">
        <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3 flex-grow leading-relaxed">
          {project.description}
        </p>
        <div className="flex gap-2 pt-2">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 border dark:border-white/10 rounded-md hover:bg-slate-100 dark:hover:bg-white/5 text-slate-600 dark:text-slate-300 transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-md text-xs font-bold hover:opacity-90 transition-all active:scale-95"
          >
            Ver Projeto
          </a>
        </div>
      </CardContent>
    </Card>
  )
}