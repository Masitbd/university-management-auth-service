//['page','limit','sortBy','sortOrder']

const pick = <T extends Record<string, unknown>, k extends keyof T>(
  obj: T,
  keys: k[]
): Partial<T> => {
  const finalObj: Partial<T> = {};

  for (const key of keys) {
    if (obj && Object.hasOwnProperty.call(obj, key)) {
      finalObj[key] = obj[key];
    }
  }
  return finalObj;
};

export default pick;

/* // ['page', 'limit', 'sortBy', 'sortOrder']

const pick = <T extends Record<string, unknown>, K extends keyof T>
( obj: T,
  keys: K[]: Partial<T>
 => {
  const finalObj: Partial<T> = {};

  for (const key of keys) {
    if (obj && Object.hasOwnProperty.call(obj, key)) {
      finalObj[key] = obj[key];
    }
  }
  return finalObj;
};

export default pick;
 */