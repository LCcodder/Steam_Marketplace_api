# **This is a node module for getting Steam CS-GO items pricing**
___
## *How it works?*
+ This module allows you to get the price of an item from CS:GO directly into your code without any *"backend"*
+ Module was created using the *"request"* lib on node.js
___
## *How to use?*
>1) Create a new `GetUrl` class with arguments:
+ First argument - you currency (*uds, rub, eur, gbp*)
+ Second argument *StatTrak* of your skin (*bool*)
+ Third is a name of the gun
+ Fourth is a name of your skin
+ And last is s *float* of your skin
>2) Get url of your request and make a `SteamPrices` class with an url in the argument
```JavaScript
let SteamPrices = new SteamPrices(url.GetRequestURL())
```
>3) Use the construction in the expample to get a price:
```JavaScript
SteamPrices.getPrices((res, status) => {
    console.log(res)
    console.log(status)
})
``` 

___
### *Full example how to use:*
```JavaScript
let url = new GetUrl('usd', false, 'desert eagle', 'blaze', 'factory new')

let reQuest = new SteamPrices(url.GetRequestURL())

reQuest.getPrices((res, status) => {
    console.log(res)
    console.log(status)
})
```

___
## *Dependences:*
+ `request`: ^2.88.2

```
npm i request
```