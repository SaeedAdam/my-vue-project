// file: src/App.vue
<script setup lang="ts">
import { reactive } from "vue";
// import a reference to our ItemsList component
import ItemsListComponent from "./components/items/ItemsList.component.vue";
import { ItemInterface } from "./models";
// mock some data:
const items: ItemInterface[] = reactive([
  {
    // explicetely using any[] as we'll replace this with an interface in the next chapters
    id: 1,
    name: "Item 1",
    selected: true,
  },
  {
    id: 2,
    name: "Item 2",
    selected: false,

  },
  {
    id: 3,
    name: "Item 3",
    selected: false,

  },
])

const onSelectItem = (id: number) => {
  // retrieve the item from our local data
  const item = items.find(o => o.id === id)
  // sanity check:
  if (!item) {
    console.warn(`onSelectItem: could not find item with id: ${id}`)
    return
  }
  // update the item property
  item.selected = !item.selected
  console.log('onSelectItem', item.id, item.selected)
}

</script>

<template>
  <div class="home">
    <ItemsListComponent :items="items" @selectItem="onSelectItem" />
  </div>
</template>

<style scoped>
.home {
  padding: 20px;
}
</style>
