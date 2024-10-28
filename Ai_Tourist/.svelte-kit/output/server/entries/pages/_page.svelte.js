import { c as create_ssr_component, d as add_attribute, f as split_css_unit, i as identity, h as compute_rest_props, g as getContext, j as spread, k as escape_attribute_value, l as escape_object, e as escape, v as validate_component, o as createEventDispatcher, p as compute_slots, q as each } from "../../chunks/ssr.js";
import { twMerge } from "tailwind-merge";
const historyLightInactive = "/_app/immutable/assets/historyLightInactive.ChmnUgQK.png";
const HistoryLightInactive = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<button onclick="location.href='/history'" type="button" class="bg-white border border-lightModeGrey-200 rounded-[100%] m-[20%]" data-svelte-h="svelte-an5s1w"><img class="h-[65%] mx-auto"${add_attribute("src", historyLightInactive, 0)} alt=""></button>`;
});
const settingsLightInactive = "data:image/png;base64,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";
const SettingsLightInactive = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<button onclick="location.href='/settings'" type="button" class="bg-white border border-lightModeGrey-200 rounded-[100%] m-[20%]" data-svelte-h="svelte-12u58f8"><img class="h-[65%] mx-auto"${add_attribute("src", settingsLightInactive, 0)} alt=""></button>`;
});
function cubicOut(t) {
  const f = t - 1;
  return f * f * f + 1;
}
function fade(node, { delay = 0, duration = 400, easing = identity } = {}) {
  const o = +getComputedStyle(node).opacity;
  return {
    delay,
    duration,
    easing,
    css: (t) => `opacity: ${t * o}`
  };
}
function fly(node, { delay = 0, duration = 400, easing = cubicOut, x = 0, y = 0, opacity = 0 } = {}) {
  const style = getComputedStyle(node);
  const target_opacity = +style.opacity;
  const transform = style.transform === "none" ? "" : style.transform;
  const od = target_opacity * (1 - opacity);
  const [xValue, xUnit] = split_css_unit(x);
  const [yValue, yUnit] = split_css_unit(y);
  return {
    delay,
    duration,
    easing,
    css: (t, u) => `
			transform: ${transform} translate(${(1 - t) * xValue}${xUnit}, ${(1 - t) * yValue}${yUnit});
			opacity: ${target_opacity - od * u}`
  };
}
const ToolbarButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["color", "name", "ariaLabel", "size", "href"]);
  const background = getContext("background");
  let { color = "default" } = $$props;
  let { name = void 0 } = $$props;
  let { ariaLabel = void 0 } = $$props;
  let { size = "md" } = $$props;
  let { href = void 0 } = $$props;
  const colors = {
    dark: "text-gray-500 hover:text-gray-900 hover:bg-gray-200 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600",
    gray: "text-gray-500 focus:ring-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-300",
    red: "text-red-500 focus:ring-red-400 hover:bg-red-200 dark:hover:bg-red-800 dark:hover:text-red-300",
    yellow: "text-yellow-500 focus:ring-yellow-400 hover:bg-yellow-200 dark:hover:bg-yellow-800 dark:hover:text-yellow-300",
    green: "text-green-500 focus:ring-green-400 hover:bg-green-200 dark:hover:bg-green-800 dark:hover:text-green-300",
    indigo: "text-indigo-500 focus:ring-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-800 dark:hover:text-indigo-300",
    purple: "text-purple-500 focus:ring-purple-400 hover:bg-purple-200 dark:hover:bg-purple-800 dark:hover:text-purple-300",
    pink: "text-pink-500 focus:ring-pink-400 hover:bg-pink-200 dark:hover:bg-pink-800 dark:hover:text-pink-300",
    blue: "text-blue-500 focus:ring-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800 dark:hover:text-blue-300",
    primary: "text-primary-500 focus:ring-primary-400 hover:bg-primary-200 dark:hover:bg-primary-800 dark:hover:text-primary-300",
    default: "focus:ring-gray-400 hover:bg-gray-100"
  };
  const sizing = {
    xs: "m-0.5 rounded-sm focus:ring-1 p-0.5",
    sm: "m-0.5 rounded focus:ring-1 p-0.5",
    md: "m-0.5 rounded-lg focus:ring-2 p-1.5",
    lg: "m-0.5 rounded-lg focus:ring-2 p-2.5"
  };
  let buttonClass;
  const svgSizes = {
    xs: "w-3 h-3",
    sm: "w-3.5 h-3.5",
    md: "w-5 h-5",
    lg: "w-5 h-5"
  };
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0) $$bindings.ariaLabel(ariaLabel);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0) $$bindings.href(href);
  buttonClass = twMerge(
    "focus:outline-none whitespace-normal",
    sizing[size],
    colors[color],
    color === "default" && (background ? "dark:hover:bg-gray-600" : "dark:hover:bg-gray-700"),
    $$props.class
  );
  return `${href ? `<a${spread(
    [
      { href: escape_attribute_value(href) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(buttonClass)
      },
      {
        "aria-label": escape_attribute_value(ariaLabel ?? name)
      }
    ],
    {}
  )}>${name ? `<span class="sr-only">${escape(name)}</span>` : ``} ${slots.default ? slots.default({ svgSize: svgSizes[size] }) : ``}</a>` : `<button${spread(
    [
      { type: "button" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(buttonClass)
      },
      {
        "aria-label": escape_attribute_value(ariaLabel ?? name)
      }
    ],
    {}
  )}>${name ? `<span class="sr-only">${escape(name)}</span>` : ``} ${slots.default ? slots.default({ svgSize: svgSizes[size] }) : ``}</button>`} `;
});
const CloseButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["name"]);
  let { name = "Close" } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
  return `${validate_component(ToolbarButton, "ToolbarButton").$$render($$result, Object.assign({}, { name }, $$restProps, { class: twMerge("ms-auto", $$props.class) }), {}, {
    default: ({ svgSize }) => {
      return `<svg${add_attribute("class", svgSize, 0)} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>`;
    }
  })} `;
});
const clsBtnExtraClass = "ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700";
const Toast = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "dismissable",
    "color",
    "position",
    "divClass",
    "defaultIconClass",
    "contentClass",
    "align",
    "transition",
    "params",
    "toastStatus"
  ]);
  let $$slots = compute_slots(slots);
  let { dismissable = true } = $$props;
  let { color = "primary" } = $$props;
  let { position = "none" } = $$props;
  let { divClass = "w-full max-w-xs p-4 text-gray-500 bg-white shadow dark:text-gray-400 dark:bg-gray-800 gap-3" } = $$props;
  let { defaultIconClass = "w-8 h-8" } = $$props;
  let { contentClass = "w-full text-sm font-normal" } = $$props;
  let { align = true } = $$props;
  let { transition = fade } = $$props;
  let { params = {} } = $$props;
  let { toastStatus = true } = $$props;
  createEventDispatcher();
  const positions = {
    "top-left": "absolute top-5 start-5",
    "top-right": "absolute top-5 end-5",
    "bottom-left": "absolute bottom-5 start-5",
    "bottom-right": "absolute bottom-5 end-5",
    none: ""
  };
  let finalDivClass = twMerge("flex", align ? "items-center" : "items-start", divClass, positions[position], $$props.class);
  const colors = {
    primary: "text-primary-500 bg-primary-100 dark:bg-primary-800 dark:text-primary-200",
    dark: "text-gray-500 bg-gray-100 dark:bg-gray-700 dark:text-gray-200",
    red: "text-red-500 bg-red-100 dark:bg-red-800 dark:text-red-200",
    yellow: "text-yellow-500 bg-yellow-100 dark:bg-yellow-800 dark:text-yellow-200",
    green: "text-green-500 bg-green-100 dark:bg-green-800 dark:text-green-200",
    blue: "text-blue-500 bg-blue-100 dark:bg-blue-800 dark:text-blue-200",
    indigo: "text-indigo-500 bg-indigo-100 dark:bg-indigo-800 dark:text-indigo-200",
    purple: "text-purple-500 bg-purple-100 dark:bg-purple-800 dark:text-purple-200",
    pink: "text-pink-500 bg-pink-100 dark:bg-pink-700 dark:text-pink-200",
    none: ""
  };
  let iconClass;
  if ($$props.dismissable === void 0 && $$bindings.dismissable && dismissable !== void 0) $$bindings.dismissable(dismissable);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.position === void 0 && $$bindings.position && position !== void 0) $$bindings.position(position);
  if ($$props.divClass === void 0 && $$bindings.divClass && divClass !== void 0) $$bindings.divClass(divClass);
  if ($$props.defaultIconClass === void 0 && $$bindings.defaultIconClass && defaultIconClass !== void 0) $$bindings.defaultIconClass(defaultIconClass);
  if ($$props.contentClass === void 0 && $$bindings.contentClass && contentClass !== void 0) $$bindings.contentClass(contentClass);
  if ($$props.align === void 0 && $$bindings.align && align !== void 0) $$bindings.align(align);
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0) $$bindings.transition(transition);
  if ($$props.params === void 0 && $$bindings.params && params !== void 0) $$bindings.params(params);
  if ($$props.toastStatus === void 0 && $$bindings.toastStatus && toastStatus !== void 0) $$bindings.toastStatus(toastStatus);
  iconClass = twMerge("inline-flex items-center justify-center shrink-0 rounded-lg", colors[color], defaultIconClass);
  return `${toastStatus ? `<div${spread(
    [
      { role: "alert" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(finalDivClass)
      }
    ],
    {}
  )}>${$$slots.icon ? `<div${add_attribute("class", iconClass, 0)}>${slots.icon ? slots.icon({}) : ``}</div>` : ``} <div${add_attribute("class", contentClass, 0)}>${slots.default ? slots.default({}) : ``}</div> ${dismissable ? `${validate_component(CloseButton, "CloseButton").$$render(
    $$result,
    {
      divclass: clsBtnExtraClass,
      ariaLabel: "Remove toast",
      color
    },
    {},
    {}
  )}` : ``}</div>` : ``} `;
});
const ExclamationCircleSolid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "color", "withEvents", "title", "desc", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let { size = ctx.size || "md" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { color = ctx.color || "currentColor" } = $$props;
  let { withEvents = ctx.withEvents || false } = $$props;
  let { title = {} } = $$props;
  let { desc = {} } = $$props;
  let ariaDescribedby = `${title.id || ""} ${desc.id || ""}`;
  let hasDescription = false;
  let { ariaLabel = "exclamation circle solid" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0) $$bindings.role(role);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.withEvents === void 0 && $$bindings.withEvents && withEvents !== void 0) $$bindings.withEvents(withEvents);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0) $$bindings.desc(desc);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0) $$bindings.ariaLabel(ariaLabel);
  {
    if (title.id || desc.id) {
      hasDescription = true;
    } else {
      hasDescription = false;
    }
  }
  return `${withEvents ? `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: escape_attribute_value(color) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size ?? "md"], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        "aria-describedby": escape_attribute_value(hasDescription ? ariaDescribedby : void 0)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v5a1 1 0 1 0 2 0V8Zm-1 7a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z" clip-rule="evenodd"></path></svg>` : `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: escape_attribute_value(color) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size ?? "md"], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        "aria-describedby": escape_attribute_value(hasDescription ? ariaDescribedby : void 0)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v5a1 1 0 1 0 2 0V8Zm-1 7a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z" clip-rule="evenodd"></path></svg>`} `;
});
const chatsLightActive = "data:image/png;base64,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";
const microphoneLight = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAsTAAALEwEAmpwYAAAIQUlEQVR4nO2daahVVRTHV5ZT9aGJ0iwyM5Wykb5WNGFEg1JkIxgUWqIlWlkRShN9KNSSoKIv9aUiKaJBqbCJJklNs8kGKioatPJp5tCw/5z74nV57+299j37/Pe9Z/3gDyK6ztlrrXvO2Wuvs49IPRjmdInTIqdlTuudNjptb2hj4++WNf7NxY3/Y7Qx+zrNdFrh9E+k3nOa0bBltAkHOS102iLxgW/WZqcFTiMqHIehZKDTtU5dUl7gm4Wkmu80uJohGaGMdVot6QLfrFVOYyoZmeHlfEn7q+9Lm5wmVTA+ox+mOO2Q6oPfrZ1O01IP0uidqcILfLNmJB6r0QQu+/j1sQPf80owMemIjf8Y7fS78IPeLDyHjEs4bsMxSKp92tdqpRTTUSMRc4UfZJ/mJBt9zUEVDhU5doBDbgXDE/mg1qC8yw5uqO5N5IPagsWYMmv7qbVZbAGpVLCqxw6qVtOTeKKmtLKky9K7STxRQ/BA9bfwA6oVzvmABP6oHejkYQczVpMT+KN2oEWLHchYLUjgj9qBPj12IGP1QgJ/1I4vhB/IWK1P4I/asUH4gYzVzwn8UTu2CT+QsfozgT9qBzuIrcpoEXYALQHIsANoCUCGHUBLADLsAFoCkGEH0BKADDuAlgBk2AG0BCDDDqAlABl2AC0ByLADaAlAhh1ASwAy7ABaApBhB9ASgAw7gJYAZNgBtAQgww6gJQAZdgAtAciwA2gJQIYdQEsAMuwAWgKQYQfQEoAMO4CWAGTYAbQEiGSI03VSvCe/uaF3pNjQeYjCDjuAVSXAUKdZ8n9/4c/wocZfWTDS6UPp2ylrG/8mBHYAq0iAQ53W9WND4y86ezh9LH7HfOS0e4A9dgBTJwD89UmJ/qJzk4Q7Z26APXYAUyfAzSX7i84aCR/QBwH22AFMnQBrS/YXna0SPqCtAfbYAUydAGX7i07ZDmIHMHUClG2PDttBualqf9FhOyg3Ve0vOmwH5aaq/UWH7aDcVLW/6LAdlJuq9hcdtoNyU9X+osN2UG6q2l90NIUNS4AOTADtxo5DPfbYAbQEUPKN6Aa0v8deJ28UOVhpb5vHXhZg2VIzqMM89jp5q9j9lPY2eOxlwXLRDeoUj73PlfZykm+z6FFKe1977GXBI6Ib1FSPvU7eLv4Epb11HntZcIvoBuX7xNp9Sns5yffBiEuV9pZ77GWB9hMvr3vsaZ2Uky70jO0Opb2HPfay4CjRDQpPyv1NBUco7eUifDTKN8NZorTZFi1hu4r+696nemyuUtrLQW97xjTA6SelzQs8NrPhJdENbJHH3mylvRzk+3Dk8RE2x3psZsNtohvYD1JcOfpimBS3CnZQQxXy6dgblTZ/dNrFYzMbTha900732HwwwiZL9wT4aKXS5pIAm9mAX7P2/vaMxyaKJu1wFdgkxRWrP46NsDvLYzM7tAWhv5zGeGxqp00MzQ7wTczHMMcF2M2Ks0U/yIc8NvFq1GcRdqvS+04DPWNA/X+T0u4aj80sgSO+E91Adzod6bF7tNMfSrtVqEvCntLvjrB9a4DdLLld9IN9LsDuFZLXF8WRuOcGnDcKQ10R9tvu8t/NwVI4RzvgcwJsa16qTCkk4lWB/ngswv7yQNvZ8rToB/29+OfRAG8iM68ESO7Q4E+IPEbIlSVrUPGKCdLjgfZxO9D2IZYhlLtDg7OX05cRx0A/wYDAY2TNUxLn5JmB9o+TamcHeNofHXhuCOCzkceZFniM7MGTPeb5WgfgEntm4DGwojhf0haLtjSOMUgx9nmRx/pU/FPKtgJr2TGO2ChF5SwUVAxRNi6zmRS1fTSu+Cp8zUyR+GeUScpjZc8+UixoxDgDZWVffaCZ4U5znFZHHhOBw5Lu9Ma5a5kscTMg6I2I47UFrXT3YMVQcyXoyYFOl0nRXoYeQ1xecWXZ1hC6bbFR04tStHEheL5mjv643Gm7xI0TD7RHtHDs7IGTY5MARZSzqj/lYLBci+JXK1PT6ys/64rBL0tbIu6pHVI4KbfpEW4T2havZr0l/fdFdAwnSRHIVpz1ihT9gjlwhtO30tp4cBsaVfWJM0GDYysO63baNcL71aDU/ai0Xo3Ej8HXF9lx4H6p7RnoS9g/b0KF544y9Z1S3qpk2zV7lMVuEl8l603oHsZMQ1Oo0TBeip6FMpejfS+PdDxo8nhTynNo960BhafTpPVqGqae80TfwxeiB6SNGj1TsqfoW8lDhV/ra053STE/xwPoSKe9m4Q19xOdLpKi9Wyp0y+JzgnC7S+3mQwVXLaflHQOz0noCbTg9wKe5hcLP0CphKd939vQhhSXaqy8sQNWprCeUeVMpe1B82fOHcAavSzFeoShBDMEvGUTu6rGFhZ2UPCy+32LHOO0QvgB1Qil6rbt5s0RFI3Q//eV8IPbn3Db6rhmjpzAdPFq0W9Hl1r4Shp2R6nFal4OwNHnOT0vcf2GZWhn4/gTxe7zVA5xusHpVWl9mTlE+NATXkzJZTna6AF68NHSdb8UvXXaFzF7E3oZ0dp+pRRLwEYbgcUW9PBrg44dPFC4GV79KRsp0CaA0WFYAtQcS4CaYwlQcywBao4lQM2xBKg5lgAdAnYjXyjFxxNiNlwqWzgHLAShvXt8wnHXHqwCoo065+YQnNtiSfdeQm3B17XQYMEOcKjQ4m5JUCL45bODqpVvC3wjEGyWwFrvb0W4HVhLWAl08kejjADwtM8OZKzacpPn3NB+fygn/ZrAH7UDW7SxAxmrrgT+qB3t/OXQpQn8UTsOd/pN+MHUCuccup2s4QFfGH9Cir0C2YH1CeeIja7bYsOnfwGBEuI+fjdavQAAAABJRU5ErkJggg==";
const plusLight = "/_app/immutable/assets/plusLight.DH7hNV28.png";
const sendLight = "data:image/png;base64,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";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let notifications = [];
  return `${$$result.head += `<!-- HEAD_undefined_START --><!-- HEAD_undefined_END -->`, ""}  <div id="body"> <div id="notificationsContainer" class="fixed z-50 left-[5%] top-[3%]"> ${each(notifications, (notification) => {
    return ` ${validate_component(Toast, "Toast").$$render(
      $$result,
      {
        transition: fly,
        params: { x: -200 },
        color: "red",
        class: "relative m-[5px]"
      },
      {},
      {
        icon: () => {
          return ` ${validate_component(ExclamationCircleSolid, "ExclamationCircleSolid").$$render($$result, { class: "w-5 h-5 red" }, {}, {})} <span class="sr-only" data-svelte-h="svelte-f43a0">Error icon</span> `;
        },
        default: () => {
          return `  ${escape(notification.message)} `;
        }
      }
    )}`;
  })}</div>  <div class="sticky z-20 top-0 border-b border-b-2 border-lightModeGrey-600 bg-lightModeGrey-100 py-4" data-svelte-h="svelte-1r20o6j"><h1 class="text-2xl text-black font-consolas text-center my-auto">Chats</h1></div>  <div class="border-0" data-svelte-h="svelte-1jufqmu"><div class="m-auto w-1/2 py-6" id="imageContainer"> <label for="image" class="flex items-center justify-center bg-white h-60 border-lightModeGrey-400 border border-2 rounded-xl" id="imageLabel"><input id="image" type="file" accept="image/*" class="hidden">  <img class="max-h-[350px] object-cover rounded-xl" id="imageDisplay" src="" alt="">  <img class="h-[60%] rounded-xl " id="plusIcon"${add_attribute("src", plusLight, 0)} alt=""></label></div></div>  <div id="chatsContainer" class="bg-lightModeGrey-200 p-3 mx-3 rounded-xl relative invisible mb-[200px] border-0" data-svelte-h="svelte-ck23en"></div>  <div class="fixed z-10 bottom-0 w-[100%] px-[2%] right-[50%] translate-x-2/4 bg-lightModeGrey-100 pt-[15px]" id="textBarAndButtonContainer"> <div class="flex mx-[20px] border-black border-2 bg-white rounded-xl bottom-[17%] justify-centre" data-svelte-h="svelte-18t3k90"> <button class="w-[10%]"><img id="microphone" class="h-auto p-[5px] transition-opacity transition-transform duration-200 ease-in-out transform"${add_attribute("src", microphoneLight, 0)} alt="Voice to Text"></button>  <hr class="w-[2px] h-[24px] my-auto rounded-xl bg-black border-0">  <input type="text" id="textInputField" placeholder="Ask ChatGPT..." class="ml-[5px] focus:outline-none grow">  <div id="send" class="transition-[opacity] duration-[500ms] opacity-30 w-[10%]"><img class="h-auto p-1"${add_attribute("src", sendLight, 0)} alt=""></div> </div>  <hr class="bg-lightModeGrey-700 mx-auto border border-lightModeGrey-700 w-[75%] mt-[5%] mb-[1%]">  <div class="grid grid-cols-3 bottom-0 w-[80%] left-[8%] justify-center mx-auto" id="buttonContainer"> ${validate_component(HistoryLightInactive, "HistoryLightInactive").$$render($$result, {}, {}, {})}  <button type="button" class="aspect-square bg-lightModeGrey-800 border border-lightModeGrey-800 rounded-[100%] m-[12%]" data-svelte-h="svelte-1v9vezk"><img class="w-[65%] mx-auto"${add_attribute("src", chatsLightActive, 0)} alt="Chats Icon"></button>  ${validate_component(SettingsLightInactive, "SettingsLightInactive").$$render($$result, {}, {}, {})} </div> </div></div> `;
});
export {
  Page as default
};
