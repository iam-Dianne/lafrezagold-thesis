import React, { useEffect, useState } from "react";
import FeatureInput from "../../components/FeatureInput";
import Button from "../../components/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../../components/Spinner";

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

const EditAccommodation = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [accommodation, setAccommodation] = useState(null);
  const [images, setImages] = useState([]);
  const [existingImages, setExistingImages] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    const fetchAccommodation = async () => {
      try {
        const response = await fetch(
          `http://localhost/lafreza-server/admin/fetch_single_accomodation.php?id=${id}`,
          {
            credentials: "include",
          }
        );

        const result = await response.json();
        // console.log(result);

        if (result.success) {
          const {
            accomodation_name,
            accomodation_type,
            features,
            capacity,
            price,
          } = result.data.accommodation;

          setValue("name", accomodation_name);
          setValue("type", accomodation_type);
          setValue("capacity", capacity);
          setValue("price", price);

          const featuresArray = features
            ? features.split(",").map((feature) => feature.trim())
            : [];
          setValue("features", featuresArray); // Set the features array for useForm

          setExistingImages(result.data.images || []);
          console.log("Accommodation data set:", {
            name: accomodation_name,
            type: accomodation_type,
            capacity,
            price,
          });

          console.log("Fetched accommodation data:", result.data.accommodation);

          //   setAccommodation(result.data.accommodation);
          //   setImages(result.data.images);
          //   setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching accommodation:", error);
      }
    };
    fetchAccommodation();
  }, [id, setValue]);

  const handleFileChange = (e) => {
    setImages([...e.target.files]);
  };

  const onSubmit = async (data) => {
    console.log("Form values before submission:", data);
    if (loading) {
      return <Spinner />;
    }

    const { name, type, features, capacity, price } = data;
    console.log("data:", data);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("type", type);

    const featuresString = (features || []).join(", ");
    formData.append("features", featuresString);
    formData.append("capacity", capacity);
    formData.append("price", price);

    // // log form data individually
    // for (let pair of formData.entries()) {
    //   console.log(pair[0] + ": " + pair[1]);
    // }

    try {
      const response = await fetch(
        "http://localhost/lafreza-server/admin/edit_accommodation.php",
        {
          method: "POST",
          body: formData,
          credentials: "include",
        }
      );

      const result = await response.json();
      console.log(result);

      if (result.success) {
        navigate("/admin/accommodation/${id}");
        toast.success(result.message);
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      console.log("An error occured: ", error);
    }
  };

  return (
    <section className="w-2/5 mx-auto py-4 mb-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="container text-gray-900"
        encType="multipart/form-data"
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
          <input
            id="images"
            type="file"
            name="images[]"
            multiple
            onChange={handleFileChange}
          />
        </section>
        <div className="flex justify-center">
          <Button
            buttonName={"Update Accomodation"}
            buttonColor={"bg-yellow-400"}
            buttonHoverColor={"hover:bg-yellow-300"}
          />
        </div>
      </form>
    </section>
  );
};

export default EditAccommodation;
