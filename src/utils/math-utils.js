export function getRandomNumber(num) {
    const random = Math.random()
    const result = Math.floor(random * num)
    return result;
}