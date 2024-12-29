'use client'

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { Search } from "lucide-react";



const SearchBar=()=>{

    const router = useRouter()

    const  handleSearch=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()

        const formData = new FormData(e.currentTarget)

        const name = formData.get('name') as string;


        if(name){
            router.push(`/list?name=${name}`)
        }
    } 

    return (
        <form
        className="flex items-center justify-between ga[-4 bg-gray-100 rounded-md flex-1 p-2"
        onSubmit={handleSearch}
        >
                 <input
                    type="text"

                   placeholder='Search  for products...'
                   className="flex-1 bg-transparent outline-none"
                    name="name"
                    />
                    <Button  className="cursor-pointer bg-transparent hover:bg-transparent ">
                        <Search className="absolute right-3  top-2.5 h-5 w-5 text-muted-foreground" />
                    </Button>


        </form>
    )
}


export default SearchBar;