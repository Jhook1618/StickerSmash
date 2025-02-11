import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#c83349",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "Sticker Smash",
          tabBarIcon: ({ color, focused, size }) => (
            <Ionicons
              name={focused ? "home-sharp" : "home-outline"}
              color={color}
              size={size}
            />
          ),
          headerTintColor: "#ffffff",
          headerStyle: {
            backgroundColor: "#e06377",
            //   borderTopWidth: 0,
            //   elevation: 0,
          },
          tabBarStyle: {
            backgroundColor: "#36486b",
          },
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          headerTitle: "About",
          headerTintColor: "#ffffff",
          headerStyle: {
            backgroundColor: "#eeac99",
            //   borderTopWidth: 0,
            //   elevation: 0,
          },
          tabBarStyle: {
            backgroundColor: "#36486b",
          },
          tabBarIcon: ({ color, focused, size }) => (
            <Ionicons
              name={
                focused
                  ? "information-circle-sharp"
                  : "information-circle-outline"
              }
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="not-found"
        options={{ headerTitle: "Oops! Not Found" }}
      />
    </Tabs>
  );
}
