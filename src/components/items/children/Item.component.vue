<script lang="ts">
// import reference to Vue's defineComponent
import { defineComponent, computed, PropType } from 'vue'
// import a reference to our ItemInterace
import type { ItemInterface } from '../../../models'
// create our component with defineComponent 
export default defineComponent({
    name: 'ItemComponent',
    emits: ['selectItem'],
    props: {
        // add testid prop here as well
        testid: {
            default: 'not-set'
        },
        model: {
            type: Object as PropType<ItemInterface>,
            default: () => {
                return {}
            }
        }
    },
    setup(props, { emit }) {
        // a computed property to return a different css class based on the selected value
        const cssClass = computed(() => {
            let css = 'item'
            if (props.model.selected) {
                css += ' selected'
            }
            return css.trim()
        })

        // on click event handler that will emit a @select custom event
        const handleClick = () => {
            emit('selectItem', props.model.id)
        }

        return {
            cssClass,
            handleClick
        }
    }
})
</script>

<template>
    <li :data-testid="testid" :class="cssClass" @click="handleClick">
        <div class="selected-indicator">*</div>
        <div class="name">{{ model.name }} [{{ model.selected }}]</div>
    </li>
</template>

<style>
li.item {
    padding: 5px;
    outline: solid 1px #ccc;
    border-radius: 5px;
    margin-bottom: 5px;
    box-shadow: 0 0 3px #bbb;
    display: flex;
    align-items: center;
    height: 30px;
    cursor: pointer;
    transition: background-color 0.75s ease;
    background-color: #f2f2f2;
}

li.item .name {
    margin-left: 6px;
}

li.item .selected-indicator {
    font-size: 2em;
    line-height: 0.5em;
    margin: 10px 8px 0 8px;
    color: lightgray;
}

li.item.selected .selected-indicator {
    color: skyblue;
}

li.item:hover {
    background-color: rgb(120, 201, 185);
}
</style>