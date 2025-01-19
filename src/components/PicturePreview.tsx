import { View, StyleSheet, Modal, Pressable, FlatList, Dimensions } from "react-native";
import { Image } from "expo-image";
import { useCallback, useEffect, useState } from "react";
import * as MediaLibrary from 'expo-media-library';
import { AntDesign } from "@expo/vector-icons";

interface Props {
  uri: string | null;
  onClose: () => void;
}

interface Photo {
  id: string;
  uri: string;
}

const { width } = Dimensions.get('window');
const COLUMN_COUNT = 2;
const PHOTO_SIZE = width / COLUMN_COUNT - 2;

export function PicturePreview({ uri, onClose }: Props) {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(uri);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    loadPhotos();
  }, []);

  const loadPhotos = async () => {
    console.log("loadPhotos");
    try {
      const { assets } = await MediaLibrary.getAssetsAsync({
        mediaType: 'photo',
        sortBy: ['creationTime'],
      });

      const photoList = assets.map(asset => ({
        id: asset.id,
        uri: asset.uri
      }));

      setPhotos(photoList);
    } catch (error) {
      console.error('加载照片失败:', error);
    }
  };

  const renderPhoto = useCallback(({ item }: { item: Photo }) => (
    <Pressable 
      onPress={() => {
        setSelectedPhoto(item.uri);
        setIsFullscreen(true);
      }}
      style={styles.photoContainer}
    >
      <Image
        source={{ uri: item.uri }}
        style={styles.photo}
        contentFit="cover"
      />
    </Pressable>
  ), []);

  const renderFullscreenPhoto = () => (
    <Modal visible={isFullscreen} transparent animationType="fade">
      <View style={styles.fullscreenContainer}>
        <Pressable 
          style={styles.closeButton} 
          onPress={() => setIsFullscreen(false)}
        >
          <AntDesign name="close" size={24} color="white" />
        </Pressable>
        <Image
          source={{ uri: selectedPhoto || '' }}
          style={styles.fullscreenPhoto}
          contentFit="contain"
        />
      </View>
    </Modal>
  );

  return (
    <Modal visible transparent animationType="slide">
      <View style={styles.container}>
        <View style={styles.header}>
          <Pressable style={styles.closeButton} onPress={onClose}>
            <AntDesign name="close" size={24} color="white" />
          </Pressable>
        </View>
        
        <FlatList
          data={photos}
          renderItem={renderPhoto}
          keyExtractor={item => item.id}
          numColumns={COLUMN_COUNT}
          contentContainerStyle={styles.photoGrid}
        />

        {isFullscreen && renderFullscreenPhoto()}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
  },
  closeButton: {
    padding: 10,
  },
  photoGrid: {
    padding: 1,
  },
  photoContainer: {
    padding: 1,
  },
  photo: {
    width: PHOTO_SIZE,
    height: PHOTO_SIZE,
  },
  fullscreenContainer: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
  },
  fullscreenPhoto: {
    width: '100%',
    height: '100%',
  },
}); 