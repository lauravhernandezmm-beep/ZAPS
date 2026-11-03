/* ZAPS · Mobile-first · Supabase Auth + PostgREST (o demo local sin configurar) */
'use strict';
let CATALOG = [
 {
  "id": "ZAPS001",
  "brand": "Nike SB",
  "model": "Dunk Low Paris",
  "year": 2003,
  "colorway": "Rope / Special Cardinal",
  "category": "Skateboarding",
  "rarity": "Muy alta",
  "limited": true,
  "description": "Dunk SB vinculada al artista Bernard Buffet; edición conocida por sus paneles artísticos multicolor.",
  "imageUrl": "https://dorawastore.pl/userdata/public/gfx/8029/Nike-Dunk-Low-SB-Paris.jpg",
  "sku": "308270-111"
 },
 {
  "id": "ZAPS002",
  "brand": "Nike SB",
  "model": "Dunk Low What The Dunk",
  "year": 2007,
  "colorway": "White / College Blue / Chrome / Deep Red",
  "category": "Skateboarding",
  "rarity": "Muy alta",
  "limited": true,
  "description": "Modelo que combina elementos de numerosas Nike SB Dunk anteriores en un diseño asimétrico.",
  "imageUrl": "https://dropinblog.net/34240971/files/featured/Nike-SB-Dunk-Low-What-The-Dunk-318403-141-2007-Release-Date-3.png",
  "sku": "318403-141"
 },
 {
  "id": "ZAPS003",
  "brand": "Nike SB",
  "model": "Dunk Low Staple NYC Pigeon",
  "year": 2005,
  "colorway": "Medium Grey / White / Dark Grey",
  "category": "Skateboarding",
  "rarity": "Muy alta",
  "limited": true,
  "description": "Colaboración con Jeff Staple reconocida por su bordado de paloma y vínculo con Nueva York.",
  "imageUrl": "https://triosquad.com/cdn/shop/files/NikeSBDunkLowStapleNYCPigeon.png?v=1782213802&width=1254",
  "sku": "304292-011"
 },
 {
  "id": "ZAPS004",
  "brand": "Nike",
  "model": "Air Yeezy 2 Red October",
  "year": 2014,
  "colorway": "Red / Red",
  "category": "Lifestyle",
  "rarity": "Muy alta",
  "limited": true,
  "description": "Modelo de la colaboración Nike y Kanye West, conocido por su acabado completamente rojo.",
  "imageUrl": "https://i.ebayimg.com/images/g/qdsAAOSwRuBl8l7k/s-l1200.jpg",
  "sku": "508214-660"
 },
 {
  "id": "ZAPS005",
  "brand": "Nike",
  "model": "Air Max 1/97 Sean Wotherspoon",
  "year": 2018,
  "colorway": "Multicolor / Light Blue Fury",
  "category": "Lifestyle",
  "rarity": "Alta",
  "limited": true,
  "description": "Colaboración de Sean Wotherspoon que mezcla rasgos de Air Max 1 y Air Max 97 con pana multicolor.",
  "imageUrl": "https://images.soleretriever.com/sb/products/nike_air_max_1_97_sean_wotherspoon_AJ4219-400-1753201846690.webp?fit=contain&quality=90&width=1600",
  "sku": "AJ4219-400"
 },
 {
  "id": "ZAPS006",
  "brand": "Air Jordan",
  "model": "Air Jordan 1 Retro High OG Chicago",
  "year": 2015,
  "colorway": "White / Varsity Red / Black",
  "category": "Basketball / Lifestyle",
  "rarity": "Alta",
  "limited": false,
  "description": "Versión retro del colorway Chicago clásico de Air Jordan 1. Se usa aquí la edición de 2015.",
  "imageUrl": "https://dropoutmilano.com/cdn/shop/files/jordan-1-retro-chicago-2015-dropout-1.jpg?v=1751222292",
  "sku": "555088-101"
 },
 {
  "id": "ZAPS007",
  "brand": "Air Jordan",
  "model": "Air Jordan 1 High OG Travis Scott Mocha",
  "year": 2019,
  "colorway": "Sail / Dark Mocha / University Red / Black",
  "category": "Lifestyle",
  "rarity": "Muy alta",
  "limited": true,
  "description": "Colaboración con Travis Scott identificable por el Swoosh invertido y tonos marrones.",
  "imageUrl": "https://dawntown.co.in/cdn/shop/files/travismocha.jpg?v=1770394851&width=1499",
  "sku": "CD4487-100"
 },
 {
  "id": "ZAPS008",
  "brand": "Air Jordan",
  "model": "Air Jordan 4 Retro Off-White Sail",
  "year": 2020,
  "colorway": "Sail / Muslin / White / Black",
  "category": "Lifestyle",
  "rarity": "Muy alta",
  "limited": true,
  "description": "Colaboración Off-White de Virgil Abloh sobre la silueta Jordan 4, con acabados en tonos crema.",
  "imageUrl": "https://i.ebayimg.com/images/g/9r0AAeSwWg9o0HHI/s-l1200.jpg",
  "sku": "CV9388-100"
 },
 {
  "id": "ZAPS009",
  "brand": "Adidas",
  "model": "Yeezy Boost 350 V2 Zebra",
  "year": 2017,
  "colorway": "White / Core Black / Red",
  "category": "Lifestyle",
  "rarity": "Alta",
  "limited": false,
  "description": "Yeezy Boost 350 V2 con tejido Primeknit a rayas blancas y negras y detalle rojo.",
  "imageUrl": "https://vipsneakers.ae/cdn/shop/products/adidas-yeezy-boost-350-v2-zebra-1.webp?v=1676794096",
  "sku": "CP9654"
 },
 {
  "id": "ZAPS010",
  "brand": "Adidas",
  "model": "Samba OG Wales Bonner",
  "year": 2020,
  "colorway": "Edición por concretar",
  "category": "Lifestyle",
  "rarity": "Alta",
  "limited": true,
  "description": "Colaboración Wales Bonner x Adidas Samba; es necesario elegir el colorway exacto antes de fijar el año y SKU.",
  "imageUrl": "https://images.stockx.com/images/adidas-Samba-Wales-Bonner-Silver-Product.jpg?auto=compress&bg=FFFFFF&dpr=2&fit=fill&fm=webp&h=500&q=90&trim=color&updated_at=1738193358&w=700",
  "sku": "IG8181"
 },
 {
  "id": "ZAPS011",
  "brand": "Adidas",
  "model": "Bad Bunny Forum Buckle Low The First Café",
  "year": 2021,
  "colorway": "Brown / Beige",
  "category": "Lifestyle",
  "rarity": "Alta",
  "limited": true,
  "description": "Colaboración de Bad Bunny sobre Forum Low con una construcción de correas y tonos café.",
  "imageUrl": "https://images.squarespace-cdn.com/content/v1/5e448f9107f0455f95d191fe/1615985252306-6MSGXLTQBNMCJKLUUL9Q/Bad-Bunny-adidas-Forum-Buckle-Lo-GW0264-9.jpg",
  "sku": "GW0264"
 },
 {
  "id": "ZAPS012",
  "brand": "New Balance",
  "model": "2002R Protection Pack Rain Cloud",
  "year": 2021,
  "colorway": "Rain Cloud / Grey",
  "category": "Running / Lifestyle",
  "rarity": "Media",
  "limited": false,
  "description": "Versión Protection Pack de la 2002R, con paneles de ante de cortes irregulares.",
  "imageUrl": "https://cdn.sanity.io/images/c1chvb1i/production/1296b0259d0e14fa8a93181726b2b4469439d7ee-3098x2072.jpg/new-balance-2002-protection-pack-shot.jpg?w=2880",
  "sku": "M2002RDA"
 },
 {
  "id": "ZAPS013",
  "brand": "New Balance",
  "model": "990v3 JJJJound",
  "year": 2022,
  "colorway": "Edición por concretar",
  "category": "Running / Lifestyle",
  "rarity": "Alta",
  "limited": true,
  "description": "Colaboración JJJJound sobre 990v3; debe elegirse una combinación de colores concreta.",
  "imageUrl": "https://statics.whentocop.fr/drops/1286/picture_360/909D81_JJJJound-x-New-Balance-990V3_OLIVE_M990JD3_img0-2000x2000.webp",
  "sku": "M990JJ3"
 },
 {
  "id": "ZAPS014",
  "brand": "New Balance",
  "model": "9060",
  "year": 2022,
  "colorway": "Edición por concretar",
  "category": "Lifestyle",
  "rarity": "Media",
  "limited": false,
  "description": "Silueta New Balance 9060 con volumen marcado e inspiración en diseños de running clásicos.",
  "imageUrl": "https://static.luck-d.com/product/3775/main_carousel/NEW_BALANCE_9060_SEA_SALT_WHITE_U9060ECA_38767.jpg",
  "sku": "U9060ECA"
 },
 {
  "id": "ZAPS015",
  "brand": "ASICS",
  "model": "GEL-KAYANO 14",
  "year": 2008,
  "colorway": "Edición por concretar",
  "category": "Running / Lifestyle",
  "rarity": "Media",
  "limited": false,
  "description": "Modelo técnico de running de estética retro que combina materiales de malla con refuerzos sintéticos.",
  "imageUrl": "https://imagedelivery.net/2DfovxNet9Syc-4xYpcsGg/a43017c1-1218-4e44-b1fc-a446f10a7300/public",
  "sku": "1201A019-102"
 },
 {
  "id": "ZAPS016",
  "brand": "ASICS",
  "model": "GEL-NYC",
  "year": 2022,
  "colorway": "Edición por concretar",
  "category": "Running / Lifestyle",
  "rarity": "Media",
  "limited": false,
  "description": "Silueta que mezcla referencias del catálogo de running de ASICS con una construcción contemporánea.",
  "imageUrl": "https://item-shopping.c.yimg.jp/i/n/snkrs-aclo_as-1201a789103_4_d_20240130141606",
  "sku": "1201A789-103"
 },
 {
  "id": "ZAPS017",
  "brand": "ASICS",
  "model": "GEL-LYTE III Ronnie Fieg Salmon Toe",
  "year": 2011,
  "colorway": "Navy / White / Salmon",
  "category": "Lifestyle",
  "rarity": "Muy alta",
  "limited": true,
  "description": "Colaboración de Ronnie Fieg para Kith, con puntera salmón y una base azul marino.",
  "imageUrl": "https://images.stockx.com/images/Asics-Gel-Lyte-III-Ronnie-Fieg-Salmon-Toes-2011.jpg?auto=compress&bg=FFFFFF&dpr=2&fit=fill&fm=webp&h=500&q=90&trim=color&updated_at=1606318883&w=700",
  "sku": "H02AK-5001"
 },
 {
  "id": "ZAPS018",
  "brand": "Salomon",
  "model": "XT-6",
  "year": 2013,
  "colorway": "Edición por concretar",
  "category": "Trail / Lifestyle",
  "rarity": "Media",
  "limited": false,
  "description": "Zapatilla de origen trail que se ha popularizado también en el ámbito urbano y de moda.",
  "imageUrl": "https://sidekicks.co.uk/cdn/shop/files/1369377_00_png.png?v=1739309783",
  "sku": "L47445300"
 },
 {
  "id": "ZAPS019",
  "brand": "Maison Margiela",
  "model": "Replica",
  "year": 2012,
  "colorway": "Edición por concretar",
  "category": "Fashion / Lifestyle",
  "rarity": "Media",
  "limited": false,
  "description": "Zapatilla de inspiración retro de la línea Replica de Maison Margiela; falta elegir la versión exacta.",
  "imageUrl": "https://unlawfulpersona.com/cdn/shop/files/3A2776AB-31CE-4C87-9C0F-4DB5017CF64B.jpg?v=1760753752&width=1445",
  "sku": "S57WS0236P1895101"
 },
 {
  "id": "ZAPS020",
  "brand": "Balenciaga",
  "model": "3XL",
  "year": 2023,
  "colorway": "Edición por concretar",
  "category": "Fashion / Lifestyle",
  "rarity": "Media",
  "limited": false,
  "description": "Silueta de moda de gran volumen, con suela exagerada y estética de running reinterpretada.",
  "imageUrl": "https://five-steps.ru/image/cache/catalog/Balenciaga/balenciaga-stapler-sneaker/balenciaga-3xl-sneaker-worn-out-new-grey/Balenciaga%203XL%20Sneaker%20%27Worn-Out%20-%20Grey%27-10-860x860.jpg",
  "sku": "759693-W3XLI-1819"
 }
];
const USERS_KEY='zaps.local.users.v2';
const SESSION_KEY='zaps.local.session.v2';
let activeEmail=null;
let authMode='welcome';
let recoveryStep='request';
let recoveryEmail='';
let remoteAccessToken='';
let remoteUserId=null;
let serverSnapshot=[];
let busySaving=false;
const REMOTE_SESSION_KEY='zaps.supabase.session.v1';
const AUTH_CONFIG=window.ZAPS_AUTH_CONFIG||{};
const REMOTE_AUTH=Boolean(AUTH_CONFIG.supabaseUrl?.trim()&&AUTH_CONFIG.supabaseAnonKey?.trim());

