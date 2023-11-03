<template>
  <main class="columns is-gapless is-multiline" :class="{'night-mode': isNightModeEnabled}"> <!-- Várias colunas, sem espaçamento e multiplas linhas (BULMA)-->
    <div class="column is-one-quarter">
      <SideBar @onNightModeEnabled="changeTheme"/>
    </div>
    <div class="column is-three-quarter content">
      <RouterView></RouterView>
    </div>

  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SideBar from './components/SideBar.vue'

export default defineComponent({
  name: 'App',
  components: {
    SideBar,

  },
  data() {
    return {
      isNightModeEnabled: false
    }
  },
  methods: {
    changeTheme(nightModeEnabled : boolean){
      this.isNightModeEnabled = nightModeEnabled;
    }
  }
});
</script>

<style>
.lista {
  padding: 1.25rem;
}

main {
  --bg-primary: #fff;
  --text-primary: #000;
}
main.night-mode {
  --bg-primary: #2b2d42;
  --text-primary: #fff;
}
.content {
  background-color: var(--bg-primary);
}
</style>

