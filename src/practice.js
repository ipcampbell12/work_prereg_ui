const names = [
    ['Ian', 'Campbell'],
    ['James', 'Campbell'],
    ['Neri', 'Campbell']
]

const nameStr = names.map(row => `${row[1], row[0]}`).join(', ')
console.log(nameStr)