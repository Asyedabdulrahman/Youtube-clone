import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Maincontainer from "./components/Maincontainer";
import Watchpage from "./components/Watchpage";

const approuter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Maincontainer />,
      },
      {
        path: "/watch",
        element: <Watchpage />,
      },
    ],
  },
]);
function App() {
  return (
    <Provider store={store}>
      <div className="">
        <Head />
        <RouterProvider router={approuter} />
      </div>
    </Provider>
  );
}

export default App;

// head;
// body;
// sidebar;
// menuitems;
// MainContainer;
// buttonlist;
// videocontainer;
// videocard;
