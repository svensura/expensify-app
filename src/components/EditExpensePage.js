import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses'

// const EditExpensedPage = (props) => {
//     console.log(props);
//     return (
//         <div>
//         <ExpenseForm
//             expense={props.expense} 
//             onSubmit={(expense) => {
//             props.dispatch(editExpense(props.expense.id, expense))
//             props.history.push('/')
//             }}
//         />
//         <button onClick={() => {
//             console.log(props.expense.id)
//             props.dispatch(removeExpense(props.expense.id))
//             props.history.push('/')
//             }}>
//             Remove
//         </button>    
//         </div>
//     );
// };

export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.startEditExpense(this.props.expense.id, expense)
        this.props.history.push('/')
    }
    onClick = () => {
        this.props.startRemoveExpense(this.props.expense.id)
        this.props.history.push('/')
    }
    render() {
        return (
            <div>
                <div className="page-header"> 
                    <div className="content-container">
                        <h1 className="page-header__title">Ausgabe bearbeiten</h1>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm
                    expense={this.props.expense}
                    onSubmit = {this.onSubmit}
                />
                <button
                    className="button--secondary"
                    onClick = {this.onClick}
                >Ausgabe entfernen
                </button>      
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => (
    {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    }
)

const mapDispatchToProps = (dispatch, props) => ({
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
    startRemoveExpense: (id) => dispatch(startRemoveExpense(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);