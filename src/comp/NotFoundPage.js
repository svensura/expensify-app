import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = props => (
    <div>
        <p>This. Is. 404.</p>
        <Link to="/">Home</Link>
    </div>
);

export default NotFoundPage;