import styled from 'styled-components';

export const TagComponent = styled.div`
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
