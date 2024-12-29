import React from "react";
import FeatureInput from "../../components/FeatureInput";
import Button from "../../components/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const schema = yup
  .object()
  .shape({
    name: yup.string().required("Accommodation name is required"),
    type: yup.string().required("Accommodation type is required"),
    capacity: yup
      .number()
      .required("Capacity is required")
      .min(1, "Capacity must be greater than 0"),
    price: yup
      .number()
      .required("Price is required")
      .min(1, "Price must be greater than 0"),
  })
  .required();

const AddRoom = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    resolver: yupResolver(schema),
  });

  // const navigate = useNavigate();

  const onSubmit = async (data) => {
    const { name, type, features, capacity, price } = data;

    const formData = {
      name,
      type,
      features: features.join(", "),
      capacity,
      price,
    };

    await fetch("http://localhost/lafreza-server/admin/add_accomodations.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
      credentials: "include",
    });

    console.log("Form submitted: ", formData);
  };

  return (
    <section className="w-2/5 mx-auto py-4 mb-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="container text-gray-900"
      >
        <section className="flex mb-4">
          <div className="name w-2/3">
            <label htmlFor="name" className="block text-lg pb-1">
              Accomodation Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="eg. Deluxe Room"
              {...register("name")}
              className="border rounded py-2 px-3 focus:border-gray-400 w-full"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>
          <div className="type w-1/3 ml-4">
            <label htmlFor="type" className="block text-lg pb-1">
              Type
            </label>
            <select
              name="type"
              id="type"
              {...register("type")}
              className="border rounded py-2 px-3 focus:border-gray-400 w-full"
            >
              <option value="Room">Room</option>
              <option value="Cottage">Cottage</option>
            </select>
            {errors.type && (
              <p className="text-red-500 text-sm">{errors.type.message}</p>
            )}
          </div>
        </section>
        <section className="mb-4">
          <label className="block text-lg pb-1">Features</label>
          <FeatureInput
            setValue={setValue}
            featuresField={watch("features") || []}
          />
        </section>
        <section className="flex mb-4">
          <div className="capacity w-1/3">
            <label htmlFor="capacity" className="block text-lg pb-1">
              Capacity
            </label>
            <input
              type="number"
              id="capacity"
              name="capacity"
              placeholder="0"
              {...register("capacity")}
              className="border rounded py-2 px-3 focus:border-gray-400 w-full"
            />
            {errors.capacity && (
              <p className="text-red-500 text-sm">{errors.capacity.message}</p>
            )}
          </div>
          <div className="price w-full ml-4">
            <label htmlFor="price" className="block text-lg pb-1">
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              placeholder="Enter amount"
              {...register("price")}
              className="border rounded py-2 px-3 focus:border-gray-400 w-full"
            />
            {errors.price && (
              <p className="text-red-500 text-sm">{errors.price.message}</p>
            )}
          </div>
        </section>
        <section className="mb-8">
          <label htmlFor="images" className="block text-lg pb-1">
            Upload images:
          </label>
          <input id="images" type="file" multiple name="files[]" />
        </section>
        <div className="flex justify-center">
          <Button
            buttonName={"Add Accomodation"}
            buttonColor={"bg-yellow-400"}
            buttonHoverColor={"hover:bg-yellow-300"}
          />
        </div>
      </form>
    </section>
  );
};

export default AddRoom;
