import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import Titulo from "../ui/titulo";

export default function Projetos() {
  const projetos = [
    {
      title: "Sistema de Gestão de Clientes e Serviços",
      description:
        "Aplicação web moderna para cadastro de clientes, controle de serviços e peças utilizadas. Desenvolvida inicialmente com JavaScript e Node.js. Futuras melhorias incluem Express, EJS e MongoDB.",
      imagem: "/projeto1.png",
      techologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      github: "https://github.com/DevDaviDias/Gestor-De-Servicos",
      demo: "https://devdavidias.github.io/Gestor-De-Servicos/",
      featured: true,
    },
    {
      title: "Dashboard de Criptomoedas",
      description:
        "Dashboard interativo que exibe preços em tempo real, variação das últimas 24 horas e gráficos dos últimos 7 dias de diversas criptomoedas.",
      imagem: "/cripto.jpg",
      techologies: ["HTML5", "CSS3", "JavaScript", "Chart.js", "API CoinGecko"],
      github: "https://github.com/DevDaviDias/meu-crypto-dashboard",
      demo: "https://devdavidias.github.io/meu-crypto-dashboard/",
      featured: true,
    },
    {
      title: "Aplicação de Adoção de Pets",
      description:
        "Site onde usuários podem cadastrar pets para adoção e visualizar animais disponíveis.",
      imagem:
        "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=500&fit=crop",
      techologies: ["React", "Firebase", "Tailwind", "Node.js"],
      github: "",
      demo: "",
      featured: false,
    },
    {
      title: "Meteora – Loja de Moda Responsiva",
      description:
        "Loja fictícia de moda desenvolvida como primeiro projeto com Bootstrap.",
      imagem: "/meteora.png",
      techologies: ["HTML5", "CSS3", "Bootstrap 5", "JavaScript"],
      github: "https://github.com/DevDaviDias/Meteora",
      demo: "https://devdavidias.github.io/Meteora/",
      featured: false,
    },
    {
      title: "Landing Page para Cafeteria",
      description:
        "Landing page moderna e responsiva criada para uma cafeteria fictícia.",
      imagem:
        "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&fit=crop",
      techologies: ["HTML", "CSS", "JavaScript", "GSAP"],
      github: "",
      demo: "",
      featured: false,
    },
  ];

  const featuredProjects = projetos.filter((p) => p.featured);
  const otherProjects = projetos.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="md:w-[73em]  bg-gradient-to-br  md:ml-[24.5em]"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
        </motion.div>

        {/* Projetos em Destaque */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-slate-800 mb-6 pt-4 pl-4 ">
           Meus Projetos
          </h3>
          <h4  className="text-black mb-[2em] pb-4 text-lg pl-4 "> Projetos em Destaque</h4>
        
          <div className="grid  md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm overflow-hidden">
                  <img
                    src={project.imagem}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  <CardHeader>
                    <CardTitle className="text-xl text-slate-800">
                      {project.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-slate-600">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.techologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-purple-100 text-purple-800"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-3 pt-2">
                      {project.github && (
                        <Button asChild variant="outline" size="sm" className="flex-1">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="w-4 h-4 mr-2" /> Código
                          </a>
                        </Button>
                      )}

                      {project.demo && (
                        <Button
                          asChild
                          size="sm"
                          className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600"
                        >
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="w-4 h-4 mr-2" /> Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Outros Projetos */}
        <div>
          <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">
            Outros Projetos
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm h-full">
                  <img
                    src={project.imagem}
                    alt={project.title}
                    className="w-full h-32 object-cover"
                  />

                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg text-slate-800">
                      {project.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-3">
                    <p className="text-sm text-slate-600 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1">
                      {project.techologies.slice(0, 3).map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs bg-blue-100 text-blue-800"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-2 pt-2">
                      {project.github && (
                        <Button asChild variant="outline" size="sm" className="flex-1 text-xs">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="w-3 h-3 mr-1" /> Código
                          </a>
                        </Button>
                      )}

                      {project.demo && (
                        <Button
                          asChild
                          size="sm"
                          className="flex-1 text-xs bg-gradient-to-r from-purple-600 to-blue-600"
                        >
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="w-3 h-3 mr-1" /> Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
