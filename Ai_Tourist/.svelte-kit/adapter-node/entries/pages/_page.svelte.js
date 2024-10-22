import { c as create_ssr_component, d as split_css_unit, i as identity, f as compute_rest_props, g as getContext, h as spread, j as escape_attribute_value, k as escape_object, e as escape, v as validate_component, l as add_attribute, o as createEventDispatcher, p as compute_slots, q as each } from "../../chunks/ssr.js";
import { twMerge } from "tailwind-merge";
const HistoryLightInactive = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<button onclick="location.href='/history'" type="button" class="bg-white border border-lightModeGrey-200 rounded-[100%] m-[20%]" data-svelte-h="svelte-10b9v6x"><img class="h-[65%] mx-auto" src="src/lib/images/historyLightInactive.png" alt=""></button>`;
});
const SettingsLightInactive = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<button onclick="location.href='/settings'" type="button" class="bg-white border border-lightModeGrey-200 rounded-[100%] m-[20%]" data-svelte-h="svelte-54jx4z"><img class="h-[65%] mx-auto" src="src/lib/images/settingsLightInactive.png" alt=""></button>`;
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
  })}</div>  <div class="sticky z-20 top-0 border-b border-b-2 border-lightModeGrey-600 bg-lightModeGrey-100 py-4" data-svelte-h="svelte-1r20o6j"><h1 class="text-2xl text-black font-consolas text-center my-auto">Chats</h1></div>  <div class="border-0" data-svelte-h="svelte-1mp4yyf"><div class="m-auto w-1/2 py-6" id="imageContainer"> <label for="image" class="flex items-center justify-center bg-white h-60 border-lightModeGrey-400 border border-2 rounded-xl" id="imageLabel"><input id="image" type="file" accept="image/*" class="hidden">  <img class="max-h-[350px] object-cover rounded-xl" id="imageDisplay" src="" alt="">  <img class="h-[60%] rounded-xl " id="plusIcon" src="src/lib/images/plusLight.png" alt=""></label></div></div>  <div id="chatsContainer" class="bg-lightModeGrey-200 p-3 mx-3 rounded-xl relative invisible mb-[200px] border-0" data-svelte-h="svelte-ck23en"></div>  <div class="fixed z-10 bottom-0 w-[100%] px-[2%] right-[50%] translate-x-2/4 bg-lightModeGrey-100 pt-[15px]" id="textBarAndButtonContainer"> <div class="flex mx-[20px] border-black border-2 bg-white rounded-xl bottom-[17%] justify-centre" data-svelte-h="svelte-1ly6cew"> <button class="w-[10%]"><img id="microphone" class="h-auto p-[5px] transition-opacity transition-transform duration-200 ease-in-out transform" src="src/lib/images/microphoneLight.png" alt="Voice to Text"></button>  <hr class="w-[2px] h-[24px] my-auto rounded-xl bg-black border-0">  <input type="text" id="textInputField" placeholder="Ask ChatGPT..." class="ml-[5px] focus:outline-none grow">  <div id="send" class="transition-[opacity] duration-[500ms] opacity-30 w-[10%]"><img class="h-auto p-1" src="src/lib/images/sendLight.png" alt=""></div> </div>  <hr class="bg-lightModeGrey-700 mx-auto border border-lightModeGrey-700 w-[75%] mt-[5%] mb-[1%]">  <div class="grid grid-cols-3 bottom-0 w-[80%] left-[8%] justify-center mx-auto" id="buttonContainer"> ${validate_component(HistoryLightInactive, "HistoryLightInactive").$$render($$result, {}, {}, {})}  <button type="button" class="aspect-square bg-lightModeGrey-800 border border-lightModeGrey-800 rounded-[100%] m-[12%]" data-svelte-h="svelte-1tb8ocv"><img class="w-[65%] mx-auto" src="src/lib/images/chatsLightActive.png" alt=""></button>  ${validate_component(SettingsLightInactive, "SettingsLightInactive").$$render($$result, {}, {}, {})} </div> </div></div> `;
});
export {
  Page as default
};
