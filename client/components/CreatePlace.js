import React, { Component } from 'react'
import { View, Text } from 'react-native'
import gql from 'graphql-tag'
import { Button, FormLabel, FormInput } from 'react-native-elements'

class CreatePlace extends Component {
  state = {
    name: '',
    address: {},
  }

  /**
   * Calls the CreatePlace mutation to create a place
   */
  handleCreatePlace = () => {
    const { CreatePlaceMutation } = this.props
    const { name } = this.state

    console.log(name)

    return CreatePlaceMutation && CreatePlaceMutation({ variables: { name } })
  }

  /**
   * @TODO: handler for address change.
   * It might be a call for the Google Maps API, that searches for user's address
   */
  handleAddressChange = () => console.log('address changed')

  render() {
    const { handleAddressChange, handleCreatePlace } = this

    return (
      <View>
        <Text>create a place</Text>
        <FormLabel>Name</FormLabel>
        <FormInput onChangeText={name => this.setState({ name })} />

        <FormLabel>Address</FormLabel>
        <FormInput onChangeText={handleAddressChange} />

        <Button onPress={handleCreatePlace} title="create place" />
      </View>
    )
  }
}

const CREATE_PLACE = gql`
  mutation CreatePlaceMutation($place: String!) {
    createPlace(
      name: $name
      address: {
        addressType: "residential"
        city: "Fjarðabyggð"
        complement: ""
        country: "Iceland"
        neighborhood: "Fáskrúðsfjörður"
        number: "10"
        postalCode: ""
        state: "Austurland"
        street: ""
        geoCoordinates: { lat: "64.928923", longi: "-14.006109" }
      }
    ) {
      name
    }
  }
`

export default CreatePlace