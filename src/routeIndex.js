import React from 'react';

import {
  BrowserRouter as Router,
  useRoutes,
} from "react-router-dom";

import ListPrizeDraw from './pages/ListPrizeDraw/ListPrizeDraw'


const App = () => {
    let routes = useRoutes([
      { path: "/", element: <ListPrizeDraw /> },
    ]);
    return routes;
  };
  

export default function RouterIndex(){
    return(
       
        <Router>
            <App />
        </Router>
    )
}