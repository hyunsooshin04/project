<template>
  <h1 class="con">{{ company }}</h1>
  <hr class="one">
  <section class="article-list table-common con">
    <div class="searchWrap">
      <input type="text" class="Search_input" placeholder="검색어를 입력해주세요."/>
      <button class="btn">검색</button>
      <br>
      <h3><span>정렬 기준 : </span>
        <select id="select_box">
          <option value="">그룹</option>
          <option value="">직급</option>
        </select></h3>
      <button class="btn" v-on:click="create_btn">생성</button>
      <button class="btn">삭제</button>
    </div>
    <div id="create_text" v-if="create">
      <input type="text" id="create_name" placeholder="사용자 이름">
      <input type="text" id="create_group" placeholder="그룹">
      <input type="text" id="create_email" placeholder="Email">
      <input type="text" id="create_id" placeholder="사용자 ID">
      <input type="text" id="create_pwd" placeholder="사용자 비밀번호">
      <input type="text" id="create_work" placeholder="직급">
      <input type="text" id="create_sex" placeholder="성별">
      <button class="btn">생성하기</button>
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
      <tr v-if="list.length == 0">
        <td></td>
        <td></td>
        <td>데이터가 없습니다.</td>
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
      company: "",
      create: false,
    }
  },
  mounted() {
    this.getList();
  },
  methods: {
    create_btn() {
      this.create = !this.create
    },
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
            this.company = res.data.company;
          })
    }
  },
  created() {
    this.id = this.getCookie("id");
    if (this.id == "") {
      location.href = "http://localhost:4000/login"
    }
  }
}
</script>

<style scoped>
html {
  font-family: "Noto Sans KR", sans-serif;
}

.searchWrap {
  border: 1px solid #888;
  border-radius: 5px;
  text-align: center;
  padding: 20px 0;
  margin-bottom: 40px;
}

.searchWrap input {
  width: 60%;
  height: 36px;
  border-radius: 3px;
  padding: 0 10px;
  border: 1px solid #888;
}

/* 노말라이즈 */
body, ul, li, h2, h3, h4, h5, h6 {
  margin: 0;
  padding: 0;
  list-style: none;
}

select {
  width: 150px;
  height: 30px;
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

.btn {
  padding-left: 5px;
  padding-right: 5px;
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

#create_pwd {
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

.Search_input {
  margin: 5px
}
</style>