const storageKey=()=>`zaps.user.${activeEmail}.records.v2`;
const OLD_IDS={'nike-paris':'ZAPS001','asics-kayano':'ZAPS015','nb-2002r':'ZAPS012','nike-travis':'ZAPS007','salomon-xt6':'ZAPS018','adidas-samba':'ZAPS010'};
function getUsers(){try{return JSON.parse(localStorage.getItem(USERS_KEY)||'{}')}catch{return {}}}
function sessionEmail(){try{return localStorage.getItem(SESSION_KEY)}catch{return null}}
function setAuthError(message){const el=document.getElementById('authError');el.textContent=message;el.hidden=!message}
function setAuthInfo(message){const el=document.getElementById('authInfo');el.textContent=message;el.hidden=!message}
function setAuthMode(mode){
 authMode=mode;const formMode=mode!=='welcome';
 document.getElementById('authWelcome').hidden=formMode;
 document.getElementById('authContent').hidden=!formMode;
 const reg=mode==='register',recover=mode==='recover';
 if(!formMode)return;
 document.getElementById('authNameWrap').classList.toggle('hidden',!reg);
 document.getElementById('authPasswordWrap').hidden=recover;
 document.getElementById('authRecoveryCodeWrap').hidden=!recover||recoveryStep!=='verify';
 document.getElementById('authNewPasswordWrap').hidden=!recover||!['verify','link'].includes(recoveryStep);
 document.getElementById('authRecoveryCodeWrap').hidden=!recover||recoveryStep!=='verify';
 document.getElementById('authHeading').textContent=reg?'Crear una cuenta':recover?'Recuperar contraseña':'Iniciar sesión';
 document.getElementById('authCaption').textContent=reg?'Regístrate para empezar tu colección.':recover?(recoveryStep==='verify'?'Introduce el código enviado a tu correo y una nueva contraseña.':recoveryStep==='link'?'Escribe tu nueva contraseña para recuperar la cuenta.':'Escribe tu correo y recibirás un enlace para restablecer tu contraseña.'):'Entra en tu universo sneaker.';
 document.getElementById('authSubmit').textContent=reg?'Registrarse':recover?(['verify','link'].includes(recoveryStep)?'Cambiar contraseña':'Enviar correo de recuperación'):'Iniciar sesión';
 document.getElementById('authForgotLink').hidden=recover;
 document.getElementById('authNote').textContent=REMOTE_AUTH?'Cuenta y colección sincronizadas con Supabase. No compartas tu contraseña.':'Modo demo local: no se pueden enviar emails sin configurar Supabase. No uses contraseñas personales.';
 document.getElementById('authForm').reset();
 document.getElementById('authEmail').hidden=false;document.querySelector('label[for="authEmail"]').hidden=false;
 if(recover&&recoveryEmail)document.getElementById('authEmail').value=recoveryEmail;
 setAuthError('');setAuthInfo('');
}
async function supabaseRequest(path,method,body,token){
 const base=AUTH_CONFIG.supabaseUrl.trim().replace(/\/$/,'');
 const response=await fetch(base+'/auth/v1/'+path,{method,headers:{'apikey':AUTH_CONFIG.supabaseAnonKey.trim(),'Authorization':'Bearer '+(token||AUTH_CONFIG.supabaseAnonKey.trim()),'Content-Type':'application/json'},body:body?JSON.stringify(body):undefined});
 const result=await response.json().catch(()=>({}));
 if(!response.ok)throw Error(result.msg||result.error_description||result.message||result.error||'No se ha podido completar la solicitud.');
 return result;
}
function saveRemoteSession(data){
 if(!data?.access_token||!data.user?.email)return false;
 remoteAccessToken=data.access_token;
 remoteUserId=data.user.id;
 localStorage.setItem(REMOTE_SESSION_KEY,JSON.stringify({email:data.user.email,user_id:data.user.id,access_token:data.access_token,refresh_token:data.refresh_token||'',expires_at:Math.floor(Date.now()/1000)+(data.expires_in||3600)}));
 localStorage.setItem(SESSION_KEY,data.user.email.toLowerCase());
 const users=getUsers();users[data.user.email.toLowerCase()]={name:data.user.user_metadata?.name||data.user.email.split('@')[0],email:data.user.email};localStorage.setItem(USERS_KEY,JSON.stringify(users));
 return true;
}
async function handleRecovery(form){
 if(!REMOTE_AUTH){setAuthError('Para recibir un correo real, primero hay que configurar Supabase en config.js. Esta versión local no envía emails.');return}
 const email=form.elements.email.value.trim().toLowerCase();
 if(recoveryStep==='request'&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){setAuthError('Introduce un correo válido.');return}
 try{
  if(recoveryStep==='request'){
   const redirect=AUTH_CONFIG.siteUrl?.trim()||location.href.split('#')[0];
   await supabaseRequest('recover?redirect_to='+encodeURIComponent(redirect),'POST',{email});recoveryEmail=email;setAuthMode('recover');setAuthInfo('Si existe una cuenta, recibirás un enlace en tu email. Ábrelo desde el mismo navegador. Revisa spam.');return;
  }
  const token=form.elements.recoveryCode.value.trim(),newPassword=form.elements.newPassword.value;
  if(newPassword.length<8){setAuthError('La nueva contraseña debe tener al menos 8 caracteres.');return}
  let recoveryToken=remoteAccessToken;
  if(recoveryStep==='verify'){
   if(!token){setAuthError('Introduce el código que recibiste por correo.');return}
   const verified=await supabaseRequest('verify','POST',{email,token,type:'recovery'});
   recoveryToken=verified.access_token;
  }
  if(!recoveryToken)throw Error('El enlace ha caducado. Solicita otro correo de recuperación.');
  await supabaseRequest('user','PUT',{password:newPassword},recoveryToken);
  remoteAccessToken='';localStorage.removeItem(REMOTE_SESSION_KEY);localStorage.removeItem(SESSION_KEY);
  recoveryStep='request';recoveryEmail='';setAuthMode('login');setAuthInfo('Contraseña cambiada. Ya puedes iniciar sesión.');
 }catch(e){setAuthError(e.message||'No se ha podido completar la recuperación. Comprueba el código.')}
}
async function handleRemoteAuth(form){
 const email=form.elements.email.value.trim().toLowerCase(),password=form.elements.password.value,name=form.elements.name.value.trim();
 if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){setAuthError('Introduce un correo válido.');return}
 if(password.length<8){setAuthError('La contraseña debe tener al menos 8 caracteres.');return}
 if(authMode==='register'&&name.length<2){setAuthError('Introduce un nombre de al menos 2 caracteres.');return}
 try{
  if(authMode==='register'){
   const result=await supabaseRequest('signup','POST',{email,password,data:{name}});
   if(result.access_token&&result.user){saveRemoteSession(result);await showApp(email);notify('Cuenta creada correctamente');}
   else{setAuthMode('login');setAuthInfo('Comprueba tu correo y confirma la cuenta antes de iniciar sesión.');}
  }else{
   const result=await supabaseRequest('token?grant_type=password','POST',{email,password});
   if(!saveRemoteSession(result))throw Error('No se pudo iniciar la sesión.');
   await showApp(email);notify('Sesión iniciada');
  }
 }catch(e){setAuthError(e.message||'No se ha podido completar el acceso.')}
}
async function passwordDigest(email,password,salt){
 const msg=`zaps-local-demo:${salt}:${email}:${password}`;
 if(window.crypto?.subtle){const bytes=new TextEncoder().encode(msg);const hash=await crypto.subtle.digest('SHA-256',bytes);return Array.from(new Uint8Array(hash),b=>b.toString(16).padStart(2,'0')).join('')}
 // Compatibilidad con navegadores que no permiten Web Crypto al abrir un archivo local.
 let a=2166136261;for(let i=0;i<msg.length;i++){a=Math.imul(a^msg.charCodeAt(i),16777619)}return 'local-'+(a>>>0).toString(16);
}
async function showApp(email){
 activeEmail=email;
 if(REMOTE_AUTH){
  try{ await loadRemoteData(); }
  catch(err){activeEmail=null;remoteAccessToken='';remoteUserId=null;localStorage.removeItem(REMOTE_SESSION_KEY);localStorage.removeItem(SESSION_KEY);showAuth();setAuthMode('login');setAuthError('No se ha podido conectar con la base de datos: '+err.message);return}
 } else records=loadRecords();
 document.getElementById('authScreen').hidden=true;document.getElementById('appShell').hidden=false;render();
}
function showAuth(){activeEmail=null;remoteUserId=null;records=[];document.getElementById('authScreen').hidden=false;document.getElementById('appShell').hidden=true;location.hash='#dashboard';setAuthMode('welcome')}
async function handleAuth(form){
 if(authMode==='recover')return handleRecovery(form);
 if(REMOTE_AUTH)return handleRemoteAuth(form);
 const email=form.elements.email.value.trim().toLowerCase();const password=form.elements.password.value;const name=form.elements.name.value.trim();
 if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){setAuthError('Introduce un correo electrónico válido.');return}
 if(password.length<8){setAuthError('La contraseña debe tener al menos 8 caracteres.');return}
 const users=getUsers();
 if(authMode==='register'){
  if(name.length<2){setAuthError('Introduce un nombre de al menos 2 caracteres.');return}
  if(users[email]){setAuthError('Ya existe una cuenta con ese correo. Inicia sesión.');return}
  const salt=(typeof crypto!=='undefined'&&crypto.getRandomValues?Array.from(crypto.getRandomValues(new Uint8Array(16)),b=>b.toString(16).padStart(2,'0')).join(''):Array.from({length:4},()=>Math.random().toString(36).slice(2)).join(''));
  users[email]={name,email,salt,hash:await passwordDigest(email,password,salt)};
  try{localStorage.setItem(USERS_KEY,JSON.stringify(users));localStorage.setItem(SESSION_KEY,email)}catch{setAuthError('No se pueden guardar datos en este navegador.');return}
  showApp(email);notify('¡Cuenta creada! Bienvenida a ZAPS.');return;
 }
 const user=users[email];if(!user||user.hash!==await passwordDigest(email,password,user.salt)){setAuthError('Correo o contraseña incorrectos.');return}
 try{localStorage.setItem(SESSION_KEY,email)}catch{setAuthError('No se pudo guardar la sesión.');return}
 showApp(email);notify(`¡Hola, ${user.name}!`)
}

