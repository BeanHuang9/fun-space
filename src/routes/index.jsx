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
                path: '/cities/:city',
                element: <Cities />
            },
            {
                // :id
                path: '/product/:id',
                element: <Product />
            },
            {
                path: '/cart',
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
