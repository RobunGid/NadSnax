--
-- PostgreSQL database dump
--

-- Dumped from database version 17.4 (Debian 17.4-1.pgdg120+2)
-- Dumped by pg_dump version 17.5

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: orderstatus; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.orderstatus AS ENUM (
    'processing',
    'packing',
    'shipping',
    'ready',
    'success',
    'canceled',
    'returned',
    'deleted'
);


ALTER TYPE public.orderstatus OWNER TO postgres;

--
-- Name: role; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.role AS ENUM (
    'user',
    'moderator',
    'admin'
);


ALTER TYPE public.role OWNER TO postgres;

--
-- Name: supportedlanguages; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.supportedlanguages AS ENUM (
    'en',
    'ru'
);


ALTER TYPE public.supportedlanguages OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: alembic_version; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.alembic_version (
    version_num character varying(32) NOT NULL
);


ALTER TABLE public.alembic_version OWNER TO postgres;

--
-- Name: categories; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.categories (
    id character varying(80) NOT NULL,
    name character varying(80) NOT NULL,
    page_link character varying(80) NOT NULL
);


ALTER TABLE public.categories OWNER TO postgres;

--
-- Name: category_translation; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.category_translation (
    id character varying(80) NOT NULL,
    category_id character varying(80),
    name character varying(80) NOT NULL,
    lang_key public.supportedlanguages NOT NULL
);


ALTER TABLE public.category_translation OWNER TO postgres;

--
-- Name: favorites; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.favorites (
    id character varying(80) NOT NULL,
    user_id character varying(80) NOT NULL,
    item_id character varying(80) NOT NULL,
    added_at timestamp without time zone NOT NULL
);


ALTER TABLE public.favorites OWNER TO postgres;

--
-- Name: item_details; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.item_details (
    item_id character varying(80) NOT NULL,
    full_description text,
    full_label text NOT NULL,
    supplier text NOT NULL,
    ingridients text NOT NULL,
    nutrition text NOT NULL,
    supplier_link character varying(80)
);


ALTER TABLE public.item_details OWNER TO postgres;

--
-- Name: item_details_translation; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.item_details_translation (
    id character varying(80) NOT NULL,
    item_id character varying(80),
    full_description text,
    full_label text NOT NULL,
    supplier text NOT NULL,
    ingridients text NOT NULL,
    nutrition text NOT NULL,
    lang_key public.supportedlanguages
);


ALTER TABLE public.item_details_translation OWNER TO postgres;

--
-- Name: item_image; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.item_image (
    id character varying(80) NOT NULL,
    title character varying(80) NOT NULL,
    alt character varying(80) NOT NULL,
    is_main boolean,
    file_name character varying(80) NOT NULL,
    item_id character varying(80) NOT NULL
);


ALTER TABLE public.item_image OWNER TO postgres;

--
-- Name: items; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.items (
    id character varying(80) NOT NULL,
    label character varying(80) NOT NULL,
    price numeric(10,2) NOT NULL,
    old_price character varying(80),
    description character varying(80),
    is_bestseller boolean,
    page_link character varying(80) NOT NULL,
    category_id character varying(80),
    type_id character varying(80),
    is_secretbox boolean DEFAULT false
);


ALTER TABLE public.items OWNER TO postgres;

--
-- Name: items_translation; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.items_translation (
    id character varying(80) NOT NULL,
    item_id character varying(80),
    label character varying(80) NOT NULL,
    description character varying(80),
    lang_key public.supportedlanguages NOT NULL
);


ALTER TABLE public.items_translation OWNER TO postgres;

--
-- Name: order_items; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.order_items (
    id character varying(80) NOT NULL,
    quantity integer,
    order_id character varying(80) NOT NULL,
    item_id character varying(80) NOT NULL,
    CONSTRAINT quantity_boundaries CHECK (((quantity > 0) AND (quantity <= 16)))
);


ALTER TABLE public.order_items OWNER TO postgres;

--
-- Name: orders; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.orders (
    id character varying(80) NOT NULL,
    user_id character varying(80) NOT NULL,
    created_at timestamp without time zone NOT NULL,
    status public.orderstatus,
    pickup_point character varying(255) NOT NULL
);


ALTER TABLE public.orders OWNER TO postgres;

--
-- Name: reviews; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.reviews (
    id character varying(80) NOT NULL,
    text character varying(160),
    rating integer NOT NULL,
    user_id character varying(80) NOT NULL,
    item_id character varying(80) NOT NULL,
    created_at timestamp without time zone NOT NULL,
    CONSTRAINT reviews_rating_check CHECK (((rating >= 1) AND (rating <= 5)))
);


ALTER TABLE public.reviews OWNER TO postgres;

--
-- Name: type_translation; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.type_translation (
    id character varying(80) NOT NULL,
    type_id character varying(80),
    name character varying(80) NOT NULL,
    lang_key public.supportedlanguages NOT NULL
);


ALTER TABLE public.type_translation OWNER TO postgres;

--
-- Name: types; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.types (
    id character varying(80) NOT NULL,
    name character varying(80) NOT NULL,
    page_link character varying(80) NOT NULL,
    category_id character varying(80) NOT NULL
);


ALTER TABLE public.types OWNER TO postgres;

--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id character varying(80) NOT NULL,
    username character varying(80) NOT NULL,
    password character varying NOT NULL,
    first_name character varying(32) NOT NULL,
    last_name character varying(32) NOT NULL,
    role public.role,
    register_at timestamp without time zone NOT NULL
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Data for Name: alembic_version; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.alembic_version (version_num) FROM stdin;
21af051e12c4
\.


