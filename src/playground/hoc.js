// Highr Order Component - A component (HOC) that renders another component

import React from 'react';
import ReactDOM from 'react-dom';


// const Info = (props) => (
//     <div>
//         <h1>Info</h1>
//         <p>The info is: {props.info}</p>
//     </div>
// )

// const withAdminWarning = (WrappedComponent) => {
//     return (props) => (
//         <div>
//         {props.isAdmin && <p>This is private:</p>}
//         <WrappedComponent {...props}/>
//     </div>
//     )
// }

// const AdminInfo = withAdminWarning(Info)
// ReactDOM.render(<AdminInfo isAdmin={true} info="There are the details" />, document.getElementById('app'));

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
)

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
        {props.isAuthenticated ? <WrappedComponent {...props}/> : <p>You must login first</p>}
        </div>
    )
}

const AuthInfo = requireAuthentication(Info)

ReactDOM.render(<AuthInfo isAuthenticated={false} info="There are the details" />, document.getElementById('app'));