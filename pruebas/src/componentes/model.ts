import { ReactNode } from "react";


export type AnchorVariant = "underlined" | "basic"; 

export type AnchorColor =
    | "azul"
    | "lila"
    | "rojo"
    | "naranja"
    | "undefined";

export type AnchorProps = {
href?:string;
underline?:boolean;
variant?:AnchorVariant;
color?:AnchorColor;
children?:ReactNode;
}