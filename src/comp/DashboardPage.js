import React from 'react';

import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const DashboardPage = props => (
    <div>
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);

export default DashboardPage;