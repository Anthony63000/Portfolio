import stylesBanner from "../Banner/banner.module.scss"
import stylesHeader from "../Header/header.module.scss";
import { useTheme } from "../Context/ContextTheme";


function LogoEntreprise() {

    const { theme } = useTheme();

    const logoClasses = `${stylesBanner.logo} ${stylesHeader.logo}`;

    let themeClasses;
    if (theme === 'light') {
    themeClasses = `${stylesBanner.light} ${stylesHeader.light}`;
    } else {
    themeClasses = `${stylesBanner.dark} ${stylesHeader.dark}`;
    }

    const combinedClasses = `${logoClasses} ${themeClasses}`;


    return (
        <svg 
            className={combinedClasses}
            version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="119.000000pt" height="81.000000pt" viewBox="0 0 119.000000 81.000000"
            preserveAspectRatio="xMidYMid meet">
                <g transform="translate(0.000000,81.000000) scale(0.100000,-0.100000)"
                stroke="none">
                    <path  d="M504 761 c-23 -10 -54 -35 -70 -55 l-29 -36 -95 0 c-61 0 -100 -4
                    -108 -12 -7 -7 -12 -43 -12 -92 0 -45 -4 -86 -8 -93 -4 -7 -30 -24 -57 -39
                    -69 -36 -105 -72 -105 -105 0 -33 36 -65 83 -74 65 -13 67 -14 67 -54 0 -20 5
                    -42 12 -49 9 -9 115 -12 414 -12 346 0 403 2 414 15 9 11 11 43 6 123 l-7 108
                    60 38 c91 56 116 107 69 140 -33 24 -45 19 -14 -5 14 -11 26 -26 26 -34 0 -18
                    -59 -68 -99 -85 -45 -18 -51 -6 -51 103 0 127 0 127 -118 127 l-97 0 -29 36
                    c-36 46 -97 74 -161 74 -28 0 -69 -9 -91 -19z m166 -182 c0 -143 3 -138 -62
                    -87 -33 26 -41 28 -91 22 -30 -4 -57 -2 -60 3 -6 9 188 193 204 193 5 0 9 -59
                    9 -131z m-284 27 c-9 -49 11 -117 46 -160 83 -101 240 -103 323 -5 37 45 47
                    75 46 142 l-1 57 80 0 c56 0 82 -4 85 -12 2 -7 6 -59 8 -115 l5 -102 -37 -14
                    c-120 -48 -410 -102 -614 -113 l-119 -7 7 174 c4 96 9 177 12 182 2 4 40 7 85
                    7 l80 0 -6 -34z m-208 -248 l-3 -73 -35 3 c-43 5 -90 28 -90 46 0 21 96 96
                    123 96 4 0 7 -33 5 -72z m802 -37 c0 -26 3 -69 6 -95 l7 -46 -398 0 -397 0 6
                    23 c3 12 6 25 6 30 0 4 46 7 103 7 162 0 458 54 592 109 72 29 75 28 75 -28z"/>
                    <path  d="M97 103 c-14 -13 -6 -53 12 -63 13 -6 184 -10 488 -10 505 0 509 0
                    501 51 l-3 24 -496 3 c-272 1 -499 -1 -502 -5z m653 -28 c0 -13 -24 -15 -155
                    -15 -131 0 -155 2 -155 15 0 13 24 15 155 15 131 0 155 -2 155 -15z"/>
                </g>
        </svg>
    )
}

export default LogoEntreprise