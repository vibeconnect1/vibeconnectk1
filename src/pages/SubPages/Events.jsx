import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { IoAddCircleOutline } from "react-icons/io5";
import { ImEye } from "react-icons/im";
import { BiExport } from "react-icons/bi";
import { Link } from "react-router-dom";
import { Calendar } from 'react-date-range';

const Events = () => {
  const [searchText, setSearchText] = useState("");
  const column = [
    {
      name: "Action",
      cell: (row) => (
        <Link to={`/bookings/booking-details/${row.id}`}>{row.action}</Link>
      ),
      sortable: true,
    },
    { name: "Title", selector: (row) => row.title, sortable: true },
    {
      name: "Unit",
      selector: (row) => row.unit,
      sortable: true,
    },
    { name: "Created By", selector: (row) => row.bookedBy, sortable: true },
    { name: "Start Date", selector: (row) => row.bookedOn, sortable: true },
    {
      name: "End Date",
      selector: (row) => row.facilityType,
      sortable: true,
    },
    {
      name: "Event Type",
      selector: (row) => row.scheduledOn,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.scheduledTime,
      sortable: true,
    },
    {
      name: "Expired",
      selector: (row) => row.bookingStatus,
      sortable: true,
    },
    {
      name: "Created On",
      selector: (row) => row.bookingStatus,
      sortable: true,
    },
    {
      name: "Attachments",
      selector: (row) => row.bookingStatus,
      sortable: true,
    },
  ];
  const data = [
    {
      id: 1,
      action: <ImEye />,
      facility: "fac1",
      bookedBy: "A",
      bookedOn: "booked date",
      facilityType: "bookable",
      scheduledOn: "date",
      scheduledTime: "time",
      bookingStatus: "confirmed",
    },
    {
      id: 2,
      action: <ImEye />,
      facility: "Test2",
      bookedBy: "B",
      bookedOn: "booked date",
      facilityType: "bookable",
      scheduledOn: "date",
      scheduledTime: "time",
      bookingStatus: "pending",
    },
  ];

  const [filteredData, setFilteredData] = useState(data);
  const handleSearch = (event) => {
    const searchValue = event.target.value;
    setSearchText(searchValue);
    const filteredResults = data.filter((item) =>
      item.facility.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(filteredResults);
  };

  const customStyle = {
    headRow: {
      style: {
        backgroundColor: "black",
        color: "white",
        fontSize: "14px",
      },
    },
  };
  return (
    <div className="my-10">
      <div className="flex justify-between items-center">
        <input
          type="text"
          placeholder="Search By title"
          className="border-2 p-2 w-96 border-gray-300 rounded-lg"
          value={searchText}
          onChange={handleSearch}
        />
        <div>
          <select className="border p-1 px-4 border-gray-500 rounded-md">
            <option value="">Select Unit</option>
            <option value="unit1">Unit 1</option>
            <option value="unit2">Unit 2</option>
          </select>
          {<Calendar
        date={new Date()}
        // onChange={this.handleSelect}
      />}
        </div>
        <div className="flex gap-4 justify-end w-full">
          <Link
            to={""}
            className="bg-black  rounded-lg flex font-semibold items-center gap-2 text-white p-2 my-5"
          >
            <IoAddCircleOutline size={20} />
            Add Event
          </Link>
        </div>
      </div>
      <DataTable
        columns={column}
        data={filteredData}
        customStyles={customStyle}
      />
    </div>
  );
};

export default Events;
