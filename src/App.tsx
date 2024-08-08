import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Contacts from "./components/pages/Contacts/Contacts";
import NotFound from "./components/pages/NotFound/NotFound";
import Layout from "./components/layout/Layout";
import Portfolio from "./components/pages/Portfolio/Portfolio";

const App: React.FC = () => {
  interface Locations {
    path: string;
    element: JSX.Element;
  }

  const router: Array<Locations> = [
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/contacts",
      element: <Contacts />,
    },
    {
      path: "/portfolio",
      element: <Portfolio />,
    },
    {
      path: "/notfound",
      element: <NotFound />,
    },
  ];

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {router.map((item) => (
            <Route key={item.path} path={item.path} element={item.element} />
          ))}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
