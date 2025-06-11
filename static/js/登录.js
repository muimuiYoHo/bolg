// 切换密码显示/隐藏
  function togglePassword() {
    const passwordInput = document.getElementById('password');  
    const passIcon = document.querySelector('.passicon');
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      passIcon.textContent = '🙈'; // 更改为密码可见
    } else {
      passwordInput.type = 'password';
      passIcon.textContent = '👁️'; // 更改为密码隐藏
    }
  }
  // 验证
  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 防止表单默认提交
    // 获取表单元素
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    // 获取错误提示
    const usernameError = document.getElementById('username-error');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');
    let isValid = true;
    // 用户名
    if (!username.value.trim()) {
      usernameError.style.display = 'block'; // 显示错误信息
      isValid = false;
    } else {
      usernameError.style.display = 'none'; // 隐藏错误信息
    }
    //邮箱
    if (!email.value.trim()) {
      emailError.style.display = 'block'; 
      isValid = false;
    } else {
      emailError.style.display = 'none'; 
    }
    // 密码
    if (!password.value.trim()) {
      passwordError.style.display = 'block';
      isValid = false;
    } else {
      passwordError.style.display = 'none';
    }
    if (isValid) {
      alert('表单已提交');
    }
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    var top = document.getElementById('dl');
    top.style.color = 'black';
  });

