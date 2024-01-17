export const ExternalLink = ({ width = "24px", stroke = "black" }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0,0,256,256"
            width={width}
            height={width}
        >
            <g
                fill={stroke}
                fill-rule="nonzero"
                stroke="none"
                stroke-width="1"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
            >
                <g transform="scale(8,8)">
                    <path d="M18,5v2h5.5625l-12.28125,12.28125l1.4375,1.4375l12.28125,-12.28125v5.5625h2v-9zM5,9v18h18v-13l-2,2v9h-14v-14h9l2,-2z" />
                </g>
            </g>
        </svg>
    );
};
