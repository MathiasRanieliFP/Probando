import { ReactNode } from "react";
 

export type AnchorColor =
    | "azul"
    | "lila"
    | "rojo"
    | "naranja"
    | "undefined";

export type AnchorProps = {
href?:string;
underline?:boolean;
color?:AnchorColor;
children?:ReactNode;
}