import { Container } from "./App.styled";
import { Routes, Route } from "react-router-dom";
import { SharedLayout } from "./SharedLayout";
import { lazy } from "react";
import Home from "pages/Home";
import NotFound from "./NotFound/NotFound";


const MoviesPage = lazy(() => import("pages/MoviesPage"));
const MovieInfoPage = lazy(() => import('pages/MovieInfoPage'));
const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));

export const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<SharedLayout/>}>
          <Route index element={<Home/>}></Route>
          <Route path="movies" element={<MoviesPage/>}></Route>
          <Route path="movies/:movieId" element={<MovieInfoPage />}>
            <Route path="cast" element={ <Cast/>}></Route>
            <Route path="reviews" element={<Reviews />}></Route>
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
};
