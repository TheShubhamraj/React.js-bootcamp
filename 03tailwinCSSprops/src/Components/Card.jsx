import React, { useState } from "react";

function Card({username ="LOKESH BHAI"}){

    // console.log('props',props);
    

    //  const [username] = useState("Alice Johnson");
  const [btnText] = useState("View Profile");
    return (
        

<div className="relative h-[400px] w-[300px] rounded-md mx-auto mt-8 shadow-lg">
        <img
          src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=800&q=60"
          alt="User"
          className="z-0 h-full w-full rounded-md object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-md"></div>
        <div className="absolute bottom-4 left-4 text-left">
          <h1 className="text-lg font-semibold text-white">{username}</h1>
          <p className="mt-1 text-sm text-gray-300">
            UI/UX Designer at PixelSoft. Passionate about minimal interfaces and great coffee.
          </p>
          <button className="mt-2 inline-flex items-center text-sm font-semibold text-white hover:underline">
            {btnText} →
          </button>
        </div>
      </div>

    )
}

export default Card