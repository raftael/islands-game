import React, { createContext, useContext, useMemo, useReducer } from 'react';
import { GameReducer, initialState } from './GameReducer'

const GameContext = createContext()

export function GameContextWrapper({ children }) {
   const [state, dispatch]  = useReducer(GameReducer, initialState)

   const contextValue = useMemo(() => {
      return { state, dispatch };
   }, [state, dispatch]);

   return (
      <GameContext.Provider value={contextValue}>
         {children}
      </GameContext.Provider>
   )
}

export function useGameContext() {
   const context = useContext(GameContext);

   if (context === undefined) {
      throw new Error('useGameContext must be used within a GameProvider');      
   }
   return context;
}