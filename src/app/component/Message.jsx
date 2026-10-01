"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { IoMdArrowForward } from "react-icons/io";

export default function Message() {
  const [loading, setLoading] = useState(false);

  // destructure useForm to get register, handleSubmit, errors, and reset functions

  // use router
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    //  getValues, // for checking password and confirm password
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const payload = {
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        mobile: data.mobile,
        emailType: "staff",
      };
      console.log("Payload:", payload);
      const res = await axios.post("/api/email", payload);

      console.log("Status:", res.status);
      console.log("Response:", res.data);

      if (res.data.success || res.status == 201) {
        router.push("/");
        reset();
      }
    } catch (error) {
      console.error(error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          {/* First Name */}
          <div className="flex justify-between items-center gap-4 ">
            <div className="px-4 py-2">
              <label className=" block mb-2 font-bold text-white">
                First name
              </label>

              <input
                type="text"
                {...register("firstname", {
                  required: "First name field is required",
                })}
                className="w-[300px] h-auto outline-none py-2  bg-blue-950 text-white font-bold px-2 hover:outline-1 hover:border-2 border-orange-800"
              />

              {errors.firstname && (
                <p className="text-red-500 text-sm">
                  {errors.firstname.message}
                </p>
              )}
            </div>

            {/* Last Nam */}
            <div className="px-4 py-2">
              <label className=" block mb-2 font-bold text-white">
                Last name
              </label>

              <input
                type="text"
                {...register("lastname", {
                  required: "last name field is required",
                })}
                className="w-[300px] h-auto outline-none py-2  bg-blue-950 text-white font-bold px-2 hover:outline-1 hover:border-2 border-orange-800"
              />

              {errors.lastname && (
                <p className="text-red-500 text-sm">
                  {errors.lastname.message}
                </p>
              )}
            </div>
          </div>

          {/* tell detal */}

          <div className="flex justify-between items-center gap-4">
            {/* email */}
            <div className="px-4 py-2">
              <label className=" block mb-2 font-bold text-white">
                Email address
              </label>

              <input
                type="email"
                {...register("email", {
                  required: "Email address field is required",
                })}
                className="w-[300px] h-auto outline-none py-2  bg-blue-950 text-white font-bold px-2 hover:outline-1 hover:border-2 border-orange-800"
              />

              {errors.email && (
                <p className="text-red-500 text-sm ">{errors.email.message}</p>
              )}
            </div>

            {/* mobile */}
            <div className="px-4 py-2">
              <label className=" block mb-2 font-bold text-white">
                Mobile number
              </label>

              <input
                type="text"
                {...register("mobile", {
                  required: "mobile field is required",
                })}
                className="w-[300px] h-auto outline-none py-2  bg-blue-950 text-white font-bold px-2 hover:outline-1 hover:border-2 border-orange-800"
              />

              {errors.mobile && (
                <p className="text-red-500 text-sm">{errors.mobile.message}</p>
              )}
            </div>
          </div>

          <div className="w-full mx-auto lg:w-full l  flex justify-center items-center gap-2 py-2 ">
            <button
              type="submit"
              disabled={loading}
              className={`w-full h-auto p-2 flex justify-center items-center gap-4 lg:p-2 rounded-lg text-white lg:w-[400px] lg:auto mx-auto font-extrabold ${loading ? "bg-gray-300 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}`}
            >
              {loading ? "Sending..." : "Send enquiry"}
              <span>
                <IoMdArrowForward />
              </span>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
