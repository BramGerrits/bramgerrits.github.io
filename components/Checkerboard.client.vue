<template>
  <div ref="canvasContainer" class="h-80 w-80"></div>
</template>

<script setup>
    import { onMounted } from 'vue'
    import { Application, Assets, MeshPlane } from 'pixi.js';

    const canvasContainer = useTemplateRef('canvasContainer')

    onMounted(async () => {
        // Create a new application
        const app = new Application();

        // Initialize the application
        await app.init({ 
            background: '#ffffff', 
            resizeTo: window 
        });

        // Append the application canvas to the document body
        canvasContainer.value.appendChild(app.canvas);

        // Load the grass texture
        const texture = await Assets.load('https://upload.wikimedia.org/wikipedia/commons/8/8a/10x10_checkered_board_transparent.svg');

        // Create a simple grass plane and add it to the stage
        const plane = new MeshPlane({ texture, verticesX: 10, verticesY: 10 });

        plane.x = -50;
        plane.y = -50;
        plane.width = canvasContainer.value.clientWidth + 100;
        plane.height = canvasContainer.value.clientWidth + 100;

        app.stage.addChild(plane);

        // Get the buffer for vertex positions.
        const { buffer } = plane.geometry.getAttribute('aPosition');

        // Listen for animate update
        let timer = 0;

        app.ticker.add(() =>
        {
            // Randomize the vertice positions a bit to create movement.
            for (let i = 0; i < buffer.data.length; i++)
            {
                buffer.data[i] += Math.sin(timer / 50 + i) * 0.05;
            }
            buffer.update();
            timer++;
        });
    })
</script>

<style scoped>
div {
  overflow: hidden;
}
</style>
