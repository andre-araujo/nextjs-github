import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 3rem;
    margin-bottom: 2rem;
`;

export const Header = styled.header`
    margin-bottom: 2rem;
    position: fixed;
    background: #fafafa;
    box-shadow: 0 0 .6rem rgba(0, 0, 0 ,.6);
    width: 100%;
    top: 0;
    left: 0;
`;

export const HeaderContent = styled.header`
    height: 3rem;
    display: flex;
    align-items: center;
    width: 90%;
    margin: 0 auto;
`;

export const Anchor = styled.a`
    text-decoration: none;
    color: #333;
    font-family: AvantGardeDemi;
    cursor: pointer;

    :hover {
        opacity: .6;
    }
`;
