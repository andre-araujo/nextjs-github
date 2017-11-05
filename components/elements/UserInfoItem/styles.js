import styled from 'styled-components';

export const Wrapper = styled.li`
    margin: 1rem 0;

    @media (max-width: 39.94rem) {
        display: flex;
        align-items: flex-end;
    }
`;

export const Title = styled.h3`
    font-family: AvantGardeDemi;
    font-size: 1rem;
    margin-bottom: .5em;

    @media (max-width: 39.94rem) {
        margin-bottom: 0;
        margin-right: .5em;
    }
`;


export const Description = styled.p`
    font-size: .8rem;
    margin-right: .2rem;
    font-family: AvantGardeLight;

    @media (max-width: 39.94rem) {
        font-size: 1rem;
    }
`;
