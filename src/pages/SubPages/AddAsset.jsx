import React, { useState } from "react";
import Switch from "../../Buttons/Switch";

const AddAsset = () => {
  const [meterApplicable, setMeterApplicable] = useState(false);
  const [meterType, setMeterType] = useState("");
  return (
    <section>
      <div className="m-2">
        <h2 className="text-center text-xl font-bold p-2 bg-black rounded-full text-white">
          Add Asset
        </h2>
        <div className="mx-20 my-5 mb-10 border border-gray-400 p-5 px-10 rounded-lg shadow-xl">
          <h2 className="border-b text-center text-xl border-black mb-6 font-bold">
            Location Details
          </h2>
          <div className="flex sm:flex-row flex-col justify-around items-center">
            <div className="grid grid-cols-3 item-start gap-x-4 gap-y-2 w-full">
              <div className="flex flex-col">
                <label htmlFor="" className="font-semibold">
                  Select Site:
                </label>
                <select className="border p-1 px-4 border-gray-500 rounded-md">
                  <option value="">Select Site</option>
                  <option value="unit1">Site 1</option>
                  <option value="unit2">Site 2</option>
                  <option value="unit2">Site 3</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="font-semibold">
                  Select Building:
                </label>
                <select className="border p-1 px-4 border-gray-500 rounded-md">
                  <option value="">Select Building</option>
                  <option value="unit1">Building 1</option>
                  <option value="unit2">Building 2</option>
                  <option value="unit2">Building 3</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="font-semibold">
                  Select Wing:
                </label>
                <select className="border p-1 px-4 border-gray-500 rounded-md">
                  <option value="">Select Wing</option>
                  <option value="unit1">Wing 1</option>
                  <option value="unit2">Wing 2</option>
                  <option value="unit2">Wing 3</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="font-semibold">
                  Select Area:
                </label>
                <select className="border p-1 px-4 border-gray-500 rounded-md">
                  <option value="">Select Area</option>
                  <option value="unit1">Area 1</option>
                  <option value="unit2">Area 2</option>
                  <option value="unit2">Area 3</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="font-semibold">
                  Select Floor:
                </label>
                <select className="border p-1 px-4 border-gray-500 rounded-md">
                  <option value="">Select Floor</option>
                  <option value="unit1">Floor 1</option>
                  <option value="unit2">Floor 2</option>
                  <option value="unit2">Floor 3</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="font-semibold">
                  Select Room:
                </label>
                <select className="border p-1 px-4 border-gray-500 rounded-md">
                  <option value="">Select Room</option>
                  <option value="unit1">Room 1</option>
                  <option value="unit2">Room 2</option>
                  <option value="unit2">Room 3</option>
                </select>
              </div>
            </div>
          </div>
          <div className="my-5">
            <h2 className="border-b text-center text-xl border-black mb-6 font-bold">
              Asset Info
            </h2>
            <div className="flex sm:flex-row flex-col justify-around items-center">
              <div className="grid grid-cols-3 item-start gap-x-4 gap-y-2 w-full">
                <div className="flex flex-col">
                  {/* <label htmlFor="" className="font-semibold">
                    Select Site:
                  </label> */}
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Asset Name "
                    className="border p-1 px-4 border-gray-500 rounded-md"
                  />
                </div>
                <div className="flex flex-col">
                  {/* <label htmlFor="" className="font-semibold">
                    Select Site:
                  </label> */}
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Asset Number "
                    className="border p-1 px-4 border-gray-500 rounded-md"
                  />
                </div>
                <div className="flex flex-col">
                  {/* <label htmlFor="" className="font-semibold">
                    Select Site:
                  </label> */}
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Model Number "
                    className="border p-1 px-4 border-gray-500 rounded-md"
                  />
                </div>
                <div className="flex flex-col">
                  {/* <label htmlFor="" className="font-semibold">
                    Select Site:
                  </label> */}
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Serial Number "
                    className="border p-1 px-4 border-gray-500 rounded-md"
                  />
                </div>
                <div className="flex flex-col">
                  {/* <label htmlFor="" className="font-semibold">
                    Select Site:
                  </label> */}
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Purchase Cost "
                    className="border p-1 px-4 border-gray-500 rounded-md"
                  />
                </div>
                <div className="flex flex-col">
                  {/* <label htmlFor="" className="font-semibold">
                    Select Site:
                  </label> */}
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Capacity"
                    className="border p-1 px-4 border-gray-500 rounded-md"
                  />
                </div>
                <div className="flex flex-col">
                  {/* <label htmlFor="" className="font-semibold">
                    Select Site:
                  </label> */}
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Unit"
                    className="border p-1 px-4 border-gray-500 rounded-md"
                  />
                </div>

                <div className="flex flex-col">
                  <select className="border p-1 px-4 border-gray-500 rounded-md">
                    <option value="">Select Group</option>
                    <option value="unit1">Group 1</option>
                    <option value="unit2">Group 2</option>
                    <option value="unit2">Group 3</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <select className="border p-1 px-4 border-gray-500 rounded-md">
                    <option value="">Select Sub Group</option>
                    <option value="unit1">Sub Group 1</option>
                    <option value="unit2">Sub Group 2</option>
                    <option value="unit2">Sub Group 3</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <select className="border p-1 px-4 border-gray-500 rounded-md">
                    <option value="">Select Asset Type</option>
                    <option value="unit1">Comprehensive</option>
                    <option value="unit2">Non-Comprehensive</option>
                  </select>
                </div>
                <div className="flex items-center gap-2">
                  <label htmlFor="" className="font-semibold">
                    Purchased Date:
                  </label>
                  <input
                    type="date"
                    name=""
                    id=""
                    className="border p-1 px-4 border-gray-500 rounded-md"
                  />
                </div>
                <div className="flex gap-4 items-center">
                  <p>Breakdown</p>
                  <Switch />
                  <p>In Use</p>
                </div>
                <div className="flex items-center gap-4">
                  <p className="font-semibold">Critical:</p>
                  <div className="flex gap-2">
                    <input type="radio" name="critical" id="yes" />
                    <label htmlFor="yes">Yes</label>
                  </div>
                  <div className="flex gap-2">
                    <input type="radio" name="critical" id="no" />
                    <label htmlFor="no">No</label>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={meterApplicable}
                    onClick={() => setMeterApplicable(!meterApplicable)}
                    name=""
                    id="meterApplicable"
                  />
                  <label htmlFor="meterApplicable">Meter Applicable</label>
                </div>
                {meterApplicable && (
                  <>
                    <div className="flex items-center gap-4">
                      <p className="font-semibold">Meter Type:</p>
                      <div
                        className="flex gap-2"
                        onClick={() => setMeterType("parent")}
                      >
                        <input type="radio" name="meterType" id="parent" />
                        <label htmlFor="parent">Parent</label>
                      </div>
                      <div className="flex gap-2">
                        <input
                          type="radio"
                          name="meterType"
                          id="sub"
                          onClick={() => setMeterType("sub")}
                        />
                        <label
                          htmlFor="sub"
                          onClick={() => setMeterType("sub")}
                        >
                          Sub
                        </label>
                      </div>
                    </div>
                  </>
                )}
                {meterType === "parent" && (
                  <div className="flex flex-col">
                    <select className="border p-1 px-4 border-gray-500 rounded-md">
                      <option value="">Select Meter Category </option>
                      <option value="unit1">Meter 1</option>
                      <option value="unit2">Meter 2</option>
                      <option value="unit2">meter 3</option>
                    </select>
                  </div>
                )}
                {meterType === "sub" && (
                  <select className="border p-1 px-4 border-gray-500 rounded-md">
                    <option value="">Select Parent Category </option>
                    <option value="unit1">Parent 1</option>
                    <option value="unit2">Parent 2</option>
                    <option value="unit2">Parent 3</option>
                  </select>
                )}
              </div>
            </div>
            {meterType === "parent" && (
              <>
                <div className="my-5">
                  <p className="border-b border-black font-semibold">
                    Consumption Asset Measure
                  </p>
                  <div className="grid grid-cols-4 my-5 gap-4">
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Name"
                      className="border p-1 px-4 border-gray-500 rounded-md"
                    />
                    <div className="flex flex-col">
                      <select className="border p-1 px-4 border-gray-500 rounded-md">
                        <option value="" className="text-gray-300">
                          Select Unit Type{" "}
                        </option>
                        <option value="unit1">Type 1</option>
                        <option value="unit2">Type 2</option>
                        <option value="unit2">Type 3</option>
                      </select>
                    </div>
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Min"
                      className="border p-1 px-4 border-gray-500 rounded-md"
                    />
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Max"
                      className="border p-1 px-4 border-gray-500 rounded-md"
                    />
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Alert Below Value"
                      className="border p-1 px-4 border-gray-500 rounded-md"
                    />
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Alert Above Value"
                      className="border p-1 px-4 border-gray-500 rounded-md"
                    />
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder=" Multiplier Factor"
                      className="border p-1 px-4 border-gray-500 rounded-md"
                    />
                    <div className="flex items-center gap-2">
                      <input type="checkbox" name="" id="" />
                      <label htmlFor=""> Check Previous Reading</label>
                    </div>
                  </div>
                </div>
                <div className="my-5">
                  <p className="border-b border-black font-semibold">
                    Non Consumption Asset Measure
                  </p>
                  <div className="grid grid-cols-4 my-5 gap-4">
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Name"
                      className="border p-1 px-4 border-gray-500 rounded-md"
                    />
                    <div className="flex flex-col">
                      <select className="border p-1 px-4 border-gray-500 rounded-md">
                        <option value="" className="text-gray-300">
                          Select Unit Type{" "}
                        </option>
                        <option value="unit1">Type 1</option>
                        <option value="unit2">Type 2</option>
                        <option value="unit2">Type 3</option>
                      </select>
                    </div>
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Min"
                      className="border p-1 px-4 border-gray-500 rounded-md"
                    />
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Max"
                      className="border p-1 px-4 border-gray-500 rounded-md"
                    />
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Alert Below Value"
                      className="border p-1 px-4 border-gray-500 rounded-md"
                    />
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Alert Above Value"
                      className="border p-1 px-4 border-gray-500 rounded-md"
                    />
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder=" Multiplier Factor"
                      className="border p-1 px-4 border-gray-500 rounded-md"
                    />
                    <div className="flex items-center gap-2">
                      <input type="checkbox" name="" id="" />
                      <label htmlFor=""> Check Previous Reading</label>
                    </div>
                  </div>
                </div>
              </>
            )}
            {meterType === "sub" && (
              <div className="my-5">
                <p className="border-b border-black font-semibold">
                  Consumption Asset Measure
                </p>
                <div className="grid grid-cols-4 my-5 gap-4">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Name"
                    className="border p-1 px-4 border-gray-500 rounded-md"
                  />
                  <div className="flex flex-col">
                    <select className="border p-1 px-4 border-gray-500 rounded-md">
                      <option value="" className="text-gray-300">
                        Select Unit Type{" "}
                      </option>
                      <option value="unit1">Type 1</option>
                      <option value="unit2">Type 2</option>
                      <option value="unit2">Type 3</option>
                    </select>
                  </div>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Min"
                    className="border p-1 px-4 border-gray-500 rounded-md"
                  />
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Max"
                    className="border p-1 px-4 border-gray-500 rounded-md"
                  />
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Alert Below Value"
                    className="border p-1 px-4 border-gray-500 rounded-md"
                  />
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Alert Above Value"
                    className="border p-1 px-4 border-gray-500 rounded-md"
                  />
                  <div className="flex items-center gap-2">
                    <input type="checkbox" name="" id="" />
                    <label htmlFor=""> Check Previous Reading</label>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddAsset;
