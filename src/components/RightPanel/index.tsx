import { useEffect, useRef, useState } from 'react';
import { Ball } from '../Ball';
import { Position } from './interfaces';
import { RightPanelContainer } from './styles';

const getRandomPosition = (containerWidth: number, containerHeight: number): Position => {
    const ballSize = 50;
    const maxX = containerWidth - ballSize;
    const maxY = containerHeight - ballSize;
    return {
        x: Math.random() * maxX,
        y: Math.random() * maxY,
    };
};

export function RightPanel() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
    const [marginX, setMarginX] = useState(0);

    const handleResize = () => {
        const screenWidth = window.innerWidth;
        const object = 50;
        const newMarginX = (screenWidth / 2) + object / 2;

        setMarginX(newMarginX);
    };

    useEffect(() => {
        if (containerRef.current) {
            const { offsetWidth, offsetHeight } = containerRef.current;
            setPosition(getRandomPosition(offsetWidth, offsetHeight));
            handleResize();
            window.addEventListener('resize', handleResize);
            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, []
    );

    const handleMouseMove = (): void => {
        if (containerRef.current) {
            const { offsetWidth, offsetHeight } = containerRef.current;
            setPosition(getRandomPosition(offsetWidth, offsetHeight));
        }
    };

    return (
        <RightPanelContainer ref={containerRef}>
            <Ball onMouseOver={handleMouseMove} x={position.x} y={position.y} marginX={marginX} />
        </RightPanelContainer>
    )
}

