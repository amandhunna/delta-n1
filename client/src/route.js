import AccountInfo from "./components/User/AccountInfo/AccountInfo";
import ContactUs from "./pages/ContactUs";
import Recover from "./components/User/RecoverPassword/Index";
import AccountRegister from "./pages/AccountRegister";
import AccountLogin from "./pages/AccountLogin";
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import ProductPage from './pages/ProductPage';
import CategoryPage from './pages/CategoryPage';
import Address from "./components/User/AccountInfo/UserAddresses/Index";
import PageNotFound from './pages/404';
import Home from './pages/HomePage'

const routeComponents = [
    {
      route:'/',
      component: Home
    },
    {
    route :'/cart',
    component :Cart,
    },
    {
      route:'/wishlist',
      component: Wishlist,
    },
    {
      route:'/contact',
      component: ContactUs,
    },
    {
      route:'/product/:productId',
      component: ProductPage,
    },
    {
      route:'/categoryPage',
      component: CategoryPage ,
    },
    {
      route:'/restorepassword',
      component: Recover,
    },
    {
      route:'/register',
      component: AccountRegister,
    },
    {
      route:'/account/login',
      component: AccountLogin,
    },
    {
      route:'/account/addresses',
      component: Address,
    },
    {
      route:'/account',
      component: AccountInfo,
    },
    {
    route:'*',
    component: PageNotFound
  }];
  
export default routeComponents;
