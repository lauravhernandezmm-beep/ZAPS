-- ZAPS: ejecutar UNA VEZ en Supabase > SQL Editor (puede ejecutarse de nuevo sin duplicados)
-- No guardar passwords en tablas públicas: las gestiona Supabase Auth.
create table if not exists public.sneakers (
 id text primary key,
 marca text not null,
 modelo text not null,
 anio integer,
 colorway text,
 categoria text,
 rareza text,
 edicion_limitada boolean not null default false,
 descripcion text,
 imagen_url text,
 sku text
);
create table if not exists public.user_sneakers (
 id uuid primary key,
 user_id uuid not null references auth.users(id) on delete cascade,
 shoe_id text not null references public.sneakers(id),
 list text not null check(list in ('collection','wishlist')),
 size text,
 condition text,
 price numeric check (price is null or price >= 0),
 purchase_date date,
 notes text not null default '',
 created_at timestamptz not null default now(),
 unique (user_id, shoe_id, list)
);
create index if not exists user_sneakers_user_id_idx on public.user_sneakers(user_id);
alter table public.sneakers enable row level security;
alter table public.user_sneakers enable row level security;
-- Permisos mínimos para clientes web. La clave secreta NUNCA va en JS.
revoke all on public.sneakers from anon, authenticated;
revoke all on public.user_sneakers from anon, authenticated;
grant select on public.sneakers to authenticated;
grant select, insert, update, delete on public.user_sneakers to authenticated;

drop policy if exists "zaps_catalog_read" on public.sneakers;
create policy "zaps_catalog_read" on public.sneakers for select to authenticated using (true);
drop policy if exists "zaps_user_read" on public.user_sneakers;
create policy "zaps_user_read" on public.user_sneakers for select to authenticated using ((select auth.uid()) = user_id);
drop policy if exists "zaps_user_insert" on public.user_sneakers;
create policy "zaps_user_insert" on public.user_sneakers for insert to authenticated with check ((select auth.uid()) = user_id);
drop policy if exists "zaps_user_update" on public.user_sneakers;
create policy "zaps_user_update" on public.user_sneakers for update to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
drop policy if exists "zaps_user_delete" on public.user_sneakers;
create policy "zaps_user_delete" on public.user_sneakers for delete to authenticated using ((select auth.uid()) = user_id);

