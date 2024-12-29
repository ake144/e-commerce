'use client'

import Link from "next/link";

const NavSecondary = () => {
    return(
   
        <div className="md:flex md:flex-row mt-7 hidden  mx-6 items-center justify-start ">
             <Link href="/" className="p-2 hover:bg-accent rounded-md">
              home
            </Link>
            <Link href="/list" className="p-2 hover:bg-accent rounded-md">
              Shop store
            </Link>
            <Link href="/account" className="p-2 hover:bg-accent rounded-md">
              Mega menu
            </Link>
            <Link href="/account" className="p-2 hover:bg-accent rounded-md">
              DOcs
            </Link>


        </div>
    )

}


export default NavSecondary;