import { RouterProvider } from "react-router";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import ShelfPage from "./pages/ShelfPage";
import SearchPage from "./pages/SearchPage";
import RootLayout from "./layout/RootLayout";

export const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route index element={<ShelfPage />} />
      <Route path="/search" element={<SearchPage />} />
    </Route>
  )
);

function App() {
  return (
    <div className="min-h-[100dvh]">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
