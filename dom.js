var secondItem=document.querySelector('.list-group-item:nth-child(2)')
lastItem.style.color='green'
var ThirdItem=document.querySelector('.list-group-item:nth-child(3)')
lastItem.style.color='white'


var odd =document.querySelectorAll('li:nth-child(odd)')
for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='green'
}