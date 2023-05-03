<template>
  <div>
    <h1>Latest News</h1>
    <ul>
      <li v-for="post in allPosts" :key="post.id">
        <h2>{{ post.title }}</h2>
        <p>{{ post.description }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['allPosts'])
  },
  mounted() {
    this.$store.dispatch('fetchPosts')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
