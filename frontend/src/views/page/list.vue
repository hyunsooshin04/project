<template>
  <h1 class="con">사용자</h1>
  <hr align="center" class="one">
  <section class="article-list table-common con">
    <div>
      <form>
        <button id="search_btn">검색</button>
        <input type="search" id="input1" value="" placeholder="검색어를 입력하세요.">
        <button id="create_btn">생성</button>
        <button id="delete_btn">삭제</button>
      </form>
    </div>
    <table border="1">
      <thead>
      <tr>
        <th>사용자 이름</th>
        <th>사용자 등급</th>
        <th>Email</th>
        <th>사용자 ID</th>
        <th>블랙리스트</th>
        <th>작업</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>내용1</td>
        <td>내용2</td>
        <td>내용3</td>
        <td>내용4</td>
        <td>내용5</td>
        <td>내용6</td>
      </tr>
      <tr>
        <td>내용1</td>
        <td>내용2</td>
        <td>내용3</td>
        <td>내용4</td>
        <td>내용5</td>
        <td>내용6</td>
      </tr>
      <tr>
        <td>내용1</td>
        <td>내용2</td>
        <td>내용3</td>
        <td>내용4</td>
        <td>내용5</td>
        <td>내용6</td>
      </tr>
      <tr>
        <td>내용1</td>
        <td>내용2</td>
        <td>내용3</td>
        <td>내용4</td>
        <td>내용5</td>
        <td>내용6</td>
      </tr>
      <tr>
        <td>내용1</td>
        <td>내용2</td>
        <td>내용3</td>
        <td>내용4</td>
        <td>내용5</td>
        <td>내용6</td>
      </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
export default {
  name: "List"
}
</script>

<style scoped>
html {
  font-family: "Noto Sans KR", sans-serif;
}

/* 노말라이즈 */
body, ul, li, h2, h3, h4, h5, h6 {
  margin: 0;
  padding: 0;
  list-style: none;
}

h1.con {
  text-align: left;
  list-style: none;
}

/* 라이브러리 */
#search_btn {
  width: 50px;
  height: 30px;
}

#input1 {
  width: 300px;
  height: 30px;
}

#create_btn {
  width: 50px;
  height: 30px;
}

#delete_btn {
  width: 50px;
  height: 30px;
}

hr.one {
  width: 1000px;
  margin: 120px auto;
}

.con {
  margin: 120px auto;
}

.line-height-0-ch-only > * {
  line-height: normal;
}

/* 커스텀 */
/* 반응형 레이아웃 */
.con {
  max-width: 1000px;
}

.table-common > table {
  width: 100%;
  border-collapse: collapse;
}

/*.table-common .btn-box {*/
/*  text-align:center;*/
/*}*/

.table-common > table th, .table-common > table td {
  border: 1px solid black;
  padding: 10px;
}

.article-list table {
  border: none;
  border-top: 2px solid lightgray;
  border-bottom: 2px solid lightgray;
}

.article-list > table th, .article-list > table td {
  border: none;
}

.article-list > table td {
  border-bottom: 1px solid lightgray;
}

.article-list > table thead {
  border-bottom: 2px solid lightgray;
  background-color: #F5F5F5;
}
</style>