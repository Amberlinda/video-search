import React, { useEffect } from 'react'
import logo from '../../img/logo.jpg'
import { useForm } from 'react-hook-form'
import { useSelector,useDispatch } from 'react-redux'
import { addVideos } from '../slice/videoListSlice'
import { movie_list } from './movieList.js'
import { API_KEY } from '../otherComponents/globalKeys'

import css from './navbar.module.css'

const NavBar = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch()

    const videos = useSelector(state => state.movieList.videos)

    const submitHandler = data => {
        if(!(data.search && data.search.length >= 2)){
            alert("Search query must be at least 2 characters")
            return
        }
        fetchVideoList(data.search)
    }

    const fetchVideoList = (query) => {
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=${API_KEY}`)
        .then(response => {
            console.log(response)
            if(response.status == 200){
                dispatch(addVideos(response.data))
            }else{
                alert(`Status code : ${response.status}\nError while calling the API. Check logs.`)
                dispatch(addVideos(movie_list.items))
            }
        })
        .catch(err => {
            console.log(err)
            alert("Error while calling the API. Check logs.")
            dispatch(addVideos(movie_list.items))
        });
    }

    return(
        <div className={css.main_cont}>
            <div className={css.row}>
                <div className={css.logo_cont}>
                    <img src={logo}/>
                </div>
                <form onSubmit={handleSubmit(submitHandler)}>
                    <div className={css.searchbar_cont}>
                        <input type="text" placeholder='Search' required {...register("search",{required:true})}/>
                        <button  type='submit'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                            </svg>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default NavBar