import s from './Statistics.module.css';
import PropTypes from 'prop-types';
import getRandomColor from './getRandomColor';
// import data from './data.json';

const Statistics = ({ title, stats }) => {
  return (
    <section className={s.statistics}>
      <div>{title && <h2 className={s.title}>{title}</h2>}</div>

      <ul className={s.list}>
        {stats.map(({ id, label, percentage }) => (
          <li
            className={s.item}
            key={id}
            style={{ backgroundColor: getRandomColor() }}
          >
            <span className={s.label}>{label}</span>
            <span className={s.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};

export default Statistics;
