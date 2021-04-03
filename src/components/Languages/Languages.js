import s from './Languages.module.css';

function Languages({ label }) {
  return (
    <li className={s.item}>
      <span className={s.text}>{label}</span>
    </li>
  );
}

export default Languages;
