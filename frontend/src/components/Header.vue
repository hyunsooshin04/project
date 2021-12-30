<template>
  <header>
    <h1>Brand</h1>
    <nav>
      <span>Menu1</span>
      <span>Menu2</span>
      <span>Menu3</span>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
header {
  height: 75px;
  padding: 1rem;
  color: white;
  background: #2a2b38;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h1, p {
  margin: 0;
}
* {
  box-sizing: border-box;
}
</style>