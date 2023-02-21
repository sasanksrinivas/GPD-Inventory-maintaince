import React from 'react'
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import AddAsset from './AssetsManagement/AddAsset';
import AproveAssets from './AssetsManagement/AproveAssets';
import AdminLogin from './Auth/admin/AdminLogin';
import Register from './Auth/faculty/Register';
import Profile from './common/Profile';
import Login from './Auth/user/Login';
import Signup from './Auth/user/Register'
import AdminDash from './Dashboard/AdminDash';
import FacultyDash from './Dashboard/FacultyDash';
import StudentDash from './Dashboard/StudentDash';
import Landing from './Landing';
import Request from './common/Request';
import MyAssets from './common/MyAssets';
import ProtectedRoute from './ProtectedRoute';
import AssetDetails from './AssetsManagement/AssetDetails';
import EditAsset from './AssetsManagement/EditAsset';
import AssetsHistory from './AssetsManagement/AssetsHistory';
import ReturnAssets from './AssetsManagement/ReturnAssets';
import CheckHistory from './AssetsManagement/CheckHistory';

function Approutes() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Landing />}></Route>
          <Route path='/login' element={<Login />}></Route>

          {/* admin routes */}
          <Route path='/admin/dashboard' element={<ProtectedRoute role="ADMIN" />}>
            <Route path="/admin/dashboard" element={<AdminDash />}></Route>
          </Route>
          <Route path='/admin/asset/details/:assetName' element={<ProtectedRoute role="ADMIN" />}>
            <Route path="/admin/asset/details/:assetName" element={<AssetDetails />}></Route>
          </Route>
          <Route path='/adminlogin' element={<AdminLogin />}></Route>
          <Route path='/admin/assets/add/:name' element={<ProtectedRoute role="ADMIN" />}>
            <Route path='/admin/assets/add/:name' element={<AddAsset />}></Route>
          </Route>
          <Route path='/admin/assets/edit/:name/:id' element={<ProtectedRoute role="ADMIN" />}>
            <Route path='/admin/assets/edit/:name/:id' element={<EditAsset />}></Route>
          </Route>
          <Route path='/assets/requests' element={<ProtectedRoute role="ADMIN" />}>
            <Route path='/assets/requests' element={<AproveAssets />}></Route>
          </Route>
          <Route path='/assets/history' element={<ProtectedRoute role="ADMIN" />}>
            <Route path='/assets/history' element={<AssetsHistory />}></Route>
          </Route>
          
          <Route path='/assets/returns' element={<ProtectedRoute role="ADMIN" />}>
            <Route path='/assets/returns' element={<ReturnAssets />}></Route>
          </Route>

          <Route path='/history/assets/:id' element={<ProtectedRoute role="ADMIN" />}>
            <Route path='/history/assets/:id' element={<CheckHistory />}></Route>
          </Route>

          {/* faculty routes */}
          <Route path='/faculty/dashboard' element={<ProtectedRoute role="FACULTY" />}>
            <Route path='/faculty/dashboard' element={<FacultyDash />}></Route>
          </Route>
          <Route path='/faculty/signup' element={<Register />}></Route>

          {/* studnts routes */}
          <Route path='/student/dashboard' element={<ProtectedRoute role="STUDENT" />}>
            <Route path='/student/dashboard' element={<StudentDash />}></Route>
          </Route>
          <Route path='/student/signup' element={<Signup />}></Route>

          {/* common Routes */}
          <Route path='/assets/request/:assetName' element={<Request />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
          <Route path='/my-assets' element={<MyAssets />}></Route>

          <Route
            path="*"
            element={<Navigate to="/" replace />}
          />
        </Routes>
      </Router>
    </>
  )
}

export default Approutes