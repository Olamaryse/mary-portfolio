import styles from "./ProjectsStyles.module.css";
import poke from "../../assets/venusaur.avif";
import newscatcher from "../../assets/news.jpg";
import fitLift from "../../assets/fitlift.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={poke}
          link="https://github.com/Olamaryse/appquiz.git/ "
          h3="PokeMemory"
          p="Memory Game"
        />
        <ProjectCard
          src={newscatcher}
          link="https://github.com/Olamaryse/News-Catcher/"
          h3="News Catchter"
          p="News Outlet"
        />

        <ProjectCard
          src={fitLift}
          link="https://github.com/Olamaryse/exercise-app.git/"
          h3="FitLift"
          p="Fitness App"
        />
      </div>
    </section>
  );
}

export default Projects;
