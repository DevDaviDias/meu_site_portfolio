import { useState, useEffect } from "react";
import styles from "../styles/MenuHamburguer.module.css";
import Image from "next/image";

export default function MenuHamburguer() {
  const [aberto, setAberto] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const toggleMenu = () => {
    // Só alterna no mobile
    if (!isDesktop) setAberto(!aberto);
  };

  // Detecta largura da tela
  useEffect(() => {
    const handleResize = () => {
      const desktop = window.innerWidth >= 1024;
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
        <h2 className={styles.titleName}>Davi Dias</h2>

        {/* Redes sociais */}
        <nav className={styles.navRedesSociais}>
          <a
            href="https://www.instagram.com/devdavidias/"
            className={styles.icons}
          >
            <i className="fab fa-instagram fa-2x"></i>
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

        {/* Links */}
        <nav className={styles.menuLinks}>
          <a href="#sobre">
            <i className="fas fa-user icon-circle"></i> Sobre mim
          </a>
          <a href="#">
            <i className="fas fa-code icon-circle"></i> Minhas Skills
          </a>
          <a href="#">
            <i className="fas fa-graduation-cap icon-circle"></i> Formações
          </a>
          <a href="#">
            <i className="fas fa-folder-open icon-circle"></i> Meus Projetos
          </a>
        </nav>

        {/* Footer */}
        <div className={styles.footerMenu}>
          <p>© Copyright DaviDias</p>
        </div>
      </div>

      {/* Overlay só no mobile */}
      {!isDesktop && aberto && (
        <div className={styles.overlay} onClick={toggleMenu}></div>
      )}
    </>
  );
}
