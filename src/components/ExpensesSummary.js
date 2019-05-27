import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import selectExpenses from '../selectors/expenses'
import selectExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeraljs'


export const ExpensesSummary = (props) => {      // export to test the unconnected method
    return (
    <div className="page-header"> 
        <div className="content-container">
            <h1 className="page-header__title">
            <span>{props.expenseCount}</span> Ausgabe(n) insgesamt <span>{numeral(props.expensesTotal / 100).format('€0.0,')}</span>
            </h1>
            <div className="page-header__actions">
                <Link className="button" to="/create">Ausgabe hinzufügen</Link>
            </div>
        </div>    
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
