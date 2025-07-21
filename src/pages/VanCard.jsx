import FilterButtons from "../components/FilterButtons";

export default function VanCard(props){
    let colorbtn = "";
    if(props.filterName === "simple"){
        colorbtn = "orange"
    }
    else if(props.filterName === "luxury"){
        colorbtn = "green"
    }
    else{
        colorbtn = "black"
    }
    console.log(props.vanImage)
   
    return(
        <div className="van-card">
            <img src={props.vanImage} alt={props.vanAlt} />
            <div className="van-info">
                <div className="van-name">{props.vanName}</div>
                <div className="price">${props.price}<p>/day</p></div>
            </div>
            <div className={`${colorbtn} crd-btn`} >{props.filterName}</div> 
        </div>
    )
}