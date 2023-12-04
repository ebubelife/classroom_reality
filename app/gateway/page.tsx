"use client"

import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/Footer'
import Header from '../components/Header'

import { useState } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { FormControl, Select, MenuItem } from '@mui/material'
import React from 'react'


export default function Login() {

  const [showPassword, setShowPassword] = useState(false);
  const [selectedClass, setSelectedClass] = React.useState('Select Your Class');
  const [selectedMajor, setSelectedMajor] = React.useState('Select Your Major');
  
  const [selectedTerm, setSelectedTerm] = React.useState('Select Your Term');



  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleClassChange = (event:any) => {
    setSelectedClass(event.target.value);
};

  const handleMajorChange = (event:any) => {
    setSelectedClass(event.target.value);
};

const handleTermChange = (event:any) => {
    setSelectedClass(event.target.value);
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



<div className="form-section w-full h-full md:px-8 px-4 md:py-10">

  <p className=" font-semibold text-zinc-900 text-2xl
  ">Enter Class</p>

<p className=" text-zinc-700 mt-4 text-sm
  ">Select details for the class you want to access.</p>
<div className='w-full h-full grid place-content-center'>


<p className='text-zinc-800 font-semibold'>Class</p>
    <div className='mt-2'></div>
<FormControl className='w-80'>
      <Select
      className='w-80'
        value={selectedClass}
        onChange={handleClassChange}
        displayEmpty

       // className="w-full md:w-[200px] mr-auto"
      >
      

        <MenuItem value="Select Your Class" disabled>Select Your Class</MenuItem>
        <MenuItem value="Organic Chemistry">Organic Chemistry</MenuItem>
       
      </Select>

    </FormControl>

   
    <div className='mt-4'></div>

    <p className='text-zinc-800 font-semibold'>Major</p>
    <div className='mt-2'></div>

    <FormControl className='w-80'>
      <Select
      className='w-80'
        value={selectedMajor}
        onChange={handleMajorChange}
        displayEmpty

       // className="w-full md:w-[200px] mr-auto"
      >
      

        <MenuItem value="Select Your Major" disabled>Select Your Major</MenuItem>
        <MenuItem value="Carbon Compounds">Carbon Compounds</MenuItem>
       
      </Select>
    </FormControl>


    <div className='mt-4'></div>

<p className='text-zinc-800 font-semibold'>Term</p>
<div className='mt-2'></div>

<FormControl className='w-80'>
  <Select
  className='w-80'
    value={selectedTerm}
    onChange={handleTermChange}
    displayEmpty

   // className="w-full md:w-[200px] mr-auto"
  >
  

    <MenuItem value="Select Your Term" disabled>Select Your Term</MenuItem>
    <MenuItem value="1st Term">1st Term</MenuItem>
   
  </Select>
</FormControl>
    <div className='mt-4'></div>

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Enter Class
      </button>


</div>

</div>


</div>
    

    </main>
  )
}
