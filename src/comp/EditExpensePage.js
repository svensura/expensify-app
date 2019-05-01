import React from 'react';
import { connect } from 'react-redux';

import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.onClick = this.onClick.bind(this);
    }
    onClick() {
        this.props.removeExpense({ id: this.props.expense.id })
        this.props.history.push('/');
    }
    onSubmit(expense) {
        this.props.editExpense(this.props.expense.id, expense)
        this.props.history.push('/');
    }
    render() {
        return (
            <div>
                <ExpenseForm
                    onSubmit={this.onSubmit}
                    expense={this.props.expense}
                />
                <button
                    onClick={this.onClick}
                >
                    Remove Expense
                </button>
            </div>
        );
    }
};

/*
const EditExpensePage = props => {
    return (
        <div>
            <ExpenseForm
                onSubmit={expense => {
                    console.log('updated', expense);
                    props.dispatch(editExpense(props.expense.id, expense));
                    props.history.push('/');
                }}
                expense={props.expense}
            />
            <button
                onClick={() => {
                    props.dispatch(removeExpense({ id: props.expense.id }));
                    props.history.push('/');
                }}
            >
                Remove Expense
            </button>
        </div>
    );
};
*/

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find(expense => expense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
    editExpense: (id, expense) => dispatch(editExpense(id, expense)),
    removeExpense: arg => dispatch(removeExpense(arg))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);