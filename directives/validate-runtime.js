angular.module('app').directive('validateRuntime', () => { return {
    restrict: 'A',
        require: 'ngModel',
        link: (scope, elem, attrs, ctrl) => {
            ctrl.$validators.positiveNumber = () => {
                const number = ctrl.$viewValue
                if (number > 0) {
                    return true
                } else {
                    return false
                }
            }
        }
}})