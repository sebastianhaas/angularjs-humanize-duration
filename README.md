# angularjs-humanize-duration
AngularJS filter wrapping the [humanize-duration](https://github.com/EvanHahn/HumanizeDuration.js) library. 

## Installation

Install via bower:

    bower install [--save] angularjs-humanize-duration

Call from your `index.html`:

    <script src="bower_components/humanize/humanize.js"></script>
    <script src="bower_components/angularjs-humanize-duration/src/angular-humanize-duration.js"></script>

And then add it as a dependency:

    var app = angular.module("myApp", ['angular-humanize-duration']);

## Examples

    {{ yourDuration | humanizeDuration }}
    
Or with parameters:

    {{ yourDuration | humanizeDuration:{ round: true } }}

For more examples and information on how to use this filter take a look at the [actual library on GitHub](https://github.com/EvanHahn/HumanizeDuration.js).
