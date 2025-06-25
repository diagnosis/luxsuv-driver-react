import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BookRide } from '../types/api';

interface RideDetailModalProps {
  visible: boolean;
  ride: BookRide | null;
  onClose: () => void;
}

export function RideDetailModal({ visible, ride, onClose }: RideDetailModalProps) {
  if (!ride) return null;

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Ride Details</Text>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Ionicons name="close" size={24} color="#1C1C1E" />
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Passenger Information</Text>
            <View style={styles.infoCard}>
              <Text style={styles.passengerName}>{ride.your_name}</Text>
              <Text style={styles.rideType}>{ride.ride_type}</Text>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Contact Information</Text>
            <View style={styles.infoCard}>
              <View style={styles.infoRow}>
                <Ionicons name="mail-outline" size={20} color="#007AFF" />
                <Text style={styles.infoText}>{ride.email}</Text>
              </View>
              <View style={styles.infoRow}>
                <Ionicons name="call-outline" size={20} color="#007AFF" />
                <Text style={styles.infoText}>{ride.phone_number}</Text>
              </View>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Trip Details</Text>
            <View style={styles.infoCard}>
              <View style={styles.infoRow}>
                <Ionicons name="calendar-outline" size={20} color="#34C759" />
                <Text style={styles.infoText}>{ride.date}</Text>
              </View>
              <View style={styles.infoRow}>
                <Ionicons name="time-outline" size={20} color="#34C759" />
                <Text style={styles.infoText}>{ride.time}</Text>
              </View>
              <View style={styles.infoRow}>
                <Ionicons name="people-outline" size={20} color="#FF9500" />
                <Text style={styles.infoText}>{ride.number_of_passengers} passengers</Text>
              </View>
              <View style={styles.infoRow}>
                <Ionicons name="bag-outline" size={20} color="#FF9500" />
                <Text style={styles.infoText}>{ride.number_of_luggage} luggage</Text>
              </View>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Locations</Text>
            <View style={styles.infoCard}>
              <View style={styles.locationContainer}>
                <View style={styles.locationHeader}>
                  <Ionicons name="location" size={20} color="#34C759" />
                  <Text style={styles.locationLabel}>Pickup Location</Text>
                </View>
                <Text style={styles.locationAddress}>{ride.pickup_location}</Text>
              </View>
              
              <View style={styles.locationDivider} />
              
              <View style={styles.locationContainer}>
                <View style={styles.locationHeader}>
                  <Ionicons name="location" size={20} color="#FF3B30" />
                  <Text style={styles.locationLabel}>Dropoff Location</Text>
                </View>
                <Text style={styles.locationAddress}>{ride.dropoff_location}</Text>
              </View>
            </View>
          </View>

          {ride.additional_notes && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Additional Notes</Text>
              <View style={styles.infoCard}>
                <View style={styles.infoRow}>
                  <Ionicons name="document-text-outline" size={20} color="#8E8E93" />
                  <Text style={styles.notesText}>{ride.additional_notes}</Text>
                </View>
              </View>
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F7',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5EA',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1C1C1E',
  },
  closeButton: {
    padding: 4,
  },
  content: {
    flex: 1,
    paddingVertical: 20,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1C1C1E',
    marginBottom: 12,
    paddingHorizontal: 20,
  },
  infoCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  passengerName: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1C1C1E',
    marginBottom: 8,
  },
  rideType: {
    fontSize: 16,
    fontWeight: '600',
    color: '#007AFF',
    backgroundColor: '#E3F2FD',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 16,
    alignSelf: 'flex-start',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  infoText: {
    fontSize: 16,
    color: '#1C1C1E',
    marginLeft: 16,
    flex: 1,
  },
  locationContainer: {
    marginBottom: 16,
  },
  locationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  locationLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1C1C1E',
    marginLeft: 12,
  },
  locationAddress: {
    fontSize: 16,
    color: '#8E8E93',
    marginLeft: 32,
    lineHeight: 22,
  },
  locationDivider: {
    height: 1,
    backgroundColor: '#E5E5EA',
    marginVertical: 16,
  },
  notesText: {
    fontSize: 16,
    color: '#1C1C1E',
    marginLeft: 16,
    flex: 1,
    lineHeight: 22,
  },
});