import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

// export const PublicRoute = ({isAuthenticated, component: Component, ...rest}) => (
//     <Route {...rest} component={(props) => (
//         isAuthenticated ? (
//             <div>
//             <Header />   
//             <Component {...props} />
//             </div>
//         ) : (
//              <Redirect to="/dashboard" />
//         )
//     )} />
           
// )

export const PublicRoute = ({isAuthenticated, component: Component, ...rest}) => (
    <Route {...rest} component={(props) => (
        !isAuthenticated ? (
            <Component {...props} />
        ) : (
            <Redirect to="/dashboard" />
        )
    )} />
           
)

const mapStateToProps = (state) => ({
   isAuthenticated: !!state.auth.uid         //makes it to a boolean
})

export default connect(mapStateToProps)(PublicRoute)
