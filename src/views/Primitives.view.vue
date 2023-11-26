<script setup lang="ts">
import { reactive } from "vue";
// import a reference to the ElText primitive
import {
  ElText,
  ElButton,
  ElToggle,
  ElModalVue
} from "@/components/primitives";

const state = reactive({
  toggles: [
    {
      id: "toggle-a",
      checked: true,
    },
    {
      id: "toggle-b",
      checked: false,
    },
    {
      id: "toggle-c",
      checked: false,
    },
  ],
  isModalVisible: false,
});

const onOpenDialogClicked = () => {
  state.isModalVisible = true;
};

const onButtonClicked = async (id: string) => {
  console.log("PrimitivesView: onButtonClicked", id);
};

const onToggleClicked = (id: string) => {
  console.log(`You clicked the "${id}" toggle`);

  const stateItem = state.toggles.find((item) => item.id === id);
  if (stateItem) {
    // toggle the value of the ElToggle that was clicked
    stateItem.checked = !stateItem.checked;
  }
};
</script>

<template>
  <div class="about">
    <ElText tag="h1" addCss="text-gray-500" text="Primitives" />
    <ElText tag="h2" addCss="text-gray-500" text="ElText examples:" />
    <div class="p-6 border">
      <ElText tag="h2" addCss="text-red-500" text="Here ElText will render a <h2> element" />
      <ElText tag="p" addCss="text-red-700" text="Here ElText will render a <p> element" />
    </div>

    <ElText tag="h2" addCss="text-gray-500" text="ElButton examples:" />
    <div class="p-6 border space-x-2">
      <ElButton id="my-button-1" :disabled="false" label="This is a button" @clicked="onButtonClicked" />
      <ElButton id="my-button-2" :disabled="true" label="This is a disabled button" @clicked="onButtonClicked" />
      <ElButton id="open-modal-1" :disabled="false" label="Open modal 1" @clicked="onOpenDialogClicked" />

      <ElButton id="open-modal-2" :disabled="false" label="Open modal 2" @clicked="onOpenDialogClicked" />
    </div>

    <ElText tag="h2" addCss="text-gray-500" text="ElModal examples:" />
    <div class="p-6 border">
      <ElModalVue testid="modal-1" title="Modal 1" message="This is a modal dialog" cancelLabel="Cancel"
        confirmLabel="Confirm" primaryButtonType="primary" icon="" iconAddCss="text-red-500"
        :is-visible="state.isModalVisible" @close="state.isModalVisible = false"
        @confirm="state.isModalVisible = false" />
      <ElModalVue testid="modal-2" title="Modal 2" message="This is a modal dialog" cancelLabel="Cancel"
        confirmLabel="Confirm" primaryButtonType="primary" icon="" iconAddCss="text-red-500"
        :is-visible="state.isModalVisible" @close="state.isModalVisible = false"
        @confirm="state.isModalVisible = false" />
    </div>

    <ElText tag="h2" addCss="text-gray-500" text="ElToggle examples:" />
    <div class="p-6 border">
      <ElToggle id="toggle-a" :checked="state.toggles.find((item) => item.id === 'toggle-b')?.checked || false"
        :disabled="false" @clicked="onToggleClicked" />
      <ElToggle id="toggle-b" :checked="state.toggles.find((item) => item.id === 'toggle-b')?.checked || false"
        :disabled="true" addCss="ml-2" @clicked="onToggleClicked" />
      <ElToggle id="toggle-c" :checked="state.toggles.find((item) => item.id === 'toggle-c')?.checked || false"
        :disabled="false" addCss="ml-2" @clicked="onToggleClicked" />
    </div>
  </div>
</template>
