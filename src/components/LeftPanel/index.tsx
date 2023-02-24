import { Clock } from "../Clock";
import { LeftPanelContainer, LowerPanel, UpperPanel } from "./styles";

export function LeftPanel() {
    return (
        <LeftPanelContainer>
            <UpperPanel>
                <Clock />
            </UpperPanel>
            <LowerPanel>
            </LowerPanel>
        </LeftPanelContainer>

    )
}