export default  (expenses) => {
    const amounts =  expenses.map((item)  => item.amount)
    const getSum = (total, num) => total + num
    return amounts.reduce(getSum, 0)    // 0 is the initial sum up value - necessary!
}