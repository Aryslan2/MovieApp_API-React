import styles from './Home.module.css';
import Search_nav from '../Search_nav/Search_nav';
import Movie_card from '../Movie_card/Movie_card';
import { useEffect, useState } from 'react'
import '/public/reset.css';



function Home() {
	const api_url = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

	const [movies, setMovies] = useState([]);

	useEffect(() => {
		fetch(api_url)
			.then(res => res.json())
			.then(data => setMovies(data.results))
	}, [])

	console.log(movies);

	return (
		<div className={styles.Home}>
			<div className={styles.wrapper}>
				<Search_nav movies={movies} setMovies={setMovies} />	
				<div className={styles.movies}>
					{movies.map((movie) =>
						<Movie_card {...movie} />
					)}	
				</div>			
			</div>
		</div>
	);

	
}

export default Home