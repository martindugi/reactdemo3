// import CSS for this component
import "./Book.css"
import { useState } from "react";

const Book = (props) => {
    const [counter, setCounter] = useState(231)

    const increaseOne = (counter) => {
        setCounter(counter + 2)
        //alert('current nr. of selected OS is ' + counter);
    }


    //alert(props.counter);
    console.info(props);

    //const [counter, setCounter] = useState(0)

    const BookHandler = (props) => {
        //alert(props.counter);
        //setCounter(counter + 1);
    
        //alert("oznacil si ma?");
        //alert('current nr. of selected OS is ' + counter);
        //this.className = "Order";
        //setCounter(counter + 1);        
        //counter += 1;
    } 

    return (
        <div className="Bookimage" onClick={() => increaseOne(props.counter)}>
            <h2 className="main-heading">{props.name}</h2>
            <img src={props.image}></img>
        </div>
    )
}
export default Book