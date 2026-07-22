/* ===== AshMart - Premium E-Commerce ===== */

(function () {
  'use strict';

  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];

  /* ===== 50+ PRODUCTS ===== */
  const products = [
    { id:1, title:'Apple AirPods Pro 2nd Gen', category:'electronics', price:18999, originalPrice:24900, rating:4.8, reviews:12453, badge:'best-seller', badgeText:'Best Seller', image:'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400&q=80', images:['https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=600&q=80','https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=600&q=80','https://images.unsplash.com/photo-1588423771073-b8903c794f01?w=600&q=80'], description:'Apple AirPods Pro 2nd Generation with Active Noise Cancellation, Adaptive Transparency, Personalized Spatial Audio, MagSafe Charging Case.', colors:['#f5f5f5'], sizes:['Standard'], featured:true },
    { id:2, title:'Samsung Galaxy S24 Ultra', category:'electronics', price:129999, originalPrice:149999, rating:4.7, reviews:8765, badge:'new', badgeText:'New', image:'https://images.unsplash.com/photo-1592950630635-f0b1f2e3a4b5?w=400&q=80', images:['https://images.unsplash.com/photo-1592950630635-f0b1f2e3a4b5?w=600&q=80','https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=600&q=80','https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=600&q=80'], description:'Samsung Galaxy S24 Ultra with Snapdragon 8 Gen 3, 200MP camera, S Pen, titanium frame, 5000mAh battery, 6.8-inch QHD+ AMOLED display.', colors:['#1a1a2e','#8B4513','#e8e8e8'], sizes:['256GB','512GB','1TB'], featured:true },
    { id:3, title:'Nike Air Max 270', category:'sports', price:12995, originalPrice:15995, rating:4.6, reviews:9876, badge:'popular', badgeText:'Popular', image:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80', images:['https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80','https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&q=80','https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&q=80'], description:'Nike Air Max 270 featuring the tallest Air unit yet, lightweight mesh upper, Max Air unit for unrivaled cushioning, rubber outsole.', colors:['#e8e8e8','#1a1a2e','#c0392b'], sizes:['7','8','9','10','11','12'], featured:true },
    { id:4, title:'Sony WH-1000XM5 Headphones', category:'electronics', price:24990, originalPrice:34990, rating:4.9, reviews:6543, badge:'sale', badgeText:'-28%', image:'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80', images:['https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80','https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&q=80','https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=600&q=80'], description:'Sony WH-1000XM5 Wireless Noise Cancelling Headphones with Auto NC Optimizer, 30hr battery, multipoint connection, speak-to-chat.', colors:['#1a1a2e','#e8e8e8'], sizes:['Standard'], featured:true },
    { id:5, title:"Levi's 501 Original Fit Jeans", category:'fashion', price:4999, originalPrice:6999, rating:4.7, reviews:11234, badge:'best-seller', badgeText:'Best Seller', image:'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&q=80', images:['https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&q=80','https://images.unsplash.com/photo-1582552938357-32b906df40cb?w=600&q=80','https://images.unsplash.com/photo-1604176354204-9268737828e4?w=600&q=80'], description:"Levi's 501 Original Fit Iconic Jeans, straight leg, button fly, 100% cotton denim, mid-wash blue.", colors:['#1a1a2e','#2d3436','#4a6fa5'], sizes:['28','30','32','34','36','38'], featured:true },
    { id:6, title:'Apple Watch Series 9', category:'electronics', price:41999, originalPrice:49900, rating:4.8, reviews:5432, badge:'new', badgeText:'New', image:'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80', images:['https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80','https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&q=80','https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600&q=80'], description:'Apple Watch Series 9 with S9 SiP, Double Tap gesture, brighter display, health monitoring, GPS, water resistant 50m.', colors:['#1a1a2e','#f5f5f5','#c0392b'], sizes:['41mm','45mm'], featured:true },
    { id:7, title:'Nike Air Jordan 1 Retro High', category:'sports', price:17995, originalPrice:21995, rating:4.8, reviews:7654, badge:'trending', badgeText:'Trending', image:'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&q=80', images:['https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&q=80','https://images.unsplash.com/photo-1552346154-21d32810aba3?w=600&q=80','https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&q=80'], description:'Nike Air Jordan 1 Retro High OG, premium leather upper, Air-Sole unit for cushioning, rubber traction outsole, iconic Wings logo.', colors:['#e8e8e8','#1a1a2e','#c0392b'], sizes:['7','8','9','10','11','12'], featured:true },
    { id:8, title:'Dyson V15 Detect Cordless', category:'home', price:52900, originalPrice:62900, rating:4.7, reviews:3456, badge:'new', badgeText:'New', image:'https://images.unsplash.com/photo-1558618666-fcd25c85f82f?w=400&q=80', images:['https://images.unsplash.com/photo-1558618666-fcd25c85f82f?w=600&q=80','https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600&q=80','https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600&q=80'], description:'Dyson V15 Detect Cordless Vacuum with laser dust detection, piezo sensor, LCD screen, 60min runtime, HEPA filtration.', colors:['#f5f5f5','#1a1a2e'], sizes:['Standard'], featured:true },
    { id:9, title:'Ray-Ban Aviator Classic', category:'accessories', price:11990, originalPrice:14990, rating:4.7, reviews:8765, badge:'popular', badgeText:'Popular', image:'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&q=80', images:['https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&q=80','https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&q=80','https://images.unsplash.com/photo-1508296695146-257a814070b4?w=600&q=80'], description:'Ray-Ban Aviator Classic sunglasses, polarized crystal green lenses, gold metal frame, UV protection, iconic pilot shape.', colors:['#1a1a2e','#8B4513'], sizes:['Standard'], featured:false },
    { id:10, title:'Sony PlayStation 5 Console', category:'electronics', price:54990, originalPrice:59990, rating:4.8, reviews:15678, badge:'best-seller', badgeText:'Best Seller', image:'https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=400&q=80', images:['https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=600&q=80','https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=600&q=80','https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=600&q=80'], description:'Sony PlayStation 5 Console, 4K gaming, 120fps, ray tracing, 825GB SSD, DualSense wireless controller, 3D Audio.', colors:['#1a1a2e','#f5f5f5'], sizes:['Disc Edition','Digital Edition'], featured:true },
    { id:11, title:'Adidas Ultraboost Light', category:'sports', price:16999, originalPrice:19999, rating:4.7, reviews:6543, badge:'new', badgeText:'New', image:'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&q=80', images:['https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&q=80','https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80','https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&q=80'], description:'Adidas Ultraboost Light running shoes, BOOST midsole, Primeknit+ upper, Continental rubber outsole, 30% lighter than original.', colors:['#1a1a2e','#e8e8e8','#c0392b'], sizes:['7','8','9','10','11','12'], featured:true },
    { id:12, title:'Samsung 55" OLED 4K Smart TV', category:'electronics', price:99999, originalPrice:139999, rating:4.7, reviews:2345, badge:'sale', badgeText:'-28%', image:'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&q=80', images:['https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600&q=80','https://images.unsplash.com/photo-1461151304267-38535e780c79?w=600&q=80','https://images.unsplash.com/photo-1461151304267-38535e780c79?w=600&q=80'], description:'Samsung 55-inch OLED 4K Smart TV with Neural Quantum Processor, Dolby Atmos, Smart Hub, 120Hz refresh rate, Alexa built-in.', colors:['#1a1a2e'], sizes:['55"','65"','77"'], featured:false },
    { id:13, title:"Calvin Klein Cotton Boxer Briefs", category:'fashion', price:1499, originalPrice:2499, rating:4.5, reviews:9876, badge:'popular', badgeText:'Popular', image:'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=400&q=80', images:['https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=600&q=80','https://images.unsplash.com/photo-1625910513413-5fc428169c3e?w=600&q=80','https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&q=80'], description:"Calvin Klein Men's Cotton Stretch Boxer Briefs, logo waistband, soft breathable fabric, 3-pack.", colors:['#1a1a2e','#2d3436','#f5f5f5'], sizes:['S','M','L','XL'], featured:false },
    { id:14, title:'Bose QuietComfort Ultra', category:'electronics', price:27900, originalPrice:34990, rating:4.8, reviews:4567, badge:'sale', badgeText:'-20%', image:'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&q=80', images:['https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&q=80','https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80','https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=600&q=80'], description:'Bose QuietComfort Ultra Earbuds with world-class noise cancellation, Immersive Audio, CustomTune technology, 6hr battery.', colors:['#f5f5f5','#1a1a2e'], sizes:['Standard'], featured:true },
    { id:15, title:'Tommy Hilfiger Leather Jacket', category:'fashion', price:14999, originalPrice:21999, rating:4.6, reviews:3456, badge:'sale', badgeText:'-31%', image:'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&q=80', images:['https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80','https://images.unsplash.com/photo-1520975954732-35dd22299614?w=600&q=80','https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=600&q=80'], description:"Tommy Hilfiger men's genuine leather biker jacket, quilted lining, asymmetric zip, signature red-white-blue tab.", colors:['#2d3436','#6b4226'], sizes:['S','M','L','XL','XXL'], featured:true },
    { id:16, title:'Canon EOS R6 Mark II', category:'electronics', price:189999, originalPrice:219999, rating:4.9, reviews:1234, badge:'new', badgeText:'New', image:'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&q=80', images:['https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&q=80','https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=600&q=80','https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?w=600&q=80'], description:'Canon EOS R6 Mark II mirrorless camera, 24.2MP full-frame CMOS, 40fps burst, 4K 60p video, IBIS, Dual Pixel CMOS AF II.', colors:['#1a1a2e'], sizes:['Body Only','With RF 24-105mm Lens'], featured:true },
    { id:17, title:'Nike Dri-FIT Running Tee', category:'sports', price:2495, originalPrice:3495, rating:4.5, reviews:8765, badge:'popular', badgeText:'Popular', image:'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80', images:['https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80','https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&q=80','https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&q=80'], description:'Nike Dri-FIT Victory Training Tee, moisture-wicking technology, lightweight fabric, Swoosh logo, breathable mesh panels.', colors:['#1a1a2e','#e8e8e8','#059669'], sizes:['S','M','L','XL','XXL'], featured:false },
    { id:18, title:'Apple MacBook Air M3 15"', category:'electronics', price:144900, originalPrice:164900, rating:4.9, reviews:3456, badge:'new', badgeText:'New', image:'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&q=80', images:['https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&q=80','https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=600&q=80','https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600&q=80'], description:'Apple MacBook Air 15-inch with M3 chip, 8-core CPU, 10-core GPU, 16GB RAM, 256GB SSD, Liquid Retina display, 18hr battery.', colors:['#1a1a2e','#e8e8e8','#c9a96e'], sizes:['256GB','512GB','1TB'], featured:true },
    { id:19, title:'Adidas Originals Ultraboost', category:'fashion', price:14999, originalPrice:18999, rating:4.6, reviews:5432, badge:'sale', badgeText:'-21%', image:'https://images.unsplash.com/photo-1556906781-9a412961c28c?w=400&q=80', images:['https://images.unsplash.com/photo-1556906781-9a412961c28c?w=600&q=80','https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&q=80','https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&q=80'], description:'Adidas Originals Ultraboost lifestyle sneakers, Primeknit upper, BOOST midsole, Continental rubber outsole, iconic 3-stripe.', colors:['#1a1a2e','#e8e8e8','#c0392b'], sizes:['7','8','9','10','11','12'], featured:false },
    { id:20, title:'Dyson Airwrap Multi-Styler', category:'beauty', price:49900, originalPrice:54900, rating:4.7, reviews:6543, badge:'best-seller', badgeText:'Best Seller', image:'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&q=80', images:['https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80','https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=80','https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=600&q=80'], description:'Dyson Airwrap Multi-Styler Complete with Coanda airflow technology, multiple attachments, heat settings, no extreme heat damage.', colors:['#1a1a2e','#c9a96e'], sizes:['Standard'], featured:true },
    { id:21, title:'Fossil Gen 6 Smartwatch', category:'accessories', price:18995, originalPrice:23995, rating:4.4, reviews:2345, badge:'sale', badgeText:'-20%', image:'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&q=80', images:['https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&q=80','https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=600&q=80','https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600&q=80'], description:'Fossil Gen 6 Smartwatch with Snapdragon Wear 4100+, heart rate, SpO2, GPS, customizable watch faces, stainless steel case.', colors:['#1a1a2e','#2d3436','#8B4513'], sizes:['42mm','44mm'], featured:false },
    { id:22, title:'iRobot Roomba j7+', category:'home', price:49999, originalPrice:64999, rating:4.6, reviews:3456, badge:'sale', badgeText:'-23%', image:'https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?w=400&q=80', images:['https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?w=600&q=80','https://images.unsplash.com/photo-1558618666-fcd25c85f82f?w=600&q=80','https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80'], description:'iRobot Roomba j7+ Robot Vacuum with PrecisionVision Navigation, self-emptying, pet hair detection, smart mapping, Alexa compatible.', colors:['#1a1a2e','#f5f5f5'], sizes:['Standard'], featured:false },
    { id:23, title:"Nike Air Force 1 '07", category:'fashion', price:8195, originalPrice:9695, rating:4.7, reviews:15678, badge:'best-seller', badgeText:'Best Seller', image:'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=400&q=80', images:['https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&q=80','https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&q=80','https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80'], description:"Nike Air Force 1 '07 classic sneakers, leather upper, perforated toe, Air-Sole unit, pivot-point traction, iconic design.", colors:['#f5f5f5','#1a1a2e'], sizes:['7','8','9','10','11','12'], featured:true },
    { id:24, title:'MAC Studio Fix Fluid SPF15', category:'beauty', price:2800, originalPrice:3500, rating:4.6, reviews:8765, badge:'popular', badgeText:'Popular', image:'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&q=80', images:['https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80','https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&q=80','https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=80'], description:'MAC Studio Fix Fluid SPF15 foundation, buildable medium-to-full coverage, natural matte finish, 24hr wear, 60 shades.', colors:['#f5f5f5','#ffe4e6','#d4a574'], sizes:['30ml'], featured:false },
    { id:25, title:'Samsung Galaxy Buds2 Pro', category:'electronics', price:11999, originalPrice:17999, rating:4.6, reviews:4567, badge:'sale', badgeText:'-33%', image:'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=400&q=80', images:['https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=600&q=80','https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=600&q=80','https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=600&q=80'], description:'Samsung Galaxy Buds2 Pro, 24-bit Hi-Fi audio, intelligent ANC, 360 Audio, IPX7 water resistant, 5hr + 13hr with case.', colors:['#f5f5f5','#1a1a2e','#c09bd8'], sizes:['Standard'], featured:false },
    { id:26, title:"Levi's Trucker Jacket", category:'fashion', price:5999, originalPrice:7999, rating:4.6, reviews:6543, badge:'popular', badgeText:'Popular', image:'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&q=80', images:['https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80','https://images.unsplash.com/photo-1520975954732-35dd22299614?w=600&q=80','https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=600&q=80'], description:"Levi's Men's Trucker Jacket, classic denim jacket, button front, chest pockets, adjustable button tabs, iconic styling.", colors:['#1a1a2e','#4a6fa5','#8B4513'], sizes:['S','M','L','XL','XXL'], featured:false },
    { id:27, title:'LG C3 65" OLED evo TV', category:'electronics', price:149999, originalPrice:199999, rating:4.8, reviews:2345, badge:'sale', badgeText:'-25%', image:'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&q=80', images:['https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600&q=80','https://images.unsplash.com/photo-1461151304267-38535e780c79?w=600&q=80','https://images.unsplash.com/photo-1461151304267-38535e780c79?w=600&q=80'], description:'LG C3 65-inch OLED evo 4K Smart TV, α9 Gen6 AI Processor, Dolby Vision & Atmos, 120Hz, webOS 23, 4 HDMI 2.1 ports.', colors:['#1a1a2e'], sizes:['55"','65"','77"','83"'], featured:false },
    { id:28, title:'Under Armour HOVR Phantom', category:'sports', price:13999, originalPrice:16999, rating:4.5, reviews:3456, badge:'new', badgeText:'New', image:'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&q=80', images:['https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&q=80','https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80','https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&q=80'], description:'Under Armour HOVR Phantom 3 running shoes, UA HOVR cushioning, connected fitness tracking, breathable mesh upper, Formstrip.', colors:['#1a1a2e','#e8e8e8','#c0392b'], sizes:['7','8','9','10','11','12'], featured:false },
    { id:29, title:'Estée Lauder Advanced Night Repair', category:'beauty', price:5900, originalPrice:7500, rating:4.8, reviews:7654, badge:'best-seller', badgeText:'Best Seller', image:'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&q=80', images:['https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=80','https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&q=80','https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80'], description:'Estée Lauder Advanced Night Repair Synchronized Recovery Complex II, reduces fine lines, hydrates, patented repair technology.', colors:['#f5f5f5','#8B4513'], sizes:['30ml','50ml','100ml'], featured:false },
    { id:30, title:'Samsonite Omni 2 Hardside', category:'accessories', price:8999, originalPrice:12999, rating:4.5, reviews:4567, badge:'sale', badgeText:'-30%', image:'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80', images:['https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80','https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80','https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80'], description:'Samsonite Omni 2 Hardside Luggage, 24-inch, polycarbonate shell, 4-wheel spinner, TSA lock, expandable, 10-year warranty.', colors:['#1a1a2e','#2d3436','#c0392b'], sizes:['20"','24"','28"'], featured:false },
    { id:31, title:'Nespresso Vertuo Next Coffee', category:'home', price:15999, originalPrice:19999, rating:4.5, reviews:5432, badge:'popular', badgeText:'Popular', image:'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=400&q=80', images:['https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=600&q=80','https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80','https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80'], description:"Nespresso Vertuo Next Coffee & Espresso Maker by De'Longhi, 5 cup sizes, Centrifusion technology, WiFi connected, 30 capsule starter kit.", colors:['#1a1a2e','#f5f5f5','#c0392b'], sizes:['Standard'], featured:true },
    { id:32, title:'Polo Ralph Lauren Classic Fit', category:'fashion', price:5999, originalPrice:8999, rating:4.6, reviews:6543, badge:'sale', badgeText:'-33%', image:'https://images.unsplash.com/photo-1625910513413-5fc428169c3e?w=400&q=80', images:['https://images.unsplash.com/photo-1625910513413-5fc428169c3e?w=600&q=80','https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=600&q=80','https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&q=80'], description:'Polo Ralph Lauren Classic Fit Mesh Polo Shirt, 100% cotton, pony logo, ribbed collar, 3-button placket, machine washable.', colors:['#1a1a2e','#c0392b','#e8e8e8'], sizes:['S','M','L','XL','XXL'], featured:false },
    { id:33, title:'GoPro HERO12 Black', category:'electronics', price:37999, originalPrice:45999, rating:4.6, reviews:3456, badge:'sale', badgeText:'-17%', image:'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&q=80', images:['https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600&q=80','https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=600&q=80','https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?w=600&q=80'], description:'GoPro HERO12 Black, 5.3K60/4K120 video, 27MP photos, HyperSmooth 6.0, waterproof 33ft, HDR photo, Bluetooth audio.', colors:['#1a1a2e'], sizes:['Standard'], featured:false },
    { id:34, title:'Casio G-Shock GA2100', category:'accessories', price:9995, originalPrice:12995, rating:4.7, reviews:7654, badge:'popular', badgeText:'Popular', image:'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&q=80', images:['https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&q=80','https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=600&q=80','https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600&q=80'], description:'Casio G-Shock GA2100-1A1, carbon core guard, 200m water resistant, world time, stopwatch, countdown timer, LED light.', colors:['#1a1a2e'], sizes:['Standard'], featured:false },
    { id:35, title:'Beats Studio Pro', category:'electronics', price:29900, originalPrice:37900, rating:4.6, reviews:3456, badge:'new', badgeText:'New', image:'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80', images:['https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80','https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&q=80','https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=600&q=80'], description:'Beats Studio Pro wireless headphones, custom acoustic platform, active noise cancellation, transparency mode, 40hr battery, USB-C.', colors:['#1a1a2e','#8B4513','#f5f5f5'], sizes:['Standard'], featured:true },
    { id:36, title:'H&M Premium Wool Coat', category:'fashion', price:7999, originalPrice:12999, rating:4.4, reviews:2345, badge:'sale', badgeText:'-38%', image:'https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=400&q=80', images:['https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=600&q=80','https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80','https://images.unsplash.com/photo-1520975954732-35dd22299614?w=600&q=80'], description:'H&M Premium Quality wool blend coat, double-breasted, notch lapels, fully lined, knee-length, classic fit.', colors:['#2d3436','#8B4513','#e8e8e8'], sizes:['S','M','L','XL'], featured:false },
    { id:37, title:'Philips Hue Smart Bulb Kit', category:'home', price:9999, originalPrice:13999, rating:4.6, reviews:4567, badge:'sale', badgeText:'-28%', image:'https://images.unsplash.com/photo-1558618666-fcd25c85f82f?w=400&q=80', images:['https://images.unsplash.com/photo-1558618666-fcd25c85f82f?w=600&q=80','https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80','https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&q=80'], description:'Philips Hue White & Color Ambiance Starter Kit, 4 smart bulbs + Bridge, 16 million colors, voice control, works with Alexa & Google.', colors:['#f5f5f5'], sizes:['Standard'], featured:false },
    { id:38, title:'Adidas Stan Smith Sneakers', category:'fashion', price:7499, originalPrice:9999, rating:4.6, reviews:8765, badge:'popular', badgeText:'Popular', image:'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=400&q=80', images:['https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&q=80','https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&q=80','https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80'], description:'Adidas Stan Smith classic sneakers, leather upper, perforated 3-Stripe, rubber outsole, iconic clean design, green heel tab.', colors:['#f5f5f5','#1a1a2e','#059669'], sizes:['7','8','9','10','11','12'], featured:false },
    { id:39, title:'Olay Regenerist Micro-Sculpting', category:'beauty', price:2299, originalPrice:3199, rating:4.5, reviews:6543, badge:'sale', badgeText:'-28%', image:'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&q=80', images:['https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=600&q=80','https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&q=80','https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=80'], description:'Olay Regenerist Micro-Sculpting Cream, hyaluronic acid, amino peptides, Niacinamide, hydrates skin, reduces fine lines.', colors:['#f5f5f5','#c0392b'], sizes:['50g'], featured:false },
    { id:40, title:'Nike Pegasus 40 Running', category:'sports', price:10995, originalPrice:13495, rating:4.7, reviews:9876, badge:'best-seller', badgeText:'Best Seller', image:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80', images:['https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80','https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&q=80','https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&q=80'], description:'Nike Pegasus 40 running shoes, React foam midsole, engineered mesh upper, Waffle outsole, Flywire cables for lockdown fit.', colors:['#e8e8e8','#1a1a2e','#c0392b'], sizes:['7','8','9','10','11','12'], featured:true },
    { id:41, title:'Sony DualSense Controller', category:'electronics', price:5999, originalPrice:6999, rating:4.7, reviews:7654, badge:'popular', badgeText:'Popular', image:'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&q=80', images:['https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=600&q=80','https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=600&q=80','https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=600&q=80'], description:'Sony DualSense Wireless Controller for PS5, haptic feedback, adaptive triggers, built-in microphone, USB-C charging.', colors:['#f5f5f5','#1a1a2e'], sizes:['Standard'], featured:false },
    { id:42, title:'Gucci GG Marmont Bag', category:'accessories', price:89999, originalPrice:109999, rating:4.9, reviews:567, badge:'new', badgeText:'New', image:'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&q=80', images:['https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80','https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=600&q=80','https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&q=80'], description:'Gucci GG Marmont small shoulder bag, chevron leather, antique gold-toned Double G hardware, chain strap, made in Italy.', colors:['#1a1a2e','#c0392b','#f5f5f5'], sizes:['Small','Medium','Large'], featured:true },
    { id:43, title:'KitchenAid Stand Mixer 5Qt', category:'home', price:34999, originalPrice:42999, rating:4.8, reviews:5432, badge:'best-seller', badgeText:'Best Seller', image:'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?w=400&q=80', images:['https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?w=600&q=80','https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80','https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80'], description:'KitchenAid Artisan 5-Quart Tilt-Head Stand Mixer, 10 speeds, 325-watt motor, includes flat beater, dough hook, wire whip.', colors:['#c0392b','#1a1a2e','#f5f5f5'], sizes:['5 Quart'], featured:true },
    { id:44, title:"Levi's 511 Slim Fit Chinos", category:'fashion', price:3999, originalPrice:5499, rating:4.5, reviews:4567, badge:'sale', badgeText:'-27%', image:'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&q=80', images:['https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&q=80','https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&q=80','https://images.unsplash.com/photo-1582552938357-32b906df40cb?w=600&q=80'], description:"Levi's 511 Slim Fit Chinos, stretch twill, slim through seat and thigh, mid-rise, classic versatile fit.", colors:['#2d3436','#8B4513','#4a6fa5'], sizes:['28','30','32','34','36'], featured:false },
    { id:45, title:'Sephora Collection Lip Stain', category:'beauty', price:1150, originalPrice:1500, rating:4.4, reviews:5432, badge:'popular', badgeText:'Popular', image:'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&q=80', images:['https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=600&q=80','https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=80','https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=600&q=80'], description:'Sephora Collection Cream Lip Stain liquid lipstick, 8hr wear, matte finish, hydrating formula, 50+ shades.', colors:['#c0392b','#e8e8e8','#8B4513'], sizes:['Standard'], featured:false },
    { id:46, title:'Under Armour Tech 2.0 Tee', category:'sports', price:1999, originalPrice:2999, rating:4.5, reviews:6543, badge:'popular', badgeText:'Popular', image:'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80', images:['https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80','https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&q=80','https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&q=80'], description:"Under Armour Men's Tech 2.0 Short Sleeve, ultra-soft fabric, moisture management, 4-way stretch, UA logo, loose fit.", colors:['#1a1a2e','#e8e8e8','#c0392b'], sizes:['S','M','L','XL','XXL'], featured:false },
    { id:47, title:'Dyson V8 Origin Cordless', category:'home', price:32900, originalPrice:41900, rating:4.5, reviews:3456, badge:'sale', badgeText:'-21%', image:'https://images.unsplash.com/photo-1558618666-fcd25c85f82f?w=400&q=80', images:['https://images.unsplash.com/photo-1558618666-fcd25c85f82f?w=600&q=80','https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600&q=80','https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600&q=80'], description:'Dyson V8 Origin Cordless Vacuum, 40min runtime, 2-tier radial cyclones, converts to handheld, wall-mounted docking station.', colors:['#f5f5f5','#1a1a2e'], sizes:['Standard'], featured:false },
    { id:48, title:'Ray-Ban Wayfarer Classic', category:'accessories', price:9990, originalPrice:12990, rating:4.7, reviews:10234, badge:'best-seller', badgeText:'Best Seller', image:'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&q=80', images:['https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&q=80','https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&q=80','https://images.unsplash.com/photo-1508296695146-257a814070b4?w=600&q=80'], description:'Ray-Ban Wayfarer Classic sunglasses, iconic trapezoidal shape, polarized crystal green lenses, acetate frame, UV protection.', colors:['#1a1a2e','#8B4513','#f5f5f5'], sizes:['Standard'], featured:false },
    { id:49, title:'boAt Rockerz 450 Headphones', category:'electronics', price:1499, originalPrice:3999, rating:4.4, reviews:18765, badge:'sale', badgeText:'-62%', image:'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80', images:['https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80','https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&q=80'], description:'boAt Rockerz 450 wireless headphones, 40mm drivers, 15hr playback, padded ear cushions, foldable design, Bluetooth 5.0.', colors:['#1a1a2e','#e8e8e8','#c0392b'], sizes:['Standard'], featured:true },
    { id:50, title:'Noise ColorFit Pro 5', category:'electronics', price:2999, originalPrice:5999, rating:4.3, reviews:9876, badge:'sale', badgeText:'-50%', image:'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80', images:['https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80','https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600&q=80'], description:'Noise ColorFit Pro 5 smartwatch, 1.85-inch AMOLED display, Bluetooth calling, 100+ sports modes, SpO2, heart rate.', colors:['#1a1a2e','#f5f5f5','#c0392b'], sizes:['Standard'], featured:false },
    { id:51, title:'JBL Tune 230NC TWS Earbuds', category:'electronics', price:2999, originalPrice:6999, rating:4.5, reviews:7654, badge:'best-seller', badgeText:'Best Seller', image:'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=400&q=80', images:['https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=600&q=80','https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=600&q=80'], description:'JBL Tune 230NC TWS earbuds, JBL Pure Bass sound, ANC, 40hr battery, IPX4 water resistant, 4 microphones.', colors:['#f5f5f5','#1a1a2e','#059669'], sizes:['Standard'], featured:true },
    { id:52, title:'Puma RS-X Sneakers', category:'sports', price:3999, originalPrice:7999, rating:4.4, reviews:4567, badge:'sale', badgeText:'-50%', image:'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&q=80', images:['https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&q=80','https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80'], description:'Puma RS-X sneakers, bold colorway, rubber sole, lightweight EVA midsole, textile and mesh upper, iconic Puma formstrip.', colors:['#e8e8e8','#1a1a2e','#c0392b'], sizes:['7','8','9','10','11','12'], featured:false },
    { id:53, title:'Bata Canvas Sneakers', category:'fashion', price:1299, originalPrice:1999, rating:4.3, reviews:6543, badge:'popular', badgeText:'Popular', image:'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=400&q=80', images:['https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&q=80','https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80'], description:"Bata men's canvas sneakers, comfortable rubber sole, breathable canvas upper, classic casual design, lace-up closure.", colors:['#f5f5f5','#1a1a2e','#2d3436'], sizes:['7','8','9','10','11'], featured:false },
    { id:54, title:'Mango Cotton T-Shirt', category:'fashion', price:999, originalPrice:1499, rating:4.4, reviews:3456, badge:'new', badgeText:'New', image:'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80', images:['https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80','https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&q=80'], description:"Mango men's 100% cotton crew neck t-shirt, regular fit, soft hand feel, pre-shrunk fabric, multiple colors.", colors:['#f5f5f5','#1a1a2e','#c0392b','#059669'], sizes:['S','M','L','XL','XXL'], featured:false },
    { id:55, title:'Realme Buds Air 5', category:'electronics', price:1799, originalPrice:3499, rating:4.3, reviews:5432, badge:'sale', badgeText:'-48%', image:'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=400&q=80', images:['https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=600&q=80','https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=600&q=80'], description:'Realme Buds Air 5, 50dB ANC, 12.4mm titanium driver, 38hr total battery, IPX5, Bluetooth 5.3, dual device connection.', colors:['#f5f5f5','#1a1a2e','#c09bd8'], sizes:['Standard'], featured:false },
    { id:56, title:'Lakme Absolute Skin Dew Serum', category:'beauty', price:699, originalPrice:999, rating:4.4, reviews:3210, badge:'popular', badgeText:'Popular', image:'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&q=80', images:['https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80','https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=80'], description:'Lakme Absolute Skin Dew Serum, hydrating formula, vitamin E, lightweight, non-sticky, suitable for all skin types.', colors:['#f5f5f5'], sizes:['30ml'], featured:false },
    { id:57, title:'Prestige Iris Mixer Grinder', category:'home', price:2199, originalPrice:3495, rating:4.3, reviews:4567, badge:'sale', badgeText:'-37%', image:'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?w=400&q=80', images:['https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?w=600&q=80','https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80'], description:'Prestige Iris 750W mixer grinder, 3 stainless steel jars, super-efficient motor, 3-speed control with pulse, ISI certified.', colors:['#f5f5f5','#1a1a2e'], sizes:['Standard'], featured:false },
    { id:58, title:'Wildcraft 32L Backpack', category:'accessories', price:1999, originalPrice:3499, rating:4.5, reviews:3456, badge:'popular', badgeText:'Popular', image:'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80', images:['https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80','https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80'], description:'Wildcraft 32L backpack, water resistant, padded laptop compartment, ergonomic design, multiple compartments, 5-year warranty.', colors:['#1a1a2e','#2d3436','#059669'], sizes:['Standard'], featured:false },
    { id:59, title:'Yardley London Body Spray', category:'beauty', price:249, originalPrice:399, rating:4.2, reviews:8765, badge:'popular', badgeText:'Popular', image:'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&q=80', images:['https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&q=80'], description:'Yardley London body spray for men, English leather, refreshing fragrance, 150ml long-lasting deodorant.', colors:['#f5f5f5'], sizes:['150ml'], featured:false },
    { id:60, title:'Fire-Boltt Phoenix Ultra', category:'electronics', price:1999, originalPrice:5999, rating:4.2, reviews:6543, badge:'sale', badgeText:'-66%', image:'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80', images:['https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80','https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600&q=80'], description:'Fire-Boltt Phoenix Ultra smartwatch, 1.39-inch AMOLED display, Bluetooth calling, 100+ sports modes, metal body, IP67.', colors:['#1a1a2e','#f5f5f5','#c0392b'], sizes:['Standard'], featured:false },
    { id:61, title:'Allen Solly Formal Shirt', category:'fashion', price:1499, originalPrice:2499, rating:4.5, reviews:4567, badge:'sale', badgeText:'-40%', image:'https://images.unsplash.com/photo-1625910513413-5fc428169c3e?w=400&q=80', images:['https://images.unsplash.com/photo-1625910513413-5fc428169c3e?w=600&q=80','https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=600&q=80'], description:"Allen Solly men's slim fit formal shirt, 100% cotton, wrinkle-free, spread collar, full sleeves, regular fit.", colors:['#f5f5f5','#1a1a2e','#4a6fa5'], sizes:['38','40','42','44'], featured:false },
    { id:62, title:'Portronics Car Mobile Holder', category:'accessories', price:399, originalPrice:999, rating:4.3, reviews:5432, badge:'sale', badgeText:'-60%', image:'https://images.unsplash.com/photo-1607827448387-a67db1383b59?w=400&q=80', images:['https://images.unsplash.com/photo-1607827448387-a67db1383b59?w=600&q=80'], description:'Portronics car mobile holder, one-hand operation, 360-degree rotation, strong suction cup, universal fit, air vent clip.', colors:['#1a1a2e'], sizes:['Standard'], featured:false }
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
  async function fetchProductReviews(productId) {
    if (API.isLoggedIn()) {
      try {
        const res = await API.getProductReviews(products.find(x=>x.id===productId)?._id || String(productId));
        if (res.reviews && res.reviews.length) {
          return res.reviews.map(r => ({
            name: r.user?.name || 'User',
            avatar: 'https://ui-avatars.com/api/?name=' + encodeURIComponent(r.user?.name || 'U') + '&background=2563EB&color=fff&size=100',
            rating: r.rating,
            text: r.text,
            date: new Date(r.createdAt).toLocaleDateString('en-IN', { day:'numeric', month:'short' }),
            verified: r.verified
          }));
        }
      } catch (e) { /* fallback to sample */ }
    }
    return getReviewsForProduct(productId);
  }

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
    navSearchBar: $('#navSearchBar'), navSearchInput: $('#navSearchInput'),
    cartPanel: $('#cartPanel'), cartToggle: $('#cartToggle'), cartClose: $('#cartClose'), cartOverlayBg: $('#cartOverlayBg'), cartItems: $('#cartItems'), cartFooter: $('#cartFooter'), cartBadge: $('#cartBadge'), cartCount: $('#cartCount'), cartSubtotal: $('#cartSubtotal'), cartShipping: $('#cartShipping'), cartTax: $('#cartTax'), cartDiscount: $('#cartDiscount'), cartTotal: $('#cartTotal'), couponInput: $('#couponInput'), applyCoupon: $('#applyCoupon'), cartContinue: $('#cartContinue'),
    wishlistPanel: $('#wishlistPanel'), wishlistToggle: $('#wishlistToggle'), wishlistClose: $('#wishlistClose'), wishlistOverlayBg: $('#wishlistOverlayBg'), wishlistItems: $('#wishlistItems'), wishlistBadge: $('#wishlistBadge'), wishlistCount: $('#wishlistCount'),
    productModal: $('#productModal'), modalClose: $('#modalClose'), modalOverlay: $('#modalOverlay'), modalBody: $('#modalBody'),
    productsGrid: $('#productsGrid'), filterBtns: $$('.filter-btn'),
    newsletterForm: $('#newsletterForm'), newsletterInput: $('#newsletterInput'), newsletterMessage: $('#newsletterMessage'), footerNewsletterForm: $('#footerNewsletterForm'),
    contactForm: $('#contactForm'),
    scrollBtn: $('#scrollBtn'),
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
  setTimeout(hideLoader, 3000);

  /* ===== THEME ===== */
  try {
    D.themeToggle.addEventListener('click', () => {
      const next = D.html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      D.html.setAttribute('data-theme', next);
      ls.set('theme', next);
    });
    const savedTheme = ls.get('theme', 'light');
    D.html.setAttribute('data-theme', savedTheme);
  } catch(e) { console.warn('Theme init error:', e); }

  /* ===== CART ===== */
  function cartInit() { state.cart = ls.get('cart', []); cartRender(); syncCartToBackend(); }

  async function syncCartToBackend() {
    if (!API.isLoggedIn()) return;
    try {
      const res = await API.getCart();
      if (res.cart && res.cart.items && res.cart.items.length) {
        const serverItems = res.cart.items.map(i => ({
          id: parseInt(i.product._id ? String(i.product._id).slice(-6) : '0'),
          productRef: i.product._id,
          qty: i.qty
        }));
        const localIds = new Set(state.cart.map(i => i.id));
        for (const si of serverItems) {
          const local = state.cart.find(i => i.productRef === si.productRef);
          if (!local) state.cart.push({ id: si.id, productRef: si.productRef, qty: si.qty });
        }
        ls.set('cart', state.cart);
      }
    } catch (e) { /* silent */ }
    cartRender();
  }

  async function cartAdd(id) {
    const p = products.find(x => x.id === id); if (!p) return;
    const e = state.cart.find(x => x.id === id);
    e ? e.qty++ : state.cart.push({ id, qty: 1 });
    ls.set('cart', state.cart); cartRender();
    if (API.isLoggedIn()) {
      try { await API.addToCart(p._id || String(id), 1); } catch (e) { /* silent */ }
    }
    D.cartPanel.classList.add('active');
    notif('Added to cart!', 'success');
  }

  async function cartQty(id, d) {
    const e = state.cart.find(x => x.id === id); if (!e) return;
    e.qty += d;
    if (e.qty <= 0) state.cart = state.cart.filter(x => x.id !== id);
    ls.set('cart', state.cart); cartRender();
    if (API.isLoggedIn()) {
      try {
        if (e.qty <= 0) await API.removeFromCart(e.productRef || String(id));
        else await API.updateCartItem(e.productRef || String(id), e.qty);
      } catch (e) { /* silent */ }
    }
  }

  async function cartRemove(id) {
    const removed = state.cart.find(x => x.id === id);
    state.cart = state.cart.filter(x => x.id !== id);
    ls.set('cart', state.cart); cartRender();
    if (API.isLoggedIn()) {
      try { if (removed) await API.removeFromCart(removed.productRef || String(id)); } catch (e) { /* silent */ }
    }
  }
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
      return `<div class="cart-item"><img src="${p.image}" alt="${p.title}" loading="lazy" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100&q=80'"><div class="cart-item-info"><h4>${p.title}</h4><div class="cart-item-price">${fmt(p.price)}</div><div class="cart-item-controls"><button data-action="cart-qty" data-id="${p.id}" data-delta="-1">−</button><span>${i.qty}</span><button data-action="cart-qty" data-id="${p.id}" data-delta="1">+</button></div></div><button class="cart-item-remove" data-action="cart-remove" data-id="${p.id}"><i class="fas fa-trash-alt"></i></button></div>`;
    }).join('');
    D.cartSubtotal.textContent = fmt(t.sub);
    D.cartShipping.textContent = t.ship === 0 ? 'Free' : fmt(t.ship);
    D.cartTax.textContent = fmt(t.tax);
    D.cartDiscount.textContent = t.disc > 0 ? '- ' + fmt(t.disc) : fmt(0);
    const gwEl = document.getElementById('cartGiftWrap'); if (gwEl) gwEl.textContent = t.gw > 0 ? fmt(t.gw) : fmt(0);
    D.cartTotal.textContent = fmt(t.total);
  }
  window.__saCartQty = cartQty; window.__saCartRemove = cartRemove;

  /* ===== WISHLIST ===== */
  function wishlistInit() { state.wishlist = ls.get('wishlist', []); wishlistRender(); loadServerWishlist(); }

  async function loadServerWishlist() {
    if (!API.isLoggedIn()) return;
    try {
      const res = await API.getMe();
      if (res.user && res.user.wishlist) {
        res.user.wishlist.forEach(p => {
          const numId = parseInt(String(p._id || p).slice(-6), 16) || 0;
          const match = products.find(x => x._id === String(p));
          const id = match ? match.id : numId;
          if (id && !state.wishlist.includes(id)) state.wishlist.push(id);
        });
        ls.set('wishlist', state.wishlist);
        wishlistRender();
      }
    } catch (e) { /* silent */ }
  }

  async function wishlistToggle(id) {
    const i = state.wishlist.indexOf(id);
    i > -1 ? state.wishlist.splice(i,1) : state.wishlist.push(id);
    ls.set('wishlist', state.wishlist); wishlistRender(); wishlistUpdateBtns();
    if (API.isLoggedIn()) {
      try { await API.toggleServerWishlist(products.find(x=>x.id===id)?._id || String(id)); } catch (e) { /* silent */ }
    }
  }
  function wishlistRender() {
    D.wishlistBadge.textContent = state.wishlist.length;
    D.wishlistCount.textContent = '(' + state.wishlist.length + ')';
    if (!state.wishlist.length) {
      D.wishlistItems.innerHTML = '<div class="wishlist-empty"><i class="fas fa-heart"></i><p>Your wishlist is empty</p><span>Save items you love</span></div>'; return;
    }
    D.wishlistItems.innerHTML = state.wishlist.map(id => {
      const p = products.find(x => x.id === id); if (!p) return '';
      return `<div class="wishlist-item"><img src="${p.image}" alt="${p.title}" loading="lazy" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100&q=80'"><div class="wishlist-item-info"><h4>${p.title}</h4><div class="wishlist-item-price">${fmt(p.price)}</div><div class="wishlist-item-actions"><button class="wishlist-add-cart" data-action="cart-add" data-id="${p.id}">Add to Cart</button><button class="wishlist-remove" data-action="wishlist-toggle" data-id="${p.id}">Remove</button></div></div></div>`;
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

  /* ===== NOTIFICATION (stacking) ===== */
  const activeNotifs = [];
  function notif(msg, type = 'success') {
    const icons = { success: 'fas fa-check-circle', error: 'fas fa-exclamation-circle', info: 'fas fa-info-circle', warning: 'fas fa-exclamation-triangle' };
    const n = document.createElement('div');
    n.className = 'notification ' + type;
    n.innerHTML = '<i class="' + (icons[type] || icons.success) + '"></i><span>' + msg + '</span><button class="notif-close" aria-label="Dismiss">&times;</button>';
    document.body.appendChild(n);
    requestAnimationFrame(() => n.classList.add('show'));
    const dismiss = () => { n.classList.remove('show'); n.classList.add('hiding'); setTimeout(() => n.remove(), 300); };
    n.querySelector('.notif-close').addEventListener('click', dismiss);
    n.addEventListener('click', dismiss);
    const t = setTimeout(dismiss, 3500);
    n._t = t;
    activeNotifs.push(n);
    if (activeNotifs.length > 4) { const old = activeNotifs.shift(); clearTimeout(old._t); old.remove(); }
  }

  /* ===== SKELETON LOADERS ===== */
  function renderSkeletons(count) {
    const grid = D.productsGrid;
    grid.innerHTML = '';
    for (let i = 0; i < count; i++) {
      const sk = document.createElement('div');
      sk.className = 'skeleton-card';
      sk.innerHTML = '<div class="sk-img"></div><div class="sk-body"><div class="sk-line w60"></div><div class="sk-line w80"></div><div class="sk-line w40"></div></div>';
      grid.appendChild(sk);
    }
  }

  /* ===== BUTTON LOADING STATE ===== */
  function btnLoad(el, loading) {
    if (!el) return;
    if (loading) { el.classList.add('btn-loading'); el._origText = el.innerHTML; }
    else { el.classList.remove('btn-loading'); if (el._origText) el.innerHTML = el._origText; }
  }

  /* ===== SOCIAL PROOF ===== */
  function startSocialProof() {
    const names = ['Priya from Mumbai','Rahul from Delhi','Ananya from Bangalore','Vikram from Hyderabad','Meera from Chennai','Arjun from Kolkata','Sneha from Pune','Karthik from Ahmedabad','Deepa from Jaipur','Amit from Lucknow','Neha from Kochi','Rohan from Indore','Pooja from Nagpur','Sanjay from Bhopal','Kavya from Surat'];
    function showSocialProof() {
      const product = products[Math.floor(Math.random() * products.length)];
      const city = names[Math.floor(Math.random() * names.length)];
      const toast = document.createElement('div');
      toast.className = 'social-proof-toast';
      toast.innerHTML = `<img src="${product.image}" alt="" class="social-proof-img" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=80&q=80'"><div class="social-proof-text"><strong>${city}</strong> just purchased <span>${product.title.length > 30 ? product.title.substring(0, 30) + '...' : product.title}</span></div>`;
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
        <img src="${p.image}" alt="${p.title}" loading="lazy" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80'">
        <span class="product-card-badge ${p.badge}">${p.badgeText}</span>
        <div class="product-card-actions">
          <button class="wl-btn ${inW?'active':''}" data-id="${p.id}" data-action="wishlist-toggle" title="Wishlist"><i class="${inW?'fas':'far'} fa-heart"></i></button>
          <button class="${inC?'active':''}" data-action="compare-toggle" data-id="${p.id}" title="Compare"><i class="fas fa-exchange-alt"></i></button>
          <button data-action="quick-view" data-id="${p.id}" title="Quick View"><i class="fas fa-eye"></i></button>
        </div>
        <div class="product-card-overlay">
          <button class="btn btn-primary btn-sm" data-action="cart-add" data-id="${p.id}"><i class="fas fa-shopping-bag"></i> Add to Cart</button>
          <button class="btn btn-outline btn-sm" data-action="quick-view" data-id="${p.id}"><i class="fas fa-eye"></i> View</button>
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
  window.__saQuickView = async function (id) {
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
    const reviews = await fetchProductReviews(p.id);
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
      <div class="related-card" data-action="quick-view" data-id="${r.id}">
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
          <button class="modal-gallery-arrow modal-gallery-prev" data-action="gallery-nav" data-dir="-1" data-id="${p.id}"><i class="fas fa-chevron-left"></i></button>
          <img src="${p.images[0]}" alt="${p.title}" class="modal-main-image" id="modalMainImage" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80'">
          <button class="modal-gallery-arrow modal-gallery-next" data-action="gallery-nav" data-dir="1" data-id="${p.id}"><i class="fas fa-chevron-right"></i></button>
          <span class="modal-gallery-counter" id="modalGalleryCounter">1 / ${p.images.length}</span>
          ${p.badge ? `<span class="modal-badge ${p.badge}">${p.badgeText}</span>` : ''}
        </div>
        <div class="modal-thumbnails">${p.images.map((img,i) => `<img src="${img}" alt="${p.title} ${i+1}" class="modal-thumb ${i===0?'active':''}" data-action="gallery-go" data-idx="${i}" data-id="${p.id}" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&q=80'">`).join('')}</div>
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
        <div class="modal-colors"><h4>Colors</h4><div class="color-options">${p.colors.map((c,i) => `<button class="color-btn ${i===0?'active':''}" style="background:${c}" data-action="select-color"></button>`).join('')}</div></div>
        <div class="modal-sizes"><h4>Size</h4><div class="size-options">${p.sizes.map((s,i) => `<button class="size-btn ${i===0?'active':''}" data-action="select-size">${s}</button>`).join('')}</div></div>
        <div class="modal-quantity"><h4>Qty:</h4><button data-action="modal-qty" data-delta="-1">−</button><span id="modalQty">1</span><button data-action="modal-qty" data-delta="1">+</button></div>
        <div class="modal-actions">
          <button class="btn btn-primary" data-action="cart-add-close" data-id="${p.id}"><i class="fas fa-shopping-bag"></i> Add to Cart</button>
          <button class="modal-wishlist-btn ${inW?'active':''}" data-action="wishlist-toggle-reopen" data-id="${p.id}" title="Wishlist"><i class="${inW?'fas':'far'} fa-heart"></i></button>
        </div>
        <div class="modal-share"><h4>Share this product</h4><div class="share-buttons">
          <a href="https://api.whatsapp.com/send?text=${shareText}%20${shareUrl}" target="_blank" class="share-btn share-whatsapp"><i class="fab fa-whatsapp"></i> WhatsApp</a>
          <a href="https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}" target="_blank" class="share-btn share-twitter"><i class="fab fa-twitter"></i> Twitter</a>
          <button class="share-btn share-copy" data-action="copy-link"><i class="fas fa-link"></i> Copy Link</button>
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
    if (mainImg) { mainImg.src = p.images[idx]; mainImg.onerror = function() { this.onerror=null; this.src='https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80'; }; }
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
    D.searchResults.innerHTML = r.length ? r.map(p => `<div class="search-result-item" data-action="quick-view-close-search" data-id="${p.id}"><img src="${p.image}" alt="${p.title}" loading="lazy"><div class="result-info"><h4>${p.title}</h4><span>${p.category} · ${fmt(p.price)}</span></div></div>`).join('') : '<p style="text-align:center;color:var(--text-tertiary);padding:20px;">No products found</p>';
    D.searchResults.classList.add('visible');
  }

  function openSearch() { D.searchOverlay.classList.add('active'); if (D.navSearchInput && D.navSearchInput.value) { D.searchInput.value = D.navSearchInput.value; search(D.navSearchInput.value); } D.searchInput.focus(); D.body.style.overflow = 'hidden'; }
  function closeSearch() { D.searchOverlay.classList.remove('active'); D.searchInput.value = ''; D.searchResults.classList.remove('visible'); D.searchSuggestions.style.display = 'block'; D.searchClear.classList.remove('visible'); D.body.style.overflow = ''; if (D.navSearchInput) D.navSearchInput.blur(); }
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
        const mapped = data.products.map((p, i) => ({
          id: i + 1,
          _id: p._id, title: p.title, category: p.category, price: p.price,
          originalPrice: p.originalPrice, rating: p.rating, reviews: p.reviews,
          badge: p.badge, badgeText: p.badgeText, image: p.image, images: p.images,
          description: p.description, colors: p.colors, sizes: p.sizes, featured: p.featured
        }));
        products.length = 0;
        mapped.forEach(p => products.push(p));
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

    /* Drawer Profile / Settings */
    const drawerProfile = document.getElementById('drawerProfileBtn');
    const drawerSettings = document.getElementById('drawerSettingsBtn');
    if (drawerProfile) drawerProfile.addEventListener('click', e => { e.preventDefault(); D.hamburger.classList.remove('active'); D.navLinks.classList.remove('active'); D.loginBtn.click(); });
    if (drawerSettings) drawerSettings.addEventListener('click', e => { e.preventDefault(); D.hamburger.classList.remove('active'); D.navLinks.classList.remove('active'); D.themeToggle.click(); });

    /* Search */
    if (D.searchToggle) D.searchToggle.addEventListener('click', openSearch);
    if (D.navSearchInput) D.navSearchInput.addEventListener('focus', openSearch);
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
      const btn = D.authLoginForm.querySelector('button[type="submit"]');
      btnLoad(btn, true);
      try {
        await API.login(email, pass);
        closeAuth(); updateAuthView(); notif('Signed in!', 'success');
        syncCartToBackend();
        loadServerWishlist();
      } catch (err) { showAuthError('loginError', err.message); }
      btnLoad(btn, false);
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
      const btn = D.authRegisterForm.querySelector('button[type="submit"]');
      btnLoad(btn, true);
      try {
        await API.register(name, email, phone, pass);
        closeAuth(); updateAuthView(); notif('Account created!', 'success');
        syncCartToBackend();
        loadServerWishlist();
      } catch (err) { showAuthError('registerError', err.message); }
      btnLoad(btn, false);
    });
    document.getElementById('logoutBtn').addEventListener('click', () => { API.logout(); updateAuthView(); closeAuth(); notif('Signed out', 'success'); });
    document.getElementById('viewOrdersBtn').addEventListener('click', async () => {
      closeAuth();
      try {
        const res = await API.getMyOrders();
        if (res.orders && res.orders.length) {
          let html = '<div style="position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.6);z-index:10000;display:flex;align-items:center;justify-content:center;padding:20px" id="orderHistoryModal">';
          html += '<div style="background:var(--bg);border-radius:16px;max-width:600px;width:100%;max-height:80vh;overflow-y:auto;padding:24px;position:relative">';
          html += '<button data-action="close-order-history" style="position:absolute;top:12px;right:16px;background:none;border:none;font-size:24px;cursor:pointer;color:var(--text)">&times;</button>';
          html += '<h2 style="margin:0 0 16px;font-size:20px"><i class="fas fa-box" style="margin-right:8px;color:var(--primary)"></i>My Orders</h2>';
          res.orders.forEach(o => {
            const date = new Date(o.createdAt).toLocaleDateString('en-IN', { day:'numeric', month:'short', year:'numeric' });
            const statusColors = { placed:'#f59e0b', confirmed:'#3b82f6', processing:'#8b5cf6', shipped:'#06b6d4', delivered:'#10b981', cancelled:'#ef4444', returned:'#ef4444' };
            html += '<div style="border:1px solid var(--border);border-radius:12px;padding:16px;margin-bottom:12px">';
            html += '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">';
            html += '<span style="font-weight:600;font-size:14px">#' + o.orderNumber + '</span>';
            html += '<span style="font-size:12px;padding:3px 10px;border-radius:20px;background:' + (statusColors[o.status] || '#666') + '20;color:' + (statusColors[o.status] || '#666') + ';font-weight:600">' + o.status.charAt(0).toUpperCase() + o.status.slice(1) + '</span>';
            html += '</div>';
            html += '<div style="font-size:12px;color:var(--text-secondary);margin-bottom:8px">' + date + '</div>';
            html += '<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:8px">';
            o.items.forEach(item => {
              html += '<div style="display:flex;align-items:center;gap:6px;background:var(--bg-secondary);padding:4px 8px;border-radius:8px;font-size:12px">';
              html += '<img src="' + item.image + '" style="width:28px;height:28px;border-radius:4px;object-fit:cover">';
              html += '<span>' + item.title.substring(0, 20) + (item.title.length > 20 ? '...' : '') + ' x' + item.qty + '</span>';
              html += '</div>';
            });
            html += '</div>';
            html += '<div style="display:flex;justify-content:space-between;font-size:14px;font-weight:600">';
            html += '<span>Total</span><span style="color:var(--primary)">₹' + o.total.toLocaleString('en-IN') + '</span>';
            html += '</div>';
            html += '<div style="font-size:11px;color:var(--text-secondary);margin-top:4px">Payment: ' + (o.payment.method === 'cod' ? 'Cash on Delivery' : 'Online (' + o.payment.status + ')') + '</div>';
            html += '</div>';
          });
          html += '</div></div>';
          document.body.insertAdjacentHTML('beforeend', html);
          document.getElementById('orderHistoryModal').addEventListener('click', e => { if (e.target.id === 'orderHistoryModal') e.target.remove(); });
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

    /* ===== EVENT DELEGATION (replaces all inline onclick) ===== */
    document.body.addEventListener('click', function(e) {
      const el = e.target.closest('[data-action]');
      if (!el) return;
      const action = el.dataset.action;
      const id = parseInt(el.dataset.id);
      const delta = parseInt(el.dataset.delta);
      const idx = parseInt(el.dataset.idx);

      switch (action) {
        case 'cart-add':
          e.stopPropagation();
          cartAdd(id);
          break;
        case 'cart-add-close':
          e.stopPropagation();
          cartAdd(id);
          closeModal();
          break;
        case 'cart-qty':
          e.stopPropagation();
          cartQty(id, delta);
          break;
        case 'cart-remove':
          e.stopPropagation();
          cartRemove(id);
          break;
        case 'wishlist-toggle':
          e.stopPropagation();
          wishlistToggle(id);
          break;
        case 'wishlist-toggle-reopen':
          e.stopPropagation();
          wishlistToggle(id);
          window.__saQuickView(id);
          break;
        case 'compare-toggle':
          e.stopPropagation();
          compareToggle(id);
          break;
        case 'quick-view':
          e.stopPropagation();
          window.__saQuickView(id);
          break;
        case 'quick-view-close-search':
          e.stopPropagation();
          window.__saQuickView(id);
          closeSearch();
          break;
        case 'gallery-nav':
          e.stopPropagation();
          window.__saGalleryNav(delta, id);
          break;
        case 'gallery-go':
          e.stopPropagation();
          window.__saGalleryGo(idx, id);
          break;
        case 'select-color':
          e.stopPropagation();
          document.querySelectorAll('#modalBody .color-btn').forEach(b => b.classList.remove('active'));
          el.classList.add('active');
          break;
        case 'select-size':
          e.stopPropagation();
          document.querySelectorAll('#modalBody .size-btn').forEach(b => b.classList.remove('active'));
          el.classList.add('active');
          break;
        case 'modal-qty':
          e.stopPropagation();
          {
            const qtySpan = el.id === 'modalQty' ? el : (delta < 0 ? el.nextElementSibling : el.previousElementSibling);
            let v = parseInt(qtySpan.textContent);
            v += delta;
            if (v < 1) v = 1;
            qtySpan.textContent = v;
          }
          break;
        case 'copy-link':
          e.stopPropagation();
          navigator.clipboard.writeText(window.location.href).then(() => {
            el.innerHTML = '<i class="fas fa-check"></i> Copied!';
            setTimeout(() => { el.innerHTML = '<i class="fas fa-link"></i> Copy Link'; }, 2000);
          });
          break;
        case 'close-order-history':
          e.stopPropagation();
          {
            const modal = document.getElementById('orderHistoryModal');
            if (modal) modal.remove();
          }
          break;
        case 'toggle-view-all':
          e.stopPropagation();
          toggleViewAll();
          break;
      }
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

  /* ===== KEYBOARD SHORTCUTS ===== */
  function initKeyboardShortcuts() {
    document.addEventListener('keydown', e => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT') return;
      if (e.key === '/' && !e.ctrlKey && !e.metaKey) { e.preventDefault(); openSearch(); }
      if (e.key === 'c' && !e.ctrlKey && !e.metaKey && !e.altKey) { D.cartPanel.classList.add('active'); }
      if (e.key === 'w' && !e.ctrlKey && !e.metaKey && !e.altKey) { D.wishlistPanel.classList.add('active'); }
    });
  }

  /* ===== INIT ===== */
  async function init() {
    const safe = (fn, label) => { try { fn(); } catch (e) { console.warn('Init error [' + label + ']:', e); } };
    safe(cartInit, 'cart');
    safe(wishlistInit, 'wishlist');
    try { API.loadFromStorage(); } catch(e) { console.warn('loadFromStorage error:', e); }
    safe(updateAuthView, 'authView');
    safe(() => renderSkeletons(12), 'skeletons');
    safe(renderProducts, 'products');
    safe(renderNewArrivals, 'newArrivals');
    safe(renderBestSellers, 'bestSellers');
    safe(renderTrending, 'trending');
    safe(renderTestimonials, 'testimonials');
    safe(initFaq, 'faq');
    safe(initCountdown, 'countdown');
    safe(initSwipers, 'swipers');
    safe(initTilt, 'tilt');
    safe(initEvents, 'events');
    safe(heroParticles, 'particles');
    safe(animateCounters, 'counters');
    safe(updateScrollBtn, 'scrollBtn');
    safe(renderRecentlyViewed, 'recentlyViewed');
    safe(startSocialProof, 'socialProof');
    safe(initKeyboardShortcuts, 'keyboard');
    loadProductsFromAPI().then(() => {
      if (products.length) {
        renderProducts();
        renderNewArrivals();
        renderBestSellers();
        renderTrending();
      }
    }).catch(() => {});
    setTimeout(() => safe(initGsap, 'gsap'), 150);
    setTimeout(() => safe(initAos, 'aos'), 250);
    hideLoader();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
