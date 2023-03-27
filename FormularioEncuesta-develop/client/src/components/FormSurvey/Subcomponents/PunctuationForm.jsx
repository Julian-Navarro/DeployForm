import React from "react";
import { Div, Button, H1 } from "../../../styled-components/styled-components";

export default function PunctuationForm({ input, handlerSetInput }) {
    const green = "#00FA9A"
    const numbers = [1,2,3,4,5,6,7,8,9,10]
    
    return (
        <Div flexDir="column">
            <H1 fSize="24px">Pensando en tu experiencia con nosotros ¿Recomiendas Help Seguros a un familiar o amigo?</H1>
            <H1 fSize="16px">Siendo 0 no los recomiendo en absoluto y 10 los recomiendo totalmente</H1>
            <Div wd="100%" jfCont="space-around">
                {
                    numbers.map((num)=> <Button bg={input.punctuation == num ? green : "#fff"} pd="10px 20px 10px 20px" name="punctuation" value={num} key={num} onClick={(e)=>handlerSetInput(e)}>{num}</Button> )
                }
            </Div>
        </Div>
    )
}