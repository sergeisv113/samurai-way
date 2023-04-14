
 export const required = (value: any) => {
    if (value)   return undefined //return value ? undefined : 'field is required'
    return 'Field is required'
}

 export const maxLengthCreator = (maxLength: number) => (value: string) => {
     if (value.length > maxLength)   return `Max length is ${maxLength} symbols`
     //return value && value.length>length ? `Max length is ${length}` : undefined
     return undefined
 }

export const minLengthCreator = (minLength: number) => (value: string) => {
    if (value.length < minLength)   return `Min length is ${minLength} symbols`
    return undefined
}
