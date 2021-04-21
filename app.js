$('form').on('submit', function (event) {
    event.preventDefault();

    let $movie = $('input');
    console.log($movie)
    let title = $movie.eq(0).val();
    let rating = $movie.eq(1).val();

    //$('<p>').appendTo('div');
    $('div').append('<p>');
    $('p:last').text(`Movie Title:${title} --- Rating:${rating}`);
    $('p:last').append('<button>');
    $('button').text("Remove").on('click', function (eve) {
        $(eve.target).parent().remove();
    })

});

