import Image from 'next/image'
import Link from 'next/link'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen min-w-screen ">
     <div className="w-screen py-4 md:px-20 shadow-sm flex items-center">
     <div className="flex">
     <img src="/images/home/cirlogo.svg" className='h-6 w-6' alt="t-logo" />
     <p className='font-medium text-xl ml-2'>LOGO</p>
     </div>

     <div className="md:w-[400px] ml-auto">
     <ul className="main-menu text-black flex space-x-6 justify-center ml-40 pt-2">
  <li className="menu-item  text-sm cursor-pointer hover:text-zinc-600 font-light hover:text-blue-500 "><Link href={"../../about"}>Company</Link></li>
  <li className="menu-item text-sm cursor-pointer hover:text-zinc-600 font-light hover:text-blue-500"><Link href={"../../"}>Classes</Link></li>
  <li className="menu-item text-sm cursor-pointer hover:text-zinc-600 font-light hover:text-blue-500">Syllabus</li>
  <li className="menu-item text-sm cursor-pointer hover:text-zinc-600 font-light hover:text-blue-500">Pricing</li>
</ul>


     </div>


    {
      /*

      <img src="images/home/notificationnotification.svg" alt=""/>

      </div>
      */
    } 
<div className="md:w-[200px] ml-auto flex justify-center"></div>
    <button className="py-2 px-4 rounded-2xl shadow-xl text-blue-500 text-sm font-light grid place-content-center hover:shadow-2xl">
      <p>Sign In</p>
    </button>


    <button className="py-2 bg-blue-500 ml-2 px-4 rounded-2xl shadow-xl text-white text-sm font-light grid place-content-center hover:shadow-2xl">
      <p>Sign Up</p>
    </button>
     </div>

     <div className='w-screen h-[400px]  md:px-12'>

      <div className=" grid grid-cols-2 gap-4 py-10">

      
      <div className=' h-full w-full md:px-10 md:py-20 '>
      <p className='md:text-3xl font-normal '>Expert Mentors: Unlock<br></br> Quality Knowledge for <br></br> College <span className='text-yellow-400'>Success</span></p>

      <img src="/images/home/Vector 2underline_stle.svg" alt="" className='w-40' style={{ marginLeft:`20%`}}  />
      <img src="/images/home/Vector 2underline_stle.svg" alt="" className='w-40' style={{marginTop:`-9px`, marginLeft:`20%`}} />
    
    
      <p className='text-sm text-grey-300 font-light mt-4'>Find your expert mentor for upscale your knowledge. We provide personalized Guidance and in-depth Learning for College Students.</p>
 
 <div className='w-full flex mt-4 '>

 <button className="py-2 bg-blue-500 ml-2 px-2 w-32 rounded-2xl shadow-xl text-white text-sm font-light grid place-content-center hover:shadow-2xl">
      <p>Enter Code</p>
    </button>

<div className=' h-10 w-48 items-center flex ml-8 '>
<img src="/images/home/Playplay_icon_hero.svg" alt="" />
<p className='font-normal text-md ml-2'>Watch Later</p>

</div>



  
  
 </div>
 <div className='grid grid-cols-3 gap-2 mt-6'>

  <div className=' '>
    <p className="font-medium text-xl ">120</p>
    <p className="text-xs text-zinc-600 ">Courses</p>
  </div>

  <div className=''>
    <p className="font-medium text-xl ">500</p>
    <p className="text-xs text-zinc-600 ">Tutors</p>
  </div>

  <div className=''>
    <p className="font-medium text-xl">100K</p>
    <p className="text-xs text-zinc-600 ">Students</p>
  </div>
</div>
      </div>

      <div className='h-full w-full relative flex grid place-content-center items-center'>
  <img src="images/home/cirhero_image_part.svg" alt="classroom-reality-hero-part" />
  <img src="images/home/dphero_part.svg" className='absolute top-0 left-0 z-10 w-full h-full' alt="classroom-reality-hero-part" />


