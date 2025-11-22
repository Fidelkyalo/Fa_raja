$( document ).ready(function() {
    
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    
    envelope.click( function() {
        open();
    });
    btn_open.click( function() {
        open();
    });
    btn_reset.click( function() {
        close();
    });

    function open() {
        envelope.addClass("open")
           .removeClass("close");
    }
    function close() {
        envelope.addClass("close")
           .removeClass("open");
    }
   
});

$(document).ready(function () {

    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    var btn_nyasuba = $("#nyasuba");
    var circle = $("#circle-bg");

    envelope.click(function () {
        open();
    });
    btn_open.click(function () {
        open();
    });
    btn_reset.click(function () {
        close();
        hideCircle();
    });

    btn_nyasuba.click(function () {
        showCircle();
    });

    function open() {
        envelope.addClass("open").removeClass("close");
    }

    function close() {
        envelope.addClass("close").removeClass("open");
    }

    function showCircle() {
        circle.css("background-image", "url('Fidel.jpg')");
        circle.addClass("show-circle");
    }

    function hideCircle() {
        circle.removeClass("show-circle");
        circle.css("background-image", "none");
    }

});
