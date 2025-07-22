import {useEffect} from "react";
import { useParams } from "react-router-dom";
import {useState} from "react"
import "../../server.js"
export default function IndividualVan(){
    const params = useParams()
    const [vanData,setVanData] =useState(null);
    useEffect(()=>{
        fetch(`/api/vans/${params.id}`)
        .then(res => res.json())
        .then(data => setVanData(data.vans));
    },[params.id])
    
    return(
<div className="van">
  {vanData ? (
    <>
      <div className="back">{`<-`} Back to all vans</div>
      <div className="ind-card">
        <img src={`../../${vanData.imageUrl}`} alt={vanData.name} />
       
            <div className="crd-btn">{vanData.type}</div> 
            <div className="van-name">{vanData.name}</div>
            <div className="price">${vanData.price}/day</div>
            <div className="description">{vanData.description}</div>
            <button className="rent">Rent this van</button>
       
      </div>
    </>
  ) : (
    <h2>Loading...</h2>
  )}
</div>

    )
}