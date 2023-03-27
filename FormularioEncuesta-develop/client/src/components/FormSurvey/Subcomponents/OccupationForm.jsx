import React from "react";
import { Div, Button, H1 } from "../../../styled-components/styled-components";

export default function OccupationForm({ input, handlerSetInput }) {
    const green = "#00FA9A"

    return (
        <Div flexDir="column" wd="80%">
            <H1 fSize="28px">
                Cuéntanos ¿Cuál es tu ocupación?
            </H1>
            <Div flWr="wrap" jfCont="space-around" wd="30rem" hg="8rem">
                <Button bg={input.occupation.includes("Estudio") ? green : "#fff"} name="occupation" value="Estudio" onClick={(e)=>handlerSetInput(e)} >Estudio</Button>
                <Button bg={input.occupation.includes("Trabajo") ? green : "#fff"} name="occupation" value="Trabajo" onClick={(e)=>handlerSetInput(e)} >Trabajo</Button>
                <Button bg={input.occupation.includes("Retirado") ? green : "#fff"} name="occupation" value="Retirado" onClick={(e)=>handlerSetInput(e)} >Soy pensionado / jubilado</Button>
                <Button bg={input.occupation.includes("Buscando trabajo") ? green : "#fff"} name="occupation" value="Buscando trabajo" onClick={(e)=>handlerSetInput(e)} >Estoy en búsqueda laboral</Button>
                <Button bg={input.occupation.includes("Dueño de casa") ? green : "#fff"} name="occupation" value="Dueño de casa" onClick={(e)=>handlerSetInput(e)} >Dueño/a de casa</Button>
                <Button bg={input.occupation.includes("Otro") ? green : "#fff"}  name="occupation" value="Otro" onClick={(e)=>handlerSetInput(e)} >Otra ocupación</Button>
            </Div>
        </Div>
    )
}

