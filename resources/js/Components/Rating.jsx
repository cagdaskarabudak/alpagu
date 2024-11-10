import { useEffect, useState } from "react";

export default function Rating({
    rate = 2.6, 
    readOnly = true, 
    starCount = 5, 
    starSize = 48, 
    fillColor = "#696cff", 
    emptyColor = "transparent",
    onRateChange
}) {
    if (readOnly) {
        const [fullFilledStars, setFullFilledStars] = useState(0);
        const [emptyStars, setEmptyStars] = useState(0);
        const [percStar, setPercStar] = useState(0);

        useEffect(() => {
            const fullStars = Math.floor(rate);
            setFullFilledStars(fullStars);
            setPercStar((rate - fullStars) * 100);
            setEmptyStars(starCount - fullStars - (percStar > 0 ? 1 : 0));
        }, [rate, starCount, percStar]);

        const fullFilledStarDoms = Array.from({ length: fullFilledStars }, (_, index) => (
            <Star key={`full-${index}`} fillPerc={100} size={starSize} fillColor={fillColor} emptyColor={emptyColor} />
        ));

        const emptyStarDoms = Array.from({ length: emptyStars }, (_, index) => (
            <Star key={`empty-${index}`} fillPerc={0} size={starSize} fillColor={fillColor} emptyColor={emptyColor} />
        ));

        const percStarDom = percStar > 0 && (
            <Star fillPerc={percStar} size={starSize} fillColor={fillColor} emptyColor={emptyColor} />
        );

        return (
            <div className="rating-stars" style={{ display: 'flex', gap: '1%', width: 'fit-content' }}>
                {fullFilledStarDoms}
                {percStarDom}
                {emptyStarDoms}
            </div>
        );
    } else {
        const [activeRate, setActiveRate] = useState(0);
        const [hoverIndex, setHoverIndex] = useState(activeRate);

        const stars = Array.from({ length: starCount }, (_, index) => (
            <Star
                key={index+1}
                fillPerc={index+1 <= hoverIndex ? 100 : 0}
                size={starSize}
                fillColor={fillColor}
                emptyColor={emptyColor}
                onMouseEnter={() => setHoverIndex(index+1)}
                onMouseLeave={() => setHoverIndex(activeRate)}
                onClick={() => setActiveRate(index+1)}
            />
        ));

        useEffect(() => {
            if (onRateChange) {
              onRateChange(activeRate);
            }
          }, [activeRate]);
    
        return (
            <div className="rating-stars" style={{ display: 'flex', gap: '1%', width: 'fit-content' }}>
                {stars}
                {
                    activeRate > 0 &&
                    <span style={{cursor: 'pointer'}} className={'link-danger ms-2'} onClick={() => {setActiveRate(0); setHoverIndex(0)}}>Reset</span>
                }
                
            </div>
        );
    }
}

function Star({ fillColor = '#696cff', emptyColor = 'transparent', size = 48, fillPerc = 0, onClick, onMouseEnter, onMouseLeave }) {
    const uniqueId = `grad-${Math.random().toString(36).substr(2, 9)}`;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={'url(#' + uniqueId + ')'}
            width={size}
            height={size}
            viewBox="0 0 47.94 47.94"
            className={"star star-" + fillPerc}
            stroke={fillColor}
            strokeWidth={"1"}
            style={{ filter: 'drop-shadow(0 0 0.5px' + fillColor + ')' }}
            onClick={onClick} // Olayları burada yönetin
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <defs>
                <linearGradient id={uniqueId} x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset={fillPerc + '%'} style={{ stopColor: fillColor, stopOpacity: 1 }} />
                    <stop offset={fillPerc + '%'} style={{ stopColor: emptyColor, stopOpacity: 1 }} />
                </linearGradient>
            </defs>
            <path d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757 c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042 c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685 c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528 c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956 C22.602,0.567,25.338,0.567,26.285,2.486z" />
        </svg>
    );
}
