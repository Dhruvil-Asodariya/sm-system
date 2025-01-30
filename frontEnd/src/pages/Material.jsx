import { Link } from "react-router-dom"
import { FiDownload } from "react-icons/fi";

const Material = () => {
    return (
        <>
            <div>
                <div className="inline material-div">
                    <div className="main-div">
                        <div className="material-sub-div-1">
                            <img className="material-img" src="21421.jpg" alt="" />
                        </div>
                        <div className="material-sub-div-2">
                            <span className="material-title">React Ch-01.pdf</span>
                            <Link className="link-title" to={"/material"}>
                                <FiDownload />
                            </Link>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}

export default Material;