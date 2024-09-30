const products = [
    {title: "Apple", isFruit: true, id: "1"},
    {title: "Garlic", isFruit: false, id: "2"},
    {title: "Cabble", isFruit: false, id: "3"}
]

export default function ShoppingList () {
    const listItems = products.map(product => 
        <li
            key={product.id}
            style={{
                color: product.isFruit ? "magenta" : "green"
            }}
        >
            {product.title}
        </li>
    )

    return (
        <ul>{listItems}</ul>
    )
}