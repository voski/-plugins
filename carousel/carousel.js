$.Carousel = function(el) {
  this.$el = $(el);
  this.$activeIdx = 0;
  this.$images = this.$el.find('.items img');
  this.$images.eq(this.$activeIdx).addClass('active');
  this.bindEvents();
  this.transitioning = false;
};

$.Carousel.prototype.bindEvents = function() {
  var self = this;
  this.$el.on("click", ".slide-left", function() {
    self.slide(-1)
    // setTimeout(function() {
    //   self.$images.eq(self.$activeIdx).removeClass('right');
    // }, 0);
  });
  this.$el.on("click", ".slide-right", function() {
    self.slide(1)
    // self.$images.eq(self.$activeIdx).removeClass('active');

  });

};

$.Carousel.prototype.slide = function(num) {
  if (this.transitioning) {
    return;
  } else {
    this.transitioning = true;
    var self = this;
    var $oldImage = this.$images.eq(this.$activeIdx);
    if (num === -1) {
      $oldImage.addClass('left');
      this.$activeIdx = ((this.$activeIdx + num) % this.$images.length);
      this.$images.eq(this.$activeIdx).addClass('active right');
      setTimeout(function() {
        self.$images.eq(self.$activeIdx).removeClass('right');
      }, 0);
    } else if (num === 1) {
      $oldImage.addClass('right');
      this.$activeIdx = ((this.$activeIdx + num) % this.$images.length);
      this.$images.eq(this.$activeIdx).addClass('active left');
      setTimeout(function() {
        self.$images.eq(self.$activeIdx).removeClass('left');
      }, 0);
    }
    this.$el.one("transitionend", function(e) {

      $oldImage.attr('class', '');
      self.transitioning = false;
    });
  }
};

$.fn.carousel = function () {
  return this.each(function () {
    new $.Carousel(this);
  });
};
