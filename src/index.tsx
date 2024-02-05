import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.scss'

import { RouterProvider } from "react-router-dom";
import router from './router';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <RouterProvider router={router} />
)