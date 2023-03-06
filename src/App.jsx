import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import Home, { jobsLoader } from "./Pages/Home";
import About from "./Pages/About";
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";
import Faqs from "./Pages/help/Faqs";
import Contact from "./Pages/help/Contact";
import NotFound from "./Pages/NotFound";


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index loader={jobsLoader} element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="help" element={<HelpLayout />}>
          <Route path="faq" element={<Faqs />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  )
}

export default App;