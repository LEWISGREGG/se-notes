"use client"
import React from 'react';
import { useForm } from 'react-hook-form';

function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Name" {...register} />
      <input type="email" placeholder="Email" {...register("Email", {required: true})} />
      <textarea {...register} />

      <input type="submit" />
    </form>
  );
}

export default Form