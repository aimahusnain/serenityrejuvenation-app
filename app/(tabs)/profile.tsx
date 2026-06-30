import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const C = {
  bg: '#271024',
  bgCard: '#341530',
  gold: '#e3ae72',
  white: '#ffffff',
  muted: 'rgba(255,255,255,0.55)',
};

export default function Profile() {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { backgroundColor: C.bg }]}>
      <ScrollView contentContainerStyle={{ paddingBottom: 24 }}>
        <View style={[styles.header, { paddingTop: insets.top + 20 }]}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>MH</Text>
          </View>
          <Text style={styles.name}>Muhammad Husnain</Text>
          <Text style={styles.email}>Client</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Account</Text>
          <View style={styles.item}>
            <Text style={styles.itemText}>My Bookings</Text>
            <Text style={styles.arrow}>→</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.itemText}>Settings</Text>
            <Text style={styles.arrow}>→</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.itemText}>Help</Text>
            <Text style={styles.arrow}>→</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Info</Text>
          <View style={styles.item}>
            <Text style={styles.itemText}>Version 1.0.0</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { alignItems: 'center', paddingHorizontal: 24, paddingBottom: 24 },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: C.gold,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  avatarText: { color: C.bg, fontSize: 28, fontWeight: '700' },
  name: { color: C.white, fontSize: 24, fontWeight: '700', marginBottom: 4 },
  email: { color: C.muted, fontSize: 14 },
  section: { paddingHorizontal: 24, marginBottom: 24 },
  sectionTitle: { color: C.gold, fontSize: 16, fontWeight: '600', marginBottom: 12 },
  item: {
    backgroundColor: C.bgCard,
    borderRadius: 12,
    padding: 16,
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemText: { color: C.white, fontSize: 15 },
  arrow: { color: C.gold, fontSize: 16 },
});