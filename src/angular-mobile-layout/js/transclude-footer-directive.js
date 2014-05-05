'use strict';

/**
 * This directive notifies the multi-transclude controller that it's done post-linking. The multi-transclude
 * controller will set the body div size, when both the header and footer are done post-linking.
 */
angular.module('mobile.layout')
  .directive('transcludeFooter', [function TranscludeFooter() {

    return {
      restrict: 'A',
      replace: false,
      terminal: true,

      link: function($scope) {
        Preconditions.checkState(!!($scope.multiTranscludeCtrl), 'Missing required multi-transclude controller object.');
        $scope.multiTranscludeCtrl.transcludePostLinkComplete();
      }

    };
  }]);
