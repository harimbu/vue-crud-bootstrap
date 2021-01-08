<template>
  <div class="container">
    <Header />
    <b-table hover bordered :items="data" :fields="fields" @row-clicked="detail" selectable> </b-table>
    <b-button class="m-1" variant="primary" @click="write">글쓰기</b-button>
  </div>
</template>
<script>
import data from '@/data'
import Header from '@/components/Header'
export default {
  name: 'List',
  components: { Header },
  data() {
    return {
      fields: [
        { key: 'name', label: '이름' },
        { key: 'title', label: '제목' },
        { key: 'text', label: '내용' }
      ],
      data: data
    }
  },
  methods: {
    write() {
      this.$router.push({
        path: '/write'
      })
    },
    detail(item, index, e) {
      e.preventDefault()
      this.$router.push({
        path: `/detail/${index}`
      })
    }
  }
}
</script>
