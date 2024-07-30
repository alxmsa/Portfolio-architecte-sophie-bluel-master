function getAuthorization() {
    const token = JSON.parse(localStorage.getItem('user')).token;
    return 'Bearer' + token;
  }
  

  function isConnected() {
    const connecting = getAuthorization() ? true : false;
    return connecting;
  }