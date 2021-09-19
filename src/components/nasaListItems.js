import React, { useState } from 'react'
import { useEffect } from 'react';
import NasaItem from './nasaItem';
import ReactLoading from 'react-loading';

export default function NasaListItems() {
    const [ItemsData,setItemsData]=useState(null)

    useEffect(()=>{
        fetchData();

        async function fetchData(){

            const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=CWi939xcawDdJh1guhn36DcqQr6ZSuxXE9HsSEDC&count=25
            `);

            const data = await res.json()
            setItemsData(data)
        }

    },[])
    if(!ItemsData)return <ReactLoading
    className={"reactLoading"}
    type={"spin"}
    color={"#74b9ff"}
    height={100}
    width={100}
  />
    console.log(ItemsData)
    return (
        <div className={"nasaListItems"}>
         {ItemsData.map((item)=>(
         <NasaItem
             key={item.id}
             url={item.url}
             date={item.date}
             explanation={item.explanation}
             title={item.title}
             copyright={item.copyright}
             mediaType={item.media_type}
         />))}   
        </div>
    )
}
