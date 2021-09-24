import { derived, writable } from 'svelte/store';

import type { GameState } from '../data/game-state.interface';
import { Piece } from '../data/piece.enum';

const INITIAL_STATE: GameState = {
  board: [
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null]
  ],
  piecesLeft: Object.values(Piece),
  pieceSelected: null
};

function initGameState() {
  const { subscribe, set, update } = writable(INITIAL_STATE);

  return {
    subscribe,
    set,
    restart: () => set(INITIAL_STATE),
    selectPiece: (piece: Piece) =>
      update((state) => ({
        ...state,
        pieceSelected: piece,
        piecesLeft: state.piecesLeft.filter((p) => p !== piece)
      })),
    playPiece: (x: number, y: number) =>
      update((state) => ({
        ...state,
        board: Object.assign([...state.board], {
          [x]: Object.assign([...state.board[x]], {
            [y]: state.pieceSelected
          })
        }),
        pieceSelected: null
      })),
    finish: () => update((state) => ({ ...state, finished: true }))
  };
}

export const gameState = initGameState();

export const board = derived(gameState, ({ board }) => board);
export const piecesLeft = derived(gameState, ({ piecesLeft }) => piecesLeft);
export const pieceSelected = derived(gameState, ({ pieceSelected }) => pieceSelected);
