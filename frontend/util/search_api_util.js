export const searchUsers = (data) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users`,
    data: { data }
  })
};