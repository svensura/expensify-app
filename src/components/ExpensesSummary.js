import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses'
import selectExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeraljs'


export const ExpensesSummary = (props) => {      // export to test the unconnected method
    return (
    <div>
        <h1>
           Viewing {props.expenseCount} expense(s) totalling {numeral(props.expensesTotal / 100).format('$0.0,')}
        </h1>
    </div>
    )
}

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters)
    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses)
    }
}

export default connect(mapStateToProps)(ExpensesSummary)
