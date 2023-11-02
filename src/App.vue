<template>
  <main class="columns is-gapless is-multiline"> <!-- Várias colunas, sem espaçamento e multiplas linhas (BULMA)-->
    <div class="column is-one-quarter">
      <SideBar />
    </div>
    <div class="column is-three-quarter">
      <MyForm @onSaveTask="saveTask" />
      <!-- Task List -->
      <div class="list">
        <TaskElement v-for="(task, index) in tasks" :key="index" :task="task" />
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

export default defineComponent({
  name: 'App',
  components: {
    SideBar,
    MyForm,
    TaskElement
  },
  data() {
    return {
      tasks: [] as ITask[],
      taskTitle: String
    }
  },
  methods: {
    saveTask(task: ITask) {
      this.tasks.push(task)
    }
  }
});
</script>

<style scoped>
.lista {
  padding: 1.25rem;
}
</style>

