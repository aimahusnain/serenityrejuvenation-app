import React, { useEffect, useRef, useState } from 'react';
import {
  Animated,
  Image,
  ImageSourcePropType,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// ─── Brand tokens ─────────────────────────────────────────────────────────────
const C = {
  bg:         '#271024',   // deep plum
  bgCard:     '#341530',   // card surface
  bgIconTile: '#3f1a3a',   // icon tile
  gold:       '#e3ae72',   // primary accent / gold
  goldDim:    '#c8922a',   // darker gold for borders
  white:      '#ffffff',
  muted:      'rgba(255,255,255,0.55)',
  tabInactive:'#5a3060',
};

// ─── Data ────────────────────────────────────────────────────────────────────

interface Service {
  id: string;
  icon: string;
  title: string;
  price?: string;
  description: string;
  features: string[];
}

const SERVICES: Service[] = [
  {
    id: '1',
    icon: '✦',
    title: 'Basic Botox',
    price: 'From $11.00',
    description: 'Refresh your appearance with our Basic Botox treatment designed to soften fine lines and create a naturally refreshed look.',
    features: ['Forehead lines', 'Frown lines', "Crow's feet", 'Subtle enhancement'],
  },
  {
    id: '2',
    icon: '💉',
    title: 'Advanced Botox',
    price: 'From $13.00',
    description: 'Our Advanced Botox treatment provides a more comprehensive facial rejuvenation approach for enhanced smoothing and contouring results.',
    features: [],
  },
  {
    id: '3',
    icon: '💋',
    title: 'Fillers',
    price: 'From $11.00',
    description: 'Enhance your natural beauty with customized lip enhancement treatments designed to add volume, shape, hydration, and definition.',
    features: ['Lip hydration', 'Volume enhancement', 'Defining borders', 'Improving symmetry'],
  },
  {
    id: '4',
    icon: '💧',
    title: 'IV Hydration Therapy',
    price: undefined,
    description: 'Restore, replenish, and recharge with IV Hydration Therapy. Our wellness infusions deliver hydration, vitamins, and nutrients directly into the bloodstream.',
    features: ['Hydration restoration', 'Energy & wellness support', 'Recovery & performance', 'Immune health', 'Beauty & skin wellness'],
  },
  {
    id: '5',
    icon: '⚡',
    title: 'Peptide Therapy',
    price: undefined,
    description: 'Peptide Therapy supports wellness optimization through targeted amino acid chains designed to promote cellular communication and overall health goals.',
    features: ['Energy optimization', 'Recovery support', 'Healthy aging', 'Metabolic wellness', 'Performance enhancement'],
  },
  {
    id: '6',
    icon: '🌿',
    title: 'GLP-1 Wellness Program',
    price: undefined,
    description: 'Our GLP-1 wellness program provides personalized support designed to assist clients on their weight management and wellness journey.',
    features: ['Weight management support', 'Appetite regulation assistance', 'Lifestyle coaching', 'Wellness monitoring', 'Long-term success strategies'],
  },
  {
    id: '7',
    icon: '🔬',
    title: 'PRF Therapy',
    price: undefined,
    description: 'A concentrated regenerative treatment supporting natural rejuvenation.',
    features: ['Under-eye rejuvenation', 'Texture improvement', 'Hair restoration', 'Natural enhancement'],
  },
  {
    id: '8',
    icon: '✨',
    title: 'PRP Therapy',
    price: undefined,
    description: 'Natural regenerative treatment supporting rejuvenation and healthier skin.',
    features: ['Skin renewal', 'Collagen production', 'Hair restoration', 'Improved radiance'],
  },
  {
    id: '9',
    icon: '🌸',
    title: 'Microneedling with Sculptra®',
    price: 'From $600.00',
    description: 'Restore volume and improve firmness with long-term collagen stimulation.',
    features: ['Volume restoration', 'Improved firmness', 'Texture refinement', 'Youthful appearance'],
  },
  {
    id: '10',
    icon: '💫',
    title: 'Microneedling with PRF',
    price: 'From $600.00',
    description: 'Advanced regenerative treatment for long-lasting rejuvenation and healing.',
    features: ['Skin tightening', 'Under-eye rejuvenation', 'Improved elasticity', 'Collagen support'],
  },
  {
    id: '11',
    icon: '🌟',
    title: 'Microneedling with PRP',
    price: 'From $600.00',
    description: "Enhance results using your body's own growth factors for natural skin renewal.",
    features: ['Enhanced collagen', 'Faster recovery', 'Improved texture', 'Natural glow'],
  },
  {
    id: '12',
    icon: '⚙️',
    title: 'Microneedling',
    price: 'From $350.00',
    description: "Stimulate your skin's natural renewal process with advanced collagen induction treatment.",
    features: ['Fine lines & wrinkles', 'Acne scars', 'Enlarged pores', 'Skin rejuvenation'],
  },
];

const FILTER_TABS = ['All', 'Botox', 'Fillers', 'IV Therapy', 'Skin'];

// ─── Sub-components ──────────────────────────────────────────────────────────

const HeroBanner = ({
  images,
  delay,
  onExplorePress,
}: {
  images: ImageSourcePropType[];
  delay: number;
  onExplorePress?: () => void;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1 % images.length);
  const currentOpacity = useRef(new Animated.Value(1)).current;
  const nextOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (images.length < 2) return;
    const interval = setInterval(() => {
      Animated.parallel([
        Animated.timing(currentOpacity, { toValue: 0, duration: 1000, useNativeDriver: true }),
        Animated.timing(nextOpacity,    { toValue: 1, duration: 1000, useNativeDriver: true }),
      ]).start(() => {
        const newCurrent = (currentIndex + 1) % images.length;
        const newNext    = (newCurrent + 1)   % images.length;
        setCurrentIndex(newCurrent);
        setNextIndex(newNext);
        currentOpacity.setValue(1);
        nextOpacity.setValue(0);
      });
    }, delay);
    return () => clearInterval(interval);
  }, [currentIndex, nextIndex, delay, images.length]);

  return (
    <View style={{
      marginHorizontal: 16,
      borderRadius: 20,
      overflow: 'hidden',
      height: 200,
      marginBottom: 24,
    }}>
      <Animated.View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: currentOpacity }}>
        <Image source={images[currentIndex]} style={{ width: '100%', height: '100%' }} resizeMode="cover" />
      </Animated.View>
      <Animated.View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: nextOpacity }}>
        <Image source={images[nextIndex]} style={{ width: '100%', height: '100%' }} resizeMode="cover" />
      </Animated.View>

      {/* Dark overlay */}
      <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(10,4,14,0.50)' }} />

      {/* Content */}
      <View style={{ position: 'absolute', bottom: 18, left: 18, right: 18 }}>
        <Text style={{ color: C.white, fontSize: 24, fontWeight: '700', lineHeight: 30, marginBottom: 14 }}>
          Advanced{'\n'}Rejuvenation Awaits
        </Text>
        <TouchableOpacity
          onPress={onExplorePress}
          activeOpacity={0.85}
          style={{
            alignSelf: 'flex-start',
            backgroundColor: C.gold,
            borderRadius: 30,
            paddingHorizontal: 20,
            paddingVertical: 9,
          }}>
          <Text style={{ color: C.bg, fontSize: 13, fontWeight: '700' }}>
            Explore Treatments
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const FilterTabs = ({
  tabs,
  selected,
  onSelect,
}: {
  tabs: string[];
  selected: string;
  onSelect: (t: string) => void;
}) => (
  <ScrollView
    horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={{ paddingHorizontal: 16, gap: 8, paddingBottom: 20 }}>
    {tabs.map(tab => {
      const active = tab === selected;
      return (
        <TouchableOpacity
          key={tab}
          onPress={() => onSelect(tab)}
          activeOpacity={0.8}
          style={{
            borderRadius: 30,
            paddingHorizontal: 18,
            paddingVertical: 8,
            backgroundColor: active ? C.gold : 'transparent',
            borderWidth: 1.5,
            borderColor: active ? C.gold : C.goldDim,
          }}>
          <Text style={{
            color: active ? C.bg : C.gold,
            fontSize: 13,
            fontWeight: active ? '700' : '500',
          }}>
            {tab}
          </Text>
        </TouchableOpacity>
      );
    })}
  </ScrollView>
);

