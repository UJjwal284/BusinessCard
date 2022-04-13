import React from "react";

export default function Tiles(props) {
    const [boxState, setBoxState] = React.useState(props.state)

    const handleChange = () => {
        setBoxState(!boxState)
    }

    return (
        <div onClick={handleChange} className={'box'}
             style={boxState ? {backgroundColor: "black"} : {backgroundColor: "white"}}/>
    )
}