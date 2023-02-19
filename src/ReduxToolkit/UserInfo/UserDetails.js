// import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { addMyData, changeMyStatus, decrement, increment } from './counterSlice'

// export function Counter() {
//   const count = useSelector((state) => state.counter.value)
//   const storestatus = useSelector((state)=>state.counter.mystatus);
//   const storedata = useSelector((state)=>state.counter.mydata);
  
//   console.log(("before changing status = ",storestatus));
//   console.log(("before changing data = ",storedata));
//   const dispatch = useDispatch()


//   return (
//     <div>
//       <div>
//         <button
//           aria-label="Increment value"
//           onClick={() => dispatch(increment())}
//         >
//           Increment
//         </button>
//         <span>{count}</span>
//         <button
//           aria-label="Decrement value"
//           onClick={() => dispatch(decrement())}
//         >
//           Decrement
//         </button>
//         <button
//           aria-label="change status"
//           onClick={() => dispatch(changeMyStatus())}
//         >
//           change status
//         </button>
//         <button
//           aria-label="change data"
//           onClick={() => dispatch(addMyData({name:"xyz",password:"xyz@sbh"}))}
//         >
//           change status
//         </button>
//       </div>
//     </div>
//   )
// }