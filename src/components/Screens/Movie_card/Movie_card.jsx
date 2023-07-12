import React from 'react'
import styles from './Movie_card.module.css'

const Movie_card = (props) => {

	const api_img = "https://image.tmdb.org/t/p/w1280";

	function rateColor(rate) {
		if (rate >= 7) {
			return "aqua";
		} else if (rate >= 6) {
			return "orange";
		} else {
			return "red";
		}
	}

	return (
		<div className={styles.movie_card}>
			<div className={styles.poster}>
			<div style={{color:rateColor(props.vote_average)}} className={styles.vote}>{props.vote_average}</div>
				<img className={styles.imagecard} src={props.poster_path ? api_img + props.poster_path : './nomovie.jpg'}/>
			</div>
			<div className={styles.info}>
				<div className={styles.info_container}>
					<div className={styles.info__inner}>
						<div className={styles.title}>{props.title}</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Movie_card