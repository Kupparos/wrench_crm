interface HttpResponse<T> extends Response {
   parsedBody?: T;
 }
 
export async function useFetch<T>(
   url: string,
   request: RequestInit
 ): Promise<HttpResponse<T>> {
   const response: HttpResponse<T> = await fetch(
     url,
     request
   );
 
   try {
     response.parsedBody = await response.json();
   } catch (ex) {}
 
   if (!response.ok) {
     throw new Error(response.statusText);
   }
   return response;
 }