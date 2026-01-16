import { NativeModule, requireNativeModule } from 'expo'
import type { WidgetInfo } from './ExpoWidgetInfo.types'

declare class ExpoWidgetInfoModule extends NativeModule {
  /**
   * Retrieves information about all widgets currently configured by the user.
   *
   * @returns A promise that resolves to an array of widget information objects.
   * @throws `WIDGET_ERROR` - If WidgetKit fails to retrieve configurations.
   * @throws `UNSUPPORTED` - If the platform doesn't support WidgetInfo.
   * @see https://developer.apple.com/documentation/widgetkit/widgetinfo
   */
  getWidgetInfo(): Promise<WidgetInfo[]>
}

export default requireNativeModule<ExpoWidgetInfoModule>('ExpoWidgetInfo')
