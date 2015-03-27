$.Thumbnails = function(el) {
  this.$el = $(el);
  this.$gutterImages = this.$el.find("div.gutter-images > img");
  this.$activeImg = this.$gutterImages.eq(0);
  this.activate(this.$activeImg);
  this.$gutterImages.on('click', function() {
    this.$activeImg = $(event.currentTarget);
    this.activate(this.$activeImg);
  }.bind(this))
};

$.Thumbnails.prototype.activate = function($img) {
  this.$el.find('div.active').empty();
  this.$el.find('div.active').append($img.clone());
};

$.fn.thumbnails = function() {
  return this.each(function () {
    new $.Thumbnails(this);
  });
};
