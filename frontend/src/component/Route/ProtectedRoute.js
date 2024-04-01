import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Route, Navigate, Routes } from 'react-router-dom';
import LoginSignUp from '../User/LoginSignUp';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const { loading, isAuthenticated } = useSelector((state) => state.user);

    return (
        <Fragment>
            { loading===false && (
                <Routes>
                    <Route
                    {...rest}
                    element={
                            isAuthenticated===false ?  <Navigate to="/login" />: <Component {...rest} /> 
                    }
                    />
                </Routes>
            )}
        </Fragment>
    );
};

export default ProtectedRoute;
