import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import Navbar from "../components/Navbar";
import { PiPlusCircle } from "react-icons/pi";
import { Link } from "react-router-dom";
import { ImEye } from "react-icons/im";
import { getComplaints } from "../api";
import { BsEye } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";

const Ticket = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [ticketTypeCounts, setTicketTypeCounts] = useState({});
  const [ticketStatusCounts, setTicketStatusCounts] = useState({});
  const allTicketTypes = ["Complaint", "Request", "Suggestion"];
  const columns = [
    {
      name: "Action",
      cell: (row) => (
        <div className="flex items-center gap-4">
          <Link to={`/tickets/details/${row.id}`}>
            <BsEye size={15} />
          </Link>
          <Link to={`/edit/${row.id}`}>
            <BiEdit size={15} />
          </Link>
        </div>
      ),
    },
    {
      name: "Ticket Number",
      selector: (row) => row.ticket_number,
      sortable: true,
    },
    { name: "Description", selector: (row) => row.text, sortable: true },
    { name: "Category", selector: (row) => row.category_type, sortable: true },
    { name: "Sub Category", selector: (row) => row.title, sortable: true },
    { name: "Created By", selector: (row) => row.created_by, sortable: true },
    { name: "Status", selector: (row) => row.issue_status, sortable: true },
    { name: "Site", selector: (row) => row.title, sortable: true },
    { name: "Unit", selector: (row) => row.unit_name, sortable: true },
    { name: "Department", selector: (row) => row.title, sortable: true },
    { name: "Admin Priority", selector: (row) => row.priority, sortable: true },
    { name: "Created On", selector: (row) => row.created_at, sortable: true },
    { name: "Ticket Type", selector: (row) => row.issue_type, sortable: true },
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

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await getComplaints();
  //       setFilteredData(response.data.complaints);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getComplaints();
        const complaints = response.data.complaints;
        setFilteredData(complaints);

        const statusCounts = complaints.reduce((acc, curr) => {
          acc[curr.issue_status] = (acc[curr.issue_status] || 0) + 1;
          return acc;
        }, {});
        setTicketStatusCounts(statusCounts);
        const typeCounts = complaints.reduce((acc, curr) => {
          acc[curr.issue_type] = (acc[curr.issue_type] || 0) + 1;
          return acc;
        }, {});
        setTicketTypeCounts(typeCounts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // const handleSearch = (e) => {
  //   const searchValue = e.target.value;
  //   setSearchText(searchValue);
  //   const filteredResults = filteredData.filter(
  //     (item) =>
  //       item.ticket_number.toLowerCase().includes(searchValue.toLowerCase()) ||
  //       item.category_type.toLowerCase().includes(searchValue.toLowerCase())
  //   );
  //   setFilteredData(filteredResults);
  // };

  // const handleStatusChange = (status) => {
  //   setSelectedStatus(status);
  // };

  const handleSearch = (e) => {
    const searchValue = e.target.value;
    setSearchText(searchValue);
    const filteredResults = filteredData.filter(
      (item) =>
        (selectedStatus === "all" ||
          item.issue_status.toLowerCase() === selectedStatus) &&
        (item.ticket_number.toLowerCase().includes(searchValue.toLowerCase()) ||
          item.category_type.toLowerCase().includes(searchValue.toLowerCase()))
    );
    setFilteredData(filteredResults);
  };

  const handleStatusChange = (status) => {
    setSelectedStatus(status);
  };

  return (
    <section className="flex max-w-screen-2xlxl overflow-x-auto mr-5 flex-grow">
      {/* <section className="flex max-w-min overflow-x-auto mr-5 "> */}
      <Navbar />
      <div className=" w-full flex mx-5 flex-col">
        <div className="flex m-5 justify-start w-fit sm:gap-5 sm:flex-row flex-col flex-shrink ">
          {/* <div className="flex gap-2 mt-2"> */}
          {Object.entries(ticketStatusCounts).map(([status, count]) => (
            <div
              key={status}
              className={`shadow-xl rounded-full border-4 w-52 px-6 p-2 flex flex-col items-center flex-shrink ${
                status === "Pending"
                  ? "border-green-400"
                  : status === "Closed"
                  ? "border-red-400"
                  : status === "Complete"
                  ? "border-indigo-400"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              <p className="font-medium">{status}</p>
              <p>{count}</p>
            </div>
          ))}
          {/* </div> */}

          {allTicketTypes.map((type) => (
            <div
              key={type}
              className={`shadow-xl rounded-full border-4 w-52 px-6 p-2 flex flex-col items-center flex-shrink ${
                ticketTypeCounts[type] !== undefined
                  ? type === "Complaint"
                    ? "border-blue-400"
                    : type === "Request"
                    ? "border-orange-400"
                    : type === "Suggestion"
                    ? " border-yellow-400"
                    : ""
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              <p className="font-medium">{type} </p>
              {ticketTypeCounts[type] !== undefined
                ? ticketTypeCounts[type]
                : 0}
            </div>
          ))}
        </div>

        <div className="flex sm:flex-row flex-col gap-10 my-5">
          <div className="sm:flex grid grid-cols-2 items-center justify-center  gap-4 border border-gray-300 rounded-md px-3 p-2 w-auto">
            <div className="flex items-center gap-2">
              <input
                type="radio"
                id="all"
                name="status"
                checked={selectedStatus === "all"}
                onChange={() => handleStatusChange("all")}
              />
              <label htmlFor="all" className="text-sm">
                All
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                id="open"
                name="status"
                checked={selectedStatus === "open"}
                onChange={() => handleStatusChange("open")}
              />
              <label htmlFor="open" className="text-sm">
                Open
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                id="closed"
                name="status"
                checked={selectedStatus === "closed"}
                onChange={() => handleStatusChange("closed")}
              />
              <label htmlFor="closed" className="text-sm">
                Close
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                id="pending"
                name="status"
                checked={selectedStatus === "pending"}
                onChange={() => handleStatusChange("pending")}
              />
              <label htmlFor="pending" className="text-sm">
                Pending
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                id="complete"
                name="status"
                checked={selectedStatus === "complete"}
                onChange={() => handleStatusChange("complete")}
              />
              <label htmlFor="complete" className="text-sm">
                Complete
              </label>
            </div>
          </div>
          <Link
            to={"/tickets/create-ticket"}
            className="border-2 font-semibold hover:bg-black hover:text-white duration-150 transition-all border-black p-2 rounded-md text-black cursor-pointer text-center flex items-center w-44 gap-2 justify-center"
            onClick={() => setShowCountry(!showCountry)}
          >
            <PiPlusCircle size={20} />
            Add
          </Link>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Search by Ticket number or category "
              className="border border-gray-400 w-96 placeholder:text-sm rounded-lg p-2"
              value={searchText}
              onChange={handleSearch}
            />
            {/* <button
                className="border-2 font-semibold hover:bg-black hover:text-white duration-150 transition-all border-black p-2 rounded-md text-black cursor-pointer text-center flex items-center w-24 gap-2 justify-center"
                onClick={handleSearch}
              >
                Search
              </button> */}
          </div>
        </div>
        <div className="flex flex-col gap-4 justify-center items-center">
          <DataTable
            responsive
            selectableRows
            columns={columns}
            data={filteredData}
            customStyles={customStyle}
            pagination
            fixedHeader
            fixedHeaderScrollHeight="420px"
            selectableRowsHighlight
            highlightOnHover
          />
        </div>
        {/* </div> */}
      </div>
    </section>
  );
};

export default Ticket;
