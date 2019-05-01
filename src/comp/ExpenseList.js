import React from 'react';
import { connect } from 'react-redux';

import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

// pre-refactoring

/*
const ExpenseList = props => (
    <div>
        <h1>Expense List</h1>
        {
            props.expenses.map((expense, index) => {
                return (
                    <ExpenseListItem
                        key={index}
                        description={expense.description}
                        amount={expense.amount}
                        createdAt={expense.createdAt}
                    />
                )
            })
        }
    </div>
);
*/

// refactoring step II

export const ExpenseList = props => (
    <div>
        {
            props.expenses.length === 0 ? (
                <p>No expenses.</p>
            ) : (
                props.expenses.map((expense, index) => {
                    return (
                        <ExpenseListItem
                            key={expense.id}
                            {...expense}
                        />
                    )
                })              
            )
        }

    </div>
);

// pre-refactoring

/*
const ConnectedExpenseList = connect(state => {
    return {
        expenses: state.expenses
    };
})(ExpenseList);

export default ConnectedExpenseList;
*/

// refactoring step I

/*
export default connect(state => {
    return {
        expenses: state.expenses
    };
})(ExpenseList);
*/

// refactoring step II

const mapStateToProps = state => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList);