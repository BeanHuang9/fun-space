import { Button, Drawer } from "flowbite-react";

const FDrawer = ({ open, onClose }) => {

  return (
    <Drawer open={open} onClose={onClose} position="right">
        <Drawer.Header title="Drawer" />
        <div className='flex'>
          <img className='w-10 h-10 object-cover' src="" alt="" />
          <div >
            <p>title</p>
            <p>amount 張</p>
            <p>price NT$ 420元</p>
          </div>
        </div>
        <Drawer.Items>
          <div>
            <p>總計: 2件</p>
            <p>NT$: 100元</p>
            <Button>去結帳</Button>
          </div>
        </Drawer.Items>
      </Drawer>
  )
}

export default FDrawer
