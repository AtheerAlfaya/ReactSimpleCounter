import { useSelector ,useDispatch } from "react-redux";
import { increment , decrement , reset } from "./counterSlice";


const Counter = () => {
  
    //we call state from our store 
    const count = useSelector((state) => state.counterReducer.count);

    //last step call dispatch hook to display the updated state
    const dispatch = useDispatch();

    const handleIncrBy1 = () => {
        dispatch(increment());
     }

     const handleRest = () => {
        dispatch(reset());
     }
        
    const handleDecrBy1 = () => {
        dispatch(decrement());
     }


     return <div>
        <h2>Count : {count} </h2>
        <button onClick={handleIncrBy1}>+</button> 
        <button onClick={handleRest}>0</button> 
        <button onClick={handleDecrBy1}>-</button> 
        
        
         </div>
    
};

export default Counter;