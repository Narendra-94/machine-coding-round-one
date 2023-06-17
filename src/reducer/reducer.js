export const initialState = {
  product: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESSFULL_BOOK_DATA": {
      return { ...state, product: action.payload };
    }

    case "UPDATE_BOOK_CATEGORY": {
      const { bookId, newCategory } = action.payload;
      const updatedBooks = state.product.map((book) => {
        if (book.id === bookId) {
          return { ...book, category: newCategory };
        }
        return book;
      });
      return { ...state, product: updatedBooks };
    }
    default:
      return state;
  }
};
