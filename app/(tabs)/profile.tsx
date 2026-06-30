
import React from "react";
import { Text } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function Profile() {
  return (
    <SafeAreaProvider className="flex-1">
      <Text className='text-8xl font-bold text-lime-500 uppercase flex items-center justify-center w-screen h-screen'>PROFILE</Text>
    </SafeAreaProvider>
  );
}