--
-- Data for Name: categories; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.categories (id, name, page_link) FROM stdin;
fa61b5e8-c44f-4dec-91fd-d28ad7538a24	Sweets	/products/sweets
bbaf2417-4c2c-4bf1-854b-2ba4d020c018	Snacks	/products/snacks
d8a0d4c6-f0ef-4024-854b-a6c3dfaa6d4b	Drinks	/products/drinks
\.


--
-- Data for Name: category_translation; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.category_translation (id, category_id, name, lang_key) FROM stdin;
10487c5c-2a4e-4cc7-804c-e201f19dc987	fa61b5e8-c44f-4dec-91fd-d28ad7538a24	Сладости	ru
dcf4bfdf-d6d3-4e8f-a37c-f007c2cd9654	bbaf2417-4c2c-4bf1-854b-2ba4d020c018	Снэки	ru
d9b7145c-9565-44f1-8caa-6f08d7fa835c	d8a0d4c6-f0ef-4024-854b-a6c3dfaa6d4b	Напитки	ru
\.


--
-- Data for Name: favorites; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.favorites (id, user_id, item_id, added_at) FROM stdin;
0ef1b484-f249-48b1-86c6-dfa677428fc3	3f0510c7-5bb0-4de7-839b-d1e9e3bba665	91488e11-cda3-4e00-b482-0cf21fbc95ea	2025-05-20 16:51:30.377483
468e8fb9-b3bb-41de-a19e-c4137cdf4598	d0071d1a-af12-4129-87de-d6d354a44286	72ccd635-5052-4857-9cb6-adf8a0a437bd	2025-05-21 09:19:24.015511
463e1d39-e895-4301-8a4d-dacd2fde9fca	a1558ee1-7fc0-4ff5-80df-114d25124b28	3f82f227-8dfd-424a-9f39-b89853ef8e74	2025-07-06 00:10:14.50856
c75f1c11-d0d0-4eef-832e-8b6a18b35d92	a1558ee1-7fc0-4ff5-80df-114d25124b28	1dd60983-6eaa-44b5-a070-376ed08d2cb7	2025-07-06 23:53:05.871329
dd902153-4110-4385-a8c0-15d00f16a6c2	a1558ee1-7fc0-4ff5-80df-114d25124b28	98719c52-cea5-4cd2-ac16-4c073fa68240	2025-07-09 22:10:53.748634
\.


--
-- Data for Name: item_details; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.item_details (item_id, full_description, full_label, supplier, ingridients, nutrition, supplier_link) FROM stdin;
72ccd635-5052-4857-9cb6-adf8a0a437bd	Delicious and crunchy corn chips with a light touch of sea salt.	Catrios Classic Salt Corn Chips 150g	Catrios Snacks Co.	Corn, Vegetable Oil, Sea Salt	Per 100g: 480 calories, 22g fat, 60g carbs, 5g protein	https://www.google.com/search?q=catrios+snacks&oq=catrios+snacks&
98719c52-cea5-4cd2-ac16-4c073fa68240	Crispy, savory chips with a tangy paprika flavor.	Chvatjners Paprika Chips 150g	Chvatjners Inc	Potatoes, Paprika, Sunflower Oil, Salt	Per 100g: 500 calories, 50g carbohydrates, 4g protein, 30g fat	https://www.google.com/search?q=catrios+snacks&oq=catrios+snacks&
91488e11-cda3-4e00-b482-0cf21fbc95ea	A delightful mystery box filled with a variety of delicious, handpicked sweets. Perfect for those who love surprises, each box contains an assortment of candies, chocolates, and treats, offering a unique combination in every purchase. Whether you're in the mood for something fruity, chocolaty, or tangy, the Standard Sweets Secretbox has something to satisfy your sweet tooth.	Standard Sweets Secretbox	Sweet Surprise Co.	Varies depending on contents. May include chocolate, caramel, fruit gummies, sugar, corn syrup, artificial flavors, and natural ingredients.	Per 100g: 400 calories, 60g carbohydrates, 2g protein, 20g fat	https://www.google.com/search?q=catrios+snacks&oq=sweet+surprise&
1dd60983-6eaa-44b5-a070-376ed08d2cb7	Delicious and crunchy cheese-flavored corn chips made from high-quality corn, fried to perfection in vegetable oil, and coated with a rich and savory cheese seasoning. These chips offer a bold and satisfying taste with every bite, making them the perfect snack for cheese lovers. Ideal for enjoying alone or sharing with friends during movie nights, parties, or any casual gathering.	Drolh-Rasun Cheesy Corn Chips 150g	Drolh-Rasun Snack Foods Ltd.	Corn, Vegetable Oil, Cheese Powder, Whey Powder, Skimmed Milk, Salt, Yeast Extract, Onion Powder, Garlic Powder, Natural Flavors, Lactic Acid, Annatto for Color	Per 100g: 510 calories, 25g fat, 58g carbs, 6g protein, 2g fiber, 1.2g sodium	https://www.google.com/search?q=catrios+snacks&oq=drolh+rasun+snack+foods
27f1c245-5886-4344-a02e-4d2535e25370	MegaxJuice is a delicious, revitalizing fruit juice blend packed with natural flavors and essential vitamins. Perfect for a refreshing boost at any time of day, this juice is made from high-quality ingredients with no added preservatives or artificial sweeteners.	MegaxJuice Natural Fruit Blend 500ml	MegaDrinks Co.	Water, Apple Juice Concentrate, Orange Juice Concentrate, Natural Flavors, Citric Acid, Vitamin C (Ascorbic Acid)	Per 100ml: Energy 45kcal, Fat 0g (of which saturates 0g), Carbohydrates 11g (of which sugars 10g), Protein 0g, Salt 0g, Vitamin C 12mg (15% NRV)	/megadrinks-co
3f82f227-8dfd-424a-9f39-b89853ef8e74	Freshly popped corn with a zesty lime twist for a unique and refreshing snack experience.	Lime Popcorn 100g	Green Snack Co.	Popcorn, Vegetable Oil, Lime Flavoring, Salt	Per 100g: 420 calories, 18g fat, 55g carbs, 6g protein	https://www.google.com/search?q=green+snack+co
fc6562e8-b614-4176-98a5-4abfef0cef9c	Made with high-quality milk, natural vanilla extract, and blended to perfection for a smooth and satisfying drink.	Classic Vanilla Milkshake	Happy Cow Dairies	Milk, Sugar, Vanilla Extract, Ice Cream	Per 100ml: 120 kcal, 3g protein, 5g fat, 15g carbohydrates	https://happycowdairies.com
\.


