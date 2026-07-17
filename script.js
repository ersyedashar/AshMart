/* ===== AshMart - Premium E-Commerce ===== */

(function () {
  'use strict';

  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];

  /* ===== 50+ PRODUCTS ===== */
  const products = [
    { id:1, title:'Wireless Noise-Cancelling Headphones', category:'electronics', price:2499, originalPrice:3999, rating:4.8, reviews:2341, badge:'sale', badgeText:'-37%', image:'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80', images:['https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80','https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&q=80','https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=600&q=80'], description:'Premium ANC headphones with 30hr battery, memory foam ear cushions, and Hi-Res audio.', colors:['#1a1a2e','#e8e8e8'], sizes:['Standard'], featured:true },
    { id:2, title:'Smart Watch Ultra Pro', category:'electronics', price:3999, originalPrice:5999, rating:4.9, reviews:1876, badge:'sale', badgeText:'-33%', image:'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80', images:['https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80','https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&q=80','https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600&q=80'], description:'Advanced smartwatch with OLED display, health monitoring, GPS, 7-day battery.', colors:['#1a1a2e','#2d3436','#f5f5f5'], sizes:['42mm','46mm'], featured:true },
    { id:3, title:'Premium Leather Jacket', category:'fashion', price:4999, originalPrice:7999, rating:4.7, reviews:1543, badge:'sale', badgeText:'-37%', image:'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&q=80', images:['https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80','https://images.unsplash.com/photo-1520975954732-35dd22299614?w=600&q=80','https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=600&q=80'], description:'Handcrafted genuine leather jacket, silk lining, YKK zippers, modern slim fit.', colors:['#2d3436','#6b4226'], sizes:['S','M','L','XL','XXL'], featured:true },
    { id:4, title:'Minimalist Running Shoes', category:'sports', price:1999, originalPrice:2999, rating:4.6, reviews:3210, badge:'popular', badgeText:'Popular', image:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80', images:['https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80','https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&q=80','https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&q=80'], description:'Lightweight running shoes with responsive cushioning, breathable mesh, carbon outsole.', colors:['#e8e8e8','#1a1a2e','#c0392b'], sizes:['7','8','9','10','11','12'], featured:true },
    { id:5, title:'Luxury Chronograph Watch', category:'accessories', price:8999, originalPrice:12999, rating:4.9, reviews:987, badge:'sale', badgeText:'-30%', image:'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&q=80', images:['https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&q=80','https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=600&q=80','https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600&q=80'], description:'Swiss-made automatic chronograph, sapphire crystal, 42mm steel case, leather strap.', colors:['#1a1a2e','#2d3436','#8B4513'], sizes:['Standard'], featured:true },
    { id:6, title:'Premium Skincare Set', category:'beauty', price:1299, originalPrice:1999, rating:4.7, reviews:4532, badge:'sale', badgeText:'-35%', image:'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&q=80', images:['https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80','https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&q=80','https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=80'], description:'Complete skincare routine: Vitamin C serum, hyaluronic acid moisturizer, retinol cream.', colors:['#f5f5f5','#ffe4e6'], sizes:['30ml','50ml'], featured:true },
    { id:7, title:'Designer Sunglasses', category:'accessories', price:1499, originalPrice:2499, rating:4.5, reviews:1234, badge:'sale', badgeText:'-40%', image:'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&q=80', images:['https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&q=80','https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&q=80','https://images.unsplash.com/photo-1508296695146-257a814070b4?w=600&q=80'], description:'Acetate sunglasses, polarized UV400 lenses, gold-plated hinges, hard case.', colors:['#1a1a2e','#8B4513'], sizes:['Standard'], featured:false },
    { id:8, title:'Wireless Earbuds Pro', category:'electronics', price:1499, originalPrice:2499, rating:4.8, reviews:5678, badge:'new', badgeText:'New', image:'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=400&q=80', images:['https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=600&q=80','https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=600&q=80','https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=600&q=80'], description:'True wireless earbuds, adaptive ANC, spatial audio, IPX5, 24hr battery.', colors:['#f5f5f5','#1a1a2e'], sizes:['Standard'], featured:true },
    { id:9, title:'Cashmere Blend Sweater', category:'fashion', price:1799, originalPrice:2999, rating:4.6, reviews:2109, badge:'sale', badgeText:'-40%', image:'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&q=80', images:['https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&q=80','https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=80','https://images.unsplash.com/photo-1556306535-0f09a537f0a3?w=600&q=80'], description:'Ultra-soft cashmere blend, relaxed fit, ribbed cuffs, timeless design.', colors:['#8B4513','#2d3436','#e8e8e8'], sizes:['S','M','L','XL'], featured:true },
    { id:10, title:'Leather Crossbody Bag', category:'accessories', price:1999, originalPrice:3499, rating:4.7, reviews:1876, badge:'sale', badgeText:'-42%', image:'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&q=80', images:['https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80','https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=600&q=80','https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&q=80'], description:'Italian leather crossbody, adjustable strap, multiple compartments, gold hardware.', colors:['#2d3436','#8B4513'], sizes:['Standard'], featured:true },
    { id:11, title:'Smart Home Speaker', category:'electronics', price:2999, originalPrice:4499, rating:4.5, reviews:3654, badge:'new', badgeText:'New', image:'https://images.unsplash.com/photo-1589003077984-894e133dabab?w=400&q=80', images:['https://images.unsplash.com/photo-1589003077984-894e133dabab?w=600&q=80','https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=600&q=80','https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=600&q=80'], description:'Premium smart speaker, 360 sound, voice assistant, multi-room audio.', colors:['#1a1a2e','#f5f5f5'], sizes:['Standard'], featured:false },
    { id:12, title:'Performance Sneakers', category:'sports', price:2499, originalPrice:3999, rating:4.8, reviews:4321, badge:'best-seller', badgeText:'Best Seller', image:'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&q=80', images:['https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&q=80','https://images.unsplash.com/photo-1552346154-21d32810aba3?w=600&q=80','https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&q=80'], description:'Engineered with Flyknit upper, React foam cushioning, rubber outsole.', colors:['#e8e8e8','#1a1a2e','#c0392b'], sizes:['7','8','9','10','11','12'], featured:true },
    { id:13, title:'4K OLED Smart TV 55"', category:'electronics', price:44999, originalPrice:59999, rating:4.7, reviews:1287, badge:'sale', badgeText:'-25%', image:'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&q=80', images:['https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600&q=80','https://images.unsplash.com/photo-1461151304267-38535e780c79?w=600&q=80','https://images.unsplash.com/photo-1461151304267-38535e780c79?w=600&q=80'], description:'55" OLED display, Dolby Vision, Atmos, smart platform, sleek design.', colors:['#1a1a2e'], sizes:['55"','65"'], featured:false },
    { id:14, title:'Designer Wool Blazer', category:'fashion', price:3999, originalPrice:6999, rating:4.5, reviews:876, badge:'sale', badgeText:'-42%', image:'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=400&q=80', images:['https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=600&q=80','https://images.unsplash.com/photo-1603252109303-2751441dd157?w=600&q=80','https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&q=80'], description:'Italian wool blazer, tailored fit, silk lining, horn buttons.', colors:['#2d3436','#1a1a2e','#8B4513'], sizes:['S','M','L','XL'], featured:true },
    { id:15, title:'Professional DSLR Camera', category:'electronics', price:49999, originalPrice:64999, rating:4.9, reviews:654, badge:'sale', badgeText:'-23%', image:'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&q=80', images:['https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&q=80','https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=600&q=80','https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?w=600&q=80'], description:'Full-frame mirrorless, 45MP, 4K video, IBIS, advanced autofocus.', colors:['#1a1a2e'], sizes:['Body Only','With Kit Lens'], featured:false },
    { id:16, title:'Luxury Scented Candle Set', category:'home', price:799, originalPrice:1299, rating:4.4, reviews:3210, badge:'sale', badgeText:'-38%', image:'https://images.unsplash.com/photo-1603006905003-be475563bc59?w=400&q=80', images:['https://images.unsplash.com/photo-1603006905003-be475563bc59?w=600&q=80','https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80','https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=600&q=80'], description:'Set of 3 hand-poured soy wax candles, premium fragrances, 60hr burn time.', colors:['#f5f5f5','#ffe4e6'], sizes:['Standard'], featured:true },
    { id:17, title:'Mechanical Gaming Keyboard', category:'electronics', price:1999, originalPrice:2999, rating:4.6, reviews:2890, badge:'trending', badgeText:'Trending', image:'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&q=80', images:['https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&q=80','https://images.unsplash.com/photo-1607827448387-a67db1383b59?w=600&q=80','https://images.unsplash.com/photo-1595225476474-87563907a212?w=600&q=80'], description:'RGB mechanical keyboard, hot-swappable switches, aluminum frame, PBT keycaps.', colors:['#1a1a2e','#f5f5f5'], sizes:['Full','TKL'], featured:false },
    { id:18, title:'Organic Cotton Hoodie', category:'fashion', price:999, originalPrice:1499, rating:4.5, reviews:1987, badge:'sale', badgeText:'-33%', image:'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&q=80', images:['https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&q=80','https://images.unsplash.com/photo-1578768079052-aa76e52ff62e?w=600&q=80','https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80'], description:'Organic cotton hoodie, brushed fleece interior, relaxed fit, sustainable.', colors:['#2d3436','#e8e8e8','#1a1a2e'], sizes:['S','M','L','XL','XXL'], featured:true },
    { id:19, title:'Stainless Steel Water Bottle', category:'accessories', price:499, originalPrice:799, rating:4.7, reviews:5432, badge:'popular', badgeText:'Popular', image:'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80', images:['https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&q=80','https://images.unsplash.com/photo-1570831739435-6601aa3fa4fb?w=600&q=80','https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=600&q=80'], description:'Double-wall vacuum insulated, 24hr cold, 12hr hot, BPA-free, 750ml.', colors:['#1a1a2e','#f5f5f5','#c0392b'], sizes:['500ml','750ml','1L'], featured:false },
    { id:20, title:'Electric Skateboard', category:'sports', price:9999, originalPrice:14999, rating:4.4, reviews:765, badge:'sale', badgeText:'-33%', image:'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=400&q=80', images:['https://images.unsplash.com/photo-1592078615290-033ee584e267?w=600&q=80','https://images.unsplash.com/photo-1572756317709-fe9d15d298c6?w=600&q=80','https://images.unsplash.com/photo-1572756317709-fe9d15d298c7?w=600&q=80'], description:'Electric longboard, 25mph top speed, 20mi range, regenerative braking.', colors:['#1a1a2e'], sizes:['Standard'], featured:false },
    { id:21, title:'Silk Pajama Set', category:'fashion', price:1499, originalPrice:2499, rating:4.6, reviews:1234, badge:'sale', badgeText:'-40%', image:'https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?w=400&q=80', images:['https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?w=600&q=80','https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d3?w=600&q=80','https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d4?w=600&q=80'], description:'Mulberry silk pajamas, button-down top, elastic waist pants, luxury gift box.', colors:['#1a1a2e','#8B4513','#f5f5f5'], sizes:['S','M','L','XL'], featured:false },
    { id:22, title:'Robot Vacuum Cleaner', category:'home', price:14999, originalPrice:24999, rating:4.5, reviews:2109, badge:'sale', badgeText:'-40%', image:'https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?w=400&q=80', images:['https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?w=600&q=80','https://images.unsplash.com/photo-1558618666-fcd25c85f82f?w=600&q=80','https://images.unsplash.com/photo-1558618666-fcd25c85f82g?w=600&q=80'], description:'Smart robot vacuum, LiDAR navigation, 2500Pa suction, auto-empty base.', colors:['#1a1a2e','#f5f5f5'], sizes:['Standard'], featured:false },
    { id:23, title:'Perfume Collection EDP', category:'beauty', price:1999, originalPrice:3499, rating:4.8, reviews:1876, badge:'sale', badgeText:'-42%', image:'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&q=80', images:['https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&q=80','https://images.unsplash.com/photo-1541643600914-78b084683602?w=600&q=80','https://images.unsplash.com/photo-1541643600914-78b084683603?w=600&q=80'], description:'Luxury EDP, woody floral notes, long-lasting 8hr+, premium crystal bottle.', colors:['#f5f5f5','#ffe4e6'], sizes:['50ml','100ml'], featured:true },
    { id:24, title:'Yoga Mat Premium', category:'sports', price:699, originalPrice:1299, rating:4.6, reviews:3456, badge:'sale', badgeText:'-46%', image:'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&q=80', images:['https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=600&q=80','https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7g?w=600&q=80','https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7h?w=600&q=80'], description:'Extra thick 6mm, eco-friendly TPE, non-slip, alignment lines, carrying strap.', colors:['#1a1a2e','#c0392b','#059669'], sizes:['Standard','Extra Long'], featured:false },
    { id:25, title:'Leather Office Chair', category:'home', price:12999, originalPrice:19999, rating:4.7, reviews:987, badge:'sale', badgeText:'-35%', image:'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=400&q=80', images:['https://images.unsplash.com/photo-1592078615290-033ee584e267?w=600&q=80','https://images.unsplash.com/photo-1592078615290-033ee584e268?w=600&q=80','https://images.unsplash.com/photo-1592078615290-033ee584e269?w=600&q=80'], description:'Ergonomic leather chair, lumbar support, adjustable armrests, 5-year warranty.', colors:['#1a1a2e','#2d3436'], sizes:['Standard'], featured:false },
    { id:26, title:'Portable Bluetooth Speaker', category:'electronics', price:1499, originalPrice:2499, rating:4.5, reviews:4567, badge:'popular', badgeText:'Popular', image:'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&q=80', images:['https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&q=80','https://images.unsplash.com/photo-1608043152269-423dbba4e7e2?w=600&q=80','https://images.unsplash.com/photo-1608043152269-423dbba4e7e3?w=600&q=80'], description:'Portable speaker, 360 sound, IPX7, 20hr battery, party mode.', colors:['#1a1a2e','#c0392b','#059669'], sizes:['Standard'], featured:false },
    { id:27, title:'Cashmere Scarf', category:'fashion', price:1299, originalPrice:1999, rating:4.4, reviews:1678, badge:'sale', badgeText:'-35%', image:'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=400&q=80', images:['https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=600&q=80','https://images.unsplash.com/photo-1520903920243-00d872a2d2c2?w=600&q=80','https://images.unsplash.com/photo-1520903920243-00d872a2d2c3?w=600&q=80'], description:'Pure cashmere scarf, fringed edges, ultra-soft, made in Italy.', colors:['#8B4513','#2d3436','#e8e8e8','#c0392b'], sizes:['Standard'], featured:false },
    { id:28, title:'Gaming Console Pro', category:'electronics', price:34999, originalPrice:49999, rating:4.8, reviews:3456, badge:'trending', badgeText:'Trending', image:'https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=400&q=80', images:['https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=600&q=80','https://images.unsplash.com/photo-1486401899868-0e435ed85129?w=600&q=80','https://images.unsplash.com/photo-1486401899868-0e435ed85130?w=600&q=80'], description:'Next-gen gaming console, 4K/120fps, 1TB SSD, ray tracing, wireless controller.', colors:['#1a1a2e','#f5f5f5'], sizes:['Standard','Digital'], featured:false },
    { id:29, title:'Aromatherapy Diffuser', category:'home', price:599, originalPrice:999, rating:4.3, reviews:2345, badge:'sale', badgeText:'-40%', image:'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80', images:['https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80','https://images.unsplash.com/photo-1602874801007-bd36e7e38a11?w=600&q=80','https://images.unsplash.com/photo-1602874801007-bd36e7e38a12?w=600&q=80'], description:'Ultrasonic diffuser, 200ml tank, LED lights, auto shut-off, whisper quiet.', colors:['#f5f5f5','#1a1a2e'], sizes:['Standard'], featured:false },
    { id:30, title:'Luxury Bedding Set', category:'home', price:2999, originalPrice:4999, rating:4.7, reviews:1543, badge:'sale', badgeText:'-40%', image:'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&q=80', images:['https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80','https://images.unsplash.com/photo-1631049307264-da0ec9d70305?w=600&q=80','https://images.unsplash.com/photo-1631049307264-da0ec9d70306?w=600&q=80'], description:'Egyptian cotton 1000TC, duvet cover set, sateen weave, OEKO-TEX certified.', colors:['#f5f5f5','#e8e8e8','#1a1a2e'], sizes:['Queen','King','California King'], featured:false },
    { id:31, title:'Diamond Stud Earrings', category:'accessories', price:19999, originalPrice:29999, rating:4.9, reviews:432, badge:'sale', badgeText:'-33%', image:'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80', images:['https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80','https://images.unsplash.com/photo-1515562141589-19f64e22c032?w=600&q=80','https://images.unsplash.com/photo-1515562141589-19f64e22c033?w=600&q=80'], description:'1ct total weight diamond studs, 14K white gold, GIA certified.', colors:['#f5f5f5'], sizes:['Standard'], featured:false },
    { id:32, title:'Vitamins & Supplements Set', category:'beauty', price:499, originalPrice:899, rating:4.4, reviews:5678, badge:'sale', badgeText:'-44%', image:'https://images.unsplash.com/photo-1550572017-edd951b55104?w=400&q=80', images:['https://images.unsplash.com/photo-1550572017-edd951b55104?w=600&q=80','https://images.unsplash.com/photo-1550572017-edd951b55105?w=600&q=80','https://images.unsplash.com/photo-1550572017-edd951b55106?w=600&q=80'], description:'Daily wellness pack: Vitamin D3, Omega-3, Probiotics, Zinc, 30-day supply.', colors:['#f5f5f5'], sizes:['30 Days','60 Days'], featured:false },
    { id:33, title:'Leather Wallet', category:'accessories', price:699, originalPrice:1299, rating:4.6, reviews:2987, badge:'sale', badgeText:'-46%', image:'https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&q=80', images:['https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&q=80','https://images.unsplash.com/photo-1627123424574-724758594e94?w=600&q=80','https://images.unsplash.com/photo-1627123424574-724758594e95?w=600&q=80'], description:'Full-grain leather wallet, RFID blocking, 6 card slots, slim profile.', colors:['#2d3436','#8B4513','#1a1a2e'], sizes:['Standard'], featured:false },
    { id:34, title:'Air Purifier', category:'home', price:6999, originalPrice:9999, rating:4.6, reviews:1876, badge:'sale', badgeText:'-30%', image:'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&q=80', images:['https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80','https://images.unsplash.com/photo-1585771724684-38269d6639fe?w=600&q=80','https://images.unsplash.com/photo-1585771724684-38269d6639ff?w=600&q=80'], description:'HEPA filter, covers 500sqft, smart sensor, quiet mode, energy star.', colors:['#f5f5f5','#1a1a2e'], sizes:['Standard'], featured:false },
    { id:35, title:'Fitness Tracker Band', category:'electronics', price:1299, originalPrice:1999, rating:4.5, reviews:6543, badge:'popular', badgeText:'Popular', image:'https://images.unsplash.com/photo-1557935728-e6d1eaabe558?w=400&q=80', images:['https://images.unsplash.com/photo-1557935728-e6d1eaabe558?w=600&q=80','https://images.unsplash.com/photo-1557935728-e6d1eaabe559?w=600&q=80','https://images.unsplash.com/photo-1557935728-e6d1eaabe560?w=600&q=80'], description:'Fitness tracker, heart rate, SpO2, sleep tracking, 14-day battery.', colors:['#1a1a2e','#c0392b','#059669'], sizes:['Standard'], featured:false },
    { id:36, title:'Designer High Heels', category:'fashion', price:1999, originalPrice:3499, rating:4.5, reviews:1234, badge:'sale', badgeText:'-42%', image:'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&q=80', images:['https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&q=80','https://images.unsplash.com/photo-1543163521-1bf539c55dd3?w=600&q=80','https://images.unsplash.com/photo-1543163521-1bf539c55dd4?w=600&q=80'], description:'Stiletto heels, genuine leather, padded insole, 4" heel, elegant design.', colors:['#1a1a2e','#c0392b','#f5f5f5'], sizes:['6','7','8','9','10'], featured:false },
    { id:37, title:'Smart Thermostat', category:'home', price:3499, originalPrice:5499, rating:4.4, reviews:2109, badge:'sale', badgeText:'-36%', image:'https://images.unsplash.com/photo-1570831739435-6601aa3fa4fb?w=400&q=80', images:['https://images.unsplash.com/photo-1570831739435-6601aa3fa4fb?w=600&q=80','https://images.unsplash.com/photo-1567925086516-7c2d3b2c4b0g?w=600&q=80','https://images.unsplash.com/photo-1567925086516-7c2d3b2c4b0h?w=600&q=80'], description:'Smart thermostat, learning algorithm, energy saving, app control.', colors:['#f5f5f5','#1a1a2e'], sizes:['Standard'], featured:false },
    { id:38, title:'Bamboo Cutting Board Set', category:'home', price:499, originalPrice:899, rating:4.3, reviews:4321, badge:'sale', badgeText:'-44%', image:'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=400&q=80', images:['https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=600&q=80','https://images.unsplash.com/photo-1594226801341-41427b4e5c6b?w=600&q=80','https://images.unsplash.com/photo-1594226801341-41427b4e5c6c?w=600&q=80'], description:'Set of 3 organic bamboo boards, juice groove, easy grip, knife-friendly.', colors:['#8B4513'], sizes:['Standard'], featured:false },
    { id:39, title:'Resistance Bands Set', category:'sports', price:399, originalPrice:699, rating:4.5, reviews:6543, badge:'sale', badgeText:'-42%', image:'https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=400&q=80', images:['https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=600&q=80','https://images.unsplash.com/photo-1598289431512-b97b0917affd?w=600&q=80','https://images.unsplash.com/photo-1598289431512-b97b0917affe?w=600&q=80'], description:'Set of 5 resistance bands, different levels, carry bag, exercise guide.', colors:['#1a1a2e'], sizes:['Standard'], featured:false },
    { id:40, title:'Essential Oil Collection', category:'beauty', price:399, originalPrice:799, rating:4.4, reviews:3456, badge:'sale', badgeText:'-50%', image:'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&q=80', images:['https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600&q=80','https://images.unsplash.com/photo-1608571423902-eed4a5ad8109?w=600&q=80','https://images.unsplash.com/photo-1608571423902-eed4a5ad8110?w=600&q=80'], description:'Set of 6 pure essential oils, lavender, peppermint, tea tree, eucalyptus, etc.', colors:['#f5f5f5'], sizes:['10ml','30ml'], featured:false },
    { id:41, title:'Wireless Charging Pad', category:'electronics', price:499, originalPrice:999, rating:4.3, reviews:7654, badge:'sale', badgeText:'-50%', image:'https://images.unsplash.com/photo-1607827448387-a67db1383b59?w=400&q=80', images:['https://images.unsplash.com/photo-1607827448387-a67db1383b59?w=600&q=80','https://images.unsplash.com/photo-1586816879360-004f5b8c44e1?w=600&q=80','https://images.unsplash.com/photo-1586816879360-004f5b8c44e2?w=600&q=80'], description:'Fast wireless charger, 15W, LED indicator, slim design, compatible with all Qi devices.', colors:['#1a1a2e','#f5f5f5'], sizes:['Standard'], featured:false },
    { id:42, title:'Winter Down Jacket', category:'fashion', price:3499, originalPrice:5999, rating:4.7, reviews:1876, badge:'sale', badgeText:'-41%', image:'https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=400&q=80', images:['https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=600&q=80','https://images.unsplash.com/photo-1544923246-77307dd270b5?w=600&q=80','https://images.unsplash.com/photo-1544923246-77307dd270b6?w=600&q=80'], description:'800-fill down jacket, waterproof shell, removable hood, packable.', colors:['#1a1a2e','#2d3436','#c0392b'], sizes:['S','M','L','XL','XXL'], featured:true },
    { id:43, title:'Smart Coffee Maker', category:'home', price:3499, originalPrice:5499, rating:4.5, reviews:1234, badge:'sale', badgeText:'-36%', image:'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=400&q=80', images:['https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=600&q=80','https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e7?w=600&q=80','https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e8?w=600&q=80'], description:'Smart coffee maker, app scheduled brewing, thermal carafe, 12-cup.', colors:['#1a1a2e','#f5f5f5'], sizes:['Standard'], featured:false },
    { id:44, title:'Luxury Bathrobe', category:'beauty', price:1299, originalPrice:1999, rating:4.6, reviews:2109, badge:'sale', badgeText:'-35%', image:'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=400&q=80', images:['https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=600&q=80','https://images.unsplash.com/photo-1621892570963-87e2b99cc1d4?w=600&q=80','https://images.unsplash.com/photo-1621892570963-87e2b99cc1d5?w=600&q=80'], description:'Turkish cotton bathrobe, 100% organic, 600gsm, shawl collar, knee-length.', colors:['#f5f5f5','#e8e8e8','#1a1a2e'], sizes:['S','M','L','XL'], featured:false },
    { id:45, title:'Drone 4K Camera', category:'electronics', price:19999, originalPrice:29999, rating:4.6, reviews:876, badge:'trending', badgeText:'Trending', image:'https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?w=400&q=80', images:['https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?w=600&q=80','https://images.unsplash.com/photo-1507582020474-9a35b7d455da?w=600&q=80','https://images.unsplash.com/photo-1507582020474-9a35b7d455db?w=600&q=80'], description:'4K HDR drone, 3-axis gimbal, 30min flight, obstacle avoidance, foldable.', colors:['#1a1a2e'], sizes:['Standard'], featured:false },
    { id:46, title:'Hair Dryer Professional', category:'beauty', price:1499, originalPrice:2499, rating:4.5, reviews:3210, badge:'sale', badgeText:'-40%', image:'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&q=80', images:['https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80','https://images.unsplash.com/photo-1522337360788-8b13dee7a37f?w=600&q=80','https://images.unsplash.com/photo-1522337360788-8b13dee7a380?w=600&q=80'], description:'Ionic hair dryer, 1875W, diffuser, concentrator, cool shot, lightweight.', colors:['#f5f5f5','#1a1a2e'], sizes:['Standard'], featured:false },
    { id:47, title:'Backpack Laptop 15"', category:'accessories', price:999, originalPrice:1799, rating:4.5, reviews:4321, badge:'sale', badgeText:'-44%', image:'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80', images:['https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80','https://images.unsplash.com/photo-1553062407-98eeb64c6a63?w=600&q=80','https://images.unsplash.com/photo-1553062407-98eeb64c6a64?w=600&q=80'], description:'Waterproof laptop backpack, padded 15" compartment, USB port, anti-theft.', colors:['#1a1a2e','#2d3436'], sizes:['Standard'], featured:false },
    { id:48, title:'Treadmill Smart Home', category:'sports', price:29999, originalPrice:49999, rating:4.6, reviews:654, badge:'sale', badgeText:'-40%', image:'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=400&q=80', images:['https://images.unsplash.com/photo-1576678927484-cc907957088c?w=600&q=80','https://images.unsplash.com/photo-1576678927484-cc907957088d?w=600&q=80','https://images.unsplash.com/photo-1576678927484-cc907957088e?w=600&q=80'], description:'Foldable treadmill, 12% incline, app control, heart rate monitor, 300lb capacity.', colors:['#1a1a2e'], sizes:['Standard'], featured:false },
    { id:49, title:'Patterned Throw Blanket', category:'home', price:599, originalPrice:999, rating:4.4, reviews:2345, badge:'sale', badgeText:'-40%', image:'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&q=80', images:['https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80','https://images.unsplash.com/photo-1559827260-dc66d52bef1a?w=600&q=80','https://images.unsplash.com/photo-1559827260-dc66d52bef1b?w=600&q=80'], description:'Premium throw blanket, 50x70", ultra-soft microfiber, machine washable.', colors:['#8B4513','#2d3436','#c0392b'], sizes:['Standard','Oversized'], featured:false },
    { id:50, title:'Glasses Blue Light Blocking', category:'accessories', price:799, originalPrice:1499, rating:4.4, reviews:5432, badge:'sale', badgeText:'-46%', image:'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=400&q=80', images:['https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=600&q=80','https://images.unsplash.com/photo-1574258495973-f010dfbb5372?w=600&q=80','https://images.unsplash.com/photo-1574258495973-f010dfbb5373?w=600&q=80'], description:'Blue light blocking glasses, anti-glare, lightweight titanium frame, UV protection.', colors:['#1a1a2e','#8B4513','#f5f5f5'], sizes:['Standard'], featured:false },
    { id:51, title:'Portable Power Bank 20000mAh', category:'electronics', price:599, originalPrice:1299, rating:4.6, reviews:8765, badge:'popular', badgeText:'Popular', image:'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&q=80', images:['https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=600&q=80','https://images.unsplash.com/photo-1609091839311-d5365f9ff1c6?w=600&q=80','https://images.unsplash.com/photo-1609091839311-d5365f9ff1c7?w=600&q=80'], description:'20000mAh power bank, 65W fast charge, USB-C, 2 devices, LED display.', colors:['#1a1a2e','#f5f5f5'], sizes:['Standard'], featured:false },
    { id:52, title:'Cashmere Beanie Hat', category:'fashion', price:699, originalPrice:1299, rating:4.3, reviews:1876, badge:'sale', badgeText:'-46%', image:'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=400&q=80', images:['https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=600&q=80','https://images.unsplash.com/photo-1576871337632-b9aef4c17aba?w=600&q=80','https://images.unsplash.com/photo-1576871337632-b9aef4c17abb?w=600&q=80'], description:'Pure cashmere beanie, ribbed knit, turn-up cuff, one size, made in Scotland.', colors:['#2d3436','#8B4513','#c0392b','#e8e8e8'], sizes:['Standard'], featured:false },
    { id:53, title:'Electric Kettle Smart', category:'home', price:1299, originalPrice:1999, rating:4.5, reviews:3210, badge:'sale', badgeText:'-35%', image:'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&q=80', images:['https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600&q=80','https://images.unsplash.com/photo-1575424909136-0b9fc3aef4da?w=600&q=80','https://images.unsplash.com/photo-1575424909136-0b9fc3aef4db?w=600&q=80'], description:'Smart kettle, temperature control, keep warm, 1.7L, BPA-free, stainless steel.', colors:['#f5f5f5','#1a1a2e'], sizes:['Standard'], featured:false },
    { id:54, title:'Foam Roller Muscle Recovery', category:'sports', price:399, originalPrice:699, rating:4.5, reviews:4321, badge:'sale', badgeText:'-42%', image:'https://images.unsplash.com/photo-1607827448387-a67db1383b59?w=400&q=80', images:['https://images.unsplash.com/photo-1607827448387-a67db1383b59?w=600&q=80','https://images.unsplash.com/photo-1607827448387-a67db1383b5a?w=600&q=80','https://images.unsplash.com/photo-1607827448387-a67db1383b5b?w=600&q=80'], description:'High-density foam roller, 18", muscle recovery, deep tissue massage.', colors:['#1a1a2e','#c0392b'], sizes:['Standard'], featured:false }
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

  const sampleReviews = [
    { name:'Priya Sharma', avatar:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80', rating:5, text:'Amazing quality! Exceeded my expectations. Fast delivery and great packaging.', date:'2 days ago', verified:true },
    { name:'Rahul Patel', avatar:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80', rating:5, text:'Best purchase I have made this year. The product is exactly as described. Highly recommend!', date:'5 days ago', verified:true },
    { name:'Ananya Singh', avatar:'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80', rating:4, text:'Very good product. Shipping was fast. Would buy again from AshMart.', date:'1 week ago', verified:true },
    { name:'Vikram Reddy', avatar:'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80', rating:5, text:'Premium quality and great value for money. The packaging was also excellent.', date:'1 week ago', verified:false },
    { name:'Meera Joshi', avatar:'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80', rating:4, text:'Love this product! Works perfectly. Customer support was also very helpful.', date:'2 weeks ago', verified:true },
    { name:'Arjun Nair', avatar:'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80', rating:5, text:'Exceeded expectations! Great build quality and the price is unbeatable.', date:'2 weeks ago', verified:true },
    { name:'Sneha Gupta', avatar:'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&q=80', rating:5, text:'Absolutely worth every penny. Fastest delivery I have ever experienced.', date:'3 weeks ago', verified:false },
    { name:'Karthik Menon', avatar:'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80', rating:4, text:'Good product overall. A bit expensive but the quality justifies the price.', date:'3 weeks ago', verified:true }
  ];
  function getReviewsForProduct(pid) {
    const seed = pid * 7;
    const count = 3 + (seed % 3);
    const shuffled = [...sampleReviews].sort(() => (seed * 0.1) - 0.5);
    return shuffled.slice(0, count);
  }
  function renderStarDistribution(rating) {
    const dist = [0, 0, 0, 0, 0];
    const total = 50;
    dist[4] = Math.round(total * (rating / 5) * 0.7);
    dist[3] = Math.round(total * 0.2);
    dist[2] = Math.round(total * 0.07);
    dist[1] = Math.round(total * 0.02);
    dist[0] = total - dist[1] - dist[2] - dist[3] - dist[4];
    return dist;
  }
  const indianCities = ['Mumbai','Delhi','Bangalore','Hyderabad','Chennai','Kolkata','Pune','Ahmedabad','Jaipur','Lucknow','Surat','Kochi','Indore','Bhopal','Nagpur'];

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
    scrollBtn: $('#scrollBtn'), notification: $('#notification'),
    checkoutPanel: $('#checkoutPanel'), checkoutClose: $('#checkoutClose'), checkoutBack: $('#checkoutBack'), checkoutOverlayBg: $('#checkoutOverlayBg'),
    authModal: $('#authModal'), authOverlay: $('#authOverlay'), authClose: $('#authClose'), loginBtn: $('#loginBtn'),
    authLoginWrap: $('#authLoginWrap'), authRegisterWrap: $('#authRegisterWrap'), authProfileWrap: $('#authProfileWrap'),
    authLoginForm: $('#authLoginForm'), authRegisterForm: $('#authRegisterForm'),
    profileName: $('#profileName'), profileEmail: $('#profileEmail'),
    compareBar: $('#compareBar'), compareCount: $('#compareCount'), compareThumbs: $('#compareThumbs'), compareBtn: $('#compareBtn'), compareClose: $('#compareClose'),
    trendingSwiper: $('#trendingSwiper'), trendingWrapper: $('#trendingWrapper'),
    testimonialWrapper: $('#testimonialWrapper'),
    newArrivalsGrid: $('#newArrivalsGrid'), bestSellersGrid: $('#bestSellersGrid'),
    offerDays: $('#offerDays'), offerHours: $('#offerHours'), offerMins: $('#offerMins'), offerSecs: $('#offerSecs'),
    flashHours: $('#flashHours'), flashMins: $('#flashMins'), flashSecs: $('#flashSecs')
  };

  const state = { cart: [], wishlist: [], compare: [], discountApplied: false, showAll: false, activeFilter: 'all', selectedPayment: 'online', recentlyViewed: [], giftWrap: false };

  /* ===== UTILITIES ===== */
  const fmt = n => '₹' + n.toLocaleString('en-IN', {minimumFractionDigits: 2, maximumFractionDigits: 2});
  const stars = r => '<i class="fas fa-star"></i>'.repeat(Math.floor(r)) + (r%1>=.5?'<i class="fas fa-star-half-alt"></i>':'') + '<i class="far fa-star"></i>'.repeat(5-Math.ceil(r));
  const disc = (o,c) => Math.round((o-c)/o*100);
  const ls = { get(k,d){try{return JSON.parse(localStorage.getItem('am_'+k))||d}catch{return d}}, set(k,v){try{localStorage.setItem('am_'+k,JSON.stringify(v))}catch{}} };
  state.recentlyViewed = ls.get('recentlyViewed', []);

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
    const gw = state.giftWrap ? 49 : 0;
    return { sub, disc, ship, tax, total: taxable + tax + ship + gw, gw, count: state.cart.reduce((s,i)=>s+i.qty,0) };
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
    document.getElementById('cartGiftWrap').textContent = t.gw > 0 ? fmt(t.gw) : fmt(0);
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

  /* ===== SOCIAL PROOF ===== */
  function startSocialProof() {
    const names = ['Priya from Mumbai','Rahul from Delhi','Ananya from Bangalore','Vikram from Hyderabad','Meera from Chennai','Arjun from Kolkata','Sneha from Pune','Karthik from Ahmedabad','Deepa from Jaipur','Amit from Lucknow','Neha from Kochi','Rohan from Indore','Pooja from Nagpur','Sanjay from Bhopal','Kavya from Surat'];
    function showSocialProof() {
      const product = products[Math.floor(Math.random() * products.length)];
      const city = names[Math.floor(Math.random() * names.length)];
      const toast = document.createElement('div');
      toast.className = 'social-proof-toast';
      toast.innerHTML = `<img src="${product.image}" alt="" class="social-proof-img"><div class="social-proof-text"><strong>${city}</strong> just purchased <span>${product.title.length > 30 ? product.title.substring(0, 30) + '...' : product.title}</span></div>`;
      document.body.appendChild(toast);
      requestAnimationFrame(() => toast.classList.add('show'));
      setTimeout(() => { toast.classList.remove('show'); setTimeout(() => toast.remove(), 400); }, 4000);
    }
    setTimeout(() => { showSocialProof(); setInterval(showSocialProof, 15000 + Math.random() * 10000); }, 8000);
  }

  /* ===== RECENTLY VIEWED ===== */
  function renderRecentlyViewed() {
    const grid = document.getElementById('recentlyViewedGrid');
    const section = document.getElementById('recentlyViewedSection');
    if (!grid || !section) return;
    if (state.recentlyViewed.length === 0) { section.style.display = 'none'; return; }
    section.style.display = 'block';
    grid.innerHTML = state.recentlyViewed.slice(0, 6).map(id => {
      const p = products.find(x => x.id === id);
      return p ? productHTML(p) : '';
    }).join('');
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
    const na = products.filter(p => p.badge === 'new' || p.badge === 'trending').slice(0, 4);
    D.newArrivalsGrid.innerHTML = na.map(p => productHTML(p)).join('');
  }

  /* ===== RENDER BEST SELLERS ===== */
  function renderBestSellers() {
    const bs = products.filter(p => p.badge === 'best-seller' || p.badge === 'popular').slice(0, 4);
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

  /* ===== PRODUCT DETAIL (QUICK VIEW) ===== */
  let currentGalleryIndex = 0;
  let currentModalProductId = null;
  window.__saQuickView = function (id) {
    const p = products.find(x => x.id === id); if (!p) return;
    currentGalleryIndex = 0;
    currentModalProductId = id;
    state.recentlyViewed = state.recentlyViewed.filter(x => x !== id);
    state.recentlyViewed.unshift(id);
    if (state.recentlyViewed.length > 10) state.recentlyViewed = state.recentlyViewed.slice(0, 10);
    ls.set('recentlyViewed', state.recentlyViewed);
    renderRecentlyViewed();
    const d = p.originalPrice ? disc(p.originalPrice, p.price) : 0;
    const inW = state.wishlist.includes(p.id);
    const stock = p.reviews > 3000 ? 'in-stock' : p.reviews > 1000 ? 'in-stock' : 'low-stock';
    const stockLabel = p.reviews > 3000 ? 'In Stock — Ready to ship' : p.reviews > 1000 ? 'In Stock' : 'Low Stock — Order soon';
    const stockCount = p.reviews > 3000 ? Math.floor(Math.random() * 40) + 20 : Math.floor(Math.random() * 8) + 2;
    const viewerCount = Math.floor(Math.random() * 35) + 5;
    const specs = [
      { label: 'Brand', value: 'AshMart Verified' },
      { label: 'Category', value: p.category.charAt(0).toUpperCase() + p.category.slice(1) },
      { label: 'Rating', value: p.rating + ' / 5' },
      { label: 'Reviews', value: p.reviews.toLocaleString() },
      { label: 'Warranty', value: p.category === 'electronics' ? '1 Year' : '30 Days' },
      { label: 'Returns', value: '7-Day Easy Returns' },
    ];
    const specsHtml = specs.map(s => `<div class="modal-spec-item"><span class="spec-label">${s.label}</span><span class="spec-value">${s.value}</span></div>`).join('');
    const deliveryDate = new Date(); deliveryDate.setDate(deliveryDate.getDate() + Math.floor(Math.random() * 4) + 3);
    const deliveryStr = deliveryDate.toLocaleDateString('en-IN', { weekday: 'short', month: 'short', day: 'numeric' });
    const reviews = getReviewsForProduct(p.id);
    const dist = renderStarDistribution(p.rating);
    const maxDist = Math.max(...dist);
    const reviewsHtml = reviews.map(r => `
      <div class="review-card">
        <div class="review-header">
          <img src="${r.avatar}" alt="${r.name}" class="review-avatar">
          <div class="review-meta">
            <div class="review-name">${r.name} ${r.verified ? '<span class="review-verified"><i class="fas fa-check-circle"></i> Verified</span>' : ''}</div>
            <div class="review-stars">${stars(r.rating)}</div>
          </div>
          <span class="review-date">${r.date}</span>
        </div>
        <p class="review-text">${r.text}</p>
      </div>
    `).join('');
    const distHtml = dist.reverse().map((count, i) => {
      const starsNum = 5 - i;
      const pct = maxDist > 0 ? (count / maxDist) * 100 : 0;
      return `<div class="rating-dist-row"><span class="rating-dist-label">${starsNum} <i class="fas fa-star"></i></span><div class="rating-dist-bar"><div class="rating-dist-fill" style="width:${pct}%"></div></div><span class="rating-dist-count">${count}</span></div>`;
    }).join('');
    const related = products.filter(x => x.category === p.category && x.id !== p.id).slice(0, 4);
    const relatedHtml = related.map(r => `
      <div class="related-card" onclick="window.__saQuickView(${r.id})">
        <img src="${r.image}" alt="${r.title}" loading="lazy">
        <div class="related-info">
          <h4>${r.title.length > 28 ? r.title.substring(0, 28) + '...' : r.title}</h4>
          <span class="related-price">${fmt(r.price)}</span>
        </div>
      </div>
    `).join('');
    const shareUrl = encodeURIComponent(window.location.href);
    const shareText = encodeURIComponent('Check out this ' + p.title + ' on AshMart!');
    D.modalBody.innerHTML = `
      <div class="modal-gallery">
        <div class="modal-gallery-main">
          <button class="modal-gallery-arrow modal-gallery-prev" onclick="window.__saGalleryNav(-1,${p.id})"><i class="fas fa-chevron-left"></i></button>
          <img src="${p.images[0]}" alt="${p.title}" class="modal-main-image" id="modalMainImage">
          <button class="modal-gallery-arrow modal-gallery-next" onclick="window.__saGalleryNav(1,${p.id})"><i class="fas fa-chevron-right"></i></button>
          <span class="modal-gallery-counter" id="modalGalleryCounter">1 / ${p.images.length}</span>
          ${p.badge ? `<span class="modal-badge ${p.badge}">${p.badgeText}</span>` : ''}
        </div>
        <div class="modal-thumbnails">${p.images.map((img,i) => `<img src="${img}" alt="${p.title} ${i+1}" class="modal-thumb ${i===0?'active':''}" onclick="window.__saGalleryGo(${i},${p.id})">`).join('')}</div>
      </div>
      <div class="modal-info">
        <div class="modal-category">${p.category}</div>
        <h2 class="modal-title">${p.title}</h2>
        <div class="modal-rating"><span class="stars">${stars(p.rating)}</span><span>${p.rating} (${p.reviews.toLocaleString()} reviews)</span></div>
        <div class="modal-price-row">
          <div class="modal-price">${fmt(p.price)}</div>
          ${p.originalPrice ? `<span class="modal-original-price">${fmt(p.originalPrice)}</span>` : ''}
          ${d > 0 ? `<span class="modal-discount">-${d}% OFF</span>` : ''}
        </div>
        <div class="modal-stock ${stock}"><i class="fas fa-circle"></i> ${stockLabel}</div>
        <div class="modal-urgency"><span class="modal-urgency-views"><i class="fas fa-eye"></i> ${viewerCount} people viewing this right now</span><span class="modal-urgency-stock"><i class="fas fa-fire"></i> Only ${stockCount} left in stock</span></div>
        <p class="modal-description">${p.description}</p>
        <div class="modal-estimated-delivery">
          <i class="fas fa-truck-fast"></i>
          <div class="modal-estimated-delivery-text">
            <strong>Delivery by ${deliveryStr}</strong>
            <span>Free delivery on orders above ₹5,000 · Express available</span>
          </div>
        </div>
        <div class="modal-trust-row">
          <div class="modal-trust-item"><i class="fas fa-shield-alt"></i> Genuine Product</div>
          <div class="modal-trust-item"><i class="fas fa-undo"></i> 7-Day Returns</div>
          <div class="modal-trust-item"><i class="fas fa-lock"></i> Secure Checkout</div>
        </div>
        <div class="modal-specs"><h4>Product Details</h4><div class="modal-specs-grid">${specsHtml}</div></div>
        <div class="modal-colors"><h4>Colors</h4><div class="color-options">${p.colors.map((c,i) => `<button class="color-btn ${i===0?'active':''}" style="background:${c}" onclick="document.querySelectorAll('#modalBody .color-btn').forEach(b=>b.classList.remove('active'));this.classList.add('active')"></button>`).join('')}</div></div>
        <div class="modal-sizes"><h4>Size</h4><div class="size-options">${p.sizes.map((s,i) => `<button class="size-btn ${i===0?'active':''}" onclick="document.querySelectorAll('#modalBody .size-btn').forEach(b=>b.classList.remove('active'));this.classList.add('active')">${s}</button>`).join('')}</div></div>
        <div class="modal-quantity"><h4>Qty:</h4><button onclick="const e=this.nextElementSibling;let v=parseInt(e.textContent);if(v>1){v--;e.textContent=v}">−</button><span id="modalQty">1</span><button onclick="const e=this.previousElementSibling;let v=parseInt(e.textContent);v++;e.textContent=v">+</button></div>
        <div class="modal-actions">
          <button class="btn btn-primary" onclick="window.__saCartAdd(${p.id});window.__saCloseModal()"><i class="fas fa-shopping-bag"></i> Add to Cart</button>
          <button class="modal-wishlist-btn ${inW?'active':''}" onclick="window.__saWishlistToggle(${p.id});window.__saQuickView(${p.id})" title="Wishlist"><i class="${inW?'fas':'far'} fa-heart"></i></button>
        </div>
        <div class="modal-share"><h4>Share this product</h4><div class="share-buttons">
          <a href="https://api.whatsapp.com/send?text=${shareText}%20${shareUrl}" target="_blank" class="share-btn share-whatsapp"><i class="fab fa-whatsapp"></i> WhatsApp</a>
          <a href="https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}" target="_blank" class="share-btn share-twitter"><i class="fab fa-twitter"></i> Twitter</a>
          <button class="share-btn share-copy" onclick="navigator.clipboard.writeText(window.location.href);this.innerHTML='<i class=\\'fas fa-check\\'></i> Copied!';setTimeout(()=>this.innerHTML='<i class=\\'fas fa-link\\'></i> Copy Link',2000)"><i class="fas fa-link"></i> Copy Link</button>
        </div></div>
        <div class="modal-reviews-section">
          <div class="modal-reviews-header">
            <h4>Customer Reviews</h4>
            <div class="modal-reviews-summary">
              <div class="reviews-big-rating"><span>${p.rating}</span><div class="reviews-big-stars">${stars(p.rating)}</div><span class="reviews-total">${p.reviews.toLocaleString()} reviews</span></div>
              <div class="reviews-dist">${distHtml}</div>
            </div>
          </div>
          <div class="reviews-list">${reviewsHtml}</div>
        </div>
        ${related.length > 0 ? `<div class="modal-related"><h4>You may also like</h4><div class="related-grid">${relatedHtml}</div></div>` : ''}
      </div>`;
    D.productModal.classList.add('active');
    D.body.style.overflow = 'hidden';
  };

  window.__saGalleryNav = function(dir, id) {
    const p = products.find(x => x.id === id); if (!p) return;
    currentGalleryIndex = (currentGalleryIndex + dir + p.images.length) % p.images.length;
    window.__saGalleryGo(currentGalleryIndex, id);
  };

  window.__saGalleryGo = function(idx, id) {
    const p = products.find(x => x.id === id); if (!p) return;
    currentGalleryIndex = idx;
    const mainImg = document.getElementById('modalMainImage');
    const counter = document.getElementById('modalGalleryCounter');
    if (mainImg) mainImg.src = p.images[idx];
    if (counter) counter.textContent = (idx + 1) + ' / ' + p.images.length;
    document.querySelectorAll('#modalBody .modal-thumb').forEach((t, i) => {
      t.classList.toggle('active', i === idx);
    });
  };

  function closeModal() { D.productModal.classList.remove('active'); D.body.style.overflow = ''; currentModalProductId = null; }
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

  /* ===== UPDATE SCROLL BUTTON ===== */
  function updateScrollBtn() {
    const sy = window.scrollY;
    const dh = document.documentElement.scrollHeight - window.innerHeight;
    const nearBottom = dh - sy < 300;
    const icon = document.getElementById('scrollIcon');
    if (icon) icon.className = nearBottom ? 'fas fa-chevron-up' : 'fas fa-chevron-down';
  }

  /* ===== CHECKOUT ===== */
  let ckCurrentStep = 1;
  let ckShippingData = {};

  function lockScroll() {
    state._scrollY = window.scrollY;
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
  }
  function unlockScroll() {
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
    window.scrollTo(0, state._scrollY || 0);
  }

  function openCheckout() {
    if (!state.cart.length) { notif('Your cart is empty', 'error'); return; }
    D.cartPanel.classList.remove('active');
    ckCurrentStep = 1;
    ckShippingData = {};
    updateCkSteps();
    renderCheckoutSummary();
    D.checkoutPanel.classList.add('active');
    lockScroll();
  }
  function closeCheckout() {
    D.checkoutPanel.classList.remove('active');
    unlockScroll();
  }

  function goToStep(n) {
    if (n === 3 && !validateShipping()) return;
    ckCurrentStep = n;
    updateCkSteps();
    if (n === 3) renderPaymentReview();
  }

  function updateCkSteps() {
    $$('.checkout-step').forEach(el => {
      const s = parseInt(el.dataset.step);
      el.classList.remove('active', 'completed');
      if (s === ckCurrentStep) el.classList.add('active');
      else if (s < ckCurrentStep) el.classList.add('completed');
    });
    $$('.checkout-step-line').forEach((line, i) => {
      line.classList.toggle('filled', i < ckCurrentStep - 1);
    });
    $$('.checkout-step-content').forEach(c => c.classList.remove('active'));
    if (ckCurrentStep <= 3) {
      const stepEl = document.getElementById('checkoutStep' + ckCurrentStep);
      if (stepEl) stepEl.classList.add('active');
    }
  }

  function renderCheckoutSummary() {
    const items = state.cart.map(i => {
      const p = products.find(x => x.id === i.id); if (!p) return '';
      return `<div class="checkout-item"><img src="${p.image}" alt="${p.title}" loading="lazy"><div class="checkout-item-info"><h4>${p.title}</h4><div class="checkout-item-meta">${p.category}</div><div class="checkout-item-price">${fmt(p.price)} <span class="checkout-item-qty">× ${i.qty}</span></div></div></div>`;
    }).join('');
    document.getElementById('checkoutItems').innerHTML = items;
    updateCkTotals();
    document.getElementById('checkoutCouponInput').value = '';
    const couponBtn = document.getElementById('checkoutApplyCoupon');
    if (state.discountApplied) { couponBtn.textContent = '✓ Applied'; couponBtn.classList.add('applied'); }
    else { couponBtn.textContent = 'Apply'; couponBtn.classList.remove('applied'); }
  }

  function updateCkTotals() {
    const t = cartTotals();
    document.getElementById('ckSubtotal').textContent = fmt(t.sub);
    document.getElementById('ckShipping').textContent = t.ship === 0 ? 'Free' : fmt(t.ship);
    document.getElementById('ckTax').textContent = fmt(t.tax);
    const discRow = document.getElementById('ckDiscRow');
    if (t.disc > 0) { discRow.style.display = 'flex'; document.getElementById('ckDiscount').textContent = '-' + fmt(t.disc); }
    else { discRow.style.display = 'none'; }
    const gwRow = document.getElementById('ckGiftWrapRow');
    if (gwRow) { gwRow.style.display = t.gw > 0 ? 'flex' : 'none'; document.getElementById('ckGiftWrap').textContent = fmt(t.gw); }
    document.getElementById('ckTotal').textContent = fmt(t.total);
    document.getElementById('ckPayTotal').textContent = fmt(t.total);
  }

  function validateShipping() {
    let valid = true;
    const fields = [
      { id: 'ckName', test: v => v.trim().length >= 2, msg: 'Enter your full name' },
      { id: 'ckPhone', test: v => /^[6-9]\d{9}$/.test(v.trim()), msg: 'Enter valid 10-digit phone' },
      { id: 'ckEmail', test: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()), msg: 'Enter valid email address' },
      { id: 'ckAddress', test: v => v.trim().length >= 5, msg: 'Enter complete address' },
      { id: 'ckCity', test: v => v.trim().length >= 2, msg: 'Enter city name' },
      { id: 'ckPincode', test: v => /^\d{6}$/.test(v.trim()), msg: 'Enter valid 6-digit pincode' },
      { id: 'ckState', test: v => v.trim().length > 0, msg: 'Select your state' }
    ];
    fields.forEach(f => {
      const el = document.getElementById(f.id);
      const val = el.value;
      if (!f.test(val)) {
        el.classList.add('error');
        let errEl = el.parentElement.querySelector('.field-error');
        if (!errEl) { errEl = document.createElement('div'); errEl.className = 'field-error'; el.parentElement.appendChild(errEl); }
        errEl.textContent = f.msg;
        errEl.style.display = 'block';
        valid = false;
      } else {
        el.classList.remove('error');
        const errEl = el.parentElement.querySelector('.field-error');
        if (errEl) errEl.style.display = 'none';
      }
    });
    if (!valid) notif('Please fill all required fields correctly', 'error');
    else {
      ckShippingData = {
        name: document.getElementById('ckName').value.trim(),
        phone: document.getElementById('ckPhone').value.trim(),
        email: document.getElementById('ckEmail').value.trim(),
        address: document.getElementById('ckAddress').value.trim(),
        landmark: document.getElementById('ckLandmark').value.trim(),
        city: document.getElementById('ckCity').value.trim(),
        pincode: document.getElementById('ckPincode').value.trim(),
        state: document.getElementById('ckState').value,
        note: document.getElementById('ckNote').value.trim()
      };
    }
    return valid;
  }

  function renderPaymentReview() {
    const s = ckShippingData;
    const addr = `${s.name}<br>${s.address}${s.landmark ? ', ' + s.landmark : ''}<br>${s.city}, ${s.state} - ${s.pincode}<br>Phone: ${s.phone}<br>Email: ${s.email}`;
    document.getElementById('ckShippingReview').innerHTML = addr;
    const t = cartTotals();
    let itemsHtml = state.cart.map(i => {
      const p = products.find(x => x.id === i.id); if (!p) return '';
      return `<div style="display:flex;justify-content:space-between;padding:4px 0;font-size:12px;"><span>${p.title} × ${i.qty}</span><strong>${fmt(p.price * i.qty)}</strong></div>`;
    }).join('');
    itemsHtml += `<div style="border-top:1px solid var(--border);margin-top:8px;padding-top:8px;font-size:12px;">`;
    itemsHtml += `<div style="display:flex;justify-content:space-between;"><span>Shipping</span><span>${t.ship === 0 ? 'Free' : fmt(t.ship)}</span></div>`;
    itemsHtml += `<div style="display:flex;justify-content:space-between;"><span>Tax</span><span>${fmt(t.tax)}</span></div>`;
    if (t.disc > 0) itemsHtml += `<div style="display:flex;justify-content:space-between;color:var(--secondary);"><span>Discount</span><span>-${fmt(t.disc)}</span></div>`;
    itemsHtml += `</div>`;
    document.getElementById('ckOrderReview').innerHTML = itemsHtml;
  }

  async function initCOD() {
    const t = cartTotals();
    if (t.total <= 0) { notif('Invalid order total', 'error'); return; }
    if (t.total > 25000) { notif('COD is available for orders up to ₹25,000', 'error'); return; }
    const payBtn = document.getElementById('payNowBtn');
    payBtn.disabled = true;
    payBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Placing your order...';

    const items = state.cart.map(ci => {
      const p = products.find(x => x.id === ci.id);
      return { product: p ? (p._id || String(p.id)) : String(ci.id), title: ci.title, image: ci.image, price: ci.price, quantity: ci.qty, size: ci.size, color: ci.color };
    });
    const shippingAddress = {
      fullName: ckShippingData.name, email: ckShippingData.email, phone: ckShippingData.phone,
      street: ckShippingData.address, landmark: ckShippingData.landmark, city: ckShippingData.city,
      state: ckShippingData.state, pincode: ckShippingData.pincode
    };
    const orderPayload = {
      items, shippingAddress, paymentMethod: 'cod',
      subtotal: t.sub, shipping: t.ship, tax: t.tax, discount: t.disc, total: t.total,
      note: ckShippingData.note || ''
    };

    let savedOrder = null;
    try {
      const orderRes = await API.createOrder(orderPayload);
      savedOrder = orderRes.order;
    } catch (e) {
      console.log('Backend order save skipped:', e.message);
    }

    setTimeout(() => {
      showOrderConfirm('COD — Pay on delivery', t.total, savedOrder);
      payBtn.disabled = false;
      payBtn.innerHTML = '<i class="fas fa-check-circle"></i> Place Order with COD';
    }, 1200);
  }

  async function initRazorpay() {
    const t = cartTotals();
    if (t.total <= 0) { notif('Invalid order total', 'error'); return; }
    const payBtn = document.getElementById('payNowBtn');
    payBtn.disabled = true;
    payBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Creating order...';

    /* --- Build order items --- */
    const items = state.cart.map(ci => {
      const p = products.find(x => x.id === ci.id);
      return { product: p ? (p._id || String(p.id)) : String(ci.id), title: ci.title, image: ci.image, price: ci.price, quantity: ci.qty, size: ci.size, color: ci.color };
    });
    const shippingAddress = {
      fullName: ckShippingData.name, email: ckShippingData.email, phone: ckShippingData.phone,
      street: ckShippingData.address, landmark: ckShippingData.landmark, city: ckShippingData.city,
      state: ckShippingData.state, pincode: ckShippingData.pincode
    };
    const orderPayload = {
      items, shippingAddress, paymentMethod: 'razorpay',
      subtotal: t.sub, shipping: t.ship, tax: t.tax, discount: t.disc, total: t.total,
      note: ckShippingData.note || ''
    };

    /* --- Save order to backend --- */
    let savedOrder = null;
    try {
      const orderRes = await API.createOrder(orderPayload);
      savedOrder = orderRes.order;
    } catch (e) {
      console.log('Backend order save skipped:', e.message);
    }

    /* --- Create Razorpay order on server if possible --- */
    let razorpayOrderId = undefined;
    if (savedOrder) {
      try {
        const rpRes = await API.createRazorpayOrder(Math.round(t.total * 100), savedOrder._id);
        razorpayOrderId = rpRes.razorpayOrder.id;
      } catch (e) {
        console.log('Server Razorpay order skipped:', e.message);
      }
    }

    /* --- Fetch Razorpay key from server, fallback to hardcoded --- */
    let razorpayKey = 'rzp_test_TEEyk8qRTMqPmr';
    try {
      const keyRes = await API.getRazorpayKey();
      if (keyRes && keyRes.key) razorpayKey = keyRes.key;
    } catch (e) {
      console.log('Using fallback Razorpay key');
    }

    /* --- Launch Razorpay --- */
    payBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Opening payment...';
    const isMobile = /Android|iPhone|iPad|iPod|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const options = {
      key: razorpayKey,
      amount: Math.round(t.total * 100),
      currency: 'INR',
      name: 'AshMart',
      description: savedOrder ? 'Order #' + savedOrder.orderNumber : 'Order Payment',
      image: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 32 32\'%3E%3Crect width=\'32\' height=\'32\' rx=\'8\' fill=\'%232563EB\'/%3E%3Ctext x=\'16\' y=\'22\' text-anchor=\'middle\' font-family=\'Arial\' font-weight=\'bold\' font-size=\'16\' fill=\'white\'%3EAM%3C/text%3E%3C/svg%3E',
      prefill: { name: ckShippingData.name, email: ckShippingData.email, contact: ckShippingData.phone },
      notes: { address: ckShippingData.address + ', ' + ckShippingData.city + ', ' + ckShippingData.state + ' - ' + ckShippingData.pincode, landmark: ckShippingData.landmark, order_note: ckShippingData.note },
      theme: { color: '#2563EB', hide_topbar: isMobile },
      ...(razorpayOrderId ? { order_id: razorpayOrderId } : {}),
      handler: async function(response) {
        if (savedOrder) {
          try {
            await API.verifyPayment({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              orderId: savedOrder._id
            });
          } catch (e) {
            console.log('Payment verification skipped:', e.message);
          }
        }
        showOrderConfirm(response.razorpay_payment_id, t.total, savedOrder);
      },
      modal: {
        ondismiss: function() {
          payBtn.disabled = false;
          payBtn.innerHTML = '<i class="fas fa-lock"></i> Pay Securely with Razorpay';
        },
        confirm_close: true,
        escape: false
      }
    };

    try {
      const rzp = new Razorpay(options);
      rzp.on('payment.failed', function(response) {
        notif('Payment failed. Please try again.', 'error');
        payBtn.disabled = false;
        payBtn.innerHTML = '<i class="fas fa-lock"></i> Pay Securely with Razorpay';
      });
      rzp.open();
    } catch(e) {
      notif('Razorpay not loaded. Please check your connection.', 'error');
      payBtn.disabled = false;
      payBtn.innerHTML = '<i class="fas fa-lock"></i> Pay Securely with Razorpay';
    }
  }

  function showOrderConfirm(paymentId, amount, savedOrder) {
    const orderId = savedOrder ? savedOrder.orderNumber : 'AM' + Date.now().toString(36).toUpperCase() + Math.random().toString(36).substring(2, 6).toUpperCase();
    document.getElementById('ckOrderId').textContent = orderId;
    document.getElementById('ckPaymentId').textContent = paymentId || 'COD';
    document.getElementById('ckPayAmount').textContent = fmt(amount);
    $$('.checkout-step-content').forEach(c => { c.classList.remove('active'); c.style.display = 'none'; });
    const confirmEl = document.getElementById('checkoutConfirm');
    confirmEl.style.display = 'flex';
    confirmEl.classList.add('active');
    $$('.checkout-step').forEach(el => el.classList.add('completed'));
    $$('.checkout-step-line').forEach(l => l.classList.add('filled'));
    state.cart = [];
    ls.set('cart', state.cart);
    cartRender();
    notif('Order placed successfully!', 'success');
    if (typeof confetti !== 'undefined') confetti({ particleCount: 200, spread: 100, origin: { y: .6 } });
  }

  function resetCheckout() {
    $$('.checkout-step-content').forEach(c => { c.style.display = ''; c.classList.remove('active'); });
    document.getElementById('checkoutConfirm').style.display = 'none';
    state.selectedPayment = 'online';
    const onlineOpt = document.getElementById('payOptOnline');
    const codOpt = document.getElementById('payOptCOD');
    if (onlineOpt) { onlineOpt.classList.add('active'); }
    if (codOpt) { codOpt.classList.remove('active'); }
    const payBtn = document.getElementById('payNowBtn');
    if (payBtn) {
      payBtn.innerHTML = '<i class="fas fa-lock"></i> Pay Securely with Razorpay';
      payBtn.style.background = '';
      payBtn.style.boxShadow = '';
      payBtn.disabled = false;
    }
    const codNote = document.getElementById('codNote');
    if (codNote) codNote.style.display = 'none';
    closeCheckout();
  }

  /* ===== AUTH ===== */
  function openAuth() {
    D.authModal.classList.add('active');
    D.body.style.overflow = 'hidden';
    updateAuthView();
  }
  function closeAuth() {
    D.authModal.classList.remove('active');
    D.body.style.overflow = '';
  }
  function updateAuthView() {
    const loggedIn = API.isLoggedIn();
    D.authLoginWrap.classList.remove('active');
    D.authRegisterWrap.classList.remove('active');
    D.authProfileWrap.classList.remove('active');
    const iconEl = D.loginBtn.querySelector('i');
    const spanEl = D.loginBtn.querySelector('span');
    if (loggedIn) {
      D.authProfileWrap.classList.add('active');
      const u = API.getUser();
      if (u) { D.profileName.textContent = u.name; D.profileEmail.textContent = u.email; }
      spanEl.textContent = u ? u.name.split(' ')[0] : 'Account';
      iconEl.className = 'fas fa-user-check';
      D.loginBtn.classList.add('logged-in');
    } else {
      D.authLoginWrap.classList.add('active');
      spanEl.textContent = 'Login';
      iconEl.className = 'fas fa-user';
      D.loginBtn.classList.remove('logged-in');
    }
  }
  function showAuthError(id, msg) { const el = document.getElementById(id); if (el) el.textContent = msg; }
  function clearAuthErrors() { $$('.auth-error').forEach(e => e.textContent = ''); $$('.auth-field input').forEach(i => i.classList.remove('error')); }

  /* ===== API PRODUCTS (fallback to local) ===== */
  let apiProductsLoaded = false;
  async function loadProductsFromAPI() {
    try {
      const data = await API.getProducts({ limit: 100 });
      if (data.products && data.products.length) {
        products.length = 0;
        data.products.forEach(p => products.push({
          id: parseInt(p._id.replace(/[^0-9]/g, '').substring(0, 8)) || products.length + 1,
          _id: p._id, title: p.title, category: p.category, price: p.price,
          originalPrice: p.originalPrice, rating: p.rating, reviews: p.reviews,
          badge: p.badge, badgeText: p.badgeText, image: p.image, images: p.images,
          description: p.description, colors: p.colors, sizes: p.sizes, featured: p.featured
        }));
        apiProductsLoaded = true;
        console.log('Loaded ' + products.length + ' products from API');
      }
    } catch (e) {
      console.log('API not available, using local products');
    }
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

    const gwCheckbox = document.getElementById('giftWrapCheck');
    if (gwCheckbox) gwCheckbox.addEventListener('change', function() { state.giftWrap = this.checked; cartRender(); updateCkTotals(); });

    /* Checkout */
    const cartCheckoutBtn = document.querySelector('.cart-checkout');
    if (cartCheckoutBtn) cartCheckoutBtn.addEventListener('click', openCheckout);
    D.checkoutClose.addEventListener('click', closeCheckout);
    D.checkoutOverlayBg.addEventListener('click', closeCheckout);
    D.checkoutBack.addEventListener('click', () => { if (ckCurrentStep > 1) goToStep(ckCurrentStep - 1); else closeCheckout(); });
    document.getElementById('toStep2').addEventListener('click', () => goToStep(2));
    document.getElementById('toStep3').addEventListener('click', () => goToStep(3));
    document.getElementById('backToStep1').addEventListener('click', () => goToStep(1));
    document.getElementById('backToStep2').addEventListener('click', () => goToStep(2));
    document.getElementById('payNowBtn').addEventListener('click', () => {
      if (state.selectedPayment === 'cod') { initCOD(); } else { initRazorpay(); }
    });
    document.getElementById('ckContinueBtn').addEventListener('click', resetCheckout);
    document.getElementById('checkoutApplyCoupon').addEventListener('click', () => {
      const code = document.getElementById('checkoutCouponInput').value.trim().toUpperCase();
      const btn = document.getElementById('checkoutApplyCoupon');
      if (code === 'ASHMART20') { state.discountApplied = true; btn.textContent = '✓ Applied'; btn.classList.add('applied'); updateCkTotals(); notif('Coupon applied! 20% OFF', 'success'); }
      else { state.discountApplied = false; btn.textContent = 'Apply'; btn.classList.remove('applied'); notif('Invalid code. Try "ASHMART20"', 'error'); }
    });
    document.getElementById('editShipping').addEventListener('click', () => goToStep(2));
    document.getElementById('editSummary').addEventListener('click', () => goToStep(1));

    /* Payment method switching */
    document.querySelectorAll('.checkout-payment-option').forEach(opt => {
      opt.addEventListener('click', () => {
        document.querySelectorAll('.checkout-payment-option').forEach(o => o.classList.remove('active'));
        opt.classList.add('active');
        state.selectedPayment = opt.dataset.method;
        const payBtn = document.getElementById('payNowBtn');
        const codNote = document.getElementById('codNote');
        if (state.selectedPayment === 'cod') {
          payBtn.innerHTML = '<i class="fas fa-check-circle"></i> Place Order with COD';
          payBtn.style.background = 'linear-gradient(135deg, #10B981, #059669)';
          payBtn.style.boxShadow = '0 4px 16px rgba(16,185,129,.35)';
          if (codNote) codNote.style.display = 'flex';
        } else {
          payBtn.innerHTML = '<i class="fas fa-lock"></i> Pay Securely with Razorpay';
          payBtn.style.background = '';
          payBtn.style.boxShadow = '';
          if (codNote) codNote.style.display = 'none';
        }
      });
    });

    /* Auth Modal */
    D.loginBtn.addEventListener('click', openAuth);
    D.authClose.addEventListener('click', closeAuth);
    D.authOverlay.addEventListener('click', closeAuth);
    document.getElementById('showRegister').addEventListener('click', () => { clearAuthErrors(); D.authLoginWrap.classList.remove('active'); D.authRegisterWrap.classList.add('active'); });
    document.getElementById('showLogin').addEventListener('click', () => { clearAuthErrors(); D.authRegisterWrap.classList.remove('active'); D.authLoginWrap.classList.add('active'); });
    D.authLoginForm.addEventListener('submit', async (e) => {
      e.preventDefault(); clearAuthErrors();
      const email = document.getElementById('loginEmail').value.trim();
      const pass = document.getElementById('loginPass').value;
      if (!email || !pass) { showAuthError('loginError', 'Fill all fields'); return; }
      try {
        await API.login(email, pass);
        closeAuth(); updateAuthView(); notif('Signed in!', 'success');
      } catch (err) { showAuthError('loginError', err.message); }
    });
    D.authRegisterForm.addEventListener('submit', async (e) => {
      e.preventDefault(); clearAuthErrors();
      const name = document.getElementById('regName').value.trim();
      const email = document.getElementById('regEmail').value.trim();
      const phone = document.getElementById('regPhone').value.trim();
      const pass = document.getElementById('regPass').value;
      if (!name || !email || !phone || !pass) { showAuthError('registerError', 'Fill all fields'); return; }
      if (!/^[6-9]\d{9}$/.test(phone)) { showAuthError('registerError', 'Enter valid 10-digit phone'); return; }
      if (pass.length < 6) { showAuthError('registerError', 'Password min 6 characters'); return; }
      try {
        await API.register(name, email, phone, pass);
        closeAuth(); updateAuthView(); notif('Account created!', 'success');
      } catch (err) { showAuthError('registerError', err.message); }
    });
    document.getElementById('logoutBtn').addEventListener('click', () => { API.logout(); updateAuthView(); closeAuth(); notif('Signed out', 'success'); });
    document.getElementById('viewOrdersBtn').addEventListener('click', async () => {
      closeAuth();
      try {
        const res = await API.getMyOrders();
        if (res.orders && res.orders.length) {
          notif('You have ' + res.orders.length + ' order(s). Full order history coming soon!', 'success');
        } else { notif('No orders yet. Start shopping!', 'info'); }
      } catch (e) { notif('Please sign in to view orders.', 'error'); }
    });

    /* Live field validation */
    $$('.checkout-field input, .checkout-field select').forEach(el => {
      el.addEventListener('input', () => { el.classList.remove('error'); const err = el.parentElement.querySelector('.field-error'); if (err) err.style.display = 'none'; });
      el.addEventListener('blur', () => {
        if (el.hasAttribute('required') && !el.value.trim()) { el.classList.add('error'); }
      });
    });

    /* Wishlist */
    D.wishlistToggle.addEventListener('click', () => D.wishlistPanel.classList.add('active'));
    D.wishlistClose.addEventListener('click', () => D.wishlistPanel.classList.remove('active'));
    D.wishlistOverlayBg.addEventListener('click', () => D.wishlistPanel.classList.remove('active'));

    /* Modal */
    D.modalClose.addEventListener('click', closeModal);
    D.modalOverlay.addEventListener('click', closeModal);
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') { closeModal(); closeSearch(); closeCheckout(); D.cartPanel.classList.remove('active'); D.wishlistPanel.classList.remove('active'); }
      if (D.productModal.classList.contains('active') && currentModalProductId) {
        if (e.key === 'ArrowLeft') window.__saGalleryNav(-1, currentModalProductId);
        if (e.key === 'ArrowRight') window.__saGalleryNav(1, currentModalProductId);
      }
    });

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
      updateScrollBtn();
      $$('.nav-link').forEach(link => {
        const t = link.getAttribute('href');
        if (t && t.startsWith('#')) { const s = document.querySelector(t); if (s) { const r = s.getBoundingClientRect(); link.classList.toggle('active', r.top <= 120 && r.bottom >= 120); } }
      });
    });

    /* Scroll to Bottom / Top */
    D.scrollBtn && D.scrollBtn.addEventListener('click', () => {
      const dh = document.documentElement.scrollHeight - window.innerHeight;
      const nearBottom = dh - window.scrollY < 300;
      window.scrollTo({ top: nearBottom ? 0 : document.documentElement.scrollHeight, behavior: 'smooth' });
    });

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
  async function init() {
    cartInit();
    wishlistInit();
    API.loadFromStorage();
    updateAuthView();
    await loadProductsFromAPI();
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
    updateScrollBtn();
    renderRecentlyViewed();
    startSocialProof();
    setTimeout(initGsap, 150);
    setTimeout(initAos, 250);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