</div>
     </div>

    


     </div>

     <div className='w-screen flex justify-center mt-32'>
      <div>
      <p className='font-normal text-center text-2xl'> Why Choose Us?</p>
      <img src="/images/home/Vector 2underline_stle.svg" alt="" className='w-48'   />
      <img src="/images/home/Vector 2underline_stle.svg" alt="" className='w-48' style={{marginTop:`-11px`}} />
    
      </div>
     
    
     </div>

     <div className="w-screen md:px-16 mt-10">
      <div className='grid grid-cols-3 gap-2'>

        <div className="p-4">

          <div className="w-full h-full shadow-xl rounded-xl p-10 items-center">
            <div className="w-full flex justify-center"><div className='h-20 w-20 bg-blue-100 rounded-md'>

</div></div>

<p className="text-center font-normal text-md mt-2">Expert Mentor</p>

<p className='text-slate-500 text-xs text-center mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget felis et felis ultrices tempus at sed eros. Ut mi turpis, venenatis tristique sapien quis.</p>



          </div>


        </div>


        

        <div className="p-4">

          <div className="w-full h-full shadow-xl rounded-xl p-10 items-center">
            <div className="w-full flex justify-center"><div className='h-20 w-20 bg-blue-100 rounded-md'>

</div></div>

<p className="text-center font-normal text-md mt-2">High Quality Live Class</p>

<p className='text-slate-500 text-xs text-center mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget felis et felis ultrices tempus at sed eros. Ut mi turpis, venenatis tristique sapien quis.</p>



          </div>


        </div>



        <div className="p-4">

<div className="w-full h-full shadow-xl rounded-xl p-10 items-center">
  <div className="w-full flex justify-center"><div className='h-20 w-20 bg-blue-100 rounded-md'>

</div></div>

<p className="text-center font-normal text-md mt-2">24/7 Live Support</p>

<p className='text-slate-500 text-xs text-center mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget felis et felis ultrices tempus at sed eros. Ut mi turpis, venenatis tristique sapien quis.</p>



</div>


</div>






      </div>

     </div>

     <div className='w-screen flex justify-center mt-20'>
      <div>
      <p className='font-normal text-center text-2xl'> All Subjects</p>
      <img src="/images/home/Vector 2underline_stle.svg" alt="" className='w-48'   />
      <img src="/images/home/Vector 2underline_stle.svg" alt="" className='w-48' style={{marginTop:`-11px`}} />
    
      </div>
     
    
     </div>



     <div className="w-screen md:px-16 mt-10">
      <div className='grid grid-cols-6 gap-2'>

        <div className=" w-full shadow-xl p-2">
          <div className="justify-center flex">
          <div className='h-16 w-16 bg-blue-100 rounded-md'>

</div>
          </div>
          <p className="text-center font-normal mt-2 text-sm">English</p>
        </div>

        <div className=" w-full shadow-xl p-2">
          <div className="justify-center flex">
          <div className='h-16 w-16 bg-blue-100 rounded-md'>

</div>
          </div>
          <p className="text-center font-normal mt-2 text-sm">Mathematics</p>
        </div>


        <div className=" w-full shadow-xl p-2">
          <div className="justify-center flex">
          <div className='h-16 w-16 bg-blue-100 rounded-md'>

</div>
          </div>
          <p className="text-center font-normal mt-2 text-sm">Chemistry</p>
        </div>


        <div className=" w-full shadow-xl p-2">
          <div className="justify-center flex">
          <div className='h-16 w-16 bg-blue-100 rounded-md'>

</div>
          </div>
          <p className="text-center font-normal mt-2 text-sm">Physics</p>
        </div>
        <div className=" w-full shadow-xl p-2">
          <div className="justify-center flex">
          <div className='h-16 w-16 bg-blue-100 rounded-md'>

</div>
          </div>
          <p className="text-center font-normal mt-2 text-sm">Visual Arts</p>
        </div>


        <div className=" w-full shadow-xl p-2">
          <div className="justify-center flex">
          <div className='h-16 w-16 bg-blue-100 rounded-md'>

</div>
          </div>
          <p className="text-center font-normal mt-2 text-sm">Biology</p>
        </div>


        <div className=" w-full shadow-xl p-2">
          <div className="justify-center flex">
          <div className='h-16 w-16 bg-blue-100 rounded-md'>

