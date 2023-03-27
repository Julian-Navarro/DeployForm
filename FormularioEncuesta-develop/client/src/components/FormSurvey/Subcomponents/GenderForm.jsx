import React from "react";
import { Div, Button, H1 } from "../../../styled-components/styled-components";

export default function GenderForm ({ input ,handlerSetInput }) {
    const green = "#00FA9A"
    return (
        <div>
            <H1 fSize="32px">Te damos la bienvenida!</H1>
            <H1 fSize="20px" >Queremos conocerte mejor para brindarte los mejores beneficios</H1>
            <H1 fSize="20px" >Podrías indicarnos ¿Con qué género te identificas?</H1>
            <Div wd="100%" jfCont="space-around">
              <Button _hoverBg={green} pd="5px 35px 5px 35px" value="Femenino" name="gender" onClick={(e)=>handlerSetInput(e)} bg={input.gender === "Femenino" ? green : "#fff"}>Mujer</Button>
              <Button _hoverBg={green} pd="5px 35px 5px 35px" value="Masculino" name="gender" onClick={(e)=>handlerSetInput(e)} bg={input.gender === "Masculino" ? green : "#fff"}>Hombre</Button>
              <Button _hoverBg={green} pd="5px 35px 5px 35px" value="Otro" name="gender" onClick={(e)=>handlerSetInput(e)} bg={input.gender === "Otro" ? green : "#fff"}>Otro</Button>
            </Div>
            <H1></H1>
        </div>
    )
}