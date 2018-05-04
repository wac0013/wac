<template>
<div id="dashboard">
  <navbar/>
  <div class="ui main container" style="margin-top: 20px; background: #f3f3f3">
    <barra-lateral></barra-lateral>
    <router-view></router-view>
  </div>
</div>
</template>

<script>
  import navbar from '@/components/navbar';
  import barraLateral from '@/components/barra-lateral';

  export default {
    components: {navbar, barraLateral}
  };
</script>
