const signupForm = document.getElementById('signupForm');
const signupMessage = document.getElementById('signupMessage');

signupForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  if(!username || !email || !password || !confirmPassword){
    signupMessage.innerText = 'Error: All fields are mandatory!'
    signupMessage.style.textAlign= 'center'
    signupMessage.style.fontSize = '18px'
    signupMessage.style.color = '#625BF7'
    signupMessage.style.fontWeight = '700'
    return;
  }
  if (password !== confirmPassword) {
    signupMessage.textContent = 'Passwords do not match. Please try again.';
    return;
  }

  // random 16-byte access token
  const accessToken = generateRandomToken();

  const user = {
    username: username,
    email: email,
    accessToken: accessToken,
    password: password
  };

  localStorage.setItem('user', JSON.stringify(user));

  signupMessage.textContent = 'Signup successful!';
  signupMessage.style.color = '#198754'
  setTimeout(() => {
    window.location.href = 'profile.html';
  }, 2000);
});

function generateRandomToken() {
  const tokenLength = 16;
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let randomToken = '';

  for (let i = 0; i < tokenLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomToken += characters[randomIndex];
  }

  return randomToken;
}