<template>
  <div class="">
    <highcharts :options="chartOptions"></highcharts>
  </div>
</template>

<script>
export default {
  name: "Grafic",
  props: {
    chartOptions: {
      type: Object,
      required: true,
    },
  },
};
</script>

