function Clothes({shopClothes}){
    return(
        <div className="products">
        {shopClothes.map((element =>{
            const {id, name, searchTerm, price, image} = element;
            return <div className="product-card" key={id}>
            <img src={image} width="400px" height="500px" alt="clothes"/>
            <div className="product-info">
            <h3>{name}</h3>
            <h3>{searchTerm}</h3>
            <h4>$ {price}</h4>
            </div>
            </div>
        }))}
      </div>
    )
}
export default Clothes;