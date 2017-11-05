import styled from 'styled-components';

export const Wrapper = styled.li`
    border-bottom: 1px solid #eee;
    padding: 1.5rem 0;
`;

export const Anchor = styled.a`
    cursor: pointer;
    text-decoration: none;
`;

export const Title = styled.h3`
    color: #333;
    display: inline-block;
    font-family: AvantGardeDemi;
    font-size: 1rem;

    :hover {
        opacity: .6;
    }

    img {
        margin-left: .8rem;
    }
`;

export const Starts = styled.p`
    font-family: AvantGardeMedium;
    font-size: .7rem;
    margin-right: .5rem;
`;

export const Language = styled.p`
    font-family: AvantGardeLight;
    font-size: .8rem;
`;

export const Description = styled(Language)`
    margin-bottom: 1rem;
`;
