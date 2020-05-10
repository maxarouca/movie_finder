import styled from 'styled-components';

export const Loading = styled.div`
    border: 5px solid #f3f3f3; /* Light grey */
    border-top: 5px solid var(--dark-blue); /* Blue */
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 2s linear infinite;

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;
