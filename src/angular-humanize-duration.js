(function( angular ) {
  'use strict';

  angular
  .module('angular-humanize-duration', [])
  .filter('humanizeDuration', function () {
    return function (input, options) {
      return humanizeDuration(input, options);
    };
  });

}( angular ));
