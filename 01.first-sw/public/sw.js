self.addEventListener("install", event => {
  console.log("V1 installing…");

  event.waitUntil(
    caches.open("static-v1").then(cache => cache.add("/cat.jpg"))
  );
});

self.addEventListener("activate", event => {
  console.log("V1 activated!");
});

self.addEventListener("fetch", event => {
  console.log("V1 handle fetch");
  const url = new URL(event.request.url);

  if (url.origin === location.origin && url.pathname == "/dog.webp") {
    event.respondWith(caches.match("/cat.jpg"));
  }
});

self.addEventListener("push", function(event) {
  event.waitUntil(self.registration.showNotification(event.data.text()));
});
