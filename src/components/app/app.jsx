import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import NotFound from '../../pages/not-found-404/not-found-404';
import GamePage from '../../pages/game-page/game-page';
import ResultPage from '../../pages/result-page/result-page';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<MainPage />} />
      <Route path="game" element={<GamePage />} />
      <Route path="result" element={<ResultPage />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

function App({ routes }) {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
