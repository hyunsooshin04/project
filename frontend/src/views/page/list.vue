<template>
  <header>

  </header>
  <h1 class="con">{{ company }}</h1>
  <hr class="one">
  <section class="article-list table-common con">
    <div class="searchWrap">
      <h2>검색하기</h2>
      <select id="select_box_option" v-model="keyword">
        <option value="all">전체</option>
        <option value="name">이름</option>
        <option value="group">부서</option>
        <option value="email">Email</option>
        <option value="id">ID</option>
        <option value="tell">전화번호</option>
        <option value="rank">직급</option>
        <option value="gender">성별</option>
      </select>
      <input type="text" class="searchWrap_input" placeholder="검색어를 입력해주세요."/>
      <button class="btn">&nbsp;&nbsp;검색&nbsp;&nbsp;</button>
      <button class="btn" v-on:click="create_btn">&nbsp;&nbsp;추가&nbsp;&nbsp;</button>
      <br>
      <h2 v-if="create">직원 추가</h2>
      <p v-if="create">
        <input type="text" v-model="name" class="create_input" placeholder="사용자 이름">
        <input type="text" v-model="group" class="create_input" placeholder="부서">
        <input type="text" v-model="email" class="create_input" placeholder="Email">
        <input type="text" v-model="tell" class="create_input" placeholder="전화번호"><br>
        <input type="text" v-model="user_id" class="create_input" placeholder="사용자 ID">
        <input type="text" v-model="user_pwd" class="create_input" placeholder="사용자 비밀번호">
        <select v-model="rank" class="select_box">
          <option value="">--직급선택--</option>
          <option value="인턴">인턴</option>
          <option value="사원">사원</option>
          <option value="대리">대리</option>
          <option value="과장">과장</option>
          <option value="차장">차장</option>
          <option value="부장">부장</option>
          <option value="이사">이사</option>
          <option value="상무이사">상무이사</option>
          <option value="전무이사">전무이사</option>
          <option value="부사장">부사장</option>
          <option value="사장">사장</option>
        </select>
        <select v-model="gender" class="select_box">
          <option value="">--성별선택--</option>
          <option value="남자">남자</option>
          <option value="여자">여자</option>
        </select><br>
        <button class="btn" v-on:click="create_user">생성하기</button>
      </p>
    </div>
    <div class="container">
      <h3 style="float: left">검색결과: 0개입니다.</h3>
      <div class="sort_option">
        <span>정렬 기준 : </span>
        <select class="select_box">
          <option value="">부서</option>
          <option value="">직급</option>
        </select>
        <button class="btn">삭제</button>
      </div>
    </div>
    <table border="1">
      <thead>
      <colgroup>
        <col width="10%"/>
        <col width="10%"/>
        <col width="15%"/>
        <col width="15%"/>
        <col width="15%"/>
        <col width="10%"/>
        <col width="7%"/>
        <col width="3%"/>
      </colgroup>
      <tr>
        <th>이름</th>
        <th>부서</th>
        <th>Email</th>
        <th>ID</th>
        <th>전화번호</th>
        <th>직급</th>
        <th>성별</th>
        <th><input type="checkbox"></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(row, idx) in list" :key="idx">
        <td>{{ row.name }}</td>
        <td>{{ row.group }}</td>
        <td>{{ row.email }}</td>
        <td>{{ row.id }}</td>
        <td>{{ row.tell }}</td>
        <td>{{ row.rank }}</td>
        <td>{{ row.gender }}</td>
        <td><input type="checkbox"></td>
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
      name: "",
      group: "",
      email: "",
      user_id: "",
      user_pwd: "",
      rank: "",
      gender: "",
      tell: "",
      keyword: "all",
    }
  },
  mounted() {
    this.getList();
  },
  methods: {
    create_btn() {
      this.create = !this.create
    },
    create_user() {
      this.body = {
        id: this.user_id,
        pwd: this.user_pwd,
        name: this.name,
        email: this.email,
        group: this.group,
        rank: this.rank,
        gender: this.gender,
        tell: this.tell,
        company: this.company
      }
      this.axios.get('http://10.26.143.66:3000/api/list/user', {params: this.body})
      .then((res) => {
        if (res.data.ok == "ok") {
          alert("추가 되었습니다.");
          this.getList();
          this.name = "";
          this.group = "";
          this.email = "";
          this.tell = "";
          this.user_id = "";
          this.user_pwd = "";
          this.rank = "";
          this.gender = "";
        }
      })
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

.searchWrap_input {
  width: 60%;
  height: 36px;
  border-radius: 3px;
  padding: 0 10px;
  border: 1px solid #888;
}

.create_input {
  width: 200px;
  height: 30px;
  margin: 4px;
}


/* 노말라이즈 */
body, ul, li, h3, h4, h5, h6 {
  margin: 0;
  padding: 0;
  list-style: none;
}

h2 {
  margin: 10px;
  padding: 0;
  list-style: none;
}

.select_box {
  width: 204px;
  height: 38px;
  margin: 4px;
}

.create_input {
  width: 200px;
  height: 30px;
  margin: 4px;
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
.btn {
  padding-left: 5px;
  padding-right: 5px;
  height: 38px;
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

.sort_option {
  float: right;
}

#select_box_option {
  width: 80px;
  height: 38px;
  margin: 4px;
}

.container {
  width: 100%;
}
</style>