--
-- Data for Name: item_details_translation; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.item_details_translation (id, item_id, full_description, full_label, supplier, ingridients, nutrition, lang_key) FROM stdin;
a106de2f-25cb-4408-b6bb-90054790ebae	98719c52-cea5-4cd2-ac16-4c073fa68240	Вкусные, пикантные чипсы с острым вкусом паприки.	Чипсы с паприкой Чхватйнерс 150г	КомпанияЧхватйнерс	Картофель, Паприка, Подсолнечное масло, Соль	На 100 г: 500 калорий, 50 г углеводов, 4 г белка, 30 г жиров	ru
611dc0dc-1d81-46d2-884c-0fe71d35377d	3f82f227-8dfd-424a-9f39-b89853ef8e74	Свежевскрытый попкорн с пикантным лаймовым акцентом для уникального и освежающего перекуса	Лаймовый попкорн 100 г	Компания Грин Снэк	Попкорн, растительное масло, ароматизатор лайма, соль	На 100г: 420 калорий, 18г жиров, 55г углеводов, 6г белков	ru
1b47cc71-c048-4899-9acc-1313355d3311	72ccd635-5052-4857-9cb6-adf8a0a437bd	Delicious and crunchy corn chips with a light touch of sea salt.	Catrios Classic Salt Corn Chips 150g	Catrios Snacks Co.	Corn, Vegetable Oil, Sea Salt	Per 100g: 480 calories, 22g fat, 60g carbs, 5g protein	en
44253d26-5866-4c0f-b6f0-1f84a54bb93a	72ccd635-5052-4857-9cb6-adf8a0a437bd	Вкусные и хрустящие кукурузные чипсы с лёгким привкусом морской соли.	Кэтриос Классические Кукурузные Чипсы с Солью 150г	Кэтриос Снэкс Ко.	Кукуруза, растительное масло, морская соль	На 100г: 480 калорий, 22г жиров, 60г углеводов, 5г белка	ru
57647768-2e91-40d7-8139-9d7ae748aca5	91488e11-cda3-4e00-b482-0cf21fbc95ea	A delightful mystery box filled with a variety of delicious, handpicked sweets. Perfect for those who love surprises, each box contains an assortment of candies, chocolates, and treats, offering a unique combination in every purchase. Whether you’re in the mood for something fruity, chocolaty, or tangy, the Standard Sweets Secretbox has something to satisfy your sweet tooth.	Standard Sweets Secretbox	Sweet Surprise Co.	Varies depending on contents. May include chocolate, caramel, fruit gummies, sugar, corn syrup, artificial flavors, and natural ingredients.	Per 100g: 400 calories, 60g carbohydrates, 2g protein, 20g fat	en
3c6a6176-f2a6-4032-a31a-4fddc09b815a	91488e11-cda3-4e00-b482-0cf21fbc95ea	Восхитительная коробка-сюрприз с разнообразными вкусными сладостями. Идеально для тех, кто любит сюрпризы: каждая коробка содержит случайный набор конфет, шоколада и других угощений. Внутри могут быть фруктовые, шоколадные или кисленькие лакомства – на любой вкус!	Стандартная Коробка Сладостей-сюрпризов	Свит Сюрпрайз Ко.	Состав зависит от содержимого. Может включать шоколад, карамель, фруктовые жевательные конфеты, сахар, кукурузный сироп, ароматизаторы и натуральные ингредиенты.	На 100г: 400 калорий, 60г углеводов, 2г белка, 20г жиров	ru
7d0b9109-5d15-4ac1-8187-ac38ff14c7a9	1dd60983-6eaa-44b5-a070-376ed08d2cb7	Delicious and crunchy cheese-flavored corn chips made from high-quality corn, fried to perfection in vegetable oil, and coated with a rich and savory cheese seasoning. These chips offer a bold and satisfying taste with every bite, making them the perfect snack for cheese lovers. Ideal for enjoying alone or sharing with friends during movie nights, parties, or any casual gathering.	Drolh-Rasun Cheesy Corn Chips 150g	Drolh-Rasun Snack Foods Ltd.	Corn, Vegetable Oil, Cheese Powder, Whey Powder, Skimmed Milk, Salt, Yeast Extract, Onion Powder, Garlic Powder, Natural Flavors, Lactic Acid, Annatto for Color	Per 100g: 510 calories, 25g fat, 58g carbs, 6g protein, 2g fiber, 1.2g sodium	en
9459370d-994c-4f70-8941-97583967a3cb	1dd60983-6eaa-44b5-a070-376ed08d2cb7	Вкусные и хрустящие кукурузные чипсы со вкусом сыра, приготовленные из высококачественной кукурузы, обжаренные до хруста и покрытые насыщенной сырной приправой. Идеальны для перекуса в одиночку или в компании.	Сырные кукурузные чипсы Дролх-Расун 150г	Дролх-Расун Снэк Фудс Лтд.	Кукуруза, растительное масло, сырный порошок, молочная сыворотка, обезжиренное молоко, соль, экстракт дрожжей, луковый порошок, чесночный порошок, натуральные ароматизаторы, молочная кислота, аннато (краситель)	На 100г: 510 калорий, 25г жиров, 58г углеводов, 6г белка, 2г клетчатки, 1.2г натрия	ru
6f4f45d0-ee5e-4b33-9347-eb56d24099d4	27f1c245-5886-4344-a02e-4d2535e25370	MegaxJuice is a delicious, revitalizing fruit juice blend packed with natural flavors and essential vitamins. Perfect for a refreshing boost at any time of day, this juice is made from high-quality ingredients with no added preservatives or artificial sweeteners.	MegaxJuice Natural Fruit Blend 500ml	MegaDrinks Co.	Water, Apple Juice Concentrate, Orange Juice Concentrate, Natural Flavors, Citric Acid, Vitamin C (Ascorbic Acid)	Per 100ml: Energy 45kcal, Fat 0g (of which saturates 0g), Carbohydrates 11g (of which sugars 10g), Protein 0g, Salt 0g, Vitamin C 12mg (15% NRV)	en
8bb28e6c-d49f-4007-b20c-27919672de49	27f1c245-5886-4344-a02e-4d2535e25370	MegaxJuice — это вкусный и бодрящий фруктовый напиток, наполненный натуральными вкусами и витаминами. Отличный способ освежиться в любое время дня. Без консервантов и искусственных подсластителей.	MegaxJuice Натуральный Фруктовый Микс 500мл	МегаДринкс Ко.	Вода, концентрат яблочного сока, концентрат апельсинового сока, натуральные ароматизаторы, лимонная кислота, витамин C (аскорбиновая кислота)	На 100мл: 45 ккал, 0г жиров (в т.ч. насыщенных 0г), 11г углеводов (в т.ч. сахаров 10г), 0г белка, 0г соли, витамин C 12мг (15% НРВ)	ru
78bc43db-a05b-4511-a125-4733fd5f07d7	fc6562e8-b614-4176-98a5-4abfef0cef9c	Приготовлен из высококачественного молока, натурального ванильного экстракта и взбит до идеальной текстуры.	Классический ванильный молочный коктейль	Весёлая Коровка	Молоко, Сахар, Ванильный экстракт, Мороженое	На 100 мл: 120 ккал, 3 г белка, 5 г жиров, 15 г углеводов	ru
\.


