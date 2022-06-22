import styled from "styled-components";
import { AnchorColor, AnchorProps } from "./model";


const getColor = (color?:AnchorColor)=>{
    switch (color){
        case "azul": return "#001FFF";
        case "lila": return "#D400FF"
        case "rojo": return "#FF0000"
        case "naranja": return "#FF8000"
    }
}

export const AnchorStyle = styled.anchor<AnchorProps>`

`