<template>
  <div>
    <Header />
    <div class="container">
      <b-table hover :items="data" :fields="fields" @row-clicked="detail" :per-page="perPage" :current-page="currentPage"> </b-table>
      <div class="row">
        <div class="col">
          <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" aria-controls="my-table"></b-pagination>
        </div>
        <div class="col" align="right">
          <b-button size="sm" variant="primary" @click="write">글쓰기</b-button>
        </div>
      </div>
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
    return {
      rows: data.length,
      perPage: 13,
      currentPage: 1,
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
