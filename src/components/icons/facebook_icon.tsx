import { cn } from "@/lib/utils";
import { IconProps } from "@/types";

export const FacebookIcon = ( { className, primaryColor = "#1777f2" }: IconProps ) => {
    return (
        <svg
            className={ cn( "fill-current w-5 h-5", className ) }
            height="100%" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" version="1.1" viewBox="0 0 512 512" width="100%" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlns-serif="http://www.serif.com/" xmlnsXlink="http://www.w3.org/1999/xlink"><path d="M449.446,0c34.525,0 62.554,28.03 62.554,62.554l0,386.892c0,34.524 -28.03,62.554 -62.554,62.554l-106.468,0l0,-192.915l66.6,0l12.672,-82.621l-79.272,0l0,-53.617c0,-22.603 11.073,-44.636 46.58,-44.636l36.042,0l0,-70.34c0,0 -32.71,-5.582 -63.982,-5.582c-65.288,0 -107.96,39.569 -107.96,111.204l0,62.971l-72.573,0l0,82.621l72.573,0l0,192.915l-191.104,0c-34.524,0 -62.554,-28.03 -62.554,-62.554l0,-386.892c0,-34.524 28.029,-62.554 62.554,-62.554l386.892,0Z" fill={ primaryColor } /></svg>
    );
}