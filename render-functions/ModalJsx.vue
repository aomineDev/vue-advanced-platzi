<script>
export default {
  name: 'ModalJsx',
  props: {
    show: {
      type: Boolean,
      default: false,
    }
  },
  render() {
    return this.show && <div class="modal">
      <div class="content">
        {this.$slots.default}
      </div>
      <button onClick={this.handleClickCancel} class="btn">Cancel</button>
      <button onClick={this.handleClickOk} class="btn">Ok</button>
    </div>
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