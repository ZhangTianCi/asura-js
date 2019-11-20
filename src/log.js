
let trace = (str) => {
    console.trace(str)
}
let info = (str) => {
    console.info(str)
}
let warn = (str) => {
    console.warn(str)
}
let error = (str) => {
    console.error(str)
}
let table = (obj) => {
    console.table(obj)
}

export default { trace, info, warn, error, table }