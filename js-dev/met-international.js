/*
 * MET International script
 *
 * $Author: Richard Torres
 *
 * $Date: 2017-05-19
 */
(function($){
  $(document).ready(function(){
    $thickbox = $(".thickbox");
    $iframe = $("#video iframe");

    bind_overlay();

    $thickbox.click(
      function() {
        toggleSrc(true);
        bind_overlay();
      }
    ).trigger("click");

    function bind_overlay() {
      $("#TB_overlay").on("click", function() {
        toggleSrc(false);
      });
      $("#TB_closeWindowButton").on("click", function() {
        $("#TB_overlay").trigger("click");
      });
    }

    $(document).keydown(function(e){
      escape_pressed(e);
    });

    function toggleSrc(toggle) {
      var src = $iframe.attr("src");
      var parameters = "?autoplay=1&rel=0&showinfo=0";

      $iframe.attr("src", toggle === true ? src + parameters : src.replace(parameters, ""));
    }

    function escape_pressed(e) {
      if(e.keyCode===27){
        $("#TB_overlay").on("click",
          function() {
            toggleSrc(false);
          }
        ).trigger("click");
      }
    }

    $(window).resize(function() {
      var newHeight = $(window).height();
      var newWidth = $(window).width();
      var tbWindowWidth = $("#TB_window").width();
      $tb_window = $("#TB_window");
      if(newWidth <= 1145) {
        $tb_window.css({
          "width": newWidth-40,
          "margin-left": -(newWidth-40)/2,
          "height": 3/5*(newWidth-40)
        });
      } else {
        $tb_window.css({
          "width": "1120px",
          "height": "630px",
          "margin-left": -$tb_window.width()/2
        });
      }
    });

    $(window).load(function() {
      var newHeight = $(window).height();
      var newWidth = $(window).width();
      var tbWindowWidth = $("#TB_window").width();
      $tb_window = $("#TB_window");
      if(newWidth <= 1145) {
        $tb_window.css({
          "width": newWidth-40,
          "margin-left": -(newWidth-40)/2,
          "height": 3/5*(newWidth-40)
        });

      } else {
        $tb_window.css({
          "width": "1120px",
          "height": "630px",
          "margin-left": -$tb_window.width()/2
        });
      }
    });

  });
})(window.jQuery || window.$);
