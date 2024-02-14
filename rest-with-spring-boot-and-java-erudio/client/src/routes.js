import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from './pages/login';
import Book from './pages/books';
import Books from "./pages/books";
import NewBook from "./pages/NewBook";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Login/>} />
                <Route path="/books" exact Component={Books} />
                <Route path="/book/new" exact Component={NewBook} />
            </Routes>
        </BrowserRouter>


    )
}