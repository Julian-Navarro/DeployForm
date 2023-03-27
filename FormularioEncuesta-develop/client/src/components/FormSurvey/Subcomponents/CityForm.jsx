import React from "react";
import { Div, H1, Select } from "../../../styled-components/styled-components";

export default function CityForm({ input,  handlerSetInput }) {
    const cities = ["Chile", "Argentina", "Perú", "Bolivia", "Paraguay", "Venezuela", "México", "Colombia", "Ecuador" ];
    const commune = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const green = "#00FA9A"
    return (
        <Div flexDir="column" wd="70%" hg="30vh">
            <H1>¿Donde vives?</H1>
            <Div wd="100%" jfCont="space-between">

              <Select br="0px" wd="11rem" onClick={(e)=>handlerSetInput(e)} defaultValue={input.city} name="city" id="">
                  <option value="default">Seleccionar ciudad</option>
                  {
                      cities.map((c)=> <option value={c} key={c}>{c}</option> )
                  }
              </Select>
              <Select br="0px" wd="11rem" onClick={(e)=>handlerSetInput(e)} defaultValue={input.commune} name="commune" id="">
                  <option value="default">Seleccionar comuna</option>
                  {
                      commune.map((c)=> <option value={c} key={c}>{c}</option> )
                  }
              </Select>
            </Div>
        </Div>
    )
}