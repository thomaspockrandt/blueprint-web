export function onRequest(context: EventContext<any, any, any>): Response {
  return new Response(Date.now().toString());
}