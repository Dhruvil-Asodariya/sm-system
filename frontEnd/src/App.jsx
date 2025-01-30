// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MasterPage from "./MasterPage";
import Student from "./pages/Student";
import Login from "./pages/Login";
import Teacher from "./pages/Teacher";
import AddStudent from "./pages/AddStudent";
import AddTeacher from "./pages/AddTeacher";
import Parent from "./pages/Parent";
import AddParent from "./pages/AddParent";
import Class from "./pages/Class";
import Subject from "./pages/Subject";
import Dashboard from "./pages/Dashboard";
import AdminProfile from "./pages/AdminProfile";
import ChangePassword from "./pages/ChangePassword";
import Course from "./pages/Course";
import Material from "./pages/Material";
import StudentProfile from "./pages/StudentProfile";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Wrap routes with MasterPage */}
        <Route path="/" element={ <Login /> } />
        <Route path="/logout" element={ <Login /> } />
        <Route path="/dashboard" element={ <MasterPage><Dashboard /></MasterPage> }/>
        <Route path="/student" element={ <MasterPage><Student /></MasterPage> }/>
        <Route path="/add_student" element={ <MasterPage><AddStudent /></MasterPage> }/>
        <Route path="/teacher" element={ <MasterPage><Teacher /></MasterPage> }/>
        <Route path="/add_teacher" element={ <MasterPage><AddTeacher /></MasterPage> }/>
        <Route path="/parent" element={ <MasterPage><Parent /></MasterPage> }/>
        <Route path="/add_parent" element={ <MasterPage><AddParent /></MasterPage> }/>
        <Route path="/class" element={ <MasterPage><Class /></MasterPage> }/>
        <Route path="/subject" element={ <MasterPage><Subject /></MasterPage> }/>
        <Route path="/admin_profile" element={ <MasterPage><AdminProfile /></MasterPage> }/>
        <Route path="/change_password" element={ <MasterPage><ChangePassword /></MasterPage> }/>
        <Route path="/course" element={ <MasterPage><Course /></MasterPage> }/>
        <Route path="/material" element={ <MasterPage><Material /></MasterPage> }/>
        <Route path="/student_profile" element={ <MasterPage><StudentProfile /></MasterPage> }/>
      </Routes>
    </Router>
  );
};

export default App;
