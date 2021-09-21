import React from 'react'
import renderer from 'react-test-renderer'
import { render, screen } from '@testing-library/react'
import Index from '../pages/index'
import { GameContextWrapper } from '../context/GameContext';

describe("<Index />", () => {
    beforeEach(() => {
        render(
            <GameContextWrapper>
                <Index />
            </GameContextWrapper>
        );
    });

    describe('when page is initialized', () => {
        it(" then shows the width: 5 by default", () => {
            expect(screen.getAllByText(/Width: 5/i)).toBeTruthy();
        })
    });
});

