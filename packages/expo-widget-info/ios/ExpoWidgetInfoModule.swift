import ExpoModulesCore
import WidgetKit
import Intents

public class ExpoWidgetInfoModule: Module {
    public func definition() -> ModuleDefinition {
        Name("ExpoWidgetInfo")
        
        AsyncFunction("getWidgetInfo") { (promise: Promise) in
            if #available(iOS 14.0, macCatalyst 13.0, macOS 11.0, visionOS 26.0, watchOS 9.0, *) {
                WidgetCenter.shared.getCurrentConfigurations { result in
                    switch result {
                    case .success(let widgets):
                        let widgetData = widgets.map { widget -> [String: Any?] in
                            return [
                                "id": widget.id.hashValue,
                                "kind": widget.kind,
                                "family": widget.family.description,
                                "configuration": Self.serializeConfiguration(widget.configuration)
                            ]
                        }
                        promise.resolve(widgetData)
                    case .failure(let error):
                        promise.reject("WIDGET_ERROR", error.localizedDescription)
                    }
                }
            } else {
                promise.reject("UNSUPPORTED", "Unsupported platform or version")
            }
        }
    }
    
    @available(iOS 14.0, macCatalyst 13.0, macOS 11.0, visionOS 26.0, watchOS 9.0, *)
    private static func serializeConfiguration(_ value: INIntent?) -> [String: String?]? {
        guard let value else { return nil }
        return [
            "identifier": value.identifier,
            "intentDescription": value.intentDescription,
            "suggestedInvocationPhrase": value.suggestedInvocationPhrase,
        ]
    }
}
