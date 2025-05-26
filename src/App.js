
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/nav/Navbar";
import Page404 from "./pages/Page404/Page404";
import Hero from "./pages/hero/Hero";
import Courses from "./pages/courses/Courses";
import Details from "./pages/details/courseDetails";
import Learn from "./pages/learn/Learn";
import Chapter from "./pages/chapters/Chapter";


function App() {
    const router = createBrowserRouter([
      { 
        path: "/", element:<Navbar />, errorElement:<Page404/>,
        children: [
          {path:"", element:<Hero/>},
          {path: "/courses",
            children: [
              { index: true, element: <Courses /> },
              { path: ":courseId", element: <Details /> },
            ],
          },
          {path: "/learn/:courseId",element: <Learn />,
            children: [{ path: "chapter/:chapterId", element: <Chapter /> }],
          }, 
        ]
      } 
    ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;