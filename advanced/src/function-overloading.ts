function reverse(string: string): string;
function reverse(stringArray: string): string[];
function reverse(stringOrStringArray: string | string[]) {
  if (typeof stringOrStringArray === 'string') {
    return stringOrStringArray.split('').reverse().join('');
  } else {
    return stringOrStringArray.slice().reverse();
  }
}
