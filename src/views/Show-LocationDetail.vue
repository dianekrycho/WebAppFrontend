<template>
  <div>
    <h2>Name of the film : {{locationDetails.filmName}}</h2>
    <h4>Type of the film : {{locationDetails.filmType}}</h4>
    <h4>Name of the director : {{locationDetails.filmDirectorName}}</h4>
    <h4>Name of the producer : {{locationDetails.filmProducerName}}</h4>
    <h4>Addresse of the shoot : {{locationDetails.address}}</h4>
    <h4>District of the shoot: {{locationDetails.district}}</h4>
    <h4>Year of the shoot : {{locationDetails.year}}</h4>
  </div>
  <br />
  <br />
  <div>
    <button @click="GoBack()">Go back to location list </button>
  </div>
</template>

<script>
//import axios from "axios";
import {mapState} from "vuex";

export default {
  data() {
    return {
      //locationDetails : this.$store.state.locationDetails,
      currentPage: 1,
      itemsPerPage: 10,
    };
  },

  computed: {
    ...mapState({
      locationDetails: (state) => state.locationDetails,
      locationId: (state) => state.locationId,
      token: (state) => state.token
    }),
  },
  methods: {
    GoBack(){
      this.$router.push(`/locations`);
    }
  },
};
</script>