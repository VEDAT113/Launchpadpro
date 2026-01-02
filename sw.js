self.addEventListener("install",e=>{
 e.waitUntil(
  caches.open("ableton-web").then(c=>c.addAll(["./"]))
 );
});
