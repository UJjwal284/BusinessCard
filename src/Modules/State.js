import React from "react";

export default function State() {
    const [thing, setThing] = React.useState(["Thing 1", "Thing 2"])

    const handleClick = () => {
        console.log(...thing)
        console.log(thing)
        setThing((thing) => {
            const newThing = [...thing]
            newThing.push("Thing " + (thing.length + 1))
            return newThing
        })
    }

    return (
        <>
            <button onClick={handleClick}>Click</button>
            {thing.map(t => <p>{t}</p>)}
        </>
    )
}