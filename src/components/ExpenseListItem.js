import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment'
import numeral from 'numeraljs'




const ExpenseListItem = (props) => (  
    <div>
        <Link to={`/edit/${props.id}`}>
            <h3>
                {props.description}
            </h3>
        </Link>
        <p>
            {numeral(props.amount / 100).format('$0.0,')} - {moment(props.createdAt).format('DD MMMM YYYY')}
        </p>

    </div>
)


export default ExpenseListItem;