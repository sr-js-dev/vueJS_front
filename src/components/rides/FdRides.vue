<template>
    <div>
        <h3 v-text="route.name"></h3>
        <v-data-table
                :headers="headers"
                :items="items"
                class="elevation-1">
            <template slot="headerCell" scope="props">
                <v-tooltip bottom>
                    <span slot="activator" v-text="props.header.text"></span>
                    <span v-text="props.header.text"></span>
                </v-tooltip>
            </template>
            <template slot="items" scope="props">
                <td class="text-xs-left" v-text="props.item.rideId"></td>
                <td class="text-xs-right" v-text="props.item.driver"></td>
                <td class="text-xs-right" v-text="props.item.client"></td>
                <td class="text-xs-right" v-text="props.item.route"></td>
                <td class="text-xs-right" v-text="props.item.region"></td>
                <td class="text-xs-right" v-text="props.item.status"></td>
            </template>
        </v-data-table>
    </div>
</template>
<script>
  import { mapState } from 'vuex'
  import ridesService from '../../lib/rides'

  export default {
    name: 'fd-ride-disputes',
    beforeRouteEnter (to, from, next) {
      ridesService.getRides()
        .then(rides => next(vm => vm.setRides(rides)))
        .catch(error => next(vm => vm.setError(error)))
    },
    beforeRouteUpdate (to, from, next) {
      this.rides = []
      ridesService.getRides()
        .then(rides => {
          this.setRides(rides)
          next()
        })
        .catch(error => {
          this.setError(error)
        })
    },
    computed: {
      ...mapState([
        'route'
      ]),
      headers () {
        return [
          {
            text: 'Id',
            value: 'rideId'
          },
          {
            text: 'Driver',
            value: 'driver'
          },
          {
            text: 'Client',
            value: 'client'
          },
          {
            text: 'Route',
            value: 'route'
          },
          {
            text: 'Region',
            value: 'region'
          },
          {
            text: 'Status',
            value: 'status'
          }
        ]
      }
    },
    data () {
      return {
        e1: 0,
        items: [],
        rides: {},
        error: ''
      }
    },
    methods: {
      setRides (rides) {
        this.rides = rides
        this.items = rides.content.map(ride => ({
          rideId: ride.rideId,
          driver: ride.driver ? `${ride.driver.firstName} ${ride.driver.lastName}` : '',
          client: `${ride.client.firstName} ${ride.client.lastName}`,
          route: `${JSON.stringify(ride.estimate.pickup)} ${JSON.stringify(ride.estimate.dropOff)}`,
          region: ride.regionInfo.name,
          status: ride.status
        }))
      },
      setError (error) {
        this.error = error
      }
    }
  }
</script>