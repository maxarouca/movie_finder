import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-bottom: 50px;

    .pagination li {
        display: inline-block;
    }

    .pagination li a {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        color: var(--dark-blue);
        text-decoration: none;
        font-size: 18px;
        margin: 0 15px;
    }

    .pagination li.active a {
        width: 50px;
        height: 50px;
        background: var(--dark-blue);
        box-shadow: 0px 0px 0px 2px var(--dark-blue);
        border-radius: 50%;
        border: 2px solid var(--light-blue);
        color: var(--light-blue);
        font-size: 22px;
    }
`;
