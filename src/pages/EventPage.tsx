import React, {useState} from "react";
import photo from "../logolfhei-removebg-preview.png";
import EventDashboard from "../components/EventDashboard";
import {useNavigate} from "react-router-dom";
import {Label, TextInput} from "flowbite-react";
import axios from "axios";

const EventPage: React.FC = () => {
    const navigate = useNavigate();
    const [type, setType] = useState<string>("")
    const [res, setRes] = useState<string>("")
    const [place, setPlace] = useState<string>("")
    const [start, setStart] = useState<string>("")
    const [end, setEnd] = useState<string>("")

    const Select: object[] = [
        {
            id: 1,
            name: "HEI Ivandry"
        },
        {
            id: 2,
            name: "Alliance Francaise"
        }
    ]

    const PutEvents = () => {
        const promise = axios.put(
            "http://localhost:8080/events", [
                {
                    "type": type,
                    "responsible": res,
                    "place": place,
                    "start_datetime": start,
                    "end_datetime": end
                }
            ]);
        promise
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
            })
    }

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
                                   className="flex  m-auto items-center p-1 mb-10 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
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
                                   className="flex  m-auto items-center p-1 mb-10 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                                   onClick={() => navigate("/EventView")}>
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
                <div className="m-auto w-4/5">

                    <div className="space-y-6 w-4/5 mx-auto">
                        <form className="flex flex-col gap-4">
                            <div>
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="password1"
                                        value="Le type du cours"
                                    />
                                </div>
                                <TextInput
                                    onChange={(e) => setType(e.target.value)}
                                    value={type}
                                    id="categoryName"
                                    type="string"
                                    required={true}
                                />
                            </div>
                            <div className="w-full h-full mx-auto object-contain">
                                <label htmlFor="underline_select" className="sr-only">Underline select</label>
                                <select id="underline_select"
                                        className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 dark:text-gray-400 dark:border-gray-200 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                                        onChange={(e: React.FormEvent<HTMLSelectElement>) => {
                                        }}
                                >
                                    {Select.map((item: any) => (
                                        <option key={`${item.id}`} value={item.name}>{item.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="password1"
                                        value="Responsable"
                                    />
                                </div>
                                <TextInput
                                    onChange={(e) => setRes(e.target.value)}
                                    value={res}
                                    id="categoryName"
                                    type="string"
                                    required={true}
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="password1"
                                        value="Debut"
                                    />
                                </div>
                                <TextInput
                                    onChange={(e) => setStart(e.target.value)}
                                    value={start}
                                    id="categoryName"
                                    type="string"
                                    required={true}
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="password1"
                                        value="Nom de la nouvelle Ville"
                                    />
                                </div>
                                <TextInput
                                    onChange={(e) => {}}
                                    value={""}
                                    id="categoryName"
                                    type="string"
                                    required={true}
                                />
                            </div>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={PutEvents}>
                                Envoyer
                            </button>
                        </form>
                    </div>

                </div>
            </div>
    </>)
}

export default EventPage;