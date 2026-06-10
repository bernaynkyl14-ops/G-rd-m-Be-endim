// SceneSpot Mock Database & Storage Controller

const INITIAL_SCENES = [
  {
    id: "1",
    mediaTitle: "Wednesday",
    mediaType: "dizi",
    characterName: "Wednesday Addams",
    actorName: "Jenna Ortega",
    itemName: "İkonik Siyah Dans Elbisesi",
    category: "giyim",
    brand: "Alaïa (Replica/Inspired)",
    price: "1250",
    currency: "USD",
    sceneImg: "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=800&auto=format&fit=crop&q=80",
    productImg: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&auto=format&fit=crop&q=80",
    buyUrl: "https://www.maison-alaia.com",
    description: "Wednesday dizisinin 4. bölümündeki ünlü dans sahnesinde Wednesday'in giydiği gotik, kat kat tülden oluşan ikonik siyah elbise.",
    likes: 342,
    comments: [
      { user: "sinefil_merve", text: "Bu elbise gerçekten bir sanat eseri! Bulduğuma çok sevindim.", date: "2026-06-01" },
      { user: "gothic_queen", text: "Alternatif daha ucuz markaları bilen var mı?", date: "2026-06-02" }
    ],
    addedBy: "SceneMaster"
  },
  {
    id: "2",
    mediaTitle: "Sherlock",
    mediaType: "dizi",
    characterName: "Sherlock Holmes",
    actorName: "Benedict Cumberbatch",
    itemName: "Milford Yün Palto",
    category: "giyim",
    brand: "Belstaff",
    price: "1850",
    currency: "EUR",
    sceneImg: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=80",
    productImg: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=800&auto=format&fit=crop&q=80",
    buyUrl: "https://www.belstaff.com",
    description: "Sherlock'un Londra'nın soğuk ve sisli sokaklarında üzerinden neredeyse hiç çıkarmadığı, kırmızı ilik detaylı özel kesim Milford yün palto.",
    likes: 218,
    comments: [
      { user: "john_watson", text: "Bunun aynısından bende de olmalı, harika duruyor.", date: "2026-05-28" }
    ],
    addedBy: "BakerStreet221B"
  },
  {
    id: "3",
    mediaTitle: "Barbie",
    mediaType: "film",
    characterName: "Barbie",
    actorName: "Margot Robbie",
    itemName: "Neon Retro Patenler",
    category: "aksesuar",
    brand: "Impala Skates",
    price: "120",
    currency: "USD",
    sceneImg: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&auto=format&fit=crop&q=80",
    productImg: "https://images.unsplash.com/photo-1564982752979-3f7bc974d29a?w=800&auto=format&fit=crop&q=80",
    buyUrl: "https://impalaskate.com",
    description: "Barbie ve Ken'in gerçek dünyaya adım attıklarında Venedik Sahili'nde giydikleri 90'lar esintili, fosforlu sarı ve pembe detaylı patenler.",
    likes: 512,
    comments: [
      { user: "pinkLover", text: "Yaz için mükemmel bir seçim! Hemen sipariş verdim.", date: "2026-05-30" },
      { user: "ken_energy", text: "Ken'in dizlikleri de satılıyor mu acaba?", date: "2026-05-31" }
    ],
    addedBy: "MattelDream"
  },
  {
    id: "4",
    mediaTitle: "Friends",
    mediaType: "dizi",
    characterName: "Grup Ekibi",
    actorName: "Jennifer Aniston, Courteney Cox, etc.",
    itemName: "Central Perk Turuncu Kanepe",
    category: "mobilya",
    brand: "Central Perk Custom (Replica)",
    price: "950",
    currency: "USD",
    sceneImg: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&auto=format&fit=crop&q=80",
    productImg: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&auto=format&fit=crop&q=80",
    buyUrl: "https://www.wayfair.com",
    description: "Ekibin Central Perk kafesinde her bölümde üzerinde toplandığı, sıcak turuncu renkte, kadife kaplı, vintage tarzı ikonik kanepe.",
    likes: 729,
    comments: [
      { user: "ross_geller", text: "PIVOT! Merdivenlerden çıkarırken dikkat edin.", date: "2026-05-25" },
      { user: "coffee_mug", text: "Bunun üstünde kahve içmek paha biçilemez olurdu.", date: "2026-05-26" }
    ],
    addedBy: "GuntherCentral"
  },
  {
    id: "5",
    mediaTitle: "Breaking Bad",
    mediaType: "dizi",
    characterName: "Walter White (Heisenberg)",
    actorName: "Bryan Cranston",
    itemName: "Heisenberg Pork Pie Şapka",
    category: "aksesuar",
    brand: "Goorin Bros.",
    price: "150",
    currency: "USD",
    sceneImg: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=800&auto=format&fit=crop&q=80",
    productImg: "https://images.unsplash.com/photo-1534215754734-18e55d13ce35?w=800&auto=format&fit=crop&q=80",
    buyUrl: "https://www.goorin.com",
    description: "Walter White'ın Heisenberg kimliğine büründüğü karanlık sahnelerde taktığı ve karakterle özdeşleşen efsanevi siyah yün keçe Pork Pie şapkası.",
    likes: 489,
    comments: [
      { user: "jesse_pinkman", text: "Yeah science! Çok klas duruyor bence.", date: "2026-05-29" },
      { user: "say_my_name", text: "Heisenberg lives on!", date: "2026-05-30" }
    ],
    addedBy: "AlbuquerqueGuy"
  },
  {
    id: "6",
    mediaTitle: "Succession",
    mediaType: "dizi",
    characterName: "Kendall Roy",
    actorName: "Jeremy Strong",
    itemName: "Sessiz Lüks Siyah Kep Şapka",
    category: "aksesuar",
    brand: "Loro Piana",
    price: "625",
    currency: "USD",
    sceneImg: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80",
    productImg: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800&auto=format&fit=crop&q=80",
    buyUrl: "https://www.loropiana.com",
    description: "Kendall Roy'un zenginliğini logolar yerine ultra kaliteli kumaşlarla sergilediği 'Quiet Luxury' tarzının sembolü olan kaşmir sade kep.",
    likes: 194,
    comments: [
      { user: "waystar_ceo", text: "Logo olmamasına rağmen bu fiyat... İşte gerçek lüks.", date: "2026-05-27" }
    ],
    addedBy: "RoycoInsider"
  }
];

