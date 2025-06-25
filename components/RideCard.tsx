import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BookRide } from '../types/api';

interface RideCardProps {
  ride: BookRide;
  onDelete: (id: number) => void;
  onView: (ride: BookRide) => void;
}

export function RideCard({ ride, onDelete, onView }: RideCardProps) {
  const handleDelete = () => {
    Alert.alert(
      'Delete Ride',
      `Are you sure you want to delete the ride for ${ride.your_name}?`,
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Delete', 
          style: 'destructive',
          onPress: () => onDelete(ride.id)
        },
      ]
    );
  };

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{ride.your_name}</Text>
          <Text style={styles.rideType}>{ride.ride_type}</Text>
        </View>
        <View style={styles.actions}>
          <TouchableOpacity 
            style={styles.actionButton}
            onPress={() => onView(ride)}
          >
            <Ionicons name="eye-outline" size={20} color="#007AFF" />
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.actionButton, styles.deleteButton]}
            onPress={handleDelete}
          >
            <Ionicons name="trash-outline" size={20} color="#FF3B30" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.locationContainer}>
        <View style={styles.locationRow}>
          <Ionicons name="location" size={16} color="#34C759" />
          <Text style={styles.locationText} numberOfLines={1}>
            {ride.pickup_location}
          </Text>
        </View>
        <View style={styles.locationRow}>
          <Ionicons name="location" size={16} color="#FF3B30" />
          <Text style={styles.locationText} numberOfLines={1}>
            {ride.dropoff_location}
          </Text>
        </View>
      </View>

      <View style={styles.detailsContainer}>
        <View style={styles.detailItem}>
          <Ionicons name="calendar-outline" size={16} color="#8E8E93" />
          <Text style={styles.detailText}>{ride.date}</Text>
        </View>
        <View style={styles.detailItem}>
          <Ionicons name="time-outline" size={16} color="#8E8E93" />
          <Text style={styles.detailText}>{ride.time}</Text>
        </View>
        <View style={styles.detailItem}>
          <Ionicons name="people-outline" size={16} color="#8E8E93" />
          <Text style={styles.detailText}>{ride.number_of_passengers}</Text>
        </View>
        <View style={styles.detailItem}>
          <Ionicons name="bag-outline" size={16} color="#8E8E93" />
          <Text style={styles.detailText}>{ride.number_of_luggage}</Text>
        </View>
      </View>

      <View style={styles.contactContainer}>
        <Text style={styles.contactText}>{ride.email}</Text>
        <Text style={styles.contactText}>{ride.phone_number}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginHorizontal: 20,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  nameContainer: {
    flex: 1,
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1C1C1E',
    marginBottom: 4,
  },
  rideType: {
    fontSize: 14,
    fontWeight: '600',
    color: '#007AFF',
    backgroundColor: '#E3F2FD',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  actions: {
    flexDirection: 'row',
    gap: 8,
  },
  actionButton: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#F2F2F7',
  },
  deleteButton: {
    backgroundColor: '#FFEBEE',
  },
  locationContainer: {
    marginBottom: 16,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  locationText: {
    fontSize: 16,
    color: '#1C1C1E',
    marginLeft: 12,
    flex: 1,
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#F2F2F7',
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  detailText: {
    fontSize: 14,
    color: '#8E8E93',
    fontWeight: '500',
  },
  contactContainer: {
    gap: 4,
  },
  contactText: {
    fontSize: 14,
    color: '#8E8E93',
  },
});