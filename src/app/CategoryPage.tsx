import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ProductCard } from './components/ProductCard';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

export function CategoryPage() {
  const { categoryName } = useParams<{ categoryName: string }>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Category-specific product data
  const categoryData: Record<string, { title: string; products: Array<{ id: number; title: string; region: string; image: string; showMoreInfo: boolean }> }> = {
    'sarees': {
      title: 'Sarees',
      products: [
        {
          id: 1,
          title: 'Kanjivaram Silk Saree',
          region: 'Kanchipuram',
          image: 'https://images.unsplash.com/photo-1742287721821-ddf522b3f37b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWxrJTIwc2FyZWUlMjB0cmFkaXRpb25hbHxlbnwxfHx8fDE3Njc0NDgzNTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          showMoreInfo: false,
        },
        {
          id: 2,
          title: 'Banarasi Silk Saree',
          region: 'Varanasi',
          image: 'https://images.unsplash.com/photo-1547702128-e8e44b310045?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5hcmFzaSUyMHNhcmVlJTIwaW5kaWF8ZW58MXx8fHwxNzY3NDQ4MzQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          showMoreInfo: false,
        },
        {
          id: 3,
          title: 'Patola Saree',
          region: 'Gujarat',
          image: 'https://images.unsplash.com/photo-1583590019912-19cdc55ec80e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXRvbGElMjBzYXJlZXxlbnwxfHx8fDE3Njc0NDgzNDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          showMoreInfo: false,
        },
        {
          id: 4,
          title: 'Bandhani Saree',
          region: 'Rajasthan',
          image: 'https://images.unsplash.com/photo-1664636403936-d4d25230c8c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5kaGFuaSUyMHNhcmVlfGVufDF8fHx8MTc2NzQ0ODM0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          showMoreInfo: false,
        },
        {
          id: 5,
          title: 'Tussar Silk Saree',
          region: 'Jharkhand',
          image: 'https://images.unsplash.com/photo-1742287721821-ddf522b3f37b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0dXNzYXIlMjBzaWxrJTIwc2FyZWV8ZW58MXx8fHwxNzY3NDQ4MzQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          showMoreInfo: false,
        },
        {
          id: 6,
          title: 'Chiffon Saree',
          region: 'Mumbai',
          image: 'https://images.unsplash.com/photo-1664636403936-d4d25230c8c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlmZm9uJTIwc2FyZWUlMjBpbmRpYXxlbnwxfHx8fDE3Njc0NDgzNDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          showMoreInfo: false,
        },
        {
          id: 7,
          title: 'Cotton Handloom Saree',
          region: 'West Bengal',
          image: 'https://images.unsplash.com/photo-1656660062743-05a99d85c903?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3R0b24lMjBzYXJlZSUyMGhhbmRsb29tfGVufDF8fHx8MTc2NzQ0ODM1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          showMoreInfo: false,
        },
        {
          id: 8,
          title: 'Georgette Embroidered Saree',
          region: 'Delhi',
          image: 'https://images.unsplash.com/photo-1657470036063-c7e49da31393?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW9yZ2V0dGUlMjBzYXJlZSUyMGVtYnJvaWRlcmVkfGVufDF8fHx8MTc2NzQ0ODM1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          showMoreInfo: false,
        },
      ]
    },
    'dresses': {
      title: 'Dresses',
      products: [
        {
          id: 1,
          title: 'Ethnic Maxi Dress',
          region: 'Jaipur',
          image: 'https://images.unsplash.com/photo-1729347917808-e3e35a462fec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBldGhuaWMlMjBkcmVzc3xlbnwxfHx8fDE3Njc0NDgzNTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          showMoreInfo: false,
        },
        {
          id: 2,
          title: 'Anarkali Dress',
          region: 'Lucknow',
          image: 'https://images.unsplash.com/photo-1571587289339-cb7da03fb5a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmFya2FsaSUyMGRyZXNzJTIwaW5kaWF8ZW58MXx8fHwxNzY3NDQ4MzUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          showMoreInfo: false,
        },
        {
          id: 3,
          title: 'Indo-Western Dress',
          region: 'Delhi',
          image: 'https://images.unsplash.com/photo-1695461569773-e7c75f38ac3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvJTIwd2VzdGVybiUyMGRyZXNzfGVufDF8fHx8MTc2NzQ0ODM1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          showMoreInfo: false,
        },
        {
          id: 4,
          title: 'Kurti Palazzo Set',
          region: 'Punjab',
          image: 'https://images.unsplash.com/photo-1562008088-fe677557802e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrdXJ0aSUyMHBhbGF6em8lMjBzZXR8ZW58MXx8fHwxNzY3NDQ4MzU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          showMoreInfo: false,
        },
        {
          id: 5,
          title: 'Long Ethnic Gown',
          region: 'Hyderabad',
          image: 'https://images.unsplash.com/photo-1761125064797-3cb8a6e80a95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXhpJTIwZHJlc3MlMjBldGhuaWN8ZW58MXx8fHwxNzY3NDQ4MzU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          showMoreInfo: false,
        },
        {
          id: 6,
          title: 'Handloom Cotton Dress',
          region: 'Kerala',
          image: 'https://images.unsplash.com/photo-1718435112323-c826511d5252?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3R0b24lMjBkcmVzcyUyMGhhbmRsb29tfGVufDF8fHx8MTc2NzQ0ODM1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          showMoreInfo: false,
        },
        {
          id: 7,
          title: 'Embroidered Silk Dress',
          region: 'Mumbai',
          image: 'https://images.unsplash.com/photo-1756483510837-83203eba47e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWxrJTIwZHJlc3MlMjBlbWJyb2lkZXJlZHxlbnwxfHx8fDE3Njc0NDgzNTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          showMoreInfo: false,
        },
        {
          id: 8,
          title: 'Designer Party Dress',
          region: 'Bangalore',
          image: 'https://images.unsplash.com/photo-1729347917808-e3e35a462fec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBldGhuaWMlMjBkcmVzc3xlbnwxfHx8fDE3Njc0NDgzNTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          showMoreInfo: false,
        },
      ]
    },
    'jewellery': {
      title: 'Jewellery',
      products: [
        {
          id: 1,
          title: 'Gold Necklace',
          region: 'Tamil Nadu',
          image: 'https://images.unsplash.com/photo-1661877574666-c6574f69fa9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBnb2xkJTIwbmVja2xhY2V8ZW58MXx8fHwxNzY3NDQ4MzU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          showMoreInfo: false,
        },
        {
          id: 2,
          title: 'Diamond Earrings',
          region: 'Hyderabad',
          image: 'https://images.unsplash.com/photo-1728120098026-b66d6cd9ae89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWFtb25kJTIwZWFycmluZ3MlMjBpbmRpYXxlbnwxfHx8fDE3Njc0NDgzNTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          showMoreInfo: false,
        },
        {
          id: 3,
          title: 'Temple Jewelry',
          region: 'Kerala',
          image: 'https://images.unsplash.com/photo-1756370256926-e48ca54c5efe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZW1wbGUlMjBqZXdlbHJ5JTIwc291dGglMjBpbmRpYW58ZW58MXx8fHwxNzY3NDQ4MzU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          showMoreInfo: false,
        },
        {
          id: 4,
          title: 'Kundan Polki Set',
          region: 'Rajasthan',
          image: 'https://images.unsplash.com/photo-1746801965938-6d36fd680162?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrdW5kYW4lMjBwb2xraSUyMGpld2Vscnl8ZW58MXx8fHwxNzY3NDQ4MzU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          showMoreInfo: false,
        },
        {
          id: 5,
          title: 'Pearl Jewelry Set',
          region: 'Kolkata',
          image: 'https://images.unsplash.com/photo-1759482067986-912a55696245?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFybCUyMGpld2VscnklMjB0cmFkaXRpb25hbHxlbnwxfHx8fDE3Njc0NDgzNTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          showMoreInfo: false,
        },
        {
          id: 6,
          title: 'Antique Silver Jewelry',
          region: 'Gujarat',
          image: 'https://images.unsplash.com/photo-1764861127777-a4022156402c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbnRpcXVlJTIwc2lsdmVyJTIwamV3ZWxyeXxlbnwxfHx8fDE3Njc0NDgzNjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          showMoreInfo: false,
        },
        {
          id: 7,
          title: 'Bridal Jewelry Set',
          region: 'Delhi',
          image: 'https://images.unsplash.com/photo-1759906760656-7a28f6d440de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlkYWwlMjBqZXdlbHJ5JTIwc2V0fGVufDF8fHx8MTc2NzQ0ODM2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          showMoreInfo: false,
        },
        {
          id: 8,
          title: 'Gold Bangles',
          region: 'Mumbai',
          image: 'https://images.unsplash.com/photo-1760786933027-fe2ad82957f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwYmFuZ2xlcyUyMGluZGlhfGVufDF8fHx8MTc2NzQ0ODM2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          showMoreInfo: false,
        },
      ]
    },
    'men': {
      title: 'Men\'s Clothing',
      products: [
        {
          id: 1,
          title: 'Traditional Kurta',
          region: 'Lucknow',
          image: 'https://images.unsplash.com/photo-1727835523550-18478cacefa2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBtZW4lMjBrdXJ0YXxlbnwxfHx8fDE3Njc0NDgwNTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          showMoreInfo: false,
        },
        {
          id: 2,
          title: 'Sherwani',
          region: 'Delhi',
          image: 'https://images.unsplash.com/photo-1519998514079-6fbf6c0a1064?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBtZW4lMjBzaGVyd2FuaXxlbnwxfHx8fDE3Njc0MjMxMTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          showMoreInfo: false,
        },
        {
          id: 3,
          title: 'Nehru Jacket',
          region: 'Jodhpur',
          image: 'https://images.unsplash.com/photo-1649701243269-5d10a1b4a396?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBtZW4lMjBuZWhydSUyMGphY2tldHxlbnwxfHx8fDE3Njc0NDgwNTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          showMoreInfo: false,
        },
        {
          id: 4,
          title: 'Bandhgala',
          region: 'Rajasthan',
          image: 'https://images.unsplash.com/photo-1720382397034-7f34dc99a03e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBtZW4lMjBiYW5kaGdhbGF8ZW58MXx8fHwxNzY3NDQ4MDU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          showMoreInfo: false,
        },
        {
          id: 5,
          title: 'Dhoti Kurta',
          region: 'Maharashtra',
          image: 'https://images.unsplash.com/photo-1759816660075-31cf3d61c9c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBtZW4lMjBkaG90aXxlbnwxfHx8fDE3Njc0NDgwNTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          showMoreInfo: false,
        },
        {
          id: 6,
          title: 'Pathani Suit',
          region: 'Kashmir',
          image: 'https://images.unsplash.com/photo-1519998514079-6fbf6c0a1064?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBtZW4lMjBwYXRoYW5pJTIwc3VpdHxlbnwxfHx8fDE3Njc0NDgwNTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          showMoreInfo: false,
        },
        {
          id: 7,
          title: 'Angrakha',
          region: 'Gujarat',
          image: 'https://images.unsplash.com/photo-1739249432260-0bcfdc382e5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBtZW4lMjBhbmdyYWtoYXxlbnwxfHx8fDE3Njc0NDgwNTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          showMoreInfo: false,
        },
        {
          id: 8,
          title: 'Silk Shirt',
          region: 'Bangalore',
          image: 'https://images.unsplash.com/photo-1548229965-d91d0cadf732?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBtZW4lMjB0cmFkaXRpb25hbCUyMHNoaXJ0fGVufDF8fHx8MTc2NzQ0ODA2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          showMoreInfo: false,
        },
      ]
    },
    'women': {
      title: 'Women\'s Clothing',
      products: [
        {
          id: 1,
          title: 'Silk Saree',
          region: 'Kanchipuram',
          image: 'https://images.unsplash.com/photo-1718104561384-c51083b9ace8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3b21lbiUyMHNhcmVlfGVufDF8fHx8MTc2NzQ0ODEzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          showMoreInfo: false,
        },
        {
          id: 2,
          title: 'Bridal Lehenga',
          region: 'Jaipur',
          image: 'https://images.unsplash.com/photo-1760461805241-dba33224ac20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3b21lbiUyMGxlaGVuZ2F8ZW58MXx8fHwxNzY3NDQ4MTM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          showMoreInfo: false,
        },
        {
          id: 3,
          title: 'Salwar Kameez',
          region: 'Punjab',
          image: 'https://images.unsplash.com/photo-1761393382562-8ad78afa1179?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3b21lbiUyMHNhbHdhciUyMGthbWVlenxlbnwxfHx8fDE3Njc0NDgxMzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          showMoreInfo: false,
        },
        {
          id: 4,
          title: 'Anarkali Suit',
          region: 'Lucknow',
          image: 'https://images.unsplash.com/photo-1701181383365-9f6155f2151f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3b21lbiUyMGFuYXJrYWxpfGVufDF8fHx8MTc2NzQ0ODEzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          showMoreInfo: false,
        },
        {
          id: 5,
          title: 'Designer Kurti',
          region: 'Delhi',
          image: 'https://images.unsplash.com/photo-1759840278478-826c0d0f110e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3b21lbiUyMGt1cnRpfGVufDF8fHx8MTc2NzQ0ODEzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          showMoreInfo: false,
        },
        {
          id: 6,
          title: 'Embroidered Dupatta',
          region: 'Gujarat',
          image: 'https://images.unsplash.com/photo-1756483571539-0785b86baa38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3b21lbiUyMGR1cGF0dGF8ZW58MXx8fHwxNzY3NDQ4MTM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          showMoreInfo: false,
        },
        {
          id: 7,
          title: 'Ethnic Gown',
          region: 'Mumbai',
          image: 'https://images.unsplash.com/photo-1756483510837-83203eba47e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3b21lbiUyMGdvd24lMjBldGhuaWN8ZW58MXx8fHwxNzY3NDQ4MTQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          showMoreInfo: false,
        },
        {
          id: 8,
          title: 'Sharara Set',
          region: 'Hyderabad',
          image: 'https://images.unsplash.com/photo-1761125064798-530c13c32b6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3b21lbiUyMHNoYXJhcmF8ZW58MXx8fHwxNzY3NDQ4MTQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          showMoreInfo: false,
        },
      ]
    },
    'jewelry-accessories': {
      title: 'Jewelry & Accessories',
      products: [
        {
          id: 1,
          title: 'Temple Jewelry',
          region: 'Tamil Nadu',
          image: 'https://images.unsplash.com/photo-1760786933663-327c858d5434?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBqZXdlbHJ5JTIwYWNjZXNzb3JpZXN8ZW58MXx8fHwxNzY2NzYwNzYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          showMoreInfo: false,
        },
        {
          id: 2,
          title: 'Kundan Necklace',
          region: 'Rajasthan',
          image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBuZWNrbGFjZSUyMGdvbGR8ZW58MXx8fHwxNzY2ODIwNDgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          showMoreInfo: false,
        },
        {
          id: 3,
          title: 'Meenakari Earrings',
          region: 'Jaipur',
          image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBlYXJyaW5nc3xlbnwxfHx8fDE3NjY4MjA0ODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          showMoreInfo: false,
        },
        {
          id: 4,
          title: 'Silver Anklets',
          region: 'Odisha',
          image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWx2ZXIlMjBhbmtsZXR8ZW58MXx8fHwxNzY2ODIwNDgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          showMoreInfo: false,
        },
        {
          id: 5,
          title: 'Jadau Bangles',
          region: 'Gujarat',
          image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBiYW5nbGVzfGVufDF8fHx8MTc2NjgyMDQ4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          showMoreInfo: false,
        },
        {
          id: 6,
          title: 'Polki Maang Tikka',
          region: 'Delhi',
          image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBicmlkYWwlMjBqZXdlbHJ5fGVufDF8fHx8MTc2NjgyMDQ4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          showMoreInfo: false,
        },
        {
          id: 7,
          title: 'Tribal Accessories',
          region: 'Madhya Pradesh',
          image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmliYWwlMjBqZXdlbHJ5fGVufDF8fHx8MTc2NjgyMDQ4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          showMoreInfo: false,
        },
        {
          id: 8,
          title: 'Pearl Jewelry Set',
          region: 'Hyderabad',
          image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFybCUyMGpld2Vscnl8ZW58MXx8fHwxNzY2ODIwNDgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          showMoreInfo: false,
        },
      ]
    },
    'home-decor': {
      title: 'Home Decor',
      products: [
        {
          id: 1,
          title: 'Brass Diyas',
          region: 'Uttar Pradesh',
          image: 'https://images.unsplash.com/photo-1627811373475-0b468b06d620?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBob21lJTIwZGVjb3J8ZW58MXx8fHwxNzY2NzYwNzYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          showMoreInfo: false,
        },
        {
          id: 2,
          title: 'Wall Hangings',
          region: 'Rajasthan',
          image: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3YWxsJTIwaGFuZ2luZ3xlbnwxfHx8fDE3NjY4MjA0ODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          showMoreInfo: false,
        },
        {
          id: 3,
          title: 'Cushion Covers',
          region: 'Gujarat',
          image: 'https://images.unsplash.com/photo-1648754016717-449b9bb98ba7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWNvcmF0aXZlJTIwY3VzaGlvbiUyMGNvdmVyc3xlbnwxfHx8fDE3NjY4MjA0ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          showMoreInfo: false,
        },
        {
          id: 4,
          title: 'Wooden Artifacts',
          region: 'Kerala',
          image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBob21lJTIwZGVjb3J8ZW58MXx8fHwxNzY2ODIwNDg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          showMoreInfo: false,
        },
        {
          id: 5,
          title: 'Decorative Lamps',
          region: 'Maharashtra',
          image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWNvcmF0aXZlJTIwbGFtcHN8ZW58MXx8fHwxNzY2ODIwNDg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          showMoreInfo: false,
        },
        {
          id: 6,
          title: 'Hand-Painted Coasters',
          region: 'Jaipur',
          image: 'https://images.unsplash.com/photo-1565720690440-4b7394d0c1ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kJTIwcGFpbnRlZCUyMGNvYXN0ZXJzfGVufDF8fHx8MTc2NjgyMDQ4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          showMoreInfo: false,
        },
        {
          id: 7,
          title: 'Marble Inlay Trays',
          region: 'Agra',
          image: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJibGUlMjB0cmF5fGVufDF8fHx8MTc2NjgyMDQ4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          showMoreInfo: false,
        },
        {
          id: 8,
          title: 'Incense Holders',
          region: 'Tamil Nadu',
          image: 'https://images.unsplash.com/photo-1602145108670-d8b5f06dac1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmNlbnNlJTIwaG9sZGVyc3xlbnwxfHx8fDE3NjY4MjA0ODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          showMoreInfo: false,
        },
      ]
    },
    'pottery-ceramics': {
      title: 'Pottery & Ceramics',
      products: [
        {
          id: 1,
          title: 'Blue Pottery Vase',
          region: 'Jaipur',
          image: 'https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBwb3R0ZXJ5JTIwY2VyYW1pY3N8ZW58MXx8fHwxNzY2NzYwNzYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          showMoreInfo: false,
        },
        {
          id: 2,
          title: 'Terracotta Planters',
          region: 'West Bengal',
          image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXJyYWNvdHRhJTIwcGxhbnRlcnN8ZW58MXx8fHwxNzY2ODIwNDg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          showMoreInfo: false,
        },
        {
          id: 3,
          title: 'Ceramic Bowls Set',
          region: 'Gujarat',
          image: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwYm93bHN8ZW58MXx8fHwxNzY2ODIwNDg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          showMoreInfo: false,
        },
        {
          id: 4,
          title: 'Clay Diyas',
          region: 'Uttar Pradesh',
          image: 'https://images.unsplash.com/photo-1605811373531-e791d33a8fc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGF5JTIwZGl5YXN8ZW58MXx8fHwxNzY2ODIwNDg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          showMoreInfo: false,
        },
        {
          id: 5,
          title: 'Hand-Painted Plates',
          region: 'Rajasthan',
          image: 'https://images.unsplash.com/photo-1584993316203-e047a29e00ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kJTIwcGFpbnRlZCUyMHBsYXRlc3xlbnwxfHx8fDE3NjY4MjA0ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          showMoreInfo: false,
        },
        {
          id: 6,
          title: 'Ceramic Mugs',
          region: 'Karnataka',
          image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwbXVnc3xlbnwxfHx8fDE3NjY4MjA0ODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          showMoreInfo: false,
        },
        {
          id: 7,
          title: 'Decorative Urns',
          region: 'Tamil Nadu',
          image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWNvcmF0aXZlJTIwdXJuc3xlbnwxfHx8fDE3NjY4MjA0ODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          showMoreInfo: false,
        },
        {
          id: 8,
          title: 'Pottery Sculptures',
          region: 'Odisha',
          image: 'https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3R0ZXJ5JTIwc2N1bHB0dXJlc3xlbnwxfHx8fDE3NjY4MjA0ODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          showMoreInfo: false,
        },
      ]
    },
    'textiles-fabrics': {
      title: 'Textiles & Fabrics',
      products: [
        {
          id: 1,
          title: 'Banarasi Silk',
          region: 'Varanasi',
          image: 'https://images.unsplash.com/photo-1762764214015-d5c22646465b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB0ZXh0aWxlcyUyMGZhYnJpY3N8ZW58MXx8fHwxNzY2NzYwOTUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          showMoreInfo: false,
        },
        {
          id: 2,
          title: 'Ikat Fabric',
          region: 'Odisha',
          image: 'https://images.unsplash.com/photo-1610726138362-68cff32d4b0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpa2F0JTIwZmFicmljfGVufDF8fHx8MTc2NjgyMDQ4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          showMoreInfo: false,
        },
        {
          id: 3,
          title: 'Block Print Cotton',
          region: 'Jaipur',
          image: 'https://images.unsplash.com/photo-1588117305388-c2631a279f82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9jayUyMHByaW50JTIwZmFicmljfGVufDF8fHx8MTc2NjgyMDQ4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          showMoreInfo: false,
        },
        {
          id: 4,
          title: 'Chanderi Silk',
          region: 'Madhya Pradesh',
          image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGFuZGVyaSUyMHNpbGt8ZW58MXx8fHwxNzY2ODIwNDg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          showMoreInfo: false,
        },
        {
          id: 5,
          title: 'Khadi Cotton',
          region: 'Gujarat',
          image: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraGFkaSUyMGNvdHRvbnxlbnwxfHx8fDE3NjY4MjA0ODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          showMoreInfo: false,
        },
        {
          id: 6,
          title: 'Kantha Embroidery',
          region: 'West Bengal',
          image: 'https://images.unsplash.com/photo-1611417016571-2bc21b6c3179?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYW50aGElMjBlbWJyb2lkZXJ5fGVufDF8fHx8MTc2NjgyMDQ4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          showMoreInfo: false,
        },
        {
          id: 7,
          title: 'Paithani Saree',
          region: 'Maharashtra',
          image: 'https://images.unsplash.com/photo-1610624352376-e3ef3d5cc91f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWl0aGFuaSUyMHNhcmVlfGVufDF8fHx8MTc2NjgyMDQ4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          showMoreInfo: false,
        },
        {
          id: 8,
          title: 'Pochampally Ikat',
          region: 'Telangana',
          image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2NoYW1wYWxseSUyMGlrYXR8ZW58MXx8fHwxNzY2ODIwNDkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          showMoreInfo: false,
        },
      ]
    },
    'bags-leather': {
      title: 'Bags & Leather',
      products: [
        {
          id: 1,
          title: 'Leather Tote Bag',
          region: 'Kolkata',
          image: 'https://images.unsplash.com/photo-1647540945262-7da3bd1a3d96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBiYWdzJTIwbGVhdGhlcnxlbnwxfHx8fDE3NjY3NjA5NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          showMoreInfo: false,
        },
        {
          id: 2,
          title: 'Embroidered Clutch',
          region: 'Rajasthan',
          image: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWJyb2lkZXJlZCUyMGNsdXRjaHxlbnwxfHx8fDE3NjY4MjA0OTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          showMoreInfo: false,
        },
        {
          id: 3,
          title: 'Handwoven Sling Bag',
          region: 'Gujarat',
          image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbGluZyUyMGJhZ3xlbnwxfHx8fDE3NjY4MjA0OTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          showMoreInfo: false,
        },
        {
          id: 4,
          title: 'Leather Wallet',
          region: 'Delhi',
          image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwd2FsbGV0fGVufDF8fHx8MTc2NjgyMDQ5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          showMoreInfo: false,
        },
        {
          id: 5,
          title: 'Messenger Bag',
          region: 'Maharashtra',
          image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXNzZW5nZXIlMjBiYWd8ZW58MXx8fHwxNzY2ODIwNDkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          showMoreInfo: false,
        },
        {
          id: 6,
          title: 'Laptop Bag',
          region: 'Bangalore',
          image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBiYWd8ZW58MXx8fHwxNzY2ODIwNDkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          showMoreInfo: false,
        },
        {
          id: 7,
          title: 'Potli Bag',
          region: 'Jaipur',
          image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3RsaSUyMGJhZ3xlbnwxfHx8fDE3NjY4MjA0OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          showMoreInfo: false,
        },
        {
          id: 8,
          title: 'Travel Backpack',
          region: 'Chennai',
          image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHx0cmF2ZWwlMjBiYWNrcGFja3xlbnwxfHx8fDE3NjY4MjA0OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          showMoreInfo: false,
        },
      ]
    },
    'footwear': {
      title: 'Footwear',
      products: [
        {
          id: 1,
          title: 'Kolhapuri Chappals',
          region: 'Maharashtra',
          image: 'https://images.unsplash.com/photo-1670776955198-9055d8e631a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBmb290d2VhciUyMHRyYWRpdGlvbmFsfGVufDF8fHx8MTc2Njc2MDk1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          showMoreInfo: false,
        },
        {
          id: 2,
          title: 'Mojari Juttis',
          region: 'Rajasthan',
          image: 'https://images.unsplash.com/photo-1560343090-f0409e92791a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2phcmklMjBqdXR0aXN8ZW58MXx8fHwxNzY2ODIwNDkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          showMoreInfo: false,
        },
        {
          id: 3,
          title: 'Embroidered Slippers',
          region: 'Gujarat',
          image: 'https://images.unsplash.com/photo-1603487742131-4160ec999306?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWJyb2lkZXJlZCUyMHNsaXBwZXJzfGVufDF8fHx8MTc2NjgyMDQ5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          showMoreInfo: false,
        },
        {
          id: 4,
          title: 'Leather Sandals',
          region: 'Karnataka',
          image: 'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwc2FuZGFsc3xlbnwxfHx8fDE3NjY4MjA0OTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          showMoreInfo: false,
        },
        {
          id: 5,
          title: 'Paduka (Wooden)',
          region: 'Kerala',
          image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBzYW5kYWxzfGVufDF8fHx8MTc2NjgyMDQ5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          showMoreInfo: false,
        },
        {
          id: 6,
          title: 'Casual Loafers',
          region: 'Delhi',
          image: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2FmZXJzfGVufDF8fHx8MTc2NjgyMDQ5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          showMoreInfo: false,
        },
        {
          id: 7,
          title: 'Handcrafted Boots',
          region: 'Himachal Pradesh',
          image: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwYm9vdHN8ZW58MXx8fHwxNzY2ODIwNDk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          showMoreInfo: false,
        },
        {
          id: 8,
          title: 'Traditional Nagras',
          region: 'Punjab',
          image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYWdyYSUyMHNob2VzfGVufDF8fHx8MTc2NjgyMDQ5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          showMoreInfo: false,
        },
      ]
    },
  };

  // Get category data or use default
  const currentCategory = categoryName ? categoryData[categoryName] : null;
  const categoryTitle = currentCategory?.title || categoryName || 'Products';
  const products = currentCategory?.products || [];

  return (
    <div className="min-h-screen bg-[#FFFEF8]">
      <Header />
      
      <main className="bg-[#FFFEF8]">
        {/* Story Section removed - keeping only product cards */}

        {/* Different Styles Section */}
        <section className="container mx-auto px-6 py-8">
          <h2 className="text-2xl text-center mb-8">Different Styles of {categoryTitle}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                title={product.title}
                region={product.region}
                image={product.image}
                showMoreInfo={product.showMoreInfo}
              />
            ))}
            
            {/* Empty Placeholder Cards */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200">
              <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/60 flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-gray-500 text-sm">Coming Soon</p>
                </div>
              </div>
              <div className="p-4">
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-gray-100 rounded w-1/2"></div>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200">
              <div className="h-64 bg-gradient-to-br from-amber-50 to-orange-100 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/80 flex items-center justify-center">
                    <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <p className="text-amber-800 text-sm font-medium">New Collection</p>
                </div>
              </div>
              <div className="p-4">
                <div className="h-4 bg-amber-100 rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-amber-50 rounded w-1/2"></div>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200">
              <div className="h-64 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/80 flex items-center justify-center">
                    <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <p className="text-indigo-800 text-sm font-medium">Limited Edition</p>
                </div>
              </div>
              <div className="p-4">
                <div className="h-4 bg-indigo-100 rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-indigo-50 rounded w-1/2"></div>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200">
              <div className="h-64 bg-gradient-to-br from-rose-50 to-pink-100 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/80 flex items-center justify-center">
                    <svg className="w-8 h-8 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <p className="text-rose-800 text-sm font-medium">Featured</p>
                </div>
              </div>
              <div className="p-4">
                <div className="h-4 bg-rose-100 rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-rose-50 rounded w-1/2"></div>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200">
              <div className="h-64 bg-gradient-to-br from-emerald-50 to-green-100 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/80 flex items-center justify-center">
                    <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-emerald-800 text-sm font-medium">Pre-Order</p>
                </div>
              </div>
              <div className="p-4">
                <div className="h-4 bg-emerald-100 rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-emerald-50 rounded w-1/2"></div>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200">
              <div className="h-64 bg-gradient-to-br from-purple-50 to-violet-100 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/80 flex items-center justify-center">
                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <p className="text-purple-800 text-sm font-medium">Exclusive</p>
                </div>
              </div>
              <div className="p-4">
                <div className="h-4 bg-purple-100 rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-purple-50 rounded w-1/2"></div>
              </div>
            </div>
          </div>
        </section>

        {/* More Section Placeholder */}
        <section className="container mx-auto px-6 py-12">
          <div className="text-center">
            <button className="px-8 py-3 bg-gray-900 text-white hover:bg-gray-800 transition-colors">
              Load More
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}