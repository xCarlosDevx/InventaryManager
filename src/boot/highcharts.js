// import something here
import HighchartsVue from "highcharts-vue";
import Highcharts from "highcharts";
import stockInit from "highcharts/modules/stock";
import mapInit from "highcharts/modules/map";
import exportingInit from "highcharts/modules/exporting";
import exportinDatagInit from "highcharts/modules/export-data";
import annotationsgInit from "highcharts/modules/annotations";
// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/boot-files

export default async ( { app, router, Vue}) => {
  stockInit(Highcharts);
  mapInit(Highcharts);
  exportingInit(Highcharts);
  exportinDatagInit(Highcharts);
  annotationsgInit(Highcharts);
  Vue.use(HighchartsVue);
  // something to do
}
