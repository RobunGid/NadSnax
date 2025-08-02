BEGIN;

--- Lays Classic ---

INSERT INTO item (id, is_bestseller, name, category_id, type_id, is_secretbox)
VALUES ('e1b0e8a1-2f9e-4a1d-9c8b-1a2b3c4d5e6f', true, 'lays-classic', 'bbaf2417-4c2c-4bf1-854b-2ba4d020c018', '4036002d-d64f-46ec-b688-aaddb05273ec', false);

INSERT INTO item_details (item_id)
VALUES ('e1b0e8a1-2f9e-4a1d-9c8b-1a2b3c4d5e6f');

INSERT INTO item_translation (id, item_id, label, description, lang_key, price, old_price)
VALUES 
('a1b2c3d4-e5f6-7890-a1b2-c3d4e5f67890', 'e1b0e8a1-2f9e-4a1d-9c8b-1a2b3c4d5e6f', 'Lays Classic Potato Chips', 'Classic potato chips with just the right amount of salt', 'en', 2.99, 3.49),
('b2c3d4e5-f6a7-8901-b2c3-d4e5f6a78901', 'e1b0e8a1-2f9e-4a1d-9c8b-1a2b3c4d5e6f', 'Лейс Классические Чипсы', 'Классические картофельные чипсы с идеальным количеством соли', 'ru', 239.99, 299.49);

INSERT INTO item_details_translation (id, item_id, full_description, full_label, supplier, ingridients, nutrition, lang_key, supplier_link)
VALUES 
('c3d4e5f6-a7b8-9012-c3d4-e5f6a7b89012', 'e1b0e8a1-2f9e-4a1d-9c8b-1a2b3c4d5e6f', 
'Lays Classic potato chips are made from fresh potatoes and cooked to perfection with just the right amount of salt for that classic taste you love.', 
'Lays Classic Potato Chips 200g', 'PepsiCo', 
'Potatoes, Vegetable Oil (Sunflower, Corn, and/or Canola Oil), Salt', 
'Per 28g: Calories 160, Fat 10g (15% DV), Sodium 170mg (7% DV), Carbs 15g (5% DV), Protein 2g', 
'en', 'https://www.pepsico.com'),
('d4e5f6b4-b8c9-0123-d4e5-f6a7b8c90123', 'e1b0e8a1-2f9e-4a1d-9c8b-1a2b3c4d5e6f', 
'Чипсы Лейс Классические приготовлены из свежего картофеля с идеальным количеством соли для любимого классического вкуса.', 
'Лейс Классические Чипсы 200г', 'PepsiCo', 
'Картофель, растительное масло (подсолнечное, кукурузное и/или рапсовое), соль', 
'На 28г: Калории 160, Жиры 10г (15% ДН), Натрий 170мг (7% ДН), Углеводы 15г (5% ДН), Белки 2г', 
'ru', 'https://www.pepsico.com');

INSERT INTO item_image (id, is_main, name, item_id)
VALUES 
('e5f6a7b8-c9d0-1234-e5f6-a7b8c9d01234', true, 'lays_classic_front', 'e1b0e8a1-2f9e-4a1d-9c8b-1a2b3c4d5e6f');

INSERT INTO item_image_translation (id, item_image_id, title, lang_key)
VALUES 
('f6a7b8c9-d0e1-2345-f6a7-b8c9d0e12345', 'e5f6a7b8-c9d0-1234-e5f6-a7b8c9d01234', 'Lays Classic Potato Chips package', 'en'),
('a7b8c9d0-e1f2-3456-a7b8-c9d0e1f23456', 'e5f6a7b8-c9d0-1234-e5f6-a7b8c9d01234', 'Упаковка чипсов Лейс Классические', 'ru');

--- Lays Classic Party Size ---

INSERT INTO item (id, is_bestseller, name, category_id, type_id, is_secretbox)
VALUES ('f2e3d4c5-b6a7-89f0-e1d2-c3b4a5d6e7f8', true, 'lays-classic-party', 'bbaf2417-4c2c-4bf1-854b-2ba4d020c018', '4036002d-d64f-46ec-b688-aaddb05273ec', false);

INSERT INTO item_details (item_id)
VALUES ('f2e3d4c5-b6a7-89f0-e1d2-c3b4a5d6e7f8');

INSERT INTO item_translation (id, item_id, label, description, lang_key, price, old_price)
VALUES 
('b3c4d5e6-f7a8-9012-b3c4-d5e6f7a89012', 'f2e3d4c5-b6a7-89f0-e1d2-c3b4a5d6e7f8', 'Lays Classic Party Size', 'Perfect for sharing - classic potato chips in a big bag', 'en', 4.99, 5.49),
('c4d5e6f7-a8b9-0123-c4d5-e6f7a8b90123', 'f2e3d4c5-b6a7-89f0-e1d2-c3b4a5d6e7f8', 'Лейс Классические Party Size', 'Идеально для компании - классические чипсы в большой упаковке', 'ru', 429.49, 529.49);

INSERT INTO item_details_translation (id, item_id, full_description, full_label, supplier, ingridients, nutrition, lang_key, supplier_link)
VALUES 
('d5e6f7a8-b9c0-1234-d5e6-f7a8b9c01234', 'f2e3d4c5-b6a7-89f0-e1d2-c3b4a5d6e7f8', 
'Lays Classic Party Size chips are perfect for gatherings and parties. The same great classic taste in a larger bag for sharing.', 
'Lays Classic Potato Chips Party Size 400g', 'PepsiCo', 
'Potatoes, Vegetable Oil (Sunflower, Corn, and/or Canola Oil), Salt', 
'Per 28g: Calories 160, Fat 10g (15% DV), Sodium 170mg (7% DV), Carbs 15g (5% DV), Protein 2g', 
'en', 'https://www.pepsico.com'),
('e6f7a8b9-c0d1-2345-e6f7-a8b9c0d12345', 'f2e3d4c5-b6a7-89f0-e1d2-c3b4a5d6e7f8', 
'Чипсы Лейс Классические Party Size идеально подходят для вечеринок и компаний. Тот же классический вкус в большой упаковке.', 
'Лейс Классические Чипсы Party Size 400г', 'PepsiCo', 
'Картофель, растительное масло (подсолнечное, кукурузное и/или рапсовое), соль', 
'На 28г: Калории 160, Жиры 10г (15% ДН), Натрий 170мг (7% ДН), Углеводы 15г (5% ДН), Белки 2г', 
'ru', 'https://www.pepsico.com');

INSERT INTO item_image (id, is_main, name, item_id)
VALUES 
('f7a8b9c0-d1e2-3456-f7a8-b9c0d1e23456', true, 'lays_party_front', 'f2e3d4c5-b6a7-89f0-e1d2-c3b4a5d6e7f8');

INSERT INTO item_image_translation (id, item_image_id, title, lang_key)
VALUES 
('a8b9c0d1-e2f3-4567-a8b9-c0d1e2f34567', 'f7a8b9c0-d1e2-3456-f7a8-b9c0d1e23456', 'Lays Classic Party Size package', 'en'),
('b9c0d1e2-f3a4-5678-b9c0-d1e2f3a45678', 'f7a8b9c0-d1e2-3456-f7a8-b9c0d1e23456', 'Упаковка Лейс Классические Party Size', 'ru');

--- Lays Salt & Vinegar ---

INSERT INTO item (id, is_bestseller, name, category_id, type_id, is_secretbox)
VALUES ('a3b4c5d6-e7f8-90a1-b2c3-d4e5f6a7b8c9', true, 'lays-salt-vinegar', 'bbaf2417-4c2c-4bf1-854b-2ba4d020c018', '4036002d-d64f-46ec-b688-aaddb05273ec', false);

INSERT INTO item_details (item_id)
VALUES ('a3b4c5d6-e7f8-90a1-b2c3-d4e5f6a7b8c9');

INSERT INTO item_translation (id, item_id, label, description, lang_key, price, old_price)
VALUES 
('c5d6e7f8-a9b0-1234-c5d6-e7f8a9b01234', 'a3b4c5d6-e7f8-90a1-b2c3-d4e5f6a7b8c9', 'Lays Salt & Vinegar', 'Tangy vinegar flavor with a salty kick', 'en', 2.99, 3.29),
('d6e7f8a9-b0c1-2345-d6e7-f8a9b0c12345', 'a3b4c5d6-e7f8-90a1-b2c3-d4e5f6a7b8c9', 'Лейс с солью и уксусом', 'Пикантный вкус уксуса с солоноватым оттенком', 'ru', 420, 610);

