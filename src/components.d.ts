declare module "~icons/*" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<Record<string, unknown>, unknown, unknown>;
  export default component;
}
