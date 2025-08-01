import {useEffect,useState} from "react"

function useCurrencyInfo(currency){
    useEffect(()=>{
        fetch(`https://v6.exchangerate-api.com/v6/e7d1cadc3eb39cf84353b0b2/latest/{currency}`)

        .then((res)=>res.json())
        .then((res) => setdata(res[currency]))

        console.log(data);
        
    },[currency])

    console.log(data);

    return data;
    
}

export default useCurrencyInfo;