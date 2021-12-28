<template>
  <meta charset="UTF-8">
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap" rel="stylesheet">
  <div class="wrap">
    <div class="login">
      <h2>Log-in</h2>
      <div class="login_id">
        <h4>Id</h4>
        <input type="email" v-model="id" placeholder="Email">
      </div>
      <div class="login_pw">
        <h4>Password</h4>
        <input type="password" v-model="pwd" v-on:keyup.enter="Login" placeholder="Password">
      </div>
      <div class="login_etc">
        <div class="sign_up">
          <a href="">Sign Up</a>
        </div>
        <div class="forgot_pw">
          <a href="">Forgot Password?</a>
        </div>
      </div>
      <div class="submit">
        <button v-on:click="Login">submit</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      id: "",
      pwd: "",
      isLogin: "",
    }
  },
  methods: {
    Login(e) {
      e.preventDefault();
      this.axios.get('http://10.26.143.66:3000/api/login/' + this.id + "/" + this.pwd)
          .then((res) => {
            this.isLogin = res.data.isLogin;
            this.name = res.data.name;
            this.id = res.data.id;
            if (this.isLogin == 'id') alert("ID가 틀렸습니다.");
            if (this.isLogin == 'pwd') alert("Pw가 틀렸습니다.");
            if (this.isLogin == 'true') {
              alert("로그인 성공")
              document.cookie = "id=" + this.id;
            }
          })
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Noto Sans KR", sans-serif;
}

a {
  text-decoration: none;
  color: black;
}

li {
  list-style: none;
}

.wrap {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: skyblue;
}

.login {
  width: 30%;
  height: 600px;
  background: white;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

h2 {
  color: tomato;
  font-size: 2em;
}

.login_id {
  margin-top: 20px;
  width: 80%;
}

.login_id input {
  width: 100%;
  height: 50px;
  border-radius: 30px;
  margin-top: 10px;
  padding: 0px 20px;
  border: 1px solid lightgray;
  outline: none;
}

.login_pw {
  margin-top: 20px;
  width: 80%;
}

.login_pw input {
  width: 100%;
  height: 50px;
  border-radius: 30px;
  margin-top: 10px;
  padding: 0px 20px;
  border: 1px solid lightgray;
  outline: none;
}

.login_etc {
  padding: 10px;
  width: 80%;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
}

.submit {
  margin-top: 50px;
  width: 80%;
}

.submit button {
  width: 100%;
  height: 50px;
  border: 0;
  outline: none;
  border-radius: 40px;
  background: linear-gradient(to left, rgb(255, 77, 46), rgb(255, 155, 47));
  color: white;
  font-size: 1.2em;
  letter-spacing: 2px;
}
</style>