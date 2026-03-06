export interface Service {
  id: number;
  name: string;
  description: string;
}

export interface Model {
  id: number;
  name: string;
  age: number;
  nationality: string;
  specialty: string;
  experienceYears: number;
  description: string;
  price1h: number;
  priceNight: number;
  imageUrl: string;
}

import img1 from "@assets/WhatsApp_Image_2026-03-02_at_09.28.30_(1)_1772691643855.jpeg";
import img2 from "@assets/WhatsApp_Image_2026-03-02_at_09.28.31_(1)_1772691643854.jpeg";
import img3 from "@assets/WhatsApp_Image_2026-03-02_at_09.28.32_(1)_1772691643852.jpeg";
import img4 from "@assets/WhatsApp_Image_2026-03-02_at_09.28.33_(1)_1772691643850.jpeg";
import img5 from "@assets/WhatsApp_Image_2026-03-02_at_09.28.34_1772691643849.jpeg";

import rImg1 from "@assets/media__1772703415302.jpg";
import rImg2 from "@assets/media__1772703415465.jpg";
import rImg3 from "@assets/media__1772703415525.jpg";
import rImg4 from "@assets/media__1772703415572.jpg";
import rImg5 from "@assets/media__1772703415588.jpg";

export function useServices() {
  const services: Service[] = [
    { id: 1, name: "Full Body Swedish Massage", description: "Long, flowing strokes designed to relax the entire body, improve circulation and ease muscle tension." },
    { id: 2, name: "Deep Tissue Therapy", description: "Firm pressure applied to deeper layers of muscle to release chronic knots and stiffness." },
    { id: 3, name: "Aroma Luxury Spa", description: "Infused essential oils combined with a gentle touch to transport you to a state of complete bliss." },
    { id: 4, name: "Sensual Model Therapy", description: "A highly personalized, aesthetic session with our premium model therapists for ultimate relaxation." }
  ];
  return { data: services, isLoading: false, error: null };
}

export function useModels() {
  const models: Model[] = [
    {
      id: 1,
      name: "Aaradhya",
      age: 22,
      nationality: "Indian",
      specialty: "Aroma Luxury",
      experienceYears: 4,
      description: "Expert in deep relaxation and stress relief.",
      price1h: 3500,
      priceNight: 12000,
      imageUrl: img1
    },
    {
      id: 2,
      name: "Kiara",
      age: 24,
      nationality: "Indian",
      specialty: "Swedish Massage",
      experienceYears: 3,
      description: "Providing healing touch with soothing energy.",
      price1h: 3500,
      priceNight: 12000,
      imageUrl: img2
    },
    {
      id: 3,
      name: "Riya",
      age: 21,
      nationality: "Indian",
      specialty: "Deep Tissue Therapy",
      experienceYears: 2,
      description: "Specialized in sensual, full-body massages.",
      price1h: 3500,
      priceNight: 12000,
      imageUrl: img3
    },
    {
      id: 4,
      name: "Neha",
      age: 23,
      nationality: "Indian",
      specialty: "Relaxation Spa",
      experienceYears: 5,
      description: "Experienced therapist offering luxurious sessions.",
      price1h: 3500,
      priceNight: 12000,
      imageUrl: img4
    },
    {
      id: 5,
      name: "Anjali",
      age: 25,
      nationality: "Indian",
      specialty: "Sensual Model Therapy",
      experienceYears: 6,
      description: "Aesthetic profile designed for premium customers.",
      price1h: 3500,
      priceNight: 12000,
      imageUrl: img5
    },
    {
      id: 6,
      name: "Anna",
      age: 23,
      nationality: "Russian",
      specialty: "Swedish Massage",
      experienceYears: 4,
      description: "Exquisite European experience full of relaxation.",
      price1h: 6000,
      priceNight: 20000,
      imageUrl: rImg1
    },
    {
      id: 7,
      name: "Natalia",
      age: 24,
      nationality: "Russian",
      specialty: "Aroma Luxury",
      experienceYears: 3,
      description: "Relaxing touch with exotic oils and beautiful vibes.",
      price1h: 6000,
      priceNight: 20000,
      imageUrl: rImg2
    },
    {
      id: 8,
      name: "Elena",
      age: 22,
      nationality: "Russian",
      specialty: "Deep Tissue Therapy",
      experienceYears: 2,
      description: "Strong yet gentle techniques for perfect unwinding.",
      price1h: 6000,
      priceNight: 20000,
      imageUrl: rImg3
    },
    {
      id: 9,
      name: "Sofia",
      age: 21,
      nationality: "Russian",
      specialty: "Relaxation Spa",
      experienceYears: 1,
      description: "Young and beautiful with a soothing touch.",
      price1h: 6000,
      priceNight: 20000,
      imageUrl: rImg4
    },
    {
      id: 10,
      name: "Katya",
      age: 26,
      nationality: "Russian",
      specialty: "Sensual Model Therapy",
      experienceYears: 5,
      description: "Premium model for elite luxury companionship.",
      price1h: 6000,
      priceNight: 20000,
      imageUrl: rImg5
    }
  ];
  return { data: models, isLoading: false, error: null };
}
