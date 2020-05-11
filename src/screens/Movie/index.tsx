import React, { useState, useEffect } from 'react';
import Header from 'components/Header';
import MovieInfo from 'components/MovieInfo';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, TitleContainer } from './styles';
import Loader from 'components/Loader';
import { format } from 'date-fns';
import YouTube from 'react-youtube';

interface Movie {
    id: number;
    vote_count: number;
    vote_average: number;
    title: string;
    release_date: string;
    original_title: string;
    original_language: string;
    genre_ids: [];
    backdrop_path: string;
    overview: string;
    poster_path: string;
    popularity: number;
    status: string;
    budget: number;
    revenue: number;
    runtime: number;
    genres: [Genre];
    videos: Movies;
}

interface Genre {
    id: number;
    name: string;
}

interface Movies {
    results: [Video];
}

interface Video {
    key: string;
    size: number;
    // "iso_639_1": "pt",
    // "iso_3166_1": "BR",
    // "key": "l-q4_usveec",
    // "name": "Trailer legendado",
    // "site": "YouTube",
    // "size": 1080,
    // "type": "Trailer"
}

interface OPTS {
    width: string;
}

const Movie: React.FC = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState<Movie>();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const loadMovies = async () => {
        try {
            setLoading(true);
            const res = await axios.get(
                `https://api.themoviedb.org/3/movie/${id}?api_key=ded9b46c945a4dd86b8a6d4cd80dfde3&language=pt-BR&append_to_response=videos`,
            );
            setMovie(res.data);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(true);
        }
    };

    useEffect(() => {
        loadMovies();
    }, []);

    const trailer = movie ? movie.videos.results[0] : null;

    // const opts = movie
    //     ? {
    //         width: trailer.size.toString(),
    //           // width: '640',
    //           // playerVars: {
    //           //     // https://developers.google.com/youtube/player_parameters
    //           //     autoplay: 1,
    //           // },
    //       }
    //     : {};

    // function _onReady(event: ) {
    //     // access to player in all event handlers via event.target
    //     event.target.pauseVideo();
    // }

    return (
        <>
            <Header title="Movies"></Header>
            <Container>
                {loading ? (
                    <Loader />
                ) : !error ? (
                    movie && (
                        <>
                            <TitleContainer>
                                <h1>{movie.title}</h1>
                                <span>{format(new Date(movie.release_date), 'dd/MM/yyyy')}</span>
                            </TitleContainer>
                            <MovieInfo
                                sinopse={movie.overview}
                                status={movie.status}
                                language={movie.original_language}
                                budget={movie.budget}
                                revenue={movie.revenue}
                                runtime={movie.runtime}
                                genres={movie.genres}
                                score={movie.vote_average}
                                image={movie.poster_path}
                            />
                            {trailer && (
                                <div style={{ width: '100%' }}>
                                    <YouTube
                                        videoId={trailer.key}
                                        opts={{ width: trailer.size.toString(), height: '720' }}
                                        className="youtubeVideo"
                                    />
                                </div>
                            )}
                        </>
                    )
                ) : (
                    <p>Erro na requisição dos dados. Tente novamente mais tarde</p>
                )}
            </Container>
        </>
    );
};

export default Movie;
