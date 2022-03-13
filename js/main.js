$(document).ready(function() {

    if ($(".match-height").length > 0) {
        $('.match-height').matchHeight();
    };

    $('#table_2').DataTable({
        searching: false,
        paging: false,
        info: false
    });

    $('#table_1').DataTable({
        searching: false,
        paging: false,
        info: false,
        "order": [
            [3, "desc"]
        ]
    });


});