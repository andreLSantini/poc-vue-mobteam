<template>
    <ContentWrapper>
        <div class="content-heading">
            <div>Mapa OS
                <small>Descrição aqui {{osList}}</small>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-3">
                <h4 >Filtrar Por:</h4>
                <div class="card mb-0 border-info">
                    <div class="card-header text-white bg-info">EQUIPE</div>
                    <div class="card-body" style="padding-bottom: inherit;">
                        <div class="form-group">
                            <label>Cidade:</label>
                            <select class="custom-select custom-select-sm">
                                <option selected="">ADMINISTRAÇÃO</option>
                                <option value="1">LIMEIRA</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label>ÁREA</label>
                            <select class="custom-select custom-select-sm">
                                <option selected="">ADMINISTRAÇÃO</option>
                                <option value="1">SISTEMAS</option>
                                <option value="2">SUPORTE</option>
                            </select>
                        </div>
                        <div class="checkbox c-checkbox">
                            <label>
                            <input type="checkbox" value="" />
                            <span class="fa fa-check"></span> Apenas equipes com turno aberto</label>
                        </div>
                        <div class="checkbox c-checkbox">
                            <label>
                            <input type="checkbox" value="" />
                            <span class="fa fa-check"></span> Apenas OS's enviadas para o mobile</label>
                        </div>  
                        <label>EQUIPE</label>
                        <div class="checkbox c-checkbox">
                            <label>
                            <input type="checkbox" value="" />
                            <span class="fa fa-check"></span> Marcar/Desmarcar Todos</label>
                        </div>                                                
                    </div>
                </div>
                <div class="card mb-0 border-info">
                    <div class="card-header text-white bg-info">TEMPO EM EXECUÇÃO</div>
                    <div class="card-body" style="padding-bottom: inherit;">
                        <div class="form-group row">
                            <div class="col-md-6">
                                <select class="custom-select custom-select-sm">
                                    <option selected="">Maior que</option>
                                    <option value="1">Menor que</option>
                                    <option value="2">Igual a </option>
                                </select>
                            </div>
                            <div class="col-md-6">
                                <input class="form-control form-control-rounded" type="text" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card mb-0 border-info">
                    <div class="card-header text-white bg-info">SITUAÇÃO DA OS</div>
                    <div class="card-body" style="padding-bottom: inherit;">
                        <div class="checkbox c-checkbox">
                            <em class="fa-2x mr-2 fas fa-lightbulb" style="color: green;    font-size: 20px"></em>
                            <label>
                            <input type="checkbox" value="" />
                            <span class="fa fa-check"></span>Aberta</label>
                        </div>
                        <div class="checkbox c-checkbox">
                            <em class="fa-2x mr-2 fas fa-lightbulb" style="color: yellow;    font-size: 20px"></em>
                            <label>
                            <input type="checkbox" value="" />
                            <span class="fa fa-check"></span>Pendente</label>
                        </div>
                        <div class="checkbox c-checkbox">
                            <em class="fa-2x mr-2 fas fa-lightbulb" style="color: blue;    font-size: 20px"></em>
                            <label>
                            <input type="checkbox" value="" />
                            <span class="fa fa-check"></span>Iniciada</label>
                        </div>
                        <div class="checkbox c-checkbox">
                            <em class="fa-2x mr-2 fas fa-lightbulb" style="color: red;    font-size: 20px"></em>
                            <label>
                            <input type="checkbox" value="" />
                            <span class="fa fa-check"></span>Paralisada</label>
                        </div>  
                        <div class="checkbox c-checkbox">
                            <em class="fa-2x mr-2 fas fa-lightbulb" style="color: gray;    font-size: 20px"></em>
                            <label>
                            <input type="checkbox" value="" />
                            <span class="fa fa-check"></span>Executada</label>
                        </div>
                    </div>
                </div>
                <div class="card mb-0 border-info">
                    <div class="card-header text-white bg-info">SERVIÇO</div>
                    <div class="card-body" style="padding-bottom: inherit;">
                        <div class="form-group row">
                            <label class="col-md-3 col-form-label">Nome</label>
                            <div class="col-md-9">
                                <input class="form-control form-control-rounded" type="text" />
                            </div>
                        </div>
                    </div>
                </div>        
                <div class="card mb-0 border-info">
                    <div class="card-header text-white bg-info">CÓDIGO DE LIGAÇÃO</div>
                    <div class="card-body" style="padding-bottom: inherit;">
                        <div class="form-group row">
                            <label class="col-md-3 col-form-label">Número</label>
                            <div class="col-md-9">
                                <input class="form-control form-control-rounded" type="text" />
                            </div>
                        </div>                        
                    </div>
                </div>                                                        
            </div>
            <div class="col-lg-9">
                <h4 >Exibir:</h4>
                <div class="card card-default">
                    <div class="card-header" >
                        <div class="form-group row">
                            <div class="col-md-2">
                                <label class="switch">
                                    <input id="inlineCheckbox10" type="checkbox" value="option1" />
                                    <span ></span> LINHAS</label>
                            </div>
                            <div class="col-md-2">
                                <label class="switch">
                                    <input id="inlineCheckbox20" type="checkbox" value="option2" />
                                    <span ></span> EQUIPES</label>
                            </div>
                            <div class="col-md-2">
                                <label class="switch">
                                    <input id="inlineCheckbox30" type="checkbox" value="option3" />
                                    <span ></span> OS</label>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <GmapMap
                          :center="center"
                          :zoom="14"
                          map-type-id="terrain"
                          class="gmap"
                        >
                        <gmap-info-window 
                            :options="infoOptions" 
                            :position="infoWindowPos" 
                            :opened="infoWinOpen" 
                            @closeclick="infoWinOpen=false">
                            <div v-html="infoContent"></div>
                        </gmap-info-window>
                          <GmapMarker
                            :key="index"
                            v-for="(m, index) in marcadores"
                            :position="m.position"
                            :clickable="true"
                            :draggable="true"
                            @click="toggleInfoWindow(m,index)"
                            @mouseover="statusText = m.text"
                            @mouseout="statusText = null"
                          />
                        </GmapMap>
                    </div>
                </div>
            </div>
        </div>
    </ContentWrapper>
