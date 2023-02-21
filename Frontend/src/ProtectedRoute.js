import React, { useEffect } from "react";
import { useContext } from "react";
import useAuth from "./UseAuth";
import { Navigate, Outlet } from 'react-router-dom';

// We are taking in the component that should be rendered if the user is authed
// We are also passing the rest of the props to the <Route /> component such as
// exact & the path
const ProtectedRoute = ({  role, ...rest }) => {
   // Getting the value from our cool custom hook
   const { authed } = useContext(useAuth);
   const checkPermission = (role) => {
    return role==authed.role?true:false;
   }
   return checkPermission(role) ? <Outlet /> : <Navigate to="/" />;

};

export default ProtectedRoute;