# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

参考にした方：Wawa sensei
https://www.youtube.com/watch?v=2W_VR92Pqgs&t=619s

【環境設定】
yarn create vite .
yarn
yarn dev
yarn add three @react-three/drei @react-three/fiber

【モデル読み込み】
npx gltfjsx public/models/Office.glb

【3ページでスクロールするようにモデルを設定】
<>
      <ambientLight intensity={1} />
      <Environment preset="forest" />
      <OrbitControls enableZoom={false} />
      <ScrollControls pages={3} damping={0.25}>
        <Office />
      </ScrollControls>
    </>

【アニメーションを設定】
yarn add gsap

【CSSで調整】
yarn add -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

