import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../components/Button/Button";
import { Loader } from "../components/Loader/Loader";
import { PaginatorTypeTwo } from "../components/Paginator/PaginatorTypeTwo";
import QuoteList from "../components/QuoteList/QuoteList";

export const AnimePage = (props) => {
    const load = useSelector(state => state.load.load);
    const quotes = useSelector(state => state.quote.quotes);

    return (
        <>
            {load ? <Loader /> : <QuoteList quotes={quotes} />}
            {quotes[0] && <PaginatorTypeTwo />}
        </>
    );
}