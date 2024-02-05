import App from './pages/App';
import View from './pages/View';

import { createBrowserRouter } from "react-router-dom";

export default createBrowserRouter([
    {
        path: "/iona-code-exercise",
        element: <App />,
    },
    {
        path: "/iona-code-exercise/:catId",
        element: <View />,
    },
]);