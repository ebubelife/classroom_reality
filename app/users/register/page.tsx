"use client"

import Image from 'next/image'
import Link from 'next/link'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

import { useState } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


export default function Home() {

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };



  return (
    <main className="min-h-screen min-w-screen ">
      <div className="md:block hidden">
      <Header />
      </div>
   
<div className="w-screen md:grid md:grid-cols-2 gap-0 h-screen">

<div className='h-full  bg-blue-500 w-full  px-10 py-8'>

  <img src="/images/register/logowhite_logo.png" alt="white-logo"  />

 <div className='w-full h-full grid place-content-center'>

 <p className='text-white font-semibold text-2xl'>Lorem ipsum dolor sit amet</p>

<p className='mt-4 text-white font-light text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget felis et felis ultrices tempus at sed eros.</p>

 </div>

</div>



<div className="form-section w-full h-full md:px-8 px-4 md:py-20">

  <p className=" font-semibold text-zinc-900 text-2xl
  ">Create Account</p>

<p className=" text-zinc-700 mt-4 text-sm
  ">Enter your details and we&apos;ll create an account for you.</p>
<div className='w-full h-full grid place-content-center'>

<TextField
        fullWidth
        label="Username"
        variant="outlined"
        margin="normal"
      //  {...register('username', { required: true })}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              {/* Icon for username (replace with your icon) */}
              🙋‍♂️
            </InputAdornment>
          ),
        }}

        style={{
          borderRadius: '12px', // Adjust the border-radius to make it curvier
          marginTop: '10px', // Optional: Adjust the top margin
        }}
        inputProps={{
          style: {
            fontSize: '12px', // Adjust the font size
            color: 'slategray', // Use the slate color for text
          },
        }}
      />

      <TextField
        fullWidth
        label="Email Or Phone Number"
        variant="outlined"
        margin="normal"
      //  {...register('email', { required: true })}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              {/* Icon for email (replace with your icon) */}
              ✉️
            </InputAdornment>
          ),
        }}

        style={{
          borderRadius: '12px', // Adjust the border-radius to make it curvier
          marginTop: '10px', // Optional: Adjust the top margin
        }}
        inputProps={{
          style: {
            fontSize: '12px', // Adjust the font size
            color: 'slategray', // Use the slate color for text
          },
        }}
      />

      <TextField
        fullWidth
        label="Password"
        variant="outlined"
        margin="normal"
        type={showPassword ? 'text' : 'password'}
       // {...register('password', { required: true })}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              {/* Icon for password (replace with your icon) */}
              🔐
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={handleTogglePasswordVisibility}
                edge="end"
                size="large"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
        

        style={{
          borderRadius: '20px', // Adjust the border-radius to make it curvier
          marginTop: '10px',
          width: '300px', // Optional: Adjust the top margin
        }}
        inputProps={{
          style: {
            fontSize: '12px', // Adjust the font size
            color: 'slategray', // Use the slate color for text
          },
        }}
      />

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Submit
      </button>


</div>

</div>


</div>
    

    </main>
  )
}
