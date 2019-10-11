const CategoryMenu = props => {
    return(
        <React.Fragment>
             <div>
                  <label htmlFor="category">Category</label>
                </div>
                <div>
                  <select
                    id="category"
                    value={props.category}
                    onChange={props.handleChange}
                  >
                    <option value="any" disabled >--select--</option>
                    <option value="Ferns">Ferns</option>
                    <option value="Grasses">Grasses</option>
                    <option value="Opuntia">Opuntia</option>
                    <option value="Palms">Palms</option>
                    <option value="Perennials">Perennials</option>
                    <option value="Seeds">Seeds</option>
                    <option value="Shrubs">Shrubs</option>
                    <option value="Trees">Trees</option>
                    <option value="Vines">Vines</option>
                    <option value="Yucca">Yucca</option>
                  </select>
                </div>
        </React.Fragment>
    )
};

export default CategoryMenu;