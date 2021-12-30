<template>
  <Header/>
  <h1 class="con">{{ company }}</h1>
  <hr class="one">
  <section class="article-list table-common con">
    <div class="searchWrap">
      <h2>검색하기</h2>
      <select id="select_box_option" v-model="option">
        <option value="all">전체</option>
        <option value="name">이름</option>
        <option value="department">부서</option>
        <option value="email">Email</option>
        <option value="id">ID</option>
        <option value="tell">전화번호</option>
        <option value="position">직급</option>
        <option value="gender">성별</option>
      </select>
      <input type="text" v-model="keyword" class="searchWrap_input" placeholder="검색어를 입력해주세요."
             v-on:keyup.enter="getList"/>
      <button class="btn" v-on:click="getList">&nbsp;&nbsp;검색&nbsp;&nbsp;</button>
      <button class="btn" v-on:click="create_btn">&nbsp;&nbsp;추가&nbsp;&nbsp;</button>
      <br>
      <h2 v-if="create">직원 추가</h2>
      <p v-if="create">
        <input type="text" v-model="name" class="create_input" placeholder="사용자 이름">
        <input type="text" v-model="department" class="create_input" placeholder="부서">
        <input type="text" v-model="email" class="create_input" placeholder="Email">
        <input type="text" v-model="tell" class="create_input" placeholder="전화번호"><br>
        <input type="text" v-model="user_id" class="create_input" placeholder="사용자 ID">
        <input type="text" v-model="user_pwd" class="create_input" placeholder="사용자 비밀번호">
        <select v-model="position" class="select_box">
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
      <h3 style="float: left">검색결과: {{ tmp.length }}개입니다.</h3>
      <div class="sort_option">
        <span>정렬 기준 : </span>
        <select class="select_box" v-model="sort">
          <option value="department">부서</option>
          <option value="position">직급</option>
          <option value="name">이름</option>
        </select>
        <button class="btn" v-on:click="del">삭제</button>
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
        <th><input type="checkbox" v-model="all_check" v-on:click="all_ck"></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(row, idx) in list" :key="idx">
        <td>{{ row.name }}</td>
        <td>{{ row.department }}</td>
        <td>{{ row.email }}</td>
        <td>{{ row.id }}</td>
        <td>{{ row.tell }}</td>
        <td>{{ row.position }}</td>
        <td>{{ row.gender }}</td>
        <td><input type="checkbox" v-bind:id="idx" v-on:click="all_ck_checker"></td>
      </tr>
      <tr v-if="list.length == 0">
        <td></td>
        <td></td>
        <td>데이터가 없습니다.</td>
      </tr>
      </tbody>
    </table>
    <div id="btn_group">
      <button id="first_btn" v-on:click="pagination(0)">&lt;&lt;</button>
      <button v-on:click="pagination( '' + row / 10)" v-for="(row, idx) in page_array" :key="idx">{{
          row / 10 + 1
        }}
      </button>
      <button id="last_btn" v-on:click="pagination('' + page_array.length - 1)">&gt;&gt;</button>
    </div>
  </section>
  <Footer/>
</template>

