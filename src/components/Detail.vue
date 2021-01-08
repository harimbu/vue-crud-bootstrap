<template>
  <div>
    <Header />
    <div class="container">
      <b-card :title="data.title" :sub-title="data.name" class="mb-2">
        <b-card-text>{{ data.text }}</b-card-text>

        <b-button @click="goHome" size="sm" variant="secondary" class="mx-2">뒤로</b-button>
        <b-button @click="modify" size="sm" variant="primary" class="mx-2">수정</b-button>
        <b-button @click="remove" size="sm" variant="danger" class="mx-2">삭제</b-button>
      </b-card>
    </div>
  </div>
</template>

<script>
import data from '@/data'
import Header from '@/components/Header'
export default {
  name: 'List',
  components: { Header },
  data() {
    const index = this.$route.params.id
    return {
      index: index,
      data: data[index]
    }
  },
  methods: {
    goHome() {
      this.$router.push({
        path: '/'
      })
    },
    modify() {
      this.$router.push({
        path: `/write/${this.index}`
      })
    },
    remove() {
      data.splice(this.index, 1)
      this.goHome()
    }
  }
}
</script>
