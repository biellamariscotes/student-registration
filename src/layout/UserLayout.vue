<!--
  UserLayout.vue - Common Layout for User Views

  * Integrates with Vue Router to render dynamic views.
  * A main content area rendered dynamically via <router-view>.
  * Includes a reusable header section across user pages.
-->

<template>
  <div class="common-layout">
    <div class="background-containter">
      <img
        src="@/assets/img/vectors/bottom-half-circle.png"
        class="half-circle bottom"
        alt="Half Circle"
      />
      <img
        src="@/assets/img/vectors/sec-half-circle.png"
        class="half-circle second"
        alt="Half Circle"
      />
      <img
        src="@/assets/img/vectors/third-half-circle.png"
        class="half-circle third"
        alt="Half Circle"
      />
      <img src="@/assets/img/vectors/wave.png" class="wave" alt="Wave" />
    </div>

    <el-container>
      <!-- Header -->
      <el-header>
        <Header v-if="route.path === '/register'"></Header>
      </el-header>

      <!-- Main -->
      <el-main>
        <main>
          <router-view v-slot="{ Component }">
            <component :is="Component" :key="route.path" />
          </router-view>
        </main>
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
</script>
