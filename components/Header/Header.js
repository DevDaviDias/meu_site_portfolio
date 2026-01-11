import { useState, useEffect } from "react";
import styles from "./Header.module.css";
import {motion} from "framer-motion";

export default function Header() {
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const fullText = "Full Stack ";

  useEffect(() => {
    let timeout;

    const updateText = () => {
      setText((prev) => {
        let nextText;
        if (!deleting) {
          nextText = fullText.slice(0, prev.length + 1);
          if (nextText === fullText) setDeleting(true);
        } else {
          nextText = fullText.slice(0, prev.length - 1);
          if (nextText === "") setDeleting(false);
        }
        return nextText;
      });

      timeout = setTimeout(updateText, 250);
    };

    updateText(); // inicia a primeira chamada

    return () => clearTimeout(timeout); // limpa o timeout quando desmonta
  }, [deleting, fullText]);

  return (
    <>
    <motion.div
    initial ={{opacity:0, y:-20}}
    animate ={{opacity:1, y:0}}
    transition = {{duration:0.5}}
    viewport={{ once: true }}

>
    <div className={styles.fundo}>
      <div className={styles.titleCenter}>
        <h1 className={styles.titulo}>Davi Dias</h1>
        <h2 className={styles.subtitulo}>
          Developer <span className={styles.typing}>{text}</span>
          <span className={styles.cursor}>|</span>
        </h2>
      </div>
    </div>
    </motion.div>
    </>
  );
}
