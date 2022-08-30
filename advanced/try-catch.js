const getTip = (amount) => {
    if (typeof amount === 'number') {
        return amount * .25
    }
    throw Error("There is an error")
}

try {
    const result = getTip("test")
} catch (e) {
    console.log(e)
}