--
-- Data for Name: item_image; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.item_image (id, title, alt, is_main, file_name, item_id) FROM stdin;
194353b9-ccf0-424b-a938-e200f0365655	Catrios classic salt chips image	Catrios classic salt chips image	t	catrios-classic-salt	72ccd635-5052-4857-9cb6-adf8a0a437bd
44e935d0-83de-46c1-952b-98e5c792c30d	Chvathners paprika chips	Chvathners paprika chips image	t	chvatjners-paprika-chips	98719c52-cea5-4cd2-ac16-4c073fa68240
f4184991-c0dc-4fbf-8bb2-ae3a650dbf3e	Chvathners paprika chips other taste	Chvathners paprika chips image other taste	f	chvatjners-paprika-chips_other_taste	98719c52-cea5-4cd2-ac16-4c073fa68240
39bd05d1-30be-4e78-9097-3f6449fb1eff	Drolh cheesy chips	Drolh cheesy chips image	t	drolh-chips	1dd60983-6eaa-44b5-a070-376ed08d2cb7
7725c48c-ca70-421b-afef-9b8c0f89dad2	Rasun chips	Rasun chips image	f	rasun-chips	1dd60983-6eaa-44b5-a070-376ed08d2cb7
0d9e56c8-7e31-4548-9f1c-2d7df4f479ef	Sweets secretbox	Sweets secretbox image	t	secretbox-sweets-standard	91488e11-cda3-4e00-b482-0cf21fbc95ea
ba9d55aa-e3d8-4a07-9016-f10b114defc6	Megax orange juice	Megax orange juice image	t	megax-juice-orange	27f1c245-5886-4344-a02e-4d2535e25370
d1f7d1bc-4b9d-427e-a6d1-b387b920ed69	Megax strawberry juice	Megax strawberry juice image	f	megax-juice-strawberry	27f1c245-5886-4344-a02e-4d2535e25370
bbdfadc2-6fd4-4872-ba92-568966e5a485	Lime Popcorn pack on table	Open lime popcorn pack on wooden table	t	lime_popcorn_1	3f82f227-8dfd-424a-9f39-b89853ef8e74
c26e03da-2f71-4f08-b4d5-0544a727216d	Lime Popcorn spilling out	Lime popcorn spilling from pack	f	lime_popcorn_2	3f82f227-8dfd-424a-9f39-b89853ef8e74
bc97ff16-3aaa-4f85-ba3c-9c241c274ca7	Close-up view of Lime Popcorn	Close-up of lime popcorn kernels	f	lime_popcorn_3	3f82f227-8dfd-424a-9f39-b89853ef8e74
47aa2abe-f558-4a32-b53a-d71795a8e953	Upright Lime Popcorn pack	Lime popcorn pack standing upright	f	lime_popcorn_4	3f82f227-8dfd-424a-9f39-b89853ef8e74
34e4a26e-f2af-4c10-9f8f-44a74c81cb28	Lime Popcorn with green theme	Lime popcorn on green background	f	lime_popcorn_5	3f82f227-8dfd-424a-9f39-b89853ef8e74
8e4796d0-be04-4dd3-ad2d-b80a8ee06e1d	Lime Popcorn in hand	Hand holding open lime popcorn pack	f	lime_popcorn_6	3f82f227-8dfd-424a-9f39-b89853ef8e74
e1b9f9bf-1460-487d-beba-da9ab03e1351	Top view Lime Popcorn	Top view of open lime popcorn pack	f	lime_popcorn_7	3f82f227-8dfd-424a-9f39-b89853ef8e74
e8dba6f1-9edf-4583-a9e9-5b4b6d7582f0	Scattered Lime Popcorn kernels	Lime popcorn pack with scattered kernels	f	lime_popcorn_8	3f82f227-8dfd-424a-9f39-b89853ef8e74
56c6657f-cd4e-4a03-8478-f39661c64ded	Lime Popcorn and limes	Lime popcorn pack with fresh limes	f	lime_popcorn_9	3f82f227-8dfd-424a-9f39-b89853ef8e74
ec522d6a-8ff8-42ef-9641-495a10c411da	Lime Popcorn for movie night	Lime popcorn pack near movie clapperboard	f	lime_popcorn_10	3f82f227-8dfd-424a-9f39-b89853ef8e74
ba4e8ee9-2c3a-48d8-bc0c-b943439eb3a7	Vanilla Milkshake Main Image	Glass of vanilla milkshake with a straw	t	vanilla_milkshake_main	fc6562e8-b614-4176-98a5-4abfef0cef9c
a38618ec-676f-481f-907d-a5b2206c3072	Top View of Vanilla Milkshake	Top view of vanilla milkshake with whipped cream	f	vanilla_milkshake_top	fc6562e8-b614-4176-98a5-4abfef0cef9c
59e9d5be-6289-45c1-a349-441a6603698e	Vanilla Milkshake with Ingredients	Vanilla milkshake surrounded by milk, vanilla pods, and ice cream	f	vanilla_milkshake_ingredients	fc6562e8-b614-4176-98a5-4abfef0cef9c
2e18c171-6d57-4275-a1b5-a7887d237885	Close-up of Vanilla Milkshake	Close-up of creamy vanilla milkshake	f	vanilla_milkshake_closeup	fc6562e8-b614-4176-98a5-4abfef0cef9c
\.


