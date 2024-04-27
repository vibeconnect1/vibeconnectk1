import React from "react";

const AddSupplier = () => {
  return (
    <section>
      <div className="m-2">
        <h2 className="text-center text-xl font-bold p-2 bg-black rounded-full text-white">
          Add Supplier
        </h2>
        <div className="mx-20 my-5 mb-10 border border-gray-400 p-5 px-10 rounded-lg shadow-xl">
          <h2 className="border-b text-center text-xl border-black mb-6 font-semibold">
            Company Details
          </h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="font-medium">
                Company Name :
              </label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Company Name"
                className="border p-1 px-4 border-gray-500 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="font-medium">
                Primary Phone :
              </label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Phone"
                className="border p-1 px-4 border-gray-500 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="font-medium">
                Secondary Phone :
              </label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Secondary Email"
                className="border p-1 px-4 border-gray-500 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="font-medium">
                Primary Email :
              </label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Primary Email"
                className="border p-1 px-4 border-gray-500 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="font-medium">
                Secondary Email :
              </label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Secondary Email"
                className="border p-1 px-4 border-gray-500 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="font-medium">
                PAN :
              </label>
              <input
                type="text"
                name=""
                id=""
                placeholder="PAN"
                className="border p-1 px-4 border-gray-500 rounded-md"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="font-semibold">
                Select Supplier Type:
              </label>
              <select className="border p-1 px-4 border-gray-500 rounded-md">
                <option value="">Select Supplier Type</option>
                <option value="unit1">Type 1</option>
                <option value="unit2">Type 2</option>
                <option value="unit2">Type 3</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="font-semibold">
                Select Category:
              </label>
              <select className="border p-1 px-4 border-gray-500 rounded-md">
                <option value="">Select Category</option>
                <option value="unit1">Category 1</option>
                <option value="unit2">Category 2</option>
                <option value="unit2">Category 3</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="font-medium">
                Date :
              </label>
              <input
                type="date"
                name=""
                id=""
                className="border p-1 px-4 border-gray-500 rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddSupplier;
