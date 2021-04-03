import Projects from '../Projects';
import Experience from '../Experience';
import Education from '../Education';
import PropTypes from 'prop-types';
import s from './AboutMe.module.css';

function AboutMe({ commandProjects, ownProjects, experience }) {
  return (
    <div className={s.container}>
      <div className={s.section}>
        <h2 className={s.profession}>Front-End Developer</h2>
        <h1 className={s.name}>Oksana Repchak</h1>
        <p className={s.description}>
          I’m looking for a job for the position of front-end developer. I want
          to be in a good team, where I could improve my skills and use them for
          interesting tasks. I am a fast learner and very responsible.
        </p>
      </div>
      <div className={s.section}>
        <h3 className={s.title}>Projects</h3>

        <h4 className={s.subTitle}>
          <span className={s.typeProject}>Own</span> projects
        </h4>
        <ol>
          {ownProjects.map(({ id, label, link, tech, text }) => (
            <Projects
              key={id}
              label={label}
              link={link}
              tech={tech}
              text={text}
            />
          ))}
        </ol>
        <h4 className={s.subTitle}>
          <span className={s.typeProject}>Command</span> projects
        </h4>
        <ol>
          {commandProjects.map(({ id, label, link, tech, text }) => (
            <Projects
              key={id}
              label={label}
              link={link}
              tech={tech}
              text={text}
            />
          ))}
        </ol>
      </div>
      <div className={s.section}>
        <h3 className={s.title}>Work Experience</h3>
        <ul>
          {experience.map(
            ({ id, profession, company, time, country, duties }) => (
              <Experience
                key={id}
                profession={profession}
                company={company}
                time={time}
                country={country}
                duties={duties}
              />
            ),
          )}
        </ul>
      </div>
      <div className={s.section}>
        <h3 className={s.title}>Education</h3>
        <Education />
      </div>
    </div>
  );
}

AboutMe.propTypes = {
  commandProjects: PropTypes.arrayOf(PropTypes.object),
  ownProjects: PropTypes.arrayOf(PropTypes.object),
  experience: PropTypes.arrayOf(PropTypes.object),
};

export default AboutMe;
