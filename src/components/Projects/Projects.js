import s from './Projects.module.css';

function Projects({ label, link, tech, text }) {
  return (
    <li className={s.item}>
      <div className={s.flex}>
        <a className={s.link} href={link} target="_blank" rel="noreferrer">
          {label}
        </a>
        <span>
          <b>[</b> <span className={s.name}>{tech}</span> <b>]</b>
        </span>
        <p className={s.text}>{text}</p>
      </div>
    </li>
  );
}

export default Projects;
