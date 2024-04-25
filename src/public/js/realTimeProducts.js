const socket = io()

const inputTitle = document.getElementById('title')
const inputDescription = document.getElementById('description')
const inputPrice = document.getElementById('price')
const inputThumbnail = document.getElementById('thumbnail')
const inputCode = document.getElementById('code')
const inputStock = document.getElementById('stock')



const productList = document.getElementById('list-products')

inputStock.addEventListener('keyup', evt => {

    if (evt.key === 'Enter' && title.value != '' && description.value != '' && price.value != '' && thumbnail.value != '' && code.value != '' && stock.value != ''){

    socket.emit('product_client', {

        title: inputTitle.value,
        description: inputDescription.value,
        price: parseInt(inputPrice.value),
        thumbnail: inputThumbnail.value,
        code: inputCode.value,
        stock: parseInt(inputStock.value)
        
    })
    
    inputTitle.value = ''
    inputDescription.value = ''
    inputPrice.value = ''
    inputThumbnail.value = ''
    inputCode.value = ''
    inputStock.value = ''

}
})

socket.on('productsLogs', data => {

    console.log('Info from server', data)

    let log = productList

    let products = ''

    data.forEach(product => {

        products += `Producto: ${product.title}<br>
                     Descripción: ${product.description}<br>            
                     Precio: $${product.price}<br>
                     Ruta Imagen: ${product.thumbnail}<br>
                     Código: ${product.code}<br>
                     Stock: ${product.stock}<br><br>`

    });

    log.innerHTML = products

})