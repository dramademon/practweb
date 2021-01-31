<template>
  <b-list-group>
    <b-list-group-item>
      <b-avatar button @click="onClick" src="https://i.imgur.com/AAhXjEn.jpg" size="lg"></b-avatar>
      Sandra Iglesias
    </b-list-group-item>
    <b-list-group-item>
      <b-avatar button @click="onClick" src="https://i.imgur.com/1YEYoQ5.jpg" size="lg"></b-avatar>
     Alba Díaz
    </b-list-group-item>
    <b-list-group-item>
      <b-avatar button @click="onClick" src="https://i.imgur.com/1hQLhwe.jpg" size="lg"></b-avatar>
      Staff
    </b-list-group-item>
  </b-list-group>
</template>

<script>
  export default {
    methods: {
      onClick() {
        this.$bvModal.msgBoxOk('Profesional especializado en Arte Digital', {
          title: 'Información',
          size: '5rem',
          buttonSize: '72',
          okVariant: 'success',
          headerClass: 'p-2 border-bottom-0',
          footerClass: 'p-2 border-top-0'
        })
      }
    },
    
  }
</script>