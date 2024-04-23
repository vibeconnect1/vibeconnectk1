import React from "react";
import TextFields from "../../containers/Inputs/TextFields";

const SetupFacility = () => {
  return (
    <section>
      <div className="m-2">
        <h1 className="bg-black text-white font-semibold rounded-md text-center p-2">
          Setup New Facility
        </h1>
      </div>
      <div className="border p-10 border-gray-300 max-h-fit flex flex-col justify-center mx-20 rounded-md shadow-md">
        <div>
          <p className="text-center text-xl font-semibold">Select Type </p>
          <div className="flex justify-center gap-5 my-3">
            <div className="flex gap-2 items-center">
              <input type="radio" name="type" id="bookable" />
              <label htmlFor="bookable" className="text-lg">
                Bookable
              </label>
            </div>
            <div className="flex gap-2 items-center">
              <input type="radio" name="type" id="request" />
              <label htmlFor="request" className="text-lg">
                Request
              </label>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-xl bg-gray-400 text-white p-2 rounded-md font-medium my-3">
            Facility Details
          </h2>
          <div className="flex gap-5 justify-around mt-5">
            <TextFields
              title={"Facility Name"}
              type={"text"}
              placeholder={"Enter Facility Name"}
            />
            <div>
              <p className="font-bold mb-2">Department</p>
              <select
                name="department"
                id="yesNoSelect"
                className="w-52 border border-gray-400 p-1 rounded-md"
              >
                <option value="dept1">Dept1</option>
                <option value="dept2">Dept2</option>
              </select>
            </div>
            <div>
              <p className="font-bold mb-2">Active</p>
              <select
                name="yesNoSelect"
                id="yesNoSelect"
                className="w-36 border border-gray-400 p-1 rounded-md"
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          </div>
        </div>
        <div className="my-4">
          <h2 className="text-xl bg-gray-400 text-white p-2 rounded-md font-medium my-3">
            Fee Setup
          </h2>
          <div className="grid grid-cols-4 gap-10 max-w-fit">
            <div className="flex gap-1 flex-col ">
              <label htmlFor="">
                Fee <span className="text-sm text-gray-400">(per slot)</span>{" "}
              </label>
              <input
                type="text"
                name=""
                id=""
                placeholder="0.0"
                className="placeholder:text-sm border rounded-md border-gray-500 px-2"
              />
            </div>
            <div className="flex flex-col justify-between gap-1">
              <label htmlFor="">Booking allowed before:</label>
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Day"
                  className="placeholder:text-sm rounded-md border border-gray-500 px-2"
                />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="hour"
                  className="placeholder:text-sm rounded-md border border-gray-500 px-2"
                />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="mins"
                  className="placeholder:text-sm rounded-md border border-gray-500 px-2"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="">Advance Booking</label>
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Day"
                  className="placeholder:text-sm rounded-md border border-gray-500 px-2"
                />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="hour"
                  className="placeholder:text-sm rounded-md border border-gray-500 px-2"
                />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="mins"
                  className="placeholder:text-sm rounded-md border border-gray-500 px-2"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Cancel Before</label>
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Day"
                  className="placeholder:text-sm rounded-md border border-gray-500 px-2"
                />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="hours"
                  className="placeholder:text-sm rounded-md border border-gray-500 px-2"
                />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="mins"
                  className="placeholder:text-sm rounded-md border border-gray-500 px-2"
                />
              </div>
            </div>
          </div>
          <div className="my-4">
            <h2 className="text-xl bg-gray-400 text-white p-2 rounded-md font-medium my-3">
              Configure Payment
            </h2>
            <div className="flex my-4 justify-between">
              <div className="flex gap-2">
                <input type="radio" name="payment" id="postpaid" />
                <label htmlFor="postpaid">Postpaid</label>
              </div>
              <div className="flex gap-2">
                <input type="radio" name="payment" id="prepaid" />
                <label htmlFor="prepaid">Prepaid</label>
              </div>
              <div className="flex gap-2">
                <input type="radio" name="payment" id="payOnFacility" />
                <label htmlFor="payOnFacility">Pay on Facility</label>
              </div>
              <div className="flex gap-2">
                <input type="radio" name="payment" id="complimentary" />
                <label htmlFor="complimentary">Complimentary</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SetupFacility;
