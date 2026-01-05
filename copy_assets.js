import fs from 'fs';
import path from 'path';

const srcDir = path.resolve('public/guizhou-travel');
const destDir = path.resolve('guizhou-travel-vue/public/images');

if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

const files = [
    { src: 'huangxiaoxi_icon.png', dest: 'huangxiaoxi_icon.png' },
    { src: 'qingyanguzhen.jpg', dest: 'yunfeng.jpg' },
    { src: 'dongxiang.jpg', dest: 'basha.jpg' },
    { src: 'wumeng_grassland.jpg', dest: 'jiabang.jpg' },
    { src: 'map_bg.jpg', dest: 'map_bg.jpg' },
    { src: 'banner.jpg', dest: 'banner.jpg' }
];

files.forEach(file => {
    const srcPath = path.join(srcDir, file.src);
    const destPath = path.join(destDir, file.dest);
    try {
        if (fs.existsSync(srcPath)) {
            fs.copyFileSync(srcPath, destPath);
            console.log(`Copied ${file.src} to ${file.dest}`);
        } else {
            console.error(`Source file not found: ${srcPath}`);
        }
    } catch (err) {
        console.error(`Error copying ${file.src}:`, err);
    }
});
