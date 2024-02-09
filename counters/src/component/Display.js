import { useSelector } from "react-redux";

const Display =()=>{

  const counter = useSelector((store) => store.counter);
return<p class="lead mb-4">Disply counter: {counter}</p>



};
export default Display;