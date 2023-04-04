import { getImage } from "api/moviesApi"

export const MovieCard = ({ movieDetails }) => {
    const getGenre = genres => {
        return genres.map(genre => genre.name).join(' ')
    }
    const getYear = releaseDate => {
        return releaseDate !== '' ? `(${new Date(releaseDate).getFullYear()})` : '';
    }
    
    return (
        <div>
            <div>
                <img src={movieDetails.poster_path ? getImage(movieDetails.poster_path)
                    : 'https://via.placeholder.com/300x400'}  alt=""/>
            </div>
            <h1>
                {movieDetails.title} {getYear(movieDetails.release_date)}
            </h1>
            <p>{movieDetails.tagline}</p>
            <div>
                <p>Vote: {movieDetails.vote_average}</p>
                <h3>Overview: </h3>
                <p>{movieDetails.overview}</p>
                <h3>Genre: </h3>
                <p>{getGenre(movieDetails.genres)}</p>
            </div>     
        </div>
            
    )
}