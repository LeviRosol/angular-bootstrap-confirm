'use strict';

var template = '<div\n' +
  'class="popover"\n' +
  'ng-class="[vm.$attrs.placement || vm.defaults.placement, \'popover-\' + (vm.$attrs.placement || vm.defaults.placement), vm.$attrs.popoverClass || \n' +
  'vm.defaults.popoverClass, {fade: vm.animation}]">\n' +
  '<div class="popover-arrow arrow"></div>\n' +
  '<h3 class="popover-title" ng-bind-html="vm.$attrs.title"></h3>\n' +
  '<div class="popover-content">\n' +
    '<p ng-bind-html="vm.$attrs.message"></p>\n' +
    '<div class="row">\n' +
      '<div\n' +
        'class="col-xs-6"\n' +
        'ng-if="!vm.$attrs.hideConfirmButton && !vm.defaults.hideConfirmButton"\n' +
        'ng-class="{\'col-xs-offset-3\': vm.$attrs.hideCancelButton || vm.defaults.hideCancelButton}">\n' +
        '<button\n' +
          'class="btn btn-block confirm-button"\n' +
          'ng-class="\'btn-\' + (vm.$attrs.confirmButtonType || vm.defaults.confirmButtonType)"\n' +
          'ng-click="vm.onConfirm(); vm.hidePopover()"\n' +
          'ng-bind-html="vm.$attrs.confirmText || vm.defaults.confirmText">\n' +
        '</button>\n' +
      '</div>\n' +
      '<div\n' +
        'class="col-xs-6"\n' +
        'ng-if="!vm.$attrs.hideCancelButton && !vm.defaults.hideCancelButton"\n' +
        'ng-class="{\'col-xs-offset-3\': vm.$attrs.hideConfirmButton || vm.defaults.hideConfirmButton}">\n' +
        '<button\n' +
          'class="btn btn-block cancel-button"\n' +
          'ng-class="\'btn-\' + (vm.$attrs.cancelButtonType || vm.defaults.cancelButtonType)"\n' +
          'ng-click="vm.onCancel(); vm.hidePopover()"\n' +
          'ng-bind-html="vm.$attrs.cancelText || vm.defaults.cancelText">\n' +
        '</button>\n' +
      '</div>\n' +
    '</div>\n' +
  '</div>\n' +
'</div>\n';

module.exports = {
  template: template
};
