<template>
    <ContentWrapper>
        <div class="content-heading">
            <div>
                Lista de Usuários
            </div>
        </div>
        <div class="row">
           <div class="col-lg-11">
                <v-client-table :data="usuarios" :columns="columns" :options="options">
                    <template slot="status" slot-scope="props">
                    <div v-if="props.row.status == true">
                        <em class="fa-2x icon-like mr-2" style="color: blue;font-size: 20px"></em>
                    </div>
                    <div v-else>
                         <em class="fa-2x icon-dislike mr-2" style="color: red;font-size: 20px"></em>
                    </div>
                </template>
                <template slot="Ação" slot-scope="props">
                    <div>
                    <b-btn variant="outline-info mr-2" class="btn-xs" @click.prevent="edit(props.row)">editar</b-btn>
                    <b-btn variant="outline-danger mr-2" class="btn-xs" @click.prevent="remove(props.row)">remover</b-btn>
                    <b-btn variant="outline-success" class="btn-xs" @click.prevent="edit(props.row)">trocar senha</b-btn>
                    </div>
                </template>
                </v-client-table>    
           </div>
           <div class="col-lg-1">
               <!-- <button class="btn btn-info btn-circle btn-plus mr-1" type="button">+</button>   -->
               <router-link class="btn btn-info btn-circle btn-plus " to="/usuario-cadastro">+</router-link>  
           </div>           
        </div>
    </ContentWrapper>
</template>

