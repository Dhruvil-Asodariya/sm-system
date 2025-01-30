// import { useState } from 'react';
import { LuPlus } from "react-icons/lu";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Teacher = () => {
    return (
        <>
            <Link className="dropdown-link-li" to="/add_teacher">
                <button className="btn btn-color add-student-btn"><LuPlus /> Add Teacher</button>
            </Link>
            <div className="">

                <div className="table-responsive">
                    <table className="table table-striped table-bordered">
                        <thead className="table-primary">
                            <tr>
                                <th scope="col">Sr.No</th>
                                <th scope="col">Profile</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Gender</th>
                                <th scope="col">Age</th>
                                <th scope="col">DOB</th>
                                <th scope="col">Phone No.</th>
                                <th scope="col">Qualification</th>
                                <th scope="col">Subjects</th>
                                <th scope="col">Address</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td scope="row">1</td>
                                <td scope="row"><img src="21421.jpg" className="profile_img"/></td>
                                <td scope="row">John</td>
                                <td scope="row">Doe</td>
                                <td scope="row">johndoe@example.com</td>
                                <td scope="row">Male</td>
                                <td scope="row">20</td>
                                <td scope="row">1990-05-15</td>
                                <td scope="row">1234567890</td>
                                <td scope="row">B-tech</td>
                                <td scope="row">React JS</td>
                                <td scope="row">123 Main St, City, State, ZIP</td>
                                <td scope="row">
                                    <Link>
                                        <button className="btn btn-color action-btn"><FaEdit /></button>
                                    </Link>
                                    <Link>
                                        <button className="btn btn-color action-btn"><MdDelete /></button>
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Teacher;
