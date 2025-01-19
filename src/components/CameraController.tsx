import { View, StyleSheet, Pressable } from "react-native";
import { Image } from "expo-image";
import { useCallback, useState } from "react";
import { PicturePreview } from "./PicturePreview";

interface Props {
  onTakePicture: () => Promise<void>;
  lastPhotoUri: string | null;
}


export function CameraController({ onTakePicture, lastPhotoUri }: Props) {
  const [isPreview, setIsPreview] = useState(false);
 
  const onPreviewPicture = useCallback(() => {
    console.log("onPreviewPicture");
    setIsPreview(true);
  }, [setIsPreview]);


  return (
    <View style={styles.container}>
      <View style={styles.previewContainer}>
        <Pressable onPress={onPreviewPicture}>
          <Image
            source={{ uri: lastPhotoUri }}
            style={styles.preview}
            contentFit="cover"
          />
        </Pressable>
      </View>
      <View style={styles.shutterContainer}>
        <Pressable onPress={onTakePicture}>
          {({ pressed }: { pressed: boolean }) => (
            <View
              style={[styles.shutterBtn, pressed && styles.shutterBtnPressed]}
            >
              <View style={styles.shutterBtnInner} />
            </View>
          )}
        </Pressable>
      </View>

      {isPreview && <PicturePreview uri={lastPhotoUri} onClose={() => setIsPreview(false)} /> }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    backgroundColor: "transparent",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  previewContainer: {
    height: 80,
    padding: 10,
    borderWidth: 2,
    // borderColor: "white",
    borderRadius: 10,
  },
  preview: {
    width: 60,
    height: 60,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "white",
  },
  shutterContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  shutterBtn: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "transparent",
    borderWidth: 4,
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  shutterBtnPressed: {
    opacity: 0.7,
  },
  shutterBtnInner: {
    width: 65,
    height: 65,
    borderRadius: 35,
    backgroundColor: "white",
  },
});