const ICONS={footprints:'<path d="M5 3c2 0 3 3 3 6v4c0 1.7-1.2 3-2.7 3S2.5 15 2.5 13V9c0-3 1-6 2.5-6Z"/><path d="M17 8c1.8 0 3 3 3 6v4c0 1.8-1.2 3-2.8 3S14.5 20 14.5 18v-4c0-3 1-6 2.5-6Z"/>',dashboard:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',search:'<circle cx="10.8" cy="10.8" r="7.3"/><path d="m16.3 16.3 5 5"/>',collection:'<path d="m12 2 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5M3 17l9 5 9-5"/>',heart:'<path d="M20.8 4.7a5.5 5.5 0 0 0-7.8 0L12 5.8l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.5a5.5 5.5 0 0 0 0-7.8Z"/>',profile:'<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',back:'<path d="m15 18-6-6 6-6"/><path d="M9 12h12"/>',more:'<circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/>',shoe:'<path d="M4 4h7v10l7 3 2 3H4V4Z"/><path d="M4 15h13"/>',plus:'<path d="M12 5v14M5 12h14"/>',edit:'<path d="M4 20h4L20 8l-4-4L4 16v4Z"/>',trash:'<path d="M4 7h16M10 4h4M6 7l1 14h10l1-14M10 11v6M14 11v6"/>',close:'<path d="M5 5l14 14M19 5 5 19"/>',check:'<path d="m4 12 5 5L20 6"/>'};
const icon=(name,klass='')=>`<svg class="${klass}" viewBox="0 0 24 24" aria-hidden="true">${ICONS[name]||ICONS.shoe}</svg>`;
const escapeHtml=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const catalogById=id=>CATALOG.find(x=>x.id===id);
const toRecord=row=>({id:row.id,shoeId:row.shoe_id,list:row.list,size:row.size||'',condition:row.condition||'',price:row.price??'',date:row.purchase_date||'',notes:row.notes||'',createdAt:Date.parse(row.created_at)||Date.now()});
const fromRecord=r=>({id:r.id,user_id:remoteUserId,shoe_id:r.shoeId,list:r.list,size:r.size||null,condition:r.condition||null,price:r.price===''?null:Number(r.price),purchase_date:r.date||null,notes:r.notes||''});
async function dbRequest(resource,method='GET',body=null,query='',prefer='return=representation'){
 if(!remoteAccessToken)throw Error('La sesión ha caducado. Inicia sesión de nuevo.');
 const url=AUTH_CONFIG.supabaseUrl.trim().replace(/\/$/,'')+'/rest/v1/'+resource+(query?'?'+query:'');
 const headers={'apikey':AUTH_CONFIG.supabaseAnonKey.trim(),'Authorization':'Bearer '+remoteAccessToken,'Content-Type':'application/json','Accept':'application/json'};
 if(method!=='GET')headers.Prefer=prefer;
 let response=await fetch(url,{method,headers,body:body===null?undefined:JSON.stringify(body)});
 if(response.status===401){
  const saved=JSON.parse(localStorage.getItem(REMOTE_SESSION_KEY)||'null');
  if(saved?.refresh_token){const refresh=await supabaseRequest('token?grant_type=refresh_token','POST',{refresh_token:saved.refresh_token});saveRemoteSession(refresh);headers.Authorization='Bearer '+remoteAccessToken;response=await fetch(url,{method,headers,body:body===null?undefined:JSON.stringify(body)});}
 }
 const result=await response.json().catch(()=>null);
 if(!response.ok)throw Error(result?.message||result?.hint||`Error ${response.status} de Supabase`);
 return result;
}
async function loadRemoteData(){
 const catalogRows=await dbRequest('sneakers','GET',null,'select=*&order=id.asc');
 if(!Array.isArray(catalogRows)||!catalogRows.length)throw Error('La tabla sneakers está vacía. Ejecuta schema.sql en Supabase.');
 CATALOG=catalogRows.map(x=>({id:x.id,brand:x.marca,model:x.modelo,year:x.anio,colorway:x.colorway,category:x.categoria,rarity:x.rareza,limited:x.edicion_limitada,description:x.descripcion,imageUrl:x.imagen_url,sku:x.sku}));
 const userRows=await dbRequest('user_sneakers','GET',null,'select=*&order=created_at.asc');
 records=(userRows||[]).map(toRecord);serverSnapshot=structuredClone(records);
}
async function saveRemoteChanges(){
 if(busySaving)throw Error('Espera a que termine la operación anterior.');
 busySaving=true;
 try{
  const before=new Map(serverSnapshot.map(r=>[r.id,r]));
  const after=new Map(records.map(r=>[r.id,r]));
  for(const [id,r] of after){
   const previous=before.get(id);
   if(!previous){await dbRequest('user_sneakers','POST',fromRecord(r));}
   else if(JSON.stringify(previous)!==JSON.stringify(r))await dbRequest('user_sneakers','PATCH',fromRecord(r),'id=eq.'+encodeURIComponent(id));
  }
  for(const [id] of before)if(!after.has(id))await dbRequest('user_sneakers','DELETE',null,'id=eq.'+encodeURIComponent(id));
  const latest=await dbRequest('user_sneakers','GET',null,'select=*&order=created_at.asc');
  records=latest.map(toRecord);serverSnapshot=structuredClone(records);
  return true;
 }catch(error){
  records=structuredClone(serverSnapshot);
  notify('No se guardaron los cambios: '+error.message,'error');render();return false;
 }finally{busySaving=false}
}

let records=[];let filterState={q:'',brand:'',rarity:'',year:''};let listSearch={collection:'',wishlist:''};let toastTimer;
function loadRecords(){try{let a=JSON.parse(localStorage.getItem(storageKey())||'[]');return Array.isArray(a)?a.map(r=>({...r,shoeId:OLD_IDS[r.shoeId]||r.shoeId})).filter(r=>r&&catalogById(r.shoeId)&&['collection','wishlist'].includes(r.list)):[]}catch{return []}}
async function persist(){if(REMOTE_AUTH)return saveRemoteChanges();try{localStorage.setItem(storageKey(),JSON.stringify(records));return true}catch{notify('El navegador no permite guardar datos.','error');return false}}
const uid=()=>REMOTE_AUTH?crypto.randomUUID():`r-${Date.now()}-${Math.random().toString(36).slice(2,8)}`;
function notify(message,type='success'){const root=document.getElementById('toastRoot');root.innerHTML=`<div class="toast ${type==='error'?'error':''}" role="status">${escapeHtml(message)}</div>`;clearTimeout(toastTimer);toastTimer=setTimeout(()=>root.innerHTML='',3200)}
const navItems=[['dashboard','Dashboard'],['explore','Explorar'],['collection','Mi colección'],['wishlist','Wishlist']];
function nav(current){const active=current==='detail'||current==='form'?'explore':current;document.getElementById('bottomNav').innerHTML=navItems.map(([route,label])=>`<button data-route="${route}" class="${active===route?'active':''}" aria-label="${label}" ${active===route?'aria-current="page"':''}>${icon(route==='explore'?'search':route==='wishlist'?'heart':route)}</button>`).join('');document.getElementById('desktopNav').innerHTML=navItems.concat([['profile','Perfil']]).map(([route,label])=>`<button data-route="${route}" class="${active===route?'active':''}">${icon(route==='explore'?'search':route==='wishlist'?'heart':route)} ${label}</button>`).join('')}
function navigate(route){location.hash='#'+route;if(location.hash==='#'+route)render()}
function currentRoute(){return decodeURIComponent(location.hash.replace(/^#\/?/,'')||'dashboard')}
function header(title,subtitle=''){return `<h1 class="page-title">${escapeHtml(title)}</h1>${subtitle?`<p class="subtitle">${escapeHtml(subtitle)}</p>`:''}`}
function imagePlaceholder(shoe,large=false){const cls=large?'detail-image':'placeholder';const name=escapeHtml(shoe?.brand+' '+shoe?.model);const url=shoe?.imageUrl||'';return `<div class="${cls} sneaker-photo" role="img" aria-label="${name}">${url?`<img loading="lazy" referrerpolicy="no-referrer" src="${escapeHtml(url)}" alt="${name}" onerror="this.style.display='none';this.parentNode.classList.add('photo-unavailable')">`:''}<span class="photo-fallback">${icon('shoe')}<small>Imagen no disponible</small></span></div>`}
function sneakerCard(shoe){const owned=records.some(r=>r.shoeId===shoe.id&&r.list==='collection');const wish=records.some(r=>r.shoeId===shoe.id&&r.list==='wishlist');return `<article class="sneaker-card" data-shoe-card="${shoe.id}" role="button" tabindex="0" aria-label="Ver ${escapeHtml(shoe.model)}">${imagePlaceholder(shoe)}<div class="sneaker-meta"><span class="eyebrow">${escapeHtml(shoe.brand)} · ${shoe.year}</span><span class="pill-label">${escapeHtml(shoe.limited?'LIMITED':shoe.rarity.toUpperCase())}</span></div><h3>${escapeHtml(shoe.model)}</h3><p>${escapeHtml(shoe.colorway)}</p><div class="card-bottom"><span class="record-state">${owned?'EN MI COLECCIÓN':wish?'EN WISHLIST':'En catálogo'}</span><button class="icon-btn ${wish?'heart-on':''}" data-fav="${shoe.id}" title="${wish?'Quitar de wishlist':'Añadir a wishlist'}" aria-label="${wish?'Quitar de wishlist':'Añadir a wishlist'}">${icon('heart')}</button></div></article>`}
function recordCard(r){const s=catalogById(r.shoeId);if(!s)return '';return `<article class="record">${imagePlaceholder(s)}<div class="record-info"><div class="eyebrow">${escapeHtml(s.brand)} · ${s.year}</div><div class="record-name">${escapeHtml(s.model)}</div><p>${r.list==='collection'?`Talla EU ${escapeHtml(r.size||'—')} · ${escapeHtml(r.condition||'Sin indicar')}`:escapeHtml(s.colorway)}</p><span class="record-state">${r.list==='collection'?'EN MI COLECCIÓN':'EN WISHLIST'}</span></div><div class="record-actions"><button class="icon-btn" data-menu="${escapeHtml(r.id)}" aria-label="Opciones de ${escapeHtml(s.model)}">${icon('more')}</button></div></article>`}
function emptyState(kind){const isWish=kind==='wishlist';return `<div class="empty">${icon(isWish?'heart':'footprints')}<h2>${isWish?'Tu Wishlist está vacía':'Tu colección empieza aquí'}</h2><p>${isWish?'Guarda las zapatillas que te gustaría conseguir y tenlas siempre a mano.':'Añade tus primeras zapatillas y organiza tu colección en un solo lugar.'}</p><button class="button" data-route="explore">Explorar zapatillas</button></div>`}
function noResults(){return `<div class="empty">${icon('search')}<h2>No encontramos zapatillas</h2><p>Prueba con otro modelo o elimina los filtros seleccionados.</p><button class="button" data-clear-filters>Limpiar filtros</button></div>`}
function dashboard(){const owned=records.filter(r=>r.list==='collection'),wish=records.filter(r=>r.list==='wishlist');return header('Dashboard','Tu universo sneaker, en un solo lugar')+`<div class="stats"><button class="stat" data-route="collection"><div class="stat-head"><strong>${owned.length}</strong>${icon('collection')}</div><div class="stat-label">Colección</div></button><button class="stat" data-route="wishlist"><div class="stat-head"><strong>${wish.length}</strong>${icon('heart')}</div><div class="stat-label">Wishlist</div></button></div><h2 class="section-title">Tu colección reciente</h2>${owned.length?`<div class="stack">${owned.slice(-3).reverse().map(recordCard).join('')}</div>`:emptyState('collection')}<h2 class="section-title">Accesos rápidos</h2><div class="quick-actions"><button class="button" data-route="explore">${icon('search')}Explorar zapatillas</button><button class="button secondary" data-route="collection">${icon('collection')}Ver mi colección</button></div>`}
function filterCatalog(){let q=filterState.q.toLocaleLowerCase('es').trim();return CATALOG.filter(s=>(!q||[s.brand,s.model,s.colorway,s.sku,s.category,String(s.year)].join(' ').toLocaleLowerCase('es').includes(q))&&(!filterState.brand||s.brand===filterState.brand)&&(!filterState.rarity||s.rarity===filterState.rarity)&&(!filterState.year||String(s.year)===filterState.year))}
function makeOptions(values,selected,label){return `<option value="">${label}</option>${values.map(x=>`<option value="${escapeHtml(x)}" ${x===selected?'selected':''}>${escapeHtml(x)}</option>`).join('')}`}
function explore(){return header('Explorar','Descubre zapatillas únicas')+`<div class="toolbar"><label class="searchbox">${icon('search')}<input id="catalogSearch" type="search" placeholder="Buscar zapatillas, modelos..." value="${escapeHtml(filterState.q)}" aria-label="Buscar zapatillas" autocomplete="off"></label><div class="filters"><button class="filter ${!filterState.brand&&!filterState.rarity&&!filterState.year?'active':''}" data-clear-filters>Todas</button><select class="select-filter" id="brandFilter" aria-label="Filtrar por marca">${makeOptions([...new Set(CATALOG.map(s=>s.brand))].sort(),filterState.brand,'Marca')}</select><select class="select-filter" id="yearFilter" aria-label="Filtrar por año">${makeOptions([...new Set(CATALOG.map(s=>String(s.year)))].sort().reverse(),filterState.year,'Año')}</select><select class="select-filter" id="rarityFilter" aria-label="Filtrar por rareza">${makeOptions([...new Set(CATALOG.map(s=>s.rarity))],filterState.rarity,'Rareza')}</select></div><div class="results-row"><span id="resultCount"></span><button class="text-link" data-clear-filters>Limpiar filtros</button></div></div><div id="catalogResults"></div>`}
function updateCatalog(){const root=document.getElementById('catalogResults');if(!root)return;const data=filterCatalog();document.getElementById('resultCount').textContent=`${data.length} zapatilla${data.length===1?'':'s'} encontrada${data.length===1?'':'s'}`;root.innerHTML=data.length?`<div class="sneaker-grid">${data.map(sneakerCard).join('')}</div>`:noResults()}
function listPage(kind){const isWish=kind==='wishlist';return header(isWish?'Wishlist':'Mi colección',isWish?'Las zapatillas que sueñas tener':'Gestiona las zapatillas que ya tienes')+`<label class="searchbox">${icon('search')}<input data-list-search="${kind}" type="search" placeholder="Buscar en mi ${isWish?'Wishlist':'colección'}..." value="${escapeHtml(listSearch[kind])}" aria-label="Buscar en ${kind}" autocomplete="off"></label><div id="listResults" style="margin-top:18px"></div>`}
function updateList(kind){const root=document.getElementById('listResults');if(!root)return;const all=records.filter(r=>r.list===kind);const q=listSearch[kind].toLocaleLowerCase('es').trim();const shown=all.filter(r=>{const s=catalogById(r.shoeId);return s&&[s.brand,s.model,s.colorway].join(' ').toLocaleLowerCase('es').includes(q)});root.innerHTML=!all.length?emptyState(kind):!shown.length?`<div class="empty">${icon('search')}<h2>Sin resultados</h2><p>No hay zapatillas que coincidan con tu búsqueda.</p><button class="button" data-reset-list="${kind}">Limpiar búsqueda</button></div>`:`<div class="stack">${shown.map(recordCard).join('')}</div>`}
function detail(id){const s=catalogById(id);if(!s)return noResults();let owned=records.some(r=>r.shoeId===id&&r.list==='collection'),wish=records.some(r=>r.shoeId===id&&r.list==='wishlist');return `<div class="detail-header"><button class="icon-btn" data-route="explore" aria-label="Volver">${icon('back')}</button><strong>Detalle de zapatilla</strong><button class="icon-btn ${wish?'heart-on':''}" data-fav="${s.id}" aria-label="${wish?'Quitar de wishlist':'Añadir a wishlist'}">${icon('heart')}</button></div>${imagePlaceholder(s,true)}<div class="detail-content"><div class="sneaker-meta"><span class="eyebrow">${escapeHtml(s.brand)} · ${s.year}</span><span class="pill-label">${escapeHtml(s.limited?'LIMITED':s.rarity.toUpperCase())}</span></div><h1>${escapeHtml(s.model)}</h1><div class="muted">${escapeHtml(s.colorway)}</div><hr><strong>Sobre este modelo</strong><p class="description">${escapeHtml(s.description)}</p><p class="small muted">SKU: ${escapeHtml(s.sku)} · ${escapeHtml(s.category)}</p><div class="detail-buttons"><button class="button" data-add="${s.id}" data-list="collection">${icon('plus')}${owned?'Editar en mi colección':'Añadir a mi colección'}</button><button class="button secondary" data-fav="${s.id}">${icon('heart')}${wish?'Quitar de Wishlist':'Añadir a Wishlist'}</button></div></div>`}
function profile(){const u=getUsers()[activeEmail];return header('Mi perfil','Tu espacio personal en ZAPS')+`<div class="profile-card"><h2>${escapeHtml(u?.name||'Usuario')}</h2><p>${escapeHtml(activeEmail||'')}</p><p class="help-text">${REMOTE_AUTH?'Cuenta y colección sincronizadas con Supabase.':'Cuenta de demostración local: sin sincronización.'}</p></div><div class="profile-actions"><button class="button secondary" id="exportData">Descargar copia de mis datos (JSON)</button><button class="button danger" data-logout>Cerrar sesión</button></div>`}
function formPage(shoeId,recordId,forcedList){const editing=recordId?records.find(r=>r.id===recordId):null;const s=catalogById(editing?.shoeId||shoeId)||CATALOG[0];const list=forcedList||editing?.list||'collection';return `<div class="detail-header"><button class="icon-btn" data-route="${editing?.list||'explore'}" aria-label="Volver">${icon('back')}</button><strong>${editing?'Editar zapatilla':'Añadir zapatilla'}</strong><span style="width:44px"></span></div><form id="sneakerForm" class="form-panel" novalidate><h2>${editing?'Editar zapatilla':'Añadir zapatilla'}</h2><p class="subtitle">${editing?'Modifica los datos de tu zapatilla':'Completa los detalles de tu nueva zapatilla'}</p><div class="field" id="fieldShoe"><label for="shoeId">Modelo de zapatilla *</label><select id="shoeId" name="shoeId" required>${CATALOG.map(x=>`<option value="${x.id}" ${x.id===s.id?'selected':''}>${escapeHtml(x.brand+' · '+x.model)}</option>`).join('')}</select></div><div class="field"><label>Añadir a *</label><div class="segment"><label><input type="radio" name="list" value="collection" ${list==='collection'?'checked':''}>Mi colección</label><label><input type="radio" name="list" value="wishlist" ${list==='wishlist'?'checked':''}>Wishlist</label></div></div><div id="purchaseFields"><div class="form-grid"><div class="field" id="fieldSize"><label for="size">Talla EU *</label><input id="size" name="size" type="number" min="20" max="55" step="0.5" placeholder="Ej. 42" value="${escapeHtml(editing?.size||'')}"></div><div class="field" id="fieldCondition"><label for="condition">Estado *</label><select id="condition" name="condition"><option value="">Seleccionar</option><option value="Nueva" ${editing?.condition==='Nueva'?'selected':''}>Nueva</option><option value="Usada" ${editing?.condition==='Usada'?'selected':''}>Usada</option></select></div></div><div class="form-grid"><div class="field" id="fieldPrice"><label for="price">Precio pagado (€)</label><input id="price" name="price" type="number" min="0" step="0.01" placeholder="Ej. 250" value="${escapeHtml(editing?.price??'')}"></div><div class="field"><label for="date">Fecha de compra</label><input id="date" name="date" type="date" value="${escapeHtml(editing?.date||'')}"></div></div></div><div class="field"><label for="notes">Notas personales</label><textarea id="notes" name="notes" placeholder="Añade detalles de tu zapatilla...">${escapeHtml(editing?.notes||'')}</textarea></div><div class="form-actions"><button type="button" class="button secondary" data-route="${editing?.list||'explore'}">Cancelar</button><button class="button" type="submit">${editing?'Guardar cambios':'Guardar zapatilla'}</button></div></form>`}
function modal(html){document.getElementById('modalRoot').innerHTML=`<div class="modal-overlay" data-overlay><div class="modal" role="dialog" aria-modal="true" aria-label="Acciones de registro">${html}</div></div>`;document.querySelector('.modal button')?.focus()}
function closeModal(){document.getElementById('modalRoot').innerHTML=''}
function showMenu(recordId){const r=records.find(x=>x.id===recordId);if(!r)return;const s=catalogById(r.shoeId);modal(`<h2 style="color:var(--ink)">${escapeHtml(s.model)}</h2><p>¿Qué quieres hacer con este registro?</p><div class="stack"><button class="button secondary" data-detail="${s.id}">${icon('search')}Ver detalle</button><button class="button secondary" data-edit="${r.id}">${icon('edit')}Editar registro</button>${r.list==='wishlist'?`<button class="button secondary" data-move="${r.id}">${icon('collection')}Mover a mi colección</button>`:''}<button class="button danger" data-delete="${r.id}">${icon('trash')}Eliminar registro</button><button class="button ghost" data-close>Cancelar</button></div>`)}
function confirmDelete(id){const r=records.find(x=>x.id===id);if(!r)return;modal(`<h2>Eliminar registro</h2><p>¿Quieres eliminar esta zapatilla de tu ${r.list==='wishlist'?'Wishlist':'colección'}? El modelo seguirá disponible en el catálogo de ZAPS.</p><div class="button-row"><button class="button secondary" data-close>Cancelar</button><button class="button danger" data-confirm-delete="${id}">Eliminar</button></div>`)}
async function addWish(shoeId){const existing=records.find(r=>r.shoeId===shoeId&&r.list==='wishlist');if(existing){records=records.filter(r=>r.id!==existing.id);if(!await persist())return;notify('Zapatilla eliminada de Wishlist')}else{records.push({id:uid(),shoeId,list:'wishlist',size:'',condition:'',price:'',date:'',notes:'',createdAt:Date.now()});if(!await persist())return;notify('Zapatilla añadida a Wishlist')}render()}
async function saveForm(form){form.querySelectorAll('.field').forEach(el=>{el.classList.remove('invalid');el.querySelector('small')?.remove()});const data=new FormData(form);const list=data.get('list');const shoeId=data.get('shoeId');const size=data.get('size').trim(),condition=data.get('condition'),price=data.get('price').trim();let bad=false;function err(id,msg){const el=document.getElementById(id);if(el){el.classList.add('invalid');el.insertAdjacentHTML('beforeend',`<small role="alert">${escapeHtml(msg)}</small>`)}bad=true}if(!catalogById(shoeId))err('fieldShoe','Selecciona un modelo válido.');if(list==='collection'){if(!size||!Number.isFinite(Number(size))||Number(size)<20||Number(size)>55)err('fieldSize','Introduce una talla EU válida (20–55).');if(!condition)err('fieldCondition','Selecciona el estado.')}if(price&&(!Number.isFinite(Number(price))||Number(price)<0))err('fieldPrice','Introduce un precio válido.');if(bad){notify('Revisa los campos marcados en rojo.','error');return}const route=currentRoute().split('/'),editing=route[1]==='edit';const old=editing?records.find(r=>r.id===route[2]):null;const duplicate=records.find(r=>r.shoeId===shoeId&&r.list===list&&r.id!==old?.id);if(duplicate){notify('Este modelo ya está en esa lista. Puedes editar su registro.','error');return}const record={id:old?.id||uid(),shoeId,list,size:list==='collection'?size:'',condition:list==='collection'?condition:'',price:list==='collection'?price:'',date:list==='collection'?data.get('date'):'',notes:data.get('notes').trim(),createdAt:old?.createdAt||Date.now()};if(old)records=records.map(r=>r.id===old.id?record:r);else records.push(record);if(!await persist())return;notify(old?'Cambios guardados':'Zapatilla guardada');navigate(list)}
function render(){closeModal();let route=currentRoute().split('/'),page=route[0],html;nav(page);switch(page){case 'explore':html=explore();break;case 'collection':case 'wishlist':html=listPage(page);break;case 'detail':html=detail(route[1]);break;case 'form':html=formPage(route[2],route[1]==='edit'?route[2]:null,route[3]);break;case 'profile':html=profile();break;default:html=dashboard();page='dashboard'}document.getElementById('app').innerHTML=`<div class="page">${html}</div>`;if(page==='explore')updateCatalog();if(page==='collection'||page==='wishlist')updateList(page);if(page==='form')updatePurchaseFields();window.scrollTo(0,0)}
function updatePurchaseFields(){const el=document.getElementById('purchaseFields');if(el){const list=document.querySelector('input[name="list"]:checked')?.value;el.classList.toggle('hidden',list==='wishlist')}}
document.addEventListener('click',async ev=>{const btn=ev.target.closest('button,[data-shoe-card]');if(!btn){if(ev.target.matches('[data-overlay]'))closeModal();return}if(btn.dataset.authGo){if(btn.dataset.authGo==='recover'){recoveryStep='request';recoveryEmail=''}setAuthMode(btn.dataset.authGo);return}if(btn.hasAttribute('data-logout')){if(REMOTE_AUTH&&remoteAccessToken){try{await supabaseRequest('logout','POST',{},remoteAccessToken)}catch{}}localStorage.removeItem(SESSION_KEY);localStorage.removeItem(REMOTE_SESSION_KEY);remoteAccessToken='';showAuth();return}if(btn.dataset.route){navigate(btn.dataset.route);return}if(btn.dataset.shoeCard){navigate('detail/'+btn.dataset.shoeCard);return}if(btn.dataset.fav){ev.stopPropagation();await addWish(btn.dataset.fav);return}if(btn.dataset.add){const existing=records.find(r=>r.shoeId===btn.dataset.add&&r.list==='collection');navigate(existing?'form/edit/'+existing.id:'form/add/'+btn.dataset.add);return}if(btn.dataset.menu){showMenu(btn.dataset.menu);return}if(btn.dataset.detail){navigate('detail/'+btn.dataset.detail);return}if(btn.dataset.edit){navigate('form/edit/'+btn.dataset.edit);return}if(btn.dataset.delete){confirmDelete(btn.dataset.delete);return}if(btn.dataset.confirmDelete){records=records.filter(r=>r.id!==btn.dataset.confirmDelete);if(!await persist())return;notify('Registro eliminado');render();return}if(btn.dataset.move){const r=records.find(x=>x.id===btn.dataset.move);if(!r)return;const existing=records.find(x=>x.shoeId===r.shoeId&&x.list==='collection');if(existing){notify('La zapatilla ya está en tu colección.','error');return}notify('Completa los datos para añadirla a tu colección');navigate('form/edit/'+r.id+'/collection');return}if(btn.hasAttribute('data-close')){closeModal();return}if(btn.hasAttribute('data-clear-filters')){filterState={q:'',brand:'',rarity:'',year:''};render();return}if(btn.dataset.resetList){listSearch[btn.dataset.resetList]='';render();return}if(btn.id==='exportData'){const file=new Blob([JSON.stringify({exportedAt:new Date().toISOString(),records},null,2)],{type:'application/json'});const url=URL.createObjectURL(file);const a=document.createElement('a');a.href=url;a.download='zaps-mis-datos.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000)}});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal();if((e.key==='Enter'||e.key===' ')&&e.target.matches('[data-shoe-card]')){e.preventDefault();navigate('detail/'+e.target.dataset.shoeCard)}});
document.addEventListener('input',e=>{const t=e.target;if(t.id==='catalogSearch'){filterState.q=t.value;updateCatalog()}if(t.dataset.listSearch){listSearch[t.dataset.listSearch]=t.value;updateList(t.dataset.listSearch)}});
document.addEventListener('change',e=>{const t=e.target;if(t.id==='brandFilter'){filterState.brand=t.value;updateCatalog()}if(t.id==='rarityFilter'){filterState.rarity=t.value;updateCatalog()}if(t.id==='yearFilter'){filterState.year=t.value;updateCatalog()}if(t.name==='list')updatePurchaseFields()});
document.addEventListener('submit',e=>{if(e.target.id==='authForm'){e.preventDefault();handleAuth(e.target);return}if(e.target.id==='sneakerForm'){e.preventDefault();saveForm(e.target)}});
window.addEventListener('hashchange',()=>{if(activeEmail)render()});
(async()=>{
 // El enlace oficial de Supabase llega con tokens en el fragmento #.
 if(REMOTE_AUTH&&location.hash.includes('type=recovery')){
  const parts=new URLSearchParams(location.hash.slice(1));
  const token=parts.get('access_token');
  if(token){
   remoteAccessToken=token;
   recoveryStep='link';recoveryEmail='';
   history.replaceState(null,'',location.pathname+location.search);
   showAuth();setAuthMode('recover');
   document.getElementById('authEmail').value='recuperacion@zaps.app';
   document.querySelector('label[for="authEmail"]').hidden=true;
   document.getElementById('authEmail').hidden=true;
   return;
  }
 }
 const session=sessionEmail();
 if(REMOTE_AUTH){
  try{
   const saved=JSON.parse(localStorage.getItem(REMOTE_SESSION_KEY)||'null');
   if(saved?.email===session){
    let token=saved.access_token;
    if(saved.expires_at<=Date.now()/1000+30&&saved.refresh_token){
      const refreshed=await supabaseRequest('token?grant_type=refresh_token','POST',{refresh_token:saved.refresh_token});saveRemoteSession(refreshed);token=refreshed.access_token;
    }
    const user=await supabaseRequest('user','GET',null,token);
    if(user?.email){remoteAccessToken=token;remoteUserId=user.id;await showApp(user.email.toLowerCase());return}
   }
  }catch(e){console.warn('Sesión caducada:',e.message)}
  localStorage.removeItem(REMOTE_SESSION_KEY);localStorage.removeItem(SESSION_KEY);showAuth();
 }else if(session&&getUsers()[session]?.hash)showApp(session);else showAuth();
})();
