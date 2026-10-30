const {chromium}=require('playwright');
(async()=>{
const browser=await chromium.launch({executablePath:process.env.CHROMIUM_PATH || '/usr/bin/chromium',headless:true,args:['--no-sandbox']});
for(const width of [1440,768,390,320]){
 const page=await browser.newPage({viewport:{width,height:900}});const errors=[];page.on('pageerror',e=>errors.push(e.message));page.on('response',r=>{if(r.status()>=400)errors.push(r.status()+' '+r.url())});
 await page.goto(process.env.SITE_TEST_URL || 'http://127.0.0.1:4173');await page.waitForTimeout(1800);
 await page.screenshot({path:`/tmp/leal-${width}.png`});
 console.log('layout',width,await page.evaluate(()=>({vw:innerWidth,sw:document.documentElement.scrollWidth,gsap:!!window.gsap,triggers:ScrollTrigger.getAll().length,sections:document.querySelectorAll('main section').length})));
 if(await page.locator('.brand-symbol').first().evaluate(im=>!im.complete||im.naturalWidth===0))throw Error('Logo failed to load');
 // Scroll movie both ways and inspect actual decoded seek time.
 await page.evaluate(()=>{document.documentElement.style.scrollBehavior='auto'});
 const bounds=await page.locator('#essencia').evaluate(el=>({top:el.offsetTop,range:el.offsetHeight-innerHeight}));
 await page.evaluate(y=>scrollTo(0,y),bounds.top);await page.waitForFunction(()=>document.querySelector('#smile-video').readyState>=2,{},{timeout:30000});
 const times=[];
 for(const progress of [.15,.8,.35]){
  await page.evaluate(y=>scrollTo(0,y),bounds.top+bounds.range*progress);await page.waitForTimeout(1400);
  times.push(await page.locator('#smile-video').evaluate(v=>({time:v.currentTime,duration:v.duration,seeking:v.seeking,ready:v.readyState})));
 }
 console.log('video',width,times);
 const chosen=await page.locator('#smile-video').evaluate(v=>v.currentSrc);if(width<701&&!chosen.includes('-mobile.mp4'))throw Error('Mobile rendition not selected');
 await page.locator('.smile-motion-toggle').click();const frozen=await page.locator('#smile-video').evaluate(v=>v.currentTime);await page.evaluate(y=>scrollTo(0,y),bounds.top+bounds.range*.6);await page.waitForTimeout(800);if(Math.abs(await page.locator('#smile-video').evaluate(v=>v.currentTime)-frozen)>.04)throw Error('Video pause failed');await page.locator('.smile-motion-toggle').click();await page.waitForTimeout(800);
 if(!(times[1].time>times[0].time+3&&times[2].time<times[1].time-3))throw Error('Video scroll sync failed');
 await page.screenshot({path:`/tmp/leal-video-${width}.png`});
 for(let i=1;i<4;i++){await page.locator(`[data-service="${i}"]`).click();await page.waitForTimeout(700);if(await page.locator(`#service-panel-${i}`).isHidden())throw Error('Accordion failed');}
 await page.locator('[data-service="0"]').click();await page.locator('.radio-next').click();await page.locator('.radio-expand').click();await page.waitForTimeout(400);if(!await page.locator('#showcase-lightbox').evaluate(d=>d.open))throw Error('Viewer failed');await page.keyboard.press('ArrowRight');await page.keyboard.press('Escape');
 await page.locator('.patient-stage').scrollIntoViewIfNeeded();await page.waitForTimeout(700);await page.locator('.patient-motion').click();await page.locator('.patient-next').click();await page.waitForTimeout(1300);await page.locator('.patient-card.is-active').click();await page.waitForTimeout(300);await page.keyboard.press('Escape');
 await page.locator('.gallery-card').first().click();await page.keyboard.press('ArrowRight');await page.keyboard.press('Escape');
 if(width<700){await page.evaluate(()=>scrollTo(0,0));await page.locator('.menu-toggle').click();if(await page.locator('#mobile-nav').isHidden())throw Error('Mobile menu failed');await page.keyboard.press('Escape');}
 console.log('errors',width,errors);if(errors.length)throw Error('Browser errors');await page.close();
}
const p=await browser.newPage({reducedMotion:'reduce',viewport:{width:390,height:844}});await p.goto(process.env.SITE_TEST_URL || 'http://127.0.0.1:4173');await p.waitForTimeout(800);if(await p.locator('#smile-video').getAttribute('src'))throw Error('Reduced motion loaded video');console.log('reduced',await p.locator('#smile-video').evaluate(v=>({src:v.getAttribute('src'),scene:v.closest('section').classList.contains('is-scroll-scene')})));const request=await p.request.get((process.env.SITE_TEST_URL || 'http://127.0.0.1:4173')+'/assets/daniely-scroll-mobile.mp4',{headers:{Range:'bytes=0-1023'}});if(request.status()!==206||(await request.body()).length!==1024)throw Error('Video range failed');for(const path of ['/.git/config','/verify.mjs','/Conte%C3%BAdo%20Novo/antes%20e%20depois%20paciente.png']){const r=await p.request.get((process.env.SITE_TEST_URL || 'http://127.0.0.1:4173')+path);if(r.status()!==403)throw Error('Protected material exposed: '+path);}await browser.close();
})().catch(e=>{console.error(e);process.exit(1)});
