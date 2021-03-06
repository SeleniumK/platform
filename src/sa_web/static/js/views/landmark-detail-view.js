/*globals Backbone _ jQuery Handlebars */

var Shareabouts = Shareabouts || {};

(function(S, $, console){
  S.LandmarkDetailView = S.PlaceDetailView.extend({
    initialize: function() {
      var self = this;
      this.description = this.options.description

      this.landmarkSurveyView = new S.LandmarkSurveyView({});
    },

    render: function() {
      var self = this,
          data = {
            description: this.description
          };

      this.$el.html(this.description);
      // Render the view as-is (collection may have content already)
      this.$('.survey').html(this.landmarkSurveyView.render().$el);

      return this;
    }

  });
}(Shareabouts, jQuery, Shareabouts.Util.console));
