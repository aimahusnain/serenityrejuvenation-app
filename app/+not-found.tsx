import { Link, Stack } from "expo-router";
import { Button, Text, View } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <SafeAreaProvider className="flex-1 bg-background">
        <View className="flex-1 items-center justify-center p-5">
          <Text className="mb-4">404</Text>
          <Text className="mb-2">Page not found</Text>
          <Text className="text-center mb-8">
            This screen does not exist.
          </Text>
          <Link href="/" asChild>
            <Button title="Go to home screen"/>
          </Link>
        </View>
      </SafeAreaProvider>
    </>
  );
}