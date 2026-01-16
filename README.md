# expo-widget-info

This Expo Module allows you to get information about user-configured widgets on Apple devices.

This is especially useful for analytics usecases, in order to determine widget usage rates, which kinds and sizes are popular, how they're configured, etc.

[![NPM Version](https://img.shields.io/npm/v/expo-widget-info)](https://www.npmjs.com/package/expo-widget-info)

## Installation

```bash
expo install expo-widget-info
```

## Usage

Apple doesn't provide an event-based API, so simply call `getWidgetInfo()` whenever appropriate: at launch, or perodically as a background task *(do make sure the API is available, I have not tested it)*.

```tsx
import ExpoWidgetInfo from 'expo-widget-info'

const widgets = await ExpoWidgetInfo.getWidgetInfo()

for (const widget of widgets) {
  console.log('Widget ID:', widget.id) // 7134899202873854000
  console.log('Widget Kind:', widget.kind) // MyWidget
  console.log('Widget Family:', widget.family) // systemSmall
  console.log('Configuration:', widget.configuration) // null
}
```

## Documentation

Calling `getWidgetInfo()` will throw an `UNSUPPORTED` error when the native method `getCurrentConfigurations(_:)` is not available (requires iOS 14, iPadOS 14, Mac Catalyst 13, macOS 11, visionOS 26, watchOS 9 and up). Will otherwise throw native errors as `WIDGET_ERROR`.


Check out the related [Apple Developer Documentation](https://developer.apple.com/documentation/widgetkit/widgetcenter/getcurrentconfigurations(_:)).

## Contributing

This package is open to contributions of all kinds.
