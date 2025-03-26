/* eslint-disable */
import 'vue-router';

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $route: import('vue-router').RouteLocationNormalized;
  }
}
