import React, { useEffect } from 'react'
import NavBar from './navbar/navbar'
import { useSelector } from 'react-redux'
import Movie from './movie/movie'

import css from './landingPage.module.css'

const LandingPage = () => {

    const videos = useSelector(state => state.movieList.videos)

    return(
        <div>
            <NavBar/>
            <div className={css.row}>
                {videos.length > 0 ? <div className={css.movie_list_cont}> 
                        {videos && videos.map((elem,index) => (
                            <Movie obj={elem} key={index}/>
                        ))}
                </div>
                :<p className={css.default_text}>No video list to display. Search for a video.</p>}
            </div>
        </div>
    )
}

export default LandingPage