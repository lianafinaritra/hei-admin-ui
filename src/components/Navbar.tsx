import React from "react";
import {useNavigate} from "react-router-dom";

const Navbar: React.FC<any> = (props) => {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    const navigate = useNavigate();
    return (
        <nav
            className={
                (props.transparent
                    ? "top-0 absolute z-50 w-full"
                    : "relative shadow-lg bg-white shadow-lg") +
                " flex flex-wrap items-center justify-between px-2 py-3 "
            }
        >
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                    <button
                        className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                        type="button"
                        onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                        <i
                            className={
                                (props.transparent ? "text-white" : "text-gray-800") +
                                " fas fa-bars"
                            }
                        ></i>
                    </button>
                </div>
                <div
                    className={
                        "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" +
                        (navbarOpen ? " block rounded shadow-lg" : " hidden")
                    }
                    id="example-navbar-warning"
                >
                    <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                        <li className="flex items-center">
                            <button
                                className={
                                    (props.transparent
                                        ? "bg-white text-gray-800 active:bg-gray-100"
                                        : "bg-pink-500 text-white active:bg-pink-600") +
                                    " text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
                                }
                                type="button"
                                style={{ transition: "all .15s ease" }}
                                onClick={() => navigate("/")}
                            >
                                <i className="fas fa-arrow-alt-circle-down"></i> Se Déconnecter
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar