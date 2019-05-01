import React from 'react';

import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';

import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';

export class ExpenseListFilters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            calendarFocused: null
        };
        this.onDatesChange = this.onDatesChange.bind(this);
        this.onFocusChange = this.onFocusChange.bind(this);
        this.onSortChange = this.onSortChange.bind(this);
        this.onTextChange = this.onTextChange.bind(this);
    }
    onDatesChange({ startDate, endDate }) {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    }
    onFocusChange(calendarFocused) {
        this.setState(() => ({
            calendarFocused
        }));
    }
    onSortChange(e) {
        e.target.value === 'date'
            ? this.props.sortByDate()
            : this.props.sortByAmount()
    }
    onTextChange(e) {
        this.props.setTextFilter(e.target.value);
    }
    render() {
        return (
            <div>
                <input
                    onChange={this.onTextChange}
                    type="text"
                    value={this.props.filters.text}
                />
                <select
                    onChange={this.onSortChange}
                    value={this.props.filters.sortBy}
                >
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker
                    onDatesChange={this.onDatesChange}
                    onFocusChange={this.onFocusChange}
                    startDate={this.props.filters.startDate}
                    startDateId={!!this.props.filters.startDate ? this.props.filters.startDate.toString() : 'none'}
                    endDate={this.props.filters.endDate}
                    endDateId={!!this.props.filters.endDate ? this.props.filters.endDate.toString() : 'none'}
                    focusedInput={this.state.calendarFocused}
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
            </div>
        );
    }
};

const mapStateToProps = state => ({
    filters: state.filters
});

const mapDispatchToProps = dispatch => ({
    setTextFilter: text => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setStartDate: startDate => dispatch(setStartDate(startDate)),
    setEndDate: endDate => dispatch(setEndDate(endDate))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);