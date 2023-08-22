
// Бинарный поиск 
// Сложность алгоритма - O(log n)

const inputArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const searchValue = 7

const binarySearch = (array, value) => {
    
    let start = 0

    let end = array.length - 1

    let middle = Math.floor((start + end) / 2)

    console.log(start, middle, end)

    while (start <= end /* ??? */) {
        if (value) {}
        else {}
    }
}

binarySearch(inputArray, searchValue)