import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "./firebase";

// تمام ہوم پیج ڈیٹا اسٹور کرنے کا فنکشن
export const storeHomePageData = async () => {
  try {
    // ہیرو سیکشن ڈیٹا
    await addDoc(collection(db, "homeSections"), {
      sectionType: "hero",
      backgroundImage: "/images/banner.jpg",
      height: "60vh",
      createdAt: new Date()
    });

    // کیٹیگری سیکشن ڈیٹا
    const categories = [
      { label: 'HeadPhone', img: '/images/headphone.jpg' },
      { label: 'Wireless Chargere', img: '/images/wireless.jpg' },
      { label: 'Cc-type', img: '/images/c-type.jpg' }
    ];
    
    await addDoc(collection(db, "homeSections"), {
      sectionType: "categories",
      categories: categories,
      createdAt: new Date()
    });

    // برانڈز سیکشن ڈیٹا
    const brands = [
      '/images/nike.png',
      '/images/adidas.png',
      '/images/puma.png',
      '/images/zara.png',
      '/images/hm.png',
      '/images/gucci.png'
    ];
    
    await addDoc(collection(db, "homeSections"), {
      sectionType: "brands",
      brands: brands,
      createdAt: new Date()
    });

    // About سیکشن ڈیٹا
    await addDoc(collection(db, "homeSections"), {
      sectionType: "about",
      title: "About Us",
      description: "ODO is your one-stop shop for all things fashion. Whether you're looking for something casual, classy, or comfy, we've got collections for Men, Women, and Kids that will elevate your style with elegance.",
      bgColor: "bg-blue-100",
      textColor: "text-blue-800",
      createdAt: new Date()
    });

    console.log("تمام ڈیٹا کامیابی سے اسٹور ہو گیا!");
  } catch (error) {
    console.error("ڈیٹا اسٹور کرنے میں خرابی:", error);
    throw error;
  }
};

// ہوم پیج ڈیٹا وصول کرنے کا فنکشن
export const getHomePageData = async () => {
  try {
    const snapshot = await getDocs(collection(db, "homeSections"));
    const sections = {};
    
    snapshot.forEach(doc => {
      const data = doc.data();
      sections[data.sectionType] = data;
    });
    
    return sections;
  } catch (error) {
    console.error("ڈیٹا وصول کرنے میں خرابی:", error);
    throw error;
  }
};