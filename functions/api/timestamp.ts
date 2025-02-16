export function onRequest() {
  return new Response(Date.now().toString());
}