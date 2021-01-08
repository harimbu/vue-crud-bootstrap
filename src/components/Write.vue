<template>
  <div>
    <Header />
    <div class="container">
      <b-input class="mb-2" v-model="name" type="text" placeholder="이름" required />
      <b-input class="mb-2" v-model="title" type="text" placeholder="제목" required />
      <b-textarea class="mb-2" v-model="text" cols="30" rows="10" placeholder="내용" required></b-textarea>

      <b-button class="m-1" @click="goHome">취소</b-button>
      <b-button class="m-1" type="submit" variant="primary" @click="index !== undefined ? modify() : write()">{{
        index !== undefined ? '수정' : '입력'
      }}</b-button>
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
      data: data,
      index: index,
      name: index !== undefined ? data[index].name : '',
      title: index !== undefined ? data[index].title : '',
      text: index !== undefined ? data[index].text : ''
    }
  },
  methods: {
    goHome() {
      this.$router.push({
        path: '/'
      })
    },
    write() {
      if (this.name === '' || this.title === '' || this.text === '') return
      data.push({
        name: this.name,
        title: this.title,
        text: this.text
      })
      this.goHome()
    },
    modify() {
      console.log('수정수정수정')
      data[this.index].name = this.name
      data[this.index].title = this.title
      data[this.index].text = this.text
      this.goHome()
    }
  }
}
</script>
