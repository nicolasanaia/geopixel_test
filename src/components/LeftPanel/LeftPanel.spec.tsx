import { render } from '@testing-library/react';
import { LeftPanel } from '.';

describe('LeftPanel component', () => {
    it('renders without crashing', () => {
        render(<LeftPanel />);
    });
});