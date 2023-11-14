<template>
    <header>
        <h1> <img src="../assets/logo.png" alt="" srcset=""></h1>
        <div class="has-text-centered">
            <button class="button" @click="enableNightMode"> {{ buttonText }} </button>
        </div>
        <nav class="panel mt-5">
            <ul>
                <li>
                    <router-link to="/" class="link">
                        <i class="fas fa-tasks"> Tasks</i>
                        
                    </router-link>
                </li>
                <li>
                    <RouterLink to="/projects" class="link">
                        <i class="fas fa-project-diagram"> Projects</i>
                        
                    </RouterLink>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'SideBar',
    emits: ['onNightModeEnabled'],
    data() {
        return {
            nightModeEnabled: false
        }
    },
    computed: {
        buttonText() {
            if (this.nightModeEnabled) {
                return "Disable night mode"
            }
            return "Enable night mode"

        }
    },
    methods: {
        enableNightMode() {
            this.nightModeEnabled = !this.nightModeEnabled
            this.$emit('onNightModeEnabled', this.nightModeEnabled)
        }
    }
})
</script>

<style scoped>
header {
    padding: 1rem;
    background-color: #0d3b66;
    width: 100%;
    height: 100vh;
    text-align: center;
}

img {
    border-radius: 20px;
    width: 80%;
    height: 80%;
}

.panel li {
    margin: 8px 0;
    text-align: left;
}

.link {
    color: #fff;
    text-size-adjust: ;
}

.link:hover {
    color: #FAF0CA;
}

.link.router-link-actice {
    color: #FAF0CA;
}

@media only screen and (max-width: 768px) {
    header {
        padding: 2.5rem;
        height: auto;
    }
}
</style>