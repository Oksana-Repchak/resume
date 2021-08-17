import Projects from '../Projects';
import Experience from '../Experience';
import Education from '../Education';
import PropTypes from 'prop-types';
import s from './AboutMe.module.css';

function AboutMe({ commandProjects, ownProjects, experience, education }) {
  return (
    <div className={s.container}>
      <div className={s.section}>
        <h2 className={s.profession}>Front-End Developer</h2>
        <h1 className={s.name}>Oksana Repchak</h1>
        <p className={s.description}>
          I’m looking for interesting job as front-end developer in friendly,
          thriving, and exciting company to develop my skills as well as grove
          with a team. I am very responsible.
        </p>
      </div>
      <div className={s.section}>
        <h3 className={s.title}>Projects</h3>

        <h4 className={(s.subTitle, s.typeProject)}>Own projects</h4>
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
        <h4 className={(s.subTitle, s.typeProject)}>Command projects</h4>
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
        <ul>
          {education.map(({ id, university, label, time, experience }) => (
            <Education
              key={id}
              university={university}
              label={label}
              time={time}
              experience={experience}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

AboutMe.propTypes = {
  commandProjects: PropTypes.arrayOf(PropTypes.object),
  ownProjects: PropTypes.arrayOf(PropTypes.object),
  experience: PropTypes.arrayOf(PropTypes.object),
  education: PropTypes.arrayOf(PropTypes.object),
};

export default AboutMe;
