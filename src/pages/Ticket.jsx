import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import Navbar from "../components/Navbar";
import { PiPlusCircle } from "react-icons/pi";
import { Link } from "react-router-dom";
import { ImEye } from "react-icons/im";

const Ticket = () => {
  const [record, setRecord] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchedRecord, setSearchedRecord] = useState([]);
  const columns = [
    {
      name: "Action",
      cell: (row) => <Link to={`/tickets/details`}>{row.action}</Link>,
      sortable: true,
    },
    {
      name: "Ticket Number",
      selector: (row) => row.ticketNumber,
      sortable: true,
    },
    { name: "Description", selector: (row) => row.title, sortable: true },
    { name: "Category", selector: (row) => row.title, sortable: true },
    { name: "Sub Category", selector: (row) => row.title, sortable: true },
    { name: "Created By", selector: (row) => row.title, sortable: true },
    { name: "Status", selector: (row) => row.title, sortable: true },
    { name: "Site", selector: (row) => row.title, sortable: true },
    { name: "Unit", selector: (row) => row.title, sortable: true },
    { name: "Department", selector: (row) => row.title, sortable: true },
    { name: "Admin Priority", selector: (row) => row.title, sortable: true },
    { name: "Created On", selector: (row) => row.title, sortable: true },
    { name: "Ticket Type", selector: (row) => row.title, sortable: true },
    { name: "Refrence Number", selector: (row) => row.title, sortable: true },
    { name: "Assigned To", selector: (row) => row.title, sortable: true },
    { name: "Complaint Mode", selector: (row) => row.title, sortable: true },
    { name: "Associated To", selector: (row) => row.title, sortable: true },
    {
      name: "Asset/Service Name",
      selector: (row) => row.title,
      sortable: true,
    },
    { name: "Task ID", selector: (row) => row.title, sortable: true },
    {
      name: "Proactive/Reactive",
      selector: (row) => row.title,
      sortable: true,
    },
    { name: "Review", selector: (row) => row.title, sortable: true },
    {
      name: "Response Escalation",
      selector: (row) => row.title,
      sortable: true,
    },
    { name: "Response TAT(Min)", selector: (row) => row.title, sortable: true },
    {
      name: "Response Time(D:H:M)",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "Response Escalation Level",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "Resolution Escalation",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "Resolution TAT(Min)",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "Resolution Time(D:H:M)",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "Resolution Escalation Level",
      selector: (row) => row.title,
      sortable: true,
    },
  ];
  const data = [
    {
      id: 1,
      title: "Test1",
      ticketNumber: "123",
      action: <ImEye />,
    },
    {
      id: 2,
      title: "Test2",
      ticketNumber: "1234",
      action: <ImEye />,
    },
    {
      id: 3,
      title: "Test3",
      ticketNumber: "5",
      action: <ImEye />,
    },
  ];
  useEffect(() => {
    setRecord(data);
    setSearchedRecord(data);
  }, []);

  //custom style
  const customStyle = {
    headRow: {
      style: {
        backgroundColor: "black",
        color: "white",

        fontSize: "10px",
      },
    },
    headCells: {
      style: {
        textTransform: "upperCase",
      },
    },
  };

  const handleSearch = () => {
    const searchedValue = record.filter((row) => {
      console.log("Row ticket:", row.ticketNumber);
      return row.ticketNumber.toLowerCase().includes(searchQuery.toLowerCase());
    });
    setSearchedRecord(searchedValue);
    setRecord(searchedRecord);
    console.log(record);
  };

  return (
    <section className="flex">
      <div className="fixed left-0 top-0 h-full">
        <Navbar />
      </div>
      <div className="ml-64 overflow-x-auto w-[70rem] h-screen flex flex-col">
        <div className="flex my-10 justify-around">
          <div className="border border-black p-4 px-6 w-36 flex flex-col items-center">
            <p>Open Tickets</p>
            <p className="text-center">0</p>
          </div>
          <div className="border border-black p-4 px-6 w-36 flex flex-col items-center">
            <p>Close Tickets</p>
            <p className="text-center">0</p>
          </div>
          <div className="border border-black p-4 px-6 w-36 flex flex-col items-center">
            <p>Request</p>
            <p className="text-center">0</p>
          </div>
          <div className="border border-black p-4 px-6 w-36 flex flex-col items-center">
            <p>Complaint</p>
            <p className="text-center">0</p>
          </div>
          <div className="border border-black w-36 flex flex-col items-center p-4 px-6">
            <p>Suggestion</p>
            <p className="text-center">0</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 justify-center items-center">
          <div className=" w-full flex gap-10 justify-end">
            <h2
              className="border-2 font-semibold hover:bg-black hover:text-white duration-150 transition-all border-black p-2 rounded-md text-black cursor-pointer text-center flex items-center w-44 gap-2 justify-center"
              onClick={() => setShowCountry(!showCountry)}
            >
              <PiPlusCircle size={20} />
              Add
            </h2>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Search using Ticket number or ticket title"
                className="border border-gray-400 w-96 rounded-lg p-2"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                className="border-2 font-semibold hover:bg-black hover:text-white duration-150 transition-all border-black p-2 rounded-md text-black cursor-pointer text-center flex items-center w-24 gap-2 justify-center"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
          </div>
          <div className="w-[70rem] mx-auto">
            <DataTable
              responsive
              selectableRows
              columns={columns}
              data={record}
              customStyles={customStyle}
              pagination
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ticket;
