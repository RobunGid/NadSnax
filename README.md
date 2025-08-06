<div align="left" style="position: relative;">
<img src="https://github.com/RobunGid/NadSnax/blob/main/frontend/src/assets/logo.png?raw=true" align="right" width="30%" style="margin: -20px 0 0 20px;">
<h1>NADSNAX</h1>
<p align="left">
	<em><code>❯ By RobunGid</code></em>
</p>
<p align="left">
	<img src="https://img.shields.io/github/license/RobunGid/NadSnax?style=default&logo=opensourceinitiative&logoColor=white&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/RobunGid/NadSnax?style=default&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/RobunGid/NadSnax?style=default&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/RobunGid/NadSnax?style=default&color=0080ff" alt="repo-language-count">
</p>
<p align="left"><!-- default option, no dependency badges. -->
</p>
<p align="left">
	<!-- default option, no dependency badges. -->
</p>
</div>
<br clear="right">

##  Table of Contents

- [ Overview](#-overview)
- [ Features](#-features)
- [ Project Structure](#-project-structure)
- [ Getting Started](#-getting-started)
  - [ Prerequisites](#-prerequisites)
  - [ Installation](#-installation)
  - [ Usage](#-usage)
- [ Project Roadmap](#-project-roadmap)
- [ Contributing](#-contributing)
- [ License](#-license)
- [ Acknowledgments](#-acknowledgments)

---

##  Overview

This is a full-stack eCommerce platform built with a modern technology stack, designed to support multilingual user interfaces, responsive design, and a scalable admin system.

🛠 Technologies Used

**Frontend:** React, Redux Toolkit, Tailwind CSS, Vite

**Backend:** Python, Flask, PostgreSQL, SQLAlchemy

**DevOps:** Docker, Docker Compose

**Other:** JWT for auth, REST API, image hosting, responsive design

---

##  Features

Product catalog with ratings, reviews, and image galleries

Multilingual support (i18n) with dynamic language switching

Secure user authentication and profile management

Cart system with quantity controls and checkout

Admin control panel for managing items, users, and orders

Light/dark theme switching and mobile responsiveness

Avatar upload and edit, favorite items, order history

Simillar items and best seller sections

---

##  Project Structure

```sh
└── NadSnax/
    ├── README.md
    ├── backend
    │   ├── .dockerignore
    │   ├── .env.example
    │   ├── .gitignore
    │   ├── Dockerfile
    │   ├── app.py
    │   ├── blocklist.py
    │   ├── constants.py
    │   ├── db.py
    │   ├── keysets
    │   ├── models
    │   ├── requirements.txt
    │   ├── resources
    │   ├── schemas
    │   └── utils.py
    ├── docker-compose.yml
    ├── frontend
    │   ├── .dockerignore
    │   ├── .env.example
    │   ├── .gitignore
    │   ├── .prettierignore
    │   ├── .prettierrc
    │   ├── Dockerfile
    │   ├── eslint.config.js
    │   ├── index.html
    │   ├── nginx.conf
    │   ├── package-lock.json
    │   ├── package.json
    │   ├── public
    │   ├── src
    │   ├── tsconfig.app.json
    │   ├── tsconfig.json
    │   ├── tsconfig.node.json
    │   └── vite.config.ts
    └── resources
        ├── avatars
        ├── icons
        └── images
```


---
##  Getting Started

###  Prerequisites and technologies

#### 🧩 Frontend
React
TypeScript
Tailwind CSS
Redux
Redux Toolkit
Vite
React Router
Axios
ESLint
Prettier

#### 🔧 Backend
Python
Flask
Flask-Smorest
Marshmallow
SQLAlchemy
Gunicorn
PostgreSQL

#### 📦 Additionally
Docker
Nginx
Git


###  Installation

Install NadSnax using one of the following methods:

**Build from source:**

1. Clone the NadSnax repository:
```sh
❯ git clone https://github.com/RobunGid/NadSnax
```

2. Navigate to the project directory:
```sh
❯ cd NadSnax
```

3. Create and fill frontend .env file 
```sh
❯ cp .env.example .env
```
4. Create and fill backend .env file

```sh
❯ cp .env.example .env
```

5. Insert mock data if necessary

```sh
docker exec -i nadsnax-database psql -U USERNAME -d DATABASE_NAME < ./insert_mock.sql
cp ./mock_images ./resources/images/
```

6. Run docker compose [<img align="center" src="https://img.shields.io/badge/Docker-2CA5E0.svg?style={badge_style}&logo=docker&logoColor=white" />](https://www.docker.com/)
```sh
❯ docker compose up
```

---
##  Project Roadmap

* [x] **Initial Backend Setup**: REST API creation with authentication, basic CRUD operations for items, users, and orders
* [x] **Frontend MVP**: Core pages including item listing, product details, cart, and checkout
* [x] **i18n Integration**: Multilingual support using i18n with translations for major UI components
* [x] **Dark Mode**: Theme toggling with dark/light mode support across the site
* [x] **Admin Panel**: Control panel for managing items, users, and orders
* [x] **Avatar Support**: Add, edit, and delete user avatars
* [x] **Ratings & Reviews**: Rating system for products with average rating and review count
* [x] **Cart System**: Add to cart, update quantity, delete, and checkout flow
* [x] **Responsive UI**: Mobile/tablet/desktop support with UI fixes
* [x] **Docker Support**: Dockerfile and Compose for easier deployment
* [x] **Favorite Items**: Users can mark and manage favorite items
* [x] **Image Hosting**: Product image upload and integration with hosting
* [x] **Simillar Items & Recommendations**: Show related products on product detail page
* [x] **Best Sellers**: Static mock implementation of most popular items
* [x] **User Profile Management**: User can edit profile info and view order history

---

### Upcoming Features

* [ ] **Better accessibility**: Better loading, error handling, etc.
* [ ] **Pagination**: Add pagination to item lists for performance and UX
* [ ] **Search Functionality**: Full-site search with filters and suggestions
* [ ] **Admin Order Management**: Update order status, filter by state, view full order details
* [ ] **Admin User Management**: View, update, and delete user accounts with roles
* [ ] **Notifications System**: For order updates, messages, and account alerts
* [ ] **Email Integration**: Email notifications for orders and authentication
* [ ] **Item Variants**: Support for multiple sizes, colors, or versions of a product
* [ ] **SEO Improvements**: Add metadata, sitemap, and improve accessibility
* [ ] **Performance Optimization**: Lazy loading, code splitting, and caching strategies
* [ ] **Analytics Dashboard**: Track sales, user activity, and system metrics



---

##  Contributing

- <strike>**💬 [Join the Discussions](https://github.com/RobunGid/NadSnax/discussions)**: Share your insights, provide feedback, or ask questions.</strike>
- **🐛 [Report Issues](https://github.com/RobunGid/NadSnax/issues)**: Submit bugs found or log feature requests for the `NadSnax` project.
- **💡 [Submit Pull Requests](https://github.com/RobunGid/NadSnax/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone https://github.com/RobunGid/NadSnax
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to github**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="left">
   <a href="https://github.com{/RobunGid/NadSnax/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=RobunGid/NadSnax">
   </a>
</p>
</details>

---

##  License

This project is protected under the [MIT](https://choosealicense.com/licenses/mit/) License

---

##  Acknowledgments



---