--
-- Data for Name: items; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.items (id, label, price, old_price, description, is_bestseller, page_link, category_id, type_id, is_secretbox) FROM stdin;
72ccd635-5052-4857-9cb6-adf8a0a437bd	Catrios Classic Salt	2.99	3.89	Crispy salted chips	t	/catrios-classic-salt	bbaf2417-4c2c-4bf1-854b-2ba4d020c018	4036002d-d64f-46ec-b688-aaddb05273ec	f
98719c52-cea5-4cd2-ac16-4c073fa68240	Chvatjners Paprika Chips	2.99	3.49	Crispy paprika chips	f	/chvatjners-paprika-chips	bbaf2417-4c2c-4bf1-854b-2ba4d020c018	4036002d-d64f-46ec-b688-aaddb05273ec	f
91488e11-cda3-4e00-b482-0cf21fbc95ea	Standard sweets secretbox	19.99	25.49	Mysterios box with random sweets	t	/secretbox-sweets-standard	fa61b5e8-c44f-4dec-91fd-d28ad7538a24	\N	t
1dd60983-6eaa-44b5-a070-376ed08d2cb7	Drolh-Rasun Cheesy Delight	3.19	\N	Cheesy crispy chips	f	/drolh-rasun-cheesy-delight	bbaf2417-4c2c-4bf1-854b-2ba4d020c018	4036002d-d64f-46ec-b688-aaddb05273ec	f
27f1c245-5886-4344-a02e-4d2535e25370	MegaxJuice	7.99	\N	Mega tasty juice	\N	/megax-juice	d8a0d4c6-f0ef-4024-854b-a6c3dfaa6d4b	62d4dd46-bf34-4ac7-8f07-1700f9d3d892	\N
3f82f227-8dfd-424a-9f39-b89853ef8e74	Lime Popcorn	4.99	\N	Crispy popcorn with refreshing lime flavor	\N	/lime-popcorn	bbaf2417-4c2c-4bf1-854b-2ba4d020c018	ebe7ba4d-1c92-432f-977c-4ad7d0ccc07d	\N
d7099832-c75c-496a-be69-fcc8cde5eabd	test	666.00	\N	\N	\N	/test	\N	\N	\N
fc6562e8-b614-4176-98a5-4abfef0cef9c	Vanilla Milkshake	4.99	5.49	A refreshing vanilla milkshake made with real milk and vanilla beans.	t	/vanilla-milkshake	d8a0d4c6-f0ef-4024-854b-a6c3dfaa6d4b	127334b8-b491-4e34-9358-f9fadbbc2378	f
\.


