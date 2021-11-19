<template>
  <div>
    <label for="example-datepicker">Choose a date</label>
    <b-form-datepicker id="example-datepicker" v-model="value" class="mb-2"></b-form-datepicker>
    <p>Value: '{{ value }}'</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: ''
      }
    }
  }
</script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import axios from 'axios';
export default {
    name:"FormDateTimepicker",
    data(){
        return {
            Listapacientes:null,
            pagina:1
        }
    },
    components:{
        Header,
        Footer
    },
    methods:{
            editar(id){
                this.$router.push('/Pointer/' + id);
            },
            nuevo(){
                this.$router.push('/nuevo');
            }
    },
    mounted:function(){
        let direccion = "http://solodata.es/pacientes?page=" + this.pagina;
        axios.get(direccion).then( data =>{
            this.Listapacientes = data.data;
        });
    }
}
</script>
<style  scoped>
    .izquierda{
        text-align: left;
    }
</style>

