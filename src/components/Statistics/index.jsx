import React from "react";
import PropTypes from "prop-types";
import './index.css';


const Statistics = ({ data }) => (
    <section className="statistics">
        <h2 className="title">Upload stats</h2>

        <ul className="stat-list">
            {data.map(({ id, label, percentage }) => (
                <li className="item" key={id}>
                    <span className="label">{label}</span>
                    <span className="percentage">{percentage}</span>
                 </li>
            ))}
        </ul>
    </section>
);

Statistics.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
};

export default Statistics;