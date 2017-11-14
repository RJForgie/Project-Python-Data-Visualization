import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import mapStyle from '../mapStyle.jsx'

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ }} />,
    containerElement: <div style={{}} />,
    mapElement: <div style={{ height: `100vh`, width: `100%`, zIndex: `-100`, position: `absolute`}} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 55.8449378, lng: -3.2908776 }}
    defaultOptions={{ styles: mapStyle }}
    defaultMapTypeId={"terrain"}
  >
    {props.isMarkerShown && <Marker position={{ lat: 55.8449378, lng: -3.2908776 }} onClick={props.onMarkerClick} />}
    {/* <Marker
    position={{ lat: 55.8449378, lng: -3.2908776 }}
    onClick={props.onToggleOpen}
  ></Marker> */}
  </GoogleMap>

)

class MyFancyComponent extends React.PureComponent {
  state = {
    isMarkerShown: true,
  }

  componentDidMount() {
    this.delayedShowMarker()
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 3000)
  }

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  }

  render() {
    return (
      <MyMapComponent
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
      />
    )
  }
}

export default MyMapComponent