</div>
          </div>
          <p className="text-center font-normal mt-2 text-sm">Biology</p>
        </div>



        <div className=" w-full shadow-xl p-2">
          <div className="justify-center flex">
          <div className='h-16 w-16 bg-blue-100 rounded-md'>

</div>
          </div>
          <p className="text-center font-normal mt-2 text-sm">Biology</p>
        </div>


        <div className=" w-full shadow-xl p-2">
          <div className="justify-center flex">
          <div className='h-16 w-16 bg-blue-100 rounded-md'>

</div>
          </div>
          <p className="text-center font-normal mt-2 text-sm">Biology</p>
        </div>


        <div className=" w-full shadow-xl p-2">
          <div className="justify-center flex">
          <div className='h-16 w-16 bg-blue-100 rounded-md'>

</div>
          </div>
          <p className="text-center font-normal mt-2 text-sm">Biology</p>
        </div>


        <div className=" w-full shadow-xl p-2">
          <div className="justify-center flex">
          <div className='h-16 w-16 bg-blue-100 rounded-md'>

</div>
          </div>
          <p className="text-center font-normal mt-2 text-sm">Biology</p>
        </div>


        <div className=" w-full shadow-xl p-2 grid place-content-center">
          
          <p className="text-center font-normal mt-2 text-xs text-blue-600 cursor-pointer hover:font-medium">View All</p>
        </div>


        </div>



        
        </div>

        


        <div className='w-screen flex justify-center mt-20'>
      <div>
      <p className='font-normal text-center text-2xl'> Our Mentors</p>
      <img src="/images/home/Vector 2underline_stle.svg" alt="" className='w-48'   />
      <img src="/images/home/Vector 2underline_stle.svg" alt="" className='w-48' style={{marginTop:`-11px`}} />
    
      </div>
     
    
     </div>



     <div className='w-screen md:px-10 mt-16'>


     <div className="grid grid-cols-2 gap-4 w-full mentors-grid">
  <div className="col-span-1 w-70 container-30  ">

  <div className="w-full h-[400px]  rounded-2xl" style={{ backgroundImage: 'url("images/home/Mask groupimg_one.png")', backgroundSize: 'cover' }}>
  
  <div className="flex flex-col h-full rounded-2xl">
  <div className="h-full flex flex-col justify-end rounded-2xl" style={{ background: 'linear-gradient(to bottom, rgba(173, 216, 230, 0), rgba(0, 0, 0, 0.7))' }}>

  <p className='text-white font-medium text-xl px-8'>Oview Omoru</p>
  <p className='text-xs text-white px-8 mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
  
  
  </div>
</div>


   
  </div>
  <div className="col-span-1 w-30 h-[400px] container-70 " >

    <div className='grid grid-cols-2 gap-4'>

    <div className='h-48 w-full  rounded-xl' style={{ backgroundImage: 'url("images/home/Group 5img_two.png")', backgroundSize: 'cover' }}>

    <div className="flex flex-col h-full rounded-2xl">
  <div className="h-full flex flex-col justify-end rounded-2xl" style={{ background: 'linear-gradient(to bottom, rgba(173, 216, 230, 0), rgba(0, 0, 0, 0.7))' }}>

  <p className='text-white font-medium text-xl px-8'>Chris Omerue</p>
  <p className='text-xs text-white px-8 mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
  
  
  </div>

    </div>




<div className='h-48 w-full rounded-xl' style={{ backgroundImage: 'url("images/home/Mask groupimg_three.png")', backgroundSize: 'cover' }}>

    <div className="flex flex-col h-full rounded-2xl">
  <div className="h-full flex flex-col justify-end rounded-2xl" style={{ background: 'linear-gradient(to bottom, rgba(173, 216, 230, 0), rgba(0, 0, 0, 0.7))' }}>

  <p className='text-white font-medium text-xl px-8'>Patrick Ayeni</p>
  <p className='text-xs text-white px-8 mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
  
  
  </div>
</div>




