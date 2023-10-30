function numberToText(n: number) {
  if (n < -99 || n > 99) return 'Неверное число'
  let minusStr = ''
  let sN = ''
  const numberWithMinus = n.toString()
  if (numberWithMinus[0] == '-') {
    minusStr = 'минус '
    sN = numberWithMinus.slice(1)
  } else {
    sN = n.toString()
  }
  const oneNumber = [, 'первое', 'второе', 'третье', 'четвёртое', 'пятое', 'шестое', 'седьмое', 'восьмое', 'девятое']
  const secondOfTen = ['десятое', 'одиннадцатое', 'двенадцатое', 'тринадцатое', 'четырнадцатое', 'пятьнадцатое', 'шестьнадцатое', 'семьнадцатое', 'восемьнадцатое', 'девятьнадцатое']
  const firstOfMoreTen = [, , 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто']
  const firstOfMoreTenRound = [, , 'двадцатое', 'тридцатое', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто']
  if (sN.length == 1) {
    return minusStr + oneNumber[+sN[0]]
  }
  if (sN.length == 2) {
    if (sN[0] == '1') {
      return minusStr + secondOfTen[+sN[1]]
    }
    if (sN[1] == '0') {
      return minusStr + firstOfMoreTenRound[+sN[0]]
    }
    return minusStr + firstOfMoreTen[+sN[0]] + ' ' + oneNumber[+sN[1]]
  }
}

class ExtendedDate extends Date {
  getRussianDate() {
    const month = ['января', 'февряля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
    return numberToText(this.getDate()) + ' ' + month[this.getMonth()]
  }
  isFuture() {
    return this.getTime() > Date.now()
  }
  isLeap() {
    const year = this.getFullYear()
    return year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)
  }
  nextDate() {
    return new ExtendedDate(this.setDate(this.getDate() + 1))
  }
}

console.log(new Date('10-02-2023'))
console.log(new ExtendedDate('10-02-2023'))
console.log(ExtendedDate.now())
console.log(new ExtendedDate(Date.now() - 24 * 3600 * 1000).getRussianDate())
console.log(new ExtendedDate(Date.now() - 24 * 3600 * 1000).isFuture())
console.log(new ExtendedDate().isFuture())
console.log(new ExtendedDate(Date.now() + 24 * 3600 * 1000).isFuture())
console.log(new ExtendedDate().isLeap())
console.log(new ExtendedDate('10-02-2024').isLeap())
console.log(new ExtendedDate('10-02-2300').isLeap())
console.log(new ExtendedDate('10-02-2400').isLeap())
console.log(new ExtendedDate().nextDate().nextDate().nextDate())

console.log((null + 'a').split('ll').join('tell'))