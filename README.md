This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.




18-07-2024
**************************************
"use client" //to change to client site
import Image from "next/image";
import Loading from "@/components/Loading";

export default function Home() {

function getData(hello){
  const res = fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))

}
 


  // function increment(count){
  //   console.log(count);
  // }
  // function GetGreeting(nam){
  //   return hello ${nam}
  // }
  // const name="Chineche"
  // <Loading na = {name} hi={res} should be inside the main/> 
  return (
    <main>
    
   
    <div>Home</div>
    <Loading respon={res}/> 
    {increment(2)}
    <h1>getData(hello)</h1>
    <h1>getData(nam)</h1>
    {/* <h1>{GetGreeting(name)}</h1> */}
    </main>
  );
}
*******************************************************************************
*************** THURSDAY 18TH 2024*********************************************
         USESTATE
         EVENTHANDLER

USESTATE: use state is use to upload and modify the state/condition of an element
use state dont work in server site, you have to change it to client site by using "USE CLIENT" in your page.js.

                            ***What is State in React?***
State is an object that holds some information that may change over the lifetime of the component. It's used to create interactive and dynamic components. When the state of a component changes, React re-renders the component to reflect the updated state.

                            ***The useState Hook***
The useState hook allows you to add state to a functional component. Here's a breakdown of how it works and how to use it:

state: The current state value.
setState: A function that lets you update the state.
initialState: The initial value of the state

EXAMPLE DONE IN THE CLASS
we created a counter that will increase when the button is been clicked and decrease using the "USESTATE" react Hooke

FIRST : you import your "USESTATE" from react in your page.js
remember our page.js have two section : where js is written and where you can declare then (also noote that in react we dont use html rather it is called jsx);
    from the image above line 10 is where we initialise our usestate
    recall that useState(0)- is the initial value. i can decide to change it to any value of my choice.
    
    Line 12-17 is where we create our function that will update the state.
 The increment function calls setCount(count + 1), which updates *count* to its current value plus one. 
 likewise the decrement.

Line 34 : display yout js code in ur jsx : lemme say it makes it work:
Line 33-39 contains  buttons which trigger the onclick eventlistener to call the function.




