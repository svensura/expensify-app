import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses'

// const AddExpensedPage = (props) => (
//     <div>
//         <h1>Add Expense</h1>
//         <ExpenseForm
//             onSubmit={(expense) => {
//             props.dispatch(addExpense(expense))
//             props.history.push('/')
//         }}
//         />
//     </div>
// );

// export default connect()(AddExpensedPage);

export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.startAddExpense(expense)
        this.props.history.push('/')
    }
    render() {
        return (
            <div>
                <div className="page-header"> 
                    <div className="content-container">
                        <h1 className="page-header__title">Add Expense</h1>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm
                        onSubmit = {this.onSubmit}
                    />
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => ({
    startAddExpense: (expense) => dispatch(startAddExpense(expense))
})

export default connect(undefined, mapDispatchToProps)(AddExpensePage);

