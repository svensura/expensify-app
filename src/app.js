import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './router/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { editTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import 'normalize.css/normalize.css';
import './scss/scss.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));