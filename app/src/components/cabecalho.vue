<template>
  <header class="ui header">
      <navbar></navbar>
      <barra-lateral></barra-lateral>
  </header>
</template>

<script>
import navbar from './navbar';
import barraLateral from './barra-lateral';

export default {
  components:{navbar, barraLateral}
}
</script>
