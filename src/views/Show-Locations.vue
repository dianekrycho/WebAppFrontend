<style>
  td {
    text-align: center;
  }
</style>
<template>
    
    <div>
      <table style="margin: 0 auto;">
        <thead>
          <tr>
            <th>Nom des Film</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in paginatedData" :key="item.id">
            <td>{{ item.filmName }}</td>
            <button @click="locationDetail(item._id)">see details</button>
          </tr>
        </tbody>
      </table>
      <br />
        <br />
      <div class="pagination">
        <button @click="prevPage">Prev</button>
        {{ currentPage }} / {{ totalPages }}
        <button @click="nextPage">Next</button>
      </div>
    </div>
  </template>
  
  <script>
  import {mapActions, mapState} from 'vuex';
  
  export default {  
    data() {
    return {
      data : this.$store.state.locations,
      currentPage: 1,
      itemsPerPage: 10,
    };
  },
 
    computed: {
    ...mapState({
      locations : (state) => state.locations,
      locationId : (state) => state.locationId,
    }),
    totalPages() {
      return Math.ceil(this.data.length / this.itemsPerPage);
    },
    paginatedData() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.data.slice(start, end);
    },
  },
  methods: {
    ...mapActions(['setLocationId']),
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    locationDetail(id){
      this.setLocationId(id)
      this.$router.push(`/locationDetails/${id}`);
    }
  },
}

  
  </script>