/* for first card */
document.getElementById('first-card').addEventListener('click', function(){
    const productName =  document.getElementById('first-name').innerText;
  const productPrice = document.getElementById('first-price').innerText;
//console.log('clicked')
const priceTotal = parseInt(productPrice);
buttonDisabled('first-card')

displayData(priceTotal,productName,productPrice)
})

/*  second card */
/* using event object from browser */
document.getElementById('second-card').addEventListener('click', function (e){
const productName = e.target.parentNode.parentNode.children[0].innerText;
const productPrice = e.target.parentNode.parentNode.children[2].children[0].innerText;
const priceTotal = parseInt(productPrice);
//console.log(productName,productPrice);
displayData(priceTotal,productName,productPrice)
})
/* input card */
document.getElementById('last-card').addEventListener('click',function(){
    const productName = document.getElementById('last-title').innerText;
    const productPrice = document.getElementById('price').value;
    if(productPrice === '' || productQuantity === ''){
        return alert ('please enter any valid number')
    }
    const productQuantity = document.getElementById('Quantity').value;
    const total = parseInt(productPrice) / parseInt(productQuantity)
    displayData(total,productName,productPrice)
    buttonDisabled('last-card')
    //console.log(productName, typeof productPrice,productQuantity);
})


/* display function  common funtion */
function displayData (priceTotal,productName,productPrice){
    const container = document.getElementById('table-container')
const tr = document.createElement('tr')
tr.innerHTML = `
<td>${1}</td>
<td>${productName}</td>
<td>${productPrice}</td>
<td>${priceTotal}</td>
`;
container.appendChild(tr)
}



function buttonDisabled(id){
    document.getElementById(id).setAttribute('disabled',true)
  
}