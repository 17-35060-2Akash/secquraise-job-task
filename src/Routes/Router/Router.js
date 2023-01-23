import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import Home from "../../Pages/Home/Home";
import NotFound from "../../Pages/Others/NotFound/NotFound";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        loader: async () => fetch(`https://secquraise-job-task-49805-default-rtdb.firebaseio.com/1hgAr-3qdo5SgQDXV05AJzZVkRbZzGs8gY_nvRQYZxPA/Sheet1.json`),
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: async () => fetch(`https://secquraise-job-task-49805-default-rtdb.firebaseio.com/1hgAr-3qdo5SgQDXV05AJzZVkRbZzGs8gY_nvRQYZxPA/Sheet1.json`)
            },
        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
]);