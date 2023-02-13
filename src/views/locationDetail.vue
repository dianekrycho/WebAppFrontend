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
</template>

<script>
import axios from "axios";
import {mapActions, mapState} from "vuex";

export default {
  ...mapState({
    locationDetails: (state) => state.locationDetails,
    locationId: (state) => state.locationId,
    token: (state) => state.token
  }),
  async mounted() {
    await this.fetchLocationDetails();
  },
  methods: {
    ...mapActions(['setLocationDetails']),
    async fetchLocationDetails() {
      //console.log(this.locationId)
      const response= await axios.get(`http://localhost:3000/locations/${this.locationId}`, {
        headers: {
          'Authorization': `Bearer ${this.token}`,
        }
      });
      this.setLocationDetails(response.data);
      console.log(response.data)
    },
  }
};
</script>