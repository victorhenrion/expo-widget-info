/**
 * The widget’s size and shape.
 *
 * **System families:**
 * - `systemSmall` A small widget.
 * - `systemMedium` A medium-sized widget.
 * - `systemLarge` A large widget.
 * - `systemExtraLarge` An extra-large widget.
 * - `systemExtraLargePortrait` An extra-large widget that uses a portrait orientation.
 *
 * **Accessory families:**
 * - `accessoryCircular` A circular widget.
 * - `accessoryCorner` A widget-based complication in the corner of a watch face in watchOS.
 * - `accessoryRectangular` A rectangular widget.
 * - `accessoryInline` A flat widget that contains a single row of text and an optional image.
 */
export type WidgetFamily =
  | 'systemSmall'
  | 'systemMedium'
  | 'systemLarge'
  | 'systemExtraLarge'
  | 'systemExtraLargePortrait'
  | 'accessoryCircular'
  | 'accessoryCorner'
  | 'accessoryRectangular'
  | 'accessoryInline'

export interface WidgetConfiguration {
  /** The unique identifier for this intent object. */
  identifier?: string
  /** A string describing the content of the intent. */
  intentDescription?: string
  /** The intent’s display name. */
  suggestedInvocationPhrase?: string
}

export interface WidgetInfo {
  /** The stable identity of the widget (hash of the WidgetInfo). */
  id: number
  /** The string specified during creation of the widget’s configuration. */
  kind: string
  /** The widget’s size and shape. May be a `WidgetFamily` or an arbitrary string for newly introduced families. */
  family: WidgetFamily | string
  /** A SiriKit intent that contains user-edited values. */
  configuration: WidgetConfiguration | null
}
