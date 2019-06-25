export const inc = () => ({type: 'INC'});
export const dec = () => ({type: 'DEC'});
export const zero = () => {
    return {type: 'ZERO', value: 0};
};