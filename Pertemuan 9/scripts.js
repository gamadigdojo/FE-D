document.addEventListener('DOMContentLoaded',function(){
    var input = document.getElementById('input')
    var btn = document.getElementById('tambah')
    var list = document.getElementById('tasks')

    btn.onclick = function(){
        // mendapatkan input data dari user
        var data = input.value.trim()

        if(data == ''){
            alert("Tolong masukkan tugas")
        }else{
            // buat element baru
            var newTask = document.createElement('li')
            newTask.textContent = data

            // memasukkan newTask ke list
            list.appendChild(newTask)

            // membersihkan input setelah menambahkan tugas
            input.value = ""


        }

    }

})