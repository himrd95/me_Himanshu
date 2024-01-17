export const DIMENSION_TYPE = {
    HORIZONTAL: "HORIZONTAL",
    VERTICAL: "VERTICAL",
};

function WindowSizeDevice() {
    let liveWidth = 360;
    let liveHeight = 722;

    if (typeof window !== "undefined") {
        liveWidth = window.innerWidth;
        liveHeight = window.innerHeight;
    }
    return { liveWidth, liveHeight };
}

export const getViewportToFit = ({ height, width }) => {
    const { liveWidth, liveHeight } = WindowSizeDevice();
    const verticalScale = liveHeight / height;
    const horizontalScale = liveWidth / width;
    const scale = Math.min(horizontalScale, verticalScale);

    return {
        width: width * scale,
        height: height * scale,
    };
};

/**
 * This function is scaling the asset or container dimentions according to the dimention of screen size.
 * @param ref DIMENSION_TYPE.HORIZONTAL / DIMENSION_TYPE.VERTICAL.
 * @param value the actual figma dimention of asset/container for the base screen of size `360 x 722`.
 * @returns the final calculated dimention according to the screen size in `px`.
 */
export const resolvedDimention = (ref, value) => {
    const viewport = {
        width: 360,
        height: 722,
    };

    const calculatedViewport = getViewportToFit(viewport);

    if (ref === DIMENSION_TYPE.VERTICAL) {
        const heightValue = (value * 100) / 800;
        return `${(calculatedViewport.height * heightValue) / 100}px`;
    } else if (ref === DIMENSION_TYPE.HORIZONTAL) {
        const widthValue = (value * 100) / 360;
        return `${(calculatedViewport.width * widthValue) / 100}px`;
    }
};
