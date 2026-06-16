// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    fonts: [{
        provider: fontProviders.local(),
        name: "Pretendard",
        cssVariable: "--font-pretendard",
        options: {
            variants: [
                {
                    src: ["./src/assets/fonts/Pretendard-Black.woff", "./src/assets/fonts/Pretendard-Black.woff2"],
                    weight: 900,
                    style: "normal"
                },
                {
                    src: ["./src/assets/fonts/Pretendard-Black.woff", "./src/assets/fonts/Pretendard-ExtraBold.woff2"],
                    weight: 800,
                    style: "normal"
                },
                {
                    src: ["./src/assets/fonts/Pretendard-Bold.woff", "./src/assets/fonts/Pretendard-Bold.woff2"],
                    weight: 700,
                    style: "normal"
                },
                {
                    src: ["./src/assets/fonts/Pretendard-Semibold.woff", "./src/assets/fonts/Pretendard-Semibold.woff2"],
                    weight: 600,
                    style: "normal"
                },
                {
                    src: ["./src/assets/fonts/Pretendard-Medium.woff", "./src/assets/fonts/Pretendard-Medium.woff2"],
                    weight: 500,
                    style: "normal"
                },
                {
                    src: ["./src/assets/fonts/Pretendard-Regular.woff", "./src/assets/fonts/Pretendard-Regular.woff2"],
                    weight: 400,
                    style: "normal"
                },
                {
                    src: ["./src/assets/fonts/Pretendard-Light.woff", "./src/assets/fonts/Pretendard-Light.woff2"],
                    weight: 300,
                    style: "normal"
                },
                {
                    src: ["./src/assets/fonts/Pretendard-ExtraLight.woff", "./src/assets/fonts/Pretendard-ExtraLight.woff2"],
                    weight: 200,
                    style: "normal"
                },
                {
                    src: ["./src/assets/fonts/Pretendard-Thin.woff", "./src/assets/fonts/Pretendard-Thin.woff2"],
                    weight: 100,
                    style: "normal"
                },
            ]
        }
    }]
});
