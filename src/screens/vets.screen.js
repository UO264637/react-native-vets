import { useContext } from "react";
import { FlatList, TouchableOpacity } from "react-native";

import { VetsContext } from "../services/vets.context";
import { VetInfoCardComponent } from "../components/vet-info-card.component";
import { LoadingContainer, Loading } from "../theme/styles";

export const VetsScreen = ({ navigation }) => {
  const vetsContext = useContext(VetsContext);
  return (
    <>
      {vetsContext.isLoading && (
        <LoadingContainer>
          <Loading />
        </LoadingContainer>
      )}

      <FlatList
        data={vetsContext.vets}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("VetDetailScreen", {
                  vet: item,
                })
              }
            >
              <VetInfoCardComponent vet={item} />
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </>
  );
};
