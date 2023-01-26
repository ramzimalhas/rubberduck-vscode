import { PanelState } from "@rubberduck/common";
import * as React from "react";
import { createRoot } from "react-dom/client";
import { CollapsedExplanationView } from "./component/CollapsedExplanationView";
import { ExpandedExplanationView } from "./component/ExpandedExplanationView";
import { sendMessage } from "./vscode/SendMessage";
import * as StateManager from "./vscode/StateManager";

const rootElement = document.getElementById("root");

if (rootElement != undefined) {
  const reactRoot = createRoot(rootElement);

  function render(panelState?: PanelState | undefined) {
    try {
      reactRoot.render(
        <React.StrictMode>
          {panelState && (
            <div>
              {panelState.explanations.map((explanation, i) =>
                panelState.selectedExplanationIndex === i ? (
                  <ExpandedExplanationView explanation={explanation} />
                ) : (
                  <CollapsedExplanationView
                    explanation={explanation}
                    onClick={() =>
                      sendMessage({
                        type: "clickCollapsedExplanation",
                        data: { index: i },
                      })
                    }
                  />
                )
              )}
            </div>
          )}
        </React.StrictMode>
      );
    } catch (error) {
      console.error(error);
    }
  }

  StateManager.registerUpdateListener(render);

  render();
}