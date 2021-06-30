

interface tableItems {
    id: String,
    name: String,
    price: Number,
    quantity: any
}

const Result = (props: any) => {
    return (
        <div className="result-wrapper">
            <div className="table-header">
                <h5>People's Store</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, sequi.</p>
                <p>Ph:048018234567</p>
            </div>
            <table className="items-table">
                <thead>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                </thead>
                <tbody>

                    {props.items.length > 0 && props.items.map((item: tableItems) => (
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.quantity} {parseInt(item.quantity) > 0 ? 'KG' : 'G'}</td>
                            <td>{item.price}</td>
                        </tr>
                    ))}
                    <tr>
                        <td colSpan={4}></td>
                    </tr>
                    <tr>
                        <td colSpan={3}>
                            <b> Total Items</b>
                        </td>
                        <td> <b>{[...new Set(props.items.map((item: tableItems) => item.id))].length}</b></td>
                    </tr>
                    <tr>
                        <td colSpan={3}>
                            <b> Total Price</b>
                        </td>
                        <td>
                            <b>  {props.items.reduce((acc: any, current: any) => acc + parseFloat(current.price), 0)}</b>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}


export default Result