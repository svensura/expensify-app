import React from 'react';
import { Link } from 'react-router-dom';

// pre-refactoring

/*
const ExpenseListItem = props => (
    <div>
        <p>{props.description}</p>
        <p>{props.amount}</p>
        <p>{props.createdAt}</p>
    </div>
);
*/

// refactoring step I

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
    <div>
        <Link
            to={`/edit/${id}`}
        >
            <h3>{description}</h3>
        </Link>
        <p>{amount}</p>
        <p>{createdAt}</p>
    </div>
);

export default ExpenseListItem;