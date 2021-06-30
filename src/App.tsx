import { useState } from 'react';
import './App.css';
import { products } from './data/grocery.json'

import Form
  from './components/Form';
import Result from './components/Result';
import Items from './components/ItemsList';
function App() {
  interface tableItems {
    id: String,
    name: String,
    price: Number,
    quantity: String
  }
  const [itemsList, setItemsList] = useState<tableItems[]>([])

  const putItemsInlist = (args: any) => {
    const newProducts = JSON.parse(JSON.stringify(products))
    const newItem: any = newProducts.find((product: tableItems) => product.id === args.id)

    if (newItem !== null) {
      newItem.price = newItem.price * args.quantity
      newItem.quantity = args.quantity
      const newList = itemsList.concat(newItem)
      setItemsList(newList)
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <Form putItemsInlist={putItemsInlist} />
        <Result items={itemsList} />
      </header>

    </div>
  );
}

export default App;
