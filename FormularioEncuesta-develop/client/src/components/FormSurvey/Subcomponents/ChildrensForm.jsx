import React from "react";
import { Div, Button, H1 } from "../../../styled-components/styled-components";

export default function ChildrensForm({ input, handlerSetInput }) {
    const green = "#00FA9A"
    return (
        <Div flexDir="column">
            <H1 fSize="24px">¡Nos encanta saber que eres madre!</H1>
            <H1 fSize="24px">Ahora cuéntanos ¿Cuantos hijos tienes?</H1>
            <Div wd="100%" jfCont="space-around">
                <Button pd="8px 20px 8px 20px" value="1" name="childrens" onClick={(e)=>handlerSetInput(e)} bg={input.childrens === "1" ? green : "#fff"}>1</Button>
                <Button pd="8px 20px 8px 20px" value="2" name="childrens" onClick={(e)=>handlerSetInput(e)} bg={input.childrens === "2" ? green : "#fff"}>2</Button>
                <Button pd="8px 20px 8px 20px" value="3" name="childrens" onClick={(e)=>handlerSetInput(e)} bg={input.childrens === "3" ? green : "#fff"}>3</Button>
                <Button pd="8px 20px 8px 20px" value="Más de 3" name="childrens" onClick={(e)=>handlerSetInput(e)} bg={input.childrens === "Más de 3" ? green : "#fff"}>Más de 3</Button>
            </Div>
        </Div>
    )
}