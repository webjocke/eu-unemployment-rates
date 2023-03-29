# EU Unemployment Rates Viewer
A website for showing unemployment rates for eu countries.

Data is fetched from the [europa.eu](https://europa.eu)'s [public api](https://webgate.ec.europa.eu/empl/redisstat/databrowser/view/LMP_IND_ACTRU/default/table?lang=en), with the name of `Activation of registered unemployed`, datacode `LMP_IND_ACTRU`.

![Demo gif](https://github.com/webjocke/eu-unemployment-rates/raw/main/demo.gif)

The site can be seen live on [eu-unemployment-rates.joakimjohansson.se](https://eu-unemployment-rates.joakimjohansson.se).

## Technologies used
React, Typescript, [Tailwindcss](https://tailwindcss.com/), [HeadlessUI](https://headlessui.com/), [JSONstat-toolkit](https://github.com/jsonstat/toolkit)

### CORS Proxy
To get around cors on the europa.eu api I deployed a simple Cloudflare edge worker with this code.

Usage: https://cors-proxy.joakimjohansson.se/ [url]

```
export default {
  async fetch(request, env) {
    try {
      const url = new URL(request.url)

      if (url.pathname === "/") {
        return new Response(`{"usage": "${url.origin}/<url>"}`)
      }

      function addHeaders(response) {
        response.headers.set("Access-Control-Allow-Origin", "*")
        response.headers.set("Access-Control-Allow-Credentials", "true")
        response.headers.set("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT")
        response.headers.set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization")
      }
      
      let response
      if (request.method == "OPTIONS") {
        response = new Response("")
        addHeaders(response)
        return response
      }

      response = await fetch(request.url.slice(url.origin.length + 1), {
          method: request.method,
          headers: request.headers,
          redirect: "follow",
          body: request.body
      });
      response = new Response(response.body, response)
      addHeaders(response);
      return response;
    } catch (e) {
      return new Response(e.stack || e, {status: 500});
    }
  }
}
```
Feel free to use my already deployed worker [cors-proxy.joakimjohansson.se](https://cors-proxy.joakimjohansson.se) but if you want to create your own, create a cloudflare account and create a new worker from the dashboard. Click quick edit, paste the code from above and deploy.