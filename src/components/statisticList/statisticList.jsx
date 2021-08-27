import PropTypes from 'prop-types';

import style from './statisticList.module.css';

function StatisticList({ items, title }) {
  return (
    <section className="statistics">
      <div className={style.conteiner}>
        {title ? <h2 className={style.title}>{title}</h2> : ''}
        <ul className={style.statList}>
          {items.map(function (item) {
            return (
              <li key={item.id} className={style.statListItem}>
                <span className="label">{item.label}</span>
                <span className="percentage">{item.percentage}%</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

StatisticList.propTypes = {
  items: PropTypes.object.isRequired,
  titel: PropTypes.string,
};

export default StatisticList;
