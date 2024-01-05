import Header from "./Components/Header";
import MainCoontainer from "./Components/MainCoontainer";
import VideosContainer from "./Components/VideosContainer";
import store from "./utils/store";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WatchPage from "./Components/WatchPage";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        {/* <MainCoontainer /> */}
        <RouterProvider router={router} />
      </div>
    </Provider>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainCoontainer />,
    children: [
      {
        path: "/",
        element: <VideosContainer />,
      },
      {
        path:'watch',
        element: <WatchPage/>
      }
    ],
  },
]);

export default App;
