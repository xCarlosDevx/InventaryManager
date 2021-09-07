<template>
  <q-page class="q-my-md ">
    <div class="flex justify-between">
      <div>
        PRODUCTOS
      </div>
      <div>
        <q-btn dense outlined rounded label="Agregar" color="black"/>
      </div>
    </div>
      <q-separator  class="q-my-sm"/>

    <div class="row justify-center">
      <div v-for="n in 10" :key="n"> 
        <div class="q-ma-sm">
          <q-img
          :ratio="12 / 16"
          spinner-color="primary"
          sppinner-size="82px"
          class="shadow"
          src="prueba.jpg"
          >
          <div class="absolute-bottom text-subtitle1 text-center">
              Producto name
            </div>
            <div class="absolute-top-right text-subtitle1 text-center">
              12/16
            </div>

          </q-img>
        </div>
        <div class="flex justify-between q-mt-sm">
            <q-btn
              class="btn q-mx-xs shadow-2"
              icon="eva-edit-outline"
            >
              <q-tooltip> Edit </q-tooltip>
            </q-btn>
            <q-btn
              class="btn q-mx-xs shadow-2"
              icon="eva-trash-outline"
            >
              <q-tooltip> Delete </q-tooltip>
            </q-btn>
          </div>
      </div>

    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex'
}
</script>
<style scoped>
.shadow{
  -webkit-box-shadow: 0px 0px 30px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 0px 30px 0px rgba(0,0,0,0.75);
box-shadow: 0px 0px 30px 0px rgba(0,0,0,0.75);
}
.btn {
  width: 115px;
  color: #7FC8A9;
  background-color: black;
}
</style>
