export const signup = () => {
  return $.ajax({
    method: 'POST', 
    url: `/api/users`
  })
};

export const signin = (credentials) => {
  return $.ajax({
    method: 'POST',
    url: `/api/sessions`, 
    data: credentials
  })
};

export const logout = (userId) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/delete/${userId}`
  })
};
