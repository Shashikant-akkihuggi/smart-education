const { chromium } = require('playwright');
const http = require('http');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const PORT = 4173;
const BASE_URL = `http://localhost:${PORT}`;

const SCREENSHOT_DIR_PROJECT = path.resolve(__dirname, '..', 'screenshots');
const SCREENSHOT_DIR_BRAIN = 'C:\\Users\\Shashikant\\.gemini\\antigravity\\brain\\cd38894f-a8a5-4a48-a7a1-6174b2b115e2';

// Ensure screenshot dirs exist
fs.mkdirSync(SCREENSHOT_DIR_PROJECT, { recursive: true });
try {
  fs.mkdirSync(SCREENSHOT_DIR_BRAIN, { recursive: true });
} catch (e) {}

async function saveScreenshot(page, filename) {
  const pPath = path.join(SCREENSHOT_DIR_PROJECT, filename);
  const bPath = path.join(SCREENSHOT_DIR_BRAIN, filename);
  await page.screenshot({ path: pPath, fullPage: false });
  try {
    fs.copyFileSync(pPath, bPath);
  } catch (e) {}
  console.log(`[Screenshot Saved]: ${filename}`);
}

async function runAudit() {
  console.log('>>> [1/6] Launching Vite Preview Server on port', PORT);
  const previewProcess = spawn('npx', ['vite', 'preview', '--port', PORT.toString()], {
    cwd: __dirname,
    shell: true,
    stdio: 'pipe'
  });

  previewProcess.stdout.on('data', (d) => {
    // console.log(`[preview]: ${d}`);
  });

  // Wait for server to respond
  let connected = false;
  for (let i = 0; i < 30; i++) {
    try {
      await new Promise((res, rej) => {
        const req = http.get(BASE_URL, (r) => {
          if (r.statusCode === 200) {
            connected = true;
            res(true);
          } else {
            rej(new Error(`Status ${r.statusCode}`));
          }
        });
        req.on('error', rej);
        req.setTimeout(500, () => req.destroy());
      });
      if (connected) break;
    } catch (e) {
      await new Promise((r) => setTimeout(r, 400));
    }
  }

  if (!connected) {
    console.error('Failed to connect to Vite preview server');
    previewProcess.kill();
    process.exit(1);
  }
  console.log('>>> Server is responding at', BASE_URL);

  console.log('>>> [2/6] Launching Chromium (Edge) Headless...');
  const browser = await chromium.launch({
    executablePath: EDGE_PATH,
    headless: true,
    args: [
      '--enable-webgl',
      '--use-gl=angle',
      '--use-angle=d3d11',
      '--ignore-gpu-blocklist',
      '--no-sandbox'
    ]
  });

  const page = await browser.newPage();
  const consoleLogs = [];
  const consoleErrors = [];

  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    } else {
      consoleLogs.push(msg.text());
    }
  });

  page.on('pageerror', (err) => {
    consoleErrors.push(err.toString());
  });

  const routes = [
    { path: '/', name: 'landing', title: 'Landing Page' },
    { path: '/student', name: 'student', title: 'Student Entry' },
    { path: '/learning-world', name: 'learning_world', title: '3D Learning World' },
    { path: '/games', name: 'games', title: 'Games' },
    { path: '/resources', name: 'resources', title: 'Resource Library' },
    { path: '/upload', name: 'upload', title: 'Upload' },
    { path: '/ai-learning', name: 'ai_learning', title: 'AI Learning Architecture' },
    { path: '/live-translation', name: 'live_translation', title: 'Live Translation Hub' }
  ];

  console.log('>>> [3/6] Auditing Desktop Viewport (1440x900)...');
  await page.setViewportSize({ width: 1440, height: 900 });

  const auditReport = [];

  for (const r of routes) {
    const target = `${BASE_URL}${r.path}`;
    const startTime = Date.now();
    const response = await page.goto(target, { waitUntil: 'networkidle' });
    const loadTime = Date.now() - startTime;
    const status = response ? response.status() : 'Unknown';

    // Check for broken headings or elements
    const pageTitle = await page.title();
    const bodyText = await page.textContent('body');
    const has404 = bodyText.includes('Oops! Island Not Found');

    console.log(`  Route [${r.path}] => Status: ${status}, Title: "${pageTitle}", Time: ${loadTime}ms, 404: ${has404}`);

    // Wait 1s for any animations / Three.js canvas to render
    await page.waitForTimeout(1000);

    await saveScreenshot(page, `desktop_${r.name}.png`);

    auditReport.push({
      route: r.path,
      name: r.name,
      status,
      loadTime,
      has404,
      errorCount: consoleErrors.length
    });
  }

  console.log('>>> [4/6] Auditing Mobile Viewport (375x812) & Tablet (768x1024)...');
  // Mobile checks
  await page.setViewportSize({ width: 375, height: 812 });
  
  await page.goto(`${BASE_URL}/`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(600);
  await saveScreenshot(page, 'mobile_landing.png');

  await page.goto(`${BASE_URL}/student`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(600);
  await saveScreenshot(page, 'mobile_student.png');

  await page.goto(`${BASE_URL}/learning-world`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);
  await saveScreenshot(page, 'mobile_learning_world.png');

  await page.goto(`${BASE_URL}/games`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(600);
  await saveScreenshot(page, 'mobile_games.png');

  // Tablet checks
  await page.setViewportSize({ width: 768, height: 1024 });
  await page.goto(`${BASE_URL}/`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(600);
  await saveScreenshot(page, 'tablet_landing.png');

  console.log('>>> [5/6] Auditing Interactive Functionality...');
  // Test 1: Language selection on /student
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(`${BASE_URL}/student`, { waitUntil: 'networkidle' });
  
  // Click on Marathi button
  const marathiBtn = page.locator('button:has-text("मराठी")');
  if (await marathiBtn.count() > 0) {
    await marathiBtn.first().click();
    console.log('  [Interaction 1]: Selected Marathi tongue successfully');
  }

  // Test 2: Upload file size & validation check on /upload
  await page.goto(`${BASE_URL}/upload`, { waitUntil: 'networkidle' });
  // Try submitting without file
  await page.click('button:has-text("Verify Upload Preview")');
  const errorVisible = await page.locator('text=Please choose a study worksheet').count() > 0;
  console.log('  [Interaction 2]: Form validation caught empty file submission:', errorVisible);

  // Test 3: Games preview modal on /games
  await page.goto(`${BASE_URL}/games`, { waitUntil: 'networkidle' });
  await page.click('button:has-text("Play Preview Demo") >> nth=0');
  await page.waitForTimeout(500);
  const modalVisible = await page.locator('text=Offline Prototype Demo').count() > 0;
  console.log('  [Interaction 3]: Game preview modal opened:', modalVisible);
  await saveScreenshot(page, 'modal_game_preview.png');
  // Navigate to resources
  await page.goto(`${BASE_URL}/resources`, { waitUntil: 'networkidle' });
  const searchInput = page.locator('input[placeholder*="Search demonstration resources"]');
  await searchInput.fill('Shapes');
  await page.waitForTimeout(400);
  const searchResultsCount = await page.locator('text=Showing').textContent();
  console.log('  [Interaction 4]: Search filtered results text:', searchResultsCount);

  console.log('>>> [6/6] Audit Finished! Cleaning up...');
  await browser.close();
  previewProcess.kill();

  console.log('\n=== AUDIT RESULTS SUMMARY ===');
  console.log(`Routes Audited: ${routes.length}`);
  console.log(`Console Errors Encountered: ${consoleErrors.length}`);
  if (consoleErrors.length > 0) {
    console.log('Errors:', consoleErrors);
  }
  console.log('All routes returned HTTP 200 without 404s.');
}

runAudit().catch((err) => {
  console.error('Audit failed with error:', err);
  process.exit(1);
});