INSERT INTO item_details_translation (id, item_id, full_description, full_label, supplier, ingridients, nutrition, lang_key, supplier_link)
VALUES 
('e7f8a9b0-c1d2-3456-e7f8-a9b0c1d23456', 'a3b4c5d6-e7f8-90a1-b2c3-d4e5f6a7b8c9', 
'Lays Salt & Vinegar chips combine the perfect balance of tangy vinegar and salt for a bold flavor experience.', 
'Lays Salt & Vinegar Potato Chips 200g', 'PepsiCo', 
'Potatoes, Vegetable Oil, Salt & Vinegar Seasoning (Maltodextrin, Sodium Diacetate, Salt, Malt Vinegar, Citric Acid, Sugar, Yeast Extract)', 
'Per 28g: Calories 160, Fat 10g (15% DV), Sodium 210mg (9% DV), Carbs 15g (5% DV), Protein 2g', 
'en', 'https://www.pepsico.com'),
('f8a9b0c1-d2e3-4567-f8a9-b0c1d2e34567', 'a3b4c5d6-e7f8-90a1-b2c3-d4e5f6a7b8c9', 
'Чипсы Лейс с солью и уксусом сочетают идеальный баланс пикантного уксуса и соли для яркого вкусового опыта.', 
'Лейс Чипсы с солью и уксусом 200г', 'PepsiCo', 
'Картофель, растительное масло, приправа соль и уксус (мальтодекстрин, диацетат натрия, соль, солодовый уксус, лимонная кислота, сахар, экстракт дрожжей)', 
'На 28г: Калории 160, Жиры 10г (15% ДН), Натрий 210мг (9% ДН), Углеводы 15г (5% ДН), Белки 2г', 
'ru', 'https://www.pepsico.com');

INSERT INTO item_image (id, is_main, name, item_id)
VALUES 
('a9b0c1d2-e3f4-5678-a9b0-c1d2e3f45678', true, 'lays_salt_vinegar_front', 'a3b4c5d6-e7f8-90a1-b2c3-d4e5f6a7b8c9');

INSERT INTO item_image_translation (id, item_image_id, title, lang_key)
VALUES 
('b0c1d2e3-f4a5-6789-b0c1-d2e3f4a56789', 'a9b0c1d2-e3f4-5678-a9b0-c1d2e3f45678', 'Lays Salt & Vinegar package', 'en'),
('c1d2e3f4-a5b6-7890-c1d2-e3f4a5b67890', 'a9b0c1d2-e3f4-5678-a9b0-c1d2e3f45678', 'Упаковка Лейс с солью и уксусом', 'ru');

--- Lays Sour Cream & Onion ---

INSERT INTO item (id, is_bestseller, name, category_id, type_id, is_secretbox)
VALUES ('b4c5d6e7-f8a9-01b2-c3d4-e5f6a7b8c9d0', true, 'lays-sour-cream-onion', 'bbaf2417-4c2c-4bf1-854b-2ba4d020c018', '4036002d-d64f-46ec-b688-aaddb05273ec', false);

INSERT INTO item_details (item_id)
VALUES ('b4c5d6e7-f8a9-01b2-c3d4-e5f6a7b8c9d0');

INSERT INTO item_translation (id, item_id, label, description, lang_key, price, old_price)
VALUES 
('d7e8f9a0-b1c2-3456-d7e8-f9a0b1c23456', 'b4c5d6e7-f8a9-01b2-c3d4-e5f6a7b8c9d0', 'Lays Sour Cream & Onion', 'Creamy sour cream flavor with onion taste', 'en', 2.99, 3.29),
('e8f9a0b1-c2d3-4567-e8f9-a0b1c2d34567', 'b4c5d6e7-f8a9-01b2-c3d4-e5f6a7b8c9d0', 'Лейс со сметаной и луком', 'Нежный вкус сметаны с луковыми нотками', 'ru', 230.49, 290.99);

INSERT INTO item_details_translation (id, item_id, full_description, full_label, supplier, ingridients, nutrition, lang_key, supplier_link)
VALUES 
('f9a0b1c2-d3e4-5678-f9a0-b1c2d3e45678', 'b4c5d6e7-f8a9-01b2-c3d4-e5f6a7b8c9d0', 
'Lays Sour Cream & Onion chips combine the cool taste of sour cream with the savory flavor of onions for a delicious snack.', 
'Lays Sour Cream & Onion Potato Chips 200g', 'PepsiCo', 
'Potatoes, Vegetable Oil, Sour Cream & Onion Seasoning (Whey, Onion Powder, Salt, Sour Cream, Sugar, Garlic Powder)', 
'Per 28g: Calories 160, Fat 10g (15% DV), Sodium 180mg (8% DV), Carbs 15g (5% DV), Protein 2g', 
'en', 'https://www.pepsico.com'),
('a0b1c2d3-e4f5-6789-a0b1-c2d3e4f56789', 'b4c5d6e7-f8a9-01b2-c3d4-e5f6a7b8c9d0', 
'Чипсы Лейс со сметаной и луком сочетают нежный вкус сметаны с пикантным луковым ароматом.', 
'Лейс Чипсы со сметаной и луком 200г', 'PepsiCo', 
'Картофель, растительное масло, приправа сметана и лук (сыворотка, луковый порошок, соль, сметана, сахар, чесночный порошок)', 
'На 28г: Калории 160, Жиры 10г (15% ДН), Натрий 180мг (8% ДН), Углеводы 15г (5% ДН), Белки 2г', 
'ru', 'https://www.pepsico.com');

INSERT INTO item_image (id, is_main, name, item_id)
VALUES 
('b1c2d3e4-f5a6-7890-b1c2-d3e4f5a67890', true, 'lays_sour_cream_front', 'b4c5d6e7-f8a9-01b2-c3d4-e5f6a7b8c9d0');

INSERT INTO item_image_translation (id, item_image_id, title, lang_key)
VALUES 
('c2d3e4f5-a6b7-8901-c2d3-e4f5a6b78901', 'b1c2d3e4-f5a6-7890-b1c2-d3e4f5a67890', 'Lays Sour Cream & Onion package', 'en'),
('d3e4f5a6-b7c8-9012-d3e4-f5a6b7c89012', 'b1c2d3e4-f5a6-7890-b1c2-d3e4f5a67890', 'Упаковка Лейс со сметаной и луком', 'ru');

--- Miss Vickies Spice Fill Pickle ---

INSERT INTO item (id, is_bestseller, name, category_id, type_id, is_secretbox)
VALUES ('c5d6e7f8-a9b0-12c3-d4e5-f6a7b8c9d0e1', false, 'miss-vickies-spicy-dill', 'bbaf2417-4c2c-4bf1-854b-2ba4d020c018', '4036002d-d64f-46ec-b688-aaddb05273ec', false);

INSERT INTO item_details (item_id)
VALUES ('c5d6e7f8-a9b0-12c3-d4e5-f6a7b8c9d0e1');

INSERT INTO item_translation (id, item_id, label, description, lang_key, price)
VALUES 
('e9f0a1b2-c3d4-5678-e9f0-a1b2c3d45678', 'c5d6e7f8-a9b0-12c3-d4e5-f6a7b8c9d0e1', 'Miss Vickies Spicy Dill Pickle', 'Bold dill pickle flavor with a spicy kick', 'en', 3.49),
('f0a1b2c3-d4e5-6789-f0a1-b2c3d4e56789', 'c5d6e7f8-a9b0-12c3-d4e5-f6a7b8c9d0e1', 'Мисс Викис Острый соленый огурец', 'Яркий вкус соленого огурца с остринкой', 'ru', 269.99);

INSERT INTO item_details_translation (id, item_id, full_description, full_label, supplier, ingridients, nutrition, lang_key, supplier_link)
VALUES 
('a1b2c3d4-e5f6-7890-a1b2-c3d4e5f67890', 'c5d6e7f8-a9b0-12c3-d4e5-f6a7b8c9d0e1', 
'Miss Vickies Spicy Dill Pickle chips are kettle cooked for extra crunch with a bold dill pickle flavor and spicy finish.', 
'Miss Vickies Spicy Dill Pickle Kettle Cooked Chips 220g', 'PepsiCo', 
'Potatoes, Vegetable Oil, Spicy Dill Pickle Seasoning (Salt, Sugar, Maltodextrin, Spices, Garlic Powder, Natural Flavors)', 
'Per 50g: Calories 260, Fat 14g (22% DV), Sodium 380mg (16% DV), Carbs 30g (10% DV), Protein 3g', 
'en', 'https://www.pepsico.com'),
('b2c3d4e5-f6a7-8901-b2c3-d4e5f6a78901', 'c5d6e7f8-a9b0-12c3-d4e5-f6a7b8c9d0e1', 
'Чипсы Мисс Викис Острый соленый огурец готовятся в котле для дополнительной хрусткости с ярким вкусом соленого огурца и острой ноткой.', 
'Мисс Викис Чипсы Острый соленый огурец 220г', 'PepsiCo', 
'Картофель, растительное масло, приправа острый соленый огурец (соль, сахар, мальтодекстрин, специи, чесночный порошок, натуральные ароматизаторы)', 
'На 50г: Калории 260, Жиры 14г (22% ДН), Натрий 380мг (16% ДН), Углеводы 30г (10% ДН), Белки 3г', 
'ru', 'https://www.pepsico.com');

