export function PriceSet (priceCents = 0){
    // console.log(priceCents);
    return `$${(priceCents / 100).toFixed(2)}`
}