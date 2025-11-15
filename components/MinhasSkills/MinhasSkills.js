
import styles from "@/components/MinhasSkills/MinhasSkills.module.css";

import { SkillData } from "@/data/skills";


const colors = [
  "#4f46e5", "#10b981", "#f59e0b", "#ef4444",
  "#8b5cf6", "#06b6d4", "#f43f5e", "#eab308",
  "#22c55e", "#6366f1", "#f97316", "#db2777"
];

export default function MinhasSkills() {
  let colorIndex = 0; // índice global para não repetir cores

  return (
    <section className={styles.skillsSection}>
      <div className={styles.cardsContainer}>
        {SkillData.map((category, index) => (
          <div key={index} className={styles.categoryCard}>
            <h2 className={styles.title}>{category.title}</h2>
            <div className={styles.skillsGrid}>
              {category.Skills.map((skill, idx) => {
                const color = colors[colorIndex % colors.length];
                colorIndex++; // incrementa para a próxima skill
                return (
                  <div key={idx} className={styles.skillCard}>
                    <span className={styles.skillName}>{skill.name}</span>
                    <div className={styles.progressBar}>
                      <div
                        className={styles.progress}
                        style={{
                          width: `${skill.level}%`,
                          backgroundColor: color,
                        }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      
    </section>
    
  );
}

