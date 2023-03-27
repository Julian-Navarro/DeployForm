import React, { useEffect, useState } from "react";
import axios from "axios";
import { HOST } from "../../utils.js";
import { useNavigate } from "react-router-dom";
import { H1, Div, Button} from "../../styled-components/styled-components";

export default function Survey () {
    const navigate = useNavigate();
    const [surveys, setSurveys] = useState(undefined);
    const getSurveys = async () => {
        const surveysDB = await axios.get(`${HOST}/api/surveys`)
        setSurveys(surveysDB.data)
    }
    useEffect(() => {
        getSurveys()
    },[])

    return (
        <Div flexDir="column" >
            <H1 fSize="40px"letSp=".1rem">Encuestas</H1>
            <Button _hoverBc="orange" letSp=".1rem"wd="12rem"hg="3rem"fSize="22px"onClick={()=>navigate("/survey")}>Hacer encuesta</Button>
            <Div flWr="wrap" jfCont="space-around"  alItems="space-around" wd="100%" hg="100vh">
            {surveys !== undefined ? surveys.map((sur)=> (
                <Div bs="8px 8px .7rem .3rem gray"
                    bc="black" 
                    mt="26px" 
                    br="10px" 
                    flexDir="column" 
                    wd="370px" 
                    hg="500px" 
                    key={sur.id}
                    >
                    <Div bc="none"flexDir="column"jfCont="space-between"wd="100%"hg="60%"br="10px">
                        <Div clPath="50% 0, 99% 0%, 80% 100%, 1% 0"bc="none"bg="#56C985" wd="100%" hg="36px"></Div>
                        <br />
                        <Div wd="90%"hg="1.7rem" mb="4px" bc="none"bg="#5AD4EC"br="none" clPath="93% 0, 100% 93%, 7%  100%, 0% 7%">
                            <H1 mr="4px" br="12px"fSize="16px" fWeight="700"wd="5rem"bg="#5AD4EC">Género: </H1>
                            <H1 mr="4px" br="12px"pd="0px" fSize="16px"wd="5rem"bg="#5AD4EC">{sur.gender}</H1>
                        </Div>
                        <Div wd="90%"hg="1.7rem" mb="4px" bc="none"bg="#5AD4EC"br="none" clPath="100% 0%, 83% 80%, 5%  100%, 20% 0%">
                            <H1 mr="4px" br="12px"fWeight="700" fSize="16px"wd="5rem"bg="#5AD4EC">Ciudad: </H1>
                            <H1 mr="4px" br="12px"pd="0px" fSize="16px"wd="5rem"bg="#5AD4EC">{sur.city}</H1>
                        </Div>
                        {sur.childrens?
                        <Div wd="90%"hg="1.7rem" mb="4px" bc="none"bg="#5AD4EC"br="none" clPath="100% 0%, 93% 90%, 10%  100%, 20% 0%">
                            <H1 mr="4px" br="12px"fSize="16px" fWeight="700"wd="5rem"bg="#5AD4EC">Hijos: </H1>
                            <H1 mr="4px" br="12px"pd="0px" fSize="16px"wd="5rem"bg="#5AD4EC">{sur.childrens}</H1> 
                        </Div>
                        :null}
                        <Div wd="90%"hg="1.7rem" mb="4px" bc="none"bg="#5AD4EC"br="none" clPath="93% 0, 100% 93%, 7%  100%, 0% 7%">
                            <H1 mr="4px" br="12px"fSize="16px" fWeight="700"wd="5rem"bg="#5AD4EC">Comuna: </H1>
                            <H1 mr="4px" br="12px"pd="0px" fSize="16px"wd="5rem"bg="#5AD4EC">{sur.commune}</H1>
                        </Div>
                        <Div wd="90%"hg="1.7rem" mb="4px" bc="none"bg="#5AD4EC"br="none" clPath="100% 0%, 83% 80%, 5%  100%, 20% 0%">
                            <H1 mr="4px" br="12px"fSize="16px" fWeight="700"wd="5rem"bg="#5AD4EC">Puntuación: </H1>
                            <H1 mr="4px" br="12px"pd="0px" fSize="16px"wd="5rem"bg="#5AD4EC">{sur.punctuation}</H1>
                        </Div>
                    </Div>
                    <Div bc="none"jfCont="space-around" clPath="93% 0, 100% 93%, 7% 100%, 0% 7%"wd="100%" hg="50%"bg="#56C985">
                        <Div hg="100%"bc="none" flexDir="column"br="10px"wd="50%"jfCont="space-between"bg="transparent">
                            <H1 mr="4px" br="8px"fSize="18px" fWeight="700"hg="1rem" bg="transparent"> Vive: </H1>
                            <Div wd="100%" hg="80%"flexDir="column" bc="none"br="0px 0px 0px 10px"bg="transparent">
                                {
                                sur.livesWith.map((lv) => <H1 fWeight="700"br="8px" fSize="14px"hg=".7rem"wd="6rem"bg="#B8FFD5"pd="3px">{lv}</H1>  )
                                }
                            </Div>
                        </Div>

                        <Div br="5%" bc="none" hg="100%" flexDir="column"wd="50%"bg="transparent">
                            <H1 mr="4px" br="8px"fSize="18px" fWeight="700"hg="1rem" bg="transparent">Ocupaciones: </H1>
                            <Div wd="100%" hg="80%" flexDir="column" bc="none"br="0px 0px 10px 0px"bg="transparent">
                                {
                                sur.occupation.map((occ) => <H1 fWeight="700"br="8px"fSize="14px"hg=".7rem"wd="6rem"bg="#B8FFD5"pd="3px">{occ}</H1> )
                                }
                            </Div>                           
                        </Div>
                    </Div>
                </Div>
                )) : null}
            </Div>

        </Div>
    )
}