</template>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<script>
    import Vue from 'vue'
    import * as VueGoogleMaps from 'vue2-google-maps'
     // Multiselect
    import Multiselect from 'vue-multiselect'
    import axios from 'axios';

    Vue.use(VueGoogleMaps, {
        load: {
            key: 'AIzaSyDf43lPdwlF98RCBsJOFNKOkoEjkwxb5Sc'
        }
    });
 const options1 = [ 'Vue.js', 'Adonis', 'Rails', 'Sinatra', 'Laravel', 'Phoenix' ];
    export default {
        components: {
            Multiselect
        },
        data() {
            return {
                infoContent: '',
                infoWindowPos: null,
                infoWinOpen: false,
                currentMidx: null,
                infoOptions: {
                    pixelOffset: {
                    width: 0,
                    height: -35
                    }
                },
                center: {
                    lat:-22.576611,
                    lng:-47.4195694
                },
                marcadores: [],
                mapStyle: { styles : [{featureType:'water',stylers:[{visibility:'on'},{color:'#bdd1f9'}]},
                    {featureType:'all',elementType:'labels.text.fill',stylers:[{color:'#334165'}]},
                    {featureType:'landscape',stylers:[{color:'#e9ebf1'}]},
                    {featureType:'road.highway',elementType:'geometry',stylers:[{color:'#c5c6c6'}]},
                    {featureType:'road.arterial',elementType:'geometry',stylers:[{color:'#fff'}]},
                    {featureType:'road.local',elementType:'geometry',stylers:[{color:'#fff'}]},
                    {featureType:'transit',elementType:'geometry',stylers:[{color:'#d8dbe0'}]},
                    {featureType:'poi',elementType:'geometry',stylers:[{color:'#cfd5e0'}]},
                    {featureType:'administrative',stylers:[{visibility:'on'},{lightness:33}]},
                    {featureType:'poi.park',elementType:'labels',stylers:[{visibility:'on'},{lightness:20}]},
                    {featureType:'road',stylers:[{color:'#d8dbe0',lightness:20}]}]
                },
               // Multiselect
                vueSelectValue: '',
                vueSelectOptions: options1,
                vueSelectMultiPlainValue: [options1[0]],
                vueSelectMultiPlainOptions: options1,
                osList: [],
            }
        },
         mounted () {
            axios
                .get('https://5b9ba6fe8d1635001482cd09.mockapi.io/OrderService')
                .then(response => (this.carregaMapaComOs(response.data)))

        },
        methods: {
            addTag (newTag) {
                this.vueSelectMultipleValue.push({
                    name: newTag,
                    language: 'Some language'
                })
            },
            toggleInfoWindow: function(marker, idx) {
                this.infoWindowPos = marker.position;
                this.infoContent = this.getInfoWindowContent(marker);
                if (this.currentMidx == idx) {
                this.infoWinOpen = !this.infoWinOpen;
                }
                else {
                this.infoWinOpen = true;
                this.currentMidx = idx;
                }
            },
            getInfoWindowContent: function(marker){
                return (`<div class="card">
                    <div class="card-content">
                        <div class="content">
                            Equipe: <h5>${marker.equipe}</h5>
                        </div>
                        <div class="content">
                            Situacao: <h5>${marker.situacao}</h5>
                        </div>
                        <div class="content">
                            Lat/long: <h5>${marker.position.lat} /${marker.position.lng}</h5>
                        </div> 
                        <div class="content">
                            TempoExecucao: <h5>${marker.tempoExecucao}</h5>
                        </div>                         
                        
                    </div>
                    </div>`
  
                );
            },
            carregaMapaComOs(osList){
                osList.forEach(element => {
                    this.marcadores.push(
                        { 
                            position: { 
                                lat: parseFloat(element.lat),
                                lng: parseFloat(element.lng)
                            },
                            tempoExecucao: element.TempoExecucao,
                            situacao: element.Situacao,
                            equipe: element.Equipe.descricao,
                        }
                    )
                });
            }
        }
    }
</script>
