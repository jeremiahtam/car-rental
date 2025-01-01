import {
  AdvancedMarker,
  APIProvider,
  ControlPosition,
  Map,
  MapControl,
  useAdvancedMarkerRef,
} from "@vis.gl/react-google-maps";
import { Button, Modal } from "flowbite-react";
import React, { useState } from "react";
import { PlaceAutocomplete } from "./PlaceAutocomplete";
import { MapHandler } from "./MapHandler";

interface MapModalProps {
  openMapModal: boolean;
  setOpenMapModal: () => void;
  locationHandler: (address: google.maps.places.PlaceResult | null) => void;
}
export const MapModal = (props: MapModalProps) => {
  const [selectedPlace, setSelectedPlace] =
    useState<google.maps.places.PlaceResult | null>(null);
  const [markerRef, marker] = useAdvancedMarkerRef();

  const API_KEY =
    process.env.GOOGLE_MAPS_API_KEY ||
    ("AIzaSyAC9kFYbudVqx9uYB1oDgMbgLMEafAtaYM" as string);

  const submitLocationHandler = () => {
    props.locationHandler(selectedPlace);
    props.setOpenMapModal();
  };

  return (
    <>
      <Modal
        dismissible
        size="5xl"
        show={props.openMapModal}
        onClose={props.setOpenMapModal}
      >
        <Modal.Header>Select Location</Modal.Header>
        <Modal.Body className="p-0">
          <div className="h-96 w-full">
            <APIProvider
              apiKey={API_KEY}
              solutionChannel="GMP_devsite_samples_v3_rgmautocomplete"
            >
              <Map
                mapId={"bf51a910020fa25a"}
                defaultZoom={3}
                defaultCenter={{ lat: 22.54992, lng: 0 }}
                gestureHandling={"greedy"}
                disableDefaultUI={true}
              >
                <AdvancedMarker ref={markerRef} position={null} />
              </Map>
              <MapControl position={ControlPosition.TOP}>
                <div className="autocomplete-control mt-3 w-64">
                  <PlaceAutocomplete onPlaceSelect={setSelectedPlace} />
                </div>
              </MapControl>
              <MapHandler place={selectedPlace} marker={marker} />
            </APIProvider>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={submitLocationHandler}>Proceed</Button>
          <Button color="gray" onClick={props.setOpenMapModal}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
