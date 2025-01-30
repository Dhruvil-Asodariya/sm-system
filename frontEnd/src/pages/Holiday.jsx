import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { LuPlus } from "react-icons/lu";
const Holiday = () => {
    
    const role = sessionStorage.getItem('role');

    if(role == "Admin")
    {
        return (
            <>
                <Link className="dropdown-link-li" to="/add_holiday">
                    <button className="btn btn-color add-student-btn"><LuPlus /> Add Holiday</button>
                </Link>
                <div className="main-div">
                    <div className="inline first-div">
                        <div className="sub-first-div">
                            <label htmlFor="inputEmail4" className="first-div-title"><b>Months</b></label><hr />
                            <ul className="list-group text-start">
                                <button type="button" className="month list-group-item list-group-item-action">January</button>
                                <button type="button" className="month list-group-item list-group-item-action">February</button>
                                <button type="button" className="month list-group-item list-group-item-action">March</button>
                                <button type="button" className="month list-group-item list-group-item-action">April</button>
                                <button type="button" className="month list-group-item list-group-item-action">May</button>
                                <button type="button" className="month list-group-item list-group-item-action">June</button>
                                <button type="button" className="month list-group-item list-group-item-action">July</button>
                                <button type="button" className="month list-group-item list-group-item-action">August</button>
                                <button type="button" className="month list-group-item list-group-item-action">September</button>
                                <button type="button" className="month list-group-item list-group-item-action">October</button>
                                <button type="button" className="month list-group-item list-group-item-action">November</button>
                                <button type="button" className="month list-group-item list-group-item-action">December</button>
                            </ul>
    
                        </div>
                    </div>
                    <div className="inline second-div">
                        <div className="table-responsive sub-second-div">
                            <table className="table table-striped table-bordered">
                                <thead className="table-primary">
                                    <tr>
                                        <th scope="col">Sr No.</th>
                                        <th scope="col">Holiday Name</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td scope="row">1</td>
                                        <td scope="row">Makarsankrati</td>
                                        <td scope="row">14-01-2025</td>
                                        <td scope="row">
                                            <Link>
                                                <button className="btn btn-color action-btn"><FaEdit /></button>
                                            </Link>
                                            <Link>
                                                <button className="btn btn-color"><MdDelete /></button>
                                            </Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </>
        );
    }else if(role == "Student"){
        return (
            <>
                <div className="main-div">
                    <div className="inline first-div">
                        <div className="sub-first-div">
                            <label htmlFor="inputEmail4" className="first-div-title"><b>Months</b></label><hr />
                            <ul className="list-group text-start">
                                <button type="button" className="month list-group-item list-group-item-action">January</button>
                                <button type="button" className="month list-group-item list-group-item-action">February</button>
                                <button type="button" className="month list-group-item list-group-item-action">March</button>
                                <button type="button" className="month list-group-item list-group-item-action">April</button>
                                <button type="button" className="month list-group-item list-group-item-action">May</button>
                                <button type="button" className="month list-group-item list-group-item-action">June</button>
                                <button type="button" className="month list-group-item list-group-item-action">July</button>
                                <button type="button" className="month list-group-item list-group-item-action">August</button>
                                <button type="button" className="month list-group-item list-group-item-action">September</button>
                                <button type="button" className="month list-group-item list-group-item-action">October</button>
                                <button type="button" className="month list-group-item list-group-item-action">November</button>
                                <button type="button" className="month list-group-item list-group-item-action">December</button>
                            </ul>
    
                        </div>
                    </div>
                    <div className="inline second-div">
                        <div className="table-responsive sub-second-div">
                            <table className="table table-striped table-bordered">
                                <thead className="table-primary">
                                    <tr>
                                        <th scope="col">Sr No.</th>
                                        <th scope="col">Holiday Name</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td scope="row">1</td>
                                        <td scope="row">Makarsankrati</td>
                                        <td scope="row">14-01-2025</td>
                                        <td scope="row">
                                            <Link>
                                                <button className="btn btn-color action-btn"><FaEdit /></button>
                                            </Link>
                                            <Link>
                                                <button className="btn btn-color"><MdDelete /></button>
                                            </Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default Holiday;
