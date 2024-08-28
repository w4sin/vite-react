import { ReactElement } from "react";

export type TNavbar = {
    icon?: ReactElement;
    name: string;
    to: string;
    subItems?: TNavbar[];
};