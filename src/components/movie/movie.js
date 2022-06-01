import React from 'react'

import css from './movie.module.css'

const Movie = props => {
    return(
        props.obj.snippet && <div className={css.movie_cont}>
            <img src={props.obj.snippet.thumbnails.default.url} alt="video thumbnail"/>
            <div className={css.backdrop}></div>
            <div className={css.text_cont}>
                <h4>{props.obj.snippet.title}</h4>
                <p>{props.obj.snippet.description}</p>
            </div>
        </div>
    )
}

export default Movie