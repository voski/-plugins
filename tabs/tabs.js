$.Tabs = function(el) {
  this.$el = $(el);
  this.$contentTabs = $(this.$el.attr('data-content-tabs'));
  this.$activeTab = this.$contentTabs.find('.active');
  this.$el.on('click', 'a', this.clickTab.bind(this));
};

$.fn.tabs = function () {
  return this.each(function () {
    new $.Tabs(this);
  });
};


$.Tabs.prototype.clickTab = function(event) {
  event.preventDefault();
  this.$el.find('.active').removeClass('active');
  this.$activeTab.removeClass('active');
  this.$activeTab.addClass('transitioning');
  $(event.target).addClass('active');
  var self = this;
  this.$activeTab.one('transitionend', function (e) {
    $(this).removeClass('transitioning');
    // alert(event.currentTarget)
    self.$activeTab = self.$contentTabs.find($(event.currentTarget).attr('href'));
    self.$activeTab.addClass('active transitioning');
    setTimeout(function() {
      self.$activeTab.removeClass('transitioning');
    } ,0);
  });
};
