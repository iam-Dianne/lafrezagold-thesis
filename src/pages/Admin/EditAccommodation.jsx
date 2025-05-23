import React, { useEffect, useState } from "react";
import FeatureInput from "../../components/Admin/FeatureInput";
import Button from "../../components/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../../components/Spinner";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

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
        console.log("Fetch result:", result);

        if (result.success && result.data.accommodation) {
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

  const [images, setImages] = useState([]);
  const handleFileChange = (e) => {
    setImages([...e.target.files]);
  };

  const onSubmit = async (data) => {
    console.log("Form values before submission:", data);

    const { name, type, features, capacity, price } = data;
    console.log("data:", data);

    const formData = new FormData();
    formData.append("id", id);
    formData.append("name", name);
    formData.append("type", type);

    const featuresString = (features || []).join(", ");
    formData.append("features", featuresString);
    formData.append("capacity", capacity);
    formData.append("price", price);

    images.forEach((image) => {
      formData.append("images[]", image);
    });

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
      console.log("Server response:", result);

      if (result.success) {
        navigate(`/admin/accommodation/${id}`);
        toast.success(result.message);
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      console.log("An error occured: ", error);
    }
  };

  return (
    <section className="">
      <div className="back-container">
        <Link to={`/admin/accommodation/${id}`} className="flex items-center">
          <FaArrowLeft className="mr-2" /> Back
        </Link>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="container text-gray-900 w-2/5 mx-auto py-4 mb-4"
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
