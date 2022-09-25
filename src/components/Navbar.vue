<template>
  <div class="navbar">
    <h1>My Vuex App Todos</h1>
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Total todos: {{ todos.length }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  computed: {
    todos() {
      return this.$store.state.todos
    },
  },
}
</script>

<style>
.navbar {
  padding: 5px;
  text-align: center;
  background: rgb(240, 240, 240);
  color: black;
}

.navbar ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  padding: 0;
}
</style>
