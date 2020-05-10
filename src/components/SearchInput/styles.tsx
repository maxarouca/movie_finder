import styled from 'styled-components';

export const Input = styled.input`
    height: 45px;
    max-width: 100%;
    width: var(--max-width);
    background-color: var(--bg-grey);
    border-radius: 25px;
    border: none;
    padding: 0 40px;
    font-family: 'Abel', sans-serif;
    color: var(--dark-blue);
    font-size: 17px;
    margin: 50px 0px;

    ::-webkit-input-placeholder {
        color: var(--dark-blue);
    }

    ::-moz-placeholder {
        color: var(--dark-blue);
    }
    :-ms-input-placeholder {
        color: var(--dark-blue);
    }
`;
