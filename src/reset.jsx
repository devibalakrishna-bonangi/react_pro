// import react,{ useState } from "react";

// function Reset(){
//     const [count,setcount]=useState(0);

//     const increment=()=>{setcount(count+1)}
//     const decrement=()=>{setcount(count-1)}
//     const reset=()=>{setcount(0)}
//    return(
    

//      <>
//      <h1>{count}</h1>
//      <button onClick={increment}>increment</button>
//      <button onClick={decrement}>decrement</button>
//      <button onClick={reset}>reset</button>
//     </>
//    )
// }
// export default Reset;

import React from "react";

class Reset extends React.Component {
  constructor() {
    super();
     
    
    this.state = {
       count:0
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  reset = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <>
        <h1>{this.state.count}</h1>
        <button onClick={this.increment}>increment</button>
        <button onClick={this.decrement}>decrement</button>
        <button onClick={this.reset}>reset</button>
      </>
    );
  }
}

export default Reset;
