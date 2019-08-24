<template>
  <div id="app">
    <button @click="toggleHandler">Toggle Modal</button>
    <modal-jsx :show="show">
      <h1>Modal Title | JSX</h1>
      <p>Hello World | slot</p>
    </modal-jsx>
    <!-- <modal-create-element :show="show">
      <h1>Modal Title | Create Element</h1>
      <p>Hello World | slot</p>
    </modal-create-element> -->
  </div>
</template>

<script>
import ModalCreateElement from './ModalCreateElement.vue'
import ModalJsx from './ModalJsx.vue'

export default {
  name: 'App',
  components: {
    ModalCreateElement,
    ModalJsx
  },
  data: () => ({
    show: false,
  }),
  methods: {
    toggleHandler() {
      this.show = !this.show
    }
  }
}
</script>

<style>
body {
  background: #cecece;
}
.modal {
  position: absolute;
  top: 50%;
  left:50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  width: 250px;
  background: #fff;
  padding: 15px;
}
.modal > .message {
  margin: 0;
  margin-bottom: 10px;
}
</style>