import { NDArray } from './';
/**
 * @static
 * @memberof vectorious
 * @function sinh
 * @description Returns the hyperbolic sine of each element of `x`.
 * @param {NDArray} x
 * @returns {NDArray}
 * @example
 * import { sinh } from 'vectorious/core/sinh';
 *
 * sinh([1, 2, 3]); // => array([1.175201177597046, 3.6268603801727295, 10.017874717712402])
 */
export declare const sinh: (x: NDArray | ArrayLike<any>) => NDArray;
export default function (this: NDArray): NDArray;
