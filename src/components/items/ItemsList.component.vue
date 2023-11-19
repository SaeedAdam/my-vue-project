// file: src/components/items/ItemsList.component.vue
<script setup lang="ts">
import { ItemInterface } from '../../models';
import ItemComponent from './children/Item.component.vue';
import Loader from './shared/Loader.component.vue';

// expose a property called items with a default value of a blank array
defineProps<{
    items: ItemInterface[],
    loading: boolean
}>()
// explicetely using any[] as we'll replace this with an interface in the next chapter

// define emits for custom events
const emits = defineEmits<{ (e: 'selectItem', id: number): any }>()

const onSelectItem = (id: number) => {
    // emit a custom event
    emits('selectItem', id)
}

</script>

<template>
    <div>
        <h3>Items:</h3>
        <Loader v-show="loading" />
        <ul v-show="!loading">
            <ItemComponent v-for="item in items" :key="item.id" :model="item" @selectItem="onSelectItem" />
        </ul>
    </div>
</template>

<style>
ul {
    padding-inline-start: 0;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 0px;
}
</style>