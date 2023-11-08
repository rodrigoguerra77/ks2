/*
Import the jQuery
*/

import jQuery from "jquery";

window.$ = window.jQuery = jQuery;

// Search in table products
const $rows = $("#table-products tbody tr");
$("#search-products").on("keyup", function () {
    const val = $.trim($(this).val()).replace(/ +/g, " ").toLowerCase();

    $rows
        .show()
        .filter(function () {
            const text = $(this).text().replace(/\s+/g, " ").toLowerCase();
            return !~text.indexOf(val);
        })
        .hide();
});

// Delete product
$("#deleteModal").on("show.bs.modal", function (e) {
    const product = $(e.relatedTarget).data("product");
    const action = $("#delete-form").attr("action");
    $("#delete-form").attr("action", action.replace("_ID_", product));
});

/*
Import the Tabler Js with Demo theme
*/
import "../../node_modules/@tabler/core/dist/js/tabler";
import "../../node_modules/@tabler/core/src/js/demo-theme";
