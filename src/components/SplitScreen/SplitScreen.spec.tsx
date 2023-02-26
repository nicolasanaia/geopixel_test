import { render } from '@testing-library/react';
import { SplitScreen } from '.';

describe('SplitScreen component', () => {
    it('renders without crashing', () => {
        render(<SplitScreen />);
    });
});