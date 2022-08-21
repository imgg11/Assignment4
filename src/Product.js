function Product(props){
    console.log(props);
    return (
        <div className="products">
            {
                props.products.map(function(product,index){
                    return(
                        <div>
                            <img src={product.img}></img>
                            <h3>{product.name}</h3>
                        </div>
                    )

                })
            }    
        </div>
    )
}
export default Product;