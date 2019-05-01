import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses'


export const ExpenseList = (props) => (   // export to test the unconnected method
    <div>
        {
            props.expenses.length === 0 ? (
                <p>No expenses</p>
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
)

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseList)
