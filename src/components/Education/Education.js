import s from './Education.module.css';

function Education() {
  return (
    <>
      <p className={s.university}>Vasyl Stefanyk Precarpathian National University
</p>
      <p className={s.education}>Faculty of Mathematics and Computer Science</p>
      <span className={s.time}>
        Septermber 2007 - June 2012
        <span className={s.divider}> |</span> Ukraine
      </span>
    </>
  );
}

export default Education;
