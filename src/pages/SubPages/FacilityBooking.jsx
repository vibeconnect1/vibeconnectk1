import React from "react";

const FacilityBooking = () => {
  return (
    <section className="w-screen">
      <div className="flex flex-col">
        <div className="flex  justify-center bg-black m-4 p-2 rounded-md">
          <h2 className="text-xl font-semibold text-center text-white ">
            Book Facility
          </h2>
        </div>
        <div className="flex justify-center my-5">
          <div className="flex gap-10">
            <div className="flex gap-2">
              <input type="radio" name="user" id="fm" />
              <label htmlFor="fm">FM User</label>
            </div>
            <div className="flex gap-2">
              <input type="radio" name="user" id="occupant" />
              <label htmlFor="occupant">Occupant User</label>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilityBooking;
