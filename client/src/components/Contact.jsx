import React, { useState } from "react";

const Contact = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
  });

  const handleChange = (e,value) => {
    setFormData({ ...formData, [e]: value });
  };

  const handleSubmit = (e) => {
    console.log(formData)
    // e.preventDefault();
    // Make the HTTP request to send the form data to the backend
    fetch("/api/submitFormData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the backend
        console.log(data);
        // Reset the form
        setFormData({
          firstName: "",
          lastName: "",
          address: "",
          city: "",
        });
        // Close the modal
        setShowModal(false);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
    return(
        <div>
            <>
        <button
          className="bg-blue-200 text-black active:bg-blue-500 
        font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Fill Details
        </button>
        {showModal ? (
          <>
            <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                    <h3 className="text-3xl font=semibold">General Info</h3>
                    <button
                      className="bg-transparent border-0 text-black float-right"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                        x
                      </span>
                    </button>
                  </div>
                  <div className="relative p-6 flex-auto">
                    <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
                      <label className="block text-black text-sm font-bold mb-1">
                        First Name
                      </label>
                      <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" onChange={(e)=>{
                        handleChange("firstName",e.target.value)
                      }} />
                      <label className="block text-black text-sm font-bold mb-1">
                        Last Name
                      </label>
                      <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" onChange={(e)=>
                      handleChange("lastName",e.target.value) } />
                      <label className="block text-black text-sm font-bold mb-1">
                        Address
                      </label>
                      <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" onChange={(e)=>
                      handleChange("address",e.target.value)}/>
                      <label className="block text-black text-sm font-bold mb-1">
                        City
                      </label>
                      <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" onChange={(e)=>
                      handleChange("city",e.target.value) } />
                    </form>
                  </div>
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                      onClick={() => {setShowModal(false)}}
                    >
                      Close
                    </button>
                    <button
                      className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                      onClick={() => {setShowModal(false),handleSubmit()}}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </>
        </div>
    )
};
export default Contact;