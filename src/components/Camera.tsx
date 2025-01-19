import { View, StyleSheet, Alert } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import { useEffect, useRef, useState } from 'react';
import { CameraController } from './CameraController';
import { TopSettings } from './TopSettings';
import { Watermark } from './Watermark';

export function Camera() {
  const [permission, requestPermission] = useCameraPermissions();
  const [mediaPermission, requestMediaPermission] = MediaLibrary.usePermissions();
  const [lastPhoto, setLastPhoto] = useState<string | null>(null);
  const cameraRef = useRef<CameraView>(null);

  useEffect(() => {
    (async () => {
      try {
        const [cameraStatus, mediaStatus] = await Promise.all([
          requestPermission(),
          requestMediaPermission()
        ]);

        if (!cameraStatus.granted || !mediaStatus.granted) {
          Alert.alert('权限错误', '需要相机和存储权限才能使用此功能');
          return;
        }

        await loadLastPhoto();
      } catch (error) {
        console.error('初始化失败:', error);
      }
    })();
  }, []);

  const loadLastPhoto = async () => {
    const media = await MediaLibrary.getAssetsAsync({
      first: 1,
      mediaType: 'photo',
      sortBy: ['creationTime'],
    });

    if (media.assets.length > 0) {
      setLastPhoto(media.assets[0].uri);
    }
  };

  const takePicture = async () => {
    try {
      const photo = await cameraRef.current?.takePictureAsync();
      if (!photo?.uri) return;

      await MediaLibrary.createAssetAsync(photo.uri);
      await loadLastPhoto();
      Alert.alert('成功', '照片已保存到相册');
    } catch (error) {
      console.error('拍照失败:', error);
      Alert.alert('错误', '拍照或保存失败');
    }
  };

  if (!permission?.granted) {
    return null;
  }

  return (
    <View style={styles.container}>
      <TopSettings />
      <View style={styles.cameraContainer}>
        <CameraView
          style={styles.camera}
          ref={cameraRef}
        >
          <Watermark />
        </CameraView>
      </View>
      <CameraController 
        onTakePicture={takePicture}
        lastPhotoUri={lastPhoto}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  cameraContainer: {
    flex: 1,
    position: 'relative',
  },
  camera: {
    flex: 1,
    width: '100%',
  },
}); 