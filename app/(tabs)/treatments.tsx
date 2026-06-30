import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const C = {
  bg: '#271024',
  bgCard: '#341530',
  gold: '#e3ae72',
  goldDim: '#c8922a',
  white: '#ffffff',
  muted: 'rgba(255,255,255,0.55)',
};

const TREATMENTS = [
  { id: '1', title: 'Basic Botox', price: 'From $11.00', icon: '✦' },
  { id: '2', title: 'Advanced Botox', price: 'From $13.00', icon: '💉' },
  { id: '3', title: 'Lip Fillers', price: 'From $11.00', icon: '💋' },
  { id: '4', title: 'IV Hydration', price: 'From $150', icon: '💧' },
  { id: '5', title: 'Peptide Therapy', price: 'From $200', icon: '⚡' },
  { id: '6', title: 'PRF Therapy', price: 'From $300', icon: '🔬' },
  { id: '7', title: 'PRP Therapy', price: 'From $350', icon: '✨' },
  { id: '8', title: 'Microneedling', price: 'From $350', icon: '⚙️' },
];

export default function Treatments() {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { backgroundColor: C.bg }]}>
      <ScrollView contentContainerStyle={{ paddingBottom: 24 }}>
        <View style={[styles.header, { paddingTop: insets.top + 20 }]}>
          <Text style={styles.headerTitle}>Treatments</Text>
          <Text style={styles.headerSubtitle}>Our services</Text>
        </View>

        <View style={styles.list}>
          {TREATMENTS.map((treatment) => (
            <TouchableOpacity key={treatment.id} style={styles.item}>
              <Text style={styles.icon}>{treatment.icon}</Text>
              <View style={styles.content}>
                <Text style={styles.title}>{treatment.title}</Text>
                <Text style={styles.price}>{treatment.price}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { paddingHorizontal: 24, paddingBottom: 24 },
  headerTitle: { color: C.white, fontSize: 28, fontWeight: '700', marginBottom: 4 },
  headerSubtitle: { color: C.muted, fontSize: 14 },
  list: { paddingHorizontal: 24 },
  item: {
    backgroundColor: C.bgCard,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: { fontSize: 24, marginRight: 16 },
  content: { flex: 1 },
  title: { color: C.gold, fontSize: 16, fontWeight: '600', marginBottom: 4 },
  price: { color: C.muted, fontSize: 13 },
});