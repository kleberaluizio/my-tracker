<template>
  <main class="columns is-gapless is-multiline"> <!-- Várias colunas, sem espaçamento e multiplas linhas (BULMA)-->
    <div class="column is-one-quarter">
      <SideBar />
    </div>
    <div class="column is-three-quarter">
      <MyForm />
      <!-- Task List -->
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SideBar from './components/SideBar.vue'
import MyForm   from './components/MyForm.vue'

export default defineComponent({
  name: 'App',
  components:{
    SideBar,
    MyForm
  }
});
</script>

<style>

</style>

