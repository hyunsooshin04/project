<template>
  <h1 class="con">사용자</h1>
  <hr class="one">
  <section class="article-list table-common con">
    <div id="test">
      <form>
        <button id="search_btn">검색</button>
        <input type="search" id="input1" value="" placeholder="검색어를 입력하세요.">
        <button id="create_btn">생성</button>
        <button id="delete_btn">삭제</button>
      </form>
      <div id="create_text">
        <input type="text" id="create_name" placeholder="사용자 이름">
        <input type="text" id="create_group" placeholder="그룹">
        <input type="text" id="create_email" placeholder="Email">
        <input type="text" id="create_id" placeholder="사용자 ID">
        <input type="text" id="create_work" placeholder="직급">
        <input type="text" id="create_sex" placeholder="성별">
        <button id="create_exit">완료</button>
      </div>
    </div>
    <table border="1">
      <thead>
      <colgroup>
        <col width="10%"/>
        <col width="10%"/>
        <col width="30%"/>
        <col width="15%"/>
        <col width="10%"/>
        <col width="10%"/>
      </colgroup>
      <tr>
        <th>사용자 이름</th>
        <th>그룹</th>
        <th>Email</th>
        <th>전화번호</th>
        <th>직급</th>
        <th>성별</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(row, idx) in list" :key="idx">
        <td>{{ row.name }}</td>
        <td>{{ row.group }}</td>
        <td>{{ row.email }}</td>
        <td>{{ row.tell }}</td>
        <td>{{ row.rank }}</td>
        <td>{{ row.gender }}</td>
      </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      body: "",
      id: "",
      list: "",
    }
  },
  mounted() {
    this.getList();
  },
  methods: {
    getCookie(cName) {
      cName = cName + '=';
      var cookieData = document.cookie;
      var start = cookieData.indexOf(cName);
      var cValue = '';
      if (start != -1) {
        start += cName.length;
        var end = cookieData.indexOf(';', start);
        if (end == -1) end = cookieData.length;
        cValue = cookieData.substring(start, end);
      }
      return unescape(cValue);
    },
    getList() {
      this.body = {
        id: this.id
      }
      this.axios.get('http://10.26.143.66:3000/api/list', {params: this.body})
          .then((res) => {
            this.list = res.data.list;
          })
    }
  },
  created() {
    this.id = this.getCookie("id");
  }
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

form {
  position: relative;
  margin-bottom: 15px;
}

h1.con {
  text-align: left;
  list-style: none;
  margin-bottom: 0px;
}

/* 라이브러리 */
#search_btn {
  width: 50px;
  height: 30px;
  margin: 4px;
}

#input1 {
  width: 300px;
  height: 30px;
  margin: 4px;
}

#create_btn {
  width: 50px;
  height: 30px;
  margin: 4px;
}

#delete_btn {
  width: 50px;
  height: 30px;
  margin: 4px;
}

#create_text {
  margin: 15px;
}

#create_name {
  width: 200px;
  height: 30px;
  margin: 4px;
}

#create_group {
  width: 200px;
  height: 30px;
  margin: 4px;
}

#create_email {
  width: 200px;
  height: 30px;
  margin: 4px;
}

#create_id {
  width: 200px;
  height: 30px;
  margin: 4px;
}

#create_work {
  width: 200px;
  height: 30px;
  margin: 4px;
}

#create_sex {
  width: 200px;
  height: 30px;
  margin: 4px;
}

#create_exit {
  width: 50px;
  height: 30px;
  margin: 4px;
}

hr.one {
  width: 80%;
  margin: 50px auto;
}

.con {
  margin: 5% auto 5%;
}

.line-height-0-ch-only > * {
  line-height: normal;
}

/* 커스텀 */
/* 반응형 레이아웃 */
.con {
  max-width: 80%;
}

.table-common > table {
  width: 100%;
  border-collapse: collapse;
}

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