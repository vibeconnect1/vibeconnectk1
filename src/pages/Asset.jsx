import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { IoAddCircleOutline } from "react-icons/io5";
import { BsEye } from "react-icons/bs";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import * as XLSX from "xlsx";
import { columnsData } from "../utils/assetColumns";
// import jsPDF from "jspdf";
// import QRCode from "qrcode.react";

const Asset = () => {
  const [searchText, setSearchText] = useState("");
  const [filter, setFilter] = useState(false);
  const [omitColumn, setOmitColumn] = useState(false);
  const [visibleColumns, setVisibleColumns] = useState(columnsData);
  const [selectedRows, setSelectedRows] = useState([]);
  const column = [
    {
      name: "Action",
      cell: (row) => <Link to={""}>{row.action}</Link>,
      sortable: true,
    },
    { name: "Site", selector: (row) => row.site, sortable: true },
    {
      name: "Building",
      selector: (row) => row.building,
      sortable: true,
    },
    { name: "Wing", selector: (row) => row.wing, sortable: true },
    { name: "Floor", selector: (row) => row.floor, sortable: true },
    {
      name: "Area",
      selector: (row) => row.area,
      sortable: true,
    },
    {
      name: "Room",
      selector: (row) => row.room,
      sortable: true,
    },
    {
      name: "Asset Name",
      selector: (row) => row.assetName,
      sortable: true,
    },
    {
      name: "Asset Code",
      selector: (row) => row.assetCode,
      sortable: true,
    },

    {
      name: "Serial Number",
      selector: (row) => row.serialNumber,
      sortable: true,
    },
    {
      name: "Asset Type",
      selector: (row) => row.serialNumber,
      sortable: true,
    },
    {
      name: "Client Name",
      selector: (row) => row.clientName,
      sortable: true,
    },
    {
      name: "Model Number",
      selector: (row) => row.model,
      sortable: true,
    },
    {
      name: "Group",
      selector: (row) => row.group,
      sortable: true,
    },
    {
      name: "Sub Group",
      selector: (row) => row.subGroup,
      sortable: true,
    },
    {
      name: "Critical",
      selector: (row) => row.critical,
      sortable: true,
    },
    {
      name: "Capacity",
      selector: (row) => row.capacity,
      sortable: true,
    },
    {
      name: "Purchase Date",
      selector: (row) => row.purchaseDate,
      sortable: true,
    },
    {
      name: "Purchase Cost",
      selector: (row) => row.purchaseCost,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
    },
    {
      name: "Created On",
      selector: (row) => row.createdOn,
      sortable: true,
    },
    {
      name: "Updated On",
      selector: (row) => row.updatedOn,
      sortable: true,
    },
    {
      name: "Warranty",
      selector: (row) => row.warranty,
      sortable: true,
    },
    {
      name: "Warranty Expiry",
      selector: (row) => row.warrantyExpiry,
      sortable: true,
    },
    {
      name: "Commissioning Date",
      selector: (row) => row.commissioningDate,
      sortable: true,
    },
    {
      name: "AMC",
      selector: (row) => row.AMC,
      sortable: true,
    },
    {
      name: "PPM",
      selector: (row) => row.ppm,
      sortable: true,
    },
    {
      name: "Meter Configured",
      selector: (row) => row.meterConfigured,
      sortable: true,
    },
    {
      name: "Meter Type",
      selector: (row) => row.meterType,
      sortable: true,
    },
    {
      name: "Submeter",
      selector: (row) => row.subMeter,
      sortable: true,
    },
    {
      name: "Supplier",
      selector: (row) => row.supplier,
      sortable: true,
    },
  ];
  const data = [
    {
      id: 1,
      action: <BsEye />,
      site: "site 1",
      building: "Building A",
      wing: "Wing 1",
      floor: "Floor 1",
      area: "Area 1",
      room: "Room 1",
      serialNumber: "Asset Name",
      clientName: "assetCode",
      assetCode: "assetCode",
      model: "assetCode",
      group: "assetCode",
      subGroup: "assetCode",
      critical: "assetCode",
      capacity: "assetCode",
      purchaseDate: "assetCode",
      purchaseCost: "assetCode",
      status: "assetCode",
      createdOn: "assetCode",
      updatedOn: "assetCode",
      warranty: "assetCode",
      warrantyExpiry: "assetCode",
      commissioningDate: "assetCode",
      ppm: "assetCode",
      AMC: "assetCode",
      meterConfigured: "assetCode",
      meterType: "assetCode",
      subMeter: "assetCode",
      supplier: "assetCode",
      assetName: "test",
    },
    {
      id: 2,
      action: <BsEye />,
      site: "site 1",
      building: "Building A",
      wing: "Wing 1",
      floor: "Floor 1",
      area: "Area 1",
      room: "Room 1",
      serialNumber: "Asset Name",
      clientName: "client",
      assetCode: "assetCode",
      model: "123",
      group: "group",
      subGroup: "sub group",
      critical: "critical",
      capacity: "capacity",
      purchaseDate: "purchase date",
      purchaseCost: "purchase cost",
      status: "status",
      createdOn: "date",
      updatedOn: "date",
      warranty: "1 year",
      warrantyExpiry: "expiry",
      commissioningDate: "comm date",
      ppm: "ppm",
      AMC: "AMC",
      meterConfigured: "meter",
      meterType: "type",
      subMeter: "sub",
      supplier: "supplier",
      assetName: "asset",
    },
  ];

  const [filteredData, setFilteredData] = useState(data);
  const handleSearch = (event) => {
    const searchValue = event.target.value;
    setSearchText(searchValue);
    const filteredResults = data.filter(
      (item) =>
        item.assetName.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.model.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(filteredResults);
  };

  const customStyle = {
    headRow: {
      style: {
        backgroundColor: "black",
        color: "white",
        fontSize: "12px",
      },
    },
  };

  const exportToExcel = () => {
    const fileType =
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    const fileName = "asset_data.xlsx";
    const ws = XLSX.utils.json_to_sheet(filteredData);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    const url = URL.createObjectURL(data);
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    link.click();
  };

  const handleRowSelected = (state) => {
    setSelectedRows(state.selectedRows);
  };
 

  return (
    <section className="flex max-w-6xl xl:max-w-7xl mr-5">
      <Navbar />
      <div className="p-4 w-full my-2 flex mx-5 flex-col">
        {omitColumn && (
          <div className="grid grid-cols-10  gap-x-12 gap-y-4 border-2 border-black p-2 rounded-md mb-5">
            {column.map((col) => (
              <label key={col.name} className="flex items-center ">
                <input
                  type="checkbox"
                  checked={visibleColumns.includes(col.name)}
                  onChange={() =>
                    setVisibleColumns((prev) =>
                      prev.includes(col.name)
                        ? prev.filter((item) => item !== col.name)
                        : [...prev, col.name]
                    )
                  }
                />
                <span className="ml-1 min-w-fit">{col.name}</span>
              </label>
            ))}
          </div>
        )}
        {filter && (
          <div className="flex items-center justify-center gap-2">
            <select className="border p-1 px-4 border-gray-500 rounded-md">
              <option value="">Select Building</option>
              <option value="unit1">Building 1</option>
              <option value="unit2">Building 2</option>
            </select>
            <select className="border p-1 px-4 border-gray-500 rounded-md">
              <option value="">Select Wing</option>
              <option value="unit1">Wing 1</option>
              <option value="unit2">WIng 2</option>
            </select>

            <select className="border p-1 px-4 border-gray-500 rounded-md">
              <option value="">Select Area</option>
              <option value="unit1">Area 1</option>
              <option value="unit2">Area 2</option>
              <option value="unit2">Area 3</option>
            </select>
            <select className="border p-1 px-4 border-gray-500 rounded-md">
              <option value="">Select Floor</option>
              <option value="unit1">Floor 1</option>
              <option value="unit2">Floor 2</option>
              <option value="unit2">Floor 3</option>
            </select>
            <select className="border p-1 px-4 border-gray-500 rounded-md">
              <option value="">Select Room</option>
              <option value="unit1">Room 1</option>
              <option value="unit2">Room 2</option>
              <option value="unit2">Room 3</option>
            </select>
            <button className="bg-black p-1 px-4 text-white rounded-md">
              Apply
            </button>
          </div>
        )}
        <div className="flex justify-between items-center my-5 ">
          <input
            type="text"
            placeholder="Search By asset name or model number"
            className="border-2 p-2 w-96 border-gray-300 rounded-lg"
            value={searchText}
            onChange={handleSearch}
          />
          <div className="flex gap-2">
            <button
              className="text-lg font-semibold border-2 border-black px-4 p-1 rounded-md"
              onClick={() => setOmitColumn(!omitColumn)}
            >
              Filter Columns
            </button>
            <button
              className="text-lg font-semibold border-2 border-black px-4 p-1 rounded-md"
              onClick={() => setFilter(!filter)}
            >
              Filter
            </button>

            <Link
              to={"/assets/add-asset"}
              className="bg-black  rounded-lg flex font-semibold  items-center gap-2 text-white p-2 "
            >
              <IoAddCircleOutline size={20} />
              Add
            </Link>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={exportToExcel}
            >
              Export
            </button>
            {/* <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleDownloadQRCode}
            disabled={selectedRows.length === 0}
          >
            Download QR Code
          </button> */}
          </div>
        </div>
        <DataTable
          selectableRows
          columns={column.filter((col) => visibleColumns.includes(col.name))}
          data={filteredData}
          customStyles={customStyle}
          responsive
          onSelectedRowsChange={handleRowSelected}
        />
      </div>
    </section>
  );
};

export default Asset;
