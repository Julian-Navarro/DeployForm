import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import GenderForm from "./Subcomponents/GenderForm";
import LivesWith from "./Subcomponents/LivesWithForm";
import ChildrensForm from "./Subcomponents/ChildrensForm";
import CityForm from "./Subcomponents/CityForm";
import OccupationForm from "./Subcomponents/OccupationForm";
import PunctuationForm from "./Subcomponents/PunctuationForm";
import SurveyEnd from "./Subcomponents/SurveyEnd";
import axios from "axios";
import { HOST } from "../../utils";
import { Div, Button, H1, Img } from "../../styled-components/styled-components";
import img from "../../img.png"
import logo from "../../images.png"
import icon from "../../icon.jpg"

export default function FormSurvey () {
    const green = "#00FA9A"
    const [flag, setFlag] = useState(false)
    function handlerSetFlag(){
        if(flag) {
            setFlag(false)
        } else {
            setFlag(true)
        }
    }
    const navigate = useNavigate()
    const [page, setPage] = useState(0);
    const [input, setInput] = useState({
        gender: "",
        livesWith: [],
        city: "",
        commune: "",
        punctuation: 0,
        childrens: "",
        occupation: [] 
    })
    let [errors, setErrors] = useState({
        gender: "",
        livesWith: "",
        city: "",
        commune: "",
        punctuation: "",
        childrens: "",
        occupation: "" 
    })
    function handlerSetInput(e) {
        if(typeof input[keys[page]] === "object") {
            if(!input[keys[page]].includes(e.target.value)) {
                input[keys[page]].push(e.target.value)

            } else {
                const index = input[keys[page]].indexOf(e.target.value);
                const first = input[keys[page]].slice(0, index);
                const second = input[keys[page]].slice(index+1);
                const final = [...first, ...second]
                setInput({...input, [keys[page]]: final})
            }
        } else {
            if(e.target.value!== "default") {
                setInput({...input, [e.target.name]: e.target.value})
            } else {
                setInput({...input, [e.target.name]: ""})
            }
        }
        handlerSetFlag()
    }

    const keys = ["gender", "livesWith", "childrens", "city", "occupation", "punctuation"];
    const keysEspañol = ["género", "con quién vives", "cuantos hijos tienes", "dónde vives y comuna", "cual es tu ocupación", "una puntuación de recomendación"]
    function validate(page) {
        if(typeof input[keys[page]] === "object") {
            if(input[keys[page]].length === 0) {
                errors = {...errors, [keys[page]]: `Debes indicar ${keysEspañol[page]}`}
            } else {
                errors = {...errors, [keys[page]]: ""}
            }
        } else if(page===3){
            if(input.city === "" || input.commune === ""){
                errors = {...errors, [keys[page]]: `Debes indicar ${keysEspañol[page]}`}
            } else {
                errors = {...errors, [keys[page]]: ""}
            }
        } else {
            if(input[keys[page]] === "" || input[keys[page]] === 0){
                errors = {...errors, [keys[page]]: `Debes indicar ${keysEspañol[page]}`}
            } else {
                errors = {...errors, [keys[page]]: ""}
            }
        }
    }

    function handlerIncrementPage() {
        validate(page)
        if(errors.gender === "" 
          && errors.livesWith === ""
          && errors.childrens === ""
          && errors.city === ""
          && errors.commune === ""
          && errors.occupation === ""
          && errors.punctuation === ""
        ) {
            if(page!==1){
                setPage(page+1)
            } else if(!input.livesWith.includes("Con mis hijos")) {
                setPage(page+2)
            } else {
                setPage(page+1)
            }
        } else {
            alert("Faltó seleccionar una opción")
        }
        if(input.gender !== ""
        && input.livesWith.length !== 0
        && input.city !== ""
        && input.commune !== ""
        && input.occupation.length !== 0
        && input.punctuation !== 0
        ) {
            handlerPostSurvey()
        }
    }

    function handlerDecrementPage(){
        if(page===3 && !input.livesWith.includes("Con mis hijos")){
            setPage(page-2)
        } else {
            setPage(page-1)
        }
    }
    async function handlerPostSurvey(){
        await axios.post(`${HOST}/api/surveys`, {...input, punctuation: Number(input.punctuation)})
    }
useEffect(()=>{
},[page, flag])
    return (
        <Div flexDir="column" wd="99%"hg="95vh">
            <Div wd="95%" jfCont="space-between">
                <Div>
                    <Img wd="140px" src={icon}></Img>
                    {page === 0 ?<H1 fSize="20px"> 40</H1>:null}
                    {page === 1 ?<H1 fSize="20px">36</H1>:null}            
                    {page === 2 ?<H1 fSize="20px">34</H1>:null}    
                    {page === 3 ?<H1 fSize="20px">32</H1>:null}    
                    {page === 4 ?<H1 fSize="20px">30</H1>:null}    
                    {page === 5 ?<H1 fSize="20px">6</H1>:null}  
                    {page === 6 ?<H1 fSize="20px">0</H1>:null}
                    <H1 fSize="16px">'' segundos para terminar</H1>
                </Div>

                <Img bSh="0 0 1rem .3rem gray"br="50%" wd="8rem" hg="8rem" src={logo} alt="" />
            </Div>

            <Div alItems="flex-end" flexDir="column" wd="90%" hg="82vh" img={img}>


                <Div hg="60%" wd="45%">
                  {page===0? <GenderForm input={input} handlerSetInput={handlerSetInput}/>:null}
                  {page===1? <LivesWith input={input} handlerSetInput={handlerSetInput}/>:null}
                  {page===2? <ChildrensForm input={input} handlerSetInput={handlerSetInput}/>:null}
                  {page===3? <CityForm input={input} handlerSetInput={handlerSetInput}/>:null}
                  {page===4? <OccupationForm input={input} handlerSetInput={handlerSetInput}/>:null}
                  {page===5? <PunctuationForm input={input} handlerSetInput={handlerSetInput}/>:null}
                  {page===6? <SurveyEnd/>:null}
                </Div>
  
                  <Div wd="45%" jfCont="space-evenly">
                    {page>= 1 && page <= 5?<Button _hoverBg="#3CB371" _hoverBc="#3CB371"  bg={green} onClick={()=>handlerDecrementPage()}>Volver</Button>:null}
                    {page <=5?<Button _hoverBg="#3CB371" _hoverBc="#3CB371"  bg={green} onClick={()=>handlerIncrementPage()}>Siguiente</Button>:null}
                    {page===6?<Button _hoverBg="#3CB371" _hoverBc="#3CB371"  bg={green} onClick={()=>{alert("Encuesta finalizada"); navigate("/")}}>Finalizar</Button>:null}
                  </Div>



            </Div>
        </Div>
    )
}