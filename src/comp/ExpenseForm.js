import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: !!props.expense ? props.expense.description : '',
            note: !!props.expense ? props.expense.note : '',
            amount: !!props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: !!props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: ''
        };
        this.onAmountChange = this.onAmountChange.bind(this);
        this.onDateChange = this.onDateChange.bind(this);
        this.onDescriptionChange = this.onDescriptionChange.bind(this);
        this.onFocusChange = this.onFocusChange.bind(this);
        this.onNoteChange = this.onNoteChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onAmountChange(e) {
        const amount = e.target.value;

        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({
                amount
            }));
        };
    }
    onDateChange(createdAt) {
        if (createdAt) {
            this.setState(() => ({
                createdAt
            }));
        };
    }
    onDescriptionChange(e) {
        const description = e.target.value;

        this.setState(() => ({
            description
        }));
    }
    onFocusChange({ focused }) {
        this.setState(() => ({
            calendarFocused: focused
        }));
    }
    onNoteChange(e) {
        const note = e.target.value;

        this.setState(() => ({
            note
        }));
    }
    onSubmit(e) {
        e.preventDefault();

        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({
                error: 'Error.'
            }));
        } else {
            this.setState(() => ({
                error: ''
            }));

            this.props.onSubmit({
                description: this.state.description,
                note: this.state.note,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf()
            });
        };
    }
    render() {
        return (
            <div>
                {!!this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input
                        onChange={this.onDescriptionChange}
                        type="text"
                        placeholder="Description"
                        value={this.state.description}
                        autoFocus                    
                    />
                    <input
                        onChange={this.onAmountChange}
                        type="text"
                        placeholder="Amount"
                        value={this.state.amount}
                    />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <textarea
                        onChange={this.onNoteChange}
                        placeholder="Describe Your Expense In Detail Here"
                        value={this.state.note}
                    >
                    </textarea>
                    <button>{!!this.props.expense ? 'Edit Expense' : 'Add Expense'}</button>
                </form>
            </div>
        );
    }
};