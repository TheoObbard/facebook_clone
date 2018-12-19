export const searchUsers = (data) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users`,
    data: { data } // short hand this when proven to work
  })
};