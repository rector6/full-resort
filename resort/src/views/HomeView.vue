<template>
  <div class="app">
    <HelloWorld />
    <MenuArea />
    <CateringArea />
    <OutMenu />
    <ExcellentArea />
    <TeamArea />
    <MapSection />
    <AddressArea />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import MenuArea from "@/components/MenuArea.vue";
import CateringArea from "@/components/CateringArea.vue";
import OutMenu from "@/components/OutMenu.vue";
import ExcellentArea from "@/components/ExcellentArea.vue";
import TeamArea from "@/components/TeamArea.vue";
import AddressArea from "@/components/AddressArea.vue";
import MapSection from "@/components/MapSection.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
    MenuArea,
    CateringArea,
    OutMenu,
    ExcellentArea,
    TeamArea,
    AddressArea,
    MapSection,
  },
};
</script>

<style scoped>
body {
  margin: 0px;
  font-family: "Roboto", sans-serif;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Roboto Slab", sans-serif;
}
.app {
  width: 100vw;
  justify-content: center;
  align-items: center;
}
</style>
