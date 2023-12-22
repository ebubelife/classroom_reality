"use client"

import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/Footer'
import Header from '../components/Header'

import { useState } from 'react';

import { FormControl, Select, MenuItem } from '@mui/material'
import React from 'react'
import DashboardHeader from '../components/DashboardHeader'


export default function Dashboard() {




  return (
    <main className="min-h-screen min-w-screen ">
      <div className="md:block hidden">
      <DashboardHeader />
      </div>
   
     <div className='w-screen h-screen'>
     <div className="md:px-20 w-screen rounded-lg p-4">
  <input type="text" className="py-4 px-4 rounded-xl bg-gray-100 w-full  text-sm " placeholder="Search..." />
</div>


<div className='md:grid md:grid-cols-3 gap-4 w-screen md:px-20'>

    <div className='h-[330px] shadow-sm rounded-xl hover:shadow-xl hover:bg-blue-500 hover:text-white'>
        <img src="/images/home/Mask groupimg_three.png" alt="Mask groupimg_three.png " className='h-[240px] w-[100%]'/>

<div className='w-full px-4 mt-2'>

<p className='text-md font-semibold'>Biology</p>
</div>

    </div>

    <div className='h-[330px]  rounded-xl hover:shadow-xl hover:bg-blue-500'>


</div>

<div className='h-[330px] shadow-sm rounded-xl hover:shadow-xl hover:bg-blue-500'>


</div>

</div>


     </div>
     < Footer />

    </main>
  )
}
