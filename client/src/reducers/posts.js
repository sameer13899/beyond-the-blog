const actionResponse = (posts = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return action.payload;

    case 'CREATE':
      return [...posts, action.payload];

    case 'UPDATE':
    case 'LIKE':
      return posts.map(post =>
        post._id === action.payload._id ? action.payload : post
      );

    case 'DELETE': {
      const ans = posts.filter(post => post._id !== action.payload);
      return ans;
    }

    default:
      return posts;
  }
};
export default actionResponse;
