const qrinput = document.querySelector('#qr-input')
const qrimg   =   document.querySelector('#qr-img')
const qrbutton =document.querySelector('#qr-button')

console.log(qrinput,qrimg,qrbutton)
qrbutton.addEventListener('click',()=>{
    const inputValue = qrinput.value
    
    if( !inputValue){
       alert('Please enter a valid url')
       return;
    }else{
        qrimg.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
        qrimg.alt=`QR code for${inputValue}`;
    }
}) 