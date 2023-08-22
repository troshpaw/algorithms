
// Линейный поиск
// Сложность алгоритма - O(n)

const inputArray = [0, 1, 2, 3, 4, 5, 6, 10, 8, 9, 7]
const searchValue = 7

const linaerSearch = (array, value) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return `Elements array ${i} = search value ${value}`
        }
    }
    return 'Element not found!'
}

console.log(linaerSearch(inputArray, searchValue))