import React from "react";
import {HistoryProps} from "../types/HistoryProps";
import {Table} from "flowbite-react";
import Event from "../types/Event";
import {EventProps} from "../types/EventProps";

const EventDashboard: React.FC<EventProps> = ({data}) => {
    return (
        <Table hoverable={true} className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <Table.Head
                className="bg-gray-100 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <Table.HeadCell scope="col" className="px-6 py-3">
                    Id
                </Table.HeadCell>
                <Table.HeadCell scope="col" className="px-6 py-3">
                    Type
                </Table.HeadCell>
                <Table.HeadCell scope="col" className="px-6 py-3">
                    Lieu
                </Table.HeadCell>
                <Table.HeadCell scope="col" className="px-6 py-3">
                    Début
                </Table.HeadCell>
                <Table.HeadCell scope="col" className="px-6 py-3">
                    Fin
                </Table.HeadCell>
                <Table.HeadCell scope="col" className="px-6 py-3">
                    Responsable
                </Table.HeadCell>
                <Table.HeadCell scope="col" className="px-6 py-3">
      <span className="sr-only">
        Edit
      </span>
                </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
                {
                    data.map((item) => (
                        <Table.Row
                            className="bg-gray-100 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <Table.Cell scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                {item.id}
                            </Table.Cell>
                            <Table.Cell className="px-6 py-4">
                                {item.type}
                            </Table.Cell>
                            <Table.Cell className="px-6 py-4">
                                {item.place}
                            </Table.Cell>
                            <Table.Cell className="px-6 py-4">
                                {item.startDateTime}
                            </Table.Cell>
                            <Table.Cell className="px-6 py-4">
                                {item.endDateTime}
                            </Table.Cell>
                            <Table.Cell className="px-6 py-4">
                                {item.responsible}
                            </Table.Cell>
                            <Table.Cell className="px-6 py-4">
                                <a
                                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                                >
                                    Changer
                                </a>
                            </Table.Cell>
                        </Table.Row>
                    ))
                }
            </Table.Body>
        </Table>

    )
}

export default EventDashboard;