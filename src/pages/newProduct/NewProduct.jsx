import "./newProduct.css"

export const NewProduct = () => {
  return (
    <div className="newProduct">
        <h1 className="addProductTitle">New User</h1>
        <form action="" className="addProductForm">
            <div className="addProductItem">
                <label htmlFor="">Image</label>
                <input type="file" placeholder="file"/>
            </div>
            <div className="addProductItem">
                <label htmlFor="">Name</label>
                <input type="text" placeholder="Apple Airpods"/>
            </div>
            <div className="addProductItem">
                <label htmlFor="">Stock</label>
                <input type="text" placeholder="123"/>
            </div>
            <div className="addProductItem">
                <label htmlFor="">Active</label>
                <select name="active" id="active" className="addProductSelect">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>
            <button className="addProductButton">Create</button>
        </form>
    </div>
  )
}
