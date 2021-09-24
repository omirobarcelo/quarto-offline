<script lang="ts">
  import Board from '../components/Board.svelte';
  import EndGameActions from '../components/EndGameActions.svelte';
  import PiecesLeft from '../components/PiecesLeft.svelte';
  import SelectedPiece from '../components/SelectedPiece.svelte';
</script>

<style>
  @font-face {
    font-family: 'Orbitron';
    src: url(./assets/fonts/Orbitron/Orbitron-VariableFont_wght.ttf),
      url(https://fonts.googleapis.com/css2?family=Orbitron&display=swap) format('truetype');
    font-weight: 400 900;
  }

  .header {
    height: 5%;
  }

  .content {
    height: 95%;
  }

  .selected-piece-area {
    flex: 1;
  }

  .board-area {
    flex: 2;
  }

  .pieces-left-area {
    flex: 1;
  }

  .end-game-actions-area {
    flex: 1;
  }
</style>

<header class="w-full bg-blue-500 rounded flex justify-center items-center text-gray-50 text-lg font-medium header">
  Quarto Offline
</header>
<div class="flex content">
  <div class="h-full p-2 flex flex-col items-center selected-piece-area">
    <div class="mt-4">
      <SelectedPiece />
    </div>
    <div class="w-full flex justify-center items-center end-game-actions-area">
      <EndGameActions />
    </div>
  </div>
  <div class="h-full p-2 flex justify-center items-center board-area">
    <Board />
  </div>
  <div class="h-full p-2 pieces-left-area">
    <PiecesLeft />
  </div>
</div>
