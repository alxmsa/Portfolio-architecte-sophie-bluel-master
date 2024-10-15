function getAuthorization() {
  const user = localStorage.getItem('user');

  if (user){
    const token = JSON.parse(user).token;
    return 'Bearer' + token;
  };
  }
  

  function isConnected() {
    const connecting = getAuthorization() ? true : false;
    return connecting;
  }