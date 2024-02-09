import { useRef } from 'react';
import './Monitoring.css';
import {useDispatch} from "react-redux"
const Monitoring = ()=>{
    
  const dispatch = useDispatch();
 const inputElement = useRef();
  const handleIncrement = ()=>{
     dispatch({ type: "INCREMENT" });
  }
  const handleDecrement = ()=>{
  dispatch({type:"DECREMENT"});
  }
  const handlePrivacyToggle = ()=>{
    dispatch({type:"PRIVACY_TOGGLE"});
    }

  const handleAdd = ()=>{
    dispatch({
      type:"Add",
      payload:{
        num:inputElement.current.value,
      },
    });
    inputElement.current.value= "";
  }
  const handleSubtract = ()=>{
    dispatch({
      type:"SUBTRACT",
      payload:{
        num:inputElement.current.value,
      },
    });
    inputElement.current.value= "";
  }
 return(
  <>
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center ">
  <button type="button" className="btn btn-primary" onClick={handleIncrement}>+1</button>
<button type="button" className="btn btn-secondary" onClick={handleDecrement}>-1</button>
<button type="button" class="btn btn-primary "onClick={handlePrivacyToggle}>Privacy toggle</button>


  </div>
  <br></br>
  <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
  <input type="text" placeholder='Enter Number' className='Number' ref={inputElement}/>
<button type="button" className="btn btn-info" onClick={handleAdd}>Add</button>
<button type="button" className="btn btn-danger" onClick={handleSubtract}>Subtract</button>
  </div>
  </> 
    )
}
export default Monitoring;