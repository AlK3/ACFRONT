import React from "react";
import { useSelector } from "react-redux";
import { Grid } from "../components/Grid/Grid";
import { PaginatorTypeOne } from "../components/Paginator/PaginatorTypeOne";

export const ListPage = (props) => {
    const anime = useSelector(state => state.anime.anime);

    const pageMain = useSelector(state => state.page.pageMain);
    const perPage = useSelector(state => state.page.perPage);

    const lastAnimeIndex = pageMain * perPage;
    const firstAnimeIndex = lastAnimeIndex - perPage;
    const currentAnime = anime.slice(firstAnimeIndex, lastAnimeIndex);

    return (
        <>
            <Grid items={currentAnime} />
            <PaginatorTypeOne total={anime.length} />
        </>
    );
}