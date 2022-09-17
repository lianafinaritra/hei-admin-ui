import React from "react";
import {useNavigate} from "react-router-dom";
import ButtonGroup from "flowbite-react/lib/esm/components/Button/ButtonGroup";

const PresencePage: React.FC = () => {
    const navigate = useNavigate();
    return (<>
        <button className="bg-red-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded mr-6" >
            Verifier ma presence
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => navigate("/")}>
            Terminer
        </button>
    </>)
}

export default PresencePage;