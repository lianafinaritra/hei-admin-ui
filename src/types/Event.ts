import Place from "./Place";

interface Event{
    id: string,
    type: string,
    place: string,
    startDateTime: string,
    endDateTime: string,
    responsible: string
}

export default Event