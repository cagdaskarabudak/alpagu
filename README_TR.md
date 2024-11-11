**English: [README.md](README.md)**

## <img src="https://alpagu.net/alpagu.webp" width="25" alt="Alpagu Logo"> Alpagu Blog ve Kişisel Web Sitesi Projesi | TR

**Proje Durumu:** *Geliştirilme Aşamasında*

**Kullanılan Teknolojiler:**
- Laravel 11
- InertiaJS
- React 18

**Kullanılan Kütüphaneler:**
- alpagu-icons (İkon Kütüphanesi)
- boxicons (İkon Kütüphanesi)
- Bootstrap 5 (Ön Yüz Araç Kiti)
- i18n (Yerelleştirme Çerçevesi)

 **Oluşturulan Kütüphaneler / Bileşenler:**
- **Rating Bileşeni**:
	*Rating-stars gibi çalışan bir derecelendirme kütüphanesi oluşturduk. Bir değer, renkler ve derecelendirme yıldızlarının boyutlarını verin ve derecelendirme yıldızları üretin.*
	
- **Customizer Bileşeni**:
	*Sitenizin tema modlarını (koyu, açık) gerçek zamanlı olarak değiştirmenize ve i18n kütüphanesini yönetmenize (Dil değişikliği) olanak sağlayan bir bileşendir.*
	
- **Live Chat Bileşeni**:
	*Site sahibine (bana) gerçek zamanlı mesaj göndermenizi ve benimle anlık sohbetler yapmanızı sağlayan bir bileşendir. Şu anda kapalıdır. Siteyle uyumlu bir mobil uygulama geliştirdiğimde kullanıma sunacağım.*

- **Lightbox Bileşeni**
	*Bir Resimler dizisini galeriye dönüştürür (lightbox gibi).*

## Güncellemeler & İşlemler

- **09.11.2024**
	- Blog sistemi, Bileşenler, ve Modeller, geliştirildi.
	- Sitenin yavaşlamasına neden olan Customizer Bileşenindeki bazı hatalar düzeltildi.
	- Rating Bileşeni geliştirildi (rate-stars gibi kütüphanelere benzer şekilde çalışır).
	- Lightbox Bileşeni revize edildi ve hatalar giderildi.

- **10.11.2024**
	- Blog yazılarına ve Portföydeki Projelere yorum yapma, yapılan yorumlara cevap verme, yorum ile derecelendirme sistemi geliştirildi.
	- Rating bileşeni sadece okunabilir çalışıyordu, artık onRateChange emiti ile veri alınabilir ve etkileşime girilebilir hale getirildi.

- **11.11.2024**
	- Setting modeli oluşturulup:
		- Site başlığı
		- Site açıklaması 
		- Site anahtar kelimeleri 
		- site sahibi bilgileri (İsim, Fotoğraf, E-Posta, Telefon, Sosyal Medya)
		- Site logosu
		- Customizer Durumu
		- Live Chat Durumu
		- Blog sayfası durumu
		- Portföy sayfası durumu
		- Blog yazılarına yorum yapabilme durumu
		- Projelere yorum yapabilme durumu
		- Blog yazılarındaki yorumların görünürlüğü
		- Projelerdeki yorumların görünürlüğü
		yönetilebilir hale getirildi.
	- Yönetim paneli geliştirildi.
	- Article ekleme ve Proje ekleme methodları ve sayfaları yazıldı.
	- CKEditor entegre edildi.
	- react-lazy-image kütüphanesi entegre edildi.
	- Dark ve Light SASS dosyaları tekrar eşitlendi.

## İletişim
*İletişim için lütfen [cagdaskarabudak@outlook.com](mailto:cagdaskarabudak@outlook.com) adresine mail gönderin.*