--
-- Data for Name: items_translation; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.items_translation (id, item_id, label, description, lang_key) FROM stdin;
00a2e1be-c3e1-426c-9ad2-ddf4f51ddd1c	98719c52-cea5-4cd2-ac16-4c073fa68240	Чипсы с паприкой Чхватйнерс	Хрустящие чипсы с паприкой	ru
531ea12c-4254-43f9-a500-6aaea6db6d27	98719c52-cea5-4cd2-ac16-4c073fa68240	Chvatjners Paprika Chips	Crispy paprika chips	en
4d7abbdb-ba14-40d9-8dee-7958ef7e830e	3f82f227-8dfd-424a-9f39-b89853ef8e74	Лаймовый попкорн	Хрустящий попкорн с освежающим вкусом лайма	ru
c1d7a5aa-6a67-4cfd-a15d-0bffb101c101	72ccd635-5052-4857-9cb6-adf8a0a437bd	Catrios Classic Salt	Crispy salted chips	en
2a59391a-876d-4ef4-b3bb-1e4fd1189d64	72ccd635-5052-4857-9cb6-adf8a0a437bd	Кэтриос Классические Соль	Хрустящие солёные чипсы	ru
3fbb8ad4-f5c4-498c-9b1e-6791fcbfba77	91488e11-cda3-4e00-b482-0cf21fbc95ea	Standard sweets secretbox	Mysterios box with random sweets	en
db02837f-302e-41ec-b60f-27d90ef3c30e	91488e11-cda3-4e00-b482-0cf21fbc95ea	Стандартная коробка конфет-сюрпризов	Таинственная коробка со случайными сладостями	ru
445fc2c7-2c0f-4d2c-91f4-2e6d65e50887	1dd60983-6eaa-44b5-a070-376ed08d2cb7	Drolh-Rasun Cheesy Delight	Cheesy crispy chips	en
8f7e4b46-b7a6-4662-a339-c57b1a055a25	1dd60983-6eaa-44b5-a070-376ed08d2cb7	Дролх-Расун Сырное Удовольствие	Хрустящие чипсы с сыром	ru
79abf8a1-bccf-4f62-b3c1-bdcb503d10cc	27f1c245-5886-4344-a02e-4d2535e25370	MegaxJuice	Mega tasty juice	en
905a4378-18f6-4d92-a3d0-57d4cb19c881	27f1c245-5886-4344-a02e-4d2535e25370	МегаксСок	Мега вкусный сок	ru
3d9e90b0-33c6-4414-8144-f7a31625cd98	fc6562e8-b614-4176-98a5-4abfef0cef9c	Ванильный молочный коктейль	Освежающий ванильный коктейль из настоящего молока и стручков ванили.	ru
\.


--
-- Data for Name: order_items; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.order_items (id, quantity, order_id, item_id) FROM stdin;
00fe5f60-1af7-43df-8b8f-7bb1e2bd1fda	1	f7199c04-8dd3-40d3-915a-7814033c5562	3f82f227-8dfd-424a-9f39-b89853ef8e74
afd7ed7e-1916-4234-94c3-572791791eae	1	f7199c04-8dd3-40d3-915a-7814033c5562	27f1c245-5886-4344-a02e-4d2535e25370
58e51f1f-48ce-4588-b71c-6175c9a0fbd2	1	70fd7937-ecad-4580-adeb-c1338b5ead8a	98719c52-cea5-4cd2-ac16-4c073fa68240
a1b4b183-baaa-4b94-94a8-a9800699966b	1	70fd7937-ecad-4580-adeb-c1338b5ead8a	72ccd635-5052-4857-9cb6-adf8a0a437bd
4cb73fb4-38d9-4676-8343-ec9826930f40	1	b4d16a1d-32e9-41bd-ac2c-77738a82c83e	98719c52-cea5-4cd2-ac16-4c073fa68240
a6885473-fe6b-4d50-b300-55a07a711a4b	1	b4d16a1d-32e9-41bd-ac2c-77738a82c83e	1dd60983-6eaa-44b5-a070-376ed08d2cb7
e41f4b89-e884-4109-9451-1c1d8acd12e0	1	b4d16a1d-32e9-41bd-ac2c-77738a82c83e	3f82f227-8dfd-424a-9f39-b89853ef8e74
42e3b29f-6afb-472c-957e-211ed8a9c120	1	738ee73a-d5ac-4d6a-a1ce-f7258fedc960	98719c52-cea5-4cd2-ac16-4c073fa68240
1207ed73-adbe-4d13-aeef-d794d78d5e30	3	0f9b80d4-dd4c-40d4-b908-bf426af79df3	91488e11-cda3-4e00-b482-0cf21fbc95ea
\.


--
-- Data for Name: orders; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.orders (id, user_id, created_at, status, pickup_point) FROM stdin;
f7199c04-8dd3-40d3-915a-7814033c5562	a1558ee1-7fc0-4ff5-80df-114d25124b28	2025-06-22 01:08:45.963392	processing	
70fd7937-ecad-4580-adeb-c1338b5ead8a	a1558ee1-7fc0-4ff5-80df-114d25124b28	2025-06-22 01:14:52.029324	processing	NY
b4d16a1d-32e9-41bd-ac2c-77738a82c83e	a1558ee1-7fc0-4ff5-80df-114d25124b28	2025-06-22 01:21:34.125368	processing	NY
738ee73a-d5ac-4d6a-a1ce-f7258fedc960	a1558ee1-7fc0-4ff5-80df-114d25124b28	2025-06-25 22:16:01.512745	processing	
0f9b80d4-dd4c-40d4-b908-bf426af79df3	a1558ee1-7fc0-4ff5-80df-114d25124b28	2025-07-08 23:37:01.625386	processing	NY
\.


