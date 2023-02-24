import { SplitScreenContainer } from './styles'
import { LeftPanel } from '../LeftPanel';
import { RightPanel } from '../RightPanel';

export function SplitScreen() {
    return (
        <SplitScreenContainer>
            <LeftPanel />
            <RightPanel />
        </SplitScreenContainer>
    )
}