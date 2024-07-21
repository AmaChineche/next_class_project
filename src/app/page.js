// "use client"; // to change to client side

"use client"
import Loading from "@/components/Loading";
// import { useState } from "react";

export default function Home() {
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   async function getData() {
  //     const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  //     const json = await res.json();
  //     setData(json);
  //   }

  //   getData();
  // }, []);

  // const [count,setCount]= useState(0);
  // // console.log(count)
  // const increment =()=>{
  //   setCount(count + 1);
  // }
  // const decrement =()=>{
  //   setCount(count - 1);
  // }

  return (
    <div className="">
      <div>Home</div>
      <Loading /> 
      {/* <div>
      <h1>{count}</h1>
      <button onClick={increment}>
        click me to increase </button>
        <br/>
      <button onClick={decrement}>Click me to decrese</button>
      </div>
       */}
      {/* Uncomment and use these functions if needed */}
      {/* {increment(2)} */}
      {/* <h1>{GetGreeting("Chineche")}</h1> */}
      
    </div>
  );
}
