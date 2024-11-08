/*
 Navicat Premium Dump SQL

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 80300 (8.3.0)
 Source Host           : localhost:3306
 Source Schema         : alpagu

 Target Server Type    : MySQL
 Target Server Version : 80300 (8.3.0)
 File Encoding         : 65001

 Date: 08/11/2024 13:43:31
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for blog_articles
-- ----------------------------
DROP TABLE IF EXISTS `blog_articles`;
CREATE TABLE `blog_articles` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `author_id` bigint unsigned NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `view_count` int NOT NULL DEFAULT '0',
  `can_view` enum('1','0') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `blog_articles_author_id_foreign` (`author_id`),
  CONSTRAINT `blog_articles_author_id_foreign` FOREIGN KEY (`author_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of blog_articles
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for blog_categories
-- ----------------------------
DROP TABLE IF EXISTS `blog_categories`;
CREATE TABLE `blog_categories` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of blog_categories
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for blog_category_blog_articles
-- ----------------------------
DROP TABLE IF EXISTS `blog_category_blog_articles`;
CREATE TABLE `blog_category_blog_articles` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `category_id` bigint unsigned NOT NULL,
  `article_id` bigint unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `blog_category_blog_articles_category_id_foreign` (`category_id`),
  KEY `blog_category_blog_articles_article_id_foreign` (`article_id`),
  CONSTRAINT `blog_category_blog_articles_article_id_foreign` FOREIGN KEY (`article_id`) REFERENCES `blog_articles` (`id`) ON DELETE CASCADE,
  CONSTRAINT `blog_category_blog_articles_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `blog_categories` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of blog_category_blog_articles
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for cache
-- ----------------------------
DROP TABLE IF EXISTS `cache`;
CREATE TABLE `cache` (
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` int NOT NULL,
  PRIMARY KEY (`key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of cache
-- ----------------------------
BEGIN;
INSERT INTO `cache` (`key`, `value`, `expiration`) VALUES ('356a192b7913b04c54574d18c28d46e6395428ab', 'i:2;', 1731026338);
INSERT INTO `cache` (`key`, `value`, `expiration`) VALUES ('356a192b7913b04c54574d18c28d46e6395428ab:timer', 'i:1731026338;', 1731026338);
INSERT INTO `cache` (`key`, `value`, `expiration`) VALUES ('da4b9237bacccdf19c0760cab7aec4a8359010b0', 'i:1;', 1731016327);
INSERT INTO `cache` (`key`, `value`, `expiration`) VALUES ('da4b9237bacccdf19c0760cab7aec4a8359010b0:timer', 'i:1731016327;', 1731016327);
INSERT INTO `cache` (`key`, `value`, `expiration`) VALUES ('example@example.com|127.0.0.1', 'i:1;', 1731016482);
INSERT INTO `cache` (`key`, `value`, `expiration`) VALUES ('example@example.com|127.0.0.1:timer', 'i:1731016482;', 1731016482);
COMMIT;

-- ----------------------------
-- Table structure for cache_locks
-- ----------------------------
DROP TABLE IF EXISTS `cache_locks`;
CREATE TABLE `cache_locks` (
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `owner` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` int NOT NULL,
  PRIMARY KEY (`key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of cache_locks
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for failed_jobs
-- ----------------------------
DROP TABLE IF EXISTS `failed_jobs`;
CREATE TABLE `failed_jobs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of failed_jobs
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for job_batches
-- ----------------------------
DROP TABLE IF EXISTS `job_batches`;
CREATE TABLE `job_batches` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `total_jobs` int NOT NULL,
  `pending_jobs` int NOT NULL,
  `failed_jobs` int NOT NULL,
  `failed_job_ids` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `options` mediumtext COLLATE utf8mb4_unicode_ci,
  `cancelled_at` int DEFAULT NULL,
  `created_at` int NOT NULL,
  `finished_at` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of job_batches
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for jobs
-- ----------------------------
DROP TABLE IF EXISTS `jobs`;
CREATE TABLE `jobs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `queue` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `attempts` tinyint unsigned NOT NULL,
  `reserved_at` int unsigned DEFAULT NULL,
  `available_at` int unsigned NOT NULL,
  `created_at` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `jobs_queue_index` (`queue`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of jobs
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for localization_terms
-- ----------------------------
DROP TABLE IF EXISTS `localization_terms`;
CREATE TABLE `localization_terms` (
  `localization_code` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `term` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  KEY `localization_terms_localization_code_foreign` (`localization_code`),
  CONSTRAINT `localization_terms_localization_code_foreign` FOREIGN KEY (`localization_code`) REFERENCES `localizations` (`code`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of localization_terms
-- ----------------------------
BEGIN;
INSERT INTO `localization_terms` (`localization_code`, `term`, `content`) VALUES ('tr', 'Hello, World!', 'Merhaba, Dünya!');
INSERT INTO `localization_terms` (`localization_code`, `term`, `content`) VALUES ('en', 'Hello, World!', 'Hello, World!');
INSERT INTO `localization_terms` (`localization_code`, `term`, `content`) VALUES ('tr', 'Search', 'Ara');
INSERT INTO `localization_terms` (`localization_code`, `term`, `content`) VALUES ('en', 'Search', 'Search');
INSERT INTO `localization_terms` (`localization_code`, `term`, `content`) VALUES ('tr', 'Developed by', '{{ name }} tarafından geliştirildi.');
INSERT INTO `localization_terms` (`localization_code`, `term`, `content`) VALUES ('en', 'Developed by', 'Developed by {{ name }}');
INSERT INTO `localization_terms` (`localization_code`, `term`, `content`) VALUES ('en', 'All Rights Reserved', 'All Rights Reserved.');
INSERT INTO `localization_terms` (`localization_code`, `term`, `content`) VALUES ('tr', 'All Rights Reserved', 'Tüm Hakları Saklıdır.');
INSERT INTO `localization_terms` (`localization_code`, `term`, `content`) VALUES ('tr', 'Profile Information', 'Profil Bilgileri');
INSERT INTO `localization_terms` (`localization_code`, `term`, `content`) VALUES ('en', 'Profile Information', 'Profile Information');
INSERT INTO `localization_terms` (`localization_code`, `term`, `content`) VALUES ('tr', 'Update your account\'s profile information and email address.', 'Profil bilgilerini ve e-posta adresini güncelle.');
INSERT INTO `localization_terms` (`localization_code`, `term`, `content`) VALUES ('en', 'Update your account\'s profile information and email address.', 'Update your account\'s profile information and email address.');
INSERT INTO `localization_terms` (`localization_code`, `term`, `content`) VALUES ('tr', 'Name', 'İsim');
INSERT INTO `localization_terms` (`localization_code`, `term`, `content`) VALUES ('en', 'Name', 'Name');
INSERT INTO `localization_terms` (`localization_code`, `term`, `content`) VALUES ('tr', 'Email', 'E-Posta');
INSERT INTO `localization_terms` (`localization_code`, `term`, `content`) VALUES ('en', 'Email', 'E-Mail');
INSERT INTO `localization_terms` (`localization_code`, `term`, `content`) VALUES ('tr', 'Your email address is unverified.', 'E-Posta adresin doğrulanmamış.');
INSERT INTO `localization_terms` (`localization_code`, `term`, `content`) VALUES ('en', 'our email address is unverified.', 'our email address is unverified.');
INSERT INTO `localization_terms` (`localization_code`, `term`, `content`) VALUES ('tr', 'Click here to re-send the verification email.', 'Doğrulama postası göndermek için buraya tıkla.');
INSERT INTO `localization_terms` (`localization_code`, `term`, `content`) VALUES ('en', 'Click here to re-send the verification email.', 'Click here to re-send the verification email.');
INSERT INTO `localization_terms` (`localization_code`, `term`, `content`) VALUES ('tr', 'Save', 'Kaydet');
INSERT INTO `localization_terms` (`localization_code`, `term`, `content`) VALUES ('en', 'Save', 'Save');
INSERT INTO `localization_terms` (`localization_code`, `term`, `content`) VALUES ('tr', 'Update Password', 'Şifreyi Güncelle');
INSERT INTO `localization_terms` (`localization_code`, `term`, `content`) VALUES ('en', 'Update Password', 'Update Password');
INSERT INTO `localization_terms` (`localization_code`, `term`, `content`) VALUES ('tr', 'Ensure your account is using a long, random password to stay secure.', 'Hesabınızın güvenliğini sağlamak için uzun ve rastgele bir parola kullandığınızdan emin olun.');
INSERT INTO `localization_terms` (`localization_code`, `term`, `content`) VALUES ('en', 'Ensure your account is using a long, random password to stay secure.', 'Ensure your account is using a long, random password to stay secure.');
INSERT INTO `localization_terms` (`localization_code`, `term`, `content`) VALUES ('tr', 'Current Password', 'Mevcut Şifren');
INSERT INTO `localization_terms` (`localization_code`, `term`, `content`) VALUES ('en', 'Current Password', 'Current Password');
INSERT INTO `localization_terms` (`localization_code`, `term`, `content`) VALUES ('tr', 'New Password', 'Yeni Şifren');
INSERT INTO `localization_terms` (`localization_code`, `term`, `content`) VALUES ('en', 'New Password', 'New Password');
INSERT INTO `localization_terms` (`localization_code`, `term`, `content`) VALUES ('tr', 'Confirm Password', 'Şifreyi Onayla');
INSERT INTO `localization_terms` (`localization_code`, `term`, `content`) VALUES ('en', 'Confirm Password', 'Confirm Password');
INSERT INTO `localization_terms` (`localization_code`, `term`, `content`) VALUES ('tr', 'Delete Account', 'Hesabı Sil');
INSERT INTO `localization_terms` (`localization_code`, `term`, `content`) VALUES ('en', 'Delete Account', 'Delete Account');
INSERT INTO `localization_terms` (`localization_code`, `term`, `content`) VALUES ('tr', 'Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain.', 'Hesabınız silindiğinde, tüm kaynakları ve verileri kalıcı olarak silinecektir. Hesabınızı silmeden önce, lütfen saklamak istediğiniz tüm verileri veya bilgileri indirin.');
INSERT INTO `localization_terms` (`localization_code`, `term`, `content`) VALUES ('en', 'Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain.', 'Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain.');
INSERT INTO `localization_terms` (`localization_code`, `term`, `content`) VALUES ('en', 'Are you sure you want to delete your account?', 'Are you sure you want to delete your account?');
INSERT INTO `localization_terms` (`localization_code`, `term`, `content`) VALUES ('tr', 'Are you sure you want to delete your account?', 'Hesabınızı silmek istediğinizden emin misiniz?');
INSERT INTO `localization_terms` (`localization_code`, `term`, `content`) VALUES ('en', 'Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account.', 'Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account.');
INSERT INTO `localization_terms` (`localization_code`, `term`, `content`) VALUES ('tr', 'Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account.', 'Hesabınız silindiğinde, tüm kaynakları ve verileri kalıcı olarak silinecektir. Hesabınızı kalıcı olarak silmek istediğinizi onaylamak için lütfen şifrenizi girin.');
INSERT INTO `localization_terms` (`localization_code`, `term`, `content`) VALUES ('en', 'Password', 'Password');
INSERT INTO `localization_terms` (`localization_code`, `term`, `content`) VALUES ('tr', 'Password', 'Şifre');
INSERT INTO `localization_terms` (`localization_code`, `term`, `content`) VALUES ('en', 'Cancel', 'Cancel');
INSERT INTO `localization_terms` (`localization_code`, `term`, `content`) VALUES ('tr', 'Cancel', 'Vazgeç');
INSERT INTO `localization_terms` (`localization_code`, `term`, `content`) VALUES ('tr', 'Saved', 'Kaydedildi.');
INSERT INTO `localization_terms` (`localization_code`, `term`, `content`) VALUES ('en', 'Saved', 'Saved.');
INSERT INTO `localization_terms` (`localization_code`, `term`, `content`) VALUES ('en', 'A new verification link has been sent to your email address.', 'A new verification link has been sent to your email address.');
INSERT INTO `localization_terms` (`localization_code`, `term`, `content`) VALUES ('tr', 'A new verification link has been sent to your email address.', 'E-posta adresinize yeni bir doğrulama bağlantısı gönderildi.');
INSERT INTO `localization_terms` (`localization_code`, `term`, `content`) VALUES ('en', 'Home', 'Home');
INSERT INTO `localization_terms` (`localization_code`, `term`, `content`) VALUES ('tr', 'Home', 'Ev');
INSERT INTO `localization_terms` (`localization_code`, `term`, `content`) VALUES ('tr', 'Account', 'Hesap');
INSERT INTO `localization_terms` (`localization_code`, `term`, `content`) VALUES ('en', 'Account', 'Account');
INSERT INTO `localization_terms` (`localization_code`, `term`, `content`) VALUES ('en', 'Edit Profile', 'Edit Profile');
INSERT INTO `localization_terms` (`localization_code`, `term`, `content`) VALUES ('tr', 'Edit Profile', 'Profili Düzenle');
INSERT INTO `localization_terms` (`localization_code`, `term`, `content`) VALUES ('en', 'Logout', 'Log Out');
INSERT INTO `localization_terms` (`localization_code`, `term`, `content`) VALUES ('tr', 'Logout', 'Çıkış Yap');
INSERT INTO `localization_terms` (`localization_code`, `term`, `content`) VALUES ('tr', 'Projects', 'Projeler');
INSERT INTO `localization_terms` (`localization_code`, `term`, `content`) VALUES ('en', 'Projects', 'Projects');
INSERT INTO `localization_terms` (`localization_code`, `term`, `content`) VALUES ('tr', 'Blog', 'Blog');
INSERT INTO `localization_terms` (`localization_code`, `term`, `content`) VALUES ('en', 'Blog', 'Blog');
INSERT INTO `localization_terms` (`localization_code`, `term`, `content`) VALUES ('tr', 'About Me', 'Hakkımızda');
INSERT INTO `localization_terms` (`localization_code`, `term`, `content`) VALUES ('en', 'About Me', 'About Me');
INSERT INTO `localization_terms` (`localization_code`, `term`, `content`) VALUES ('tr', 'Contact', 'İletişim');
INSERT INTO `localization_terms` (`localization_code`, `term`, `content`) VALUES ('en', 'Contact', 'Contact');
INSERT INTO `localization_terms` (`localization_code`, `term`, `content`) VALUES ('tr', 'Profile', 'Profil');
INSERT INTO `localization_terms` (`localization_code`, `term`, `content`) VALUES ('en', 'Profile', 'Profile');
INSERT INTO `localization_terms` (`localization_code`, `term`, `content`) VALUES ('en', 'Portfolio', 'Portfolio');
INSERT INTO `localization_terms` (`localization_code`, `term`, `content`) VALUES ('tr', 'Portfolio', 'Portföy');
INSERT INTO `localization_terms` (`localization_code`, `term`, `content`) VALUES ('tr', 'Register', 'Kayıt Ol');
INSERT INTO `localization_terms` (`localization_code`, `term`, `content`) VALUES ('en', 'Register', 'Register');
INSERT INTO `localization_terms` (`localization_code`, `term`, `content`) VALUES ('tr', 'Login', 'Giriş Yap');
INSERT INTO `localization_terms` (`localization_code`, `term`, `content`) VALUES ('en', 'Login', 'Sign In');
INSERT INTO `localization_terms` (`localization_code`, `term`, `content`) VALUES ('tr', 'Sign In', 'Giriş Yap');
INSERT INTO `localization_terms` (`localization_code`, `term`, `content`) VALUES ('en', 'Sign In', 'Sign In');
INSERT INTO `localization_terms` (`localization_code`, `term`, `content`) VALUES ('tr', 'Sign Up', 'Üye Ol');
INSERT INTO `localization_terms` (`localization_code`, `term`, `content`) VALUES ('en', 'Sign Up', 'Sign Up');
INSERT INTO `localization_terms` (`localization_code`, `term`, `content`) VALUES ('tr', 'Already registered?', 'Zaten hesabın var mı?');
INSERT INTO `localization_terms` (`localization_code`, `term`, `content`) VALUES ('en', 'Already registered?', 'Already registered?');
INSERT INTO `localization_terms` (`localization_code`, `term`, `content`) VALUES ('tr', 'Forgot your password?', 'Şifreni mi unuttun?');
INSERT INTO `localization_terms` (`localization_code`, `term`, `content`) VALUES ('en', 'Forgot your password?', 'Forgot your password?');
INSERT INTO `localization_terms` (`localization_code`, `term`, `content`) VALUES ('tr', 'Remember me', 'Beni hatırla');
INSERT INTO `localization_terms` (`localization_code`, `term`, `content`) VALUES ('en', 'Remember me', 'Remember me');
INSERT INTO `localization_terms` (`localization_code`, `term`, `content`) VALUES ('en', 'My Profile', 'My Profile');
INSERT INTO `localization_terms` (`localization_code`, `term`, `content`) VALUES ('tr', 'My Profile', 'Profilim');
INSERT INTO `localization_terms` (`localization_code`, `term`, `content`) VALUES ('en', 'My Articles', 'My Articles');
INSERT INTO `localization_terms` (`localization_code`, `term`, `content`) VALUES ('tr', 'My Articles', 'Yazılarım');
INSERT INTO `localization_terms` (`localization_code`, `term`, `content`) VALUES ('en', 'My Comments', 'My Comments');
INSERT INTO `localization_terms` (`localization_code`, `term`, `content`) VALUES ('tr', 'My Comments', 'Yorumlarım');
INSERT INTO `localization_terms` (`localization_code`, `term`, `content`) VALUES ('en', 'Inbox', 'Inbox');
INSERT INTO `localization_terms` (`localization_code`, `term`, `content`) VALUES ('tr', 'Inbox', 'Gelen Kutusu');
INSERT INTO `localization_terms` (`localization_code`, `term`, `content`) VALUES ('tr', 'Administrator', 'Yönetici');
INSERT INTO `localization_terms` (`localization_code`, `term`, `content`) VALUES ('en', 'Administrator', 'Administrator');
INSERT INTO `localization_terms` (`localization_code`, `term`, `content`) VALUES ('tr', 'Member', 'Üye');
INSERT INTO `localization_terms` (`localization_code`, `term`, `content`) VALUES ('en', 'Member', 'Member');
INSERT INTO `localization_terms` (`localization_code`, `term`, `content`) VALUES ('tr', 'Author', 'Yazar');
INSERT INTO `localization_terms` (`localization_code`, `term`, `content`) VALUES ('en', 'Author', 'Author');
COMMIT;

-- ----------------------------
-- Table structure for localizations
-- ----------------------------
DROP TABLE IF EXISTS `localizations`;
CREATE TABLE `localizations` (
  `code` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `local_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `flag` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_default` enum('1','0') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  UNIQUE KEY `localizations_code_unique` (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of localizations
-- ----------------------------
BEGIN;
INSERT INTO `localizations` (`code`, `name`, `local_name`, `flag`, `is_default`) VALUES ('en', 'English', 'english', 'us', '1');
INSERT INTO `localizations` (`code`, `name`, `local_name`, `flag`, `is_default`) VALUES ('tr', 'Türkçe', 'turkish', 'tr', '0');
COMMIT;

-- ----------------------------
-- Table structure for migrations
-- ----------------------------
DROP TABLE IF EXISTS `migrations`;
CREATE TABLE `migrations` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of migrations
-- ----------------------------
BEGIN;
INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES (1, '0001_01_01_000000_create_users_table', 1);
INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES (2, '0001_01_01_000001_create_cache_table', 1);
INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES (3, '0001_01_01_000002_create_jobs_table', 1);
INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES (4, '2024_11_07_221430_create_localizations_table', 2);
INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES (5, '2024_11_07_221514_create_localization_terms_table', 2);
INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES (6, '2024_11_08_010921_create_roles_table', 3);
INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES (7, '2024_11_08_035613_create_projects_table', 4);
INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES (8, '2024_11_08_041509_create_project_images_table', 4);
INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES (9, '2024_11_08_041526_create_project_comments_table', 4);
INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES (10, '2024_11_08_041555_create_project_attributes_table', 4);
INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES (11, '2024_11_08_041617_create_project_contributors_table', 4);
INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES (12, '2024_11_08_041637_create_project_technologies_table', 4);
INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES (13, '2024_11_08_043937_create_project_status_table', 5);
INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES (14, '2024_11_08_095021_create_blog_categories_table', 6);
INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES (15, '2024_11_08_095038_create_blog_articles_table', 6);
INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES (16, '2024_11_08_095114_create_blog_category_blog_articles_table', 6);
COMMIT;

-- ----------------------------
-- Table structure for password_reset_tokens
-- ----------------------------
DROP TABLE IF EXISTS `password_reset_tokens`;
CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of password_reset_tokens
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for project_attributes
-- ----------------------------
DROP TABLE IF EXISTS `project_attributes`;
CREATE TABLE `project_attributes` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `content` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `sort` int NOT NULL DEFAULT '0',
  `project_id` bigint unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `project_attributes_project_id_foreign` (`project_id`),
  CONSTRAINT `project_attributes_project_id_foreign` FOREIGN KEY (`project_id`) REFERENCES `projects` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of project_attributes
-- ----------------------------
BEGIN;
INSERT INTO `project_attributes` (`id`, `content`, `sort`, `project_id`) VALUES (1, 'Example Attribute 1 bla bla bla bla bla bla bla blabla bla bla bla bla blabla bla bla bla bla blabla bla bla bla bla bla', 0, 1);
INSERT INTO `project_attributes` (`id`, `content`, `sort`, `project_id`) VALUES (2, 'Example Attribute 2bla bla bla bla bla blabla bla bla bla bla blabla bla bla bla bla bla', 1, 1);
INSERT INTO `project_attributes` (`id`, `content`, `sort`, `project_id`) VALUES (3, 'Example Attribute 3bla bla bla bla bla blabla bla bla bla bla blabla bla bla bla bla blabla bla bla bla bla blabla bla bla bla bla blabla bla bla bla bla blabla bla bla bla bla blabla bla bla bla bla blabla bla bla bla bla blabla bla bla bla bla bla', 2, 1);
INSERT INTO `project_attributes` (`id`, `content`, `sort`, `project_id`) VALUES (4, 'Furthermore, Selecao has a one-page design but is also usable as a multipage template.', 0, 2);
INSERT INTO `project_attributes` (`id`, `content`, `sort`, `project_id`) VALUES (5, 't is a developer-friendly theme with a clean codebase, which makes it easy to customize and matches your branding style.', 1, 2);
INSERT INTO `project_attributes` (`id`, `content`, `sort`, `project_id`) VALUES (6, 'The theme is page-speed optimized, and it loads faster with reduced bounce rates.', 2, 2);
INSERT INTO `project_attributes` (`id`, `content`, `sort`, `project_id`) VALUES (7, 'This template has fewer cross-browser bugs and is accessible smoothly on all available browsers.', 3, 2);
INSERT INTO `project_attributes` (`id`, `content`, `sort`, `project_id`) VALUES (8, 'Furthermore, the design is optimized for search engines and enhances the SEO ranking on the search results.', 4, 2);
INSERT INTO `project_attributes` (`id`, `content`, `sort`, `project_id`) VALUES (9, 'The theme is designed with simple navigation for better user engagement.', 0, 3);
INSERT INTO `project_attributes` (`id`, `content`, `sort`, `project_id`) VALUES (10, 'All the elements are made to retain cross-browser compatibility and respond flawlessly across all available browsers.', 1, 3);
INSERT INTO `project_attributes` (`id`, `content`, `sort`, `project_id`) VALUES (11, 'The clean code helps it rank higher in search engine results.', 2, 3);
INSERT INTO `project_attributes` (`id`, `content`, `sort`, `project_id`) VALUES (12, 'Furthermore, the theme is built using the latest technologies, such as Bootstrap 5, HTML5, & CSS3. It’s written with a well-commented codebase, easily comprehensible by search engines.', 3, 3);
COMMIT;

-- ----------------------------
-- Table structure for project_comments
-- ----------------------------
DROP TABLE IF EXISTS `project_comments`;
CREATE TABLE `project_comments` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `rate` int NOT NULL,
  `ip_address` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `project_id` bigint unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `project_comments_project_id_foreign` (`project_id`),
  CONSTRAINT `project_comments_project_id_foreign` FOREIGN KEY (`project_id`) REFERENCES `projects` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of project_comments
-- ----------------------------
BEGIN;
INSERT INTO `project_comments` (`id`, `name`, `email`, `content`, `rate`, `ip_address`, `project_id`, `created_at`, `updated_at`) VALUES (1, 'Example User', 'example@user.com', 'This is Example Comment.', 3, '127.0.0.1', 1, '2024-11-08 07:55:35', NULL);
INSERT INTO `project_comments` (`id`, `name`, `email`, `content`, `rate`, `ip_address`, `project_id`, `created_at`, `updated_at`) VALUES (2, 'Example User 2', 'example@user.com', 'This is example commentt', 5, '127.0.0.1', 1, '2024-11-08 11:59:38', NULL);
INSERT INTO `project_comments` (`id`, `name`, `email`, `content`, `rate`, `ip_address`, `project_id`, `created_at`, `updated_at`) VALUES (3, 'Example User 3', 'example@userrr.com', 'laşdmhlşkadmnshklanmhkşanmfklhafmnklhnalkfnhalfjnhafjlnhaj', 1, '127.0.0.1', 1, '2024-11-08 11:59:58', NULL);
INSERT INTO `project_comments` (`id`, `name`, `email`, `content`, `rate`, `ip_address`, `project_id`, `created_at`, `updated_at`) VALUES (4, 'Çağdaş', 'cagdas@cagads.com', 'oajdpgojadıphjaıpdhjodhoadnhıandlhnladnhadnhjlnhadhna', 4, '127.0.0.1', 1, '2024-11-08 12:00:18', NULL);
INSERT INTO `project_comments` (`id`, `name`, `email`, `content`, `rate`, `ip_address`, `project_id`, `created_at`, `updated_at`) VALUES (5, 'Alpagu', 'alpagu@alpagu.net', 'lorem ipsum adljgadmhkanhşafmnhkafmnhlafnhnadşkagkşn adpgnadkşgn adng adkşgn adngkadn gkşadn gnadkşhand khnşadnhkadn gkadn gkadngşak', 5, '127.0.0.1', 1, '2024-11-08 12:00:47', NULL);
COMMIT;

-- ----------------------------
-- Table structure for project_contributors
-- ----------------------------
DROP TABLE IF EXISTS `project_contributors`;
CREATE TABLE `project_contributors` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `url` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `content` text COLLATE utf8mb4_unicode_ci,
  `project_id` bigint unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `project_contributors_project_id_foreign` (`project_id`),
  CONSTRAINT `project_contributors_project_id_foreign` FOREIGN KEY (`project_id`) REFERENCES `projects` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of project_contributors
-- ----------------------------
BEGIN;
INSERT INTO `project_contributors` (`id`, `name`, `url`, `content`, `project_id`) VALUES (1, 'Example Contributor', 'https://alpagu.net', 'Full Stack Developer', 1);
COMMIT;

-- ----------------------------
-- Table structure for project_images
-- ----------------------------
DROP TABLE IF EXISTS `project_images`;
CREATE TABLE `project_images` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `src` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `alt` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sort` int NOT NULL DEFAULT '0',
  `project_id` bigint unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `project_images_project_id_foreign` (`project_id`),
  CONSTRAINT `project_images_project_id_foreign` FOREIGN KEY (`project_id`) REFERENCES `projects` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of project_images
-- ----------------------------
BEGIN;
INSERT INTO `project_images` (`id`, `src`, `alt`, `sort`, `project_id`, `created_at`, `updated_at`) VALUES (1, 'pimage1.png', NULL, 0, 1, '2024-11-08 07:55:45', NULL);
INSERT INTO `project_images` (`id`, `src`, `alt`, `sort`, `project_id`, `created_at`, `updated_at`) VALUES (2, 'pimage2.png', NULL, 1, 1, '2024-11-08 07:55:48', NULL);
INSERT INTO `project_images` (`id`, `src`, `alt`, `sort`, `project_id`, `created_at`, `updated_at`) VALUES (3, 'pimage3.png', NULL, 2, 1, '2024-11-08 07:55:50', NULL);
INSERT INTO `project_images` (`id`, `src`, `alt`, `sort`, `project_id`, `created_at`, `updated_at`) VALUES (4, 'pimage4.png', NULL, 3, 1, '2024-11-08 07:55:53', NULL);
INSERT INTO `project_images` (`id`, `src`, `alt`, `sort`, `project_id`, `created_at`, `updated_at`) VALUES (5, 'pimage5.png', NULL, 4, 1, '2024-11-08 07:55:55', NULL);
INSERT INTO `project_images` (`id`, `src`, `alt`, `sort`, `project_id`, `created_at`, `updated_at`) VALUES (6, 'pimage6.png', NULL, 5, 1, '2024-11-08 07:55:55', NULL);
INSERT INTO `project_images` (`id`, `src`, `alt`, `sort`, `project_id`, `created_at`, `updated_at`) VALUES (7, 'pimage7.png', NULL, 6, 1, '2024-11-08 07:55:55', NULL);
INSERT INTO `project_images` (`id`, `src`, `alt`, `sort`, `project_id`, `created_at`, `updated_at`) VALUES (8, 'pimage8.png', NULL, 7, 1, '2024-11-08 07:55:55', NULL);
INSERT INTO `project_images` (`id`, `src`, `alt`, `sort`, `project_id`, `created_at`, `updated_at`) VALUES (9, 'pimage9.png', NULL, 8, 1, '2024-11-08 07:55:55', NULL);
INSERT INTO `project_images` (`id`, `src`, `alt`, `sort`, `project_id`, `created_at`, `updated_at`) VALUES (10, 'pimage10.png', NULL, 9, 1, '2024-11-08 07:55:55', NULL);
INSERT INTO `project_images` (`id`, `src`, `alt`, `sort`, `project_id`, `created_at`, `updated_at`) VALUES (11, 'pimage11.png', NULL, 10, 1, '2024-11-08 07:55:55', NULL);
INSERT INTO `project_images` (`id`, `src`, `alt`, `sort`, `project_id`, `created_at`, `updated_at`) VALUES (12, 'pimage12.png', NULL, 11, 1, '2024-11-08 07:55:55', NULL);
INSERT INTO `project_images` (`id`, `src`, `alt`, `sort`, `project_id`, `created_at`, `updated_at`) VALUES (13, 'pimage13.png', NULL, 12, 1, '2024-11-08 07:55:55', NULL);
INSERT INTO `project_images` (`id`, `src`, `alt`, `sort`, `project_id`, `created_at`, `updated_at`) VALUES (14, 'pimage14.png', NULL, 13, 1, '2024-11-08 07:55:55', NULL);
INSERT INTO `project_images` (`id`, `src`, `alt`, `sort`, `project_id`, `created_at`, `updated_at`) VALUES (15, 'pimage15.webp', NULL, 0, 2, NULL, NULL);
INSERT INTO `project_images` (`id`, `src`, `alt`, `sort`, `project_id`, `created_at`, `updated_at`) VALUES (16, 'pimage15.webp', NULL, 1, 2, NULL, NULL);
INSERT INTO `project_images` (`id`, `src`, `alt`, `sort`, `project_id`, `created_at`, `updated_at`) VALUES (17, 'pimage15.webp', NULL, 2, 2, NULL, NULL);
INSERT INTO `project_images` (`id`, `src`, `alt`, `sort`, `project_id`, `created_at`, `updated_at`) VALUES (18, 'pimage15.webp', NULL, 3, 2, NULL, NULL);
INSERT INTO `project_images` (`id`, `src`, `alt`, `sort`, `project_id`, `created_at`, `updated_at`) VALUES (19, 'pimage16.png', NULL, 0, 3, NULL, NULL);
INSERT INTO `project_images` (`id`, `src`, `alt`, `sort`, `project_id`, `created_at`, `updated_at`) VALUES (20, 'pimage16.png', NULL, 1, 3, NULL, NULL);
INSERT INTO `project_images` (`id`, `src`, `alt`, `sort`, `project_id`, `created_at`, `updated_at`) VALUES (21, 'pimage16.png', NULL, 2, 3, NULL, NULL);
COMMIT;

-- ----------------------------
-- Table structure for project_status
-- ----------------------------
DROP TABLE IF EXISTS `project_status`;
CREATE TABLE `project_status` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `color` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `can_view` enum('1','0') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of project_status
-- ----------------------------
BEGIN;
INSERT INTO `project_status` (`id`, `name`, `color`, `can_view`) VALUES (1, 'Disabled', '#8492a2', '0');
INSERT INTO `project_status` (`id`, `name`, `color`, `can_view`) VALUES (2, 'Ready', '#70dc38', '1');
INSERT INTO `project_status` (`id`, `name`, `color`, `can_view`) VALUES (3, 'Developing', '#02c3eb', '1');
INSERT INTO `project_status` (`id`, `name`, `color`, `can_view`) VALUES (4, 'Pending', '#ffab00', '0');
INSERT INTO `project_status` (`id`, `name`, `color`, `can_view`) VALUES (5, 'Abandoned', '#ff3e1d', '0');
COMMIT;

-- ----------------------------
-- Table structure for project_technologies
-- ----------------------------
DROP TABLE IF EXISTS `project_technologies`;
CREATE TABLE `project_technologies` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `content` text COLLATE utf8mb4_unicode_ci,
  `sort` int NOT NULL,
  `project_id` bigint unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `project_technologies_project_id_foreign` (`project_id`),
  CONSTRAINT `project_technologies_project_id_foreign` FOREIGN KEY (`project_id`) REFERENCES `projects` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of project_technologies
-- ----------------------------
BEGIN;
INSERT INTO `project_technologies` (`id`, `name`, `image`, `content`, `sort`, `project_id`) VALUES (1, 'Laravel 11', NULL, 'Using Laravel Framework at back-end.', 0, 1);
INSERT INTO `project_technologies` (`id`, `name`, `image`, `content`, `sort`, `project_id`) VALUES (2, 'Bootstrap v5.3.3', NULL, NULL, 0, 2);
INSERT INTO `project_technologies` (`id`, `name`, `image`, `content`, `sort`, `project_id`) VALUES (3, 'HTML5 & CSS3', NULL, NULL, 1, 2);
INSERT INTO `project_technologies` (`id`, `name`, `image`, `content`, `sort`, `project_id`) VALUES (4, 'Hero Header with Fluid Animation', NULL, NULL, 2, 2);
INSERT INTO `project_technologies` (`id`, `name`, `image`, `content`, `sort`, `project_id`) VALUES (5, 'Pagination UI', NULL, NULL, 3, 2);
INSERT INTO `project_technologies` (`id`, `name`, `image`, `content`, `sort`, `project_id`) VALUES (6, 'Sass-Supported Codebase', NULL, NULL, 4, 2);
INSERT INTO `project_technologies` (`id`, `name`, `image`, `content`, `sort`, `project_id`) VALUES (7, 'HTML & CSS', NULL, NULL, 0, 3);
INSERT INTO `project_technologies` (`id`, `name`, `image`, `content`, `sort`, `project_id`) VALUES (8, 'jQuery', NULL, NULL, 1, 3);
INSERT INTO `project_technologies` (`id`, `name`, `image`, `content`, `sort`, `project_id`) VALUES (9, 'Gallery', NULL, NULL, 2, 3);
INSERT INTO `project_technologies` (`id`, `name`, `image`, `content`, `sort`, `project_id`) VALUES (10, 'Hero Section', NULL, NULL, 3, 3);
INSERT INTO `project_technologies` (`id`, `name`, `image`, `content`, `sort`, `project_id`) VALUES (11, 'Registration Form UI', NULL, NULL, 4, 3);
INSERT INTO `project_technologies` (`id`, `name`, `image`, `content`, `sort`, `project_id`) VALUES (12, 'Testimonial Slider', NULL, NULL, 5, 3);
COMMIT;

-- ----------------------------
-- Table structure for projects
-- ----------------------------
DROP TABLE IF EXISTS `projects`;
CREATE TABLE `projects` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `open_source` enum('0','1') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `content` longtext COLLATE utf8mb4_unicode_ci,
  `price` decimal(11,2) DEFAULT NULL,
  `github_link` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `demo_link` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `view_count` int NOT NULL DEFAULT '0',
  `status_id` bigint unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`,`status_id`) USING BTREE,
  KEY `status_id` (`status_id`),
  CONSTRAINT `projects_ibfk_1` FOREIGN KEY (`status_id`) REFERENCES `project_status` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of projects
-- ----------------------------
BEGIN;
INSERT INTO `projects` (`id`, `name`, `slug`, `open_source`, `content`, `price`, `github_link`, `demo_link`, `view_count`, `status_id`, `created_at`, `updated_at`) VALUES (1, 'Karevle', 'karevle', '1', '                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum maxime commodi facilis nihil? Sit culpa animi, incidunt vitae itaque laudantium delectus temporibus, harum mollitia minus officia, dicta reiciendis quis eum!\n                Aspernatur, velit maxime quis impedit tenetur quisquam nisi eos sed tempore exercitationem. Maxime debitis hic dolores maiores a tempore, temporibus nostrum officia ducimus. Earum debitis tenetur consequatur similique corrupti libero.\n                Temporibus consequatur ipsum quod laboriosam iste magnam aut aliquid asperiores porro accusantium, perferendis eum a nobis, sint, rem nihil. Corporis velit unde expedita aspernatur omnis repellat dolore? Quia, quisquam dolores!\n                Voluptates minima aperiam magni pariatur iure vel libero. Quas, sit vero. Impedit officia sapiente aperiam expedita eos incidunt pariatur ad qui quaerat ratione, ullam, laborum, rem dolorum tempore labore illum.\n                Doloremque optio obcaecati unde exercitationem. Provident esse eveniet quod molestiae, illum soluta eaque, velit fugit facere quae aut, atque animi eum cumque quam. Aliquam unde voluptatibus et id, adipisci nihil.\n                Deleniti atque ad sint cumque perferendis asperiores esse ab eos nostrum in pariatur, facilis non laborum distinctio tenetur ducimus neque nihil iste assumenda, mollitia veniam. Maxime fugit aliquam nobis dignissimos.\n                Deleniti quas provident earum culpa. Eius animi repellat aut laboriosam facere corrupti quisquam rerum, consequatur odio! Praesentium amet quae dolorem architecto nesciunt facilis repellendus rem eveniet dolore laboriosam! Maiores, consequatur?\n                Dolor quisquam nam harum, ad neque eligendi fugiat dicta dolorum in provident tempora eius quam earum, quasi nulla sequi eveniet corrupti magni repellendus rerum officiis corporis. Incidunt consequuntur neque sed?\n                Voluptatem reiciendis dolores et odio itaque blanditiis atque asperiores eum saepe velit dolor optio unde laboriosam sunt cupiditate quidem quod consectetur, porro tenetur quo consequatur iste? Adipisci accusantium obcaecati possimus.\n                Hic magnam nobis est, praesentium tenetur temporibus laborum, tempore amet aliquam nulla, quis dolorem sapiente nesciunt labore atque. Recusandae hic adipisci quidem ad aperiam praesentium, vitae autem quasi corrupti laborum.', 0.00, '#', '#', 0, 3, '2024-11-08 07:50:53', NULL);
INSERT INTO `projects` (`id`, `name`, `slug`, `open_source`, `content`, `price`, `github_link`, `demo_link`, `view_count`, `status_id`, `created_at`, `updated_at`) VALUES (2, 'Selecao – Free Bootstrap 5 Business & Corporate Template', 'selecao-free-bootstrap-5-business-corporate-template', '0', 'Selecao is a business and corporate template suitable for startups or software companies. It is a free template that has a modern and creative design. It is built using modern technologies such as Bootstrap 5, HTML5, and CSS3. The theme includes several responsive UIs to enhance user engagement on your website. It has a hero header, a slider, and a header carousel. There is also a preloader, a sticky top navigation bar with a multilevel dropdown menu bar, a testimonial carousel, and a blog section. Moreover, the beautiful design includes call-to-action buttons, a portfolio section, a pricing table, tabbed contents, an FAQ section, a contact form UI, accordions, breadcrumbs, a search filter, a pagination UI, a back-to-top button, a detailed footer, on-load animation, and more. Additionally, it is a responsive theme with a sleek design and runs smoothly on different screen sizes.\n\n \n\nFree Responsive Bootstrap 5 Multipurpose Business Template\nFurthermore, Selecao has a one-page design but is also usable as a multipage template. It is a developer-friendly theme with a clean codebase, which makes it easy to customize and matches your branding style. The theme is page-speed optimized, and it loads faster with reduced bounce rates. This template has fewer cross-browser bugs and is accessible smoothly on all available browsers. Furthermore, the design is optimized for search engines and enhances the SEO ranking on the search results.', 0.00, NULL, 'https://themewagon.github.io/Selecao/', 0, 2, '2024-11-08 12:12:38', NULL);
INSERT INTO `projects` (`id`, `name`, `slug`, `open_source`, `content`, `price`, `github_link`, `demo_link`, `view_count`, `status_id`, `created_at`, `updated_at`) VALUES (3, 'waGGy – Free Bootstrap 5 HTML5 eCommerce Website Template', 'waggy-free-bootstrap-5-html5-ecommerce-website-template', '0', 'Waggy is a free website template built using Bootstrap 5, HTML5, and CSS3. The eCommerce theme is rich with user-friendly UI components laid out thoughtfully on the skin. The theme has a top navigation bar with a search filter and a dropdown menu. Scrolling down, you’ll find a beautiful hero section with hero images and header sliders. The call-to-action buttons have on-hover effects. The shopping section comes with carts, product lists, and tabbed contents. It offers a banner section for sales. Some of the other features include a registration form UI, a blog section, testimonial sliders, a newsletter subscription form UI, a detailed footer, and more. All the UIs are fully responsive, regardless of the device or screen size they’re running on.', 0.00, NULL, 'https://themewagon.github.io/waggy/', 0, 2, '2024-11-08 12:18:50', NULL);
INSERT INTO `projects` (`id`, `name`, `slug`, `open_source`, `content`, `price`, `github_link`, `demo_link`, `view_count`, `status_id`, `created_at`, `updated_at`) VALUES (4, 'Isaiah Murazik', 'totam-repudiandae-aut-porro-ducimus-eligendi', '0', 'Cupiditate adipisci optio neque. Modi qui aliquid reprehenderit repellendus. Neque laudantium fugiat quia assumenda reiciendis.', 995.00, NULL, NULL, 2, 2, '2024-11-08 10:25:12', '2024-11-08 10:25:12');
INSERT INTO `projects` (`id`, `name`, `slug`, `open_source`, `content`, `price`, `github_link`, `demo_link`, `view_count`, `status_id`, `created_at`, `updated_at`) VALUES (5, 'Domenic Rempel', 'non-est-in-sint-est-quis-ipsa-sed', '0', 'Laudantium in explicabo praesentium nulla in. Et suscipit inventore adipisci sunt in dolore cumque. Autem consequatur odit voluptatibus vitae et esse.', 663.00, NULL, NULL, 55, 2, '2024-11-08 10:25:12', '2024-11-08 10:25:12');
INSERT INTO `projects` (`id`, `name`, `slug`, `open_source`, `content`, `price`, `github_link`, `demo_link`, `view_count`, `status_id`, `created_at`, `updated_at`) VALUES (6, 'Nicholaus Morissette', 'rerum-iste-reprehenderit-ullam-sunt-quod-ipsum', '0', 'Sint eos nobis et numquam sit sunt. Et dolor nihil nihil quia eum non excepturi minus. Explicabo doloremque quos ea recusandae.', 16.00, NULL, NULL, 26, 2, '2024-11-08 10:25:12', '2024-11-08 10:25:12');
INSERT INTO `projects` (`id`, `name`, `slug`, `open_source`, `content`, `price`, `github_link`, `demo_link`, `view_count`, `status_id`, `created_at`, `updated_at`) VALUES (7, 'Dr. Tristin Considine IV', 'cupiditate-non-alias-quo-porro', '0', 'Adipisci eius qui ea. Exercitationem nisi consequatur eveniet et et repellendus. Placeat cupiditate officiis iure blanditiis iusto. Qui sit reiciendis quaerat commodi dolorem quod voluptates.', 106.00, NULL, NULL, 10, 2, '2024-11-08 10:25:12', '2024-11-08 10:25:12');
INSERT INTO `projects` (`id`, `name`, `slug`, `open_source`, `content`, `price`, `github_link`, `demo_link`, `view_count`, `status_id`, `created_at`, `updated_at`) VALUES (8, 'Dr. Dario Kerluke Jr.', 'alias-voluptas-ab-vel-officiis-possimus-fuga', '0', 'Eos omnis eum commodi fuga illum totam. Consequatur voluptates est nostrum autem eos dolores. Qui numquam labore et voluptas. Error animi sit totam dolorem quis vel quo.', 345.00, NULL, NULL, 68, 2, '2024-11-08 10:25:12', '2024-11-08 10:25:12');
INSERT INTO `projects` (`id`, `name`, `slug`, `open_source`, `content`, `price`, `github_link`, `demo_link`, `view_count`, `status_id`, `created_at`, `updated_at`) VALUES (9, 'Dr. Mckenzie Hessel Sr.', 'vero-itaque-natus-autem-voluptas', '0', 'Tenetur ab reprehenderit excepturi quo. Repellendus inventore perferendis placeat dolores dolorem.', 318.00, NULL, NULL, 71, 2, '2024-11-08 10:25:12', '2024-11-08 10:25:12');
INSERT INTO `projects` (`id`, `name`, `slug`, `open_source`, `content`, `price`, `github_link`, `demo_link`, `view_count`, `status_id`, `created_at`, `updated_at`) VALUES (10, 'Colt Kub', 'possimus-voluptatem-vel-blanditiis-aut', '0', 'Qui non et non aspernatur non dolores error. Blanditiis enim soluta exercitationem accusantium eveniet. Doloremque iusto tenetur aut omnis in.', 532.00, NULL, NULL, 51, 2, '2024-11-08 10:25:12', '2024-11-08 10:25:12');
INSERT INTO `projects` (`id`, `name`, `slug`, `open_source`, `content`, `price`, `github_link`, `demo_link`, `view_count`, `status_id`, `created_at`, `updated_at`) VALUES (11, 'Gideon Bechtelar', 'deserunt-eveniet-ut-dolore-error-non', '0', 'Nemo eveniet et eligendi architecto est quod sint. Illum minima qui molestias aliquid corrupti. In doloribus minima accusamus culpa et fuga. Nisi eligendi nostrum mollitia nisi autem at.', 874.00, NULL, NULL, 50, 2, '2024-11-08 10:25:12', '2024-11-08 10:25:12');
INSERT INTO `projects` (`id`, `name`, `slug`, `open_source`, `content`, `price`, `github_link`, `demo_link`, `view_count`, `status_id`, `created_at`, `updated_at`) VALUES (12, 'Roxane Murazik', 'veniam-qui-voluptatem-voluptatem-sint-necessitatibus', '0', 'Rerum blanditiis non velit porro dolorum. Deleniti ut natus in tempore aut dolores labore.', 274.00, NULL, NULL, 41, 2, '2024-11-08 10:25:12', '2024-11-08 10:25:12');
INSERT INTO `projects` (`id`, `name`, `slug`, `open_source`, `content`, `price`, `github_link`, `demo_link`, `view_count`, `status_id`, `created_at`, `updated_at`) VALUES (13, 'Dayne Kerluke V', 'assumenda-est-et-praesentium-repellendus-et-accusamus-voluptas', '0', 'Sint doloremque eos veritatis saepe. Aut qui magni quaerat est voluptas. Nobis vero dolorem odit voluptate repudiandae qui. Non ipsum quidem aut animi corporis ut ipsum.', 357.00, NULL, NULL, 34, 2, '2024-11-08 10:25:12', '2024-11-08 10:25:12');
INSERT INTO `projects` (`id`, `name`, `slug`, `open_source`, `content`, `price`, `github_link`, `demo_link`, `view_count`, `status_id`, `created_at`, `updated_at`) VALUES (14, 'Miss', 'dolores-omnis-et-laboriosam-aliquid-facilis-natus', '0', 'Est tenetur voluptas odio consequuntur est nisi. Iste deserunt sequi qui inventore dolore amet. Qui voluptatem ducimus sunt animi est. Quaerat veritatis voluptas exercitationem.', 963.00, NULL, NULL, 12, 2, '2024-11-08 10:25:32', '2024-11-08 10:25:32');
INSERT INTO `projects` (`id`, `name`, `slug`, `open_source`, `content`, `price`, `github_link`, `demo_link`, `view_count`, `status_id`, `created_at`, `updated_at`) VALUES (15, 'Ms.', 'mollitia-facere-quia-omnis-fuga', '0', 'Omnis autem qui ut est reiciendis amet et. In sed et eveniet aut sed magni nam.', 736.00, NULL, NULL, 66, 2, '2024-11-08 10:25:32', '2024-11-08 10:25:32');
INSERT INTO `projects` (`id`, `name`, `slug`, `open_source`, `content`, `price`, `github_link`, `demo_link`, `view_count`, `status_id`, `created_at`, `updated_at`) VALUES (16, 'Dr.', 'pariatur-optio-ex-delectus-omnis-ex-quidem-ipsa-quod', '0', 'Sunt recusandae est facere qui vitae. Cupiditate est deserunt natus quia autem rem incidunt.', 421.00, NULL, NULL, 54, 2, '2024-11-08 10:25:32', '2024-11-08 10:25:32');
INSERT INTO `projects` (`id`, `name`, `slug`, `open_source`, `content`, `price`, `github_link`, `demo_link`, `view_count`, `status_id`, `created_at`, `updated_at`) VALUES (17, 'Ms.', 'corporis-placeat-vero-impedit-aut-amet-perferendis', '0', 'Ratione non quod culpa qui ut est. Fugiat magnam earum necessitatibus quis odio et illo. Ea non reprehenderit error deserunt.', 524.00, NULL, NULL, 36, 2, '2024-11-08 10:25:32', '2024-11-08 10:25:32');
INSERT INTO `projects` (`id`, `name`, `slug`, `open_source`, `content`, `price`, `github_link`, `demo_link`, `view_count`, `status_id`, `created_at`, `updated_at`) VALUES (18, 'Mr.', 'nemo-veniam-est-rem-facere', '0', 'Et vel ut sit autem et. Quia quo nihil illo laborum officiis laudantium. Quidem est qui ipsa placeat facilis aliquid.', 697.00, NULL, NULL, 66, 2, '2024-11-08 10:25:32', '2024-11-08 10:25:32');
INSERT INTO `projects` (`id`, `name`, `slug`, `open_source`, `content`, `price`, `github_link`, `demo_link`, `view_count`, `status_id`, `created_at`, `updated_at`) VALUES (19, 'Mr.', 'odit-quae-voluptatum-eos-sunt', '0', 'Perferendis et aliquid velit id sequi atque. Et aliquam enim assumenda nesciunt. Qui quidem fugiat est culpa.', 76.00, NULL, NULL, 87, 2, '2024-11-08 10:25:32', '2024-11-08 10:25:32');
INSERT INTO `projects` (`id`, `name`, `slug`, `open_source`, `content`, `price`, `github_link`, `demo_link`, `view_count`, `status_id`, `created_at`, `updated_at`) VALUES (20, 'Miss', 'quisquam-ipsum-cum-rerum-illo', '0', 'Qui corrupti consectetur reprehenderit amet sit eum. Molestiae aut nesciunt fuga tenetur doloremque debitis. Voluptas facilis repellendus corporis consequatur aliquam eos quidem.', 283.00, NULL, NULL, 72, 2, '2024-11-08 10:25:32', '2024-11-08 10:25:32');
INSERT INTO `projects` (`id`, `name`, `slug`, `open_source`, `content`, `price`, `github_link`, `demo_link`, `view_count`, `status_id`, `created_at`, `updated_at`) VALUES (21, 'Dr.', 'impedit-ut-in-velit-aut-debitis', '0', 'Nesciunt eum quam vel possimus dolores. Ea laboriosam rem natus beatae. Minus praesentium molestiae placeat est est. Consequatur quis quidem cumque voluptas saepe.', 505.00, NULL, NULL, 11, 2, '2024-11-08 10:25:32', '2024-11-08 10:25:32');
INSERT INTO `projects` (`id`, `name`, `slug`, `open_source`, `content`, `price`, `github_link`, `demo_link`, `view_count`, `status_id`, `created_at`, `updated_at`) VALUES (22, 'Prof.', 'et-sit-labore-excepturi-magnam', '0', 'Quis laudantium quis qui sapiente quo laboriosam. Est a sit aspernatur similique maxime. Fuga placeat reprehenderit repellat aut possimus nam.', 462.00, NULL, NULL, 14, 2, '2024-11-08 10:25:32', '2024-11-08 10:25:32');
INSERT INTO `projects` (`id`, `name`, `slug`, `open_source`, `content`, `price`, `github_link`, `demo_link`, `view_count`, `status_id`, `created_at`, `updated_at`) VALUES (23, 'Prof.', 'odio-dignissimos-porro-ipsam-qui-reiciendis', '0', 'Deserunt modi praesentium accusamus voluptatem. Et sit sit doloremque. Doloremque ut voluptatem sed et praesentium harum dolore. Accusantium fugiat inventore voluptas ea.', 23.00, NULL, NULL, 62, 2, '2024-11-08 10:25:32', '2024-11-08 10:25:32');
INSERT INTO `projects` (`id`, `name`, `slug`, `open_source`, `content`, `price`, `github_link`, `demo_link`, `view_count`, `status_id`, `created_at`, `updated_at`) VALUES (24, 'atque recusandae molestiae', 'veniam-est-dignissimos-laborum-omnis-autem-quo-earum-qui', '0', 'Et iure omnis inventore laborum id. Molestias expedita expedita quo et culpa voluptatem exercitationem. Atque autem sapiente libero enim facere.', 424.00, NULL, NULL, 38, 2, '2024-11-08 10:26:30', '2024-11-08 10:26:30');
INSERT INTO `projects` (`id`, `name`, `slug`, `open_source`, `content`, `price`, `github_link`, `demo_link`, `view_count`, `status_id`, `created_at`, `updated_at`) VALUES (25, 'beatae voluptas reprehenderit', 'distinctio-sint-error-non-voluptas-quibusdam-dolorum', '0', 'Et non quae placeat omnis. Voluptatem quia qui voluptatem culpa. Hic consequatur assumenda et rerum velit maiores reprehenderit et. Quis voluptate at culpa quibusdam eius.', 50.00, NULL, NULL, 12, 2, '2024-11-08 10:26:30', '2024-11-08 10:26:30');
INSERT INTO `projects` (`id`, `name`, `slug`, `open_source`, `content`, `price`, `github_link`, `demo_link`, `view_count`, `status_id`, `created_at`, `updated_at`) VALUES (26, 'voluptas nostrum ut', 'sint-dolor-veniam-dignissimos-ullam-aut-dolores-cumque-incidunt', '0', 'Aperiam qui quo eum numquam et blanditiis odit facilis. Porro dolorem vitae vel et. Fugit quas rerum ipsam inventore dolore et. Iste aut ut tempore reprehenderit non voluptatem aspernatur.', 39.00, NULL, NULL, 45, 2, '2024-11-08 10:26:30', '2024-11-08 10:26:30');
INSERT INTO `projects` (`id`, `name`, `slug`, `open_source`, `content`, `price`, `github_link`, `demo_link`, `view_count`, `status_id`, `created_at`, `updated_at`) VALUES (27, 'non recusandae qui', 'eaque-quam-sint-vitae-ut-sit', '0', 'Veniam voluptatem soluta pariatur veritatis architecto inventore. Animi pariatur perferendis placeat ratione. Facilis at rerum autem architecto. Maiores doloremque nihil nobis.', 457.00, NULL, NULL, 46, 2, '2024-11-08 10:26:30', '2024-11-08 10:26:30');
INSERT INTO `projects` (`id`, `name`, `slug`, `open_source`, `content`, `price`, `github_link`, `demo_link`, `view_count`, `status_id`, `created_at`, `updated_at`) VALUES (28, 'consequuntur unde aut', 'suscipit-qui-a-ad-quam', '0', 'Error officia quia est neque. Quo maiores minus cupiditate explicabo magni. Et velit delectus enim consequatur beatae. Excepturi nesciunt et mollitia corrupti hic voluptates.', 564.00, NULL, NULL, 72, 2, '2024-11-08 10:26:30', '2024-11-08 10:26:30');
INSERT INTO `projects` (`id`, `name`, `slug`, `open_source`, `content`, `price`, `github_link`, `demo_link`, `view_count`, `status_id`, `created_at`, `updated_at`) VALUES (29, 'itaque quo in', 'fugit-vitae-qui-a-sed-possimus-nulla-deserunt', '0', 'Ipsum dolor impedit qui qui possimus cum. Sed corrupti ut deserunt beatae cum. Voluptatem occaecati quibusdam unde iste incidunt cupiditate eaque. Sit aspernatur est fugiat sapiente omnis.', 748.00, NULL, NULL, 76, 2, '2024-11-08 10:26:30', '2024-11-08 10:26:30');
INSERT INTO `projects` (`id`, `name`, `slug`, `open_source`, `content`, `price`, `github_link`, `demo_link`, `view_count`, `status_id`, `created_at`, `updated_at`) VALUES (30, 'modi at sunt', 'esse-et-doloremque-asperiores-excepturi-porro-consequatur-numquam', '0', 'Asperiores non molestiae quam ipsa et. Ducimus perspiciatis unde placeat aspernatur perspiciatis. Distinctio et modi nobis eos. Animi porro vel maiores aperiam.', 606.00, NULL, NULL, 35, 2, '2024-11-08 10:26:30', '2024-11-08 10:26:30');
INSERT INTO `projects` (`id`, `name`, `slug`, `open_source`, `content`, `price`, `github_link`, `demo_link`, `view_count`, `status_id`, `created_at`, `updated_at`) VALUES (31, 'non eius alias', 'possimus-soluta-eveniet-rerum-a-qui-architecto-quo-ut', '0', 'Quasi qui odit beatae natus voluptas quo. Accusamus non deserunt esse assumenda. Et expedita eveniet eos consequatur.', 106.00, NULL, NULL, 41, 2, '2024-11-08 10:26:30', '2024-11-08 10:26:30');
INSERT INTO `projects` (`id`, `name`, `slug`, `open_source`, `content`, `price`, `github_link`, `demo_link`, `view_count`, `status_id`, `created_at`, `updated_at`) VALUES (32, 'quasi ea repellendus', 'vitae-ipsum-sunt-in-consequatur-maiores', '0', 'Iure aut itaque quaerat officia qui rem debitis. Sed amet magni dolorem est. Ipsum voluptas dolorum reiciendis. Facere quia enim consectetur.', 610.00, NULL, NULL, 25, 2, '2024-11-08 10:26:30', '2024-11-08 10:26:30');
INSERT INTO `projects` (`id`, `name`, `slug`, `open_source`, `content`, `price`, `github_link`, `demo_link`, `view_count`, `status_id`, `created_at`, `updated_at`) VALUES (33, 'et aspernatur ullam', 'nihil-atque-culpa-et-eos', '0', 'Facere et voluptatibus aut quo omnis non et voluptas. Facilis deserunt voluptatem deleniti voluptates qui et odio. Et placeat quasi autem a. Fugit ab optio a velit sit.', 138.00, NULL, NULL, 0, 2, '2024-11-08 10:26:30', '2024-11-08 10:26:30');
INSERT INTO `projects` (`id`, `name`, `slug`, `open_source`, `content`, `price`, `github_link`, `demo_link`, `view_count`, `status_id`, `created_at`, `updated_at`) VALUES (34, 'Id quibusdam consequatur', 'quia-autem-recusandae-architecto-facere-nostrum-consequatur', '0', 'Nulla omnis et possimus esse sunt. Molestias recusandae eum natus. Sint ut et ullam et delectus.', 395.00, NULL, NULL, 43, 2, '2024-11-08 10:27:47', '2024-11-08 10:27:47');
INSERT INTO `projects` (`id`, `name`, `slug`, `open_source`, `content`, `price`, `github_link`, `demo_link`, `view_count`, `status_id`, `created_at`, `updated_at`) VALUES (35, 'A illo molestiae', 'fugit-nulla-repellendus-tempore-eum', '0', 'Ducimus doloremque dolorum sed dolores libero quia. Et consequatur voluptas ullam. Facilis eum a et atque perferendis.', 250.00, NULL, NULL, 20, 2, '2024-11-08 10:27:47', '2024-11-08 10:27:47');
INSERT INTO `projects` (`id`, `name`, `slug`, `open_source`, `content`, `price`, `github_link`, `demo_link`, `view_count`, `status_id`, `created_at`, `updated_at`) VALUES (36, 'Earum et', 'esse-voluptatem-modi-ea-cupiditate-est-sit-non', '0', 'Quod rerum quibusdam dolor et praesentium quas quas accusamus. Qui autem cum est quam et aut maiores.', 353.00, NULL, NULL, 22, 2, '2024-11-08 10:27:47', '2024-11-08 10:27:47');
INSERT INTO `projects` (`id`, `name`, `slug`, `open_source`, `content`, `price`, `github_link`, `demo_link`, `view_count`, `status_id`, `created_at`, `updated_at`) VALUES (37, 'Saepe molestias corporis', 'et-veritatis-eos-enim-sapiente', '0', 'Sed velit quo porro error. Et nihil nulla autem libero quos libero sint voluptatem. Adipisci sunt dolore quis vitae. Laborum atque perspiciatis accusamus repellendus commodi eos omnis.', 564.00, NULL, NULL, 1, 2, '2024-11-08 10:27:47', '2024-11-08 10:27:47');
INSERT INTO `projects` (`id`, `name`, `slug`, `open_source`, `content`, `price`, `github_link`, `demo_link`, `view_count`, `status_id`, `created_at`, `updated_at`) VALUES (38, 'Voluptate esse aut', 'et-adipisci-at-vitae-doloribus-quae-ea', '0', 'Ut alias perspiciatis necessitatibus saepe excepturi. Cumque qui et ratione necessitatibus quos molestiae. Est nobis ad esse adipisci.', 427.00, NULL, NULL, 46, 2, '2024-11-08 10:27:47', '2024-11-08 10:27:47');
INSERT INTO `projects` (`id`, `name`, `slug`, `open_source`, `content`, `price`, `github_link`, `demo_link`, `view_count`, `status_id`, `created_at`, `updated_at`) VALUES (39, 'Rerum consequuntur a', 'dolor-reiciendis-atque-doloribus-et', '0', 'Et fugiat nemo perspiciatis est libero. Vel asperiores dolorem velit corrupti dolorum dolorem. Labore mollitia labore et impedit.', 627.00, NULL, NULL, 98, 2, '2024-11-08 10:27:47', '2024-11-08 10:27:47');
INSERT INTO `projects` (`id`, `name`, `slug`, `open_source`, `content`, `price`, `github_link`, `demo_link`, `view_count`, `status_id`, `created_at`, `updated_at`) VALUES (40, 'Voluptatem iusto', 'veritatis-consequuntur-sed-rerum-ab-veritatis-et-perspiciatis', '0', 'Vel optio dicta nisi dolore occaecati omnis. Ipsa ipsam sed est iste. Et ut rem provident fuga esse sequi nihil dicta.', 412.00, NULL, NULL, 62, 2, '2024-11-08 10:27:47', '2024-11-08 10:27:47');
INSERT INTO `projects` (`id`, `name`, `slug`, `open_source`, `content`, `price`, `github_link`, `demo_link`, `view_count`, `status_id`, `created_at`, `updated_at`) VALUES (41, 'Vel natus', 'rerum-voluptatibus-eaque-eligendi-inventore', '0', 'Non voluptas qui dolor ullam dolores sed. Quas itaque quod mollitia tempore sunt sit qui sed. Libero qui voluptatum ut.', 692.00, NULL, NULL, 89, 2, '2024-11-08 10:27:47', '2024-11-08 10:27:47');
INSERT INTO `projects` (`id`, `name`, `slug`, `open_source`, `content`, `price`, `github_link`, `demo_link`, `view_count`, `status_id`, `created_at`, `updated_at`) VALUES (42, 'Deleniti rerum sit', 'tenetur-sunt-explicabo-repellendus-sed-et-ullam-nihil', '0', 'Amet suscipit fuga aut exercitationem consequuntur. Autem dolor et quos illum aut itaque. Illo sed aut consequuntur consequatur dolore.', 277.00, NULL, NULL, 71, 2, '2024-11-08 10:27:47', '2024-11-08 10:27:47');
INSERT INTO `projects` (`id`, `name`, `slug`, `open_source`, `content`, `price`, `github_link`, `demo_link`, `view_count`, `status_id`, `created_at`, `updated_at`) VALUES (43, 'Eius ducimus tempora', 'maxime-aspernatur-deserunt-animi-aliquam-ex-fugiat', '0', 'Qui dolorem voluptates et assumenda tenetur quas. Et est repudiandae illo minima adipisci. Sed accusantium et modi magni.', 521.00, NULL, NULL, 35, 2, '2024-11-08 10:27:47', '2024-11-08 10:27:47');
COMMIT;

-- ----------------------------
-- Table structure for roles
-- ----------------------------
DROP TABLE IF EXISTS `roles`;
CREATE TABLE `roles` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `color` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of roles
-- ----------------------------
BEGIN;
INSERT INTO `roles` (`id`, `name`, `color`) VALUES (1, 'Administrator', '#02c3eb');
INSERT INTO `roles` (`id`, `name`, `color`) VALUES (2, 'Member', '#696cff');
INSERT INTO `roles` (`id`, `name`, `color`) VALUES (3, 'Author', '#70dc38');
COMMIT;

-- ----------------------------
-- Table structure for sessions
-- ----------------------------
DROP TABLE IF EXISTS `sessions`;
CREATE TABLE `sessions` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint unsigned DEFAULT NULL,
  `ip_address` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_agent` text COLLATE utf8mb4_unicode_ci,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_activity` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `sessions_user_id_index` (`user_id`),
  KEY `sessions_last_activity_index` (`last_activity`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of sessions
-- ----------------------------
BEGIN;
INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES ('wsuC8CcjGV6t06KoVmVZaOo8SmYYmm4LqgENCDVT', 4, '127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36', 'YTo2OntzOjY6Il90b2tlbiI7czo0MDoiaU9UaHg0VHNLMzJoMjY1bzk1azVWNlFOazI3UHhCYXRySDN4UUQ2ayI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319czoyNToiZGVmYXVsdF9sb2NhbGl6YXRpb25fY29kZSI7czoyOiJlbiI7czo1MDoibG9naW5fd2ViXzU5YmEzNmFkZGMyYjJmOTQwMTU4MGYwMTRjN2Y1OGVhNGUzMDk4OWQiO2k6NDtzOjM6InVybCI7YToxOntzOjg6ImludGVuZGVkIjtzOjMxOiJodHRwOi8vbG9jYWxob3N0OjgwMDAvZGFzaGJvYXJkIjt9czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzE6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9wb3J0Zm9saW8iO319', 1731061869);
COMMIT;

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role_id` bigint unsigned NOT NULL DEFAULT '2',
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `default_localization_code` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `default_theme_mode` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'dark',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`,`role_id`) USING BTREE,
  UNIQUE KEY `users_email_unique` (`email`),
  KEY `role_id` (`role_id`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of users
-- ----------------------------
BEGIN;
INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `role_id`, `remember_token`, `default_localization_code`, `default_theme_mode`, `created_at`, `updated_at`) VALUES (1, 'Çağdaş Karabudak', 'cagdaskarabudak@outlook.com', NULL, '$2y$12$z94V321JiwvGBGfGuiUQv.Yb9nslDO7H0/BWGHXxVMu008eP5y4i2', 1, NULL, 'tr', 'dark', '2024-11-06 02:11:19', '2024-11-08 05:28:03');
INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `role_id`, `remember_token`, `default_localization_code`, `default_theme_mode`, `created_at`, `updated_at`) VALUES (3, 'Author User', 'author@user.com', NULL, '$2y$12$4/VAovwusqbBXF89lDlgAuebeobMgldz7rLILCMry1d6TQ9.D2isy', 3, NULL, 'tr', 'dark', '2024-11-08 05:35:15', '2024-11-08 05:36:34');
INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `role_id`, `remember_token`, `default_localization_code`, `default_theme_mode`, `created_at`, `updated_at`) VALUES (4, 'Member User', 'member@member.com', NULL, '$2y$12$5kUaglc7K6aL4EauwesPtuNMIL.wBUgnBXCA.CImvB9TfRaH53OHC', 2, NULL, 'tr', 'light', '2024-11-08 05:37:07', '2024-11-08 10:30:37');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
