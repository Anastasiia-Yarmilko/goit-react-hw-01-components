import React from "react";
import PropTypes from "prop-types";
import './index.css';


const Statistics = ({ title, children, stats }) => {
    return (
    <section className="statistics">
            {title && <h2 className="title"> {title}</h2>}
            {children}
        <ul className="stat-list">
            {stats.map(({ id, label, percentage }) => (
                <li className="item" key={id}>
                    <span className="label">{label}</span>
                    <span className="percentage">{percentage}%</span>
                </li>
            ))}
        </ul>
        </section>
    )
};
    
Statistics.defaultProps = {
  title: 'Upload stats',
};

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number,
};

export default Statistics;