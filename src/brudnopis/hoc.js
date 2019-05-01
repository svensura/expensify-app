import React from 'react';
import ReactDOM from 'react-dom';

/*

const Info = props => (
    <div>
        <p>This. Is. Some. {props.info}</p>
    </div>
);


const withAdminWarning = WrappedComponent => {
    return props => (
        <div>
            {!!props.isAdmin && <p>This info is private! Please don't share it!</p>}
            <WrappedComponent {...props} />
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="J! S! X!" />, document.getElementById('app'));

*/

//

const Info = props => (
    <div>
        <p>This. Is. Some. {props.info}</p>
    </div>
);

const requireAuthentication = WrappedComponent => {
    return props => (
        <div>
            {!!props.isAuthenticated ? (
                <WrappedComponent {...props} />
            ) : (
                <p>Please log in to see the info</p>
            )}
        </div>
    );
};

const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated={true} info="J! S! X!" />, document.getElementById('app'));