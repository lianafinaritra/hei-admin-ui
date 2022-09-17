import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import Category from "../types/Category";
import {data} from "autoprefixer";
import City from "../types/City";
import House from "../types/House";
import {storage} from "../firebase";
import {ref} from "firebase/storage";
import EventDashboard from "../components/EventDashboard";
import Event from "../types/Event";
import photo from '../logolfhei-removebg-preview.png';

const EventViewPage: React.FC = () => {
    const navigate = useNavigate();

    const [pageNumber, setPageNumber] = useState<number>(1);
    const [fakePage, setFakePage] = useState<number>(1);
    const [categoryData, setCategoryData] = useState<Category[]>([]);
    const [eventData, setEventData] = useState<any>([]);

    const Increment = () => {
        setPageNumber(pageNumber + 2)
        setFakePage(fakePage + 1)
    }

    const Decrement = () => {
        if (pageNumber > 1) {
            setPageNumber(pageNumber - 2)
            setFakePage(fakePage - 1)
        }
    }

    const imageListRef = ref(storage, "images/")
    const [ImageUpload, setImageUpload] = useState<any>(null);
    const [ImageList, setImageList] = useState<any>([]);
    const [url, setUrl] = useState<any>(null);

    useEffect(() => {
            const promise = axios.get("http://localhost:8080/events");
            promise.then((response) => {
                setEventData(response.data);
                console.log(categoryData)
            }).catch((err) => {
                console.log(err);
            })
        }, [eventData, setEventData, data]
    )

    const Mock: Event[] = [
        {
            id: "event1_id",
            type: "cours",
            place: "HEI Ivandry",
            startDateTime: "...",
            endDateTime: "...",
            responsible: "..."
        },
        {
            id: "event2_id",
            type: "cours",
            place: "HEI Ivandry",
            startDateTime: "...",
            endDateTime: "...",
            responsible: "..."
        },
    ]

    // @ts-ignore
    return (<>
        <nav className="bg-blue-800 mb-10">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

                        <button type="button"
                                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                aria-controls="mobile-menu" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>

                            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                            </svg>

                            <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                            <img className="hidden h-8 w-auto lg:block"
                                 src={photo}
                                 alt="Your Company"/>
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">

                                <p
                                   className="bg-yellow-300 text-white px-3 py-2 rounded-md text-sm font-medium"
                                   >Haute Ecole d'Informatique</p>

                            </div>
                        </div>
                    </div>
                    <div
                        className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <button type="button"
                                className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="sr-only">View notifications</span>

                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                      d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"/>
                            </svg>
                        </button>


                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">

                                <a href="#"
                                   className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                                   onClick={() => navigate("/")}
                                   aria-current="page">Se déconnecter</a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <div className="flex h-screen">
            <div className="w-1/4 bg-gray-200 rounded">
                <aside className="h-full" aria-label="Sidebar">
                    <div className="overflow-y-auto py-4 px-3 rounded dark:bg-gray-800">
                        <ul className="space-y-2">
                            <li>
                                <a href="#"
                                   className="flex  m-auto items-center p-1 mb-10 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                                   onClick={() => navigate("/Event")}>
                                    <svg aria-hidden="true"
                                         className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                         fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                                        <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                                    </svg>
                                    <span className="ml-10">Ajouter</span>
                                </a>
                            </li>
                            <li>
                                <a href="#"
                                   className="flex  m-auto items-center p-1 mb-10 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <svg aria-hidden="true"
                                         className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                         fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                                        <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                                    </svg>
                                    <span className="ml-10">Visio</span>
                                </a>
                            </li>
                            <li>
                                <a href="#"
                                   className="flex  m-auto items-center p-1 mb-10 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                                   onClick={() => navigate("/Presence")}>
                                    <svg aria-hidden="true"
                                         className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                         fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                                        <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                                    </svg>
                                    <span className="ml-10">Presence</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </aside>

            </div>
            <div className="inline-block w-full">
                <div className="mx-72 w-1/5 mb-5">
                    <form className="flex items-center">
                        <label htmlFor="simple-search" className="sr-only">Search</label>
                        <div className="relative w-full">
                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                     fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                          clip-rule="evenodd"></path>
                                </svg>
                            </div>
                            <input type="text" id="simple-search"
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                   placeholder="Search" required/>
                        </div>
                        <button type="submit"
                                className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                            <span className="sr-only">Search</span>
                        </button>
                    </form>
                </div>
                <div className="m-auto w-4/5">
                    <EventDashboard data={Mock}/>
                    <div className="flex mt-8">
                        <nav aria-label="Page navigation example">
                            <ul className="flex list-style-none">
                                <li className="page-item"><a
                                    className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 focus:shadow-none"
                                    href="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                </a></li>
                                <li className="page-item"><a
                                    className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                                    href="#">1</a></li>
                                <li className="page-item"><a
                                    className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                                    href="#">2</a></li>
                                <li className="page-item"><a
                                    className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                                    href="#">3</a></li>
                                <li className="page-item"><a
                                    className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                                    href="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                </a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default EventViewPage;