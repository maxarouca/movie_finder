import styled from 'styled-components';

export const Container = styled.div`
    a {
        width: 100%;
        max-width: var(--max-width);
        height: 310px;
        background-color: var(--bg-grey);
        display: flex;
        flex-direction: row;
        margin-bottom: 45px;
        text-decoration: none;

        img {
            width: 205px;
        }
    }
`;
