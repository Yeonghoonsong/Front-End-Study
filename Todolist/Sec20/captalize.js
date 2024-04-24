function capitalize(str) {
    const firstLetter = str[0].toUpperCase();
    const otherLetters = str.slice(1);
    return firstLetter + otherLetters;
}
capitalize('eggplant');