import React from "react";
import Navbar from "../components/Navbar";
import { ImEye } from "react-icons/im";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { IoAddCircleOutline } from "react-icons/io5";
import profile from "/profile.png";
import Switch from "../Buttons/Switch";

const Business = () => {
  const column = [
    {
      name: "Actions",
      cell: (row) => (
        <Link to={`/business/details/${row.id}`}>{row.action}</Link>
      ),
      sortable: true,
    },

    { name: "Company Logo", selector: (row) => row.logo, sortable: true },
    { name: "Company Name", selector: (row) => row.title, sortable: true },
    { name: "Category", selector: (row) => row.category, sortable: true },
    {
      name: "Sub Category",
      selector: (row) => row.SubCategory,
      sortable: true,
    },
    {
      name: "Contact Person",
      selector: (row) => row.contactPerson,
      sortable: true,
    },
    { name: "Mobile", selector: (row) => row.mobile, sortable: true },
    {
      name: "Key Offerings",
      selector: (row) => row.keyOffering,
      sortable: true,
    },
    { name: "Status", selector: (row) => row.status, sortable: true },
  ];
  const data = [
    {
      id: 1,
      title: "Test1",
      logo: <img src={profile} className="w-10" />,
      category: "A",
      SubCategory: "B",
      contactPerson: "C",
      mobile: "9383735232",
      keyOffering: "D",
      status: <Switch />,
      action: <ImEye />,
    },
  ];

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
    <section className="flex gap-20 mr-5 max-w-screen">
      <Navbar />
      <div className="flex w-full mx-10 my-10 flex-col">
        <div className="w-full flex mx-5 flex-col">
          <div className="flex justify-between items-center">
            <input
              type="text"
              placeholder="Search By Company Name"
              className="border-2 p-2 w-96 border-gray-300 rounded-lg"
            />
            <div className="flex gap-4">
              <Link to={"/business/add-business"} className="bg-black w-20 rounded-lg flex items-center gap-2 text-white p-2 my-5">
                <IoAddCircleOutline />
                Add
              </Link>
              <button className="bg-black w-20 rounded-lg flex items-center gap-2 text-white p-2 my-5">
                <FiSettings />
                Setup
              </button>
            </div>
          </div>
          <div>
            <DataTable
              columns={column}
              data={data}
              customStyles={customStyle}
              responsive
              selectableRows
              pagination
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Business;
