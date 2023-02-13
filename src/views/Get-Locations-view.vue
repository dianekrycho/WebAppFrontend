<template>
  Chargement...
</template>
  
<script>
import axios from 'axios';
import { mapState, mapActions } from 'vuex';
export default {
    
    computed: {
    ...mapState({
      locations: (state) => state.locations,
      token: (state) => state.token,
    }),
  },
  mounted(){
        this.get_locations();
    },
  methods: {
    ...mapActions(['setLocations']),
    async get_locations() {
      try {
        const response = await axios.get('http://localhost:3000/locations', {
            headers:{
                Authorization: `Bearer ${this.token}`,
            }           
        });
        console.log(response.data);
        this.setLocations(response.data);
      } catch (error) {
        console.error(error);
      }
      this.$router.push("/Show-Locations");
    },
    
  },

};
</script>