INSERT INTO item_image (id, is_main, name, item_id)
VALUES 
('c3d4e5f6-a7b8-9012-c3d4-e5f6a7b89012', true, 'miss_vickies_front', 'c5d6e7f8-a9b0-12c3-d4e5-f6a7b8c9d0e1');

INSERT INTO item_image_translation (id, item_image_id, title, lang_key)
VALUES 
('d4e5f6a7-b8c9-0123-d4e5-f6a7b8c90123', 'c3d4e5f6-a7b8-9012-c3d4-e5f6a7b89012', 'Miss Vickies Spicy Dill Pickle package', 'en'),
('e5f6a7b8-c9d0-1234-e5f6-a7b8c9d01234', 'c3d4e5f6-a7b8-9012-c3d4-e5f6a7b89012', 'Упаковка Мисс Викис Острый соленый огурец', 'ru');

--- Pringles Original ---

INSERT INTO item (id, is_bestseller, name, category_id, type_id, is_secretbox)
VALUES ('d6e7f8a9-b0c1-23d4-e5f6-a7b8c9d0e1f2', true, 'pringles-original', 'bbaf2417-4c2c-4bf1-854b-2ba4d020c018', '4036002d-d64f-46ec-b688-aaddb05273ec', false);

INSERT INTO item_details (item_id)
VALUES ('d6e7f8a9-b0c1-23d4-e5f6-a7b8c9d0e1f2');

INSERT INTO item_translation (id, item_id, label, description, lang_key, price, old_price)
VALUES 
('f7a8b9c0-d1e2-3456-f7a8-b9c0d1e23456', 'd6e7f8a9-b0c1-23d4-e5f6-a7b8c9d0e1f2', 'Pringles Original', 'Classic potato crisps with perfect crunch', 'en', 3.29, 3.79),
('a8b9c0d1-e2f3-4567-a8b9-c0d1e2f34567', 'd6e7f8a9-b0c1-23d4-e5f6-a7b8c9d0e1f2', 'Принглс Оригинальные', 'Классические картофельные хрустящие чипсы', 'ru', 190, 350);

INSERT INTO item_details_translation (id, item_id, full_description, full_label, supplier, ingridients, nutrition, lang_key, supplier_link)
VALUES 
('b9c0d1e2-f3a4-5678-b9c0-d1e2f3a45678', 'd6e7f8a9-b0c1-23d4-e5f6-a7b8c9d0e1f2', 
'Pringles Original have that perfect combination of potato taste, crispiness, and saltiness in their unique saddle shape.', 
'Pringles Original Potato Crisps 190g', 'Kelloggs', 
'Dried Potatoes, Vegetable Oils, Rice Flour, Wheat Starch, Maltodextrin, Salt, Dextrose', 
'Per 30g: Calories 160, Fat 9g (14% DV), Sodium 150mg (6% DV), Carbs 16g (5% DV), Protein 1g', 
'en', 'https://www.kelloggs.com'),
('c0d1e2f3-a4b5-6789-c0d1-e2f3a4b56789', 'd6e7f8a9-b0c1-23d4-e5f6-a7b8c9d0e1f2', 
'Принглс Оригинальные обладают идеальным сочетанием картофельного вкуса, хрусткости и солоноватости в своей уникальной форме.', 
'Принглс Оригинальные 190г', 'Kelloggs', 
'Сушеный картофель, растительные масла, рисовая мука, пшеничный крахмал, мальтодекстрин, соль, декстроза', 
'На 30г: Калории 160, Жиры 9г (14% ДН), Натрий 150мг (6% ДН), Углеводы 16г (5% ДН), Белки 1г', 
'ru', 'https://www.kelloggs.com');

INSERT INTO item_image (id, is_main, name, item_id)
VALUES 
('d1e2f3a4-b5c6-7890-d1e2-f3a4b5c67890', true, 'pringles_original_front', 'd6e7f8a9-b0c1-23d4-e5f6-a7b8c9d0e1f2');

INSERT INTO item_image_translation (id, item_image_id, title, lang_key)
VALUES 
('e2f3a4b5-c6d7-8901-e2f3-a4b5c6d78901', 'd1e2f3a4-b5c6-7890-d1e2-f3a4b5c67890', 'Pringles Original can', 'en'),
('f3a4b5c6-d7e8-9012-f3a4-b5c6d7e89012', 'd1e2f3a4-b5c6-7890-d1e2-f3a4b5c67890', 'Банка Принглс Оригинальные', 'ru');

--- Doritos Nacho Cheese-

INSERT INTO item (id, is_bestseller, name, category_id, type_id, is_secretbox)
VALUES ('e7f8a9b0-c1d2-34e5-f6a7-b8c9d0e1f2g3', true, 'doritos-nacho-cheese', 'bbaf2417-4c2c-4bf1-854b-2ba4d020c018', '4036002d-d64f-46ec-b688-aaddb05273ec', false);

INSERT INTO item_details (item_id)
VALUES ('e7f8a9b0-c1d2-34e5-f6a7-b8c9d0e1f2g3');

INSERT INTO item_translation (id, item_id, label, description, lang_key, price, old_price)
VALUES 
('a4b5c6d7-e8f9-0123-a4b5-c6d7e8f90123', 'e7f8a9b0-c1d2-34e5-f6a7-b8c9d0e1f2g3', 'Doritos Nacho Cheese Party Size', 'Bold nacho cheese flavor in a big sharing bag', 'en', 4.99, 5.49),
('b5c6d7e8-f9a0-1234-b5c6-d7e8f9a01234', 'e7f8a9b0-c1d2-34e5-f6a7-b8c9d0e1f2g3', 'Доритос Начо Сыр Party Size', 'Яркий вкус начо сыра в большой упаковке', 'ru', 419.95, 495.40);

INSERT INTO item_details_translation (id, item_id, full_description, full_label, supplier, ingridients, nutrition, lang_key, supplier_link)
VALUES 
('c6d7e8f9-a0b1-2345-c6d7-e8f9a0b12345', 'e7f8a9b0-c1d2-34e5-f6a7-b8c9d0e1f2g3', 
'Doritos Nacho Cheese tortilla chips have that bold, cheesy nacho flavor perfect for parties and gatherings.', 
'Doritos Nacho Cheese Flavored Tortilla Chips Party Size 425g', 'PepsiCo', 
'Corn, Vegetable Oil, Nacho Cheese Seasoning (Cheddar Cheese, Whey, Salt, Onion Powder, Tomato Powder, Garlic Powder)', 
'Per 28g: Calories 140, Fat 7g (11% DV), Sodium 210mg (9% DV), Carbs 18g (6% DV), Protein 2g', 
'en', 'https://www.pepsico.com'),
('d7e8f9a0-b1c2-3456-d7e8-f9a0b1c23456', 'e7f8a9b0-c1d2-34e5-f6a7-b8c9d0e1f2g3', 
'Кукурузные чипсы Доритос Начо Сыр обладают ярким сырным вкусом, идеальным для вечеринок и компаний.', 
'Доритос Начо Сыр Party Size 425г', 'PepsiCo', 
'Кукуруза, растительное масло, приправа Начо Сыр (сыр Чеддер, сыворотка, соль, луковый порошок, томатный порошок, чесночный порошок)', 
'На 28г: Калории 140, Жиры 7г (11% ДН), Натрий 210мг (9% ДН), Углеводы 18г (6% ДН), Белки 2г', 
'ru', 'https://www.pepsico.com');

INSERT INTO item_image (id, is_main, name, item_id)
VALUES 
('e8f9a0b1-c2d3-4567-e8f9-a0b1c2d34567', true, 'doritos_nacho_front', 'e7f8a9b0-c1d2-34e5-f6a7-b8c9d0e1f2g3');

