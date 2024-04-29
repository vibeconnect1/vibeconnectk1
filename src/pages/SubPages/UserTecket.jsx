import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Selector from "../../containers/Selector";
import { useNavigate } from "react-router-dom";
import FileInput from "../../Buttons/FileInput";
import toast from "react-hot-toast";


const UserTicket = () => {
  const navigate = useNavigate();
  const [ticketType, setTicketType] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const [description, setDescription] = useState("");
  const [attachments, setAttachments] = useState([]);
  const options = {
    Catregory: [
      "Air Conditioning",
      "IT Support",
      "Elevator",
      "Cafeteria/Pantry",
      "Technical",
      "Repair & Maintenance",
      "Sanitization",
      "House Keeping",
      "Washing Cleaning",
      "Others",
    ],
    subCategory: ["P1", "P2", "P3"],
  };

  const handleOptionChange = (event, setState) => {
    setState(event.target.value);
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
    const fileList = Array.from(files);
    setAttachments(fileList);
  };

  //null API
  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   navigate("/mytickets");
  // };

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("Form Submitted!")

    const formData = {
      "of_phase" : 'pms',
      "tower_id" : '1',
      "wing_id": '39',
      "unit_id": '32',
      "society_staff_type": 'User',
      "complaint_type": 'Complaint',
      category_type_id : selectedCategory, // Using selectedCategory state value
      "sub_category_id": "Chnages", // Using selectedSubCategory state value
      "heading": 'read',
      "text" : ""
    };
    console.log('Form data:', formData);

    try {
      const response = await fetch('http://3.6.98.113/pms/complaints.json?token=775d6ae27272741669a65456ea10cc56cd4cce2bb99287b6', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      toast.success("Request sent Sucessfully")
      console.log('API response:', response);

      if (response.ok) {
        handleReset()
        navigate("/mytickets");
      } else {
        toast.error("Error Api")
        console.error('Failed to submit data:', response.statusText);
      }
    } catch (error) {
      toast.error("Error while Submitting")
      console.error('Error submitting data:', error.message);
      throw error;
    }
  };



  //Reset Field
  const handleReset = () => {
    setDescription("");
    setAttachments([]);
    setTicketType("");
    setSelectedCategory("");
    setSelectedSubCategory("");
  };

  return (
    <div>

      <section className="justify-center items-center min-h-screen my-15 md:flex">
        <div className="fixed left-0 top-0 h-full">
          <Navbar />
        </div>
        <div className="overflow-x-auto w-full max-w-screen-xl">
          <form
            className="border border-gray-300 rounded-lg sm:w-full md:w-[60rem] p-8"
            onSubmit={handleSubmit}
          >

            <h2 className="text-center text-xl font-bold p-2 bg-black rounded-full text-white">
              New Ticket
            </h2>
            <ul className="flex sm:flex-row flex-col justify-around my-5 items-center">
            </ul>
            <div className="ml-5 flex flex-col items-start w-full gap-4">
              <Selector
                heading={"Category Type"}
                selectedOption={selectedCategory}
                handleOptionChange={(e) =>
                  handleOptionChange(e, setSelectedCategory)
                }
                subHeading={"Choose Category"}
                options={options.Catregory}
              />
              <Selector
                heading={"Sub Category"}
                subHeading={"Choose Sub-Category"}
                options={options.subCategory}
                selectedOption={selectedSubCategory}
                handleOptionChange={(e) =>
                  handleOptionChange(e, setSelectedSubCategory)
                }
              />
            </div>

            <div className="flex flex-col my-5 gap-1">
              <label htmlFor="" className="font-bold">
                Description :
              </label>
              <textarea
                name="description"
                placeholder=" Describe your concern!"
                id=""
                cols="80"
                rows="5"
                className="border border-black rounded-md"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <FileInput name="attachments" handleFileChange={handleFileChange} />
            <div>
              {attachments.map((file, index) => (
                <div key={index}>
                  <p className="text-green">File Name: {file.name}</p>
                </div>
              ))}
            </div>
            <div className="flex gap-5 justify-center items-center my-4">
              <button
                type="submit"
                className="bg-black text-white hover:bg-gray-700 font-semibold text-xl py-2 px-4 rounded"
              >
                Submit
              </button>
              <button
                type="reset"
                className="bg-gray-400 text-black hover:bg-black hover:text-white font-semibold text-xl py-2 px-4 rounded"
                onClick={handleReset}
              >
                Clear
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}

export default UserTicket;