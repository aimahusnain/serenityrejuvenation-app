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

const BOOKINGS = [
  { id: '1', treatment: 'Basic Botox', date: 'July 15, 2026', time: '10:00 AM', status: 'Confirmed' },
  { id: '2', treatment: 'IV Hydration', date: 'July 20, 2026', time: '2:30 PM', status: 'Pending' },
];

export default function Bookings() {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { backgroundColor: C.bg }]}>
      <ScrollView contentContainerStyle={{ paddingBottom: 24 }}>
        <View style={[styles.header, { paddingTop: insets.top + 20 }]}>
          <Text style={styles.headerTitle}>Bookings</Text>
          <Text style={styles.headerSubtitle}>Your appointments</Text>
        </View>

        {BOOKINGS.length === 0 ? (
          <View style={styles.empty}>
            <Text style={styles.emptyText}>No upcoming bookings</Text>
          </View>
        ) : (
          <View style={styles.list}>
            {BOOKINGS.map((booking) => (
              <View key={booking.id} style={styles.item}>
                <View style={styles.content}>
                  <Text style={styles.title}>{booking.treatment}</Text>
                  <Text style={styles.detail}>{booking.date}</Text>
                  <Text style={styles.detail}>{booking.time}</Text>
                </View>
                <View style={styles.status}>
                  <Text style={styles.statusText}>{booking.status}</Text>
                </View>
              </View>
            ))}
          </View>
        )}
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
    justifyContent: 'space-between',
  },
  content: { flex: 1 },
  title: { color: C.gold, fontSize: 16, fontWeight: '600', marginBottom: 4 },
  detail: { color: C.muted, fontSize: 13 },
  status: { alignItems: 'center' },
  statusText: { color: C.white, fontSize: 12, fontWeight: '500' },
  empty: { alignItems: 'center', paddingVertical: 40 },
  emptyText: { color: C.muted, fontSize: 16 },
});