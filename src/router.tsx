import App from './pages/App';
import View from './pages/View';

import { createBrowserRouter } from "react-router-dom";

export default createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/:breedId",
        element: <View />,
    },
]);