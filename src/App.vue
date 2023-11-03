<template>
  <main class="columns is-gapless is-multiline" :class="{'night-mode': isNightModeEnabled}"> <!-- Várias colunas, sem espaçamento e multiplas linhas (BULMA)-->
    <div class="column is-one-quarter">
      <SideBar @onNightModeEnabled="changeTheme"/>
    </div>
    <div class="column is-three-quarter content">
      <MyForm @onSaveTask="saveTask" />
      <!-- Task List -->
      <div class="list">
        <TaskElement v-for="(task, index) in tasks" :key="index" :task="task" />
        <BoxConfig v-if="isTasksEmpty">
          Task history is empty!
        </BoxConfig>
      </div>
    </div>

  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SideBar from './components/SideBar.vue'
import MyForm from './components/MyForm.vue'
import TaskElement from './components/TaskElement.vue'
import ITask from './interfaces/ITask';
import BoxConfig from './components/BoxConfig.vue';

export default defineComponent({
  name: 'App',
  components: {
    SideBar,
    MyForm,
    TaskElement,
    BoxConfig
  },
  data() {
    return {
      tasks: [] as ITask[],
      isNightModeEnabled: false
    }
  },
  computed:{
    isTasksEmpty () : boolean{
      return this.tasks.length === 0
    }
  },
  methods: {
    saveTask(task: ITask) {
      this.tasks.push(task)
    },
    changeTheme(nightModeEnabled : boolean){
      this.isNightModeEnabled = nightModeEnabled;
    }
  }
});
</script>

<style scoped>
.lista {
  padding: 1.25rem;
}

main {
  --bg-primary: #fff;
  --text-primary: #000;
}
main.night-mode {
  --bg-primary: #2b2d42;
  --text-primary: #ddd;
}
.content {
  background-color: var(--bg-primary);
}
</style>

