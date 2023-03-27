import React from "react";
import { Div, Button, H1 } from "../../../styled-components/styled-components";

export default function LivesWith({ input, handlerSetInput }) {
        
        const green = "#00FA9A"
    return (
        <Div flexDir="column">
            <H1 fSize="26px">Ahora cuentanos, ¿Con quién vives?</H1>
            <Div flWr="wrap" jfCont="space-between" wd="80%" hg="24vh" >
                <Button value="Con mis padres" name="livesWith" onClick={(e)=>handlerSetInput(e)} bg={input.livesWith.includes("Con mis padres") ? green : "#fff"}>Con mis padres</Button>
                <Button value="Con mi pareja" name="livesWith" onClick={(e)=>handlerSetInput(e)} bg={input.livesWith.includes("Con mi pareja") ? green : "#fff"}>Con mi pareja</Button>
                <Button value="Con mis hijos" name="livesWith" onClick={(e)=>handlerSetInput(e)} bg={input.livesWith.includes("Con mis hijos") ? green : "#fff"}>Con mis hijos</Button>
                <Button value="Con mis hermanos" name="livesWith" onClick={(e)=>handlerSetInput(e)} bg={input.livesWith.includes("Con mis hermanos") ? green : "#fff"}>Con mis hermanos</Button>
                <Button value="Con mi mascota" name="livesWith" onClick={(e)=>handlerSetInput(e)} bg={input.livesWith.includes("Con mi mascota") ? green : "#fff"}>Con mi mascota</Button>
                <Button value="Con amigos" name="livesWith" onClick={(e)=>handlerSetInput(e)} bg={input.livesWith.includes("Con amigos") ? green : "#fff"}>Con amigos</Button>
                <Button value="Solo" name="livesWith" onClick={(e)=>handlerSetInput(e)} bg={input.livesWith.includes("Solo") ? green : "#fff"}>Solo</Button>
                <Button value="Otro" name="livesWith" onClick={(e)=>handlerSetInput(e)} bg={input.livesWith.includes("Otro") ? green : "#fff"}>Otro</Button>
            </Div>
        </Div>
    )
}