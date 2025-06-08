import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Tab1Stack from "./stacks/Tab1Stack";
import Tab2Stack from "./stacks/Tab2Stack";
import Tab3Stack from "./stacks/Tab3Stack";
import Tab4Stack from "./stacks/Tab4Stack";
import Tab5Stack from "./stacks/Tab5Stack";
import Tab6Stack from "./stacks/Tab6Stack";
import Tab7Stack from "./stacks/Tab7Stack";
import Tab8Stack from "./stacks/Tab8Stack";
import Tab9Stack from "./stacks/Tab9Stack";

const Tab = createBottomTabNavigator();

export default function Tabs({ route }) {
  const initialTab = route.params?.initialTab || "Tab1";

  return (
    <Tab.Navigator initialRouteName={initialTab}>
      <Tab.Screen name="Tab1" component={Tab1Stack} />
      <Tab.Screen name="Tab2" component={Tab2Stack} />
      <Tab.Screen name="Tab3" component={Tab3Stack} />
      <Tab.Screen name="Tab4" component={Tab4Stack} />
      <Tab.Screen name="Tab5" component={Tab5Stack} />
      <Tab.Screen name="Tab6" component={Tab6Stack} />
      <Tab.Screen name="Tab7" component={Tab7Stack} />
      <Tab.Screen name="Tab8" component={Tab8Stack} />
      <Tab.Screen name="Tab9" component={Tab9Stack} />
    </Tab.Navigator>
  );
}