--
-- Data for Name: reviews; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.reviews (id, text, rating, user_id, item_id, created_at) FROM stdin;
0c4074d8-a8b3-4ae1-b639-083fe27190a1	ok	3	d0071d1a-af12-4129-87de-d6d354a44286	27f1c245-5886-4344-a02e-4d2535e25370	2025-05-21 09:20:07.573275
61912b15-32a2-4a52-8a5a-9408b347d452	Super chips	4	3f0510c7-5bb0-4de7-839b-d1e9e3bba665	72ccd635-5052-4857-9cb6-adf8a0a437bd	2025-05-21 14:14:45.257349
9a083953-ee41-478c-baf4-94da8c323f48		5	a1558ee1-7fc0-4ff5-80df-114d25124b28	98719c52-cea5-4cd2-ac16-4c073fa68240	2025-06-23 05:34:19.760901
6413413e-9734-4bb0-87ad-aff7b9bd2b32		5	a1558ee1-7fc0-4ff5-80df-114d25124b28	72ccd635-5052-4857-9cb6-adf8a0a437bd	2025-07-06 23:46:45.800984
\.


--
-- Data for Name: type_translation; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.type_translation (id, type_id, name, lang_key) FROM stdin;
cb5b4deb-e6af-4309-9d7d-94a3d9f65246	ebe7ba4d-1c92-432f-977c-4ad7d0ccc07d	Попкорн	ru
016afbc2-b1ea-49aa-9631-037c9b866229	ced40972-b8b9-4ebd-a7f7-405b2f6196f3	Крекеры	ru
7d4e3d37-d08e-4c35-8c5b-b32dce130a4d	4036002d-d64f-46ec-b688-aaddb05273ec	Чипсы	ru
9f5250dc-ab74-475e-b269-e63add01cffe	62d4dd46-bf34-4ac7-8f07-1700f9d3d892	Соки	ru
70023356-0592-4ab8-ba16-193117251f5c	127334b8-b491-4e34-9358-f9fadbbc2378	Молочные коктейли	ru
db5b4820-4f92-49e4-aa46-0065f674b426	fe114c51-1fa2-4dca-9731-32acf70d9dba	Конфеты	ru
109de313-e7e0-46bc-a4a9-58e6ae6e96c1	fad6568f-f1c8-40b1-95c6-5e17f0895d44	Жевательная резинка	ru
f47ace3a-5d7e-4887-b6d4-e9bb11686544	a93cf4f7-03b1-46ab-808b-7d4f9385edb6	Печенье	ru
\.


--
-- Data for Name: types; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.types (id, name, page_link, category_id) FROM stdin;
ebe7ba4d-1c92-432f-977c-4ad7d0ccc07d	Popcorn	/products/snacks/popcorn	bbaf2417-4c2c-4bf1-854b-2ba4d020c018
ced40972-b8b9-4ebd-a7f7-405b2f6196f3	Crackers	/products/snacks/crackers	bbaf2417-4c2c-4bf1-854b-2ba4d020c018
4036002d-d64f-46ec-b688-aaddb05273ec	Chips	/products/snacks/chips	bbaf2417-4c2c-4bf1-854b-2ba4d020c018
62d4dd46-bf34-4ac7-8f07-1700f9d3d892	Juices	/products/drinks/juices	d8a0d4c6-f0ef-4024-854b-a6c3dfaa6d4b
127334b8-b491-4e34-9358-f9fadbbc2378	Milkshakes	/products/drinks/milkshakes	d8a0d4c6-f0ef-4024-854b-a6c3dfaa6d4b
fe114c51-1fa2-4dca-9731-32acf70d9dba	Candies	/products/sweets/candies	fa61b5e8-c44f-4dec-91fd-d28ad7538a24
fad6568f-f1c8-40b1-95c6-5e17f0895d44	Gum	/products/sweets/gum	fa61b5e8-c44f-4dec-91fd-d28ad7538a24
a93cf4f7-03b1-46ab-808b-7d4f9385edb6	Cookies	/products/sweets/cookies	fa61b5e8-c44f-4dec-91fd-d28ad7538a24
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, username, password, first_name, last_name, role, register_at) FROM stdin;
3f0510c7-5bb0-4de7-839b-d1e9e3bba665	polorari	$pbkdf2-sha512$25000$vHfOWYvxvncuBeDce0.JMQ$t0HQgppySEQTgiuOMBBSFxYFgm9EKeYOc9k/o7Ni7mBH6XuY30tsPzf8XghcuNIhnwMCbfT6qARkpscp3ZxEVA	jonn	babik	user	2025-07-08 00:00:00
d0071d1a-af12-4129-87de-d6d354a44286	maximus	$pbkdf2-sha512$25000$Y2yNUaoV4tzbu9f6vzeGsA$DBrG.0VrhVACHYfarS71TRVP2/KEXcgXJLIbvfpY7Dj6b4oGUY0uXKl7S60U4ggPTSje87oGwic5T2KOGKNM0Q	Max	Kowalsky	user	2025-07-08 00:00:00
a1558ee1-7fc0-4ff5-80df-114d25124b28	john_doe	$pbkdf2-sha512$25000$/Z/T2rs3Zsz5X8sZ49wbQw$lw0/j.k4GL7b5MQ7H.aDt.MfmbQmV2XSfUOC8OlT3I/T5Xq1VgEwq4ejhDkOKVgZvxDVbdOfrMoqxCJS6cuQVw	John	Doe	admin	2025-07-08 00:00:00
fa2bfb00-e761-46df-bf53-3c3c03b124fc	testtest	$pbkdf2-sha512$25000$/z.nVIqRkhICIKQUYoyRUg$w4wDk0ur18y7ueZ4l.64vOYHRc78CtsYxqm/HWPApObCECWA/iFGBEtpDJRMQl5v0iPa0mFqPHV4h5J32cppGA	testtest	testtest	user	2025-07-09 23:02:21.825932
\.


