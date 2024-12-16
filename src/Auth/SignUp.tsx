import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Icon } from "@iconify/react";
import { useState } from 'react';
import ToastNotification from '../common/ToastNotification';
import { toast } from 'react-toastify';

function SignUp() {
    const [isLoading ,setisLoading] = useState(false);
    const schema = yup.object().shape({
        first_name : yup.string().required('name is required!'),
        last_name : yup.string().required('last name is required!'),
        username: yup.string().min(5).required('username is required!'),
        email :yup.string().email().required('email is required!'),
        password : yup.string()
        .required('Password is required!')
        .min(6, 'Password must be at least 6 characters'),
    })

    const {register , handleSubmit , formState:{errors}} = useForm({resolver: yupResolver(schema)});

    const signup = (data:any)=>{
        console.log(data , "data");
        setisLoading(true);
        toast.success('You signUp successfuly!');
        setTimeout(()=>{
            setisLoading(false);
        },3000)
    }
  return (
    <div className="py-20 w-full h-screen fixed bg-[url('./images/DALL.webp')] bg-cover bg-left  bg-opacity-50">
     <ToastNotification/>
    <div className='w-[31%] h-[560px] bg-white mx-auto  shadow-2xl rounded-lg flex flex-col items-center'>
            <div className='w-full h-20 bg-btn-gradient rounded-t-lg flex justify-center items-center'>
                <h1 className='text-4xl text-white font-bold font-sans'>Sign Up</h1>
            </div>
            <form onSubmit={handleSubmit(signup)}  className='w-full flex flex-col items-center'>
                <div className='flex w-[90%] pt-5 gap-14'>
                    <div className='w-[40%] pr-0.5'>
                        <label className='text-lg font-semibold pb-1 text-[#2e5c5b]' htmlFor="name">Name</label>
                        <input {...register('first_name')} placeholder='Name...' type="text"
                         className={`w-52 h-9 text-[#2e5c5b] bg-[#e7edf1b8] rounded-md font-semibold
                          text-base pl-1 outline-none ${errors.first_name && 'border border-red-700'} `}/>
                        <p className='text-xs text-red-700 font-bold'>{errors.first_name && errors.first_name.message}</p>
                    </div>
                    <div className='w-[40%]'>
                        <label className='text-lg font-semibold pb-1 text-[#2e5c5b]' htmlFor="lastName">Last Name</label>
                        <input {...register('last_name')} placeholder='Last name...'  type="text" className={`w-52 h-9 text-[#2e5c5b] bg-[#e7edf1b8] rounded-md font-semibold
                          text-base pl-1 outline-none ${errors.last_name && 'border border-red-700'} `} />
                        <p className='text-xs text-red-700 font-bold'>{errors.last_name && errors.last_name.message}</p>
                    </div>
                </div>
                <div className='flex w-[90%] flex-col pt-4'>
                    <label className='text-lg font-semibold pb-1 text-[#2e5c5b]' htmlFor="username">Username</label>
                    <input {...register('username')} placeholder='Username...'  type="text" className={`h-9 text-[#2e5c5b] bg-[#e7edf1b8] rounded-md font-semibold
                          text-base pl-1 outline-none ${errors.username && 'border border-red-700'} `} />
                          <p className='text-xs text-red-700 font-bold'>{errors.username && errors.username.message}</p>
                </div>
                <div className='flex w-[90%] flex-col pt-4'>
                    <label className='text-lg font-semibold pb-1 text-[#2e5c5b]' htmlFor="email">Email</label>
                    <input {...register('email')} placeholder='Email...'  type="text" className={`h-9 text-[#2e5c5b] bg-[#e7edf1b8] rounded-md font-semibold
                          text-base pl-1 outline-none ${errors.email && 'border border-red-700'} `} />
                          <p className='text-xs text-red-700 font-bold'>{errors.email && errors.email.message}</p>
                </div>
                <div className='flex w-[90%] flex-col pt-4'>
                    <label className='text-lg font-semibold pb-1 text-[#2e5c5b]' htmlFor="password">Password</label>
                    <input {...register('password')} placeholder='Password...' type="password" className={`h-9 text-[#2e5c5b] bg-[#e7edf1b8] rounded-md font-semibold
                          text-base pl-1 outline-none ${errors.password && 'border border-red-700'} `} />
                          <p className='text-xs text-red-700 font-bold'>{errors.password && errors.password.message}</p>
                </div>
                <div className='flex w-[90%] flex-col pt-8'>
                    <button type="submit" className='h-10 flex justify-center items-center text-lg font-semibold bg-btn-gradient text-white p-1.5 rounded-lg'>
                        {!isLoading ? 'Sign Up' :
                            <Icon icon="eos-icons:three-dots-loading" width="40" height="40"  style={{color: 'white'}} />                        }
                    </button>
                </div>
                <p className='pt-4 font-medium '> Already have an account?
                    <b className='cursor-pointer hover:text-[#2d7d91]'> Login</b>
                </p>
            </form>
        </div>
    </div>
  )
}

export default SignUp