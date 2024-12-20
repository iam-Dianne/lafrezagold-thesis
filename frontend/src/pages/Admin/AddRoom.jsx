import React from "react";
import FeatureInput from "../../components/FeatureInput";
import Button from "../../components/Button";

const AddRoom = () => {
  const submitForm = () => {
    console.log("hey");
  };

  return (
    <section className="w-2/5 mx-auto py-4 mb-4">
      <div className="container text-gray-900">
        <form onSubmit={submitForm}>
          <section className="flex mb-4">
            <div className="name w-2/3">
              <label htmlFor="acc-name" className="block text-lg pb-1">
                Accomodation Name
              </label>
              <input
                type="text"
                id="acc-name"
                name="acc-name"
                placeholder="eg. Deluxe Room"
                required
                className="border rounded py-2 px-3 focus:border-gray-400 w-full"
              />
            </div>
            <div className="type w-1/3 ml-4">
              <label htmlFor="acc-type" className="block text-lg pb-1">
                Type
              </label>
              <select
                name="acc-type"
                id="acc-type"
                required
                className="border rounded py-2 px-3 focus:border-gray-400 w-full"
              >
                <option value="Room">Room</option>
                <option value="Cottage">Cottage</option>
              </select>
            </div>
          </section>
          <section className="mb-4">
            <label htmlFor="acc-features" className="block text-lg pb-1">
              Features
            </label>
            <FeatureInput />
          </section>
          <section className="flex mb-4">
            <div className="capacity w-1/3">
              <label htmlFor="acc-capacity" className="block text-lg pb-1">
                Capacity
              </label>
              <input
                type="number"
                id="acc-capacity"
                name="acc-capacity"
                placeholder="0"
                required
                className="border rounded py-2 px-3 focus:border-gray-400 w-full"
              />
            </div>
            <div className="price w-full ml-4">
              <label htmlFor="acc-price" className="block text-lg pb-1">
                Price
              </label>
              <input
                type="number"
                id="acc-price"
                name="acc-price"
                placeholder="Enter amount"
                required
                className="border rounded py-2 px-3 focus:border-gray-400 w-full"
              />
            </div>
          </section>
          <section className="mb-8">
            <label htmlFor="acc-capacity" className="block text-lg pb-1">
              Upload images:
            </label>
            <input type="file" multiple name="files[]" />
          </section>
          <div className="flex justify-center">
            <Button
              buttonName={"Add Accomodation"}
              buttonColor={"bg-yellow-400"}
              buttonHoverColor={"hover:bg-yellow-300"}
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddRoom;