--
-- Name: alembic_version alembic_version_pkc; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.alembic_version
    ADD CONSTRAINT alembic_version_pkc PRIMARY KEY (version_num);


--
-- Name: categories categories_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pkey PRIMARY KEY (id);


--
-- Name: category_translation category_translation_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.category_translation
    ADD CONSTRAINT category_translation_pkey PRIMARY KEY (id);


--
-- Name: favorites favorite_uix_user_item; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.favorites
    ADD CONSTRAINT favorite_uix_user_item UNIQUE (user_id, item_id);


--
-- Name: favorites favorites_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.favorites
    ADD CONSTRAINT favorites_pkey PRIMARY KEY (id);


--
-- Name: item_details item_details_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.item_details
    ADD CONSTRAINT item_details_pkey PRIMARY KEY (item_id);


--
-- Name: item_details_translation item_details_translation_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.item_details_translation
    ADD CONSTRAINT item_details_translation_pkey PRIMARY KEY (id);


--
-- Name: item_image item_image_file_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.item_image
    ADD CONSTRAINT item_image_file_name_key UNIQUE (file_name);


--
-- Name: item_image item_image_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.item_image
    ADD CONSTRAINT item_image_pkey PRIMARY KEY (id);


--
-- Name: items items_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.items
    ADD CONSTRAINT items_pkey PRIMARY KEY (id);


--
-- Name: items_translation items_translation_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.items_translation
    ADD CONSTRAINT items_translation_pkey PRIMARY KEY (id);


--
-- Name: order_items order_items_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.order_items
    ADD CONSTRAINT order_items_pkey PRIMARY KEY (id);


--
-- Name: orders orders_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY (id);


--
-- Name: reviews reviews_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reviews
    ADD CONSTRAINT reviews_pkey PRIMARY KEY (id);


--
-- Name: type_translation type_translation_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.type_translation
    ADD CONSTRAINT type_translation_pkey PRIMARY KEY (id);


--
-- Name: types types_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.types
    ADD CONSTRAINT types_pkey PRIMARY KEY (id);


--
-- Name: category_translation uix_category_translation; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.category_translation
    ADD CONSTRAINT uix_category_translation UNIQUE (category_id, lang_key);


--
-- Name: item_details_translation uix_item_details_translation; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.item_details_translation
    ADD CONSTRAINT uix_item_details_translation UNIQUE (item_id, lang_key);


--
-- Name: items_translation uix_item_translation; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.items_translation
    ADD CONSTRAINT uix_item_translation UNIQUE (item_id, lang_key);


--
-- Name: type_translation uix_type_translation; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.type_translation
    ADD CONSTRAINT uix_type_translation UNIQUE (type_id, lang_key);


--
-- Name: reviews uix_user_item; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reviews
    ADD CONSTRAINT uix_user_item UNIQUE (user_id, item_id);


--
-- Name: items uq_items_page_link; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.items
    ADD CONSTRAINT uq_items_page_link UNIQUE (page_link);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: users users_username_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_username_key UNIQUE (username);


--
-- Name: category_translation category_translation_category_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.category_translation
    ADD CONSTRAINT category_translation_category_id_fkey FOREIGN KEY (category_id) REFERENCES public.categories(id);


--
-- Name: favorites favorites_item_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.favorites
    ADD CONSTRAINT favorites_item_id_fkey FOREIGN KEY (item_id) REFERENCES public.items(id);


--
-- Name: favorites favorites_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.favorites
    ADD CONSTRAINT favorites_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- Name: item_details item_details_item_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.item_details
    ADD CONSTRAINT item_details_item_id_fkey FOREIGN KEY (item_id) REFERENCES public.items(id);


--
-- Name: item_details_translation item_details_translation_item_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.item_details_translation
    ADD CONSTRAINT item_details_translation_item_id_fkey FOREIGN KEY (item_id) REFERENCES public.item_details(item_id);


--
-- Name: item_image item_image_item_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.item_image
    ADD CONSTRAINT item_image_item_id_fkey FOREIGN KEY (item_id) REFERENCES public.items(id);


--
-- Name: items items_category_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.items
    ADD CONSTRAINT items_category_id_fkey FOREIGN KEY (category_id) REFERENCES public.categories(id);


--
-- Name: items_translation items_translation_item_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.items_translation
    ADD CONSTRAINT items_translation_item_id_fkey FOREIGN KEY (item_id) REFERENCES public.items(id);


--
-- Name: items items_type_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.items
    ADD CONSTRAINT items_type_id_fkey FOREIGN KEY (type_id) REFERENCES public.types(id);


--
-- Name: order_items order_items_item_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.order_items
    ADD CONSTRAINT order_items_item_id_fkey FOREIGN KEY (item_id) REFERENCES public.items(id);


--
-- Name: order_items order_items_order_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.order_items
    ADD CONSTRAINT order_items_order_id_fkey FOREIGN KEY (order_id) REFERENCES public.orders(id);


--
-- Name: orders orders_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- Name: reviews reviews_item_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reviews
    ADD CONSTRAINT reviews_item_id_fkey FOREIGN KEY (item_id) REFERENCES public.items(id);


--
-- Name: reviews reviews_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reviews
    ADD CONSTRAINT reviews_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- Name: type_translation type_translation_type_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.type_translation
    ADD CONSTRAINT type_translation_type_id_fkey FOREIGN KEY (type_id) REFERENCES public.types(id);


--
-- Name: types types_category_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.types
    ADD CONSTRAINT types_category_id_fkey FOREIGN KEY (category_id) REFERENCES public.categories(id);


--
-- PostgreSQL database dump complete
--

