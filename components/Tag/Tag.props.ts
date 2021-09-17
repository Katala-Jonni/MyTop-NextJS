import { ReactNode, HTMLAttributes, DetailedHTMLProps } from "react";

export interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode,
    size?: 's' | 'm';
    color?: 'ghost' | 'red' | 'gray' | 'green' | 'primary';
    href?: string;
}
