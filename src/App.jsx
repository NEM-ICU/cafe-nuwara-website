import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Nuwara from "./pages/Nuwara";
import Navbar from "./components/Navbar";
import Gallery from "./pages/Gallery";
import ContactUs from "./pages/ContactUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import UnderConstruction from "./pages/UnderConstruction";

// color changin feature
import { useEffect, useState } from "react";

function App() {
  const [path, setPath] = useState("/");
  useEffect(() => {
    const images = document.querySelectorAll("img");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // console.log(entry);
        const image = entry.target;

        if (entry.isIntersecting) {
          // Add grayscale filter when the image is in view
          image.style.filter = "none"; // Removes the grayscale filter, making the image colorful
        } else {
          // Remove grayscale filter when the image is out of view
          image.style.filter = "grayscale(100%)"; // Applies a grayscale filter to the image
        }
      });
    });

    images.forEach((image) => {
      observer.observe(image);
    });

    // Cleanup the observer when the component unmounts
    return () => {
      images.forEach((image) => {
        observer.unobserve(image);
      });
    };
  }, [path]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={
          <>
            <Root setPath={setPath} />
          </>
        }
      >
        <Route index element={<Home />} />
        <Route path="nuwara" element={<Nuwara />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="policy" element={<PrivacyPolicy />} />
        <Route path="construction" element={<UnderConstruction />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

const Root = ({ setPath }) => {
  const location = useLocation();
  setPath(location.pathname);

  return (
    <>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default App;
