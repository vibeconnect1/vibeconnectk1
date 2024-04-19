import React from "react";
import BackButton from "../../../Buttons/BackButton";
import Detail from "../../../containers/Detail";

const TicketDetails = () => {
    const ticketDetails = [
        { title: 'Title', description: 'Description 1' },
        { title: 'Created On', description: 'Description ' },
        { title: 'Status', description: 'Description ' },
        { title: 'Admin Priority', description: 'Description ' },
        { title: 'Ticket No:', description: 'Description ' },
        { title: 'Category', description: 'Description ' },
        { title: 'Subcategory', description: 'Description ' },
        { title: 'Reference No:', description: 'Description ' },
        
    ]
    const Creators = [
        { title: 'Created By:', description: 'Description 1' },
        { title: 'Site:', description: 'Description ' },
        { title: 'Department:', description: 'Description ' },
        { title: 'Unit', description: 'Description ' },
    ]
  return (
    <div className="m-1">
      <div className="sticky top-2">
        <BackButton to={"/tickets"} />
      </div>
      <div className="mt-10">
       <Detail details={ticketDetails} heading={"Ticket Details"} />
      </div>
      <div className="border my-6" />
      <Detail details={Creators} heading={"Creator's Info"} />
    </div>
  );
};

export default TicketDetails;
