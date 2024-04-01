/**
 * @param {number} min minimum range
 * @param {number} max maximum range
 * @param {number} [precision=0] precision for decimal points
 * @returns {number}
 */
const randomNumber = (min, max, precision = 0) => {
    precision = precision ? precision * 10 : 0;
    if (min > max) throw new RangeError('min cannot be more than max');
    const randomNumber = Math.random() * (max - min) + min;
    return Number(randomNumber.toFixed(precision));
}

export default randomNumber;