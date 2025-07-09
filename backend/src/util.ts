

export function genHash(len: number) {
    const options = "abcdefghijklmnopqrstuvwxyz0123456789"
    const length = options.length
    let result = ""
    for (let i=0; i<len; i++) {
        result += options[ Math.floor(Math.random() * length) ]
    }
    return result;
}