INSERT INTO item_image_translation (id, item_image_id, title, lang_key)
VALUES 
('f9a0b1c2-d3e4-5678-f9a0-b1c2d3e45678', 'e8f9a0b1-c2d3-4567-e8f9-a0b1c2d34567', 'Doritos Nacho Cheese Party Size bag', 'en'),
('a0b1c2d3-e4f5-6789-a0b1-c2d3e4f56789', 'e8f9a0b1-c2d3-4567-e8f9-a0b1c2d34567', 'Упаковка Доритос Начо Сыр Party Size', 'ru');

--- Lays Flavored Barbecue ---

INSERT INTO item (id, is_bestseller, name, category_id, type_id, is_secretbox)
VALUES ('c1d2e3f4-a5b6-7890-c1d2-e3f4a5b67890', true, 'lays-barbecue', 'bbaf2417-4c2c-4bf1-854b-2ba4d020c018', '4036002d-d64f-46ec-b688-aaddb05273ec', false);

INSERT INTO item_details (item_id)
VALUES ('c1d2e3f4-a5b6-7890-c1d2-e3f4a5b67890');

INSERT INTO item_translation (id, item_id, label, description, lang_key, price, old_price)
VALUES 
('d2e3f4a5-b6c7-8901-d2e3-f4a5b6c78901', 'c1d2e3f4-a5b6-7890-c1d2-e3f4a5b67890', 'Lays Barbecue Flavored', 'Smoky, sweet barbecue flavor potato chips', 'en', 2.99, 3.29),
('e3f4a5b6-c7d8-9012-e3f4-a5b6c7d89012', 'c1d2e3f4-a5b6-7890-c1d2-e3f4a5b67890', 'Лейс со вкусом барбекю', 'Картофельные чипсы с дымчатым сладковатым вкусом барбекю', 'ru', 219.99, 309.99);

INSERT INTO item_details_translation (id, item_id, full_description, full_label, supplier, ingridients, nutrition, lang_key, supplier_link)
VALUES 
('f4a5b6c7-d8e9-0123-f4a5-b6c7d8e90123', 'c1d2e3f4-a5b6-7890-c1d2-e3f4a5b67890', 
'Lays Barbecue Flavored potato chips deliver the perfect balance of smoky, sweet and tangy barbecue flavor in every crispy bite.', 
'Lays Barbecue Flavored Potato Chips 200g', 'PepsiCo', 
'Potatoes, Vegetable Oil, Barbecue Seasoning (Sugar, Dextrose, Salt, Molasses, Onion Powder, Spices, Garlic Powder, Natural Flavors)', 
'Per 28g: Calories 160, Fat 10g (15% DV), Sodium 170mg (7% DV), Carbs 15g (5% DV), Protein 2g', 
'en', 'https://www.pepsico.com'),
('a5b6c7d8-e9f0-1234-a5b6-c7d8e9f01234', 'c1d2e3f4-a5b6-7890-c1d2-e3f4a5b67890', 
'Чипсы Лейс со вкусом барбекю предлагают идеальный баланс дымчатого, сладкого и пикантного вкуса в каждой хрустящей дольке.', 
'Лейс Чипсы со вкусом барбекю 200г', 'PepsiCo', 
'Картофель, растительное масло, приправа барбекю (сахар, декстроза, соль, меласса, луковый порошок, специи, чесночный порошок, натуральные ароматизаторы)', 
'На 28г: Калории 160, Жиры 10г (15% ДН), Натрий 170мг (7% ДН), Углеводы 15г (5% ДН), Белки 2г', 
'ru', 'https://www.pepsico.com');

INSERT INTO item_image (id, is_main, name, item_id)
VALUES 
('b6c7d8e9-f0a1-2345-b6c7-d8e9f0a12345', true, 'lays_barbecue_front', 'c1d2e3f4-a5b6-7890-c1d2-e3f4a5b67890');

INSERT INTO item_image_translation (id, item_image_id, title, lang_key)
VALUES 
('c7d8e9f0-a1b2-3456-c7d8-e9f0a1b23456', 'b6c7d8e9-f0a1-2345-b6c7-d8e9f0a12345', 'Lays Barbecue Flavored chips package', 'en'),
('d8e9f0a1-b2c3-4567-d8e9-f0a1b2c34567', 'b6c7d8e9-f0a1-2345-b6c7-d8e9f0a12345', 'Упаковка чипсов Лейс со вкусом барбекю', 'ru');

--- On The Border Mexicali Grill & Cantina Cafe Style Tortilla Chips ---

INSERT INTO item (id, is_bestseller, name, category_id, type_id, is_secretbox)
VALUES ('a1b2c3d4-e5f6-7890-a1b2-c3d4e5f67890', false, 'on-the-border-mexicali', 'bbaf2417-4c2c-4bf1-854b-2ba4d020c018', '4036002d-d64f-46ec-b688-aaddb05273ec', false);

INSERT INTO item_details (item_id)
VALUES ('a1b2c3d4-e5f6-7890-a1b2-c3d4e5f67890');

INSERT INTO item_translation (id, item_id, label, description, lang_key, price)
VALUES 
('fk2845jf-f6a7-8901-b2c3-d4e5f6a78901', 'a1b2c3d4-e5f6-7890-a1b2-c3d4e5f67890', 'On The Border Mexicali Grill & Cantina Cafe Style', 'Restaurant-style tortilla chips with authentic flavor', 'en', 3.99),
('c3d4e5f6-a7b8-9012-c3d4-e5f6a7b89012', 'a1b2c3d4-e5f6-7890-a1b2-c3d4e5f67890', 'On The Border Mexicali Grill & Cantina (кафе стиль)', 'Чипсы в стиле мексиканского кафе с аутентичным вкусом', 'ru', 249.99);

INSERT INTO item_details_translation (id, item_id, full_description, full_label, supplier, ingridients, nutrition, lang_key, supplier_link)
VALUES 
('d4e5f6a7-b8c9-0123-d4e5-f6a7b8c90123', 'a1b2c3d4-e5f6-7890-a1b2-c3d4e5f67890', 
'On The Border Mexicali Grill & Cantina Cafe Style Tortilla Chips bring authentic Mexican restaurant flavor to your home. Perfect for dipping or enjoying alone.', 
'On The Border Mexicali Grill & Cantina Cafe Style Tortilla Chips 12oz (340g)', 'On The Border Foods', 
'Stone Ground White Corn, Vegetable Oil (Corn, Soybean, and/or Sunflower Oil), Salt', 
'Per 1oz (28g): Calories 140, Fat 7g (9% DV), Sodium 105mg (5% DV), Carbs 18g (6% DV), Protein 2g', 
'en', 'https://www.ontheborder.com'),
('e5f6a7b8-c9d0-1234-e5f6-a7b8c9d01234', 'a1b2c3d4-e5f6-7890-a1b2-c3d4e5f67890', 
'Чипсы On The Border Mexicali Grill & Cantina воспроизводят аутентичный вкус мексиканского ресторана. Идеальны для соусов или самостоятельного употребления.', 
'On The Border Mexicali Grill & Cantina Чипсы 340г', 'On The Border Foods', 
'Молотая белая кукуруза, растительное масло (кукурузное, соевое и/или подсолнечное), соль', 
'На 28г: Калории 140, Жиры 7г (9% ДН), Натрий 105мг (5% ДН), Углеводы 18г (6% ДН), Белки 2г', 
'ru', 'https://www.ontheborder.com');

INSERT INTO item_image (id, is_main, name, item_id)
VALUES 
('f6a7b8c9-d0e1-2345-f6a7-b8c9d0e12345', true, 'on_the_border_front', 'a1b2c3d4-e5f6-7890-a1b2-c3d4e5f67890');

INSERT INTO item_image_translation (id, item_image_id, title, lang_key)
VALUES 
('a7b8c9d0-e1f2-4927-a7b8-c9d0e1f23456', 'f6a7b8c9-d0e1-2345-f6a7-b8c9d0e12345', 'On The Border Mexicali Grill tortilla chips package', 'en'),
('b8c9d0e1-f2a3-4567-b8c9-d0e1f2a34567', 'f6a7b8c9-d0e1-2345-f6a7-b8c9d0e12345', 'Упаковка чипсов On The Border Mexicali Grill', 'ru');

--- Cheetos Crunchy Cheese ---

INSERT INTO item (id, is_bestseller, name, category_id, type_id, is_secretbox)
VALUES ('828172cc-0566-4843-96a5-3913e0cc3df3', true, 'cheetos-crunchy-cheese', 'bbaf2417-4c2c-4bf1-854b-2ba4d020c018', '4036002d-d64f-46ec-b688-aaddb05273ec', false);

