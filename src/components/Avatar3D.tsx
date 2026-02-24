import { Canvas, useFrame } from '@react-three/fiber'
import { useFBX, useAnimations, OrbitControls } from '@react-three/drei'
import { Suspense, useEffect, useRef } from 'react'
import * as THREE from 'three'

function HumanModel() {
  const group = useRef<THREE.Group>(null)

  // FBX returns the object directly
  const fbx = useFBX('/models/avatar.fbx')

  // Animations are inside fbx.animations
  const { actions } = useAnimations(fbx.animations, group)

  // Play first animation
  useEffect(() => {
    if (actions) {
      const first = Object.values(actions)[0]
      first?.reset().fadeIn(0.5).play()
    }
  }, [actions])

  // Subtle idle rotation
  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.002
    }
  })

  return (
    <primitive
      ref={group}
      object={fbx}
      scale={0.02 }
      position={[0, -2.5, 0]}
    />
  )
}

export default function Avatar3D() {
  return (
    <Canvas
      camera={{ position: [0, 1.5, 4], fov: 35 }}
      style={{ width: '100%', height: '450px' }}
    >
      <ambientLight intensity={1.5} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} />

      <Suspense fallback={null}>
        <HumanModel />
      </Suspense>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        target={[0, 0.1, 0]}
      />
    </Canvas>
  )
}