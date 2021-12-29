<template>
  <footer>
    <div class="notice_box">
    </div>
    <div class="bottom_box">
      <ul>
        <li><a href="/">공지사항</a></li>
        <li><a href="/">회사소개</a></li>
        <li><a href="/">인재채용</a></li>
        <li><a href="/">제휴제안</a></li>
        <li><a href="/">이용약관</a></li>
        <li><a href="/">개인정보처리방침</a></li>
        <li><a href="/">청소년보호정책</a></li>
        <li><a href="/">정책</a></li>
        <li><a href="/">고객센터</a></li>
        <li><a href="/">&copy; Brand.</a></li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
ul {
  margin: 0;
  padding: 0;
}
footer {
  width: 1080px;
  height: 310px;
  margin: auto;
  padding: 0 8px 0 8px;
  display: flex;
  flex-direction: column;
  font-size: 12px;
}
.notice_box {
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f1f3f6;
}
.area_user_row span {
  flex: 1;
}
.area_user_row ul {
  flex: 6;
}

.area_user_row ul > li {
  display: inline-block;
  margin-left: 8px;
}
.bottom_box {
  flex: 3;
  padding-top: 20px;
  font-size: 14px;
}
.bottom_box ul > li {
  display: inline-block;
  margin-left: 8px;
}
.bottom_box ul > li:last-child {
  font-weight: bold;
}
</style>