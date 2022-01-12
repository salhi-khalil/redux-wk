
import './App.css';
import {inncrementHandler,decrementHandler,resetHandler,inputTextHandler} from './Redux/action'
import {useDispatch,useSelector} from 'react-redux'

function App() {
  const dispatch = useDispatch();
  // const plus = () => {
  //   dispatch(inncrementHandler())
  // }
 
  const reset = () => {
    dispatch(resetHandler())
  }
 const count = useSelector((state) => state.count)
 const text = useSelector((state) => state.data)

 const minus = () => {
   if(count > 0){ 
    dispatch(decrementHandler())
   }
}

const inputText = (data) =>{
  dispatch(inputTextHandler(data))
}
  return (
    <div className="App">
    <h1>WORKSHOP REACT REDUX</h1>
    <div className="plus">
    <button onClick={()=> dispatch(inncrementHandler()) } className="">+</button>
    <span>{count}</span>
    <br/>
    <span>{text}</span>
    <button onClick={minus}>-</button>
    </div>
      <button className="reset" onClick={reset}>RESET</button>
      <br/>
      <h1>Put your text</h1>
      <input type="text" onInput={(event)=> inputText(event.target.value)} />
    </div>
  );
}

export default App;
