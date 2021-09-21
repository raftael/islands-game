import React from 'react'

import { render as rtlRender, fireEvent, cleanup, getByTestId, screen } from '@testing-library/react'
import Info from '../components/Info'
import { GameContextWrapper } from '../context/GameContext';


afterEach(cleanup);

function render(ui, options) {
    function Wrapper(props) {
        return <GameContextWrapper {...props} />
    }
    return rtlRender(ui, { wrapper: Wrapper, ...options });
}

describe('Validating width', () => {
    test("should show width: 5 for default", () => {
        const { queryByText, getByText } = render(<Info islands="0" width="5" height="5" />);

        expect(queryByText(/Width: 5/i)).toBeTruthy()
    });

    test("rerender with different width: 3", () => {
        const { queryByText, rerender } = render(<Info islands="0" width="5" height="5" />);
        expect(queryByText(/Width: 5/i)).toBeTruthy()
        rerender(<Info islands={0} width={3} height={3} />)
        expect(queryByText(/Width: 3/i)).toBeTruthy()
    });
});

describe('Validating height', () => {
    test("should show height: 5 for default", () => {
        const { queryByText, getByText } = render(<Info islands="0" width="5" height="5" />);

        expect(queryByText(/Height: 5/i)).toBeTruthy()
    });

    test("rerender with different height: 3", () => {
        const { queryByText, rerender } = render(<Info islands="0" width="5" height="5" />);
        expect(queryByText(/Height: 5/i)).toBeTruthy()
        rerender(<Info islands={0} width={3} height={3} />)
        expect(queryByText(/Height: 3/i)).toBeTruthy()
    });
});

describe('Validating islands', () => {
    test("should show islands: 0 for default", () => {
        const { queryByText, getByText } = render(<Info islands="0" width="5" height="5" />);

        expect(queryByText(/Islands: 0/i)).toBeTruthy()
    });

    test("rerender with different islands: 1", () => {
        const { queryByText, rerender } = render(<Info islands="0" width="5" height="5" />);
        expect(queryByText(/Islands: 0/i)).toBeTruthy()
        rerender(<Info islands={1} width={3} height={3} />)
        expect(queryByText(/Islands: 1/i)).toBeTruthy()
    });
});

describe('Validating modal is showing', () => {
    test("should contain class modal-dialog", () => {
        render(<Info islands="0" width="5" height="5" />);
        fireEvent.click(screen.getByTestId('change-size-button'))
        expect(screen.getByTestId('modal-dialog')).toBeInTheDocument
        
    });

    // test("reren der with different islands: 1", () => {
    //     const { queryByText, rerender } = render(<Info islands="0" width="5" height="5" />);
    //     expect(queryByText(/Islands: 0/i)).toBeTruthy()
    //     rerender(<Info islands={1} width={3} height={3} />)
    //     expect(queryByText(/Islands: 1/i)).toBeTruthy()
    // });
});
