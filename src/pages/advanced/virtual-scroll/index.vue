<template>
  <page
    class="virtuall-scroll-page"
    header-title="Calendar 日历"
  >
    <panel title="一般案例">
      <template #controller>
        <example-item>
          <view class="example-item__desc">Benched: {{ benched }}</view>
          <at-input-number
            :step="1"
            :min="0"
            :max="10"
            :value="benched"
            @change="handleBenchChange"
          />
          <view class="example-item__desc">Total Items: {{ itemsLength }}</view>
          <at-slider
            :step="10"
            :value="itemsLength"
            :min="7000"
            :max="15000"
            show-value
          />
          <view class="example-item__desc">Height: {{ height }}</view>
          <at-slider
            :step="1"
            :value="height"
            :min="200"
            :max="500"
            show-value
          />
          <view class="example-item__desc">Item Height: {{ itemHeight }}</view>
          <at-slider
            :step="1"
            :value="itemHeight"
            :key="50"
            :keymax="100"
            show-value
          />
        </example-item>
      </template>

      <template #default>
        <example-item>
          <at-virtual-scroll
            :bench="benched"
            :items="items"
            :height="height"
            :item-height="itemHeight"
          >
            <template v-slot="{ item }">
              <at-list-item
                title="标题文字"
                :note="`描述信息 - ${item}`"
                extraText="详细信息"
                arrow="right"
                thumb="http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png"
              />
              <at-divider />
            </template>
          </at-virtual-scroll>
        </example-item>
      </template>
    </panel>
  </page>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue"
import { AtDivider } from "taro-ui-vue3"
import { AtSlider } from "taro-ui-vue3"
import { AtInputNumber } from "taro-ui-vue3"
import { AtListItem } from "taro-ui-vue3"
import { AtVirtualScroll } from "taro-ui-vue3"
import { Page, Panel, ExampleItem } from '@/components/demo-page'

export default defineComponent({
  name: "VirtualScrollDemo",

  components: {
    AtSlider,
    AtDivider,
    AtInputNumber,
    AtVirtualScroll,
    AtListItem,
    Page,
    Panel,
    ExampleItem
  },

  setup() {

    const benched = ref(0)
    const height = ref(300)
    const itemHeight = ref(64)
    const itemsLength = ref(7000)

    const items = computed(() => {
      return Array.from({
        length: itemsLength.value
      }, (_, v) => v + 1)
    })

    function handleBenchChange(value) {
      benched.value = value
    }

    return {
      items,
      itemsLength,
      benched,
      height,
      itemHeight,
      handleBenchChange
    }
  }
})
</script>