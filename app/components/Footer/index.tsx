

export default function Footer() {


    return (


        <>
        <div className='md:h-32 h-6'></div>



        <div className="w-screen h-[250px] bg-blue-500 " >

            <div className="w-full h-full " style={{ backgroundImage: 'url("images/home/Mask groupfooterA.png")', backgroundSize: 'cover' }}>

            <div className='w-screen flex justify-center mt-20'>
      <div>
      <p className='font-normal text-center text-2xl text-white mt-10'> Subscribe For Updates</p>
      <img src="/images/home/Vector 4underline_2A.svg" alt="" className='w-64'   />
      <img src="/images/home/Vector 5underline_2B.svg" alt="" className='w-64' style={{marginTop:`-11px`}} />
    
      </div>
     
    
     </div>

   <div className="w-full text-white flex justify-center mt-6">

    <div className="md:w-[500px] w-full bg-white h-16 rounded-3xl p-4 flex">

    <input type="text" className="md:w-[300px] w-2/3 text-zinc-600 text-sm outline-none" />

<button className="md:w-[200px] w-1/3  text-sm text-white py-4 flex justify-center items-center grid place-content-center rounded-xl bg-blue-500">Subscribe</button>

    </div>

   
   </div>


            </div>
</div>



<div className="w-screen md:h-[300px] mt-auto grid place-content-center text-3xl md:px-10 md:grid-cols-4 md:gap-10 grid-cols-1">

  
{/*footer 1 */}
  <div className=" text-black">

    <p className="text-xl">LOGO HERE</p>

    <p className="text-sm font-light text-zinc-600 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Mauris eget felis et felis ultrices tempus at sed eros.</p>

    <p className="font-medium text-sm mt-8">Follow Us</p>


  </div>



  <div className="text-xs font-light ">
  <p className="text-xl font-medium">Take A Tour</p>
    <ul>
        <li className="mt-2 text-zinc-500 cursor-pointer hover:text-blue-500">Classes</li>
        <li className="mt-2 text-zinc-500 cursor-pointer hover:text-blue-500">Syllabus</li>
        <li className="mt-2 text-zinc-500 cursor-pointer hover:text-blue-500">Pricing</li>
        <li className="mt-2 text-zinc-500 cursor-pointer hover:text-blue-500">FAQs</li>

        </ul>

    
</div>



<div className="text-xs font-light ">
  <p className="text-xl font-medium">Company</p>
    <ul>
        <li className="mt-2 text-zinc-500 cursor-pointer hover:text-blue-500">About Us</li>
        <li className="mt-2 text-zinc-500 cursor-pointer hover:text-blue-500">Blog</li>
        <li className="mt-2 text-zinc-500 cursor-pointer hover:text-blue-500">Media</li>
        <li className="mt-2 text-zinc-500 cursor-pointer hover:text-blue-500">Contact Us</li>


        </ul>

    
</div>


<div className="text-xs font-light ">
  <p className="text-xl font-medium">Product</p>
  <ul className="mt-2">
        <li className="mt-2 text-zinc-500 cursor-pointer hover:text-blue-500">Get Our App</li>
  </ul>

    
</div>

</div>
        </>

    )

}