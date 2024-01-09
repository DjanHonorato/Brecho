const roupasList = document.querySelectorAll('.list-roupas')
const clothes = document.querySelectorAll('.roupas')
let myList = ''

roupas.forEach(element => {
    myList += `
<li>
    <img src=${element.img} >
    <p>${element.price}</p>
    
</li>
`

})
console.log(myList)
roupasList.innerHtml = myList


