import styled from 'styled-components';

export default styled.input`
    background: transparent;
    border: 1px solid #333;
    color: #333;
    cursor: pointer;
    display: inline-block;
    font-family: AvantGardeDemi;
    font-size: 1.25rem;
    margin: 0;
    outline: none;
    padding: 0.625rem 2rem;
    transition: 0.2s background, 0.2s color;

    :hover {
        background: #333;
        color: #fafafa;
    }
`;
