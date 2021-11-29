/**
 * Returns an interpolated value between two values
 *
 * @param {number} The start value
 * @param {number} The end value
 * @param {number} The interpolation value between the two floats
 * @returns {Number} Returns the interpolated value
 * @example
 * 
 * lerp(1, 10, 0.5)
 * // => 5.5
 */
const lerp = (a: number, b: number, n: number) => {
  return (1 - n) * a + n * b
}

export default lerp 