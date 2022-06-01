import { configureStore } from '@reduxjs/toolkit'
import movieListReducer from '../slice/videoListSlice'

export default configureStore({
  reducer: {
      movieList: movieListReducer
  },
})