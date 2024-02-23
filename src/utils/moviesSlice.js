import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularPlayingMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedPlayingMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcomingPlayingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action?.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addPopularPlayingMovies,
  addUpcomingPlayingMovies,
  addTopRatedPlayingMovies,
} = moviesSlice.actions;
export default moviesSlice.reducer;
