import { Stack } from "expo-router";
import { LogBox } from "react-native";

// Ignoring all logs for now to avoid cluttering the console
LogBox.ignoreAllLogs(true); // Remove this line to see all the logs

// This is the root layout of the app. It includes the navigation stack
export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
          headerLeft: () => <></>,
        }}
      />
      <Stack.Screen
        name="not-found"
        options={{ headerTitle: "Oops! Not Found" }}
      />
    </Stack>
  );
}
