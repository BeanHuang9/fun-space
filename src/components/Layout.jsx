import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Drawer from './Drawer'
import { useCartStore } from '@/store/cart'



const Layout = () => {

  // const [isOpen, setIsOpen] = useState(false);
  // const handleClose = () => setIsOpen(false);
  const { isCartOpen, setIsCartOpen } = useCartStore();


  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <Drawer open={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
};

export default Layout;
