// ketika html telah dimuat, js nya baru mulai diproses
$(document).ready(function(){

    // menambahkan event listener ke elemen yang memiliki id searchButton
    $('#searchButton').click(function(){

        // mengambil value dari user's input
        var searchQuery = $('#searchInput').val().toLowerCase()

        // melakukan permintaan GET ke file databasenya untuk menangani respon
        $.getJSON("book.json", function(data){

            // memfilter array buku berdasarkan kriteria pencarian
            var filteredBooks = data.books.filter(function(book){

                // mengecek apakah yg dicari user ada di database
                return book.title.toLowerCase().includes(searchQuery)
            })

            //menampilkan hasilnya 
            displayResults(filteredBooks)
        }).fail(function(abcd, a,b){

            // menangani masalah apabila databasenya mengalami masalah / kendala
            console.error(a,b)
        })
    })

    // menampilkan hasil pencarian
    function displayResults(books){

        var resultHtml = "<h2>Search Result</h2>"

        // memeriksa apakah yg dicari itu ada
        if(books.length === 0){
            resultHtml += "<p>No results found.</p>"
        }else{

            resultHtml += "<ul>"
            books.forEach(function(book){
                resultHtml += "<li><b>Title :</b> " + book.title + "</li>";
                resultHtml += "<li><b>SubTitle :</b> " + (book.subtitle ? book.subtitle : "N/A") + "</li>";
                resultHtml += "<li><b>Author :</b> " + book.author + "</li>";
                resultHtml += "<li><b>Published :</b> " + book.published + "</li>";
                resultHtml += "<li><b>Publisher :</b> " + book.publisher + "</li>";
                resultHtml += "<li><b>Pages :</b> " + book.pages + "</li>";
                resultHtml += "<li><b>Description :</b> " + book.description + "</li>";
                resultHtml += "<li><b>Website :</b> <a href='" + book.website + "'target='_blank'>" + book.website +"</a> </li>";
                resultHtml += "<hr>";
            })
            resultHtml += "</ul>"
        }

        // mengganti elemen HTML dari elemen hasil pencarian
        $('#searchResults').html(resultHtml)
    }
})