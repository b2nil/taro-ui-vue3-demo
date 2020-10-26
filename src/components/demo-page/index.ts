import { h, defineComponent, computed, mergeProps, PropType, onMounted, ref } from "vue"
import { View, Text } from "@tarojs/components"
import { AtFab } from "taro-ui-vue3"
import Taro from "@tarojs/taro"
import "./index.scss"

const Page = defineComponent({
  name: "Page",

  props: {
    headerTitle: {
      type: String,
      default: '标题',
      required: true
    }
  },

  setup(props, { slots, attrs }) {
    const bottomHeight = ref(0)

    const rootClasses = computed(() => ({
      'page': true,
      [`${attrs.class}`]: Boolean(attrs.class)
    }))

    const rootStyle = computed(() => {
      const deviceWidth = Taro.getSystemInfoSync().windowWidth
      return Taro.getEnv() === Taro.ENV_TYPE.WEB
        ? {
          width: deviceWidth >= 1024 ? '75%' : '100%',
          margin: 'auto'
        }
        : null
    })

    onMounted(() => {
      Taro.createSelectorQuery().select('#home').boundingClientRect(res => {
        bottomHeight.value = res.height + 30
      }).exec()
    })

    return () => (
      h(View, {
        class: rootClasses.value,
        style: rootStyle.value
      }, {
        default: () => [
          h(View, {
            class: 'doc-header'
          }, {
            default: () => [
              h(View, {
                class: 'doc-header__title'
              }, { default: () => props.headerTitle })
            ]
          }),

          h(View, {
            class: 'doc-body',
            style: attrs.style
          }, { default: () => slots.default && slots.default() }),

          slots.extra && slots.extra(),

          h(NavBtn, {
            to: 'back',
            btnIcon: 'chevron-left',
            style: { bottom: `${bottomHeight.value}px` }
          }),

          h(NavBtn, { id: 'home', to: 'home' })
        ]
      })
    )
  }
})

const NavBtn = defineComponent({
  name: 'NavBtn',
  props: {
    to: { type: String as PropType<'home' | 'back'>, default: 'home' },
    size: { type: String as PropType<'small' | 'normal'>, default: 'small' },
    btnIcon: { type: String, default: 'home' },
    btnText: String
  },
  setup(props, { attrs }) {

    function handleClick() {
      switch (props.to) {
        case 'home':
          Taro.navigateTo({ url: '/pages/index/index' })
          break
        case 'back':
          Taro.navigateBack({ delta: 1 })
          break
      }
    }

    return () => (
      h(View, {
        class: 'btn-fab',
        style: attrs.style
      }, {
        default: () => [
          h(AtFab, {
            size: props.size,
            onClick: handleClick
          }, {
            default: () => [
              props.btnText && h(Text, null, { default: () => props.btnText }),
              props.btnIcon && !props.btnText && h(Text, {
                class: `at-fab__icon at-icon at-icon-${props.btnIcon}`
              }),
            ]
          })
        ]
      })
    )
  }
})


const Panel = defineComponent({
  name: "Panel",

  props: {
    title: {
      type: String,
      default: '',
      required: true
    },
    noPadding: Boolean
  },

  setup(props, { slots, attrs }) {
    const contentClass = computed(() => ({
      'panel__content': true,
      'no-padding': props.noPadding
    }))

    return () => h(View, {
      class: 'panel'
    }, {
      default: () => [
        props.title && h(View, {
          class: 'panel__title'
        }, { default: () => props.title }),

        slots.controller && slots.controller(),

        h(View, {
          class: contentClass.value,
          style: attrs.style
        }, { default: () => slots.default && slots.default() })
      ]
    })
  }
})

const ExampleItem = defineComponent({
  name: "ExampleItem",

  setup(props, { slots, attrs }) {
    return () => h(View, mergeProps(attrs, {
      class: 'example-item'
    }), { default: () => slots.default && slots.default() })
  }
})

export {
  Page,
  Panel,
  NavBtn,
  ExampleItem
}