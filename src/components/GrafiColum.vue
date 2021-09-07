<template>
  <div class="">
    <highcharts :options="chartOptionsColum"></highcharts>
  </div>
</template>

<script>
export default {
  name: "GrafiColum",
  props: {
    chartOptionsColum: {
      type: Object,
      required: true,
    },
  },
};
</script>