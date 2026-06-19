import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { formSchema } from "./schema";




const FormComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(formSchema) });

  console.log(errors);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md"
      >
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full p-2 border border-gray-300 rounded-md"
            {...register("name")}
          />

          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-2 border border-gray-300 rounded-md"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            className="w-full p-2 border border-gray-300 rounded-md"
            {...register("message")}
          />
          {errors.message && (
            <p className="text-red-500">{errors.message.message}</p>
          )}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormComponent;