INSERT INTO item_details (item_id)
VALUES ('828172cc-0566-4843-96a5-3913e0cc3df3');

INSERT INTO item_translation (id, item_id, label, description, lang_key, price, old_price)
VALUES 
('399b9e14-efaa-3ae6-807a-bf4b244d6aad', '828172cc-0566-4843-96a5-3913e0cc3df3', 'Cheetos Crunchy Cheese', 'Classic crunchy cheese-flavored corn snacks', 'en', 2.99, 3.49),
('6807abf4-b244-d6aa-d399-b9e14efaa3ae', '828172cc-0566-4843-96a5-3913e0cc3df3', 'Читос Хрустящие Сырные', 'Хрустящие кукурузные снеки с сырным вкусом', 'ru', 240, 280);

INSERT INTO item_details_translation (id, item_id, full_description, full_label, supplier, ingridients, nutrition, lang_key, supplier_link)
VALUES 
('244d6aad-399b-9e14-efaa-3ae6807abf4b', '828172cc-0566-4843-96a5-3913e0cc3df3', 
'Cheetos Crunchy Cheese Flavored Snacks are made with real cheese for that classic taste you love. Perfect crunchy texture every time.', 
'Cheetos Crunchy Cheese Flavored Snacks 8.5oz (241g)', 'PepsiCo', 
'Enriched Corn Meal, Vegetable Oil, Cheese Seasoning (Whey, Cheddar Cheese, Canola Oil, Salt)', 
'Per 28g: Calories 160, Fat 10g (15% DV), Sodium 250mg (11% DV), Carbs 15g (5% DV), Protein 1g', 
'en', 'https://www.pepsico.com'),
('efaa3ae6-807a-bf4b-244d-6aad399b9e14', '828172cc-0566-4843-96a5-3913e0cc3df3', 
'Читос Хрустящие с сырным вкусом сделаны с использованием настоящего сыра. Идеальная хрустящая текстура.', 
'Читос Хрустящие Сырные 241г', 'PepsiCo', 
'Обогащенная кукурузная мука, растительное масло, сырная приправа (сыворотка, сыр Чеддер, рапсовое масло, соль)', 
'На 28г: Калории 160, Жиры 10г (15% ДН), Натрий 250мг (11% ДН), Углеводы 15г (5% ДН), Белки 1г', 
'ru', 'https://www.pepsico.com');

INSERT INTO item_image (id, is_main, name, item_id)
VALUES 
('3913e0cc-3df3-8281-72cc-0566484396a5', true, 'cheetos_crunchy_front', '828172cc-0566-4843-96a5-3913e0cc3df3');

INSERT INTO item_image_translation (id, item_image_id, title, lang_key)
VALUES 
('05664843-96a5-3913-e0cc-3df3828172cc', '3913e0cc-3df3-8281-72cc-0566484396a5', 'Cheetos Crunchy Cheese bag', 'en'),
('96a53913-e0cc-3df3-8281-72cc05664843', '3913e0cc-3df3-8281-72cc-0566484396a5', 'Упаковка Читос Хрустящие Сырные', 'ru');

--- Doritos Spicy Sweet Chili (Party Size) ---

BEGIN;
INSERT INTO item (id, is_bestseller, name, category_id, type_id, is_secretbox)
VALUES ('e2170ecf-6123-4a3e-a1e3-c2439d757fab', false, 'doritos-spicy-sweet-chili', 'bbaf2417-4c2c-4bf1-854b-2ba4d020c018', '4036002d-d64f-46ec-b688-aaddb05273ec', false);

INSERT INTO item_details (item_id)
VALUES ('e2170ecf-6123-4a3e-a1e3-c2439d757fab');

INSERT INTO item_translation (id, item_id, label, description, lang_key, price)
VALUES 
('be945da8-4287-e3db-477e-59bc8f2b8b9e', 'e2170ecf-6123-4a3e-a1e3-c2439d757fab', 'Doritos Spicy Sweet Chili', 'Perfect balance of spicy and sweet flavors', 'en', 4.49),
('477e59bc-8f2b-8b9e-be94-5da84287e3db', 'e2170ecf-6123-4a3e-a1e3-c2439d757fab', 'Доритос Острый Сладкий Чили', 'Идеальный баланс острого и сладкого вкусов', 'ru', 360);

INSERT INTO item_details_translation (id, item_id, full_description, full_label, supplier, ingridients, nutrition, lang_key, supplier_link)
VALUES 
('8f2b8b9e-be94-5da8-4287-e3db477e59bc', 'e2170ecf-6123-4a3e-a1e3-c2439d757fab', 
'Doritos Spicy Sweet Chili Flavored Tortilla Chips combine the perfect amount of heat with a touch of sweetness for an addictive snack.', 
'Doritos Spicy Sweet Chili Party Size 14.5oz (411g)', 'PepsiCo', 
'Corn, Vegetable Oil, Spicy Sweet Chili Seasoning (Sugar, Salt, Spices, Onion Powder, Garlic Powder)', 
'Per 28g: Calories 140, Fat 7g (11% DV), Sodium 210mg (9% DV), Carbs 18g (6% DV), Protein 2g', 
'en', 'https://www.pepsico.com'),
('4287e3db-477e-59bc-8f2b-8b9ebe945da8', 'e2170ecf-6123-4a3e-a1e3-c2439d757fab', 
'Чипсы Доритос Острый Сладкий Чили сочетают идеальное количество остроты с легкой сладостью.', 
'Доритос Острый Сладкий Чили Party Size 411г', 'PepsiCo', 
'Кукуруза, растительное масло, приправа Острый Сладкий Чили (сахар, соль, специи, луковый порошок, чесночный порошок)', 
'На 28г: Калории 140, Жиры 7г (11% ДН), Натрий 210мг (9% ДН), Углеводы 18г (6% ДН), Белки 2г', 
'ru', 'https://www.pepsico.com');

INSERT INTO item_image (id, is_main, name, item_id)
VALUES 
('c2439d75-7fab-e217-0ecf-61234a3ea1e3', true, 'doritos_spicy_sweet_front', 'e2170ecf-6123-4a3e-a1e3-c2439d757fab');

INSERT INTO item_image_translation (id, item_image_id, title, lang_key)
VALUES 
('61234a3e-a1e3-c243-9d75-7fabe2170ecf', 'c2439d75-7fab-e217-0ecf-61234a3ea1e3', 'Doritos Spicy Sweet Chili bag', 'en'),
('a1e3c243-9d75-7fab-e217-0ecf61234a3e', 'c2439d75-7fab-e217-0ecf-61234a3ea1e3', 'Упаковка Доритос Острый Сладкий Чили', 'ru');

--- Lay's Baked BBQ (Gluten Free) ---

INSERT INTO item (id, is_bestseller, name, category_id, type_id, is_secretbox)
VALUES ('7e161f6d-5f93-4453-8865-eb7e449828b7', false, 'lays-baked-bbq', 'bbaf2417-4c2c-4bf1-854b-2ba4d020c018', '4036002d-d64f-46ec-b688-aaddb05273ec', false);

INSERT INTO item_details (item_id)
VALUES ('7e161f6d-5f93-4453-8865-eb7e449828b7');

INSERT INTO item_translation (id, item_id, label, description, lang_key, price, old_price)
VALUES 
('b74beac7-ae46-a530-afa7-1bf662ae84ce', '7e161f6d-5f93-4453-8865-eb7e449828b7', 'Lay''s Baked BBQ', 'Baked potato chips with barbecue flavor, gluten free', 'en', 3.29, 3.79),
('afa71bf6-62ae-84ce-b74b-eac7ae46a530', '7e161f6d-5f93-4453-8865-eb7e449828b7', 'Лейс Печеные Барбекю', 'Печеные картофельные чипсы со вкусом барбекю, без глютена', 'ru', 260, 300);

INSERT INTO item_details_translation (id, item_id, full_description, full_label, supplier, ingridients, nutrition, lang_key, supplier_link)
VALUES 
('62ae84ce-b74b-eac7-ae46-a530afa71bf6', '7e161f6d-5f93-4453-8865-eb7e449828b7', 
'Lay''s Baked BBQ Flavored Potato Chips are made with 65% less fat than regular potato chips. Gluten free and full of smoky barbecue flavor.', 
'Lay''s Baked Gluten Free Barbecue Flavored Potato Chips 6.25oz (177g)', 'PepsiCo', 
'Dried Potatoes, Corn Starch, Sugar, Salt, Barbecue Seasoning', 
'Per 28g: Calories 120, Fat 3.5g (5% DV), Sodium 180mg (8% DV), Carbs 22g (8% DV), Protein 2g', 
'en', 'https://www.pepsico.com'),
('ae46a530-afa7-1bf6-62ae-84ceb74beac7', '7e161f6d-5f93-4453-8865-eb7e449828b7', 
'Чипсы Лейс Печеные Барбекю содержат на 65% меньше жира по сравнению с обычными чипсами. Без глютена с дымчатым вкусом барбекю.', 
'Лейс Печеные Барбекю 177г', 'PepsiCo', 
'Сушеный картофель, кукурузный крахмал, сахар, соль, приправа барбекю', 
'На 28г: Калории 120, Жиры 3.5г (5% ДН), Натрий 180мг (8% ДН), Углеводы 22г (8% ДН), Белки 2г', 
'ru', 'https://www.pepsico.com');

