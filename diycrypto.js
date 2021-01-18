
export function caesarEncrypt(msg, shift) {
    
    // 1.Översätta varje tecken til ett nummer
    const charCodes = []
    for (let i = 0; i < msg.length; i++) {
        charCodes.push(msg[i].charCodeAt(0))
    }
    
    // 2.Shifta det numret
    for (let i = 0; i < charCodes.length; i++) {
        charCodes[i] = charCodes[i] + shift
    }
    
    // 3.Översätta tillbaka från charCode till string
    let result = ""
    for (let i = 0; i < charCodes.length; i++) {
        result = result + String.fromCharCode(charCodes[i])
    }

    return result
}

export function caesarDecrypt(encryptedMsg, shift){
    //Läxa att implementera denna funktion
    
    // 1. Gå från tecken (chars) till tal (charCodes)
    // 2. Skifta åt andra hållet (minus istället för plus)
    // 3. Gå från tal (charCodes till tecken (chars)
    // 4. returnera resultatet
}