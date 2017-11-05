import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    font-size: .8rem;
    user-select: none;
`;

export const Label = styled.span`
    font-family: AvantGardeDemi;
    margin-right: .6rem;
`;

export const Anchor = styled.span`
    color: #333;
    display: inline-block;
    font-family: AvantGardeMedium;
`;

export const Option = styled.li`
    display: inline-block;

    ${Anchor} {
        ${({ active }) => active && css`
            color: #F1912D;
            pointer-events: none;
        `}

        :hover {
            ${({ active }) => !active && css`
                color: #ffcc98;
                cursor: pointer;
            `}
        }
    }

    :not(:last-child) {
        border-right: 1px solid #333;
        margin-right: .6rem;
        padding-right: .6rem;
    }
`;
