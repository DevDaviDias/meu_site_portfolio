import { useState, useEffect } from "react";
import styles from "./MenuHamburguer.module.css";
import Image from "next/image";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Sun, Moon } from "lucide-react";
import Button from "../ui/button";
import { motion } from "framer-motion";

{
  /* import { Button } from "@/components/ui/button"; 
export default function MenuHamburguer() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setIsDark(!isDark);
  };*/
}

export default function MenuHamburguer({ onChangeSessao }) {
  const [aberto, setAberto] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const toggleMenu = () => {
    // Só alterna no mobile
    if (!isDesktop) setAberto(!aberto);
  };

  // Detecta largura da tela
  useEffect(() => {
    const handleResize = () => {
      const desktop = window.innerWidth >= 1080;
      setIsDesktop(desktop);
      setAberto(desktop);
    };

    handleResize(); // Executa na primeira renderização
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Botão Hambúrguer só no mobile */}

      {!isDesktop && (
        <div
          className={`${styles.hamburguer} ${aberto ? styles.ativo : ""}`}
          onClick={toggleMenu}
        >
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>
      )}

      {/* Menu Lateral */}
      <div className={`${styles.menuLateral} ${aberto ? styles.aberto : ""}`}>
        {!isDesktop && (
          <button className={styles.btnFechar} onClick={toggleMenu}></button>
        )}

        {/* Avatar e nome */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className={styles.tituloIcone}>
            <div>
              <Image
                src="/img.davi.jpg"
                alt="Davi Dias"
                width={120}
                height={120}
                style={{
                  borderRadius: "50%",
                  border: "8px solid #63DEF1",
                }}
              />
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.titleName}>Davi Dias</h2>
        </motion.div>
        {/* Redes sociais */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <nav className={styles.navRedesSociais}>
            <a
              href="https://www.instagram.com/codecooperx/"
              className={styles.icons}
            >
              <i className="fab fa-instagram fa-2x color:'hover:text-gray-900"></i>
            </a>
            <a href="https://github.com/DevDaviDias" className={styles.icons}>
              <i className="fab fa-github fa-2x"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/devdavidias/"
              className={styles.icons}
            >
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
            <a href="mailto:devdavidias@gmail.com" className={styles.icons}>
              <i className="fas fa-envelope fa-2x"></i>
            </a>
          </nav>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Links */}
          <nav className={styles.menuLinks}>
            <a
              onClick={() => onChangeSessao("sobre")}
              className="
    bg-transparent
    border-none
    p-0
    text-white
    cursor-pointer
    
  "
            >
              <i className="fas fa-user icon-circle"></i> Sobre mim
            </a>

            <a
              onClick={() => onChangeSessao("formacoes")}
              className="
    bg-transparent
    border-none
    p-0
    text-white
    cursor-pointer
    
  "
            >
              <i className="fas fa-graduation-cap icon-circle"></i> Formações
            </a>
            <a
              onClick={() => onChangeSessao("skills")}
              className="
    bg-transparent
    border-none
    p-0
    text-white
    cursor-pointer
    
  "
            >
              <i className="fas fa-code icon-circle"></i> Minhas Skills
            </a>
            <a
              onClick={() => onChangeSessao("progets")}
              className="
    bg-transparent
    border-none
    p-0
    text-white
    cursor-pointer
    
  "
            >
              <i className="fas fa-folder-open icon-circle"></i> Meus Projetos
            </a>
            <a
              className="
    bg-transparent
    border-none
    p-0
    text-white
    cursor-pointer
    
  "
            >
              <i
                className="fas fa-newspaper icon-circle 
                                          text-gray-400
                                          cursor-not-allowed
                                          pointer-events-none
                                          opacity-50 "
              ></i>{" "}
              <span
                className="text-gray-400
                                          cursor-not-allowed
                                          pointer-events-none
                                          opacity-70 "
              >
                Blog (Em Breve)...
              </span>
            </a>
          </nav>
        </motion.div>
        {/* Botão de download do CV 
        <div className={styles.botaoCV}>
          <Button
            variant="outline"   >
            <a
              href="/Davi_Dias_CV.pdf"
              download="Davi_Dias_CV.pdf"
              onClick={toggleMenu}
            >
              Baixar CV
            </a>      
            </Button></div>

        <div className="p-6">
          <Button className="w-full bg-white/10 hover:bg-white/20 text-white border-0">
            {isDark ? (
              <Sun className="mr-2 h-4 w-4" />
            ) : (
              <Moon className="mr-2 h-4 w-4" />
            )}
            {isDark ? "Light Mode" : "Dark Mode"}
          </Button>
        </div>

        {/* Footer */}

        <div className={styles.footerMenu}>
          <p>© Copyright Davi Dias</p>
        </div>
      </div>

      {/* Overlay só no mobile */}
      {!isDesktop && aberto && (
        <div className={styles.overlay} onClick={toggleMenu}></div>
      )}
    </>
  );
}
