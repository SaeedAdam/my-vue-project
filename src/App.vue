// file: src/App.vue
<script setup lang="ts">
// import onMounted from Vue
import { onMounted, watchEffect } from 'vue'
// import our ItemsView component
import ItemsView from '@/views/Items.view.vue'
// import a reference to the DebugFormatters component
import DebugFormatters from '@/components/shared/DebugFormatters.component.vue'
// import a reference to useLocalization
import { useLocalization } from '@/localization'

import PrimitivesView from '@/views/Primitives.view.vue'

// get what we need from useLocalization:
const { t, locales, currentLocale, isLoadingLocale, changeLocale } = useLocalization()

// an event handler from changing the locale from our locale-selector
const onLocaleClick = (lcid: string) => {
  console.log('onLocaleClick', lcid)
  changeLocale(lcid)
}
// invoke changeLocale also when component is mounted
onMounted(() => {
  changeLocale(currentLocale.value)
})


watchEffect(() => {
  document.dir = t('text.direction');

  document.documentElement.lang = currentLocale.value;
})
</script>

<template>
  <div class="home m-2 p-2 border-2 border-blue-300 rounded-lg">
    <div class="locale-selector">
      <div v-if="isLoadingLocale">Loading locale data...</div>
      <div v-for="item in locales">
        <label :key="item.key" :for="`radio-locale-${item.key}`" class="cursor-pointer" @click="onLocaleClick(item.key)">
          <input type="radio" :id="`radio-locale-${item.key}`" :radioGroup="currentLocale" name="locale" :value="item.key"
            :checked="currentLocale === item.key" />
          {{ t(`locale.selector.${item.key}`) }}
        </label>
      </div>
    </div>
    <h3>{{ t('home.welcome') }} [{{ currentLocale }}]</h3>
    <ItemsView />
    <DebugFormatters :show="false" />
    <PrimitivesView />
  </div>
</template>
