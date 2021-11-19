<template>
    <div>
        <Header/>
     
        <!--
         <div>
            <b-button v-b-toggle.collapse-3 class="m-1 btnLogInAdmin">Log in Admin</b-button>
            <b-collapse visible id="collapse-3">
             <b-card> <WorkingTime /></b-card>
            </b-collapse>
         </div> 
         Aquí puedes escribir tu comentario -->
            <div class="container gauche">

                <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Hours worked </th>
                        <th scope="col">Mail</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="paciente in Listapacientes" :key="paciente.PacienteId" v-on:click="edit(paciente.PacienteId)">
                        <th scope="row">{{ paciente.PacienteId}}</th>
                        <td>{{ paciente.Nombre }}</td>
                        <td>{{ paciente.DNI }}</td>
                        <td>{{ paciente.Telefono }}</td>
                        <td>{{ paciente.Correo }}</td>
                    </tr>
            
                </tbody>
                </table>
                 <WorkingTime />
 
   </div>
        <Charts />
        <Footer />
        
    </div>
    
</template>
<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
//import AutentificationAdmin from '@/components/AutentificationAdmin.vue';
import WorkingTime from '@/components/WorkingTime.vue';
import Charts from '@/components/Charts.vue';
import axios from 'axios';
export default {
    
    name:"Dashboard",
    data(){
        return {
            Listapacientes:null,
            pagina:1,
            isVisibleAdminAuth: false
        }
    },
    components:{
        Header,
        Charts,
        //AutentificationAdmin,
        WorkingTime,
        Footer,
    },
    methods:{
            edit(id){
                this.$router.push('/EditUser/' + id);
            },
            New (){
               //login
            }
    },

    mounted:function(){
        let user = "http://solodata.es/pacientes?page=" + this.pagina;
        axios.get(user).then( data =>{
            this.Listapacientes = data.data;
        });
    }
}
</script>
<style  scoped>

  input[type=button], .btnLogInAdmin, input[type=reset]  {
  background-color: #56baed;
  border: none;
  color: white;
  padding: 15px 20px;
  text-align: center;
  text-decoration: none;
  display: block;
  flex-direction: row-reverse;
  text-transform: uppercase;
  font-size: 13px;
  -webkit-box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);
  box-shadow: 0 10px 30px 0 rgba(111, 114, 116, 0.4);
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
  margin: 10px 20px 15px 20px;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

input[type=button]:hover, .btnLogInAdmin:hover, input[type=reset]:hover  {
  background-color: #39ace7;
}

input[type=button]:active, .btnLogInAdmin:active, input[type=reset]:active  {
  -moz-transform: scale(0.95);
  -webkit-transform: scale(0.95);
  -o-transform: scale(0.95);
  -ms-transform: scale(0.95);
  transform: scale(0.95);
}
   
</style>