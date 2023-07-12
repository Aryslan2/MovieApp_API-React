import { useState } from 'react'
import styles from './Search_nav.module.css'

function Search_nav({movies, setMovies}) {
	const api_search = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

	const [term, setTerm] = useState("");

	console.log(movies)

	const handleSearch = (e) => {
		e.preventDefault()

		fetch(api_search + term)
			.then(res => res.json())
			.then(data => setMovies(data.results))
	}

	return (
		<div className={styles.search_nav}>
			<div className={styles.search_nav_container}>
				<div className={styles.search_nav__inner}>		
					<h1 className={styles.title}><a href="#">Movie<span className={styles.title_span}>App</span></a></h1>
					<form className={styles.search_box} onSubmit={handleSearch}>
						<input className={styles.search} onChange={(e) => setTerm(e.target.value)} type="text" placeholder='Search Movie...' />
						<button className={styles.search_button}>Search</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Search_nav