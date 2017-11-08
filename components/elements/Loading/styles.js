import styled, { css, keyframes } from 'styled-components';

const animateDot = keyframes`
    0% {
        opacity: 0;
        transform: rotate(-90deg);
    }

    50% {
        opacity: 1;
        transform: rotate(0);
    }
`;

export default styled.div`
    align-items: center;
    background: rgba(255, 255, 255, 0.85);
    bottom: 0;
    display: flex;
    left: 0;
    opacity: 0;
    pointer-events: none;
    position: fixed;
    justify-content: center;
    right: 0;
    top: 0;
    z-index: 10;

    ${({ active }) => active && css`
        opacity: 1;
        pointer-events: all;
    `}

    span {
        animation: ${animateDot} 1s infinite;
        background: #666;
        display: inline-flex;
        height: 1rem;
        margin: 0.5rem;
        opacity: 0;
        transform: rotate(90deg);
        width: 1rem;
    }

    span:nth-child(2) {
        animation-delay: 0.1s;
    }

    span:nth-child(3) {
        animation-delay: 0.2s;
    }
`;
