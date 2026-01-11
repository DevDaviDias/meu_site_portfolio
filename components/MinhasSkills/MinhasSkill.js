import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Skills() {
  const categoriasDeHabilidade = [
    {
      titulo: "Frontend",
      habilidade: [
        { name: "React", level: 95, color: "from-blue-600 to-blue-400" },
        { name: "TypeScript", level: 88, color: "from-gray-800 to-gray-600" },
        { name: "Next.js", level: 92, color: "from-cyan-500 to-teal-500" },
        {
          name: "Tailwind CSS",
          level: 80,
          color: "from-green-500 to-emerald-500",
        },
      ],
    },
    {
      titulo: "Backend",
      habilidade: [
        { name: "Node.js", level: 90, color: "from-green-600 to-green-400" },
        { name: "Java", level: 85, color: "from-yellow-700 to-yellow-400" },
        { name: "PostgreSQL", level: 82, color: "from-blue-700 to-blue-500" },
        { name: "MongoDB", level: 88, color: "from-gray-700 to-gray-500" },
      ],
    },
    {
      titulo: "DevOps e Ferramentas",
      habilidade: [
        { name: "Git", level: 85, color: "from-blue-600 to-blue-400" },
        { name: "Docker", level: 80, color: "from-orange-500 to-orange-400" },
        { name: "Linux", level: 75, color: "from-purple-600 to-purple-400" },
        { name: "CI/CD", level: 80, color: "from-yellow-600 to-yellow-500" },
      ],
    },
  ];

  const certificacao = [
    "Curso em andamento com Felipe Deschamps",
    "estudando lógica moderna, boas práticas",
    " padrões e conceitos essenciais para me tornar",
    "um desenvolvedor mais completo.",
  ];

  return (
    <div className="space-y-8 pl-10 ">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2
          id="skill"
          className="text-3xl  md:mt-[1em] font-normal text-slate-800 mb-6 pt-4 pl-4 lg:pl-[12em]  "
        >
          Minhas Skills
        </h2>

        <div className="flex flex-col md:flex-row md:flex-wrap gap-y-6 md:gap-x-[5em] md:gap-1 mb-6 md:pl-[22em] w-full md:justify-start">
          {categoriasDeHabilidade.map((category, categoryIndex) => (
            <motion.div
              key={category.titulo}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="max-w-[20em] w-full"
            >
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg h-full">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-800">
                    {category.titulo}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  {category.habilidade.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-slate-700">
                          {skill.name}
                        </span>
                        <span className="text-sm text-slate-500">
                          {skill.level}%
                        </span>
                      </div>

                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{
                            duration: 1.5,
                            delay: categoryIndex * 0.2 + skillIndex * 0.1,
                          }}
                          className={`h-2 bg-gradient-to-r ${skill.color} rounded-full`}
                        />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CERTIFICADOS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg w-80 md:ml-[22em] md:w-[70.5em]">
            <CardHeader>
              <CardTitle className="text-xl text-slate-800">
                Certificações & Cursos
              </CardTitle>
            </CardHeader>

            <CardContent>
              <div className="flex flex-wrap gap-3">
                {certificacao.map((cert, index) => (
                  <motion.div
                    key={cert}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.8 + index * 0.1,
                    }}
                  >
                    <Badge
                      variant="secondary"
                      className="bg-gradient-to-r from-cyan-100 text-cyan-800 border-cyan-200 px-3 py-1"
                    >
                      {cert}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
}
