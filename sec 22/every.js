function allEvens(num) {
    return num.every(num => num % 2 === 0);
}
// every 메서드가 부울리안 값을 반환하고, 그값을 다시 allEvens 함수가 반환.