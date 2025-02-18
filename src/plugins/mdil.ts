import { h } from 'vue';
import { VClassIcon } from 'vuetify/lib/composables/icons.mjs';

const mdilAliases = {
  collapse: 'mdil-chevron-up',
  complete: 'mdil-check',
  cancel: 'mdil-close-circle',
  close: 'mdil-close',
  delete: 'mdil-close-circle',
  clear: 'mdil-close-circle',
  success: 'mdil-check-circle',
  info: 'mdil-information',
  warning: 'mdil-alert-circle',
  error: 'mdil-close-circle',
  prev: 'mdil-chevron-left',
  next: 'mdil-chevron-right',
  checkboxOn: 'mdil-checkbox-marked',
  checkboxOff: 'mdil-checkbox-blank-outline',
  checkboxIndeterminate: 'mdil-minus-box',
  delimiter: 'mdil-circle',
  sortAsc: 'mdil-arrow-up',
  sortDesc: 'mdil-arrow-down',
  expand: 'mdil-chevron-down',
  menu: 'mdil-menu',
  subgroup: 'mdil-menu-down',
  dropdown: 'mdil-menu-down',
  radioOn: 'mdil-radiobox-marked',
  radioOff: 'mdil-radiobox-blank',
  edit: 'mdil-pencil',
  ratingEmpty: 'mdil-star-outline',
  ratingFull: 'mdil-star',
  ratingHalf: 'mdil-star-half-full',
  loading: 'mdil-cached',
  first: 'mdil-page-first',
  last: 'mdil-page-last',
  unfold: 'mdil-unfold-more-horizontal',
  file: 'mdil-paperclip',
  plus: 'mdil-plus',
  minus: 'mdil-minus',
  calendar: 'mdil-calendar',
  treeviewCollapse: 'mdil-menu-down',
  treeviewExpand: 'mdil-menu-right',
  eyeDropper: 'mdil-eyedropper',
  upload: 'mdil-cloud-upload',
};

const mdil = {
  component: (props: any) => h(VClassIcon, {
    ...props,
    class: 'mdil'
  })
};

export { mdilAliases, mdil };