import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

import 'normalize.css/normalize.css';

import './css/scss.scss';

const DashboardPage = props => (
    <p>This. Is. Some. J! S! X!</p>
);

const AddExpensePage = props => (
    <p>This. Is. Add. Expense. Page.</p>
);

const EditExpensePage = props => (
    <p>This. Is. Edit. Expense. Page.</p>
);

const HelpPage = props => (
    <p>This. Is. Help. Page.</p>
);

const NotFoundPage = props => (
    <div>
        <p>This. Is. 404.</p>
        <Link to="/">Home</Link>
    </div>
);

const Header = () => (
    <header>
        <h1>Expense App</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active">Add Expense</NavLink>
        <NavLink to="/edit" activeClassName="is-active">Edit Expense</NavLink>
        <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    </header>
);  

const routes = (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={DashboardPage} exact={true}/>
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));