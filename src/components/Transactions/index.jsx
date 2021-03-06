import React from "react";
import PropTypes from "prop-types";
import './index.css';


const TransactionHistory = ({ items }) => (
    <table className="transaction-history">
        <thead>
            <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
            </tr>
        </thead>
        {items.map(({ id, type, amount, currency }) => (
            <tbody key={id}>
                <tr>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
                </tr>
            </tbody>
        ))}
    </table>
)

TransactionHistory.defaultProps = {
    type: "Unknown",
    amount: "0",
    currency: "Unknown",
};

TransactionHistory.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    id: PropTypes.string,
};

export default TransactionHistory;