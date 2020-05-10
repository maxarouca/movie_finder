import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const Header = styled.div`
    height: 65px;
    width: 100%;
    background-color: var(--dark-blue);
    padding-left: 100px;
    padding-bottom: 5px;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    position: relative;

    h2 {
        color: var(--light-blue);
        font-size: 34px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 100%;
        width: 560px;
    }
`;

export const Score = styled.div`
    width: 70px;
    height: 70px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 20px;
    left: 10px;
    border-radius: 50%;
    background-color: var(--dark-blue);
    color: var(--light-blue);
    border: 2px solid var(--light-blue);
    font-size: 25px;
    font-family: 'Abel', sans-serif;
    box-shadow: 0px 0px 0px 2px rgba(17, 97, 147, 1);
`;

export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 25px;
    color: var(--font-color);
    position: relative;
    font-family: 'Lato', sans-serif;

    span {
        position: absolute;
        left: 100px;
        top: 5px;
        font-size: 18px;
        font-weight: 300;
    }

    p {
        font-size: 16px;
        height: 100px;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-top: 25px;
    }
`;

export const TagsContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 25px;
`;

export const Tag = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px 15px;
    background-color: #fff;
    color: var(--dark-blue);
    border: 1px solid var(--dark-blue);
    border-radius: 40px;
    margin: 0 10px;

    &:first-child {
        margin-left: 0;
    }
`;
