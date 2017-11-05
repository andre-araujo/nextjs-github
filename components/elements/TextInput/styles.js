import styled from 'styled-components';

export const Wrapper = styled.div`
    padding: 1.25rem 0;
`;

export const Content = styled.div`
    position: relative;
    border-bottom: 1px solid #333;
`;

export const Label = styled.label`
    color: #333;
    font-family: AvantGardeLight;
    font-size: 1.5rem;
    left: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: 0.2s top, 0.2s transform, 0.2s font-size;
    pointer-events: none;
`;

export const Field = styled.input`
    background: none;
    border: none;
    box-shadow: none;
    color: #333;
    font-family: AvantGardeLight;
    font-size: 1.5rem;
    outline: none;
    width: 100%;

    :focus ~ ${Label},
    :valid ~ ${Label} {
        font-size: 1rem;
        top: 0;
        transform: translateY(-100%);
    }
`;
