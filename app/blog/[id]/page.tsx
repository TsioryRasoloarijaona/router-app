"use client"
import { usePathname } from "next/navigation"

function blog (){
    const pathname = usePathname()
    const id = pathname ? pathname.split("/").pop() : null
    return(
        <p>blog {id}</p>
    )
}

export default blog