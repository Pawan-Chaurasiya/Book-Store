import React from 'react'
import { useForm } from "react-hook-form"

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
} = useForm();

const onSubmit = (data) => console.log(data);
  return (
    <div className='flex h-screen items-center justify-center '>
      <div className='border-[1px] p-4 rounded-md w-min-80'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className='font-bold text-xl'>Contact Us</h1>
          {/* Name */}
          <div className='mt-4 space-y-2'>
            <label className='text-lg'>Name :</label>
            <br />
            <input 
            type="text" 
            placeholder='Enter your name'
            className='w-80 px-3 py-1 border rounded-md outline-none'
            {...register("name", { required: true })}
            />
            <br />
            {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
          </div>
          {/* Email */}

          <div className='mt-4 space-y-2'>
            <label className='text-lg'>Email Id :</label>
            <br />
            <input 
            type="email" 
            placeholder='Enter your email'
            className='w-80 px-3 py-1 border rounded-md outline-none'
            {...register("email", { required: true })}
            />
            <br />
            {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
          </div>
          {/* Message */}

          <div className='mt-4 space-y-2'>
            <label className='text-lg'>Message :</label>
            <br />
            <textarea placeholder='Enter your message' className='w-80 px-3 py-1 border rounded-md outline-none' {...register("message", { required: true })}></textarea><br />
            {errors.message && <span className='text-sm text-red-500'>This field is required</span>}
          </div>
          <button className="bg-pink-500 text-white p-2 rounded-md">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact