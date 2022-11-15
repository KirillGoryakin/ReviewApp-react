import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider
} from 'react-router-dom';
import { Layout } from './Layout';
import { HomePage } from 'pages/HomePage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { AboutPage } from 'pages/AboutPage';
import { NewPostPage } from 'pages/NewPostPage';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index element={<HomePage />} />
    <Route path="*" element={<NotFoundPage />} />
    <Route path="about" element={<AboutPage />} />
    <Route path="new" element={<NewPostPage />} />
  </Route>
));

const App = () => <RouterProvider router={router} />;

export { App };