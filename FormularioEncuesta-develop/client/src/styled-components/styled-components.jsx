import styled from "styled-components"
const green = "#00FA9A"
export const Div = styled.div`
    background: ${({bg}) => bg || "#fff"};
    padding: ${({pd})=>pd || "none"};
    display: ${({display})=>display || "flex"};
    flex-direction: ${({flexDir})=>flexDir || "row"};
    flex-wrap: ${({flWr})=>flWr};
    border-radius: ${({br})=>br ||"none"};
    border: 2px solid ${({bc})=>bc || "#fff"};
    justify-content: ${({jfCont})=>jfCont || "center"};
    align-items: ${({alItems})=>alItems || "center"};
    height: ${({hg})=>hg || "auto"};
    width: ${({wd})=>wd || "auto"};
    background-image: url(${({img})=>img});
    background-repeat: no-repeat;
    margin-right: ${({mr})=>mr || "none"};
    margin-top: ${({mt})=>mt || "none"};
    margin-bottom: ${({mb})=>mb || "none"};
    box-shadow: ${({bs})=>bs || "none"};
    clip-path: polygon(${({clPath})=>clPath || "none"});
    transform: rotateX(${({rotX})=> rotX|| "none"});
`
export const Button = styled.button`
    background: ${({bg}) => bg || "#fff"};
    padding: ${({pd})=>pd || "8px"};
    display: ${({display})=>display || "flex"};
    flex-direction: ${({flexDir})=>flexDir || "row"};
    justify-content: ${({jfCont})=>jfCont || "center"};
    align-items: ${({alItems})=>alItems || "center"};
    border-radius: .5rem;
    font-size: ${({fSize})=>fSize || "16px"};
    font-weight: ${({fWeight})=>fWeight || "700"};
    border: 2px solid ${({bc})=>bc || green};
    height: ${({hg})=>hg || "auto"};
    width: ${({wd})=>wd || "auto"};
    letter-spacing: ${({letSp})=> letSp|| "none"};
    cursor: pointer;
    transition: .4s;
    &:hover{
        background: ${({_hoverBg})=>_hoverBg || "#fff"};
        border: 2px solid ${({_hoverBc})=>_hoverBc || green};
    }
`
export const H1 = styled.h1`    
    background: ${({bg})=>bg || "#fff"};
    color: ${({color})=>color || "#161616"};
    padding: ${({pd})=>pd || "2px"};
    font-size: ${({fSize})=>fSize || "30px"};
    font-weight: ${({fWeight})=>fWeight || "500"};
    border-radius: ${({br})=>br ||"none"};
    border: 2px solid ${({bc})=>bc || "none"};
    display: ${({display})=>display || "flex"};
    flex-direction: ${({flexDir})=>flexDir || "row"};
    justify-content: ${({jfCont})=>jfCont || "center"};
    align-items: ${({alItems})=>alItems || "center"};
    height: ${({hg})=>hg || "auto"};
    width: ${({wd})=>wd || "auto"};
    margin-right: ${({mr})=>mr || "none"};
    font-family: ${({fnFamily})=>fnFamily || "cursive"};
    font-weight: ${({fWeight})=>fWeight || "500"};
    letter-spacing: ${({letSp})=> letSp|| "none"};
`
export const Select = styled.select`
    background: ${({bg}) => bg || "#fff"};
    padding: ${({pd})=>pd || "8px"};
    display: ${({display})=>display || "flex"};
    flex-direction: ${({flexDir})=>flexDir || "row"};
    justify-content: ${({jfCont})=>jfCont || "center"};
    align-items: ${({alItems})=>alItems || "center"};
    border-radius: ${({br})=>br ||".5rem"};
    font-weight: ${({fWeight})=>fWeight || "700"};
    border: 2px solid ${({bc})=>bc || green};
    heigth: ${({hg})=>hg || "auto"};
    width: ${({wd})=>wd || "auto"};
    cursor: pointer;
    transition: .4s;
    &:hover{
        background: ${({_hoverBg})=>_hoverBg || "#fff"};
        border: 2px solid ${({_hoverBc})=>_hoverBc || green};
    }
`
export const Img = styled.img`
    heigth: ${({hg})=>hg || "auto"};
    width: ${({wd})=>wd || "auto"}; 
    border-radius: ${({br})=> br ||"none"};    
`