import { createBrowserRouter } from "react-router-dom";
import { Home, Cities, NotFound, Product, Cart, List } from '@/pages'
import Layout from "@/components/Layout";

const  router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                //動態參數
                path: '/Cities/:city',
                element: <Cities />
            },
            {
                // :id
                path: '/Product/:id',
                element: <Product />
            },
            {
                path: '/Cart',
                element: <Cart />
            },
            {
                path: '/list/:category',
                element: <List/>
            },
            {
                path: '*',
                element: <NotFound />
            },
        ]

    },

]);

export default router;
