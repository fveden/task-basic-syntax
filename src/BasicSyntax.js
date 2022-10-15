export function romanToInteger(str) {
    let result = 0;
    let prev = 0,
        cur = 0;
    for (let i = 0; i < str.length; i++) {
        switch (str[i]) {
            case 'I':
                cur = 1;
                break;
            case 'V':
                cur = 5;
                break;
            case 'X':
                cur = 10;
                break;
            case 'L':
                cur = 50;
                break;
            case 'C':
                cur = 100;
                break;
            case 'D':
                cur = 500;
                break;
            case 'M':
                cur = 1000;
                break;
            default:
                cur = 0;
        }
        if (prev < cur) result += -prev + (cur - prev);
        else result += cur;
        prev = cur;
    }
    return result;
}
