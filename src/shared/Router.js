import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddNotes from "../pages/AddNotes";
import Home from "../pages/Home";

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/notes/add" element={<AddNotes/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;