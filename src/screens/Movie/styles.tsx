import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    padding-top: 45px;
`;

export const TitleContainer = styled.div`
    background-color: var(--bg-grey);
    height: 70px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;

    h1 {
        color: var(--dark-blue);
        font-size: 30px;
        line-height: 70px;
    }
    span {
        font-size: 18px;
        color: var(--font-color);
    }
`;
