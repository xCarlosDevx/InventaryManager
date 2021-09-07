<template>
  <div class="q-pa-sm ">
    <div class="row">
      <div class="q-gutter-md col-6 header">
        <div class="text-h3">Agregar productos</div>
        <q-input outlined v-model="text" label="Descripcion" />

        <q-input filled v-model="text" label="Precio/C" />

        <q-input outlined v-model="text" label="Precio/V" />

        <q-input filled v-model="text" label="Categoria" />

        <q-input outlined v-model="text" label="Cantidad" />

        <q-input filled v-model="text" label="Distribuidor" />

        <q-btn push color="primary" label="Vaciar" />

        <q-btn push color="primary" label="Enviar" />
      </div>
      <div class="q-pl-md col-6 flex justify-center">
        <div class="text-h6 justify-center">Imagen de Producto</div>
        <q-uploader
          style="max-width: 300px"
          url="http://localhost:4444/upload"
          text-color="dark"
          label="Buscar ruta"
          accept=".jpg,png, image/*"
          color="white"
          @rejected="onRejected"
        />
      </div>
    </div>
  </div>
</template>
<style scoped>
.header {
  position: relative;
  top: 100px;
}
</style>
<script>
export default {
  data() {
    return {
      text: "",
      imagenes: [],
      imagen: null
    };
  },
  methods: {
    onRejected(rejectedEntries) {
      // Notify plugin needs to be installed
      // https://quasar.dev/quasar-plugins/notify#Installation
      this.$q.notify({
        type: "negative",
        message: `${rejectedEntries.length} file(s) did not pass validation constraints`
      });
    }
  }
};
</script>
