## How to use this

add this on top of  http server in **server.ts** file

```typescript
    //> Api handler

    if (url.startsWith("/api/")) {
        new ApiRouter(req, res).route(url.substring("/api/".length));
        return;
    }
```



and register your controllers on **Api-Router.ts**

```typescript
 var constructors: IControllerIndex = {
            "request": requestController,
            "project": projectController,
            "action": actionController,
            "job": jobController,
            "opearation": opearationController,
        };
```



