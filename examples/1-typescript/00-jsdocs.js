// JSDocs
// JSDocs es como un pseudo TS. Nos permite tipar sin usar TS sin evaluar si es correcto.


/**
 * Funcion que recibe dos numeros y devuelve la suma
 * @param {number} x 
 * @param {number} y
 * @returns {number} sum
 */
function sum(x, y) {
    return x + y;
}


// Con jsdocs el IDE nos "ayuda" pero no evalua si el código es correcto
sum('a', undefined);
sum();
sum(NaN, undefined);
sum(null, NaN);