<div className='h-48 w-full rounded-xl' style={{ backgroundImage: 'url("images/home/Mask groupimg_five.png")', backgroundSize: 'cover' }}>

    <div className="flex flex-col h-full rounded-2xl">
  <div className="h-full flex flex-col justify-end rounded-2xl" style={{ background: 'linear-gradient(to bottom, rgba(173, 216, 230, 0), rgba(0, 0, 0, 0.7))' }}>

  <p className='text-white font-medium text-xl px-8'>Ugo Nazo</p>
  <p className='text-xs text-white px-8 mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
  
  
  </div>
</div>




<div className='h-48 w-full rounded-xl' style={{ backgroundImage: 'url("images/home/Mask groupimg_four.png")', backgroundSize: 'cover' }}>

    <div className="flex flex-col h-full rounded-2xl">
  <div className="h-full flex flex-col justify-end rounded-2xl" style={{ background: 'linear-gradient(to bottom, rgba(173, 216, 230, 0), rgba(0, 0, 0, 0.7))' }}>

  <p className='text-white font-medium text-xl px-8'>Ola Femi</p>
  <p className='text-xs text-white px-8 mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
  
  
  </div>
</div>


    </div>

   

</div>


</div>

     </div>

     <div className="w-full text-center text-md font-medium text-blue-500 mt-8">
     <p className='cursor-pointer hover:ml-2'>And More+</p> 

     </div>




        <div className='w-screen flex justify-center mt-20'>
      <div>
      <p className='font-normal text-center text-2xl'> Our Student&apos;s Feedback</p>
      <img src="/images/home/Vector 2underline_stle.svg" alt="" className='w-60'   />
      <img src="/images/home/Vector 2underline_stle.svg" alt="" className='w-60' style={{marginTop:`-16px`}} />
    
      </div>
     
    
     </div>

{/*reviews */}

     <div className="w-screen flex justify-center md:px-10 mt-10">

      <div className='w-full grid grid-cols-3 gap-4'>


        <div className="w-full p-4 shadow-xl shadow-2xl rounded-xl">
        <div className="h-16  w-full flex">
          <div className="h-16 w-16 bg-blue-100 rounded-full">

          </div>

          <div className="py-2 ml-2">
            <p className="font-normal">Sarah</p>
            <p className="font-light text-xs text-zinc-600">Benin City, Nigeria</p>
          </div>

        </div>


        <p className="font-light text-xs text-zinc-600 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget felis et felis ultrices tempus at sed eros. Ut mi turpis, venenatis tristique sapien quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget felis et felis ultrices tempus at sed eros. Ut mi turpis, venenatis tristique sapien quis.</p>


        </div>





        <div className="w-full p-4 shadow-xl shadow-2xl rounded-xl">
        <div className="h-16  w-full flex">
          <div className="h-16 w-16 bg-blue-100 rounded-full">

          </div>

          <div className="py-2 ml-2">
            <p className="font-normal">Sarah</p>
            <p className="font-light text-xs text-zinc-600">Benin City, Nigeria</p>
          </div>

        </div>


        <p className="font-light text-xs text-zinc-600 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget felis et felis ultrices tempus at sed eros. Ut mi turpis, venenatis tristique sapien quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget felis et felis ultrices tempus at sed eros. Ut mi turpis, venenatis tristique sapien quis.</p>


        </div>






        <div className="w-full p-4 shadow-xl shadow-2xl rounded-xl">
        <div className="h-16  w-full flex">
          <div className="h-16 w-16 bg-blue-100 rounded-full">

          </div>

          <div className="py-2 ml-2">
            <p className="font-normal">Sarah</p>
            <p className="font-light text-xs text-zinc-600">Benin City, Nigeria</p>
          </div>

        </div>


        <p className="font-light text-xs text-zinc-600 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget felis et felis ultrices tempus at sed eros. Ut mi turpis, venenatis tristique sapien quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget felis et felis ultrices tempus at sed eros. Ut mi turpis, venenatis tristique sapien quis.</p>


        </div>



      </div>


     </div>

<Footer />
    </main>
  )
}
