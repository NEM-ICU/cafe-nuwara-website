import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Nuwara from "./pages/Nuwara";
import Navbar from "./components/Navbar";
import Menu from "./pages/Menu";
import Store from "./pages/Store";
import Gallery from "./pages/Gallery";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={
          <>
            <Root />
          </>
        }
      >
        <Route index element={<Home />} />
        <Route path="nuwara" element={<Nuwara />} />
        <Route path="menu" element={<Menu />} />
        <Route path="store" element={<Store />} />
        <Route path="gallery" element={<Gallery />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

const Root = () => {
  return (
    <>
      hello world
      <Navbar />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default App;
