<template>
    <div class="overlay-sity hide">
        <div class="modal-sity">
            <div class="modal-sity__close">
                <img data-close src="../../assets/icons/modal/modal-close.svg" alt="modal-close">
            </div>
            <div class="modal-sity__title">
                Выберите город доставки
            </div>
            <div class="modal-sity__divider"></div>
            <ul class="modal-sity__sity-menu">
                <li v-for="city in stateCities" class="modal-sity__sity-item">{{ city.name }}</li>
            </ul>
        </div>
        <!-- /.modal -->
    </div>
</template>

<script>

export default {
  name: 'ModalCity',
  data: () => ({
    classActive: 'modal-sity__sity-item--active'
  }),
  computed: {
    stateCities() {
      return this.$store.getters['cities/stateCities']
    }
  },
  methods: {
      async getCities() {
        await this.$store.dispatch('cities/getCities')
      }
  },
  mounted() {
      this.getCities()
  }
}

</script>