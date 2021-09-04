<template>
  <div class="q-pa-md">
    <div class="q-gutter-md" style="max-width: 300px">
      <q-uploader
        url="http://localhost:4444/upload"
        label="Upload files"
        flat
        bordered
        accept=".jpg, image/*"
        @rejected="onRejected"
        style="max-width: 300px"
      />
      <q-uploader
        style="max-width: 300px"
        url="http://localhost:4444/upload"
        label="Imagen del producto"
        accept=".jpg, image/*"
        @rejected="onRejected"
      />
      <q-input v-model="text" label="Standard" />

      <q-input filled v-model="text" label="Filled" />
      <q-input v-model="text" label="Standard" />

      <q-input filled v-model="text" label="Filled" />
      <q-input v-model="text" label="Standard" />

      <q-input filled v-model="text" label="Filled" />

      <q-btn push color="primary" label="Push" />
      <q-btn push color="primary" label="Push" />
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
