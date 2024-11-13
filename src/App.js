import { Provider } from "react-redux";
import Body from "./Components/Body";
import store from "./Components/utility/Redux/store";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import VideoContainer from "./Components/VideoContainer";
import WatchPage from "./Components/WatchPage";

const appRouter=createBrowserRouter([
  {path:"/",
    element:<Body/>,
    children:[
    {path:"/",
     element:<VideoContainer/>,  
    },
    {
      path:"watch",
      element:<WatchPage/>,
    }
  ]
  },
  
])
function App() {
  return (
    <div className="App">
      <Provider store={store}>
       
        <RouterProvider router={appRouter} />
      </Provider>
    </div>
  );
}

export default App;
