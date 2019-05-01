import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AddExpensePage from '../comp/AddExpensePage';
import DashboardPage from '../comp/DashboardPage';
import EditExpensePage from '../comp/EditExpensePage';
import Header from '../comp/Header';
import HelpPage from '../comp/HelpPage';
import NotFoundPage from '../comp/NotFoundPage';

const AppRouter = props => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={DashboardPage} exact={true}/>
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit/:id" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;