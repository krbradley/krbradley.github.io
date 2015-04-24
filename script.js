$( document ).ready(function() {
  var g = 0.0001;
  var d = 0.003;
  $(".orbit").each(function(i, obj) {
    obj = $(obj);
    var x = obj.offset().left;
    var y = obj.offset().top;
    var w = obj.width();
    var h = obj.height();
    var dx = 1;
    var dy = -1;
    function frame() {
      x += dx;
      y += dy;
      obj.offset({top: y - h / 2, left: x - w / 2});

      var xc = Math.floor(window.innerWidth/2);
      var yc = Math.floor(window.innerHeight/2);
      dx = ((xc - x > 150)?1 - d:1) * (dx + (g * (xc - x)));
      dy = ((yc - y > 150)?1 - d:1) * (dy + (g * (yc - y)));
      setTimeout(frame, 2);
    }
    frame();
  });

});
