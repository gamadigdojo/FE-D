document.addEventListener('DOMContentLoaded', function(){
    var c = document.getElementById('container');
    var b = document.getElementById('btn');
    var pp = document.createElement('p');
    
    pp.innerText = 'Ini contoh manipulasi JavaScript'
    
    b.addEventListener('click', function(){
        c.getElementsByTagName('h1')[0].innerText = 'Hello, Gama!'
        c.appendChild(pp)
    })
    
    // prompt
    var inputNama = prompt('Masukkan nama Anda:')
    
    if(inputNama !==null && inputNama !== ""){
        alert("Halo, " +inputNama + "! Selamat datang di web kami")
    }else{
        alert("Mohon untuk mengisi nama")
    }
})

