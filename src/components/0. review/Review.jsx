import React from 'react'

export default function Review() {

    const Paint =(props)=> {
        return (
        <>

        <h1>hello {props.title} is {props.name} ,{props.children} </h1>
        </>
        )
    }

    const Timmy = () => {
        return (
            <h1>Timmy </h1>
        )
    }

    return (
        <div>
            <Paint title= "myname" description ="yukyung">
                bye yukyung
                <Timmy/>
                </Paint>
            
            
            <h1>hello, myname is yukyung</h1>
        </div>
    )
}
