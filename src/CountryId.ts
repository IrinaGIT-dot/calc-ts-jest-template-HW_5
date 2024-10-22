export function lvId(): string {
    let randomDigit = Math.floor(Math.random() * 9000 + 1000).toString()
    let latCode = 'LVA-'
    return latCode + randomDigit
    }
    console.log(lvId())

export function estId(): string {
    let randomDigit = Math.floor(Math.random() * 9000 + 1000).toString()
    let estCode = 'EST-'
    return estCode + randomDigit
}
console.log(estId())

export function ltId(): string {
    let randomDigit = Math.floor(Math.random() * 9000 + 1000).toString()
    let ltCode = 'LTU-'
    return ltCode + randomDigit
}
console.log(ltId())