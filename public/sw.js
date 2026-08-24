self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("hfix-lab-v1").then((cache) =>
      cache.addAll(["/", "/servicos", "/como-funciona", "/solicitar-reparo", "/acompanhar"])
    )
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});

