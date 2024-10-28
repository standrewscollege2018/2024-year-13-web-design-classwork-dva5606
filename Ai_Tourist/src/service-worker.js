// Imports modules
import { build, files, prerendered, version } from "$service-worker";
import { precacheAndRoute } from "workbox-precaching";

// Creates an array of what needs to be cached
const precache_list = [
  "/",
  ...build,
  ...files,
  ...prerendered,
].map((file) => ({
  url: file,
  revision: version,
}));

// Caches the files in the array
precacheAndRoute(precache_list);