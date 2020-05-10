import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 40px;

    img {
        width: 340px;
        height: 510px;
    }
`;

export const Info = styled.div`
    flex: 1;
    padding: 40px;
    position: relative;
    background-color: #f2f2f2;

    h3 {
        color: var(--dark-blue);
        padding-bottom: 10px;
        border-bottom: 2px solid var(--light-blue);
        font-size: 24px;
    }
    p {
        color: var(--font-color);
        margin: 15px 0px 35px;
        font-size: 17px;
    }
    h4 {
        font-size: 20px;
        color: var(--dark-blue);
        margin-top: 22px;
    }
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-align: center;
`;

export const TagsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-top: 25px;
`;
