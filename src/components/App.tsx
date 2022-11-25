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
import { NewReviewPage } from 'pages/NewReviewPage';
import { EditReviewPage } from 'pages/EditReviewPage';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index element={<HomePage />} />
    <Route path="*" element={<NotFoundPage />} />
    <Route path="about" element={<AboutPage />} />
    <Route path="new" element={<NewReviewPage />} />
    <Route path="edit/:id" element={<EditReviewPage />} />
  </Route>
));

const App = () => <RouterProvider router={router} />;

export { App };