<template>
<div id="principal"> 
  <carregar-pagina/>
  <div>
    <router-link to="/sys/dashboard"><i class="sign in icon"></i>Entrar</router-link>
  </div> 
  <div>
    <router-view></router-view>
  </div> 
</div>
</template>
<script>
  import login from './login';
  import dashboard from './dashboard';  
  import carregar_pagina from '@/components/carregar-pagina';
  import * as c from '@/utils/constantes';

  export default {
    components: {carregar_pagina, login, dashboard},
    data () {
      return {
      }
    }
  };
</script>

