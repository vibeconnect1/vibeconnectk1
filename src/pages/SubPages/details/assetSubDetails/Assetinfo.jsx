import React, { useState } from "react";
import { BiEditAlt } from "react-icons/bi";
import { CgAdd } from "react-icons/cg";
import { Switch } from "../../../../Buttons";
import { FaQrcode } from "react-icons/fa";
import AssetQrCode from "./AssetQrCode";

const Assetinfo = () => {
    const [qrCode, setQrCode]= useState(false)
  return (
    <section>
      <div className="m-2">
        <div className="border-2 flex flex-col my-5 p-4 gap-4 rounded-md border-gray-400">
          <div className=" flex justify-between ">
            <button className="border-2 px-4 p-1 rounded-full text-blue-500 flex gap-2 items-center hover:bg-blue-500 hover:text-white border-blue-500">
              <CgAdd />
              Add PPM
            </button>
            <div className="flex items-center gap-2 ">
              <p>Breakdown</p>
              <Switch />
              <p>In use</p>
            </div>
            <div className="flex gap-2">
                <button className="flex gap-2 items-center border-2 border-black px-4 p-1 rounded-full hover:bg-black hover:text-white" onClick={()=>setQrCode(true)}><FaQrcode/> QR Code</button>
              <button className="flex gap-2 items-center border-2 border-black px-4 p-1 rounded-full hover:bg-black hover:text-white">
                <BiEditAlt />
                Edit Details
              </button>
            </div>
          </div>
          <div>
            <h2 className="border-b  text-xl border-black font-semibold">
              Location Details
            </h2>
            <div className="my-5 px-10 text-sm items-center font-medium grid gap-4 grid-cols-2">
                <p>Site:</p>
                <p>Room: </p>
                <p>Floor: </p>
                <p>Area: </p>
                <p>Wing: </p>
                <p>Building: </p>
            </div>
          </div>
          <div>
            <h2 className="border-b  text-xl border-black font-semibold">
              Asset Information
            </h2>
            <div className="my-5 px-10 items-center font-medium grid gap-4 grid-cols-3 text-sm">
                <p>Client Name:</p>
                <p>Asset Name: </p>
                <p>Asset Number: </p>
                <p>Asset Code: </p>
                <p>Asset Type: </p>
                <p>Model Number: </p>
                <p>Serial Number: </p>
                <p>Manufacturer: </p>
                <p>Purchased on: </p>
                <p>Date Of Installation: </p>
                <p>Breakdown Date: </p>
                <p>Created On: </p>
                <p>Capacity: </p>
                <p>Purchase Cost: </p>
                <p>Group: </p>
                <p>Subgroup: </p>
                <p>Critical: </p>
                <p>Meter Applicable: </p>
                <p>Meter Category: </p>
                <p>Meter Type Category: </p>
                <p>Updated On: </p>
                <p>Comments: </p>
                <p>Description: </p>
               
            </div>
          </div>
          <div>
            <h2 className="border-b  text-xl border-black font-semibold">
              Warranty Details
            </h2>
            <div className="my-5 px-10 text-sm items-center font-medium grid gap-4 grid-cols-3">
                <p>Under Warranty:</p>
                <p>Expiry Date: </p>
                <p>Commissioning Date: </p>
                
            </div>
          </div>
          <div>
            <h2 className="border-b  text-xl border-black font-semibold">
              Attachments
            </h2>
            <div className="my-5 px-10 text-sm items-center font-medium grid gap-4 grid-cols-3">
                No attachments
                
            </div>
          </div>
        </div>
        {qrCode && <AssetQrCode onClose={()=>setQrCode(false)}/>}
      </div>
    </section>
  );
};

export default Assetinfo;