class SceneSpotDatabase {
  constructor() {
    this.key = "scenespot_data";
    this.init();
  }

  init() {
    if (!localStorage.getItem(this.key)) {
      localStorage.setItem(this.key, JSON.stringify(INITIAL_SCENES));
    }
  }

  getAll() {
    try {
      return JSON.parse(localStorage.getItem(this.key)) || [];
    } catch (e) {
      console.error("Database reading error, resetting database", e);
      return INITIAL_SCENES;
    }
  }

  saveAll(data) {
    localStorage.setItem(this.key, JSON.stringify(data));
  }

  add(scene) {
    const data = this.getAll();
    const newScene = {
      id: Date.now().toString(),
      likes: 0,
      comments: [],
      addedBy: "Misafir Kullanıcı",
      ...scene
    };
    data.unshift(newScene); // Add to the top
    this.saveAll(data);
    return newScene;
  }

  like(id) {
    const data = this.getAll();
    const item = data.find(x => x.id === id);
    if (item) {
      item.likes = (item.likes || 0) + 1;
      this.saveAll(data);
      return item.likes;
    }
    return 0;
  }

  addComment(id, user, text) {
    const data = this.getAll();
    const item = data.find(x => x.id === id);
    if (item) {
      const newComment = {
        user: user || "Misafir",
        text: text,
        date: new Date().toISOString().split('T')[0]
      };
      if (!item.comments) item.comments = [];
      item.comments.push(newComment);
      this.saveAll(data);
      return newComment;
    }
    return null;
  }

  getCurrentUser() {
    return localStorage.getItem("scenespot_user") || null;
  }

  login(username, password) {
    if (username && username.trim().length >= 3) {
      const sanitized = username.trim().replace(/^@/, '');
      localStorage.setItem("scenespot_user", sanitized);
      return sanitized;
    }
    return null;
  }

  logout() {
    localStorage.removeItem("scenespot_user");
  }
}

const db = new SceneSpotDatabase();
export default db;
