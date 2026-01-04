import React from "react";
import styles from "./SobreMin.module.css";


  type InfoProps = {
    icon: React.ReactNode;
    text: string;
    complemento: string;
  };
  export default function infoItem({ icon, text, complemento }: InfoProps) {
    return (
      <>
        <div className={styles.infoItem}>
          <div className={styles.icon}>{icon}</div>
          <div className={styles.infoText}>
            <div className={styles.infotext}>{text}</div>
            <div className={styles.complemento}>{complemento}</div>
          </div>
        </div>
      </>
    );
  }

