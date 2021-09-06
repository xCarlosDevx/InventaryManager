<template>
  <div class="q-pa-md">
    <div class="row q-col-gutter-none">
      <div class="col-6 q-gutter-sm" >
      <div class="q-gutter-sm justify-end"  style="max-width: 350px">
        <h3 class="text-capitalize">agregar productos</h3>
        <q-input outlined v-model="text" label="Descripcion" />

        <q-input filled v-model="text" label="Precio/C" />

        <q-input outlined v-model="text" label="Precio/V" />

        <q-input filled v-model="text" label="Categoria" />

        <q-input outlined v-model="text" label="Cantidad" />

        <q-input filled v-model="text" label="Distribuidor" />

        <q-btn push color="primary" label="Vaciar" />

        <q-btn push color="primary" label="Enviar" />
        </div>
      </div>
      <div class="col-6">
        <p>Imagen del producto</p>
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
