import "./AllOS.css"
import OSrows from "./data"
import Book from "./Book"
import { useState } from "react"

const AllOS = (props) => {
    const [OSrow, setOSrows] = useState(OSrows)

    const OSHandler = (inputOSid) => {
    
        //alert(OSid);
        const modifiedOSrows = OSrow.filter( (currOSrow) => {
           return currOSrow.id !== inputOSid
        } )
        setOSrows(modifiedOSrows)            
    }

    const IncreaseOne = () => {
        props.increase();
    }

    const DecreaseOne = () => {
        props.decrease();
    }

    const handleClick = event => {
        // 👇️ toggle class on click        
        
        event.currentTarget.classList.toggle('main-heading2');

        // 👇️ add class on click
        // event.currentTarget.classList.add('bg-salmon');
    
        // 👇️ remove class on click
        // event.currentTarget.classList.remove('bg-salmon');
        if (event.currentTarget.className != "OS") {
            //alert("zapol");
            IncreaseOne();
            }
        else   {
            DecreaseOne();
        }
            
      };

    //className="Order"
    //onClick={props.increase}
    //onClick={() => OSHandler(currOSrow.id)}
    
    return <div className="AllOS">
    {
        OSrow.map ( (currOSrow) => {
            return <div className="OS" key={currOSrow.id} onClick={handleClick}>
                <Book image={currOSrow.image} name={currOSrow.name} id={currOSrow.id}/>
                <button onClick={() => OSHandler(currOSrow.id)}>remove</button>
            </div>
        })
    }
    </div>
  }
  export default AllOS
