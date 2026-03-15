import ProjectClient from "./ProjectClient";

// --- TÜM PROJELERİN VERİTABANI ---
const projectsData: Record<string, any> = {
  // ANA SAYFA PROJELERİ
  "ihtiyacim-ne": {
    title: "İhtiyacım Ne?",
    category: "Sosyal Yardımlaşma Platformu",
    date: "2023",
    desc: "İnsanların ihtiyaçlarını dile getirebildiği, filtrelemeli sosyal yardımlaşma ağı.",
    longDesc: "Bu proje, toplumdaki yardımlaşma bilincini teknoloji ile birleştirmek için tasarlandı. Kullanıcılar harita üzerinden çevrelerindeki ihtiyaç sahiplerini görebilir, güvenli mesajlaşma altyapısı ile iletişime geçebilirler.",
    tech: ["PHP", "JavaScript", "MySQL", "Bootstrap", "Google Maps API"],
    liveUrl: "https://ihtiyacimne.com",
    githubUrl: "https://github.com/fyt19",
    image: "/ihtiyacimne.png", 
    features: ["Konum bazlı ilan filtreleme", "Güven puanı algoritması", "Mobil uyumlu responsive tasarım"]
  },
  "kucuk-burjuvazi": {
    title: "Küçük Burjuvazi",
    category: "Lüks E-Ticaret Arayüzü",
    date: "2024",
    desc: "Lüks tüketim odaklı, animasyonlu e-ticaret vitrini.",
    longDesc: "Standart e-ticaret sitelerinin sıkıcılığından uzak, kullanıcıya bir 'deneyim' sunan özel tasarım. Next.js ve Framer Motion ile geliştirildi.",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    liveUrl: "https://kucukburjuvazi.com",
    githubUrl: "https://github.com/fyt19",
    image: "/burjuvazi.png",
    features: ["SSR ile SEO", "Özel animasyonlar", "Sepet yönetimi"]
  },
  "gazete-ege": {
    title: "Gazete Ege CMS",
    category: "İçerik Yönetim Sistemi",
    date: "2024",
    desc: "Yerel bir haber platformu için özel CMS paneli.",
    longDesc: "Node.js ile sıfırdan yazılan, editör dostu ve yüksek trafikli haber siteleri için optimize edilmiş yönetim paneli.",
    tech: ["Node.js", "MongoDB", "React Admin"],
    liveUrl: "https://gazeteege.com",
    githubUrl: "https://github.com/fyt19",
    image: "/gazeteege.png",
    features: ["Rol tabanlı yetki", "Görsel optimizasyonu", "Analitikler"]
  },

  // DİĞER PROJELER
  "tubitak-proje": {
    title: "İl İlçe Köy Bilgi Sistemi",
    category: "Web & Ödüllü Proje",
    date: "2023",
    desc: "TÜBİTAK 2209-A ödüllü, halk yararına geliştirilen bilgi sistemi.",
    longDesc: "Büyük veri akışlarının analiz edilmesi ve şehir yoğunluk kümelerinin tespiti üzerine geliştirilen bu proje, TÜBİTAK tarafından ödüle layık görülmüştür.",
    tech: ["PHP", "MySQL", "Data Analysis"],
    liveUrl: "https://il-ilce-koy-bilgi-sistemi.com.tr/",
    githubUrl: "https://github.com/fyt19",
    image: "https://placehold.co/600x400/1a1a1a/FFF?text=TUBITAK+Proje",
    features: ["Veri Analizi", "TÜBİTAK Ödülü", "Halk Yararına Teknoloji"]
  },
  "mohu-app": {
    title: "MOHU Mobil",
    category: "Mobil Uygulama",
    date: "2024",
    desc: "Niğde Ömer Halisdemir Üniversitesi öğrencileri için kampüs rehberi.",
    longDesc: "Üniversiteye yeni gelen öğrenciler için bir el kitabı niteliğinde olan bu uygulama; kampüs planı, yemek listesi, sınav takvimi gibi kritik bilgileri tek elde toplar.",
    tech: ["Flutter", "Dart", "Rest API"],
    liveUrl: "", 
    githubUrl: "https://github.com/fyt19",
    image: "https://placehold.co/600x400/1a1a1a/FFF?text=MOHU+App",
    features: ["Kampüs Haritası", "Yemekhane Menüsü", "Sınav Takvimi"]
  },
  "kargom-ucuz": {
    title: "Kargom Ucuz Backend",
    category: "Backend & Lojistik",
    date: "2025",
    desc: "Kargo maliyet optimizasyonu sağlayan backend sistemi.",
    longDesc: "DHL, Aras, Yurtiçi gibi kargo firmalarının tekliflerini API üzerinden çekip karşılaştıran ve en uygun fiyatı sunan karmaşık bir backend mimarisi.",
    tech: ["Node.js", "Express", "Microservices"],
    liveUrl: "",
    githubUrl: "https://github.com/fyt19",
    image: "https://placehold.co/600x400/1a1a1a/FFF?text=Kargo+Backend",
    features: ["Fiyat Karşılaştırma Algoritması", "Çoklu API Entegrasyonu", "Yüksek Performans"]
  },
  "voltarge-go": {
    title: "VoltargeGo",
    category: "Mobil Uygulama",
    date: "2024",
    desc: "Elektrikli araç şarj istasyonu bulucu.",
    longDesc: "Elektrikli araç sahiplerinin yolda kalmaması için en yakın şarj istasyonlarını bulan ve rota çizen harita tabanlı mobil uygulama.",
    tech: ["Flutter", "Google Maps API", "Geolocation"],
    liveUrl: "",
    githubUrl: "https://github.com/fyt19",
    image: "https://placehold.co/600x400/1a1a1a/FFF?text=VoltargeGo",
    features: ["Rota Optimizasyonu", "İstasyon Filtreleme", "Gerçek Zamanlı Konum"]
  },
  "face-detection": {
    title: "Face Detection AI",
    category: "Yapay Zeka",
    date: "2024",
    desc: "Görüntü işleme ile kişi bulma uygulaması.",
    longDesc: "Galerinizdeki binlerce fotoğrafı tarayarak, verdiğiniz referans fotoğraftaki kişiyi bulan gelişmiş bir yapay zeka algoritması.",
    tech: ["Python", "TensorFlow", "OpenCV"],
    liveUrl: "",
    githubUrl: "https://github.com/fyt19",
    image: "https://placehold.co/600x400/1a1a1a/FFF?text=Face+AI",
    features: ["Yüz Tanıma", "Hızlı Tarama", "Yerel İşleme (Gizlilik)"]
  },
  "sosyal-app": {
    title: "SosyalApp",
    category: "Sosyal Medya",
    date: "2024",
    desc: "Faydalı içerik odaklı, AI destekli sosyal platform.",
    longDesc: "Çöp içeriklerden arındırılmış, yapay zeka ile içeriklerin kalitesinin analiz edildiği ve sadece faydalı bilgilerin paylaşıldığı bir sosyal ağ.",
    tech: ["Flutter", "Firebase", "AI Analysis"],
    liveUrl: "",
    githubUrl: "https://github.com/fyt19",
    image: "https://placehold.co/600x400/1a1a1a/FFF?text=Sosyal+App",
    features: ["AI İçerik Analizi", "Temiz Akış", "Topluluk Odaklı"]
  },
  "al-chatt": {
    title: "AI Chatt",
    category: "Yapay Zeka",
    date: "2024",
    desc: "Llama modeli ile çalışan sohbet botu.",
    longDesc: "Açık kaynaklı Llama dil modelini kullanarak geliştirilen, internete ihtiyaç duymadan (lokal versiyonda) çalışabilen akıllı sohbet asistanı.",
    tech: ["Python", "Llama LLM", "PyTorch"],
    liveUrl: "",
    githubUrl: "https://github.com/fyt19",
    image: "https://placehold.co/600x400/1a1a1a/FFF?text=AI+Chatt",
    features: ["Doğal Dil İşleme", "Bağlam Koruma", "Yüksek Doğruluk"]
  },
  "gano-hesapla": {
    title: "Gano Hesapla",
    category: "Eğitim Aracı",
    date: "2023",
    desc: "PDF tarayarak ortalama hesaplayan mobil araç.",
    longDesc: "Üniversite öğrencilerinin transkript PDF'lerini yükleyerek saniyeler içinde genel ağırlıklı not ortalamalarını (GANO) hesaplayabildikleri pratik araç.",
    tech: ["Flutter", "OCR Technology", "PDF Parsing"],
    liveUrl: "https://ganohesapla.com",
    githubUrl: "https://github.com/fyt19",
    image: "https://placehold.co/600x400/1a1a1a/FFF?text=Gano+App",
    features: ["PDF Okuma (OCR)", "Hızlı Hesaplama", "Kullanıcı Dostu Arayüz"]
  },
  "eticaret-b2b": {
    title: "B2B E-Ticaret",
    category: "E-Ticaret",
    date: "2024",
    desc: "Kapsamlı mobil e-ticaret çözümü.",
    longDesc: "Hem son kullanıcıya (B2C) hem de işletmelere (B2B) hitap eden, stok takibi ve sipariş yönetimini tek panelden sunan mobil uygulama.",
    tech: ["Flutter", "Rest API", "State Management"],
    liveUrl: "",
    githubUrl: "https://github.com/fyt19",
    image: "https://placehold.co/600x400/1a1a1a/FFF?text=E-Ticaret",
    features: ["Çoklu Kullanıcı Tipi", "Stok Yönetimi", "Sipariş Takibi"]
  }
};

// --- HATA ÇÖZÜMÜ ---
// Statik Export için ID'leri sunucu tarafında oluşturuyoruz.
export async function generateStaticParams() {
  return Object.keys(projectsData).map((id) => ({
    id: id,
  }));
}

// Ana Sayfa (Server Component)
export default async function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projectsData[id];

  // Veriyi Client Component'e aktarıyoruz
  return <ProjectClient project={project} id={id} />;
}