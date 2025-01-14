import { Feature } from "@/types/feature";
import { FaCut, FaCheckCircle, FaYarn, FaEye, FaRulerCombined } from 'react-icons/fa';  // Updated with more relevant icons

const featuresData: Feature[] = [
  {
    id: 1,
    icon: <FaCut size={40} />,  // Replaced with an icon related to tailoring
    title: "Bespoke Tailoring",
    paragraph:
      "Our skilled tailors offer custom-made garments to fit your body and style perfectly. Experience the art of personalization with every stitch.",
  },
  {
    id: 2,
    icon: <FaCut size={40} />,  // Replaced with scissors icon for tailoring
    title: "Precision Cutting",
    paragraph:
      "Each piece of fabric is cut with meticulous attention to detail to ensure a flawless fit and stylish finish for every garment.",
  },
  {
    id: 3,
    icon: <FaCheckCircle size={40} />,  // Replaced with checkmark icon for quality
    title: "Quality Assurance",
    paragraph:
      "We pride ourselves on delivering exceptional craftsmanship with each garment, ensuring the highest quality standards at every step.",
  },
  {
    id: 4,
    icon: <FaYarn size={40} />,  // Replaced with a thread icon for sewing
    title: "Premium Fabrics",
    paragraph:
      "Only the finest fabrics are chosen for our garments, offering you comfort, durability, and luxury with every wear.",
  },
  {
    id: 5,
    icon: <FaEye size={40} />,  // Replaced with an eye icon for detail
    title: "Attention to Detail",
    paragraph:
      "From intricate stitching to the perfect fit, our tailors focus on every detail to make sure your garment exceeds expectations.",
  },
  {
    id: 6,
    icon: <FaRulerCombined size={40} />,  // Replaced with ruler icon for measurements
    title: "Perfect Fit",
    paragraph:
      "Our tailoring process ensures that each piece is measured and crafted to fit you perfectly, enhancing both comfort and style.",
  },
  {
    id: 7,
    icon: <FaCut size={40} />,  // Replaced with a sewing machine for repeat services
    title: "Custom Alterations",
    paragraph:
      "We offer expert alterations, transforming your existing garments to fit your new preferences, style, or size perfectly.",
  },
];

export default featuresData;
