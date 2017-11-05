import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
    font-size: .8rem;
    display: flex;
    user-select: none;
`;

export const Label = styled.span`
    font-family: AvantGardeDemi;
    margin-right: .6rem;
`;

export const Option = styled.li`
    font-family: AvantGardeMedium;
    display: inline-block;

    ${({ active }) => active && css`
        color: #F1912D;
    `}

    :hover {
        ${({ active }) => !active && css`
            color: #ffcc98;
            cursor: pointer;
        `}
    }

    :not(:last-child) {
        padding-right: .6rem;
        margin-right: .6rem;

        border-right: 1px solid #333;
    }
`;
