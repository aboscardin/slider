
function Slider() {
  this.originalX = 0;
  this.changeX = 0;
  this.element = null;



  this.init = function(element){
    //attach to event for element
    //element.addEventListener("click", this.change);
    this.element = element;


    this.bind(element);

  };

  this.change = function(dir){
    var slides = this.element.children[0];

    //Find children
    var current = 0;
    var next = 0;
    var position = 0;
    var width = this.element.clientWidth;

    for ( var i=0; i<slides.children.length; i++ ) {
      if ( slides.children[i].classList.contains("active") ) {
        current = i;
      }
    }

    next = current + dir;

    if ( next < slides.children.length && next >= 0 ) {
      slides.children[current].classList.remove("active");
      position = this.element.clientWidth * next;
      slides.children[next].classList.add("active");
      slides.style.transform = "translateX(-" + position + "px)";
    } else {
      console.log("end");
    }
  };

  this.start = function(evt){
    this.originalX = evt.pageX;
  };

  this.move = function(evt){
    var slider = this;
    var direction = 0;
    if (evt.pageX < slider.originalX ) {
          direction = 1
    } else {
      direction = -1;
    }
    this.change(direction);
  };

  this.bind = function(element){
      var self = this;
      element.addEventListener("touchstart", function(e){ self.start(e); });
      element.addEventListener("mousedown", function(e){ self.start(e); });
      element.addEventListener("mouseup", function(e){ self.move(e); });
      element.addEventListener("touchend", function(e){ self.move(e); });
  };
}
