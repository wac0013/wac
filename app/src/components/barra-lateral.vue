<template>
  <div class="ui sidebar vertical menu visible pushable">
    <div></div>
    <div></div>
  </div>

  <!-- <ul id="barra-lateral" class="side-nav fixed">
    <li>
      <div class="user-view hide-on-med-only">
        <div class="background w3-grayscale-min">
          <img src="/img/util/escritorio.jpg" style="min-width:100%;max-width:120%;min-height:100%;">
        </div>
        <img class="circle responsive-img valign profile-image" :src="imagem_perfil">
        <router-link to="/cadastro-usuario" class="btn-flat waves-effect waves-light white-text profile-btn name">{{nome_usuario}}</router-link>
        <router-link to="/cadastro-usuario">{{cargo}}</router-link>
      </div>
    </li>
    <li class="user-view hide-on-large-only hide-on-small-only">
       <router-link to="/cadastro-usuario"><img class="circle responsive-img valign profile-image" width="50" height="50" :src="imagem_perfil"></router-link>
    </li>
    <li><div class="divider hide-on-large-only hide-on-small-only"></div></li>
    <li class="no-padding">
      <ul class="collapsible collapsible-accordion" data-collapsible="accordion">
        <li class="bold">
          <a class="collapsible-header waves-effect"><i class="material-icons">account_circle</i><span class="hide-on-med-only bold">Usuarios</span></a>
          <div class="collapsible-body">
            <ul>
              <li><router-link to="/cadastro-usuario"><i class="material-icons">edit</i><span class="hide-on-med-only">Cadastro</span></router-link></li>
              <li><router-link to="/permissoes"><i class="material-icons">verified_user</i><span class="hide-on-med-only">Permissões</span></router-link></li>
            </ul>
          </div>
        </li>
      </ul>
    </li>
    <li><router-link to="/cadastro-cliente"><i class="material-icons">supervisor_account</i><span class="hide-on-med-only">Clientes</span></router-link></li>
    <li><router-link to="/cadastro-veiculo"><i class="material-icons">directions_car</i><span class="hide-on-med-only">Veículos</span></router-link></li>
    <li><div class="divider"></div></li>
    <li><router-link to="/configuracoes"><i class="material-icons">settings</i><span class="hide-on-med-only">Configurações</span></router-link></li>
    <li><a class="waves-effect" v-on:click="sair()"><i class="material-icons">keyboard_tab</i><span class="hide-on-med-only">Sair</span></a></li>
    <li></li>
    <li></li>
  </ul> -->
</template>

<script>
import { LOGOUT } from '../utils/constantes'

export default {
  data(){
    return {
      imagem_perfil: '',
      nome_usuario: '',
      cargo: ''
    } 
  },
  methods: {
    sair(){
      this.$store.dispatch(LOGOUT);
      localStorage.removeItem('token');
    }
  },
  mounted(){
    $('#btn-menu').sideNav({closeOnClick: true});
    $('.collapsible').collapsible()
  },
  created: function (){
    this.imagem_perfil = this.$store.getters.getUsuario._img_perfil;
    this.nome_usuario = this.$store.getters.getUsuario._pessoa._nome;
  }
}
</script>

<style>
</style>
