import { BASE_URL } from "../app/constants";
import styles from "../styles/movie-info.module.css"

export async function getInfo(id:string){
    const response = await fetch(`${BASE_URL}/${id}`);
    return response.json();
}

export default async function MovieInfo({id}: {id:string}){
    const movie = await getInfo(id);

    return (
        <div className={styles.container}>
            <img src={movie.poster_path} className={styles.poster} alt={movie.title}/>

            <div className={styles.info}>
                <h2 className={styles.title}>{movie.title}</h2>
                <h3>{movie.vote_average.toFixed(1)}</h3>
                <p>{movie.overview}</p>
                <a href={movie.homepage} target={"_blank"}>Homepage &rarr;</a>
            </div>
        </div>
    )
}