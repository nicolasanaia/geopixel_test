import { useEffect, useRef, useState } from 'react';
import { Ball } from '../Ball';
import { Position } from './interfaces';
import { RightPanelContainer } from './styles';

// calcula uma posição aleatória levando em conta o tamanho da bola e
// do container em que está limitado
const getRandomPosition = (containerWidth: number, containerHeight: number): Position => {
    const ballSize = 50;
    const maxX = containerWidth - ballSize;
    const maxY = containerHeight - ballSize / 2;
    return {
        x: Math.random() * maxX,
        y: Math.random() * maxY,
    };
};

export function RightPanel() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
    const [marginX, setMarginX] = useState(0);

    // tive a necessidade de criar essa função para que a distância em relação ao painel esquerdo
    // fosse respeitado responsivamente
    // ela detecta qual é o tamanho atual da largura e gera um valor de margem a ser passado para a bola
    const handleResize = () => {
        const screenWidth = window.innerWidth;
        const object = 50;
        const newMarginX = (screenWidth / 2) + object / 2;

        setMarginX(newMarginX);
    };

    // quando o componente é carregado, o useEffect carrega a bola numa posição aleatória
    // e adiciona um event listener para monitorar mudanças no tamanho do container e aciona
    // a handleResize quando os tamanhos mudam
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

    // ao passar o mouse por cima da bola, ele obtém a atual largura e altura do container
    // e trigga a função getRandomPosition, setando os valores do estado do position 
    const handleMouseMove = () => {
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

