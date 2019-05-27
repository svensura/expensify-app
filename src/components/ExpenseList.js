import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses'


export const ExpenseList = (props) => (   // export to test the unconnected method
    <div className="content-container">
        <div className="list-header">
            <div className="show-for-mobile">Ausgaben</div>
            <div className="show-for-desktop">Ausgabe</div>
            <div className="show-for-desktop">Betrag</div>
        </div>
        <div className="list-body">
        {
            props.expenses.length === 0 ? (
                <div className="list-item--message"><span>Keine Ausgaben</span></div>
            ) : (
                props.expenses.map((expense) => (
                    <ExpenseListItem
                        key = {expense.id}
                        id = {expense.id}
                        description={expense.description} 
                        amount={expense.amount} 
                        createdAt ={expense.createdAt}
                    />
                    )
                )
            

            )
        }
        </div>
    </div>
)

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseList)
