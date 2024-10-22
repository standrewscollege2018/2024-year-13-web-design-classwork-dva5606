import { c as create_ssr_component } from './ssr-Co8dhPAP.js';

const css = {
  code: "body{--tw-bg-opacity:1;background-color:rgb(248 248 248 / var(--tw-bg-opacity))\n}",
  map: '{"version":3,"file":"+layout.svelte","sources":["+layout.svelte"],"sourcesContent":["<script>\\r\\n    import \\"../touristAi.css\\";\\r\\n  <\/script>\\r\\n  \\r\\n  <style lang=\\"postcss\\">\\r\\n    :global(body) {\\n    --tw-bg-opacity: 1;\\n    background-color: rgb(248 248 248 / var(--tw-bg-opacity))\\n}\\r\\n  </style>\\r\\n\\r\\n  <slot />\\r\\n"],"names":[],"mappings":"AAKY,IAAM,CACd,eAAe,CAAE,CAAC,CAClB,gBAAgB,CAAE,IAAI,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,CAAC,IAAI,eAAe,CAAC,CAAC;AAC7D"}'
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${slots.default ? slots.default({}) : ``}`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-Cb2i5G3L.js.map
