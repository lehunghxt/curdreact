import Category from './Category'
import Home from './Index'
import Post from './Post'
import Product from './Product'
import User from './User'
const route = [
    {
        key: 1,
        path: '/',
        exact: true,
        public: true,
        name: 'Trang chủ',
        component: <Home />,
    },
    {
        key: 2,
        path: '/category',
        exact: true,
        public: true,
        name: 'Danh mục',
        component: <Category />,
    },
    {
        key: 3,
        path: '/post',
        exact: true,
        public: true,
        name: 'Bài viết',
        component: <Post />,
    },
    {
        key: 4,
        path: '/product',
        exact: true,
        public: true,
        name: 'Sản phẩm',
        component: <Product />,
    },
    {
        key: 5,
        path: '/user',
        exact: true,
        public: true,
        name: 'Thành viên',
        component: <User />,
    },
];

export default route;