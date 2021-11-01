import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./AddRides.css";

const AddRides = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://spooky-ghoul-71754.herokuapp.com/services", data)
      .then((res) => {
        console.log(res);
        if (res.data.insertedId) {
          alert("Added Successfully");
          reset();
        }
      });
  };

  return (
    <div className="container mt-5 text-center set-padding">
      <h1>Add Ride</h1>
      <form
        className="d-flex flex-column justify-content-center align-items-center ride-form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input {...register("name")} placeholder="Ride Title" required />
        <input
          type="number"
          {...register("price")}
          placeholder="price"
          required
        />
        <input {...register("type")} placeholder="Audience Type" required />
        <input {...register("img")} placeholder="image URL" required />
        <input type="submit" value="Add" className="bg-warning" />
      </form>
    </div>
  );
};

export default AddRides;
