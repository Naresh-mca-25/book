
$(document).ready(function () {

    $("#loadBooks").click(function () {

        $("#loading").text("Loading books...");
        $("#booksList").html("");

        $.ajax({
            url: "books.json",
            type: "GET",
            dataType: "json",

            success: function (data) {

                $("#loading").text("");

                const books = data.works;

                $.each(books, function (index, book) {

                    let author = "Unknown Author";

                    if (book.authors &&
                        book.authors.length > 0) {
                        author = book.authors[0].name;
                    }

                    const bookCard = `
                        <div class="book-card">
                            <h3>${book.title}</h3>
                            <p>
                                <strong>Author:</strong>
                                ${author}
                            </p>
                        </div>
                    `;

                    $("#booksList").append(bookCard);
                });
            },

            error: function () {
                $("#loading").text("");

                $("#booksList").html(
                    "<p class='error'>Unable to fetch book data. Check your server.</p>"
                );
            }
        });

    });

});
