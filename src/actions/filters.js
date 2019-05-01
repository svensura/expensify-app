// EDIT_TEXT_FILTER

export const setTextFilter = (update = '') => ({
    type: 'SET_TEXT_FILTER',
    update
});

// SORT_BY_DATE

export const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

// SORT_BY_AMOUNT

export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

// SET_START_DATE

export const setStartDate = (update = undefined) => ({
    type: 'SET_START_DATE',
    update
});

// SET_END_DATE

export const setEndDate = (update = undefined) => ({
    type: 'SET_END_DATE',
    update
});