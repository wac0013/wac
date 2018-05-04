<template>
<div class="ui centered grid">
  <div class="ui blue raised card">
    <div class="content">
      <div class="header">
        Login
      </div>
    </div>
    <div class="content">
      <div class="description">
        <formulario nome="teste"  :onSubmit="logar">
          <edit nome="login" label="Nome de usuário" tipo="text" :obrigatorio="true" v-model="usuario.login"/>
          <div class="ui right aligned">
            <router-link to="/sys/recuperar-senha" tabindex="-1">Esqueceu sua senha</router-link>
          </div>
          <edit-senha nome="senha" label="Senha" :obrigatorio="true" v-model="usuario.senha"/>
           <div class="g-recaptcha centered" data-sitekey="6Ldf4TAUAAAAAFCwBf00intpyw8FyZse_PoNUbCm"></div>
            <div>
              <button id="logar" class="fluid ui primary button" type="submit">Login
                <i v-if="carregando" class="spinner loading icon right aligned"></i>
              </button>
            </div>
        </formulario>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import * as util from '@/utils/lib'

export default {
  data(){
  },
}
</script>
