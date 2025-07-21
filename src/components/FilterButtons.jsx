export default function FilterButtons({filterName}){
    let colorbtn = "";
    if(filterName === "Simple"){
        colorbtn = "orange"
    }
    else if(filterName === "Luxury"){
        colorbtn = "green"
    }
    else{
        colorbtn = "black"
    }
    return (
        <button className={`flt-btn`}>{filterName}</button>
    )
}