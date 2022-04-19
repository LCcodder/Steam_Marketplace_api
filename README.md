# **This is a node module for getting Steam CS-GO items pricing**
## *How to use?*

```JavaScript
let url = new GetUrl('usd', false, 'desert eagle', 'blaze', 'factory new')

let reQuest = new SteamPrices(url.GetRequestURL())

reQuest.getPrices((res, status) => {
    console.log(res)
    console.log(status)
})
```