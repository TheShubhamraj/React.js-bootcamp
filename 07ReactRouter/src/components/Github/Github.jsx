import React,{useEffect,useState} from "react";
import { data } from "react-router-dom";
function Github(){
    const [data,setData] = useState([])
    useEffect(()=>{
            fetch("https://api.github.com/users/hiteshchoudhary")
            .then(response =>response.json())
            .then(data =>{
                setData(data)

            })
    },[])

    return(
        <div className="text-center m-3 bg-gray-600t text-black p-4 text-3xl">Github follower:{data.followers}
        <img src={data.avatar_url} alt="git picture" width={300} />
        </div>
    )
}
export default Github;