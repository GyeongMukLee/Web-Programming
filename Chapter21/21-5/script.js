$(document).ready(function () {
    $("#datepicker").datepicker({
        stepMonths: 3,
        changeMonth: true
    });

    $("#type_select").buttonset();

    $("#slide_dist").slider({
        value: 0,
        min: 0,
        max: 500,
        step: 10,
        slide: function (event, ui) {
            $("#distance").val(ui.value);
        }
    });

    $("#slide_height").slider({
        value: 0,
        min: 0,
        max: 20,
        step: 1,
        slide: function (event, ui) {
            $("#height").val(ui.value);
        }
    });

    $("#slide_weight").slider({
        value: 0,
        min: 0,
        max: 5000,
        step: 10,
        slide: function (event, ui) {
            $("#weight").val(ui.value);
        }
    });

    $("#slide_lat").slider({
        value: 0,
        min: -90,
        max: 90,
        step: 0.00001,
        slide: function (event, ui) {
            $("#latitude").val(ui.value);
        }
    });

    $("#slide_lon").slider({
        value: 0,
        min: -180,
        max: 180,
        step: 0.00001,
        slide: function (event, ui) {
            $("#longitude").val(ui.value);
        }
    });

    $("#red, #green, #blue").slider({
        orientation: "horizontal",
        range: "min",
        max: 255,
        value: 127,
        slide: refreshSwatch,
        change: refreshSwatch
    })

    $("#red").slider("value", 127)
    $("#green").slider("value", 127)
    $("#blue").slider("value", 127)

    $("button:submit").button();

    $("#btnSave").submit(function () {
        return false;
    });
});

function refreshSwatch() {
    var red = $("#red").slider("value")
    var green = $("#green").slider("value")
    var blue = $("#blue").slider("value")
    var my_rgb = "rgb(" + red + "," + green + "," + blue + ")";

    $("#swatch").css("background-color", my_rgb);
    $("#red_val").val(red)
    $("#blue_val").val(blue)
    $("#green_val").val(green)
    $("#color_val").val(my_rgb)
}