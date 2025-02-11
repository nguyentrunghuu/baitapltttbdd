import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const notifications = [
  {
    id: '1',
    title: 'Bước 1 Xác định nhu cầu khách hàng',
    description: 'Vũ Văn Hoàng sắp đến hạn lúc 01/08/2020 9:00',
    timestamp: '20/08/2020, 06:00',
  },
  {
    id: '2',
    title: 'Bạn có khách hàng mới!',
    description: 'Chúc mừng bạn, bạn có khách hàng mới. Hãy mau chóng liên lạc ngay.',
    timestamp: '20/08/2020, 06:00',
  },
  // Add other notifications here...
];

const NotificationItem = ({ title, description, timestamp }) => (
  <View style={styles.notificationItem}>
    <Text style={styles.notificationTitle}>{title}</Text>
    <Text style={styles.notificationDescription}>{description}</Text>
    <Text style={styles.notificationTimestamp}>{timestamp}</Text>
  </View>
);

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Thông báo</Text>
      <FlatList
        data={notifications}
        renderItem={({ item }) => (
          <NotificationItem
            title={item.title}
            description={item.description}
            timestamp={item.timestamp}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  notificationItem: {
    marginBottom: 20,
  },
  notificationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  notificationDescription: {
    fontSize: 16,
  },
  notificationTimestamp: {
    fontSize: 14,
    color: '#666',
  },
});
