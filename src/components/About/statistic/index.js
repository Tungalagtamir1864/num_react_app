import React from 'react';
import css from './style.module.css';


const Statistic = () => {
  const icons = [
    { count: '350+', label: 'Багш, ажилтан' },
    { count: '1200+', label: 'Сурагч' },
    { count: '10+', label: 'Мэргэжил' },
    { count: '1+', label: 'Номын сан' },
  ];

  return (

    
      <section className={css.about}>
        <div className={css.content}>
          
          <div className={css.icons_container}>
            {icons.map((icon, index) => (
              <div className={css.icons} key={index}>
                <h3>{icon.count}</h3>
                <span>{icon.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    
  );
};

export default Statistic;
