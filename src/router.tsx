import App from './pages/App';
import View from './pages/View';

import { createBrowserRouter } from "react-router-dom";

export default createBrowserRouter([
    {
        path: "/iona-cat-browser",
        element: <App />,
    },
    {
        path: "/iona-cat-browser/:catId",
        element: <View />,
    },
]);