<template>
  <div>
    <Beverage :isIced="beverageStore.currentTemp === 'Cold'" />

    <ul>
      <li>
        <template v-for="temp in beverageStore.temps" :key="temp">
          <label>
            <input
              type="radio"
              name="temperature"
              :id="`r${temp}`"
              :value="temp"
              v-model="beverageStore.currentTemp"
            />
            {{ temp }}
          </label>
        </template>
      </li>
    </ul>

    <ul>
      <li>
        <template v-for="b in beverageStore.bases" :key="b.id">
          <label>
            <input
              type="radio"
              name="bases"
              :id="`r${b.id}`"
              :value="b"
              v-model="beverageStore.currentBase"
            />
            {{ b.name }}
          </label>
        </template>
      </li>
    </ul>

    <ul>
      <li>
        <template v-for="s in beverageStore.syrups" :key="s.id">
          <label>
            <input
              type="radio"
              name="syrups"
              :id="`r${s.id}`"
              :value="s"
              v-model="beverageStore.currentSyrup"
            />
            {{ s.name }}
          </label>
        </template>
      </li>
    </ul>

    <ul>
      <li>
        <template v-for="c in beverageStore.creamers" :key="c.id">
          <label>
            <input
              type="radio"
              name="creamers"
              :id="`r${c.id}`"
              :value="c"
              v-model="beverageStore.currentCreamer"
            />
            {{ c.name }}
          </label>
        </template>
      </li>
    </ul>

    <input
      type="text"
      placeholder="Beverage Name"
      v-model="beverageStore.currentName"
    />

    <button @click="beverageStore.makeBeverage()">🍺 Make Beverage</button>

    <div id="beverage-container" style="margin-top: 20px">
      <h2>Saved Beverages:</h2>
      <ul>
        <li v-for="bev in beverageStore.beverages" :key="bev.id">
          <label>
            <input
              type="radio"
              name="savedBeverages"
              :value="bev.id"
              @change="beverageStore.showBeverage(bev.id)"
            />
            {{ bev.name }}
          </label>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import Beverage from "./components/Beverage.vue";
import { useBeverageStore } from "./stores/beverageStore";

const beverageStore = useBeverageStore();

onMounted(() => {
  console.log("[App] Mounted - initializing store");
  beverageStore.init();
});
</script>

<style lang="scss">
body,
html {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #6e4228;
  background: linear-gradient(to bottom, #6e4228 0%, #956f5a 100%);
}
ul {
  list-style: none;
}
</style>
