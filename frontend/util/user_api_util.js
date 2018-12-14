export const fetchUser = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${id}`
  })
};

export const updateCoverPhoto = (id, formData) => {
  return $.ajax({
    url: `/api/users/${id}`, 
    method: 'PATCH', 
    data: formData, 
    contentType: false, 
    processData: false
  });
}

export const updateProfilePicture = (id, formData) => {
  return $.ajax({
    url: `/api/users/${id}`,
    method: 'PATCH',
    data: formData,
    contentType: false,
    processData: false
  });
}