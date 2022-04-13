import React from "react";
import Tiles from "../Components/Tiles";

export default function Box() {
    const boxProp = [
        {id: 1, flag: false},
        {id: 2, flag: false},
        {id: 3, flag: false},
        {id: 4, flag: true},
        {id: 5, flag: false},
        {id: 6, flag: false},
        {id: 7, flag: false},
        {id: 8, flag: false},
        {id: 9, flag: false},
        {id: 10, flag: false},
    ]

    return (
        <>
            {
                boxProp.map(box =>
                    <Tiles id={box.id} state={box.flag}/>
                )
            }
        </>
    )
}