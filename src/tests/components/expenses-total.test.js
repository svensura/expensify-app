import selectExpensesTotal from '../../selectors/expenses-total.js';
import expenses from '../fixtures/expenses'



test('should return 0 if no expenses', () => {
    const expenseList = []
    expect(selectExpensesTotal(expenseList)).toBe(0);
});

test('should correctly add up a single expenses', () => {
    const expenseList = [expenses[2]]
    expect(selectExpensesTotal(expenseList)).toBe(expenses[2].amount);
});

test('should correctly add up a single expenses', () => {
    const expenseList = [ expenses[1], expenses[2] ]
    expect(selectExpensesTotal(expenseList)).toBe(expenses[1].amount + expenses[2].amount);
});