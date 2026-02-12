export const TMDB_CONFIG ={
    BASE_URL:'https://api.themoviedb.org/3',
    AP_KEY : process.env.EXPO_PUBLIC_API_KEY,
    headers :{
        accept : 'application/json',
        Authorization : `Bearer ${process.env.EXPO_PUBLIC_API_KEY}`
    }
}

