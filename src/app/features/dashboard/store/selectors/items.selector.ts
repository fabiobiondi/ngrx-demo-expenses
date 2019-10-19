
































/*
export const getItems = createSelector(
  getDashboard,
  (state: DashboardState) => state.items
);


export const getTotal = createSelector(
  getItems,
  (state: Item[]) => state.reduce((acc: number, curr: Item) => {
    return acc + +curr.amount;
  }, 0)
);


export const getItemsFiltered = createSelector(
  getItems,
  getFilterConfig,
  (items: Item[], filter: UiFilterState) => {
    return items.filter(
      item =>
        (item.category === filter.category || !filter.category) &&
        item.amount >= filter.minAmount
    );
  }
);
*/