INSERT INTO item_image (id, is_main, name, item_id)
VALUES 
('eb7e4498-28b7-7e16-1f6d-5f9344538865', true, 'lays_baked_bbq_front', '7e161f6d-5f93-4453-8865-eb7e449828b7');

INSERT INTO item_image_translation (id, item_image_id, title, lang_key)
VALUES 
('5f934453-8865-eb7e-4498-28b77e161f6d', 'eb7e4498-28b7-7e16-1f6d-5f9344538865', 'Lay''s Baked BBQ bag', 'en'),
('8865eb7e-4498-28b7-7e16-1f6d5f934453', 'eb7e4498-28b7-7e16-1f6d-5f9344538865', 'Упаковка Лейс Печеные Барбекю', 'ru');

--- SunChips Garden Salsa ---

INSERT INTO item (id, is_bestseller, name, category_id, type_id, is_secretbox)
VALUES ('e13aba2a-6fd9-454d-a0a1-248cd31a6dc0', true, 'sunchips-garden-salsa', 'bbaf2417-4c2c-4bf1-854b-2ba4d020c018', '4036002d-d64f-46ec-b688-aaddb05273ec', false);

INSERT INTO item_details (item_id)
VALUES ('e13aba2a-6fd9-454d-a0a1-248cd31a6dc0');

INSERT INTO item_translation (id, item_id, label, description, lang_key, price)
VALUES 
('4d613a3b-0bba-0a29-69d3-4e511a74812e', 'e13aba2a-6fd9-454d-a0a1-248cd31a6dc0', 'SunChips Garden Salsa', 'Whole grain snacks with garden salsa flavor', 'en', 3.49),
('69d34e51-1a74-812e-4d61-3a3b0bba0a29', 'e13aba2a-6fd9-454d-a0a1-248cd31a6dc0', 'СанЧипс Гарден Сальса', 'Цельнозерновые снеки с вкусом сальсы', 'ru', 280);

INSERT INTO item_details_translation (id, item_id, full_description, full_label, supplier, ingridients, nutrition, lang_key, supplier_link)
VALUES 
('1a74812e-4d61-3a3b-0bba-0a2969d34e51', 'e13aba2a-6fd9-454d-a0a1-248cd31a6dc0', 
'SunChips Garden Salsa Flavored Whole Grain Snacks are made with 100% whole grain and have 18g or more of whole grain per serving.', 
'SunChips Garden Salsa Whole Grain Snacks 7oz (198g)', 'PepsiCo', 
'Whole Corn, Whole Wheat, Vegetable Oil, Garden Salsa Seasoning', 
'Per 28g: Calories 140, Fat 6g (9% DV), Sodium 120mg (5% DV), Carbs 19g (7% DV), Protein 2g', 
'en', 'https://www.pepsico.com'),
('0bba0a29-69d3-4e51-1a74-812e4d613a3b', 'e13aba2a-6fd9-454d-a0a1-248cd31a6dc0', 
'СанЧипс Гарден Сальса сделаны из 100% цельного зерна и содержат 18г или более цельного зерна на порцию.', 
'СанЧипс Гарден Сальса 198г', 'PepsiCo', 
'Цельная кукуруза, цельная пшеница, растительное масло, приправа Гарден Сальса', 
'На 28г: Калории 140, Жиры 6г (9% ДН), Натрий 120мг (5% ДН), Углеводы 19г (7% ДН), Белки 2г', 
'ru', 'https://www.pepsico.com');

INSERT INTO item_image (id, is_main, name, item_id)
VALUES 
('248cd31a-6dc0-e13a-ba2a-6fd9454da0a1', true, 'sunchips_garden_front', 'e13aba2a-6fd9-454d-a0a1-248cd31a6dc0');

INSERT INTO item_image_translation (id, item_image_id, title, lang_key)
VALUES 
('6fd9454d-a0a1-248c-d31a-6dc0e13aba2a', '248cd31a-6dc0-e13a-ba2a-6fd9454da0a1', 'SunChips Garden Salsa bag', 'en'),
('a0a1248c-d31a-6dc0-e13a-ba2a6fd9454d', '248cd31a-6dc0-e13a-ba2a-6fd9454da0a1', 'Упаковка СанЧипс Гарден Сальса', 'ru');

--- Takies Fuego ---

INSERT INTO item (id, is_bestseller, name, category_id, type_id, is_secretbox)
VALUES ('ce60e10f-61f5-44c0-81a4-29014c08643e', true, 'takis-fuego', 'bbaf2417-4c2c-4bf1-854b-2ba4d020c018', '4036002d-d64f-46ec-b688-aaddb05273ec', false);

INSERT INTO item_details (item_id)
VALUES ('ce60e10f-61f5-44c0-81a4-29014c08643e');

INSERT INTO item_translation (id, item_id, label, description, lang_key, price, old_price)
VALUES 
('9512f82d-04b1-1918-6dbd-96b4995abd41', 'ce60e10f-61f5-44c0-81a4-29014c08643e', 'Takis Fuego', 'Hot chili pepper & lime rolled tortilla chips', 'en', 3.99, 4.49),
('6dbd96b4-995a-bd41-9512-f82d04b11918', 'ce60e10f-61f5-44c0-81a4-29014c08643e', 'Такис Фуэго', 'Острые чипсы с вкусом перца чили и лайма', 'ru', 320, 360);

INSERT INTO item_details_translation (id, item_id, full_description, full_label, supplier, ingridients, nutrition, lang_key, supplier_link)
VALUES 
('995abd41-9512-f82d-04b1-19186dbd96b4', 'ce60e10f-61f5-44c0-81a4-29014c08643e', 
'Takis Fuego are rolled corn tortilla chips packed with intense heat and tangy lime flavor. Not for the faint of heart!', 
'Takis Fuego Hot Chili Pepper & Lime Rolled Tortilla Chips 9.9oz (280g)', 'Barcel', 
'Corn Masa Flour, Vegetable Oil, Seasoning (Salt, Sugar, Citric Acid, Chili Pepper, Natural Flavors)', 
'Per 28g: Calories 140, Fat 8g (12% DV), Sodium 420mg (18% DV), Carbs 16g (6% DV), Protein 2g', 
'en', 'https://www.barcel-usa.com'),
('04b11918-6dbd-96b4-995a-bd419512f82d', 'ce60e10f-61f5-44c0-81a4-29014c08643e', 
'Такис Фуэго - свернутые кукурузные чипсы с интенсивной остротой и вкусом лайма. Не для слабонервных!', 
'Такис Фуэго Острые Чипсы 280г', 'Barcel', 
'Кукурузная мука, растительное масло, приправа (соль, сахар, лимонная кислота, перец чили, натуральные ароматизаторы)', 
'На 28г: Калории 140, Жиры 8г (12% ДН), Натрий 420мг (18% ДН), Углеводы 16г (6% ДН), Белки 2г', 
'ru', 'https://www.barcel-usa.com');

INSERT INTO item_image (id, is_main, name, item_id)
VALUES 
('29014c08-643e-ce60-e10f-61f544c081a4', true, 'takis_fuego_front', 'ce60e10f-61f5-44c0-81a4-29014c08643e');

INSERT INTO item_image_translation (id, item_image_id, title, lang_key)
VALUES 
('61f544c0-81a4-2901-4c08-643ece60e10f', '29014c08-643e-ce60-e10f-61f544c081a4', 'Takis Fuego bag', 'en'),
('81a42901-4c08-643e-ce60-e10f61f544c0', '29014c08-643e-ce60-e10f-61f544c081a4', 'Упаковка Такис Фуэго', 'ru');

--- Doritos Twisted Queso ---

INSERT INTO item (id, is_bestseller, name, category_id, type_id, is_secretbox)
VALUES ('e7627b73-922e-44f8-b646-bbbd74788acf', false, 'doritos-twisted-queso', 'bbaf2417-4c2c-4bf1-854b-2ba4d020c018', '4036002d-d64f-46ec-b688-aaddb05273ec', false);

