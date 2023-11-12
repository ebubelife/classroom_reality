import Link from "next/link";




export default function Header() {


    return (


        <>
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
<Link href={"../../users/login"} className="py-2 px-4 rounded-2xl shadow-xl text-blue-500 text-sm font-light grid place-content-center hover:shadow-2xl">
 <p>Sign In</p>
</Link >


<Link href={"../../users/register"} className="py-2 bg-blue-500 ml-2 px-4 rounded-2xl shadow-xl text-white text-sm font-light grid place-content-center hover:shadow-2xl">
 <p>Sign Up</p>
</Link>
</div>

        </>

    )

}