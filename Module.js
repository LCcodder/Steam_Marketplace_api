const request = require('request')

class GetUrl {
    constructor (currency, statTrak, weaponName, skinName, quality) {
        switch (currency.toLowerCase()) {
            case 'rub':
                this.currency = "5"
                break
            case 'eur':
                this.currency = "3"
                break
            case 'gbp':
                this.currency = "2"
                break
            case 'usd':
                this.currency = "1"
                break
            default:
                this.currency = "1"    
        }        

        switch (statTrak) {
            case true:
                this.statTrak = 'StatTrak%20'
                break
            case false:
                this.statTrak = ''
                break
        }

        this.weaponName = GetUrl.#GetURLNameItem(weaponName)
        this.skinName = GetUrl.#GetURLNameItem(skinName)
        this.quality = GetUrl.#GetURLNameItem(quality)
    }

    GetRequestURL() {
        const defaultSrc = 'https://steamcommunity.com/market/priceoverview/?appid=730&'
        let finalURL = ''
        finalURL += 'currency=' + this.currency + '&'
        finalURL += 'market_hash_name=' + this.statTrak + this.weaponName + '%20%7C%20'
        finalURL += this.skinName + '%20'
        finalURL += '(' + this.quality + ')'
        return defaultSrc + finalURL      
    }

    static #GetURLNameItem(name) { 
        if (name.includes(' ')) {
            let first_part = name.slice(0, name.indexOf(' '))
            first_part = first_part.charAt(0).toUpperCase() + first_part.slice(1)

            let second_part = name.slice(name.indexOf(' ')+1)
            second_part = second_part.charAt(0).toUpperCase() + second_part.slice(1)

            return first_part + "%20" + second_part
        } 
        return name.charAt(0).toUpperCase() + name.slice(1)
    }

}

class SteamPrices {
    constructor(targetURL) {
        this.targetURL = targetURL
    }

    static #getData (data) {
        if (!data.success) return "Nothing matched, try another configuration"
        return {
            currentPrice: data.lowest_price,
            medianPrice: data.median_price
        }
    }

    getPrices (userFunc) {

        request(this.targetURL, (error, response, body) => {
            if(error != null) {
                console.log(error)
                return
            } 

            let requestResult
            try {
                requestResult = JSON.parse(body)
                requestResult = Request.#getData(requestResult)
            } catch (err) {
                requestResult = "Error, nothing matched"
            }

            userFunc(requestResult, response && response.statusCode)
        })
        
    }

}

module.exports = {SteamPrices, GetUrl}


