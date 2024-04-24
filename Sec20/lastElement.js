function lastElement(array) {
    let lastIndex = array[array.length - 1];
    if (array.length > 0) {
        return lastIndex;

    } else return null;
}
lastElement([1, 2, 3]);
lastElement([]);