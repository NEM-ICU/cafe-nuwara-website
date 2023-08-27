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
import ContactUs from "./pages/ContactUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import UnderConstruction from "./pages/UnderConstruction";

// color changin feature
import { useEffect } from "react";

function App() {
  // useEffect(() => {
  //   const images = document.querySelectorAll("img");
  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       console.log(entry);
  //     });
  //   });

  //   images.forEach((image) => {
  //     observer.observe(image);
  //   });
  // }, []);

  useEffect(() => {
    const images = document.querySelectorAll("img");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const image = entry.target;

        if (entry.isIntersecting) {
          // Add grayscale filter when the image is in view
          image.style.filter = "none";
        } else {
          // Remove grayscale filter when the image is out of view
          // image.style.filter = "none";
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
  }, []);

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

const Root = () => {
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
