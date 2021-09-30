import React from 'react'

export default function EventHandler() {

    const handleClick = () => alert("click");


    return (
        <>
            <input onChange={() => alert("submit")}/>
            <button onClick={handleClick}>search</button>
            <p>searching...</p>
        </>
    )
}
