<!--Created by 337547038 on 2018/9/7.-->
<!--example
<Switch v-model="checked"></Switch>-->
<template>
    <span @click="_click" :class="{
    [prefixCls+'-switch']:true,
    'switch-checked':value,
    'disabled':disabled}">
        <i :class="`${prefixCls}-switch-inner`">
            <slot name="open" v-if="value"></slot>
            <slot name="close" v-else></slot>
        </i>
    </span>
</template>
<script>
import {prefixCls} from '../prefix'
import emitter from '../mixins/emitter'

export default {
  name: `${prefixCls}Switch`,
  data () {
    return {
      prefixCls: prefixCls
    }
  },
  mixins: [emitter],
  props: {
    value: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    change: Function,
    validateEvent: {
      type: Boolean,
      default: true
    }
  },
  components: {},
  mounted () {
  },
  methods: {
    _click () {
      if (!this.disabled) {
        // this.checked = !this.checked
        const checked = !this.value
        this.$emit('input', checked)
        this.change && this.change(checked)// 回调
        if (this.validateEvent) {
          this.dispatch('formItem', `${prefixCls}.form.change`, [checked, ''])
        }
      }
    }
  },
  computed: {},
  filters: {}
}
</script>