INSERT INTO item_details (item_id)
VALUES ('e7627b73-922e-44f8-b646-bbbd74788acf');

INSERT INTO item_translation (id, item_id, label, description, lang_key, price)
VALUES 
('bbb28c4c-435e-4d85-37ae-ce2cf845d3c', 'e7627b73-922e-44f8-b646-bbbd74788acf', 'Doritos Twisted Queso', 'Cheesy twisted tortilla chips with bold flavor', 'en', 3.29),
('37aece2c-f845-d3cb-bb28-c4c435e4d853', 'e7627b73-922e-44f8-b646-bbbd74788acf', 'Доритос Твистед Кесо', 'Сырные скрученные чипсы с насыщенным вкусом', 'ru', 260);

INSERT INTO item_details_translation (id, item_id, full_description, full_label, supplier, ingridients, nutrition, lang_key, supplier_link)
VALUES 
('f845d3cb-bb28-c4c4-35e4-d85337aece2c', 'e7627b73-922e-44f8-b646-bbbd74788acf', 
'Doritos Twisted Queso tortilla chips feature a unique twisted shape and extra cheesy queso flavor that delivers maximum taste in every bite.', 
'Doritos Twisted Queso Tortilla Chips 9oz (255g)', 'PepsiCo', 
'Corn, Vegetable Oil, Queso Seasoning (Cheddar Cheese, Whey, Buttermilk, Salt, Onion Powder)', 
'Per 28g: Calories 150, Fat 8g (12% DV), Sodium 210mg (9% DV), Carbs 17g (6% DV), Protein 2g', 
'en', 'https://www.pepsico.com'),
('35e4d853-37ae-ce2c-f845-d3cbbb28c4c4', 'e7627b73-922e-44f8-b646-bbbd74788acf', 
'Чипсы Доритос Твистед Кесо имеют уникальную скрученную форму и насыщенный сырный вкус кесо.', 
'Доритос Твистед Кесо 255г', 'PepsiCo', 
'Кукуруза, растительное масло, приправа Кесо (сыр Чеддер, сыворотка, пахта, соль, луковый порошок)', 
'На 28г: Калории 150, Жиры 8г (12% ДН), Натрий 210мг (9% ДН), Углеводы 17г (6% ДН), Белки 2г', 
'ru', 'https://www.pepsico.com');

INSERT INTO item_image (id, is_main, name, item_id)
VALUES 
('bbbd7478-8acf-e762-7b73-922e44f8b646', true, 'doritos_twisted_front', 'e7627b73-922e-44f8-b646-bbbd74788acf');

INSERT INTO item_image_translation (id, item_image_id, title, lang_key)
VALUES 
('922e44f8-b646-bbbd-7478-8acfe7627b73', 'bbbd7478-8acf-e762-7b73-922e44f8b646', 'Doritos Twisted Queso bag', 'en'),
('b646bbbd-7478-8acf-e762-7b73922e44f8', 'bbbd7478-8acf-e762-7b73-922e44f8b646', 'Упаковка Доритос Твистед Кесо', 'ru');

--- Great Value Nacho Cheese ---

INSERT INTO item (id, is_bestseller, name, category_id, type_id, is_secretbox)
VALUES ('3c6f292e-411b-4bd6-92cc-bd01e330c09e', false, 'great-value-nacho-cheese', 'bbaf2417-4c2c-4bf1-854b-2ba4d020c018', '4036002d-d64f-46ec-b688-aaddb05273ec', false);

INSERT INTO item_details (item_id)
VALUES ('3c6f292e-411b-4bd6-92cc-bd01e330c09e');

INSERT INTO item_translation (id, item_id, label, description, lang_key, price, old_price)
VALUES 
('9804b3b2-763a-507c-e2c7-fb0414dcbb0f', '3c6f292e-411b-4bd6-92cc-bd01e330c09e', 'Great Value Nacho Cheese', 'Classic nacho cheese flavored tortilla chips', 'en', 2.29, 2.79),
('e2c7fb04-14dc-bb0f-9804-b3b2763a507c', '3c6f292e-411b-4bd6-92cc-bd01e330c09e', 'Great Value Начо Сыр', 'Классические чипсы со вкусом начо сыра', 'ru', 180, 220);

INSERT INTO item_details_translation (id, item_id, full_description, full_label, supplier, ingridients, nutrition, lang_key, supplier_link)
VALUES 
('14dcbb0f-9804-b3b2-763a-507ce2c7fb04', '3c6f292e-411b-4bd6-92cc-bd01e330c09e', 
'Great Value Nacho Cheese Flavored Tortilla Chips deliver the classic nacho cheese taste you love at a great value price.', 
'Great Value Nacho Cheese Tortilla Chips 9.75oz (276g)', 'Walmart', 
'Corn, Vegetable Oil, Nacho Cheese Seasoning (Whey, Cheddar Cheese, Salt, Onion Powder)', 
'Per 28g: Calories 140, Fat 7g (11% DV), Sodium 180mg (8% DV), Carbs 18g (6% DV), Protein 2g', 
'en', 'https://www.walmart.com'),
('763a507c-e2c7-fb04-14dc-bb0f9804b3b2', '3c6f292e-411b-4bd6-92cc-bd01e330c09e', 
'Чипсы Great Value Начо Сыр предлагают классический вкус начо сыра по отличной цене.', 
'Great Value Чипсы Начо Сыр 276г', 'Walmart', 
'Кукуруза, растительное масло, приправа Начо Сыр (сыворотка, сыр Чеддер, соль, луковый порошок)', 
'На 28г: Калории 140, Жиры 7г (11% ДН), Натрий 180мг (8% ДН), Углеводы 18г (6% ДН), Белки 2г', 
'ru', 'https://www.walmart.com');

INSERT INTO item_image (id, is_main, name, item_id)
VALUES 
('bd01e330-c09e-3c6f-292e-411b4bd692cc', true, 'great_value_nacho_front', '3c6f292e-411b-4bd6-92cc-bd01e330c09e');

INSERT INTO item_image_translation (id, item_image_id, title, lang_key)
VALUES 
('411b4bd6-92cc-bd01-e330-c09e3c6f292e', 'bd01e330-c09e-3c6f-292e-411b4bd692cc', 'Great Value Nacho Cheese bag', 'en'),
('92ccbd01-e330-c09e-3c6f-292e411b4bd6', 'bd01e330-c09e-3c6f-292e-411b4bd692cc', 'Упаковка Great Value Начо Сыр', 'ru');

--- Tostitos Cantina Thin & Crispy ---

INSERT INTO item (id, is_bestseller, name, category_id, type_id, is_secretbox)
VALUES ('694e30fa-d29c-4437-a4a1-0c89b090ce74', true, 'tostitos-cantina-thin', 'bbaf2417-4c2c-4bf1-854b-2ba4d020c018', '4036002d-d64f-46ec-b688-aaddb05273ec', false);

INSERT INTO item_details (item_id)
VALUES ('694e30fa-d29c-4437-a4a1-0c89b090ce74');

INSERT INTO item_translation (id, item_id, label, description, lang_key, price)
VALUES 
('4b6b33e0-b4c9-c4e7-da26-9d28863c6a99', '694e30fa-d29c-4437-a4a1-0c89b090ce74', 'Tostitos Cantina Thin & Crispy', 'Thin, crispy restaurant-style tortilla chips', 'en', 3.79),
('da269d28-863c-6a99-4b6b-33e0b4c9c4e7', '694e30fa-d29c-4437-a4a1-0c89b090ce74', 'Тоститос Кантина Тонкие Хрустящие', 'Тонкие чипсы в стиле мексиканского ресторана', 'ru', 300);

INSERT INTO item_details_translation (id, item_id, full_description, full_label, supplier, ingridients, nutrition, lang_key, supplier_link)
VALUES 
('863c6a99-4b6b-33e0-b4c9-c4e7da269d28', '694e30fa-d29c-4437-a4a1-0c89b090ce74', 
'Tostitos Cantina Thin & Crispy tortilla chips are inspired by authentic Mexican restaurants with their thin, crispy texture.', 
'Tostitos Cantina Thin & Crispy Tortilla Chips 10oz (283g)', 'PepsiCo', 
'White Corn, Vegetable Oil, Sea Salt', 
'Per 28g: Calories 140, Fat 7g (11% DV), Sodium 115mg (5% DV), Carbs 18g (6% DV), Protein 2g', 
'en', 'https://www.pepsico.com'),
('b4c9c4e7-da26-9d28-863c-6a994b6b33e0', '694e30fa-d29c-4437-a4a1-0c89b090ce74', 
'Чипсы Тоститос Кантина Тонкие Хрустящие вдохновлены аутентичными мексиканскими ресторанами.', 
'Тоститос Кантина Тонкие Хрустящие 283г', 'PepsiCo', 
'Белая кукуруза, растительное масло, морская соль', 
'На 28г: Калории 140, Жиры 7г (11% ДН), Натрий 115мг (5% ДН), Углеводы 18г (6% ДН), Белки 2г', 
'ru', 'https://www.pepsico.com');

