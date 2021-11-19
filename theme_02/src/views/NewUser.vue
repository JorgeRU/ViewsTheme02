<template>
    <div>
        <Header />
            <div class="container">
            
                <form action="" class="form-horizontal">
                    <div class="form-group left">
                       <label for="" class="control-label col-sm-2">Name</label>
                       <div class="col-sm-6">
                          <input type="text" class="form-control" name="Name" id="Name" v-model="form.name">
                       </div>
                    </div>
                    <div class="form-group left ">
                       <label for="" class="control-label col-sm-2">Last Name</label>
                       <div class="col-sm-6">
                          <input type="text" class="form-control" name="lastName" id="lastName" v-model="form.lastName">
                       </div>
                    </div>
                    <div class="form-group left row">
                      <div class="col">
                            <label for="" class="control-label col-sm-3">Mail</label>
                            <div class="col-sm-6">
                                <input type="text" class="form-control" name="mail" id="mail" v-model="form.mail">
                            </div>
                        </div>
                        
                    </div>
              
                    <div class="form-group">
                      <button type="button" class="btn btn-primary" v-on:click="Save()" >Done</button>
                      <button type="button" class="btn btn-dark margen" v-on:click="Back()">Back</button>
                    </div> 
                </form>


            </div>
      <Footer />

    </div>
</template>
<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import axios from 'axios';
export default {
    name:"New",
    data:function(){
        return {
            form:{
                "name" : "",
                "lastName":"",
                "mail":"",
                "token" : "" 
            }
        }
    },
    components:{
        Header, Footer
        
    },
    methods:{
        Go_out(){
            this.$router.push("/dashboard"); //or router 
        },
       
        Save() {
            console.log(this.form)
            axios.post("http://localhost:4000/api/users", 
            {
                username:  this.form.name+this.form.lastName, 
                email: this.form.mail
            })
            .then((e) => {
                console.log("user created")
                console.log(e)
            })
            .catch( (e) => {
                console.log(e)
                console.log("error during user creation")
            })
        }
        
    }
}
</script>
<style scoped>
.left{
    text-align:  left;
}
</style>