-- Catálogo precargado con los 20 modelos de Lau.
insert into public.sneakers (id,marca,modelo,anio,colorway,categoria,rareza,edicion_limitada,descripcion,imagen_url,sku) values
 ('ZAPS001','Nike SB','Dunk Low Paris',2003,'Rope / Special Cardinal','Skateboarding','Muy alta',true,'Dunk SB vinculada al artista Bernard Buffet; edición conocida por sus paneles artísticos multicolor.','https://dorawastore.pl/userdata/public/gfx/8029/Nike-Dunk-Low-SB-Paris.jpg','308270-111'),
 ('ZAPS002','Nike SB','Dunk Low What The Dunk',2007,'White / College Blue / Chrome / Deep Red','Skateboarding','Muy alta',true,'Modelo que combina elementos de numerosas Nike SB Dunk anteriores en un diseño asimétrico.','https://dropinblog.net/34240971/files/featured/Nike-SB-Dunk-Low-What-The-Dunk-318403-141-2007-Release-Date-3.png','318403-141'),
 ('ZAPS003','Nike SB','Dunk Low Staple NYC Pigeon',2005,'Medium Grey / White / Dark Grey','Skateboarding','Muy alta',true,'Colaboración con Jeff Staple reconocida por su bordado de paloma y vínculo con Nueva York.','https://triosquad.com/cdn/shop/files/NikeSBDunkLowStapleNYCPigeon.png?v=1782213802&width=1254','304292-011'),
 ('ZAPS004','Nike','Air Yeezy 2 Red October',2014,'Red / Red','Lifestyle','Muy alta',true,'Modelo de la colaboración Nike y Kanye West, conocido por su acabado completamente rojo.','https://i.ebayimg.com/images/g/qdsAAOSwRuBl8l7k/s-l1200.jpg','508214-660'),
 ('ZAPS005','Nike','Air Max 1/97 Sean Wotherspoon',2018,'Multicolor / Light Blue Fury','Lifestyle','Alta',true,'Colaboración de Sean Wotherspoon que mezcla rasgos de Air Max 1 y Air Max 97 con pana multicolor.','https://images.soleretriever.com/sb/products/nike_air_max_1_97_sean_wotherspoon_AJ4219-400-1753201846690.webp?fit=contain&quality=90&width=1600','AJ4219-400'),
 ('ZAPS006','Air Jordan','Air Jordan 1 Retro High OG Chicago',2015,'White / Varsity Red / Black','Basketball / Lifestyle','Alta',false,'Versión retro del colorway Chicago clásico de Air Jordan 1. Se usa aquí la edición de 2015.','https://dropoutmilano.com/cdn/shop/files/jordan-1-retro-chicago-2015-dropout-1.jpg?v=1751222292','555088-101'),
 ('ZAPS007','Air Jordan','Air Jordan 1 High OG Travis Scott Mocha',2019,'Sail / Dark Mocha / University Red / Black','Lifestyle','Muy alta',true,'Colaboración con Travis Scott identificable por el Swoosh invertido y tonos marrones.','https://dawntown.co.in/cdn/shop/files/travismocha.jpg?v=1770394851&width=1499','CD4487-100'),
 ('ZAPS008','Air Jordan','Air Jordan 4 Retro Off-White Sail',2020,'Sail / Muslin / White / Black','Lifestyle','Muy alta',true,'Colaboración Off-White de Virgil Abloh sobre la silueta Jordan 4, con acabados en tonos crema.','https://i.ebayimg.com/images/g/9r0AAeSwWg9o0HHI/s-l1200.jpg','CV9388-100'),
 ('ZAPS009','Adidas','Yeezy Boost 350 V2 Zebra',2017,'White / Core Black / Red','Lifestyle','Alta',false,'Yeezy Boost 350 V2 con tejido Primeknit a rayas blancas y negras y detalle rojo.','https://vipsneakers.ae/cdn/shop/products/adidas-yeezy-boost-350-v2-zebra-1.webp?v=1676794096','CP9654'),
 ('ZAPS010','Adidas','Samba OG Wales Bonner',2020,'Edición por concretar','Lifestyle','Alta',true,'Colaboración Wales Bonner x Adidas Samba; es necesario elegir el colorway exacto antes de fijar el año y SKU.','https://images.stockx.com/images/adidas-Samba-Wales-Bonner-Silver-Product.jpg?auto=compress&bg=FFFFFF&dpr=2&fit=fill&fm=webp&h=500&q=90&trim=color&updated_at=1738193358&w=700','IG8181'),
 ('ZAPS011','Adidas','Bad Bunny Forum Buckle Low The First Café',2021,'Brown / Beige','Lifestyle','Alta',true,'Colaboración de Bad Bunny sobre Forum Low con una construcción de correas y tonos café.','https://images.squarespace-cdn.com/content/v1/5e448f9107f0455f95d191fe/1615985252306-6MSGXLTQBNMCJKLUUL9Q/Bad-Bunny-adidas-Forum-Buckle-Lo-GW0264-9.jpg','GW0264'),
 ('ZAPS012','New Balance','2002R Protection Pack Rain Cloud',2021,'Rain Cloud / Grey','Running / Lifestyle','Media',false,'Versión Protection Pack de la 2002R, con paneles de ante de cortes irregulares.','https://cdn.sanity.io/images/c1chvb1i/production/1296b0259d0e14fa8a93181726b2b4469439d7ee-3098x2072.jpg/new-balance-2002-protection-pack-shot.jpg?w=2880','M2002RDA'),
 ('ZAPS013','New Balance','990v3 JJJJound',2022,'Edición por concretar','Running / Lifestyle','Alta',true,'Colaboración JJJJound sobre 990v3; debe elegirse una combinación de colores concreta.','https://statics.whentocop.fr/drops/1286/picture_360/909D81_JJJJound-x-New-Balance-990V3_OLIVE_M990JD3_img0-2000x2000.webp','M990JJ3'),
 ('ZAPS014','New Balance','9060',2022,'Edición por concretar','Lifestyle','Media',false,'Silueta New Balance 9060 con volumen marcado e inspiración en diseños de running clásicos.','https://static.luck-d.com/product/3775/main_carousel/NEW_BALANCE_9060_SEA_SALT_WHITE_U9060ECA_38767.jpg','U9060ECA'),
 ('ZAPS015','ASICS','GEL-KAYANO 14',2008,'Edición por concretar','Running / Lifestyle','Media',false,'Modelo técnico de running de estética retro que combina materiales de malla con refuerzos sintéticos.','https://imagedelivery.net/2DfovxNet9Syc-4xYpcsGg/a43017c1-1218-4e44-b1fc-a446f10a7300/public','1201A019-102'),
 ('ZAPS016','ASICS','GEL-NYC',2022,'Edición por concretar','Running / Lifestyle','Media',false,'Silueta que mezcla referencias del catálogo de running de ASICS con una construcción contemporánea.','https://item-shopping.c.yimg.jp/i/n/snkrs-aclo_as-1201a789103_4_d_20240130141606','1201A789-103'),
 ('ZAPS017','ASICS','GEL-LYTE III Ronnie Fieg Salmon Toe',2011,'Navy / White / Salmon','Lifestyle','Muy alta',true,'Colaboración de Ronnie Fieg para Kith, con puntera salmón y una base azul marino.','https://images.stockx.com/images/Asics-Gel-Lyte-III-Ronnie-Fieg-Salmon-Toes-2011.jpg?auto=compress&bg=FFFFFF&dpr=2&fit=fill&fm=webp&h=500&q=90&trim=color&updated_at=1606318883&w=700','H02AK-5001'),
 ('ZAPS018','Salomon','XT-6',2013,'Edición por concretar','Trail / Lifestyle','Media',false,'Zapatilla de origen trail que se ha popularizado también en el ámbito urbano y de moda.','https://sidekicks.co.uk/cdn/shop/files/1369377_00_png.png?v=1739309783','L47445300'),
 ('ZAPS019','Maison Margiela','Replica',2012,'Edición por concretar','Fashion / Lifestyle','Media',false,'Zapatilla de inspiración retro de la línea Replica de Maison Margiela; falta elegir la versión exacta.','https://unlawfulpersona.com/cdn/shop/files/3A2776AB-31CE-4C87-9C0F-4DB5017CF64B.jpg?v=1760753752&width=1445','S57WS0236P1895101'),
 ('ZAPS020','Balenciaga','3XL',2023,'Edición por concretar','Fashion / Lifestyle','Media',false,'Silueta de moda de gran volumen, con suela exagerada y estética de running reinterpretada.','https://five-steps.ru/image/cache/catalog/Balenciaga/balenciaga-stapler-sneaker/balenciaga-3xl-sneaker-worn-out-new-grey/Balenciaga%203XL%20Sneaker%20%27Worn-Out%20-%20Grey%27-10-860x860.jpg','759693-W3XLI-1819')
on conflict (id) do update set
 marca=excluded.marca, modelo=excluded.modelo, anio=excluded.anio, colorway=excluded.colorway, categoria=excluded.categoria, rareza=excluded.rareza, edicion_limitada=excluded.edicion_limitada, descripcion=excluded.descripcion, imagen_url=excluded.imagen_url, sku=excluded.sku;
