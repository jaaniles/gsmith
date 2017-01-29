export function randomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
export function newElKey(){
    return Math.floor(Date.now() / 1000) + Math.random().toString(36).substr(2, 5)
}