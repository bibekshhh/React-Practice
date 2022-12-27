import { Routes, Route, Link, useParams } from "react-router-dom"

import { Book } from "./books";
import "../style/book.css"

export const Home = () => {
    const {id} = useParams();
    console.log(id)

    return(
        <>
        <Routes>
            {/* <Route path="/" element */}
            <Route path="/:id" element={<Book BookID={id}/>} />
        </Routes>
        </>
    )
}