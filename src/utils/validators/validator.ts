
 export const required = (value: any) => {
    if (value)   return undefined
    return 'Field is required'
}
/*export const maxLength30 = (value: any) => {
    if (value.length > 30)   return 'Max length is 30 symbols'
    return undefined
}*/
 export const maxLengthCreator = (maxLength: number) => (value: any) => {
     if (value.length > maxLength)   return `Max length is ${maxLength} symbols`
     return undefined
 }

export const minLengthCreator = (minLength: number) => (value: any) => {
    if (value.length < minLength)   return `Min length is ${minLength} symbols`
    return undefined
}
