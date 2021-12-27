<template>
  <meta charset="UTF-8">
  <div class="header">
    <div  class="wrapper">
      <div class="content">
        <div>
          <h3>
            <label for="id">아이디</label>
          </h3>
          <span class="box_id">
            <input type="text" id="id" class="int" maxlength="20" placeholder="아이디를 입력하세요.">
          </span>
          <span class="error_next_box"></span>
        </div>
        <div>
          <h3>
            <label for="pw">비밀번호</label>
          </h3>
          <span class="box_id">
            <input type="password" id="pw" class="int" maxlength="20" placeholder="비밀번호를 입력하세요.">
          </span>
          <span class="error_next_box"></span>
        </div>
        <div>
          <h3>
            <label for="name">이름</label>
          </h3>
          <span class="box_id">
            <input type="password" id="name" class="int" placeholder="이름을 입력하세요.">
          </span>
          <span class="error_next_box"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignUp"
}
</script>

<style scoped>

</style>