INSERT INTO item_image (id, is_main, name, item_id)
VALUES 
('0c89b090-ce74-694e-30fa-d29c4437a4a1', true, 'tostitos_cantina_front', '694e30fa-d29c-4437-a4a1-0c89b090ce74');

INSERT INTO item_image_translation (id, item_image_id, title, lang_key)
VALUES 
('d29c4437-a4a1-0c89-b090-ce74694e30fa', '0c89b090-ce74-694e-30fa-d29c4437a4a1', 'Tostitos Cantina Thin & Crispy bag', 'en'),
('a4a10c89-b090-ce74-694e-30fad29c4437', '0c89b090-ce74-694e-30fa-d29c4437a4a1', 'Упаковка Тоститос Кантина Тонкие Хрустящие', 'ru');

--- Takis Blue Heat ---

INSERT INTO item (id, is_bestseller, name, category_id, type_id, is_secretbox)
VALUES ('6f9da1dd-0041-478a-bdd4-f80e67a58f26', false, 'takis-blue-heat', 'bbaf2417-4c2c-4bf1-854b-2ba4d020c018', '4036002d-d64f-46ec-b688-aaddb05273ec', false);

INSERT INTO item_details (item_id)
VALUES ('6f9da1dd-0041-478a-bdd4-f80e67a58f26');

INSERT INTO item_translation (id, item_id, label, description, lang_key, price)
VALUES 
('641e1b70-cc6d-1a43-d7f3-3813d512cb23', '6f9da1dd-0041-478a-bdd4-f80e67a58f26', 'Takis Blue Heat', 'Extremely hot chili pepper rolled tortilla chips', 'en', 3.99),
('d7f33813-d512-cb23-641e-1b70cc6d1a43', '6f9da1dd-0041-478a-bdd4-f80e67a58f26', 'Такис Блю Хит', 'Очень острые чипсы с перцем чили', 'ru', 320);

INSERT INTO item_details_translation (id, item_id, full_description, full_label, supplier, ingridients, nutrition, lang_key, supplier_link)
VALUES 
('d512cb23-641e-1b70-cc6d-1a43d7f33813', '6f9da1dd-0041-478a-bdd4-f80e67a58f26', 
'Takis Blue Heat rolled tortilla chips deliver an extreme heat experience with intense chili pepper flavor and eye-catching blue color.', 
'Takis Blue Heat Hot Chili Pepper Rolled Tortilla Chips 9.9oz (280g)', 'Barcel', 
'Corn Masa Flour, Vegetable Oil, Seasoning (Salt, Sugar, Chili Pepper, Citric Acid, Blue 1 Lake)', 
'Per 28g: Calories 140, Fat 8g (12% DV), Sodium 420mg (18% DV), Carbs 16g (6% DV), Protein 2g', 
'en', 'https://www.barcel-usa.com'),
('cc6d1a43-d7f3-3813-d512-cb23641e1b70', '6f9da1dd-0041-478a-bdd4-f80e67a58f26', 
'Чипсы Такис Блю Хит предлагают экстремально острый вкус с интенсивным вкусом перца чили и ярким синим цветом.', 
'Такис Блю Хит Острые Чипсы 280г', 'Barcel', 
'Кукурузная мука, растительное масло, приправа (соль, сахар, перец чили, лимонная кислота, краситель Blue 1 Lake)', 
'На 28г: Калории 140, Жиры 8г (12% ДН), Натрий 420мг (18% ДН), Углеводы 16г (6% ДН), Белки 2г', 
'ru', 'https://www.barcel-usa.com');

INSERT INTO item_image (id, is_main, name, item_id)
VALUES 
('f80e67a5-8f26-6f9d-a1dd-0041478abdd4', true, 'takis_blue_front', '6f9da1dd-0041-478a-bdd4-f80e67a58f26');

INSERT INTO item_image_translation (id, item_image_id, title, lang_key)
VALUES 
('0041478a-bdd4-f80e-67a5-8f266f9da1dd', 'f80e67a5-8f26-6f9d-a1dd-0041478abdd4', 'Takis Blue Heat bag', 'en'),
('bdd4f80e-67a5-8f26-6f9d-a1dd0041478a', 'f80e67a5-8f26-6f9d-a1dd-0041478abdd4', 'Упаковка Такис Блю Хит', 'ru');

--- The Good Crisp Outback BBQ (Gluten Free) ---

INSERT INTO item (id, is_bestseller, name, category_id, type_id, is_secretbox)
VALUES ('e0b4eb02-8ca6-4ca0-b803-4cd0a2c57001', false, 'good-crisp-outback-bbq', 'bbaf2417-4c2c-4bf1-854b-2ba4d020c018', '4036002d-d64f-46ec-b688-aaddb05273ec', false);

INSERT INTO item_details (item_id)
VALUES ('e0b4eb02-8ca6-4ca0-b803-4cd0a2c57001');

INSERT INTO item_translation (id, item_id, label, description, lang_key, price)
VALUES 
('f29fff33-e5f8-a773-89cd-4c9ec1f87a3b', 'e0b4eb02-8ca6-4ca0-b803-4cd0a2c57001', 'The Good Crisp Outback BBQ', 'Gluten free potato chips with smoky BBQ flavor', 'en', 3.99),
('89cd4c9e-c1f8-7a3b-f29f-ff33e5f8a773', 'e0b4eb02-8ca6-4ca0-b803-4cd0a2c57001', 'Гуд Крисп Аутбэк Барбекю', 'Безглютеновые чипсы с дымчатым вкусом барбекю', 'ru', 320);

INSERT INTO item_details_translation (id, item_id, full_description, full_label, supplier, ingridients, nutrition, lang_key, supplier_link)
VALUES 
('c1f87a3b-f29f-ff33-e5f8-a77389cd4c9e', 'e0b4eb02-8ca6-4ca0-b803-4cd0a2c57001', 
'The Good Crisp Company Outback BBQ flavored potato chips are gluten free and made with simple ingredients for a better-for-you snack.', 
'The Good Crisp Company Gluten Free Outback BBQ Snack Chips 5.6oz (159g)', 'The Good Crisp Company', 
'Potatoes, Sunflower Oil, Outback BBQ Seasoning (Sugar, Salt, Tomato Powder, Spices)', 
'Per 28g: Calories 150, Fat 9g (14% DV), Sodium 180mg (8% DV), Carbs 16g (6% DV), Protein 2g', 
'en', 'https://www.thegoodcrispcompany.com'),
('e5f8a773-89cd-4c9e-c1f8-7a3bf29fff33', 'e0b4eb02-8ca6-4ca0-b803-4cd0a2c57001', 
'Чипсы Гуд Крисп Аутбэк Барбекю не содержат глютен и сделаны из простых ингредиентов.', 
'Гуд Крисп Аутбэк Барбекю 159г', 'The Good Crisp Company', 
'Картофель, подсолнечное масло, приправа Аутбэк Барбекю (сахар, соль, томатный порошок, специи)', 
'На 28г: Калории 150, Жиры 9г (14% ДН), Натрий 180мг (8% ДН), Углеводы 16г (6% ДН), Белки 2г', 
'ru', 'https://www.thegoodcrispcompany.com');

INSERT INTO item_image (id, is_main, name, item_id)
VALUES 
('4cd0a2c5-7001-e0b4-eb02-8ca64ca0b803', true, 'good_crisp_bbq_front', 'e0b4eb02-8ca6-4ca0-b803-4cd0a2c57001');

INSERT INTO item_image_translation (id, item_image_id, title, lang_key)
VALUES 
('8ca64ca0-b803-4cd0-a2c5-7001e0b4eb02', '4cd0a2c5-7001-e0b4-eb02-8ca64ca0b803', 'The Good Crisp Outback BBQ bag', 'en'),
('b8034cd0-a2c5-7001-e0b4-eb028ca64ca0', '4cd0a2c5-7001-e0b4-eb02-8ca64ca0b803', 'Упаковка Гуд Крисп Аутбэк Барбекю', 'ru');

COMMIT;
