<template>
    <div ref="container" class="relative" />
</template>

<script lang="ts" setup>
    import * as THREE from 'three'
    import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader.js'

    const props = defineProps<{
        svgSrc: String,
        color: String,
    }>();
    const { color } = toRefs(props);

    const hexColor = computed(() => {
        const threeColor = new THREE.Color(color.value);
        return threeColor.getHex();
    })

    const container = useTemplateRef<HTMLDivElement>('container');

    let renderer : THREE.WebGLRenderer | null = null;
    let camera :  THREE.OrthographicCamera | null = null;
    let scene : THREE.Scene | null = null
    let animationFrameId : number | null = null;
    let resizeObserver : ResizeObserver | null = null;

    onMounted(() => {
        console.log(!container.value);

        if(!container.value) return;

        scene = new THREE.Scene()

        // Create renderer with transparency
        renderer = new THREE.WebGLRenderer({ 
            alpha: true, 
            antialias: true 
        })
        container.value.appendChild(renderer.domElement)

        // Orthographic camera setup
        const frustumSize = 300
        const group = new THREE.Group()
        scene.add(group)

        // Load SVG and add to scene
        const loader = new SVGLoader()
        loader.load(props.svgSrc, (svgData : any) => {
            svgData.paths.forEach((path : any) => {
                const shapes = SVGLoader.createShapes(path)
                shapes.forEach((shape : any) => {
                    const geometry = new THREE.ExtrudeGeometry(shape, {
                        depth: 150,
                        bevelEnabled: false,
                    })
                    geometry.center()

                    const frontMaterial = new THREE.MeshBasicMaterial({ 
                        color: hexColor.value
                    })
                    const sideMaterial = new THREE.MeshBasicMaterial({ 
                        color: 0x000000 
                    })

                    const mesh = new THREE.Mesh(geometry, [frontMaterial, sideMaterial])
                    group.add(mesh)
                    group.scale.set(0.3, -0.3, 0.3); // note the negative Y
                })
            })

            animate()
        })

        const updateSize = () => {
            if(!container.value) return;

            const width = container.value.clientWidth
            const height = container.value.clientHeight
            const aspect = width / height

            // Setup orthographic camera with new aspect
            camera = new THREE.OrthographicCamera(
                (-frustumSize * aspect) / 2,
                (frustumSize * aspect) / 2,
                frustumSize / 2,
                -frustumSize / 2,
                0.1,
                1000
            )
            camera.position.set(200, 200, 200)
            camera.lookAt(0, 0, 0)
            camera.updateProjectionMatrix()

            renderer.setSize(width, height)
            renderer.setPixelRatio(window.devicePixelRatio)
        }

        resizeObserver = new ResizeObserver(updateSize)
        resizeObserver.observe(container.value)

        const animate = () => {
            animationFrameId = requestAnimationFrame(animate)
            group.rotation.y += 0.01
            renderer.render(scene, camera)
        }
    })

    onBeforeUnmount(() => {
        if(animationFrameId !== null) {
            cancelAnimationFrame(animationFrameId)
        }
        
        if(resizeObserver) {
            resizeObserver.disconnect()
        }

        renderer.dispose()
    });
</script>