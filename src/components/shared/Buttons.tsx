import styled from "styled-components";

export const Button = styled.button`
    padding: 10px;
    margin: 5px;
    border: none;
    border-radius: 10px;
    background: #000;
    color: white;

    &:hover {
        cursor: pointer;
        background-color: #333333;
    }

    &:focus {
        outline: none;
    }
`;

export const ActiveButton = styled(Button)`
    background: #333333;
`;

export const Buttons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
