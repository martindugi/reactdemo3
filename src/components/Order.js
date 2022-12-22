import "./Order.css"
import { useState } from "react"

const Order = (props) => {
    
    const [title, setTitle] = useState("nothing is selected yet")

    const [counter, setCounter] = useState(props.counter)

    //alert(counter);
    //alert(count);

    const OrderHandler = () => {
        //setTitle("co si vybral?")

        //setCounter(counter + 1);

        //alert(counter);
        //setCounter(counter + 1);
        
        if (!props.counter) 
            alert("Please select at least one OS before continue.");
        else 
            if (window.confirm('Really continue with '+props.counter+' selected item(s)?')) 
                alert('OK. Many THX for your test!');
    }

    return (
        <div class="container">
            <div class="vertical-center">
            <button className="Order" onClick={OrderHandler}>next</button>
            </div>
        </div>
    )
}
export default Order