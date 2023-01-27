"use client"
import React, {useState} from 'react'
import LeftSide from "../leftside";
import RigthSide from "../rigthside";

export default function Calculator(){
    const [active, setActive] = useState("");
    const [tip, setTip] = useState("");
    const [person, setPerson] = useState("");
    const [cash, setCash] = useState("");
    return(
        <>
            <div className="section">
                <LeftSide  active={active} setActive={setActive} tip={tip} setTip={setTip} person={person} setPerson={setPerson} cash={cash} setCash={setCash} />
                <RigthSide active={active} setActive={setActive} tip={tip} setTip={setTip} person={person} setPerson={setPerson} cash={cash} setCash={setCash} />
            </div>
        </>
    )
}