<script>
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default {
  name: "List",
  components: {
    Header,
    Footer
  },
  data() {
    return {
      body: "",
      id: "",
      list: "",
      company: "",
      create: false,
      name: "",
      department: "",
      email: "",
      user_id: "",
      user_pwd: "",
      position: "",
      gender: "",
      tell: "",
      keyword: "",
      option: "all",
      all_check: false,
      arr: [],
      ck: true,
      sort: "department",
      start_page: 0,
      page_count: 0,
      page_array: [],
      end_page: 0,
      tmp: []
    }
  },
  mounted() {
    this.getList();
  },
  watch: {
    sort() {
      this.getList();
    }
  },
  methods: {
    del() {
      this.arr = [];
      for (let i = 0; i < this.list.length; i++) {
        if (document.getElementById("" + i).checked == true) {
          this.arr.push(this.list[i].id);
        }
      }
      this.body = {
        arr: this.arr,
        company: this.company
      };
      this.axios.get('http://10.26.143.66:3000/api/list/delete', {params: this.body})
          .then((res) => {
            if (res.data.ok == "ok") {
              alert("삭제되었습니다.");
              this.getList();
              for (let i = 0; i < this.list.length; i++) {
                document.getElementById("" + i).checked = false;
              }
            }
          })
    },
    all_ck_checker() {
      this.ck = true;
      for (let i = 0; i < this.list.length; i++) {
        if (document.getElementById("" + i).checked == false) {
          this.ck = false;
        }
      }
      if (this.ck) {
        this.all_check = true;
      } else {
        this.all_check = false;
      }
    },
    create_btn() {
      this.create = !this.create
    },
    create_user() {
      this.body = {
        id: this.user_id,
        pwd: this.user_pwd,
        name: this.name,
        email: this.email,
        department: this.department,
        position: this.position,
        gender: this.gender,
        tell: this.tell,
        company: this.company,
      }
      if (this.name == "") {
        alert("사용자 이름을 입력해주세요.")
      } else if (this.department == "") {
        alert("부서를 입력해주세요.")
      } else if (this.email == "") {
        alert("이메일을 입력해주세요.")
      } else if (this.tell == "") {
        alert("전화번호를 입력해주세요.")
      } else if (this.user_id == "") {
        alert("사용자ID를 입력해주세요")
      } else if (this.user_pwd == "") {
        alert("사용자 비밀번호를 입력해주세요.")
      } else if (this.position == "") {
        alert("직급을 선택해주세요.")
      } else if (this.gender == "") {
        alert("성별을 선택해주세요.")
      } else {
        this.axios.get('http://10.26.143.66:3000/api/list/user', {params: this.body})
            .then((res) => {
              if (res.data.ok == "ok") {
                alert("추가 되었습니다.");
                this.getList();
                this.name = "";
                this.department = "";
                this.email = "";
                this.tell = "";
                this.user_id = "";
                this.user_pwd = "";
                this.position = "";
                this.gender = "";
              }
            })
      }
    },
    all_ck() {
      if (this.all_check == false) {
        for (let i = 0; i < this.list.length; i++) {
          document.getElementById("" + i).checked = true;
        }
      } else {
        for (let i = 0; i < this.list.length; i++) {
          document.getElementById("" + i).checked = false;
        }
      }
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
    }
    ,
    getList() {
      this.body = {
        id: this.id,
        keyword: this.keyword,
        option: this.option,
        sort: this.sort
      }
      this.axios.get('http://10.26.143.66:3000/api/list', {params: this.body})
          .then((res) => {
            this.list = [];
            this.tmp = res.data.list;
            this.company = res.data.company;
            this.page_count = res.data.list.length;
            this.page_count = parseInt(this.page_count / 10) + (this.page_count % 10 != 0 ? 1 : 0);
            this.page_array = [];
            for (let i = 0; i < this.page_count; i++) {
              this.page_array.push(i * 10);
            }

            if (this.page_array.length - 1 == this.start_page) {
              this.end_page = (this.start_page * 10) + (this.tmp.length % 10 == 0 ? 10 : this.tmp.length % 10);
            } else this.end_page = this.start_page * 10 + 10;

            for (let i = this.start_page * 10; i < this.end_page; i++) {
              this.list.push(this.tmp[i]);
            }
            for (let i = 0; i < this.list.length; i++) {
              document.getElementById("" + i).checked = false;
            }
            this.all_check = false;
          })
    },
    pagination(n) {
      this.start_page = n;
      this.getList();
    }
  },
  created() {
    this.id = this.getCookie("id");
    if (this.id == "") {
      location.href = "http://localhost:4000/login"
    }
  },
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

#first_btn {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}

#last_btn {
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}

#btn_group button {
  border: 1px solid teal;
  background-color: teal;
  color: white;
  padding: 5px;
  height: 38px;
  margin-top: 10px;
}
</style>