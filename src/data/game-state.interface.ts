import type { Piece } from './piece.enum';

export interface GameState {
  /** 4x4 matrix, null indicates empty space */
  board: (Piece | null)[][];
  piecesLeft: Piece[];
  pieceSelected: Piece | null;
}
