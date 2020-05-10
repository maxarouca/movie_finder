import React from 'react';

import { Container } from './styles';

interface Props {
    value: number;
    moviePage: boolean;
}

const Score: React.FC<Props> = ({ value, moviePage }) => {
    return <Container moviePage={moviePage}>{value * 10}%</Container>;
};

export default Score;
