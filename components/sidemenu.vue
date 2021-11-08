<template>
  <div>
         <div id="mySidenav" class=" sidenav">
  <a href="javascript:void(0)" class="closebtn" @click="closeNav()">&times;</a>
  <iframe width="500" height="555" src="https://www.youtube.com/embed/3snAHmDJm84" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<span style="font-size:30px;cursor:pointer" @click="openNav()"> <font-awesome-icon :icon="['fas', 'arrow-right']"/> </span>
  </div>
</template>

<script>
export default {
methods: {
     openNav() {
  document.getElementById("mySidenav").style.width = "550px";
},

 closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
}
}
</script>

<style scoped>
.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.sidenav a:hover {
  color: #f1f1f1;
}

.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}
</style>