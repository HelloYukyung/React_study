
// map
import React from 'react'

export default function Review2() {
    function Number({number, selected}) {
        return selected ? <h1>{number}</h1> :<h3>{number}</h3>
    }

    const numbers = [1,2,3,4,5,6,7,8,9]

    return (
        <div>
            {numbers.map((item)=> (
                <Number className="title" number={item} selected ={item===3}/>
            ))}
        </div>
    )
}


// // 삼항연산자 
// import React from 'react'

// export default function Review2() {

//     const Number =({number}) => {
//         return(
//             <>
//             {number%2===0 ? <h1>{number} </h1>: <h1>f</h1>}
//             </>
//         )
    

//     }

//     return (
//         <div>
//         <Number number={0}/>
//         <Number number={1}/>
//         <Number number={2}/>

//         </div>
//     )
// }
