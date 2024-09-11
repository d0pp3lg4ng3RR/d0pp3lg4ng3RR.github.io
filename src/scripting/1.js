$(document).ready(function() {
    $.getJSON('src/filler/wordlist.json')
    .done(function(data) {
        $.each(data.words, function(index, word) {
            $('#titlecontent').append('<p>' + word + '</p>')
        });
    })
    .fail(function() {
        console.error("ОШИБКА БЛЯ АХААХАХХА");
    });
});
