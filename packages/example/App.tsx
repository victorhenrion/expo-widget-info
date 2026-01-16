import ExpoWidgetInfo, { type WidgetInfo } from 'expo-widget-info'
import React from 'react'
import { Button, Text, View } from 'react-native'

export default function App() {
  const [widgetInfo, setWidgetInfo] = React.useState<WidgetInfo[]>()

  return (
    <View style={{ margin: 'auto' }}>
      <Text>{JSON.stringify(widgetInfo, null, 2)}</Text>
      <Button
        title="Get Widget Info"
        onPress={() => ExpoWidgetInfo.getWidgetInfo().then(setWidgetInfo)}
      />
    </View>
  )
}
