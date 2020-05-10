import styled from 'styled-components';

export const Container = styled.div<{ moviePage: boolean }>`
    width: ${(props) => (props.moviePage ? '120px' : '70px')};
    height: ${(props) => (props.moviePage ? '120px' : '70px')};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: ${(props) => (props.moviePage ? null : '25px')};
    left: ${(props) => (props.moviePage ? null : '15px')};
    bottom: ${(props) => (props.moviePage ? '20px' : null)};
    right: ${(props) => (props.moviePage ? '30px' : null)};
    border-radius: 50%;
    background-color: var(--dark-blue);
    color: var(--light-blue);
    border: 2px solid var(--light-blue);
    font-size: ${(props) => (props.moviePage ? '45px' : '25px')};
    font-family: 'Abel', sans-serif;
    box-shadow: 0px 0px 0px 2px rgba(17, 97, 147, 1);
`;