<script>
    import Vue from 'vue';
    import { ClientTable } from 'vue-tables-2';
    import VueRouter from 'vue-router';

    import axios from 'axios';
    
    Vue.use(VueRouter)
    Vue.use(ClientTable);

    const tableData = [
        {"status": "false" ,"Login": "Trident", "Nome": "Internet Explorer 4.0", "Nome": "Win 95+", "Perfil": "4", "Cidade": "X","Área": "X","Email": "X"},
        {"status": "true" ,"Login": "Trident","Nome": "Internet Explorer 5.0","Nome": "Win 95+","Perfil": "5","Cidade": "X","Área": "X","Email": "X"},
        {"status": "true" ,"Login": "Trident","Nome": "Internet Explorer 5.5","Nome": "Win 95+","Perfil": "5.5","Cidade": "X","Área": "X","Email": "X"},
        {"status": "true" ,"Login": "Trident","Nome": "Internet Explorer 6","Nome": "Win 98+","Perfil": "6","Cidade": "X","Área": "X","Email": "X"},
        {"status": "false" ,"Login": "Trident", "Nome": "Internet Explorer 7", "Nome": "Win XP SP2+", "Perfil": "7", "Cidade": "X","Área": "X","Email": "X"},
        {"status": "true" ,"Login": "Trident", "Nome": "AOL Nome (AOL desktop)", "Nome": "Win XP", "Perfil": "6", "Cidade": "X","Área": "X","Email": "X"},
        {"status": "true" ,"Login": "Gecko", "Nome": "Firefox 1.0", "Nome": "Win 98+ / OSX.2+", "Perfil": "1.7", "Cidade": "X","Área": "X","Email": "X"},
        {"status": "true" ,"Login": "Gecko", "Nome": "Firefox 1.5", "Nome": "Win 98+ / OSX.2+", "Perfil": "1.8", "Cidade": "X","Área": "X","Email": "X"},
        {"status": "false" ,"Login": "Gecko", "Nome": "Firefox 2.0", "Nome": "Win 98+ / OSX.2+", "Perfil": "1.8", "Cidade": "X","Área": "X","Email": "X"},
        {"status": "true" ,"Login": "Gecko", "Nome": "Firefox 3.0", "Nome": "Win 2k+ / OSX.3+", "Perfil": "1.9", "Cidade": "X","Área": "X","Email": "X"},
        {"status": "true" ,"Login": "Gecko", "Nome": "Camino 1.0", "Nome": "OSX.2+", "Perfil": "1.8", "Cidade": "X","Área": "X","Email": "X"},
        {"status": "false" ,"Login": "Gecko", "Nome": "Camino 1.5", "Nome": "OSX.3+", "Perfil": "1.8", "Cidade": "X","Área": "X","Email": "X"},
        {"status": "true" ,"Login": "Trident", "Nome": "Internet Explorer 4.0", "Nome": "Win 95+", "Perfil": "4", "Cidade": "X","Área": "X","Email": "X"},
        {"status": "true" ,"Login": "Trident","Nome": "Internet Explorer 5.0","Nome": "Win 95+","Perfil": "5","Cidade": "X","Área": "X","Email": "X"},
        {"status": "true" ,"Login": "Trident","Nome": "Internet Explorer 5.5","Nome": "Win 95+","Perfil": "5.5","Cidade": "X","Área": "X","Email": "X"},
        {"status": "false" ,"Login": "Trident","Nome": "Internet Explorer 6","Nome": "Win 98+","Perfil": "6","Cidade": "X","Área": "X","Email": "X"},
        {"status": "true" ,"Login": "Trident", "Nome": "Internet Explorer 7", "Nome": "Win XP SP2+", "Perfil": "7", "Cidade": "X","Área": "X","Email": "X"},
        {"status": "true" ,"Login": "Trident", "Nome": "AOL Nome (AOL desktop)", "Nome": "Win XP", "Perfil": "6", "Cidade": "X","Área": "X","Email": "X"},
        {"status": "true" ,"Login": "Gecko", "Nome": "Firefox 1.0", "Nome": "Win 98+ / OSX.2+", "Perfil": "1.7", "Cidade": "X","Área": "X","Email": "X"},
        {"status": "false" ,"Login": "Gecko", "Nome": "Firefox 1.5", "Nome": "Win 98+ / OSX.2+", "Perfil": "1.8", "Cidade": "X","Área": "X","Email": "X"},
        {"status": "true" ,"Login": "Gecko", "Nome": "Firefox 2.0", "Nome": "Win 98+ / OSX.2+", "Perfil": "1.8", "Cidade": "X","Área": "X","Email": "X"},
        {"status": "true" ,"Login": "Gecko", "Nome": "Firefox 3.0", "Nome": "Win 2k+ / OSX.3+", "Perfil": "1.9", "Cidade": "X","Área": "X","Email": "X"},
        {"status": "true" ,"Login": "Gecko", "Nome": "Camino 1.0", "Nome": "OSX.2+", "Perfil": "1.8", "Cidade": "X","Área": "X","Email": "X"},
        {"status": "true" ,"Login": "Gecko", "Nome": "Camino 1.5", "Nome": "OSX.3+", "Perfil": "1.8", "Cidade": "X","Área": "X","Email": "X"},
        {"status": "true" ,"Login": "Trident", "Nome": "AOL Nome (AOL desktop)", "Nome": "Win XP", "Perfil": "6", "Cidade": "A"}
    ]
    

    export default {
        components: {
            ClientTable
        },
        data() {
            return {
                tableData: [],
                usuarios: [],
                columns: ['status','login', 'nome', 'perfil', 'cidade','area','email','Ação'],
                options: {
                  pagination: { dropdown:false },
                  sortIcon: {
                    is: 'fa-sort',
                    base: 'fas',
                    up: 'fa-sort-up',
                    down: 'fa-sort-down'
                  },
                  filterable:true,
                  texts:{
                    count:'{count} Registros',
                    filter:'Filtrar resultados:',
                    filterPlaceholder:'Filtrar',
                    limit:'Exibir registros:',
                    noResults:'No matching records',
                    page:'Page:',
                    filterBy: 'Filter by {column}',
                    loading:'Loading...',
                    defaultOption:'Select {column}'
                    },
                }
            }
        },
        mounted () {
            axios
                .get('https://5b9ba6fe8d1635001482cd09.mockapi.io/usuario')
                .then(response => (this.usuarios = response.data))

        },
        created () {
            this.tableData = tableData.map((item, index) => {
                item['id'] = index
                return item
            })
        },
        methods: {
            edit (row) {
              alert(`Editing row id: ${row.id}`)
            },
            remove (row) {
                this.tableData = this.tableData.filter(item => (row.id !== item.id));
            },
            reload() {
                this.tableData = tableData;
            },
            clear() {
                this.tableData = [];
            }
        }
    }
</script>