const ServiceCard = ({
  service,
  onBookPress,
}: {
  service: Service;
  onBookPress?: (s: Service) => void;
}) => (
  <View style={{
    backgroundColor: C.bgCard,
    borderRadius: 16,
    padding: 14,
    margin: 6,
    flex: 1,
  }}>
    {/* Icon tile */}
    <View style={{
      width: '100%',
      height: 90,
      borderRadius: 12,
      backgroundColor: C.bgIconTile,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 12,
    }}>
      <Text style={{ fontSize: 30 }}>{service.icon}</Text>
    </View>

    <Text style={{ color: C.gold, fontSize: 14, fontWeight: '700', marginBottom: 4 }}>
      {service.title}
    </Text>

    <Text style={{ color: C.muted, fontSize: 11, lineHeight: 16, marginBottom: 10 }} numberOfLines={3}>
      {service.description}
    </Text>

    {service.features.slice(0, 3).map(f => (
      <View key={f} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 3 }}>
        <View style={{ width: 5, height: 5, borderRadius: 3, backgroundColor: C.gold, marginRight: 6 }} />
        <Text style={{ color: C.muted, fontSize: 10 }}>{f}</Text>
      </View>
    ))}

    <View style={{ marginTop: 10, gap: 8 }}>
      {service.price && (
        <TouchableOpacity
          activeOpacity={0.85}
          style={{
            alignSelf: 'flex-start',
            borderWidth: 1.5,
            borderColor: C.goldDim,
            borderRadius: 20,
            paddingHorizontal: 12,
            paddingVertical: 5,
          }}>
          <Text style={{ color: C.gold, fontSize: 11, fontWeight: '600' }}>{service.price}</Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity
        onPress={() => onBookPress?.(service)}
        activeOpacity={0.85}
        style={{
          alignSelf: 'flex-start',
          backgroundColor: C.gold,
          borderRadius: 20,
          paddingHorizontal: 14,
          paddingVertical: 6,
        }}>
        <Text style={{ color: C.bg, fontSize: 11, fontWeight: '700' }}>Book Now</Text>
      </TouchableOpacity>
    </View>
  </View>
);

// ─── Main Component ───────────────────────────────────────────────────────────

interface HeroSectionProps {
  images?: ImageSourcePropType[];
  delay?: number;
  userName?: string;
  onExplorePress?: () => void;
  onProfilePress?: () => void;
  onBookPress?: (service: Service) => void;
}

export const Index: React.FC<HeroSectionProps> = ({
  images = [
    require('../../assets/images/hero/hero image 3.jpg'),
    require('../../assets/images/hero/hero image 2.png'),
    require('../../assets/images/hero/hero image 4.jpg'),
    require('../../assets/images/hero/hero image 5.jpeg'),
    require('../../assets/images/hero/hero image 6.jpg'),
    require('../../assets/images/hero/hero image 1.jpg'),
  ],
  delay = 5000,
  userName = 'Muhammad Husnain',
  onExplorePress,
  onProfilePress,
  onBookPress,
}) => {
  const insets = useSafeAreaInsets();
  const [activeFilter, setActiveFilter] = useState('All');

  return (
    <View style={{ flex: 1, backgroundColor: C.bg }}>

      <ScrollView
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 24 }}>

        {/* ── Header — respects both Android status bar AND iOS notch ── */}
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          paddingHorizontal: 16,
          paddingTop: insets.top + 16,
          paddingBottom: 20,
        }}>
          <View style={{ flex: 1, paddingRight: 12 }}>
            <Text style={{
              color: C.gold,
              fontSize: 12,
              fontWeight: '500',
              letterSpacing: 3,
              textTransform: 'uppercase',
              marginBottom: 2,
            }}>
              Serenity Rejuvenation
            </Text>
            <Text style={{
              color: C.white,
              fontSize: 22,
              fontWeight: '700',
              letterSpacing: 0.2,
            }}>
              Welcome Back, {userName} ✦
            </Text>
            <Text style={{ color: C.muted, fontSize: 12, marginTop: 3 }}>
              Your personalized rejuvenation journey
            </Text>
          </View>

          <TouchableOpacity
            onPress={onProfilePress}
            style={{
              width: 44,
              height: 44,
              borderRadius: 22,
              backgroundColor: C.bgCard,
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 1,
              borderColor: C.goldDim,
            }}>
            <Text style={{ fontSize: 18, color: C.gold }}>👤</Text>
          </TouchableOpacity>
        </View>

        {/* ── Hero Banner ── */}
        <HeroBanner
          images={images}
          delay={delay}
          onExplorePress={onExplorePress}
        />

        {/* ── Section title ── */}
        <View style={{ paddingHorizontal: 16, marginBottom: 14 }}>
          <Text style={{ color: C.gold, fontSize: 18, fontWeight: '700', letterSpacing: 0.3 }}>
            Advanced Treatments
          </Text>
          <View style={{ width: 40, height: 2, backgroundColor: C.gold, borderRadius: 1, marginTop: 6 }} />
        </View>

        {/* ── Filter Tabs ── */}
        <FilterTabs
          tabs={FILTER_TABS}
          selected={activeFilter}
          onSelect={setActiveFilter}
        />

        {/* ── Service Grid ── */}
        <View style={{ paddingHorizontal: 10 }}>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            {SERVICES.map(service => (
              <View key={service.id} style={{ width: '50%' }}>
                <ServiceCard service={service} onBookPress={onBookPress} />
              </View>
            ))}
          </View>
        </View>

      </ScrollView>
    </View>
  );
};

export default Index;