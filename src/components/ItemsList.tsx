import { products } from '../data/grocery.json'

const Items = () => {

    console.log({ products })
    return (
        <div className="items-wrapper">

            <table className="items-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(
                            product => (
                                <tr key={product.id}>
                                    <td>{product.id}</td>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                </tr>
                            )
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}


export default Items