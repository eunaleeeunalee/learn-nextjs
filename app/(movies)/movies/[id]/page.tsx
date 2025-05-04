import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

export default async function MoviesDetail({ params, searchParams }) {
    const { id } = await params;
    console.log('params:', { id });
    console.log('searchParams:', await searchParams); //?region=kr에 해당

    return (
        <div>
            <Suspense fallback={<h1>Laoding movie info...</h1>}>
                <MovieInfo id ={id}/>
            </Suspense>
            <Suspense fallback={<h1>Laoding movie video...</h1>}>    
                <MovieVideos id ={id}/>
            </Suspense>
        </div>
    );
}