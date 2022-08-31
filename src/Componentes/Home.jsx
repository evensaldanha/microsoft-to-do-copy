import { useEffect } from "react"

export default function Home(){
    useEffect(() => {
        console.log("inicializou........................")
    }, [])

    return(
        <div>Home</div>
    )
}