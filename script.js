/* ===== AshMart - Premium E-Commerce ===== */

(function () {
  'use strict';

  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];

  /* ===== 50+ PRODUCTS ===== */
  const products = [
    { id:1, title:'Wireless Noise-Cancelling Headphones', category:'electronics', price:29999, originalPrice:37999, rating:4.8, reviews:2341, badge:'sale', badgeText:'-22%', image:'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80', images:['https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80','https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&q=80','https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=600&q=80'], description:'Premium ANC headphones with 30hr battery, memory foam ear cushions, and Hi-Res audio.', colors:['#1a1a2e','#e8e8e8'], sizes:['Standard'], featured:true },
    { id:2, title:'Smart Watch Ultra Pro', category:'electronics', price:49999, originalPrice:69999, rating:4.9, reviews:1876, badge:'sale', badgeText:'-25%', image:'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80', images:['https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80','https://images.unsplash.com/photo-1546868871-af0de0ae72f0?w=600&q=80','https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600&q=80'], description:'Advanced smartwatch with OLED display, health monitoring, GPS, 7-day battery.', colors:['#1a1a2e','#2d3436','#f5f5f5'], sizes:['42mm','46mm'], featured:true },
    { id:3, title:'Premium Leather Jacket', category:'fashion', price:24999, originalPrice:34999, rating:4.7, reviews:1543, badge:'sale', badgeText:'-25%', image:'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&q=80', images:['https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80','https://images.unsplash.com/photo-1520975954732-35dd22299614?w=600&q=80','https://images.unsplash.com/photo-1544923246-77307dd270b4?w=600&q=80'], description:'Handcrafted genuine leather jacket, silk lining, YKK zippers, modern slim fit.', colors:['#2d3436','#6b4226'], sizes:['S','M','L','XL','XXL'], featured:true },
    { id:4, title:'Minimalist Running Shoes', category:'sports', price:15999, originalPrice:19999, rating:4.6, reviews:3210, badge:'popular', badgeText:'Popular', image:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80', images:['https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80','https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&q=80','https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&q=80'], description:'Lightweight running shoes with responsive cushioning, breathable mesh, carbon outsole.', colors:['#e8e8e8','#1a1a2e','#c0392b'], sizes:['7','8','9','10','11','12'], featured:true },
    { id:5, title:'Luxury Chronograph Watch', category:'accessories', price:109999, originalPrice:149999, rating:4.9, reviews:987, badge:'sale', badgeText:'-28%', image:'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&q=80', images:['https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&q=80','https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=600&q=80','https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600&q=80'], description:'Swiss-made automatic chronograph, sapphire crystal, 42mm steel case, leather strap.', colors:['#1a1a2e','#2d3436','#8B4513'], sizes:['Standard'], featured:true },
    { id:6, title:'Premium Skincare Set', category:'beauty', price:10999, originalPrice:14999, rating:4.7, reviews:4532, badge:'sale', badgeText:'-28%', image:'https://images.unsplash.com/photo-1570194065650-d99fb4b38f34?w=400&q=80', images:['https://images.unsplash.com/photo-1570194065650-d99fb4b38f34?w=600&q=80','https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&q=80','https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=80'], description:'Complete skincare routine: Vitamin C serum, hyaluronic acid moisturizer, retinol cream.', colors:['#f5f5f5','#ffe4e6'], sizes:['30ml','50ml'], featured:true },
    { id:7, title:'Designer Sunglasses', category:'accessories', price:20999, originalPrice:29999, rating:4.5, reviews:1234, badge:'sale', badgeText:'-29%', image:'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&q=80', images:['https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&q=80','https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&q=80','https://images.unsplash.com/photo-1508296695146-257a814070b4?w=600&q=80'], description:'Acetate sunglasses, polarized UV400 lenses, gold-plated hinges, hard case.', colors:['#1a1a2e','#8B4513'], sizes:['Standard'], featured:false },
    { id:8, title:'Wireless Earbuds Pro', category:'electronics', price:16999, originalPrice:23999, rating:4.8, reviews:5678, badge:'new', badgeText:'New', image:'https://images.unsplash.com/photo-1590658268037-6bf12f032f55?w=400&q=80', images:['https://images.unsplash.com/photo-1590658268037-6bf12f032f55?w=600&q=80','https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=600&q=80','https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=600&q=80'], description:'True wireless earbuds, adaptive ANC, spatial audio, IPX5, 24hr battery.', colors:['#f5f5f5','#1a1a2e'], sizes:['Standard'], featured:true },
    { id:9, title:'Cashmere Blend Sweater', category:'fashion', price:14999, originalPrice:20999, rating:4.6, reviews:2109, badge:'sale', badgeText:'-28%', image:'https://images.unsplash.com/photo-1434389677669-e08b4cda3a0e?w=400&q=80', images:['https://images.unsplash.com/photo-1434389677669-e08b4cda3a0e?w=600&q=80','https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=80','https://images.unsplash.com/photo-1556306535-0f09a537f0a3?w=600&q=80'], description:'Ultra-soft cashmere blend, relaxed fit, ribbed cuffs, timeless design.', colors:['#8B4513','#2d3436','#e8e8e8'], sizes:['S','M','L','XL'], featured:true },
    { id:10, title:'Leather Crossbody Bag', category:'accessories', price:18999, originalPrice:24999, rating:4.7, reviews:1876, badge:'sale', badgeText:'-24%', image:'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&q=80', images:['https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80','https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=600&q=80','https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&q=80'], description:'Italian leather crossbody, adjustable strap, multiple compartments, gold hardware.', colors:['#2d3436','#8B4513'], sizes:['Standard'], featured:true },
    { id:11, title:'Smart Home Speaker', category:'electronics', price:20999, originalPrice:27999, rating:4.5, reviews:3654, badge:'new', badgeText:'New', image:'https://images.unsplash.com/photo-1589003077984-894e133dabab?w=400&q=80', images:['https://images.unsplash.com/photo-1589003077984-894e133dabab?w=600&q=80','https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=600&q=80','https://images.unsplash.com/photo-1545454675-3531f5432d4d?w=600&q=80'], description:'Premium smart speaker, 360 sound, voice assistant, multi-room audio.', colors:['#1a1a2e','#f5f5f5'], sizes:['Standard'], featured:false },
    { id:12, title:'Performance Sneakers', category:'sports', price:13999, originalPrice:16999, rating:4.8, reviews:4321, badge:'best-seller', badgeText:'Best Seller', image:'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&q=80', images:['https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&q=80','https://images.unsplash.com/photo-1552346154-21d32810aba3?w=600&q=80','https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&q=80'], description:'Engineered with Flyknit upper, React foam cushioning, rubber outsole.', colors:['#e8e8e8','#1a1a2e','#c0392b'], sizes:['7','8','9','10','11','12'], featured:true },
    { id:13, title:'4K OLED Smart TV 55"', category:'electronics', price:124999, originalPrice:159999, rating:4.7, reviews:1287, badge:'sale', badgeText:'-21%', image:'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&q=80', images:['https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600&q=80','https://images.unsplash.com/photo-1461151304267-38535e780c79?w=600&q=80','https://images.unsplash.com/photo-1470290378692-e3a972c9ec4a?w=600&q=80'], description:'55" OLED display, Dolby Vision, Atmos, smart platform, sleek design.', colors:['#1a1a2e'], sizes:['55"','65"'], featured:false },
    { id:14, title:'Designer Wool Blazer', category:'fashion', price:34999, originalPrice:46999, rating:4.5, reviews:876, badge:'sale', badgeText:'-27%', image:'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=400&q=80', images:['https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=600&q=80','https://images.unsplash.com/photo-1603252109303-2751441dd157?w=600&q=80','https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&q=80'], description:'Italian wool blazer, tailored fit, silk lining, horn buttons.', colors:['#2d3436','#1a1a2e','#8B4513'], sizes:['S','M','L','XL'], featured:true },
    { id:15, title:'Professional DSLR Camera', category:'electronics', price:209999, originalPrice:249999, rating:4.9, reviews:654, badge:'sale', badgeText:'-17%', image:'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&q=80', images:['https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&q=80','https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=600&q=80','https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?w=600&q=80'], description:'Full-frame mirrorless, 45MP, 4K video, IBIS, advanced autofocus.', colors:['#1a1a2e'], sizes:['Body Only','With Kit Lens'], featured:false },
    { id:16, title:'Luxury Scented Candle Set', category:'home', price:6999, originalPrice:9499, rating:4.4, reviews:3210, badge:'sale', badgeText:'-27%', image:'https://images.unsplash.com/photo-1603006905003-be475563bc59?w=400&q=80', images:['https://images.unsplash.com/photo-1603006905003-be475563bc59?w=600&q=80','https://images.unsplash.com/photo-1602028915045-92f12106c7a1?w=600&q=80','https://images.unsplash.com/photo-1603006904598-9d86f773500b?w=600&q=80'], description:'Set of 3 hand-poured soy wax candles, premium fragrances, 60hr burn time.', colors:['#f5f5f5','#ffe4e6'], sizes:['Standard'], featured:true },
    { id:17, title:'Mechanical Gaming Keyboard', category:'electronics', price:15999, originalPrice:20999, rating:4.6, reviews:2890, badge:'trending', badgeText:'Trending', image:'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&q=80', images:['https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&q=80','https://images.unsplash.com/photo-1586816879360-004f5b8c44e0?w=600&q=80','https://images.unsplash.com/photo-1595225476474-87563907a212?w=600&q=80'], description:'RGB mechanical keyboard, hot-swappable switches, aluminum frame, PBT keycaps.', colors:['#1a1a2e','#f5f5f5'], sizes:['Full','TKL'], featured:false },
    { id:18, title:'Organic Cotton Hoodie', category:'fashion', price:7999, originalPrice:10999, rating:4.5, reviews:1987, badge:'sale', badgeText:'-31%', image:'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&q=80', images:['https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&q=80','https://images.unsplash.com/photo-1578768079052-aa76e52ff62e?w=600&q=80','https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80'], description:'Organic cotton hoodie, brushed fleece interior, relaxed fit, sustainable.', colors:['#2d3436','#e8e8e8','#1a1a2e'], sizes:['S','M','L','XL','XXL'], featured:true },
    { id:19, title:'Stainless Steel Water Bottle', category:'accessories', price:3499, originalPrice:4699, rating:4.7, reviews:5432, badge:'popular', badgeText:'Popular', image:'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80', images:['https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&q=80','https://images.unsplash.com/photo-1570831739435-6601aa3fa4fb?w=600&q=80','https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=600&q=80'], description:'Double-wall vacuum insulated, 24hr cold, 12hr hot, BPA-free, 750ml.', colors:['#1a1a2e','#f5f5f5','#c0392b'], sizes:['500ml','750ml','1L'], featured:false },
    { id:20, title:'Electric Skateboard', category:'sports', price:49999, originalPrice:69999, rating:4.4, reviews:765, badge:'sale', badgeText:'-25%', image:'https://images.unsplash.com/photo-1572756317709-fe9d15d298c5?w=400&q=80', images:['https://images.unsplash.com/photo-1572756317709-fe9d15d298c5?w=600&q=80','https://images.unsplash.com/photo-1572756317709-fe9d15d298c6?w=600&q=80','https://images.unsplash.com/photo-1572756317709-fe9d15d298c7?w=600&q=80'], description:'Electric longboard, 25mph top speed, 20mi range, regenerative braking.', colors:['#1a1a2e'], sizes:['Standard'], featured:false },
    { id:21, title:'Silk Pajama Set', category:'fashion', price:12999, originalPrice:16999, rating:4.6, reviews:1234, badge:'sale', badgeText:'-25%', image:'https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?w=400&q=80', images:['https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?w=600&q=80','https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d3?w=600&q=80','https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d4?w=600&q=80'], description:'Mulberry silk pajamas, button-down top, elastic waist pants, luxury gift box.', colors:['#1a1a2e','#8B4513','#f5f5f5'], sizes:['S','M','L','XL'], featured:false },
    { id:22, title:'Robot Vacuum Cleaner', category:'home', price:42999, originalPrice:59999, rating:4.5, reviews:2109, badge:'sale', badgeText:'-29%', image:'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&q=80', images:['https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80','https://images.unsplash.com/photo-1558618666-fcd25c85f82f?w=600&q=80','https://images.unsplash.com/photo-1558618666-fcd25c85f82g?w=600&q=80'], description:'Smart robot vacuum, LiDAR navigation, 2500Pa suction, auto-empty base.', colors:['#1a1a2e','#f5f5f5'], sizes:['Standard'], featured:false },
    { id:23, title:'Perfume Collection EDP', category:'beauty', price:15999, originalPrice:22999, rating:4.8, reviews:1876, badge:'sale', badgeText:'-27%', image:'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&q=80', images:['https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&q=80','https://images.unsplash.com/photo-1541643600914-78b084683602?w=600&q=80','https://images.unsplash.com/photo-1541643600914-78b084683603?w=600&q=80'], description:'Luxury EDP, woody floral notes, long-lasting 8hr+, premium crystal bottle.', colors:['#f5f5f5','#ffe4e6'], sizes:['50ml','100ml'], featured:true },
    { id:24, title:'Yoga Mat Premium', category:'sports', price:5999, originalPrice:7999, rating:4.6, reviews:3456, badge:'sale', badgeText:'-22%', image:'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&q=80', images:['https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=600&q=80','https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7g?w=600&q=80','https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7h?w=600&q=80'], description:'Extra thick 6mm, eco-friendly TPE, non-slip, alignment lines, carrying strap.', colors:['#1a1a2e','#c0392b','#059669'], sizes:['Standard','Extra Long'], featured:false },
    { id:25, title:'Leather Office Chair', category:'home', price:74999, originalPrice:99999, rating:4.7, reviews:987, badge:'sale', badgeText:'-25%', image:'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=400&q=80', images:['https://images.unsplash.com/photo-1592078615290-033ee584e267?w=600&q=80','https://images.unsplash.com/photo-1592078615290-033ee584e268?w=600&q=80','https://images.unsplash.com/photo-1592078615290-033ee584e269?w=600&q=80'], description:'Ergonomic leather chair, lumbar support, adjustable armrests, 5-year warranty.', colors:['#1a1a2e','#2d3436'], sizes:['Standard'], featured:false },
    { id:26, title:'Portable Bluetooth Speaker', category:'electronics', price:12999, originalPrice:16999, rating:4.5, reviews:4567, badge:'popular', badgeText:'Popular', image:'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&q=80', images:['https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&q=80','https://images.unsplash.com/photo-1608043152269-423dbba4e7e2?w=600&q=80','https://images.unsplash.com/photo-1608043152269-423dbba4e7e3?w=600&q=80'], description:'Portable speaker, 360 sound, IPX7, 20hr battery, party mode.', colors:['#1a1a2e','#c0392b','#059669'], sizes:['Standard'], featured:false },
    { id:27, title:'Cashmere Scarf', category:'fashion', price:10999, originalPrice:14999, rating:4.4, reviews:1678, badge:'sale', badgeText:'-28%', image:'https://images.unsplash.com/photo-1520903920243-00d872a2d2c1?w=400&q=80', images:['https://images.unsplash.com/photo-1520903920243-00d872a2d2c1?w=600&q=80','https://images.unsplash.com/photo-1520903920243-00d872a2d2c2?w=600&q=80','https://images.unsplash.com/photo-1520903920243-00d872a2d2c3?w=600&q=80'], description:'Pure cashmere scarf, fringed edges, ultra-soft, made in Italy.', colors:['#8B4513','#2d3436','#e8e8e8','#c0392b'], sizes:['Standard'], featured:false },
    { id:28, title:'Gaming Console Pro', category:'electronics', price:59999, originalPrice:74999, rating:4.8, reviews:3456, badge:'trending', badgeText:'Trending', image:'https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=400&q=80', images:['https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=600&q=80','https://images.unsplash.com/photo-1486401899868-0e435ed85129?w=600&q=80','https://images.unsplash.com/photo-1486401899868-0e435ed85130?w=600&q=80'], description:'Next-gen gaming console, 4K/120fps, 1TB SSD, ray tracing, wireless controller.', colors:['#1a1a2e','#f5f5f5'], sizes:['Standard','Digital'], featured:false },
    { id:29, title:'Aromatherapy Diffuser', category:'home', price:4499, originalPrice:5999, rating:4.3, reviews:2345, badge:'sale', badgeText:'-29%', image:'https://images.unsplash.com/photo-1602874801007-bd36e7e38a10?w=400&q=80', images:['https://images.unsplash.com/photo-1602874801007-bd36e7e38a10?w=600&q=80','https://images.unsplash.com/photo-1602874801007-bd36e7e38a11?w=600&q=80','https://images.unsplash.com/photo-1602874801007-bd36e7e38a12?w=600&q=80'], description:'Ultrasonic diffuser, 200ml tank, LED lights, auto shut-off, whisper quiet.', colors:['#f5f5f5','#1a1a2e'], sizes:['Standard'], featured:false },
    { id:30, title:'Luxury Bedding Set', category:'home', price:24999, originalPrice:34999, rating:4.7, reviews:1543, badge:'sale', badgeText:'-25%', image:'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&q=80', images:['https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80','https://images.unsplash.com/photo-1631049307264-da0ec9d70305?w=600&q=80','https://images.unsplash.com/photo-1631049307264-da0ec9d70306?w=600&q=80'], description:'Egyptian cotton 1000TC, duvet cover set, sateen weave, OEKO-TEX certified.', colors:['#f5f5f5','#e8e8e8','#1a1a2e'], sizes:['Queen','King','California King'], featured:false },
    { id:31, title:'Diamond Stud Earrings', category:'accessories', price:249999, originalPrice:349999, rating:4.9, reviews:432, badge:'sale', badgeText:'-25%', image:'https://images.unsplash.com/photo-1515562141589-19f64e22c031?w=400&q=80', images:['https://images.unsplash.com/photo-1515562141589-19f64e22c031?w=600&q=80','https://images.unsplash.com/photo-1515562141589-19f64e22c032?w=600&q=80','https://images.unsplash.com/photo-1515562141589-19f64e22c033?w=600&q=80'], description:'1ct total weight diamond studs, 14K white gold, GIA certified.', colors:['#f5f5f5'], sizes:['Standard'], featured:false },
    { id:32, title:'Vitamins & Supplements Set', category:'beauty', price:4999, originalPrice:6999, rating:4.4, reviews:5678, badge:'sale', badgeText:'-25%', image:'https://images.unsplash.com/photo-1550572017-edd951b55104?w=400&q=80', images:['https://images.unsplash.com/photo-1550572017-edd951b55104?w=600&q=80','https://images.unsplash.com/photo-1550572017-edd951b55105?w=600&q=80','https://images.unsplash.com/photo-1550572017-edd951b55106?w=600&q=80'], description:'Daily wellness pack: Vitamin D3, Omega-3, Probiotics, Zinc, 30-day supply.', colors:['#f5f5f5'], sizes:['30 Days','60 Days'], featured:false },
    { id:33, title:'Leather Wallet', category:'accessories', price:7999, originalPrice:10999, rating:4.6, reviews:2987, badge:'sale', badgeText:'-31%', image:'https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&q=80', images:['https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&q=80','https://images.unsplash.com/photo-1627123424574-724758594e94?w=600&q=80','https://images.unsplash.com/photo-1627123424574-724758594e95?w=600&q=80'], description:'Full-grain leather wallet, RFID blocking, 6 card slots, slim profile.', colors:['#2d3436','#8B4513','#1a1a2e'], sizes:['Standard'], featured:false },
    { id:34, title:'Air Purifier', category:'home', price:29999, originalPrice:37999, rating:4.6, reviews:1876, badge:'sale', badgeText:'-22%', image:'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&q=80', images:['https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80','https://images.unsplash.com/photo-1585771724684-38269d6639fe?w=600&q=80','https://images.unsplash.com/photo-1585771724684-38269d6639ff?w=600&q=80'], description:'HEPA filter, covers 500sqft, smart sensor, quiet mode, energy star.', colors:['#f5f5f5','#1a1a2e'], sizes:['Standard'], featured:false },
    { id:35, title:'Fitness Tracker Band', category:'electronics', price:8499, originalPrice:10999, rating:4.5, reviews:6543, badge:'popular', badgeText:'Popular', image:'https://images.unsplash.com/photo-1557935728-e6d1eaabe558?w=400&q=80', images:['https://images.unsplash.com/photo-1557935728-e6d1eaabe558?w=600&q=80','https://images.unsplash.com/photo-1557935728-e6d1eaabe559?w=600&q=80','https://images.unsplash.com/photo-1557935728-e6d1eaabe560?w=600&q=80'], description:'Fitness tracker, heart rate, SpO2, sleep tracking, 14-day battery.', colors:['#1a1a2e','#c0392b','#059669'], sizes:['Standard'], featured:false },
    { id:36, title:'Designer High Heels', category:'fashion', price:20999, originalPrice:29999, rating:4.5, reviews:1234, badge:'sale', badgeText:'-29%', image:'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&q=80', images:['https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&q=80','https://images.unsplash.com/photo-1543163521-1bf539c55dd3?w=600&q=80','https://images.unsplash.com/photo-1543163521-1bf539c55dd4?w=600&q=80'], description:'Stiletto heels, genuine leather, padded insole, 4" heel, elegant design.', colors:['#1a1a2e','#c0392b','#f5f5f5'], sizes:['6','7','8','9','10'], featured:false },
    { id:37, title:'Smart Thermostat', category:'home', price:16999, originalPrice:20999, rating:4.4, reviews:2109, badge:'sale', badgeText:'-20%', image:'https://images.unsplash.com/photo-1567925086516-7c2d3b2c4b0f?w=400&q=80', images:['https://images.unsplash.com/photo-1567925086516-7c2d3b2c4b0f?w=600&q=80','https://images.unsplash.com/photo-1567925086516-7c2d3b2c4b0g?w=600&q=80','https://images.unsplash.com/photo-1567925086516-7c2d3b2c4b0h?w=600&q=80'], description:'Smart thermostat, learning algorithm, energy saving, app control.', colors:['#f5f5f5','#1a1a2e'], sizes:['Standard'], featured:false },
    { id:38, title:'Bamboo Cutting Board Set', category:'home', price:4499, originalPrice:5999, rating:4.3, reviews:4321, badge:'sale', badgeText:'-29%', image:'https://images.unsplash.com/photo-1594226801341-41427b4e5c6a?w=400&q=80', images:['https://images.unsplash.com/photo-1594226801341-41427b4e5c6a?w=600&q=80','https://images.unsplash.com/photo-1594226801341-41427b4e5c6b?w=600&q=80','https://images.unsplash.com/photo-1594226801341-41427b4e5c6c?w=600&q=80'], description:'Set of 3 organic bamboo boards, juice groove, easy grip, knife-friendly.', colors:['#8B4513'], sizes:['Standard'], featured:false },
    { id:39, title:'Resistance Bands Set', category:'sports', price:2999, originalPrice:4499, rating:4.5, reviews:6543, badge:'sale', badgeText:'-30%', image:'https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=400&q=80', images:['https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=600&q=80','https://images.unsplash.com/photo-1598289431512-b97b0917affd?w=600&q=80','https://images.unsplash.com/photo-1598289431512-b97b0917affe?w=600&q=80'], description:'Set of 5 resistance bands, different levels, carry bag, exercise guide.', colors:['#1a1a2e'], sizes:['Standard'], featured:false },
    { id:40, title:'Essential Oil Collection', category:'beauty', price:3799, originalPrice:5499, rating:4.4, reviews:3456, badge:'sale', badgeText:'-31%', image:'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&q=80', images:['https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600&q=80','https://images.unsplash.com/photo-1608571423902-eed4a5ad8109?w=600&q=80','https://images.unsplash.com/photo-1608571423902-eed4a5ad8110?w=600&q=80'], description:'Set of 6 pure essential oils, lavender, peppermint, tea tree, eucalyptus, etc.', colors:['#f5f5f5'], sizes:['10ml','30ml'], featured:false },
    { id:41, title:'Wireless Charging Pad', category:'electronics', price:4499, originalPrice:5999, rating:4.3, reviews:7654, badge:'sale', badgeText:'-29%', image:'https://images.unsplash.com/photo-1586816879360-004f5b8c44e0?w=400&q=80', images:['https://images.unsplash.com/photo-1586816879360-004f5b8c44e0?w=600&q=80','https://images.unsplash.com/photo-1586816879360-004f5b8c44e1?w=600&q=80','https://images.unsplash.com/photo-1586816879360-004f5b8c44e2?w=600&q=80'], description:'Fast wireless charger, 15W, LED indicator, slim design, compatible with all Qi devices.', colors:['#1a1a2e','#f5f5f5'], sizes:['Standard'], featured:false },
    { id:42, title:'Winter Down Jacket', category:'fashion', price:29999, originalPrice:42999, rating:4.7, reviews:1876, badge:'sale', badgeText:'-30%', image:'https://images.unsplash.com/photo-1544923246-77307dd270b4?w=400&q=80', images:['https://images.unsplash.com/photo-1544923246-77307dd270b4?w=600&q=80','https://images.unsplash.com/photo-1544923246-77307dd270b5?w=600&q=80','https://images.unsplash.com/photo-1544923246-77307dd270b6?w=600&q=80'], description:'800-fill down jacket, waterproof shell, removable hood, packable.', colors:['#1a1a2e','#2d3436','#c0392b'], sizes:['S','M','L','XL','XXL'], featured:true },
    { id:43, title:'Smart Coffee Maker', category:'home', price:16999, originalPrice:22999, rating:4.5, reviews:1234, badge:'sale', badgeText:'-26%', image:'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=400&q=80', images:['https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=600&q=80','https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e7?w=600&q=80','https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e8?w=600&q=80'], description:'Smart coffee maker, app scheduled brewing, thermal carafe, 12-cup.', colors:['#1a1a2e','#f5f5f5'], sizes:['Standard'], featured:false },
    { id:44, title:'Luxury Bathrobe', category:'beauty', price:9999, originalPrice:13999, rating:4.6, reviews:2109, badge:'sale', badgeText:'-29%', image:'https://images.unsplash.com/photo-1621892570963-87e2b99cc1d3?w=400&q=80', images:['https://images.unsplash.com/photo-1621892570963-87e2b99cc1d3?w=600&q=80','https://images.unsplash.com/photo-1621892570963-87e2b99cc1d4?w=600&q=80','https://images.unsplash.com/photo-1621892570963-87e2b99cc1d5?w=600&q=80'], description:'Turkish cotton bathrobe, 100% organic, 600gsm, shawl collar, knee-length.', colors:['#f5f5f5','#e8e8e8','#1a1a2e'], sizes:['S','M','L','XL'], featured:false },
    { id:45, title:'Drone 4K Camera', category:'electronics', price:69999, originalPrice:84999, rating:4.6, reviews:876, badge:'trending', badgeText:'Trending', image:'https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?w=400&q=80', images:['https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?w=600&q=80','https://images.unsplash.com/photo-1507582020474-9a35b7d455da?w=600&q=80','https://images.unsplash.com/photo-1507582020474-9a35b7d455db?w=600&q=80'], description:'4K HDR drone, 3-axis gimbal, 30min flight, obstacle avoidance, foldable.', colors:['#1a1a2e'], sizes:['Standard'], featured:false },
    { id:46, title:'Hair Dryer Professional', category:'beauty', price:12999, originalPrice:16999, rating:4.5, reviews:3210, badge:'sale', badgeText:'-25%', image:'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&q=80', images:['https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80','https://images.unsplash.com/photo-1522337360788-8b13dee7a37f?w=600&q=80','https://images.unsplash.com/photo-1522337360788-8b13dee7a380?w=600&q=80'], description:'Ionic hair dryer, 1875W, diffuser, concentrator, cool shot, lightweight.', colors:['#f5f5f5','#1a1a2e'], sizes:['Standard'], featured:false },
    { id:47, title:'Backpack Laptop 15"', category:'accessories', price:8499, originalPrice:11999, rating:4.5, reviews:4321, badge:'sale', badgeText:'-29%', image:'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80', images:['https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80','https://images.unsplash.com/photo-1553062407-98eeb64c6a63?w=600&q=80','https://images.unsplash.com/photo-1553062407-98eeb64c6a64?w=600&q=80'], description:'Waterproof laptop backpack, padded 15" compartment, USB port, anti-theft.', colors:['#1a1a2e','#2d3436'], sizes:['Standard'], featured:false },
    { id:48, title:'Treadmill Smart Home', category:'sports', price:109999, originalPrice:139999, rating:4.6, reviews:654, badge:'sale', badgeText:'-24%', image:'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=400&q=80', images:['https://images.unsplash.com/photo-1576678927484-cc907957088c?w=600&q=80','https://images.unsplash.com/photo-1576678927484-cc907957088d?w=600&q=80','https://images.unsplash.com/photo-1576678927484-cc907957088e?w=600&q=80'], description:'Foldable treadmill, 12% incline, app control, heart rate monitor, 300lb capacity.', colors:['#1a1a2e'], sizes:['Standard'], featured:false },
    { id:49, title:'Patterned Throw Blanket', category:'home', price:4999, originalPrice:6999, rating:4.4, reviews:2345, badge:'sale', badgeText:'-25%', image:'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&q=80', images:['https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80','https://images.unsplash.com/photo-1559827260-dc66d52bef1a?w=600&q=80','https://images.unsplash.com/photo-1559827260-dc66d52bef1b?w=600&q=80'], description:'Premium throw blanket, 50x70", ultra-soft microfiber, machine washable.', colors:['#8B4513','#2d3436','#c0392b'], sizes:['Standard','Oversized'], featured:false },
    { id:50, title:'Glasses Blue Light Blocking', category:'accessories', price:6999, originalPrice:9499, rating:4.4, reviews:5432, badge:'sale', badgeText:'-27%', image:'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=400&q=80', images:['https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=600&q=80','https://images.unsplash.com/photo-1574258495973-f010dfbb5372?w=600&q=80','https://images.unsplash.com/photo-1574258495973-f010dfbb5373?w=600&q=80'], description:'Blue light blocking glasses, anti-glare, lightweight titanium frame, UV protection.', colors:['#1a1a2e','#8B4513','#f5f5f5'], sizes:['Standard'], featured:false },
    { id:51, title:'Portable Power Bank 20000mAh', category:'electronics', price:4999, originalPrice:6999, rating:4.6, reviews:8765, badge:'popular', badgeText:'Popular', image:'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&q=80', images:['https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=600&q=80','https://images.unsplash.com/photo-1609091839311-d5365f9ff1c6?w=600&q=80','https://images.unsplash.com/photo-1609091839311-d5365f9ff1c7?w=600&q=80'], description:'20000mAh power bank, 65W fast charge, USB-C, 2 devices, LED display.', colors:['#1a1a2e','#f5f5f5'], sizes:['Standard'], featured:false },
    { id:52, title:'Cashmere Beanie Hat', category:'fashion', price:5999, originalPrice:7999, rating:4.3, reviews:1876, badge:'sale', badgeText:'-22%', image:'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=400&q=80', images:['https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=600&q=80','https://images.unsplash.com/photo-1576871337632-b9aef4c17aba?w=600&q=80','https://images.unsplash.com/photo-1576871337632-b9aef4c17abb?w=600&q=80'], description:'Pure cashmere beanie, ribbed knit, turn-up cuff, one size, made in Scotland.', colors:['#2d3436','#8B4513','#c0392b','#e8e8e8'], sizes:['Standard'], featured:false },
    { id:53, title:'Electric Kettle Smart', category:'home', price:7999, originalPrice:9999, rating:4.5, reviews:3210, badge:'sale', badgeText:'-25%', image:'https://images.unsplash.com/photo-1575424909136-0b9fc3aef4d9?w=400&q=80', images:['https://images.unsplash.com/photo-1575424909136-0b9fc3aef4d9?w=600&q=80','https://images.unsplash.com/photo-1575424909136-0b9fc3aef4da?w=600&q=80','https://images.unsplash.com/photo-1575424909136-0b9fc3aef4db?w=600&q=80'], description:'Smart kettle, temperature control, keep warm, 1.7L, BPA-free, stainless steel.', colors:['#f5f5f5','#1a1a2e'], sizes:['Standard'], featured:false },
    { id:54, title:'Foam Roller Muscle Recovery', category:'sports', price:3499, originalPrice:4699, rating:4.5, reviews:4321, badge:'sale', badgeText:'-27%', image:'https://images.unsplash.com/photo-1607827448387-a67db1383b59?w=400&q=80', images:['https://images.unsplash.com/photo-1607827448387-a67db1383b59?w=600&q=80','https://images.unsplash.com/photo-1607827448387-a67db1383b5a?w=600&q=80','https://images.unsplash.com/photo-1607827448387-a67db1383b5b?w=600&q=80'], description:'High-density foam roller, 18", muscle recovery, deep tissue massage.', colors:['#1a1a2e','#c0392b'], sizes:['Standard'], featured:false }
  ];

  const testimonials = [
    { name:'Sarah Johnson', avatar:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80', rating:5, text:"Absolutely love my purchase! The quality exceeded my expectations. Beautiful packaging and incredibly fast shipping." },
    { name:'Michael Chen', avatar:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80', rating:5, text:"Best online shopping experience ever. Accurate photos, detailed descriptions, and top-notch customer service." },
    { name:'Emily Rodriguez', avatar:'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80', rating:4, text:"The attention to detail is remarkable. Sustainable packaging and premium feel on everything I've ordered." },
    { name:'David Kim', avatar:'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80', rating:5, text:"My go-to store for premium products. Consistent quality, fair prices, flawless user experience." },
    { name:'Olivia Thompson', avatar:'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80', rating:5, text:"Received so many compliments! Outstanding craftsmanship. You can really feel the quality. Highly recommend!" },
    { name:'James Wilson', avatar:'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80', rating:4, text:"Fast delivery, exactly as described. Accurate size guide and easy return policy gives peace of mind." },
    { name:'Sophia Lee', avatar:'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&q=80', rating:5, text:"AshMart is my new favorite store! Everything is curated beautifully and the quality is unmatched." },
    { name:'Daniel Brown', avatar:'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80', rating:5, text:"Premium products, premium service. The 24/7 support team went above and beyond to help me." }
  ];

  /* ===== DOM REFS ===== */
  const D = {
    body: document.body, html: document.documentElement,
    loader: $('#loader'),
    navbar: $('#navbar'), navLinks: $('#navLinks'), hamburger: $('#hamburger'), themeToggle: $('#themeToggle'),
    searchOverlay: $('#searchOverlay'), searchToggle: $('#searchToggle'), searchClose: $('#searchClose'), searchInput: $('#searchInput'), searchClear: $('#searchClear'), searchResults: $('#searchResults'), searchSuggestions: $('#searchSuggestions'),
    cartPanel: $('#cartPanel'), cartToggle: $('#cartToggle'), cartClose: $('#cartClose'), cartOverlayBg: $('#cartOverlayBg'), cartItems: $('#cartItems'), cartFooter: $('#cartFooter'), cartBadge: $('#cartBadge'), cartCount: $('#cartCount'), cartSubtotal: $('#cartSubtotal'), cartShipping: $('#cartShipping'), cartTax: $('#cartTax'), cartDiscount: $('#cartDiscount'), cartTotal: $('#cartTotal'), couponInput: $('#couponInput'), applyCoupon: $('#applyCoupon'), cartContinue: $('#cartContinue'),
    wishlistPanel: $('#wishlistPanel'), wishlistToggle: $('#wishlistToggle'), wishlistClose: $('#wishlistClose'), wishlistOverlayBg: $('#wishlistOverlayBg'), wishlistItems: $('#wishlistItems'), wishlistBadge: $('#wishlistBadge'), wishlistCount: $('#wishlistCount'),
    productModal: $('#productModal'), modalClose: $('#modalClose'), modalOverlay: $('#modalOverlay'), modalBody: $('#modalBody'),
    productsGrid: $('#productsGrid'), filterBtns: $$('.filter-btn'),
    newsletterForm: $('#newsletterForm'), newsletterInput: $('#newsletterInput'), newsletterMessage: $('#newsletterMessage'), footerNewsletterForm: $('#footerNewsletterForm'),
    contactForm: $('#contactForm'),
    backToTop: $('#backToTop'), notification: $('#notification'),
    compareBar: $('#compareBar'), compareCount: $('#compareCount'), compareThumbs: $('#compareThumbs'), compareBtn: $('#compareBtn'), compareClose: $('#compareClose'),
    trendingSwiper: $('#trendingSwiper'), trendingWrapper: $('#trendingWrapper'),
    testimonialWrapper: $('#testimonialWrapper'),
    newArrivalsGrid: $('#newArrivalsGrid'), bestSellersGrid: $('#bestSellersGrid'),
    offerDays: $('#offerDays'), offerHours: $('#offerHours'), offerMins: $('#offerMins'), offerSecs: $('#offerSecs'),
    flashHours: $('#flashHours'), flashMins: $('#flashMins'), flashSecs: $('#flashSecs')
  };

  const state = { cart: [], wishlist: [], compare: [], discountApplied: false, showAll: false, activeFilter: 'all' };

  /* ===== UTILITIES ===== */
  const fmt = n => '₹' + n.toLocaleString('en-IN', {minimumFractionDigits: 2, maximumFractionDigits: 2});
  const stars = r => '<i class="fas fa-star"></i>'.repeat(Math.floor(r)) + (r%1>=.5?'<i class="fas fa-star-half-alt"></i>':'') + '<i class="far fa-star"></i>'.repeat(5-Math.ceil(r));
  const disc = (o,c) => Math.round((o-c)/o*100);
  const ls = { get(k,d){try{return JSON.parse(localStorage.getItem('am_'+k))||d}catch{return d}}, set(k,v){try{localStorage.setItem('am_'+k,JSON.stringify(v))}catch{}} };

  /* ===== LOADER ===== */
  function hideLoader() { D.loader && D.loader.classList.add('hidden'); }
  setTimeout(hideLoader, 1800);

  /* ===== THEME ===== */
  D.themeToggle.addEventListener('click', () => {
    const next = D.html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    D.html.setAttribute('data-theme', next);
    ls.set('theme', next);
  });
  const savedTheme = ls.get('theme', 'light');
  D.html.setAttribute('data-theme', savedTheme);

  /* ===== CART ===== */
  function cartInit() { state.cart = ls.get('cart', []); cartRender(); }
  function cartAdd(id) {
    const p = products.find(x => x.id === id); if (!p) return;
    const e = state.cart.find(x => x.id === id);
    e ? e.qty++ : state.cart.push({ id, qty: 1 });
    ls.set('cart', state.cart); cartRender();
    D.cartPanel.classList.add('active');
    notif('Added to cart!', 'success');
  }
  function cartQty(id, d) {
    const e = state.cart.find(x => x.id === id); if (!e) return;
    e.qty += d;
    if (e.qty <= 0) state.cart = state.cart.filter(x => x.id !== id);
    ls.set('cart', state.cart); cartRender();
  }
  function cartRemove(id) { state.cart = state.cart.filter(x => x.id !== id); ls.set('cart', state.cart); cartRender(); }
  function cartTotals() {
    const sub = state.cart.reduce((s,i) => { const p = products.find(x=>x.id===i.id); return s + (p?p.price*i.qty:0) }, 0);
    let disc = 0; if (state.discountApplied) disc = sub * 0.2;
    const taxable = sub - disc;
    let ship = 0; if (state.cart.length && sub < 2000) ship = 199; else if (state.cart.length && sub < 5000) ship = 99;
    const tax = taxable * 0.08;
    return { sub, disc, ship, tax, total: taxable + tax + ship, count: state.cart.reduce((s,i)=>s+i.qty,0) };
  }
  function cartRender() {
    const t = cartTotals();
    D.cartBadge.textContent = t.count;
    D.cartCount.textContent = '(' + t.count + ')';
    if (!state.cart.length) {
      D.cartItems.innerHTML = '<div class="cart-empty"><i class="fas fa-shopping-bag"></i><p>Your cart is empty</p><span>Add some items to get started</span></div>';
      D.cartFooter.style.display = 'none'; return;
    }
    D.cartFooter.style.display = 'block';
    D.cartItems.innerHTML = state.cart.map(i => {
      const p = products.find(x => x.id === i.id); if (!p) return '';
      return `<div class="cart-item"><img src="${p.image}" alt="${p.title}" loading="lazy"><div class="cart-item-info"><h4>${p.title}</h4><div class="cart-item-price">${fmt(p.price)}</div><div class="cart-item-controls"><button onclick="window.__saCartQty(${p.id},-1)">−</button><span>${i.qty}</span><button onclick="window.__saCartQty(${p.id},1)">+</button></div></div><button class="cart-item-remove" onclick="window.__saCartRemove(${p.id})"><i class="fas fa-trash-alt"></i></button></div>`;
    }).join('');
    D.cartSubtotal.textContent = fmt(t.sub);
    D.cartShipping.textContent = t.ship === 0 ? 'Free' : fmt(t.ship);
    D.cartTax.textContent = fmt(t.tax);
    D.cartDiscount.textContent = t.disc > 0 ? '- ' + fmt(t.disc) : fmt(0);
    D.cartTotal.textContent = fmt(t.total);
  }
  window.__saCartQty = cartQty; window.__saCartRemove = cartRemove;

  /* ===== WISHLIST ===== */
  function wishlistInit() { state.wishlist = ls.get('wishlist', []); wishlistRender(); }
  function wishlistToggle(id) {
    const i = state.wishlist.indexOf(id);
    i > -1 ? state.wishlist.splice(i,1) : state.wishlist.push(id);
    ls.set('wishlist', state.wishlist); wishlistRender(); wishlistUpdateBtns();
  }
  function wishlistRender() {
    D.wishlistBadge.textContent = state.wishlist.length;
    D.wishlistCount.textContent = '(' + state.wishlist.length + ')';
    if (!state.wishlist.length) {
      D.wishlistItems.innerHTML = '<div class="wishlist-empty"><i class="fas fa-heart"></i><p>Your wishlist is empty</p><span>Save items you love</span></div>'; return;
    }
    D.wishlistItems.innerHTML = state.wishlist.map(id => {
      const p = products.find(x => x.id === id); if (!p) return '';
      return `<div class="wishlist-item"><img src="${p.image}" alt="${p.title}" loading="lazy"><div class="wishlist-item-info"><h4>${p.title}</h4><div class="wishlist-item-price">${fmt(p.price)}</div><div class="wishlist-item-actions"><button class="wishlist-add-cart" onclick="window.__saCartAdd(${p.id})">Add to Cart</button><button class="wishlist-remove" onclick="window.__saWishlistToggle(${p.id})">Remove</button></div></div></div>`;
    }).join('');
  }
  function wishlistUpdateBtns() {
    $$('.wl-btn').forEach(b => {
      const id = parseInt(b.dataset.id);
      const inW = state.wishlist.includes(id);
      b.classList.toggle('active', inW);
      b.querySelector('i').className = inW ? 'fas fa-heart' : 'far fa-heart';
    });
  }
  window.__saWishlistToggle = wishlistToggle;
  window.__saCartAdd = cartAdd;

  /* ===== COMPARE ===== */
  function compareToggle(id) {
    const i = state.compare.indexOf(id);
    if (i > -1) { state.compare.splice(i,1); } else { if (state.compare.length >= 4) return notif('Max 4 items to compare', 'error'); state.compare.push(id); }
    compareRender();
  }
  function compareRender() {
    D.compareCount.textContent = state.compare.length;
    D.compareThumbs.innerHTML = state.compare.map(id => { const p=products.find(x=>x.id===id); return p?`<img src="${p.image}" alt="">`:'' }).join('');
    D.compareBar.classList.toggle('active', state.compare.length >= 2);
  }

  /* ===== NOTIFICATION ===== */
  function notif(msg, type = 'success') {
    const n = D.notification;
    n.textContent = '';
    n.className = 'notification';
    const i = document.createElement('i');
    i.className = type === 'success' ? 'fas fa-check-circle' : 'fas fa-exclamation-circle';
    n.appendChild(i); n.appendChild(document.createTextNode(' ' + msg));
    n.classList.add(type, 'show');
    clearTimeout(n._t); n._t = setTimeout(() => n.classList.remove('show'), 3000);
  }

  /* ===== PRODUCT CARD HTML ===== */
  function productHTML(p, showActions = true) {
    const d = p.originalPrice ? disc(p.originalPrice, p.price) : 0;
    const inW = state.wishlist.includes(p.id);
    const inC = state.compare.includes(p.id);
    return `<div class="product-card">
      <div class="product-card-image">
        <img src="${p.image}" alt="${p.title}" loading="lazy">
        <span class="product-card-badge ${p.badge}">${p.badgeText}</span>
        <div class="product-card-actions">
          <button class="wl-btn ${inW?'active':''}" data-id="${p.id}" onclick="window.__saWishlistToggle(${p.id})" title="Wishlist"><i class="${inW?'fas':'far'} fa-heart"></i></button>
          <button class="${inC?'active':''}" onclick="window.__saCompareToggle(${p.id})" title="Compare"><i class="fas fa-exchange-alt"></i></button>
          <button onclick="window.__saQuickView(${p.id})" title="Quick View"><i class="fas fa-eye"></i></button>
        </div>
        <div class="product-card-overlay">
          <button class="btn btn-primary btn-sm" onclick="window.__saCartAdd(${p.id})"><i class="fas fa-shopping-bag"></i> Add to Cart</button>
          <button class="btn btn-outline btn-sm" onclick="window.__saQuickView(${p.id})"><i class="fas fa-eye"></i> View</button>
        </div>
      </div>
      <div class="product-card-info">
        <div class="product-card-category">${p.category}</div>
        <h3 class="product-card-title">${p.title}</h3>
        <div class="product-card-rating"><span class="stars">${stars(p.rating)}</span><span>(${p.reviews.toLocaleString()})</span></div>
        <div class="product-card-price">
          <span class="current">${fmt(p.price)}</span>
          ${p.originalPrice ? `<span class="original">${fmt(p.originalPrice)}</span>` : ''}
          ${d > 0 ? `<span class="discount">-${d}%</span>` : ''}
        </div>
      </div>
    </div>`;
  }

  window.__saCompareToggle = compareToggle;

  /* ===== RENDER PRODUCTS ===== */
  function renderProducts(filter = 'all') {
    state.activeFilter = filter;
    let f;
    if (filter === 'all' && !state.showAll) {
      f = products.filter(p => p.featured).slice(0, 8);
    } else if (filter === 'all') {
      f = products;
    } else {
      f = products.filter(p => p.category === filter);
    }
    D.productsGrid.innerHTML = f.map(p => productHTML(p)).join('');
    const viewAllBtn = document.getElementById('viewAllBtn');
    if (viewAllBtn) {
      if (filter === 'all') {
        viewAllBtn.style.display = 'flex';
        viewAllBtn.querySelector('span').textContent = state.showAll ? 'Show Less' : 'View All Products';
        const icon = viewAllBtn.querySelector('i');
        if (icon) icon.className = state.showAll ? 'fas fa-chevron-up' : 'fas fa-arrow-right';
      } else {
        viewAllBtn.style.display = 'none';
      }
    }
  }
  function toggleViewAll() {
    state.showAll = !state.showAll;
    renderProducts(state.activeFilter);
  }
  window.__saToggleViewAll = toggleViewAll;

  /* ===== RENDER NEW ARRIVALS ===== */
  function renderNewArrivals() {
    const na = products.filter(p => p.badge === 'new' || p.badge === 'trending').slice(0, 6);
    D.newArrivalsGrid.innerHTML = na.map(p => productHTML(p)).join('');
  }

  /* ===== RENDER BEST SELLERS ===== */
  function renderBestSellers() {
    const bs = products.filter(p => p.badge === 'best-seller' || p.badge === 'popular').slice(0, 6);
    D.bestSellersGrid.innerHTML = bs.map(p => productHTML(p)).join('');
  }

  /* ===== RENDER TRENDING CAROUSEL ===== */
  function renderTrending() {
    const tr = products.filter(p => p.badge === 'trending' || p.badge === 'hot' || p.badge === 'popular').slice(0, 10);
    D.trendingWrapper.innerHTML = tr.map(p => `<div class="swiper-slide">${productHTML(p)}</div>`).join('');
  }

  /* ===== RENDER TESTIMONIALS ===== */
  function renderTestimonials() {
    D.testimonialWrapper.innerHTML = testimonials.map(t =>
      `<div class="swiper-slide"><div class="testimonial-card"><div class="testimonial-header"><img src="${t.avatar}" alt="${t.name}" class="testimonial-avatar" loading="lazy"><div><div class="testimonial-name">${t.name}</div><div class="testimonial-stars">${stars(t.rating)}</div></div></div><p class="testimonial-text">"${t.text}"</p></div></div>`
    ).join('');
  }

  /* ===== QUICK VIEW ===== */
  window.__saQuickView = function (id) {
    const p = products.find(x => x.id === id); if (!p) return;
    D.modalBody.innerHTML = `
      <div class="modal-gallery">
        <img src="${p.images[0]}" alt="${p.title}" class="modal-main-image" id="modalMainImage">
        <div class="modal-thumbnails">${p.images.map((img,i) => `<img src="${img}" alt="" class="modal-thumb ${i===0?'active':''}" onclick="document.getElementById('modalMainImage').src='${img}';document.querySelectorAll('.modal-thumb').forEach(t=>t.classList.remove('active'));this.classList.add('active')">`).join('')}</div>
      </div>
      <div class="modal-info">
        <div class="modal-category">${p.category}</div>
        <h2 class="modal-title">${p.title}</h2>
        <div class="modal-rating"><span class="stars">${stars(p.rating)}</span><span>${p.rating} (${p.reviews.toLocaleString()} reviews)</span></div>
        <div class="modal-price">${fmt(p.price)}</div>
        <p class="modal-description">${p.description}</p>
        <div class="modal-colors"><h4>Colors</h4><div class="color-options">${p.colors.map((c,i) => `<button class="color-btn ${i===0?'active':''}" style="background:${c}" onclick="document.querySelectorAll('.color-btn').forEach(b=>b.classList.remove('active'));this.classList.add('active')"></button>`).join('')}</div></div>
        <div class="modal-sizes"><h4>Size</h4><div class="size-options">${p.sizes.map((s,i) => `<button class="size-btn ${i===0?'active':''}" onclick="document.querySelectorAll('.size-btn').forEach(b=>b.classList.remove('active'));this.classList.add('active')">${s}</button>`).join('')}</div></div>
        <div class="modal-quantity"><h4>Qty:</h4><button onclick="const e=this.nextElementSibling;let v=parseInt(e.textContent);if(v>1){v--;e.textContent=v}">−</button><span id="modalQty">1</span><button onclick="const e=this.previousElementSibling;let v=parseInt(e.textContent);v++;e.textContent=v">+</button></div>
        <div class="modal-actions"><button class="btn btn-primary" onclick="window.__saCartAdd(${p.id});window.__saCloseModal()"><i class="fas fa-shopping-bag"></i> Add to Cart</button><button class="btn btn-outline" onclick="window.__saCloseModal()">Close</button></div>
      </div>`;
    D.productModal.classList.add('active');
    D.body.style.overflow = 'hidden';
  };

  function closeModal() { D.productModal.classList.remove('active'); D.body.style.overflow = ''; }
  window.__saCloseModal = closeModal;

  /* ===== SEARCH ===== */
  function search(q) {
    const query = q.toLowerCase().trim();
    if (!query) { D.searchResults.classList.remove('visible'); D.searchSuggestions.style.display = 'block'; D.searchClear.classList.remove('visible'); return; }
    D.searchClear.classList.add('visible'); D.searchSuggestions.style.display = 'none';
    const r = products.filter(p => p.title.toLowerCase().includes(query) || p.category.toLowerCase().includes(query) || p.description.toLowerCase().includes(query));
    D.searchResults.innerHTML = r.length ? r.map(p => `<div class="search-result-item" onclick="window.__saQuickView(${p.id});closeSearch()"><img src="${p.image}" alt="${p.title}" loading="lazy"><div class="result-info"><h4>${p.title}</h4><span>${p.category} · ${fmt(p.price)}</span></div></div>`).join('') : '<p style="text-align:center;color:var(--text-tertiary);padding:20px;">No products found</p>';
    D.searchResults.classList.add('visible');
  }

  function openSearch() { D.searchOverlay.classList.add('active'); D.searchInput.focus(); D.body.style.overflow = 'hidden'; }
  function closeSearch() { D.searchOverlay.classList.remove('active'); D.searchInput.value = ''; D.searchResults.classList.remove('visible'); D.searchSuggestions.style.display = 'block'; D.searchClear.classList.remove('visible'); D.body.style.overflow = ''; }
  window.closeSearch = closeSearch;

  /* ===== COUNTDOWN ===== */
  function initCountdown() {
    const end = new Date(); end.setDate(end.getDate() + 14); end.setHours(23,59,59,0);
    function upd() {
      const d = end - new Date(); if (d <= 0) return;
      const dd = Math.floor(d/864e5), hh = Math.floor(d%864e5/36e5), mm = Math.floor(d%36e5/6e4), ss = Math.floor(d%6e4/1e3);
      const p = n => String(n).padStart(2,'0');
      [D.offerDays, D.offerHours, D.offerMins, D.offerSecs].forEach((el,i) => { if (el) el.textContent = [p(dd),p(hh),p(mm),p(ss)][i] });
    }
    upd(); setInterval(upd, 1000);

    const flashEnd = new Date(); flashEnd.setHours(flashEnd.getHours() + 5);
    function flashUpd() {
      const d = flashEnd - new Date(); if (d <= 0) return;
      const hh = Math.floor(d/36e5), mm = Math.floor(d%36e5/6e4), ss = Math.floor(d%6e4/1e3);
      [D.flashHours, D.flashMins, D.flashSecs].forEach((el,i) => { if (el) el.textContent = String([hh,mm,ss][i]).padStart(2,'0') });
    }
    flashUpd(); setInterval(flashUpd, 1000);
  }

  /* ===== COUPON ===== */
  function applyCoupon() {
    const code = D.couponInput.value.trim().toUpperCase();
    if (code === 'ASHMART20') { state.discountApplied = true; D.applyCoupon.textContent = '✓ Applied'; D.applyCoupon.style.background = '#059669'; cartRender(); notif('Coupon applied! 20% OFF', 'success'); }
    else { state.discountApplied = false; D.applyCoupon.textContent = 'Apply'; D.applyCoupon.style.background = ''; notif('Invalid code. Try "ASHMART20"', 'error'); }
  }

  /* ===== FAQ ===== */
  function initFaq() {
    $$('.faq-question').forEach(btn => {
      btn.addEventListener('click', function() {
        const item = this.parentElement;
        const isActive = item.classList.contains('active');
        $$('.faq-item').forEach(f => f.classList.remove('active'));
        $$('.faq-question').forEach(q => q.setAttribute('aria-expanded','false'));
        if (!isActive) { item.classList.add('active'); this.setAttribute('aria-expanded','true'); }
      });
    });
  }

  /* ===== HERO PARTICLES ===== */
  function heroParticles() {
    const c = document.getElementById('heroParticles'); if (!c) return;
    for (let i = 0; i < 40; i++) {
      const p = document.createElement('div');
      const s = Math.random() * 4 + 2;
      p.className = 'hero-particle';
      p.style.cssText = `width:${s}px;height:${s}px;top:${Math.random()*100}%;left:${Math.random()*100}%;opacity:${Math.random()*.3+.1};animation-duration:${Math.random()*12+10}s;animation-delay:${Math.random()*5}s`;
      c.appendChild(p);
    }
  }

  /* ===== AOS ===== */
  function initAos() { if (typeof AOS !== 'undefined') AOS.init({ duration: 700, once: true, offset: 60, easing: 'ease-out-cubic' }); }

  /* ===== SWIPER ===== */
  function initSwipers() {
    if (typeof Swiper === 'undefined') return;
    new Swiper('.testimonialSwiper', { slidesPerView:1, spaceBetween:20, loop:true, autoplay:{delay:4000,disableOnInteraction:false}, pagination:{el:'.swiper-pagination',clickable:true}, breakpoints:{ 640:{slidesPerView:1}, 768:{slidesPerView:2}, 1024:{slidesPerView:3} } });
    new Swiper('.trendingSwiper', { slidesPerView:1, spaceBetween:20, loop:true, autoplay:{delay:3500,disableOnInteraction:false}, navigation:{nextEl:'.swiper-button-next',prevEl:'.swiper-button-prev'}, breakpoints:{ 480:{slidesPerView:2}, 768:{slidesPerView:3}, 1024:{slidesPerView:4} } });
  }

  /* ===== VANILLA TILT ===== */
  function initTilt() { if (typeof VanillaTilt !== 'undefined') VanillaTilt.init(document.querySelectorAll('.category-card'), { max:6, speed:300, glare:true, 'max-glare':0.12, scale:1.02 }); }

  /* ===== GSAP ===== */
  function initGsap() {
    if (typeof gsap === 'undefined') return;
  }

  /* ===== EVENTS ===== */
  function initEvents() {
    /* Hamburger */
    D.hamburger.addEventListener('click', function() { this.classList.toggle('active'); D.navLinks.classList.toggle('active'); });
    D.navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { D.hamburger.classList.remove('active'); D.navLinks.classList.remove('active'); }));

    /* Search */
    D.searchToggle.addEventListener('click', openSearch);
    D.searchClose.addEventListener('click', closeSearch);
    D.searchOverlay.addEventListener('click', e => { if (e.target === D.searchOverlay) closeSearch(); });
    D.searchInput.addEventListener('input', e => search(e.target.value));
    D.searchClear.addEventListener('click', () => { D.searchInput.value = ''; search(''); D.searchInput.focus(); });
    D.searchInput.addEventListener('keydown', e => { if (e.key === 'Escape') closeSearch(); });

    /* Cart */
    D.cartToggle.addEventListener('click', () => D.cartPanel.classList.add('active'));
    D.cartClose.addEventListener('click', () => D.cartPanel.classList.remove('active'));
    D.cartOverlayBg.addEventListener('click', () => D.cartPanel.classList.remove('active'));
    D.cartContinue.addEventListener('click', () => D.cartPanel.classList.remove('active'));

    /* Wishlist */
    D.wishlistToggle.addEventListener('click', () => D.wishlistPanel.classList.add('active'));
    D.wishlistClose.addEventListener('click', () => D.wishlistPanel.classList.remove('active'));
    D.wishlistOverlayBg.addEventListener('click', () => D.wishlistPanel.classList.remove('active'));

    /* Modal */
    D.modalClose.addEventListener('click', closeModal);
    D.modalOverlay.addEventListener('click', closeModal);
    document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeModal(); closeSearch(); D.cartPanel.classList.remove('active'); D.wishlistPanel.classList.remove('active'); } });

    /* Compare */
    D.compareClose.addEventListener('click', () => { state.compare = []; compareRender(); });

    /* Coupon */
    D.applyCoupon.addEventListener('click', applyCoupon);
    D.couponInput.addEventListener('keydown', e => { if (e.key === 'Enter') applyCoupon(); });

    /* Newsletter */
    D.newsletterForm.addEventListener('submit', e => {
      e.preventDefault();
      const email = D.newsletterInput.value.trim();
      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { D.newsletterMessage.textContent = 'Please enter a valid email'; D.newsletterMessage.className = 'newsletter-message error'; return; }
      D.newsletterMessage.textContent = '✓ Thank you! Check your inbox for 10% off.'; D.newsletterMessage.className = 'newsletter-message success';
      D.newsletterInput.value = '';
      if (typeof confetti !== 'undefined') confetti({ particleCount:120, spread:70, origin:{y:.7} });
    });

    /* Footer Newsletter */
    D.footerNewsletterForm && D.footerNewsletterForm.addEventListener('submit', function(e) { e.preventDefault(); this.querySelector('input').value = ''; notif('Subscribed! Thank you.', 'success'); });

    /* Contact Form */
    D.contactForm && D.contactForm.addEventListener('submit', function(e) { e.preventDefault(); notif('Message sent! We\'ll get back to you soon.', 'success'); this.reset(); });

    /* Scroll */
    window.addEventListener('scroll', () => {
      const sy = window.scrollY;
      D.navbar.classList.toggle('scrolled', sy > 60);
      D.backToTop.classList.toggle('visible', sy > 400);
      $$('.nav-link').forEach(link => {
        const t = link.getAttribute('href');
        if (t && t.startsWith('#')) { const s = document.querySelector(t); if (s) { const r = s.getBoundingClientRect(); link.classList.toggle('active', r.top <= 120 && r.bottom >= 120); } }
      });
    });

    /* Back to Top */
    D.backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    /* Filter */
    D.filterBtns.forEach(btn => {
      btn.addEventListener('click', function() { D.filterBtns.forEach(b => b.classList.remove('active')); this.classList.add('active'); state.showAll = false; renderProducts(this.dataset.filter); });
    });

    /* Search Tags */
    $$('.search-tag').forEach(tag => {
      tag.addEventListener('click', function() { D.searchInput.value = this.textContent; search(this.textContent); });
    });

    /* Nav Scroll Links */
    $$('.nav-link[href^="#"], .category-link, .hero-btn[href^="#"], .offer-btn[href^="#"]').forEach(a => {
      a.addEventListener('click', function(e) {
        const t = this.getAttribute('href'); if (t && t.startsWith('#')) { e.preventDefault(); const el = document.querySelector(t); if (el) el.scrollIntoView({ behavior: 'smooth' }); }
      });
    });
  }

  /* ===== HERO COUNTERS ===== */
  function animateCounters() {
    $$('.hero-stat-number span[data-count]').forEach(el => {
      const target = parseInt(el.dataset.count); if (!target) return;
      let cur = 0; const step = Math.ceil(target / 50);
      const int = setInterval(() => { cur += step; if (cur >= target) { cur = target; clearInterval(int); } el.textContent = cur; }, 20);
    });
  }

  /* ===== INIT ===== */
  function init() {
    cartInit();
    wishlistInit();
    renderProducts();
    renderNewArrivals();
    renderBestSellers();
    renderTrending();
    renderTestimonials();
    initFaq();
    initCountdown();
    initSwipers();
    initTilt();
    initEvents();
    heroParticles();
    animateCounters();
    setTimeout(initGsap, 150);
    setTimeout(initAos, 250);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
