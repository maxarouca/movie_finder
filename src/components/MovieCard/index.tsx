import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';
import CardInfo from 'components/CardInfo';

interface Props {
    id: number;
    name: string;
    sinopse: string;
    date: string;
    score: number;
    tags?: [Genre];
    image: string;
}

interface Genre {
    id: number;
    name: string;
}

function MovieCard({ id, name, sinopse, date, score, tags, image }: Props) {
    return (
        <Container>
            <Link to={`/movie/${id}`}>
                {image ? (
                    <img src={`https://image.tmdb.org/t/p/w500${image}`} alt="Movie Poster" />
                ) : (
                    <img
                        src={`https://via.placeholder.com/205x310?text=Poster+não+encontrado`}
                        alt="Poster não encontrado"
                    />
                )}
                <CardInfo name={name} sinopse={sinopse} date={date} score={score} tags={tags} />
            </Link>
        </Container>
    );
}

export default MovieCard;
