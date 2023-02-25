import { Clock } from "../Clock";
import { Selector } from "../Selector";
import { LeftPanelContainer, LowerPanel, UpperPanel } from "./styles";

export function LeftPanel() {
    return (
        <LeftPanelContainer>
            <UpperPanel>
                <Clock />
            </UpperPanel>
            <LowerPanel>
                <Selector />
            </LowerPanel>
        </LeftPanelContainer>

    )
}