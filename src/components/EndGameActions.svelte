<script lang="ts">
  import Button from 'smelte/src/components/Button';

  import { gameState } from '../stores/game.store';
</script>

<style>
  .content {
    width: 100%;
  }

  @media (min-width: 1280px) {
    .content {
      width: 60%;
    }
  }
</style>

<div class="flex flex-col justify-center items-center space-y-4 content">
  <Button light block on:click={gameState.restart}>Restart</Button>
</div>
