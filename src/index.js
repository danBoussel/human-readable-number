module.exports = function toReadable(number) {
    let numArr = [number].join().split('')
    let h;
    let t;
    let o;
    if (number >= 100) {
        h = numArr[0]
        t = numArr[1]
        o = numArr[2]
        if (t === '1' || o === '0') {
            o = [t, o].join('')
            t = !t
        }
        if (t === '0') {
            o = numArr[2]
            t = !t
        }
    };
    if (number < 100) {
        numArr.length > 1 ? (t = numArr[0], o = numArr[1]) : o = numArr[0]

        if (t === '1') {
            o = [t, o].join('')
            t = !t
        }
    };
    const nums = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        0: 'zero',
        20: 'twenty ',
        30: 'thirty ',
        40: 'forty ',
        50: 'fifty ',
        60: 'sixty ',
        70: 'seventy ',
        80: 'eighty ',
        90: 'ninety ',
        100: 'hundred ',
    };
    if (number >= 100) {
        return t ? `${nums[h]} hundred ${nums[t*10]}${nums[o]}` : `${nums[h]} hundred ${nums[o]}`
    }
    return t ? nums[t * 10] + nums[o] : nums[o]
}