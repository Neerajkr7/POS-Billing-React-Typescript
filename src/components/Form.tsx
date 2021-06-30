interface formProps {
    putItemsInlist: (args: any) => void
}

const Form = (props: formProps) => {
    const handleFormSubmit = (e: any) => {
        e.preventDefault()

        interface FomValuesType {
            id?: String,
            quantity?: String
        }
        const formValues: FomValuesType = {

        }
        formValues.id = e.target[0].value
        formValues.quantity = e.target[1].value

        props.putItemsInlist(formValues)
    }
    return (
        <div className="form-container">
            <form action="" className="form-wrapper" onSubmit={(e) => handleFormSubmit(e)}>
                <div>
                    <label htmlFor="">Item ID</label>
                    <input type="number" name="itemId" autoComplete="" placeholder="eg:1001" required />
                </div>
                <div>
                    <label htmlFor="">Quantity</label>
                    <input type="text" name="itemQuantity" placeholder="2kg" required />
                </div>

                <div className="button-group">
                    <input type="submit" value="Save" />
                    <input type="reset" value="Clear" />
                </div>
            </form>
        </div>
    )
}


export default Form