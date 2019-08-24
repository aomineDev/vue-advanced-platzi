<script>
export default {
  name: 'ModalCreateElement',
  props: {
    show: {
      type: Boolean,
      default: false,
    }
  },
  render(createElement) {
    return this.show ? createElement('div', {
      class: 'modal',
    }, [
      createElement('div', {
        class: 'content',
      }, this.$slots.default),
      createElement('button', {
        class: 'btn',
        on: {
          click: this.handleClickCancel,
        },
      }, 'Cancel'),
      createElement('button', {
        class: 'btn',
        on: {
          click: this.handleClickOk,
        },
      }, 'Ok')
    ]) : null
  },
  methods: {
    handleClickCancel() {
      // eslint-disable-next-line
      console.log('Click on Cancel')
    },
    handleClickOk() {
      // eslint-disable-next-line
      console.log('Click on Ok')
    }
  }
}
</script>