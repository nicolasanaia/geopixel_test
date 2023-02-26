import { render } from '@testing-library/react';
import { RightPanel } from '.';

describe('RightPanel component', () => {
    it('renders without crashing', () => {
        render(<RightPanel />);
    });
});