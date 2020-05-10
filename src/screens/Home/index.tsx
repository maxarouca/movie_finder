import React, { useState, useEffect } from 'react';
import { debounce } from 'lodash';
import axios from 'axios';
import { Fade } from 'react-reveal';

import Header from 'components/Header';
import SearchInput from 'components/SearchInput';
import MovieCard from 'components/MovieCard';
import Pagination from 'components/Pagination';
import Loader from 'components/Loader';
import { Container } from './styles';

interface Movie {
    id: number;
    vote_count: number;
    vote_average: number;
    title: string;
    release_date: string;
    original_title: string;
    genre_ids: [];
    genres?: [Genre];
    backdrop_path: string;
    overview: string;
    poster_path: string;
    popularity: number;
}

interface Genre {
    id: number;
    name: string;
}

const isOdd = (number: number) => number % 2 !== 0;
const nameGenres = (results: [], genres: []) => {
    return results.map((movie: Movie) => {
        const genresNames = movie.genre_ids.map((item: number) => {
            const genreItem = genres && genres.find((genre: Genre) => genre.id === item);
            if (genreItem) {
                return genreItem;
            }
        });
        return {
            ...movie,
            genres: genresNames,
        };
    });
};

function Home() {
    const [movies, setMovies] = useState<[Movie]>();
    const [page, setPage] = useState(1);
    const [total_pages, setTotalPage] = useState(1);
    const [mode, setMode] = useState('trending');
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const loadMovies = async (mode = 'trending', page: number, text?: string) => {
        try {
            setLoading(true);
            const resultGenres = await axios.get(
                `https://api.themoviedb.org/3/genre/movie/list?api_key=ded9b46c945a4dd86b8a6d4cd80dfde3&language=pt-BR`,
            );
            const allGenres = resultGenres.data.genres;

            if (allGenres) {
                if (mode === 'search') {
                    const res = await axios.get(
                        `https://api.themoviedb.org/3/search/movie?api_key=ded9b46c945a4dd86b8a6d4cd80dfde3&page=${page}&language=pt-BR&query=${text}`,
                    );

                    const moviesList =
                        res &&
                        res.data.results.map((movie: Movie) => {
                            const genresNames = movie.genre_ids.map((item: number) => {
                                const genreItem = allGenres && allGenres.find((genre: Genre) => genre.id === item);
                                if (genreItem) {
                                    return genreItem;
                                }
                            });
                            return {
                                ...movie,
                                genres: genresNames,
                            };
                        });

                    setMovies(moviesList);
                    setPage(res.data.page);
                    setLoading(false);
                    return setTotalPage(res.data.total_pages);
                }

                const res = await axios.get(
                    `https://api.themoviedb.org/3/trending/movie/week?api_key=ded9b46c945a4dd86b8a6d4cd80dfde3&page=${page}&language=pt-BR`,
                );

                const moviesList =
                    res &&
                    res.data.results.map((movie: Movie) => {
                        const genresNames = movie.genre_ids.map((item: number) => {
                            const genreItem = allGenres && allGenres.find((genre: Genre) => genre.id === item);
                            if (genreItem) {
                                return genreItem;
                            }
                        });
                        return {
                            ...movie,
                            genres: genresNames,
                        };
                    });

                setMovies(moviesList);
                setPage(res.data.page);
                setTotalPage(res.data.total_pages);
                return setLoading(false);
            }
        } catch (error) {
            setError(true);
            setLoading(false);
        }
    };

    useEffect(() => {
        loadMovies('trending', 1);
    }, []);

    const handlePageChange = (pageNumber: number) => {
        loadMovies(mode, pageNumber, query);
    };

    const handleChange = debounce((text: string) => {
        setQuery(text);
    }, 500);

    useEffect(() => {
        if (query === '') {
            setPage(1);
            loadMovies('trending', 1);
            return setMode('trending');
        }
        setPage(1);
        setMode('search');
        loadMovies('search', 1, query);
    }, [query]);

    return (
        <>
            <Header title="Movies"></Header>
            <Container>
                <SearchInput handleChange={handleChange} />
                {loading ? (
                    <Loader />
                ) : !error ? (
                    movies && (
                        <>
                            {movies.map((movie, index) => {
                                if (isOdd(index)) {
                                    return (
                                        <Fade right key={movie.id}>
                                            <MovieCard
                                                name={movie.title}
                                                sinopse={movie.overview}
                                                date={movie.release_date}
                                                score={movie.vote_average}
                                                tags={movie.genres}
                                                image={movie.poster_path}
                                                id={movie.id}
                                            />
                                        </Fade>
                                    );
                                }
                                return (
                                    <Fade left key={movie.id}>
                                        <MovieCard
                                            name={movie.title}
                                            sinopse={movie.overview}
                                            date={movie.release_date}
                                            score={movie.vote_average}
                                            tags={movie.genres}
                                            image={movie.poster_path}
                                            id={movie.id}
                                        />
                                    </Fade>
                                );
                            })}
                            <Pagination page={page} total_pages={total_pages} handlePageChange={handlePageChange} />
                        </>
                    )
                ) : (
                    <p>Erro na requisição dos dados. Tente novamente mais tarde</p>
                )}
            </Container>
        </>
    );
}

export default Home;
