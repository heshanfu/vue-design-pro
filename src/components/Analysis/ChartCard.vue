<template>
  <el-card class="chart__card">
    <header class="card__header">
      <div class="card__title__wrapper">
        <h3 class="card__title">{{cardHeader}}</h3>
        <el-tooltip
          class="card__tooltip"
          :content="tooltip"
          placement="top"
        >
          <i class="el-icon-info"></i>
        </el-tooltip>
      </div>
      <p class="card__total">{{cardTotal}}</p>
    </header>

    <slot></slot>

    <card-footer v-if="footerDetail !== ''">
      <span class="footer__title" slot="title">{{footerTitle}}</span>
      <span class="footer__detail" slot="detail">{{footerDetail}}</span>
    </card-footer>
    <slot name="footer"></slot>
  </el-card>
</template>

<script>
import CardFooter from './CardFooter'

export default {
  props: {
    cardHeader: {
      type: String,
      default: 'card header'
    },
    cardTotal: {
      type: String | Number,
      default: 'card main'
    },
    footerTitle: {
      type: String,
      default: ''
    },
    footerDetail: {
      type: String | Number,
      default: ''
    },
    tooltip: {
      type: String,
      default: '默认文字'
    }
  },

  components: {
    CardFooter
  }
}
</script>

<style lang="sass" scoped>
@import '~STYLE/mixin.sass'

/deep/ .el-card__body
  padding: 20px 24px 8px

.card
  &__title
    margin: 0
    color: rgba(0,0,0,.45)
    font-size: 14px
    height: 22px
    line-height: 22px

    &__wrapper
      display: flex
      align-items: center

  &__tooltip
    margin-left: auto

  &__total
    margin-top: 4px
    margin-bottom: 0
    height: 38px
    line-height: 38px
    color: rgba(0,0,0,.85)
    font-size: 30px
    word-break: break-all
    +text-dot

.footer
  &__title, &__detail
    margin-left: 8px
</style>
