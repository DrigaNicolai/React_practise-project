import React, {useState} from 'react';
import {Product} from "./components/Product";
import {useProducts} from "./hooks/products";
import Loader from "./components/Loader"; // ES6 class
import {ErrorMessage} from "./components/ErrorMessage"; // Function
import {Modal} from "./components/Modal";
import {CreateProduct} from "./components/CreateProduct";
import {IProduct} from "./models";

function App() {
  const {loading, products, error, addProduct} = useProducts();
  const [modal, setModal] = useState(true);

  const createHandler = (product: IProduct) => {
    setModal(false);
    addProduct(product);
  }

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      { loading && <Loader /> }
      { error && <ErrorMessage error={error} /> }
      { products.map(
        product =>
          <Product
            product={product}
            key={product.id}
          />
      ) }

      { modal &&
        <Modal title={"Create new product"}>
          <CreateProduct onCreate={createHandler} />
        </Modal>
      }
    </div>
  )
}

export default App;
