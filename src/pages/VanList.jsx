import FilterButtons from "../components/FilterButtons";
import VanCard from "./VanCard";
import "../../server.js"
import React from "react"
export default function VanList(){
    const [vanData, setVanData] = React.useState([]);
    React.useEffect(()=>{
          fetch("/api/vans")
        .then(res => res.json())
        .then(data => setVanData(data.vans));
    },[])
    const vanDataArr = vanData.map((item)=>
            (
            <VanCard 
                    key = {item.id}
                    vanImage = {item.imageUrl}
                    vanAlt = {`${item.name} van`}
                    vanName ={item.name}
                    price = {item.price}
                    filterName ={item.type}
            />        
            ))
    return (
        <div className="van-list">
           <h1>Explore our van options</h1>
           <div className="filters">
                <FilterButtons filterName={"Simple"}/>
                <FilterButtons filterName={"Luxury"}/>
                <FilterButtons filterName={"Rugged"}/>
                <p>Clear Filters</p>
           </div>
          <div className="display-cards">
            {vanDataArr}
          </div>
        </div>
    )
}