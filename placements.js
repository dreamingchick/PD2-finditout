// Each row places the center of the object's base on the 540 × 720 scene.
// Optional rim height hides part of the object. A depth factor foreshortens objects lying flat.
const teaPlacement = {
  teapot: [133, 521, 52, '원형 탁자 안쪽'],
  spoon: [277, 348, 40, '카운터 왼쪽', undefined, .72],
  honey: [436, 141, 39, '위쪽 선반 가운데'],
  jam: [117, 324, 40, '창가 선반 왼쪽'],
  cookie: [404, 190, 25, '아래 선반 가운데'],
  napkin: [473, 535, 44, '오른쪽 상자 위 체크 천', undefined, .82],
  strainer: [179, 317, 34, '창가 선반 오른쪽'],
  apple: [316, 358, 29, '카운터 가운데'],
  hourglass: [421, 80, 35, '맨 위 선반'],
  lemon: [84, 527, 24, '원형 탁자 왼쪽'],
  'milk-jug': [423, 524, 37, '오른쪽 상자 윗면 왼쪽'],
  ribbon: [349, 189, 30, '아래 선반 왼쪽'],
};

const marketPlacement = {
  purse: [236, 141, 37, '맨 위 선반 가운데'],
  carrot: [288, 323, 41, '판매대 가운데'],
  scales: [410, 320, 50, '판매대 오른쪽'],
  'seed-bag': [202, 195, 36, '가운데 선반 왼쪽'],
  radish: [64, 435, 34, '왼쪽 둥근 탁자'],
  flower: [257, 261, 42, '아래쪽 선반 가운데'],
  pinecone: [191, 493, 33, '왼쪽 위 나무 상자 안', 486],
  'market-yarn': [340, 495, 44, '오른쪽 위 나무 상자 안', 483],
  'market-lantern': [291, 140, 40, '맨 위 선반 오른쪽'],
  corn: [267, 195, 46, '가운데 선반'],
  bell: [204, 262, 32, '아래쪽 선반 왼쪽'],
  toadstool: [175, 318, 29, '판매대 왼쪽'],
  plum: [190, 566, 33, '왼쪽 아래 나무 상자 안', 558],
  cabbage: [329, 617, 40, '나무 상자 앞 돌바닥'],
  rope: [469, 520, 43, '오른쪽 낮은 탁자', undefined, .78],
  parcel: [451, 410, 44, '오른쪽 높은 탁자'],
};

const gardenPlacement = {
  'garden-can': [242, 337, 48, '정원 작업대 가운데'],
  'garden-trowel': [324, 166, 39, '가운데 돌계단 오른쪽', undefined, .76],
  'garden-gloves': [110, 463, 43, '개울 옆 큰 바위 왼쪽'],
  'garden-seeds': [159, 239, 33, '아래 돌계단 가운데'],
  'garden-cactus': [304, 105, 39, '맨 위 돌계단 오른쪽'],
  'garden-hat': [171, 169, 44, '가운데 돌계단 왼쪽'],
  'garden-shears': [338, 336, 45, '작업대 오른쪽', undefined, .76],
  'garden-sprig': [345, 238, 40, '아래 돌계단 오른쪽'],
  'garden-boot': [131, 104, 39, '맨 위 돌계단 왼쪽'],
  'garden-birdhouse': [225, 102, 41, '맨 위 돌계단 가운데'],
  'garden-shell': [67, 169, 33, '가운데 돌계단 왼쪽 끝'],
  'garden-pot': [66, 239, 42, '아래 돌계단 왼쪽'],
  'garden-button': [204, 475, 27, '개울 옆 큰 바위 오른쪽'],
  'garden-twine': [147, 337, 39, '작업대 왼쪽'],
  'garden-rake': [342, 566, 49, '아래쪽 너른 바위 가운데', undefined, .74],
  'garden-ladybug': [446, 558, 31, '아래쪽 너른 바위 오른쪽'],
};

const stopPlacement = {
  'tram-ticket': [228, 371, 40, '표 파는 곳 가운데', undefined, .64],
  'tram-suitcase': [464, 472, 48, '오른쪽 나무 상자 위'],
  'tram-watch': [285, 118, 36, '맨 위 선반 가운데'],
  'tram-scarf': [377, 232, 42, '아래쪽 선반 오른쪽'],
  'tram-binoculars': [183, 173, 43, '가운데 선반 왼쪽'],
  'tram-thermos': [371, 173, 34, '가운데 선반 오른쪽'],
  'tram-whistle': [298, 368, 41, '표 파는 곳 오른쪽'],
  'tram-brooch': [184, 230, 34, '아래쪽 선반 왼쪽'],
  'tram-umbrella': [467, 566, 47, '오른쪽 대기 의자', undefined, .74],
  'tram-satchel': [59, 571, 48, '왼쪽 대기 의자'],
  'tram-star': [186, 116, 39, '맨 위 선반 왼쪽'],
  'tram-map': [282, 229, 43, '아래쪽 선반 가운데'],
  'tram-earmuffs': [157, 376, 40, '표 파는 곳 왼쪽'],
  'tram-envelope': [72, 444, 41, '왼쪽 여행가방 위', undefined, .70],
  'tram-baton': [273, 174, 42, '가운데 선반 가운데'],
  'tram-toy': [369, 116, 47, '맨 위 선반 오른쪽'],
};

function placeSceneObjects(stage, placements, lighting) {
  const unitX = stage.width / 540;
  const unitY = stage.height / 720;
  return {
    ...stage,
    lighting,
    items: stage.items.map(item => {
      const [x, floor, size, area, rim = floor, depth = 1] = placements[item.id];
      const [oldLeft, oldTop, oldRight, oldBottom] = item.hit;
      const oldWidth = oldRight - oldLeft;
      const oldHeight = oldBottom - oldTop;
      const scale = size * unitX / Math.max(oldWidth, oldHeight);
      const width = oldWidth * scale;
      const height = oldHeight * scale * depth;
      const left = x * unitX - width / 2;
      const bottom = floor * unitY;
      const top = bottom - height;
      const right = left + width;
      const visibleBottom = rim * unitY;
      const centerY = (top + visibleBottom) / 2;
      return {
        ...item,
        area,
        spriteBox: [left, top, right, bottom],
        hiddenByRim: (bottom - visibleBottom) / height * 100,
        hit: [left, top, right, visibleBottom],
        zone: [
          Math.max(0, x * unitX - 56 * unitX),
          Math.max(0, centerY - 53 * unitY),
          Math.min(stage.width, x * unitX + 56 * unitX),
          Math.min(stage.height, centerY + 53 * unitY),
        ],
      };
    }),
  };
}
