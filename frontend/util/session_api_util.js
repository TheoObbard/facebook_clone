export const signup = (user) => {
  return $.ajax({
    method: 'POST', 
    url: `/api/users`, 
    data: { user }
  })
};

export const signin = (user) => {
  return $.ajax({
    method: 'POST',
    url: `/api/sessions`, 
    data: { user }
  })
};

export const logout = (userId) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/sessions/${userId}`
  })
};
