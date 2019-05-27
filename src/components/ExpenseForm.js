import React from 'react';
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'


const now = moment();

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            description: props.expense ? props.expense.description : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            note: props.expense ? props.expense.note : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: false
        }
    }

    onDescriptionChange = (e) => {
        const description = e.target.value
        this.setState(() => ({ description }))
    }

    onAmountChange = (e) => {
        const amount = e.target.value
        if(!amount || (amount.match(/^\d{1,}(\.\d{0,2})?€/))) {  //regex
            this.setState(() => ({ amount }))
        }
    }

    onNoteChange = (e) => {
        const note = e.target.value
        this.setState(() => ({ note }))
    }

    onDateChange = (createdAt) => {
        if (createdAt){
            this.setState(() => ({ createdAt }))
        }
    }

    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }))
    }


    onSubmit = (e) => {
        e.preventDefault()
        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({ error: true }))
        } else {
            this.setState(() => ({ error: false }))
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                note: this.state.note,
                createdAt: this.state.createdAt.valueOf()
            })
        }
    }

    render() {
        return ( 
            <form className="form" onSubmit={this.onSubmit}>
            {this.state.error&&<p className="form__error">Beschreibung und Wert eingeben!</p>}
                <input
                    type="text"
                    placeholder="Description"
                    autoFocus
                    className="text-input"
                    value={this.state.description}
                    onChange={this.onDescriptionChange}
                />
                <input
                type="text"
                placeholder="Amount"
                className="text-input"
                value={this.state.amount}
                onChange={this.onAmountChange}
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
                    placeholder="Add a note for your expense (optional)"
                    className="textarea"
                    value={this.state.note}
                    onChange={this.onNoteChange}
                >
                </textarea>
                <div> 
                    <button className="button">Ausgabe speichern</button>  
                </div>
            </form>
        )
    }
}