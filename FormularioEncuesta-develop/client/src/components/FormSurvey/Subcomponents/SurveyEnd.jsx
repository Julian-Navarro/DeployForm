import React from "react";
import { H1, Div} from "../../../styled-components/styled-components";
export default function SurveyEnd () {
    const [date] = Date().split(" GMT")
    const green = "#00FA9A"
    return (
        <Div flexDir="column" >
            <H1 fSize="24px">Excelente! te hemos enviado un mail confirmando nuestro contacto el día: </H1>
            <H1 pd="10px" wd="max-content" bc={green} br="40px"fSize="22px">{date.slice(3)}</H1>
            <H1 fSize="20px">Muchas gracias por permitirnos conocerte mejor, estamos seguros que podremos seguirte brindando los mejores beneficios</H1>
        </Div>
    )
}