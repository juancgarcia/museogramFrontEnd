angular
.module('museoGram', [
  'ui.router',
  'ngResource'
])
.controller('ReviewsNewController', [
  '$stateParams',
  'Museum',
  'Artwork',
  'Review',
  ReviewsNewControllerFunction
])

function ReviewsNewControllerFunction () {

  this.newReview = new Review()
  this.create = function () {
    this.newReview.$save(() => {
      $state.go('reviewIndex', {}, { reload: true })
    })
  }
}
